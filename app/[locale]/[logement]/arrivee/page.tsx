import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Clock,
  KeyRound,
  Car,
  Luggage,
  Sofa,
  BedDouble,
  Trees,
} from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import HighlightCard from "@/components/HighlightCard";
import InfoCard from "@/components/InfoCard";
import SectionHeader from "@/components/SectionHeader";
import CopyButton from "@/components/CopyButton";

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
          <p>{pick(arrivee.checkinExpress, locale)}</p>
          {arrivee.codeBoite && (
            <div className="mt-3 flex items-center justify-between gap-3 rounded-tile bg-cream-deep p-4">
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

        {/* Parking & bagages */}
        <InfoCard icon={Car} title={t("parking")}>
          {pick(arrivee.parking, locale)}
        </InfoCard>
        <InfoCard icon={Luggage} title={t("bagages")}>
          {pick(arrivee.bagages, locale)}
        </InfoCard>

        {/* Découverte du logement, pièce par pièce */}
        <SectionHeader>{t("decouverte")}</SectionHeader>
        <InfoCard icon={Sofa} title={t("rdc")}>
          {pick(arrivee.decouverte.rdc, locale)}
        </InfoCard>
        <InfoCard icon={BedDouble} title={t("etage")}>
          {pick(arrivee.decouverte.etage, locale)}
        </InfoCard>
        <InfoCard icon={Trees} title={t("exterieur")}>
          {pick(arrivee.decouverte.exterieur, locale)}
        </InfoCard>

        {/* Équipements */}
        <SectionHeader>{t("inventaire")}</SectionHeader>
        <InfoCard>
          <ul className="flex flex-wrap gap-2">
            {equipements.map((e) => (
              <li
                key={e}
                className="rounded-full bg-cream-deep px-3 py-1.5 text-sm font-medium text-ink"
              >
                {e}
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </>
  );
}
