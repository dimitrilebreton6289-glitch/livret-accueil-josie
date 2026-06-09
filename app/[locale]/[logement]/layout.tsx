import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getLogement, getLogementIds } from "@/data/logements";
import BottomNav from "@/components/BottomNav";
import WifiSheet from "@/components/WifiSheet";

/** Pré-génère les pages de chaque logement. */
export function generateStaticParams() {
  return getLogementIds().map((logement) => ({ logement }));
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
