"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import opening_hours from "opening_hours";

/**
 * « Ouvert · jusqu'à 18 h » / « Fermé · ouvre demain à 7 h », calculé dans le
 * navigateur à partir des horaires OpenStreetMap (heure de Paris).
 */

export type Etat = { ouvert: boolean; texte: string } | null;

/** Date « murale » de Paris (les horaires OSM sont en heure locale). */
function maintenantParis(): Date {
  const s = new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" });
  return new Date(s);
}

/** Ouvert en ce moment ? (null si horaires inconnus ou illisibles) */
export function ouvertMaintenant(horaires?: string): boolean | null {
  if (!horaires) return null;
  try {
    return new opening_hours(horaires, null).getState(maintenantParis());
  } catch {
    return null;
  }
}

export function useEtatOuverture(horaires?: string): Etat {
  const t = useTranslations("Autour");
  const locale = useLocale();
  const [etat, setEtat] = useState<Etat>(null);

  useEffect(() => {
    if (!horaires) return;
    try {
      const oh = new opening_hours(horaires, null);
      const now = maintenantParis();
      const ouvert = oh.getState(now);
      const next = oh.getNextChange(now);
      const h = (d: Date) =>
        new Intl.DateTimeFormat(locale, { hour: "numeric", minute: d.getMinutes() ? "2-digit" : undefined }).format(d);
      let texte: string;
      if (ouvert) {
        texte = next ? t("ouvertJusqua", { heure: h(next) }) : t("ouvert");
      } else if (next) {
        const demain = new Date(now);
        demain.setDate(now.getDate() + 1);
        const memeJour = next.toDateString() === now.toDateString();
        const lendemain = next.toDateString() === demain.toDateString();
        const jour = memeJour
          ? ""
          : lendemain
            ? t("demain")
            : new Intl.DateTimeFormat(locale, { weekday: "long" }).format(next);
        texte = t("fermeOuvre", { jour, heure: h(next) }).replace(/\s+/g, " ");
      } else {
        texte = t("ferme");
      }
      setEtat({ ouvert, texte });
    } catch {
      setEtat(null); // horaires illisibles : on n'affiche rien
    }
  }, [horaires, locale, t]);

  return etat;
}

export default function StatutOuverture({ horaires }: { horaires?: string }) {
  const etat = useEtatOuverture(horaires);
  if (!etat) return null;
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-bold ${
        etat.ouvert ? "text-[#1f7a3a]" : "text-terracotta-dark"
      }`}
    >
      <span className={`size-1.5 rounded-full ${etat.ouvert ? "bg-[#1f9a48]" : "bg-terracotta"}`} />
      {etat.texte}
    </span>
  );
}
