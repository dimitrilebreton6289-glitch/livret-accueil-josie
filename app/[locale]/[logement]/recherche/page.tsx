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

  // Sections. Le WiFi n'a pas de page : son résultat ouvre le volet WiFi.
  for (const s of SECTIONS) {
    const title = tNav(`sections.${s.key}`);
    const subtitle = tNav(`descriptions.${s.key}`);
    items.push({
      title,
      subtitle,
      href: `${base}${s.href}`,
      haystack: `${title} ${subtitle}`.toLowerCase(),
      sheet: s.isSheet,
    });
  }

  // Infos pratiques : chaque sous-partie (jacuzzi, TV, chauffage…) est cherchable.
  for (const [i, sec] of (logement.pratique.aSavoirSections ?? []).entries()) {
    const titre = pick(sec.titre, locale);
    items.push({
      title: titre,
      subtitle: tNav("sections.pratique"),
      href: `${base}/pratique#sec-${i}`,
      haystack: `${titre} ${pick(sec.contenu, locale)}`.toLowerCase(),
    });
  }

  // Lieux « autour de moi ».
  for (const c of logement.autourDeMoi.categories) {
    for (const l of c.lieux) {
      const nom = pick(l.nom, locale);
      const desc = pick(l.desc, locale);
      items.push({
        title: nom,
        subtitle: tAutour(`categories.${c.key}`),
        href: `${base}/autour`,
        haystack: `${nom} ${desc}`.toLowerCase(),
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
