"use client";

import { useState } from "react";
import { Menu, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SideMenu from "./SideMenu";

/**
 * En-tête fixe.
 * - variant "home" : avatar du logement + « Livret d'accueil » + menu.
 * - variant "sub"  : flèche retour + titre de section centré + menu.
 */
export default function Header({
  variant,
  base,
  title,
  cover,
}: {
  variant: "home" | "sub";
  base: string;
  title?: string;
  cover?: string;
}) {
  const t = useTranslations("Nav");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 mx-auto flex h-16 max-w-[430px] items-center justify-between gap-3 border-b border-cream-deep/70 bg-cream/90 px-4 backdrop-blur">
        {variant === "home" ? (
          <div className="flex min-w-0 items-center gap-3">
            {cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cover}
                alt=""
                className="size-10 shrink-0 rounded-full object-cover ring-2 ring-white"
              />
            )}
            <span className="truncate font-display text-lg font-semibold text-terracotta-dark">
              {t("appTitle")}
            </span>
          </div>
        ) : (
          <Link
            href={base}
            aria-label={t("home")}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark transition-soft active:scale-95"
          >
            <ArrowLeft size={20} />
          </Link>
        )}

        {variant === "sub" && (
          <h1 className="min-w-0 flex-1 truncate text-center font-display text-lg font-semibold text-ink">
            {title}
          </h1>
        )}

        <button
          type="button"
          aria-label={t("menuTitle")}
          onClick={() => setMenuOpen(true)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-ink transition-soft active:bg-cream-deep"
        >
          <Menu size={24} />
        </button>
      </header>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} base={base} />
    </>
  );
}
