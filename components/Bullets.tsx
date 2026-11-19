/** Liste à puces épurée : petit point terracotta + texte court. */
export default function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5">
          {/* Pas de puce quand la ligne commence déjà par un émoji. */}
          {!/^\p{Extended_Pictographic}/u.test(it) && (
            <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-terracotta" />
          )}
          <span className="text-[15px] leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  );
}
