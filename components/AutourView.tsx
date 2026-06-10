"use client";

import { useState } from "react";
import {
  Landmark,
  Waves,
  TreePine,
  UtensilsCrossed,
  Wine,
  Clapperboard,
  Ticket,
  ShoppingBag,
  TrainFront,
  ShoppingCart,
  Croissant,
  Pill,
  WashingMachine,
  Fuel,
  Cigarette,
  Music,
  Heart,
  Footprints,
  Navigation,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { CategoryKey } from "@/data/types";
import MapView from "./MapView";
import type { MapMarker } from "./Map";

export interface PlaceVM {
  nom: string;
  desc: string;
  itineraire: string;
  /** Distance à vol d'oiseau depuis le logement, ex. « ~1,2 km ». */
  distance?: string;
}

export interface CategoryVM {
  key: CategoryKey;
  places: PlaceVM[];
}

const CATEGORY_ICON: Record<CategoryKey, LucideIcon> = {
  culture: Landmark,
  plages: Waves,
  nature: TreePine,
  restaurants: UtensilsCrossed,
  bars: Wine,
  cinema: Clapperboard,
  loisirs: Ticket,
  commerces: ShoppingBag,
  transports: TrainFront,
  courses: ShoppingCart,
  bouche: Croissant,
  sante: Pill,
  laverie: WashingMachine,
  stations: Fuel,
  tabac: Cigarette,
  nocturne: Music,
};

export default function AutourView({
  center,
  homeLabel,
  itinerary,
  markers,
  categories,
  coupDeCoeur,
  aPied,
  aPiedNote,
}: {
  center: [number, number];
  homeLabel: string;
  itinerary: string;
  markers: MapMarker[];
  categories: CategoryVM[];
  coupDeCoeur: string;
  aPied: string[];
  aPiedNote: string;
}) {
  const t = useTranslations("Autour");
  const tc = useTranslations("Common");
  const [tab, setTab] = useState<"map" | "list">("list");

  return (
    <div className="px-4 py-4">
      {/* Bascule Carte / Adresses */}
      <div className="mb-4 flex rounded-full bg-cream-deep p-1">
        {(["list", "map"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`flex-1 rounded-full py-2 text-sm font-bold transition-soft ${
              tab === key ? "bg-terracotta text-white shadow" : "text-muted"
            }`}
          >
            {key === "map" ? t("tabMap") : t("tabList")}
          </button>
        ))}
      </div>

      {tab === "map" ? (
        <div className="animate-fade-rise space-y-2">
          <MapView
            center={center}
            homeLabel={homeLabel}
            itinerary={itinerary}
            markers={markers}
          />
          <p className="px-1 text-center text-sm text-muted">{t("mapHint")}</p>
        </div>
      ) : (
        <div className="animate-fade-rise space-y-5">
          {/* Coup de cœur */}
          <section className="rounded-card bg-terracotta p-5 text-white shadow-[0_6px_18px_rgba(215,92,69,0.35)]">
            <div className="mb-1 flex items-center gap-2 font-display text-base font-semibold">
              <Heart size={18} fill="currentColor" />
              {t("coupDeCoeur")}
            </div>
            <p className="text-[15px] leading-relaxed text-white/90">{coupDeCoeur}</p>
          </section>

          {/* Grille de catégories (liens d'ancrage) */}
          <div className="grid grid-cols-2 gap-3">
            {categories.map((c) => {
              const Icon = CATEGORY_ICON[c.key];
              return (
                <a
                  key={c.key}
                  href={`#cat-${c.key}`}
                  className="flex flex-col gap-1 rounded-card bg-surface p-4 shadow-[0_2px_12px_rgba(58,46,41,0.06)] transition-soft active:scale-[0.98]"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark">
                    <Icon size={20} />
                  </span>
                  <span className="mt-1 text-sm font-bold text-ink">
                    {t(`categories.${c.key}`)}
                  </span>
                  <span className="text-xs text-muted">
                    {t("placeCount", { n: c.places.length })}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Listes par catégorie */}
          {categories.map((c) => (
            <section key={c.key} id={`cat-${c.key}`} className="scroll-mt-20">
              <h2 className="mb-3 px-1 font-display text-lg font-semibold text-terracotta-dark">
                {t(`categories.${c.key}`)}
              </h2>
              <ul className="space-y-3">
                {c.places.map((p) => (
                  <li
                    key={p.nom}
                    className="rounded-card bg-surface p-4 shadow-[0_2px_12px_rgba(58,46,41,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-ink">{p.nom}</p>
                      {p.distance && (
                        <span className="mt-0.5 shrink-0 rounded-full bg-terracotta-soft px-2.5 py-0.5 text-xs font-bold text-terracotta-dark">
                          {p.distance}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/80">
                      {p.desc}
                    </p>
                    <a
                      href={p.itineraire}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full bg-cream-deep px-4 text-sm font-bold text-terracotta-dark transition-soft active:scale-95"
                    >
                      <Navigation size={16} />
                      {tc("itinerary")}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* À pied */}
          {aPied.length > 0 && (
            <section>
              <h2 className="mb-3 px-1 font-display text-lg font-semibold text-terracotta-dark">
                {t("aPied")}
              </h2>
              <div className="rounded-card bg-surface p-5 shadow-[0_2px_12px_rgba(58,46,41,0.06)]">
                <ul className="mb-3 flex flex-wrap gap-2">
                  {aPied.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-1.5 rounded-full bg-cream-deep px-3 py-1.5 text-sm font-medium text-ink"
                    >
                      <Footprints size={14} className="text-terracotta" />
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted">{aPiedNote}</p>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
