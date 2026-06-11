import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Clock, KeyRound, Car, Sofa, BedDouble, Trees } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick, pickList } from "@/lib/content";
import Header from "@/components/Header";
import HighlightCard from "@/components/HighlightCard";
import InfoCard from "@/components/InfoCard";
import SectionHeader from "@/components/SectionHeader";
import CopyButton from "@/components/CopyButton";
import Bullets from "@/components/Bullets";
import Chips from "@/components/Chips";

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

        {/* Accès : code de la boîte à clé + guide illustré pas à pas */}
        <InfoCard icon={KeyRound} title={t("checkin")}>
          {arrivee.codeBoite && (
            <div className="flex items-center justify-between gap-3 rounded-tile bg-cream-deep p-4">
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

          {arrivee.etapes && arrivee.etapes.length > 0 && (
            <ol className="mt-4 space-y-4">
              {arrivee.etapes.map((e, i) => (
                <li key={i}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-0.5">{pick(e.texte, locale)}</p>
                  </div>
                  {e.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={e.photo}
                      alt=""
                      className="mt-2 w-full rounded-tile object-cover shadow-[0_2px_12px_rgba(58,46,41,0.08)]"
                    />
                  )}
                </li>
              ))}
            </ol>
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
          <Bullets items={pickList(arrivee.decouverte.rdc, locale)} />
        </InfoCard>
        <InfoCard icon={BedDouble} title={t("etage")}>
          <Bullets items={pickList(arrivee.decouverte.etage, locale)} />
        </InfoCard>
        <InfoCard icon={Trees} title={t("exterieur")}>
          <Bullets items={pickList(arrivee.decouverte.exterieur, locale)} />
        </InfoCard>

        {/* Équipements */}
        <SectionHeader>{t("inventaire")}</SectionHeader>
        <InfoCard>
          <Chips items={pickList(equipements, locale)} />
        </InfoCard>
      </div>
    </>
  );
}
