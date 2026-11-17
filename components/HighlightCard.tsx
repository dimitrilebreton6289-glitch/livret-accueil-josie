import type { LucideIcon } from "lucide-react";

/**
 * Carte « en évidence » : grande icône + petit libellé + valeur en gros.
 * Pour les infos clés (heure d'arrivée / de départ…).
 */
export default function HighlightCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-card bg-ink p-5 text-white shadow-[0_6px_20px_rgba(58,46,41,0.22)]">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#e9a23b] text-ink">
        <Icon size={26} />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
          {label}
        </p>
        <p className="font-display text-xl font-bold leading-snug text-white">
          {value}
        </p>
      </div>
    </div>
  );
}
