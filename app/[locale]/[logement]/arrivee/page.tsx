import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Clock, KeyRound, Car, Sofa, BedDouble, Trees } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import HighlightCard from "@/components/HighlightCard";
import InfoCard from "@/components/InfoCard";
import SectionHeader from "@/components/SectionHeader";
import CopyButton from "@/components/CopyButton";
import Bullets from "@/components/Bullets";
import Chips from "@/components/Chips";
import VideoEmbed from "@/components/VideoEmbed";

export default async function ArriveePage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Arrivee");
  const { arrivee, equipements } = logement;
  const base = `/${logement.id}`;

  return (
    <>
      <Header variant="sub" base={base} title={t("title")} />

      <div className="animate-fade-rise space-y-3 px-4 py-4">
        {/* Heure d'arrivée, en évidence */}
        <HighlightCard
          icon={Clock}
          label={t("horaire")}
          value={pick(arrivee.horaire, locale)}
        />

        {/* Accès + code de la boîte à clé */}
        <InfoCard icon={KeyRound} title={t("checkin")}>
          <Bullets items={arrivee.checkinExpress} />
          {arrivee.codeBoite && (
            <div className="mt-4 flex items-center justify-between gap-3 rounded-tile bg-cream-deep p-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {t("code")}
                </p>
                <p className="font-mono text-3xl font-extrabold tracking-[0.25em] text-terracotta-dark">
                  {arrivee.codeBoite}
                </p>
              </div>
              <CopyButton value={arrivee.codeBoite} />
            </div>
          )}
        </InfoCard>

        {/* Stationnement & bagages */}
        <InfoCard icon={Car} title={`${t("parking")} & ${t("bagages")}`}>
          <Bullets
            items={[pick(arrivee.parking, locale), pick(arrivee.bagages, locale)]}
          />
        </InfoCard>

        {/* Découverte du logement, pièce par pièce */}
        <SectionHeader>{t("decouverte")}</SectionHeader>
        <InfoCard icon={Sofa} title={t("rdc")}>
          <Bullets items={arrivee.decouverte.rdc} />
        </InfoCard>
        <InfoCard icon={BedDouble} title={t("etage")}>
          <Bullets items={arrivee.decouverte.etage} />
        </InfoCard>
        <InfoCard icon={Trees} title={t("exterieur")}>
          <Bullets items={arrivee.decouverte.exterieur} />
        </InfoCard>

        {/* Visite en vidéo (si des vidéos sont fournies) */}
        {logement.videos && logement.videos.length > 0 && (
          <>
            <SectionHeader>{t("video")}</SectionHeader>
            {logement.videos.map((v, i) => (
              <VideoEmbed key={i} url={v.url} title={pick(v.titre, locale)} />
            ))}
          </>
        )}

        {/* Équipements */}
        <SectionHeader>{t("inventaire")}</SectionHeader>
        <InfoCard>
          <Chips items={equipements} />
        </InfoCard>
      </div>
    </>
  );
}
