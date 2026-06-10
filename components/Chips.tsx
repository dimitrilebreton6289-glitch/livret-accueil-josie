/** Étiquettes (chips) : pour présenter une liste d'éléments de façon compacte. */
export default function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((it) => (
        <li
          key={it}
          className="rounded-full bg-cream-deep px-3 py-1.5 text-sm font-medium text-ink"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}
