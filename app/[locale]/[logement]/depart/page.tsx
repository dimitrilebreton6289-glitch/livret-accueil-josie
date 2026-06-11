import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Clock, ClipboardList, Trash2, Sparkles } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import HighlightCard from "@/components/HighlightCard";
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
        {/* Heure de départ, en évidence */}
        <HighlightCard
          icon={Clock}
          label={t("horaire")}
          value={pick(depart.horaire, locale)}
        />

        {/* Checklist « avant de partir » */}
        <InfoCard icon={ClipboardList} title={t("instructions")}>
          <ol className="space-y-3">
            {depart.instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5">{pick(step, locale)}</span>
              </li>
            ))}
          </ol>
        </InfoCard>

        {/* Poubelles */}
        <InfoCard icon={Trash2} title={t("poubelles")}>
          {pick(pratique.poubelles, locale)}
        </InfoCard>

        {/* Ménage pendant le séjour (service en cours de séjour, ≠ ménage de départ) */}
        <InfoCard icon={Sparkles} title={t("menage")}>
          {pick(menageEnSejour, locale)}
        </InfoCard>
      </div>
    </>
  );
}
