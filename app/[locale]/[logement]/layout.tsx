import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLogement, getLogementIds } from "@/data/logements";
import BottomNav from "@/components/BottomNav";
import WifiSheet from "@/components/WifiSheet";

/** Pré-génère les pages de chaque logement. */
export function generateStaticParams() {
  return getLogementIds().map((logement) => ({ logement }));
}

/**
 * Titre + aperçu (Open Graph) propres à chaque logement : quand on partage le
 * lien (WhatsApp, SMS, mail…), l'aperçu affiche le NOM du logement et sa photo.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}): Promise<Metadata> {
  const { locale, logement: id } = await params;
  const logement = getLogement(id);
  if (!logement) return {};

  const t = await getTranslations({ locale, namespace: "Nav" });
  const titre = `${logement.nom} — ${t("appTitle")}`;
  const description = `${t("appTitle")} · ${logement.ville}`;

  return {
    title: titre,
    description,
    openGraph: {
      title: titre,
      description,
      type: "website",
      locale,
      images: [{ url: logement.cover, alt: logement.nom }],
    },
    twitter: {
      card: "summary_large_image",
      title: titre,
      description,
      images: [logement.cover],
    },
  };
}

export default async function LogementLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const base = `/${logement.id}`;

  return (
    <div className="mx-auto min-h-dvh max-w-[430px] bg-cream">
      <div className="pb-28">{children}</div>
      <BottomNav base={base} />
      <WifiSheet
        reseau={logement.wifi.reseau}
        motDePasse={logement.wifi.motDePasse}
      />
    </div>
  );
}
