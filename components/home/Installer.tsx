"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Smartphone, X } from "lucide-react";

/**
 * « Gardez le livret sous la main » : invite à l'ajouter à l'écran d'accueil.
 * Masqué si le livret est déjà installé ou si le voyageur a fermé l'encart.
 */
export default function Installer() {
  const t = useTranslations("Accueil");
  const [visible, setVisible] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    try {
      const installe = window.matchMedia("(display-mode: standalone)").matches;
      const ferme = localStorage.getItem("josie-installer-ferme") === "1";
      setIos(/iphone|ipad|ipod/i.test(navigator.userAgent));
      setVisible(!installe && !ferme);
    } catch {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;
  return (
    <section className="relative flex gap-3 rounded-[22px] bg-surface p-4 shadow-[0_2px_14px_rgba(58,46,41,0.07)]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-cream-deep text-terracotta-dark">
        <Smartphone size={20} />
      </span>
      <div className="pr-6">
        <p className="font-display text-base font-semibold text-ink">{t("installerTitre")}</p>
        <p className="mt-0.5 text-xs leading-snug text-muted">{ios ? t("installerIos") : t("installerAndroid")}</p>
      </div>
      <button
        type="button"
        aria-label={t("fermer")}
        onClick={() => {
          try {
            localStorage.setItem("josie-installer-ferme", "1");
          } catch {}
          setVisible(false);
        }}
        className="absolute right-3 top-3 text-muted"
      >
        <X size={16} />
      </button>
    </section>
  );
}
