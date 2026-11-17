"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BadgeMarche, type PlaceVM } from "./PlaceCard";
import StatutOuverture, { ouvertMaintenant } from "./StatutOuverture";

/**
 * Carrousel « À découvrir près d'ici » sur la page d'accueil du livret :
 * coups de cœur d'Agathe et adresses les plus proches, avec photo, temps de
 * marche et « ouvert maintenant ». Filtres rapides : ouvert maintenant, à l'abri.
 */
export default function ADecouvrir({ places, autourHref }: { places: PlaceVM[]; autourHref: string }) {
  const t = useTranslations("Autour");
  const [filtre, setFiltre] = useState<"tous" | "ouvert" | "abri">("tous");
  if (places.length === 0) return null;

  const liste = places.filter((p) =>
    filtre === "tous" ? true : filtre === "abri" ? p.abri : ouvertMaintenant(p.horaires) === true,
  );

  return (
    <section>
      <div className="mb-2 flex items-baseline justify-between px-1">
        <h2 className="font-display text-base font-semibold text-terracotta-dark">{t("decouvrir")}</h2>
        <Link href={autourHref} className="text-sm font-bold text-muted">
          {t("toutVoir")}
        </Link>
      </div>
      <div className="mb-3 flex gap-2">
        {(
          [
            ["ouvert", t("filtreOuvert")],
            ["abri", t("filtreAbri")],
          ] as const
        ).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => setFiltre(filtre === k ? "tous" : k)}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition-soft ${
              filtre === k ? "bg-ink text-white" : "bg-surface text-ink/80 shadow-[0_1px_6px_rgba(58,46,41,0.08)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {liste.length === 0 ? (
        <p className="rounded-card bg-surface p-4 text-center text-sm text-muted">{t("aucunResultat")}</p>
      ) : (
        <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2">
          {liste.map((p) => (
            <a
              key={p.nom + p.itineraire}
              href={p.itineraire}
              target="_blank"
              rel="noopener noreferrer"
              className="w-56 shrink-0 snap-start overflow-hidden rounded-card bg-surface shadow-[0_2px_12px_rgba(58,46,41,0.08)]"
            >
              {p.photo && (
                <div className="relative h-28 bg-cream-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.photo} alt={p.nom} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute bottom-2 left-2">
                    <BadgeMarche p={p} surPhoto />
                  </div>
                </div>
              )}
              <div className="p-3">
                {!p.photo && (
                  <div className="mb-1.5">
                    <BadgeMarche p={p} />
                  </div>
                )}
                <div className="min-h-4">
                  <StatutOuverture horaires={p.horaires} />
                </div>
                <p className="mt-0.5 line-clamp-1 font-display text-sm font-semibold text-ink">
                  {p.coupDeCoeur && <Heart size={12} className="mr-1 inline text-terracotta" fill="currentColor" />}
                  {p.nom}
                </p>
                <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-ink/70">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
