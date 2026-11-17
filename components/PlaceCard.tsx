"use client";

import { Footprints, Globe, Heart, Navigation, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import StatutOuverture from "./StatutOuverture";

/** Une adresse « Autour de moi », prête à afficher. */
export interface PlaceVM {
  nom: string;
  desc: string;
  itineraire: string;
  /** Distance à vol d'oiseau depuis le logement, ex. « ~1,2 km ». */
  distance?: string;
  /** Temps de marche estimé, en minutes. */
  minutes?: number;
  horaires?: string;
  site?: string;
  tel?: string;
  adresse?: string;
  photo?: string;
  photoCredit?: string;
  coupDeCoeur?: boolean;
  abri?: boolean;
}

/** Badge « à pied » : minutes si c'est à moins d'une demi-heure, sinon distance. */
export function BadgeMarche({ p, surPhoto = false }: { p: PlaceVM; surPhoto?: boolean }) {
  const t = useTranslations("Autour");
  if (!p.minutes && !p.distance) return null;
  const texte = p.minutes && p.minutes <= 30 ? t("minutesAPied", { n: p.minutes }) : p.distance;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${
        surPhoto ? "bg-white/90 text-ink shadow" : "bg-terracotta-soft text-terracotta-dark"
      }`}
    >
      <Footprints size={12} />
      {texte}
    </span>
  );
}

/** Grande carte d'adresse (liste « Autour de moi »). */
export default function PlaceCard({ p }: { p: PlaceVM }) {
  const t = useTranslations("Autour");
  const tc = useTranslations("Common");
  return (
    <article className="overflow-hidden rounded-card bg-surface shadow-[0_2px_12px_rgba(58,46,41,0.06)]">
      {p.photo && (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.photo} alt={p.nom} loading="lazy" className="h-44 w-full object-cover" />
          <div className="absolute left-3 top-3">
            <BadgeMarche p={p} surPhoto />
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {!p.photo && <BadgeMarche p={p} />}
          {p.coupDeCoeur && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-terracotta">
              <Heart size={12} fill="currentColor" />
              {t("coupDeCoeurAgathe")}
            </span>
          )}
          <StatutOuverture horaires={p.horaires} />
        </div>
        <h3 className="mt-1.5 font-display text-[17px] font-semibold text-ink">{p.nom}</h3>
        <p className="mt-1 text-[15px] leading-relaxed text-ink/80">{p.desc}</p>
        {p.adresse && <p className="mt-1.5 text-xs text-muted">{p.adresse}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={p.itineraire}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-terracotta px-4 text-sm font-bold text-white transition-soft active:scale-95"
          >
            <Navigation size={16} />
            {tc("itinerary")}
          </a>
          {p.site && (
            <a
              href={p.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-cream-deep px-4 text-sm font-bold text-terracotta-dark transition-soft active:scale-95"
            >
              <Globe size={16} />
              {t("siteWeb")}
            </a>
          )}
          {p.tel && (
            <a
              href={`tel:${p.tel.replace(/\s+/g, "")}`}
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-cream-deep px-4 text-sm font-bold text-terracotta-dark transition-soft active:scale-95"
            >
              <Phone size={16} />
              {t("appeler")}
            </a>
          )}
        </div>
        {p.photoCredit && <p className="mt-2 text-[10px] leading-tight text-muted/70">{t("photo")} : {p.photoCredit}</p>}
      </div>
    </article>
  );
}
