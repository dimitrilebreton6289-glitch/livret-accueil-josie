"use client";

import { useEffect, useState } from "react";
import { HOSTAWAY } from "@/data/hostaway";

/**
 * Livret connecté : le voyageur arrive avec un lien personnel
 * (…/fr/<logement>?r=<réservation Hostaway>&c=<n° de réservation plateforme>).
 * On garde r et c dans le navigateur (par logement) pour les pages suivantes,
 * puis on interroge l'App Josie équipes, qui vérifie le séjour auprès de
 * Hostaway. Sans lien valable, rien ne s'affiche : le livret reste le même.
 */

export const API_LIVRET =
  process.env.NEXT_PUBLIC_API_LIVRET ?? "https://app-m-nage.vercel.app/api/livret";

export type SejourInfo = {
  listingId: string;
  arrivee: string;
  depart: string;
  heureArrivee: number | null;
  heureDepart: number | null;
  canal: string | null;
  pret: boolean | null;
  codes: string | null;
  etatDonne: boolean;
  avisDonne: boolean;
  departFait?: boolean;
};

export type Sejour = { r: string; c: string; info: SejourInfo; aujourdhui: string };

const cleStockage = (livret: string) => `josie-sejour-${livret}`;

/** Date du jour à Paris (AAAA-MM-JJ). */
export function aujourdhuiParis(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/** Lit r et c dans l'adresse (puis les retire de l'adresse) ou dans le navigateur. */
export function lireIdentifiants(livret: string): { r: string; c: string } | null {
  try {
    const url = new URL(window.location.href);
    const r = url.searchParams.get("r");
    const c = url.searchParams.get("c");
    if (r && c) {
      localStorage.setItem(cleStockage(livret), JSON.stringify({ r, c }));
      url.searchParams.delete("r");
      url.searchParams.delete("c");
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      return { r, c };
    }
    const brut = localStorage.getItem(cleStockage(livret));
    if (brut) {
      const v = JSON.parse(brut);
      if (typeof v?.r === "string" && typeof v?.c === "string") return v;
    }
  } catch {
    // navigation privée, stockage bloqué… : on continue sans séjour
  }
  return null;
}

const memo = new Map<string, Promise<SejourInfo | null>>();

export function chargerInfo(r: string, c: string, forcer = false): Promise<SejourInfo | null> {
  const k = `${r}|${c}`;
  if (forcer) memo.delete(k);
  if (!memo.has(k)) {
    memo.set(
      k,
      fetch(`${API_LIVRET}/sejour?r=${encodeURIComponent(r)}&c=${encodeURIComponent(c)}`, {
        cache: "no-store",
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((j) => (j?.ok ? (j as SejourInfo) : null))
        .catch(() => null),
    );
  }
  return memo.get(k)!;
}

/** Séjour en cours pour ce livret (null tant qu'il n'y en a pas). */
export function useSejour(livret: string): [Sejour | null, () => void] {
  const [sejour, setSejour] = useState<Sejour | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const ids = lireIdentifiants(livret);
    if (!ids) return;
    let actif = true;
    chargerInfo(ids.r, ids.c, version > 0).then((info) => {
      if (!actif || !info) return;
      // Le lien doit correspondre à ce logement.
      if (!(HOSTAWAY[livret] ?? []).includes(String(info.listingId))) return;
      setSejour({ ...ids, info, aujourdhui: aujourdhuiParis() });
    });
    return () => {
      actif = false;
    };
  }, [livret, version]);

  return [sejour, () => setVersion((v) => v + 1)];
}

/** Envoie un retour (état à l'arrivée ou avis). */
export async function envoyerRetour(
  s: Sejour,
  champs: { type: "etat" | "avis" | "depart"; toutVaBien?: boolean; note?: number; message?: string; photo?: Blob | null },
): Promise<boolean> {
  const f = new FormData();
  f.set("r", s.r);
  f.set("c", s.c);
  f.set("type", champs.type);
  if (champs.toutVaBien !== undefined) f.set("toutVaBien", champs.toutVaBien ? "1" : "0");
  if (champs.note) f.set("note", String(champs.note));
  if (champs.message) f.set("message", champs.message);
  if (champs.photo) f.set("photo", champs.photo, "photo.jpg");
  try {
    const res = await fetch(`${API_LIVRET}/retour`, { method: "POST", body: f });
    return res.ok;
  } catch {
    return false;
  }
}

/** Réduit une photo (max 1600 px, JPEG) avant l'envoi. */
export async function reduirePhoto(fichier: File): Promise<Blob> {
  try {
    const bmp = await createImageBitmap(fichier);
    const echelle = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * echelle);
    canvas.height = Math.round(bmp.height * echelle);
    canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((ok) => canvas.toBlob(ok, "image/jpeg", 0.8));
    return blob ?? fichier;
  } catch {
    return fichier;
  }
}

/** Lien vers la page où laisser un avis public, selon la plateforme. */
export function lienAvisPublic(canal: string | null): { nom: string; url: string } | null {
  const c = (canal ?? "").toLowerCase();
  if (c.includes("airbnb")) return { nom: "Airbnb", url: "https://www.airbnb.fr/trips/v1" };
  if (c.includes("booking")) return { nom: "Booking.com", url: "https://secure.booking.com/myreservations.html" };
  return null;
}
