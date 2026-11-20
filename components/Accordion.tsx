"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/** Carte dépliable : en-tête cliquable + contenu animé. */
export default function Accordion({
  icon,
  title,
  children,
  defaultOpen = false,
  id,
}: {
  /** Icône déjà rendue (ex. <Clock size={20} />). */
  icon?: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Ancre : un lien « …#id » ouvre cette carte et y fait défiler la page. */
  id?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;
    const aller = () => {
      if (window.location.hash !== `#${id}`) return;
      setOpen(true);
      setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 350);
    };
    aller();
    window.addEventListener("hashchange", aller);
    return () => window.removeEventListener("hashchange", aller);
  }, [id]);

  return (
    <div id={id} ref={ref} className="scroll-mt-20 overflow-hidden rounded-card bg-surface shadow-[0_2px_12px_rgba(58,46,41,0.06)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-4 text-left"
      >
        {icon && (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark">
            {icon}
          </span>
        )}
        <span className="flex-1 font-bold text-ink">{title}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 text-[15px] leading-relaxed text-ink/85">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
