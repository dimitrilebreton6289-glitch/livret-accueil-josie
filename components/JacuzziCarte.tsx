"use client";

import { Waves } from "lucide-react";
import { useTranslations } from "next-intl";
import JacuzziBouton from "@/components/JacuzziBouton";

/** Carte « jacuzzi » de l'accueil : le calendrier à portée de main. */
export default function JacuzziCarte({ livret }: { livret: string }) {
  const t = useTranslations("Sejour");
  return (
    <section className="rounded-[22px] bg-surface p-4 shadow-[0_2px_14px_rgba(58,46,41,0.07)]">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-cream-deep text-terracotta">
          <Waves size={20} />
        </span>
        <div className="min-w-0">
          <h2 className="font-display text-base font-semibold text-terracotta-dark">{t("jacuzziTitre")}</h2>
          <p className="text-xs text-muted">{t("jacuzziResume")}</p>
        </div>
      </div>
      <JacuzziBouton livret={livret} />
    </section>
  );
}
