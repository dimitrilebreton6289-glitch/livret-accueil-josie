"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Landmark,
  Waves,
  TreePine,
  UtensilsCrossed,
  Sandwich,
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
  TramFront,
  Hospital,
  Stethoscope,
  ShieldAlert,
  Heart,
  Footprints,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { CategoryKey } from "@/data/types";
import MapView from "./MapView";
import PlaceCard, { type PlaceVM } from "./PlaceCard";
import { ouvertMaintenant } from "./StatutOuverture";
import type { MapMarker } from "./Map";

export type { PlaceVM } from "./PlaceCard";

export interface CategoryVM {
  key: CategoryKey;
  places: PlaceVM[];
}

const CATEGORY_ICON: Record<CategoryKey, LucideIcon> = {
  culture: Landmark,
  plages: Waves,
  nature: TreePine,
  restaurants: UtensilsCrossed,
  restorapide: Sandwich,
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
  tram: TramFront,
  hopital: Hospital,
  medecin: Stethoscope,
  police: ShieldAlert,
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
  const searchParams = useSearchParams();
  // Par défaut « Adresses » ; l'onglet « Carte » de la barre du bas (?vue=carte)
  // ouvre directement la carte.
  const [tab, setTab] = useState<"map" | "list">(
    searchParams.get("vue") === "carte" ? "map" : "list",
  );
  useEffect(() => {
    setTab(searchParams.get("vue") === "carte" ? "map" : "list");
  }, [searchParams]);

  // Filtres rapides : coups de cœur, ouvert maintenant, à l'abri (pluie).
  const [filtre, setFiltre] = useState<"tous" | "coeur" | "ouvert" | "abri">(
    searchParams.get("filtre") === "abri" ? "abri" : "tous",
  );
  const toutes = categories.flatMap((c) => c.places);
  const filtrees =
    filtre === "tous"
      ? []
      : toutes
          .filter((p) =>
            filtre === "coeur" ? p.coupDeCoeur : filtre === "abri" ? p.abri : ouvertMaintenant(p.horaires) === true,
          )
          .sort((a, b) => (a.minutes ?? 999) - (b.minutes ?? 999));
  const FILTRES = [
    { k: "tous", label: t("filtreTous") },
    { k: "coeur", label: t("filtreCoeur") },
    { k: "ouvert", label: t("filtreOuvert") },
    { k: "abri", label: t("filtreAbri") },
  ] as const;

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

          {/* Filtres rapides */}
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {FILTRES.map((f) => (
              <button
                key={f.k}
                type="button"
                onClick={() => setFiltre(f.k)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-bold transition-soft ${
                  filtre === f.k ? "bg-terracotta text-white" : "bg-surface text-ink/80 shadow-[0_1px_6px_rgba(58,46,41,0.08)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtre !== "tous" ? (
            filtrees.length === 0 ? (
              <p className="rounded-card bg-surface p-5 text-center text-sm text-muted">{t("aucunResultat")}</p>
            ) : (
              <ul className="space-y-3">
                {filtrees.map((p) => (
                  <li key={p.nom + p.itineraire}>
                    <PlaceCard p={p} />
                  </li>
                ))}
              </ul>
            )
          ) : (
            <>
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
                  <li key={p.nom + p.itineraire}>
                    <PlaceCard p={p} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
            </>
          )}

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
