"use client";

import { Home, Map, Search, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import JosieAvatar from "./JosieAvatar";

/**
 * Barre de navigation fixe en bas (Accueil · Carte · Recherche)
 * + mascotte Josie en bouton flottant qui chevauche la barre.
 */
export default function BottomNav({ base }: { base: string }) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const tabs: { href: string; icon: LucideIcon; label: string; active: boolean }[] =
    [
      { href: base, icon: Home, label: t("home"), active: pathname === base },
      {
        href: `${base}/autour`,
        icon: Map,
        label: t("map"),
        active: pathname.startsWith(`${base}/autour`),
      },
      {
        href: `${base}/recherche`,
        icon: Search,
        label: t("search"),
        active: pathname.startsWith(`${base}/recherche`),
      },
    ];

  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2">
      <div className="relative mx-3 mb-3 flex items-center justify-around rounded-full bg-surface px-2 py-2 shadow-[0_6px_24px_rgba(58,46,41,0.16)]">
        {/* Mascotte Josie : bouton flottant en bas à gauche, chevauchant la barre. */}
        <Link
          href={base}
          aria-label={t("home")}
          className="absolute -left-1 -top-7 flex size-16 items-center justify-center rounded-full bg-terracotta shadow-[0_6px_18px_rgba(215,92,69,0.45)] ring-4 ring-cream transition-soft active:scale-95"
        >
          <JosieAvatar size={56} />
        </Link>

        {/* Espace réservé pour ne pas passer sous la mascotte. */}
        <span className="w-14 shrink-0" aria-hidden />

        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex min-w-16 flex-col items-center gap-0.5 rounded-full px-3 py-1 text-[11px] font-semibold transition-soft ${
              tab.active ? "text-terracotta" : "text-muted"
            }`}
          >
            <tab.icon size={22} />
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
