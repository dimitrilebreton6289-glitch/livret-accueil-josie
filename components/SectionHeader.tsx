/** Petit titre de rubrique à l'intérieur d'une page (au-dessus d'un groupe de cartes). */
export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-6 px-1 font-display text-lg font-semibold text-terracotta-dark">
      {children}
    </h2>
  );
}
