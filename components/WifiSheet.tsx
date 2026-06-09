"use client";

import { useEffect, useState } from "react";
import { Wifi, X } from "lucide-react";
import { useTranslations } from "next-intl";
import CopyButton from "./CopyButton";

/** Évènement global pour ouvrir le volet WiFi depuis n'importe quelle carte/menu. */
export const OPEN_WIFI_EVENT = "josie:open-wifi";

export function openWifiSheet() {
  window.dispatchEvent(new Event(OPEN_WIFI_EVENT));
}

/**
 * Volet coulissant (bottom sheet) affichant le réseau WiFi et le mot de passe,
 * avec un bouton « Copier le mot de passe ». Monté une fois dans le layout ;
 * s'ouvre via openWifiSheet().
 */
export default function WifiSheet({
  reseau,
  motDePasse,
}: {
  reseau: string;
  motDePasse: string;
}) {
  const t = useTranslations("Wifi");
  const tc = useTranslations("Common");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_WIFI_EVENT, handler);
    return () => window.removeEventListener(OPEN_WIFI_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 mx-auto flex max-w-[430px] flex-col justify-end transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label={t("title")}
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/40"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`relative rounded-t-[28px] bg-surface p-6 pb-8 shadow-2xl transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-cream-deep" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-cream-deep text-muted"
        >
          <X size={18} />
        </button>

        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-full bg-terracotta text-white">
            <Wifi size={24} />
          </span>
          <h2 className="font-display text-xl font-semibold text-ink">
            {t("title")}
          </h2>
        </div>

        <dl className="space-y-3">
          <div className="rounded-tile bg-cream-deep p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("network")}
            </dt>
            <dd className="mt-1 font-mono text-lg font-bold text-ink">{reseau}</dd>
          </div>
          <div className="rounded-tile bg-cream-deep p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("password")}
            </dt>
            <dd className="mt-1 break-all font-mono text-lg font-bold text-ink">
              {motDePasse}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex justify-center">
          <CopyButton value={motDePasse} label={tc("copyPassword")} />
        </div>
      </div>
    </div>
  );
}
