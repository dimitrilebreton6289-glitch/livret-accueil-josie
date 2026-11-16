"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { chargerInfo } from "@/lib/sejour";
import { livretDeListing } from "@/data/hostaway";

/** Retrouve le livret de la réservation (lien universel Hostaway) et l'ouvre. */
export default function RedirectionSejour() {
  const t = useTranslations("Sejour");
  const locale = useLocale();
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const r = p.get("r") ?? "";
    const c = p.get("c") ?? "";
    if (!r || !c) {
      setErreur(true);
      return;
    }
    chargerInfo(r, c).then((info) => {
      const livret = info ? livretDeListing(String(info.listingId)) : undefined;
      if (!livret) {
        setErreur(true);
        return;
      }
      window.location.replace(
        `/${locale}/${livret}?r=${encodeURIComponent(r)}&c=${encodeURIComponent(c)}`,
      );
    });
  }, [locale]);

  return (
    <main className="mx-auto max-w-[430px] px-6 py-24 text-center">
      <p className="font-display text-lg font-semibold text-ink">
        {erreur ? t("lienInvalideTitre") : t("chargement")}
      </p>
      {erreur && <p className="mt-2 text-sm text-muted">{t("lienInvalideTexte")}</p>}
    </main>
  );
}
