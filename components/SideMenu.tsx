"use client";

import { useEffect } from "react";
import { X, Home, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SECTIONS } from "@/lib/sections";
import { openWifiSheet } from "./WifiSheet";
import LangSwitcher from "./LangSwitcher";

/** Panneau latéral : liste des sections + sélecteur de langue. */
export default function SideMenu({
  open,
  onClose,
  base,
}: {
  open: boolean;
  onClose: () => void;
  /** Chemin de base du logement, ex. "/granville". */
  base: string;
}) {
  const t = useTranslations("Nav");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 mx-auto max-w-[430px] transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label={t("menuTitle")}
        onClick={onClose}
        className="absolute inset-0 bg-ink/40"
      />
      <nav
        className={`absolute right-0 top-0 flex h-full w-[80%] max-w-[320px] flex-col gap-4 overflow-y-auto bg-cream p-5 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-terracotta-dark">
            {t("menuTitle")}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark"
          >
            <X size={18} />
          </button>
        </div>

        <ul className="flex flex-col gap-1.5">
          <MenuLink href={base} icon={Home} label={t("home")} onNavigate={onClose} />
          {SECTIONS.map((s) =>
            s.isSheet ? (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openWifiSheet();
                  }}
                  className="flex w-full items-center gap-3 rounded-tile px-3 py-3 text-left text-ink transition-soft active:bg-cream-deep"
                >
                  <s.icon size={20} className="text-terracotta" />
                  {t(`sections.${s.key}`)}
                </button>
              </li>
            ) : (
              <MenuLink
                key={s.key}
                href={`${base}${s.href}`}
                icon={s.icon}
                label={t(`sections.${s.key}`)}
                onNavigate={onClose}
              />
            ),
          )}
        </ul>

        <div className="mt-auto border-t border-cream-deep pt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
            {t("language")}
          </p>
          <LangSwitcher />
        </div>
      </nav>
    </div>
  );
}

function MenuLink({
  href,
  icon: Icon,
  label,
  onNavigate,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-tile px-3 py-3 text-ink transition-soft active:bg-cream-deep"
      >
        <Icon size={20} className="text-terracotta" />
        {label}
      </Link>
    </li>
  );
}
