"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSejour } from "@/lib/sejour";

/**
 * Pastilles du séjour sur la photo d'accueil (avec un lien de séjour valable) :
 * « Jour 2 sur 4 » et « Départ jeudi à 10 h ».
 */
export default function HeroSejour({ livret }: { livret: string }) {
  const t = useTranslations("Accueil");
  const locale = useLocale();
  const [sejour] = useSejour(livret);
  if (!sejour) return null;
  const { info, aujourdhui } = sejour;
  const jour = (d: string) => new Date(`${d}T12:00:00Z`).getTime();
  const total = Math.max(1, Math.round((jour(info.depart) - jour(info.arrivee)) / 86_400_000));
  const n = Math.round((jour(aujourdhui) - jour(info.arrivee)) / 86_400_000) + 1;
  const nomJour = new Intl.DateTimeFormat(locale, { weekday: "long", timeZone: "UTC" }).format(
    new Date(`${info.depart}T12:00:00Z`),
  );
  const pastilles: string[] = [];
  if (n < 1) pastilles.push(t("arriveeDans", { n: 1 - n }));
  else if (n <= total) pastilles.push(t("jourSur", { n, total }));
  if (aujourdhui <= info.depart)
    pastilles.push(
      info.heureDepart !== null
        ? t("departLe", { jour: nomJour, heure: info.heureDepart })
        : t("departLeSansHeure", { jour: nomJour }),
    );
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {pastilles.map((p) => (
        <span key={p} className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-ink shadow-sm backdrop-blur">
          {p}
        </span>
      ))}
    </div>
  );
}
