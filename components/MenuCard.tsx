import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface BaseProps {
  icon: LucideIcon;
  label: React.ReactNode;
  desc?: React.ReactNode;
  /** Carte mise en avant (fond terracotta plein). */
  featured?: boolean;
}

/**
 * Grande carte-bouton pleine largeur : cercle d'icône à gauche, libellé en gras,
 * chevron à droite. Peut être un lien interne (`href`), un lien externe
 * (`externalHref`) ou un bouton (`onClick`).
 */
export default function MenuCard(
  props: BaseProps &
    (
      | { href: string; externalHref?: never; onClick?: never }
      | { externalHref: string; href?: never; onClick?: never }
      | { onClick: () => void; href?: never; externalHref?: never }
    ),
) {
  const { icon: Icon, label, desc, featured } = props;

  const base =
    "group flex w-full items-center gap-4 rounded-card p-4 text-left transition-soft active:scale-[0.99]";
  const skin = featured
    ? "bg-terracotta text-white shadow-[0_6px_18px_rgba(215,92,69,0.35)]"
    : "bg-surface text-ink shadow-[0_2px_12px_rgba(58,46,41,0.06)]";

  const inner = (
    <>
      <span
        className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
          featured ? "bg-white/20 text-white" : "bg-terracotta-soft text-terracotta-dark"
        }`}
      >
        <Icon size={24} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-bold">{label}</span>
        {desc && (
          <span
            className={`block truncate text-sm ${
              featured ? "text-white/85" : "text-muted"
            }`}
          >
            {desc}
          </span>
        )}
      </span>
      <ChevronRight
        size={22}
        className={featured ? "text-white/90" : "text-muted"}
      />
    </>
  );

  if ("externalHref" in props && props.externalHref) {
    return (
      <a
        href={props.externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${skin}`}
      >
        {inner}
      </a>
    );
  }

  if ("onClick" in props && props.onClick) {
    return (
      <button type="button" onClick={props.onClick} className={`${base} ${skin}`}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={props.href!} className={`${base} ${skin}`}>
      {inner}
    </Link>
  );
}
