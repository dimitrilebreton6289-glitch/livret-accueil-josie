import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import { SECTIONS } from "@/lib/sections";
import Header from "@/components/Header";
import SearchView, { type SearchItem } from "@/components/SearchView";

export default async function RecherchePage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Search");
  const tNav = await getTranslations("Nav");
  const tAutour = await getTranslations("Autour");
  const base = `/${logement.id}`;

  const items: SearchItem[] = [];

  // Sections (WiFi pointe vers l'accueil où se trouve sa carte).
  for (const s of SECTIONS) {
    const title = tNav(`sections.${s.key}`);
    const subtitle = tNav(`descriptions.${s.key}`);
    items.push({
      title,
      subtitle,
      href: `${base}${s.href}`,
      haystack: `${title} ${subtitle}`.toLowerCase(),
    });
  }

  // Lieux « autour de moi ».
  for (const c of logement.autourDeMoi.categories) {
    for (const l of c.lieux) {
      const desc = pick(l.desc, locale);
      items.push({
        title: l.nom,
        subtitle: tAutour(`categories.${c.key}`),
        href: `${base}/autour`,
        haystack: `${l.nom} ${desc}`.toLowerCase(),
      });
    }
  }

  return (
    <>
      <Header variant="sub" base={base} title={t("title")} />
      <SearchView items={items} />
    </>
  );
}
