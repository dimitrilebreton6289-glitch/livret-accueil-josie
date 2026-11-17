"use client";

import { useTranslations } from "next-intl";
import {
  Wifi, QrCode, Sofa, Map as MapIcon, Sparkles, ChevronRight, Tv, Coffee, Flame, WashingMachine, BedDouble, Utensils,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { openWifiSheet } from "../WifiSheet";

/** Pictos d'équipements reconnus dans la liste du logement. */
const PICTOS: [RegExp, LucideIcon][] = [
  [/tv|télé/i, Tv],
  [/caf|nespresso|dosette|cafeti/i, Coffee],
  [/plaque|four|cuisine/i, Utensils],
  [/chauffage|poêle|radiateur/i, Flame],
  [/lave-linge|machine à laver/i, WashingMachine],
  [/lit|canapé/i, BedDouble],
];

const carte =
  "relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-[22px] p-4 text-left shadow-[0_2px_14px_rgba(58,46,41,0.07)] transition-soft active:scale-[0.98]";

/** Grille 2 × 2 de l'accueil : WiFi, Le logement, Carte, Services. */
export default function Tuiles({
  base,
  reseau,
  wifiDispo,
  equipements,
  nbAdresses,
  aServices,
}: {
  base: string;
  reseau: string;
  wifiDispo: boolean;
  equipements: string[];
  nbAdresses: number;
  aServices: boolean;
}) {
  const t = useTranslations("Accueil");
  const pictos = PICTOS.filter(([re]) => equipements.some((e) => re.test(e)))
    .map(([, I]) => I)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* WiFi */}
      <button type="button" onClick={openWifiSheet} className={`${carte} bg-surface`}>
        <div className="flex items-start justify-between">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-terracotta-soft text-terracotta-dark">
            <Wifi size={20} />
          </span>
          {wifiDispo && (
            <span className="flex size-8 items-center justify-center rounded-xl bg-cream-deep text-ink/70">
              <QrCode size={16} />
            </span>
          )}
        </div>
        <div>
          <p className="font-display text-base font-semibold text-ink">{t("wifi")}</p>
          <p className="truncate text-xs text-muted">{wifiDispo ? reseau : t("pasDeWifi")}</p>
          {wifiDispo && (
            <span className="mt-2 inline-block rounded-full bg-terracotta px-3 py-1 text-xs font-bold text-white">
              {t("copierCode")}
            </span>
          )}
        </div>
      </button>

      {/* Le logement */}
      <Link href={`${base}/pratique`} className={`${carte} bg-surface`}>
        <span className="flex size-10 items-center justify-center rounded-2xl bg-terracotta-soft text-terracotta-dark">
          <Sofa size={20} />
        </span>
        <div>
          <p className="font-display text-base font-semibold text-ink">{t("logement")}</p>
          <p className="text-xs text-muted">{t("logementDesc")}</p>
          {pictos.length > 0 && (
            <div className="mt-2 flex gap-1">
              {pictos.map((I, i) => (
                <span key={i} className="flex size-6 items-center justify-center rounded-full bg-cream-deep text-terracotta-dark">
                  <I size={13} />
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>

      {/* Carte */}
      <Link
        href={`${base}/autour?vue=carte`}
        className={`${carte} bg-cream-deep`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 46%, #fff 46%, #fff 52%, transparent 52%), linear-gradient(20deg, transparent 58%, #fff 58%, #fff 63%, transparent 63%)",
        }}
      >
        <span className="flex gap-6 pl-3 text-terracotta">
          <MapPinDot />
          <span className="mt-4">
            <MapPinDot />
          </span>
        </span>
        <div>
          <p className="font-display text-base font-semibold text-ink">{t("carte")}</p>
          <p className="text-xs text-ink/70">{t("adresses", { n: nbAdresses })}</p>
        </div>
      </Link>

      {/* Services */}
      <Link href={aServices ? `${base}/services` : `${base}/depart`} className={`${carte} bg-terracotta-soft`}>
        <span className="flex size-10 items-center justify-center rounded-2xl bg-white/70 text-terracotta-dark">
          <Sparkles size={20} />
        </span>
        <div>
          <p className="flex items-center gap-1 font-display text-base font-semibold text-ink">
            {t("services")} <ChevronRight size={14} />
          </p>
          <p className="text-xs text-ink/70">{t("servicesDesc")}</p>
        </div>
      </Link>
    </div>
  );
}

function MapPinDot() {
  return (
    <svg width="20" height="26" viewBox="0 0 32 40" aria-hidden>
      <path d="M16 0C7.2 0 0 7 0 15.7 0 27 16 40 16 40s16-13 16-24.3C32 7 24.8 0 16 0z" fill="currentColor" />
      <circle cx="16" cy="15.5" r="6" fill="#fff" />
    </svg>
  );
}
