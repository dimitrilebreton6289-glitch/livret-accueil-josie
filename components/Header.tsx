"use client";

import { useState } from "react";
import { Menu, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import SideMenu from "./SideMenu";
import JosieAvatar from "./JosieAvatar";

/**
 * En-tête fixe.
 * - variant "home" : logo Josie + « Livret d'accueil » + menu.
 * - variant "sub"  : flèche retour + titre de section centré + menu.
 */
export default function Header({
  variant,
  base,
  title,
}: {
  variant: "home" | "sub";
  base: string;
  title?: string;
}) {
  const t = useTranslations("Nav");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Retour : revient à la page précédente (ex. l'écran « Autour de moi »
  // après avoir ouvert une catégorie) ; sinon, retourne à l'accueil du livret.
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      router.push(base);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-30 mx-auto flex h-16 max-w-[430px] items-center justify-between gap-3 border-b border-cream-deep/70 bg-cream/90 px-4 backdrop-blur">
        {variant === "home" ? (
          <Link
            href={base}
            className="flex min-w-0 items-center gap-3 transition-soft active:scale-95"
          >
            <JosieAvatar size={40} className="shrink-0" />
            <span className="truncate font-display text-lg font-semibold text-terracotta-dark">
              {t("appTitle")}
            </span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleBack}
            aria-label={t("home")}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark transition-soft active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>
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
