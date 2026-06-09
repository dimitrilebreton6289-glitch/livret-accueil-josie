import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Clock, ClipboardList, Trash2, Sparkles, Check } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import Accordion from "@/components/Accordion";
import InfoCard from "@/components/InfoCard";

export default async function DepartPage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Depart");
  const { depart, pratique, menageEnSejour } = logement;
  const base = `/${logement.id}`;

  return (
    <>
      <Header variant="sub" base={base} title={t("title")} />

      <div className="animate-fade-rise space-y-3 px-4 py-4">
        <InfoCard icon={ClipboardList} title={t("instructions")}>
          <ul className="space-y-2.5">
            {depart.instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark">
                  <Check size={15} />
                </span>
                <span>{pick(step, locale)}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <Accordion icon={<Clock size={20} />} title={t("horaire")} defaultOpen>
          {pick(depart.horaire, locale)}
        </Accordion>

        <Accordion icon={<Trash2 size={20} />} title={t("poubelles")}>
          {pick(pratique.poubelles, locale)}
        </Accordion>

        <Accordion icon={<Sparkles size={20} />} title={t("menage")}>
          {pick(menageEnSejour, locale)}
        </Accordion>
      </div>
    </>
  );
}
