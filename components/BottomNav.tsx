"use client";

import { Home, Map, Search, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

/** Barre de navigation fixe en bas : Accueil · Carte · Recherche. */
export default function BottomNav({ base }: { base: string }) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const tabs: { href: string; icon: LucideIcon; label: string; active: boolean }[] =
    [
      { href: base, icon: Home, label: t("home"), active: pathname === base },
      {
        href: `${base}/autour?vue=carte`,
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
      <div className="mx-3 mb-3 flex items-center justify-around rounded-full bg-surface px-2 py-2 shadow-[0_6px_24px_rgba(58,46,41,0.16)]">
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
