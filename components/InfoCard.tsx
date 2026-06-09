import type { LucideIcon } from "lucide-react";

/**
 * Carte de contenu : titre optionnel (avec icône) + contenu libre.
 * Sert de bloc d'information sur toutes les sous-pages.
 */
export default function InfoCard({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon?: LucideIcon;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-card bg-surface p-5 shadow-[0_2px_12px_rgba(58,46,41,0.06)] ${className}`}
    >
      {title && (
        <h3 className="mb-2 flex items-center gap-2 font-display text-base font-semibold text-ink">
          {Icon && (
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark">
              <Icon size={18} />
            </span>
          )}
          {title}
        </h3>
      )}
      <div className="text-[15px] leading-relaxed text-ink/85">{children}</div>
    </section>
  );
}
