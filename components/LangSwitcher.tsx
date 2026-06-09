"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
};

const FLAGS: Record<string, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  de: "🇩🇪",
  es: "🇪🇸",
  it: "🇮🇹",
};

/**
 * Sélecteur de langue : change la locale en conservant la page courante.
 * L'URL reflète la langue (ex. /en/granville/arrivee).
 */
export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-2">
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => router.replace(pathname, { locale: l })}
            className={`flex min-h-11 items-center gap-3 rounded-tile px-4 text-left text-[15px] transition-soft ${
              active
                ? "bg-terracotta font-bold text-white"
                : "bg-cream-deep text-ink active:scale-[0.99]"
            }`}
          >
            <span className="text-xl">{FLAGS[l]}</span>
            {LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
