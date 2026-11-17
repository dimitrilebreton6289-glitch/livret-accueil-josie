"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Lightbulb, CloudRain } from "lucide-react";
import type { PlaceVM } from "../PlaceCard";
import { BadgeMarche } from "../PlaceCard";

/**
 * « Une idée pour aujourd'hui » : une adresse choisie selon la météo (à l'abri
 * s'il pleut, sinon un coup de cœur), qui change chaque jour.
 */
export default function IdeeDuJour({ places, coords }: { places: PlaceVM[]; coords: [number, number] }) {
  const t = useTranslations("Accueil");
  const [pluie, setPluie] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&daily=precipitation_probability_max&timezone=Europe%2FParis&forecast_days=1`,
      { signal: ctrl.signal },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => setPluie((j?.daily?.precipitation_probability_max?.[0] ?? 0) >= 60))
      .catch(() => {});
    return () => ctrl.abort();
  }, [coords]);

  const abri = places.filter((p) => p.abri);
  const pluieOk = pluie && abri.length > 0;
  const beau = places.filter((p) => p.coupDeCoeur || p.photo);
  const choix = pluieOk ? abri : beau.length ? beau : places;
  if (choix.length === 0) return null;
  const jour = Math.floor(Date.now() / 86_400_000);
  const p = choix[jour % choix.length];

  return (
    <a
      href={p.itineraire}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 overflow-hidden rounded-[22px] bg-ink p-3 text-white shadow-[0_4px_18px_rgba(58,46,41,0.25)] transition-soft active:scale-[0.99]"
    >
      {p.photo && (
        <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.photo} alt={p.nom} className="h-full w-full object-cover" />
        </div>
      )}
      <div className={`min-w-0 py-1 ${p.photo ? "" : "px-2"}`}>
        <p className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#f3c98b]">
          {pluieOk ? <CloudRain size={13} /> : <Lightbulb size={13} />}
          {pluieOk ? t("ideePluie") : t("idee")}
        </p>
        <p className="mt-1 font-display text-base font-semibold">{p.nom}</p>
        <p className="mt-0.5 line-clamp-2 text-xs text-white/75">{p.desc}</p>
        <div className="mt-1.5">
          <BadgeMarche p={p} surPhoto />
        </div>
      </div>
    </a>
  );
}
