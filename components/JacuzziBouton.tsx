"use client";

import { CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSejour } from "@/lib/sejour";

const APP = process.env.NEXT_PUBLIC_API_LIVRET
  ? new URL(process.env.NEXT_PUBLIC_API_LIVRET).origin
  : "https://app-m-nage.vercel.app";

/**
 * Bouton « calendrier du jacuzzi » : ouvre la page de réservation de l'App
 * pour le séjour en cours. Sans lien de séjour, on renvoie au message reçu.
 */
export default function JacuzziBouton({ livret }: { livret: string }) {
  const t = useTranslations("Sejour");
  const [sejour] = useSejour(livret);
  if (!sejour) return <p className="mt-3 text-sm text-ink/70">{t("jacuzziSansLien")}</p>;
  const href = `${APP}/jacuzzi/${encodeURIComponent(sejour.r)}?c=${encodeURIComponent(sejour.c)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-3 flex items-center justify-center gap-2 rounded-full bg-terracotta px-4 py-3 text-sm font-semibold text-white"
    >
      <CalendarDays size={18} />
      {t("jacuzziCalendrier")}
    </a>
  );
}
