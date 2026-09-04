"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { openWifiSheet } from "./WifiSheet";

export interface SearchItem {
  title: string;
  subtitle: string;
  href: string;
  haystack: string;
  /** Si vrai, le résultat ouvre le volet WiFi au lieu de naviguer. */
  sheet?: boolean;
}

/** Recherche locale dans le contenu du livret (sections + lieux). */
export default function SearchView({ items }: { items: SearchItem[] }) {
  const t = useTranslations("Search");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return items.filter((it) => it.haystack.includes(q));
  }, [q, items]);

  return (
    <div className="px-4 py-4">
      <label className="flex items-center gap-2 rounded-full bg-surface px-4 py-3 shadow-[0_2px_12px_rgba(58,46,41,0.06)]">
        <SearchIcon size={20} className="shrink-0 text-muted" />
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("placeholder")}
          className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
        />
      </label>

      <div className="mt-4">
        {!q ? (
          <p className="px-1 text-center text-sm text-muted">{t("empty")}</p>
        ) : results.length === 0 ? (
          <p className="px-1 text-center text-sm text-muted">
            {t("noResults", { query })}
          </p>
        ) : (
          <ul className="space-y-2">
            {results.map((r) => {
              const cardClass =
                "flex w-full items-center gap-3 rounded-card bg-surface p-4 text-left shadow-[0_2px_12px_rgba(58,46,41,0.06)] transition-soft active:scale-[0.99]";
              const inner = (
                <>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-bold text-ink">
                      {r.title}
                    </span>
                    <span className="block truncate text-sm text-muted">
                      {r.subtitle}
                    </span>
                  </span>
                  <ChevronRight size={20} className="shrink-0 text-muted" />
                </>
              );
              return (
                <li key={`${r.href}-${r.title}`}>
                  {r.sheet ? (
                    <button type="button" onClick={openWifiSheet} className={cardClass}>
                      {inner}
                    </button>
                  ) : (
                    <Link href={r.href} className={cardClass}>
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
