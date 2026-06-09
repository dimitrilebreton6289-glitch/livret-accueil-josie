import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Clock, KeyRound, Car, Luggage, DoorOpen, ListChecks } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import Accordion from "@/components/Accordion";

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
        <Accordion icon={<Clock size={20} />} title={t("horaire")} defaultOpen>
          {pick(arrivee.horaire, locale)}
        </Accordion>

        <Accordion icon={<KeyRound size={20} />} title={t("checkin")}>
          {pick(arrivee.checkinExpress, locale)}
        </Accordion>

        <Accordion icon={<Car size={20} />} title={t("parking")}>
          {pick(arrivee.parking, locale)}
        </Accordion>

        <Accordion icon={<Luggage size={20} />} title={t("bagages")}>
          {pick(arrivee.bagages, locale)}
        </Accordion>

        <Accordion icon={<DoorOpen size={20} />} title={t("decouverte")}>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-terracotta-dark">{t("rdc")}</p>
              <p>{pick(arrivee.decouverte.rdc, locale)}</p>
            </div>
            <div>
              <p className="font-semibold text-terracotta-dark">{t("etage")}</p>
              <p>{pick(arrivee.decouverte.etage, locale)}</p>
            </div>
            <div>
              <p className="font-semibold text-terracotta-dark">{t("exterieur")}</p>
              <p>{pick(arrivee.decouverte.exterieur, locale)}</p>
            </div>
          </div>
        </Accordion>

        <Accordion icon={<ListChecks size={20} />} title={t("inventaire")}>
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
        </Accordion>
      </div>
    </>
  );
}
