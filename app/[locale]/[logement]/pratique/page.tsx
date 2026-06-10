import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Info,
  CookingPot,
  ScrollText,
  Trash2,
  PawPrint,
  Users,
  CigaretteOff,
  PartyPopper,
  Camera,
  Moon,
} from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";

export default async function PratiquePage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Pratique");
  const { pratique } = logement;
  const r = pratique.reglementInterieur;
  const base = `/${logement.id}`;

  // tone : "neutral" | "ok" | "no"
  const rules: { icon: typeof Users; label: string; tone: "neutral" | "ok" | "no" }[] =
    [
      { icon: Users, label: t("capacite", { n: r.capaciteMax }), tone: "neutral" },
      {
        icon: CigaretteOff,
        label: r.nonFumeur ? t("nonFumeur") : t("fumeurOk"),
        tone: r.nonFumeur ? "no" : "ok",
      },
      {
        icon: PawPrint,
        label: r.animauxAcceptes ? t("animauxOui") : t("animauxNon"),
        tone: r.animauxAcceptes ? "ok" : "no",
      },
      {
        icon: PartyPopper,
        label: r.evenementsAutorises ? t("evenementsOui") : t("evenementsNon"),
        tone: r.evenementsAutorises ? "ok" : "no",
      },
      {
        icon: Camera,
        label: r.tournagesAutorises ? t("tournagesOui") : t("tournagesNon"),
        tone: r.tournagesAutorises ? "ok" : "no",
      },
      { icon: Moon, label: pick(r.horairesCalme, locale), tone: "neutral" },
    ];

  const toneClass = {
    neutral: "bg-cream-deep text-ink",
    ok: "bg-success/10 text-success",
    no: "bg-danger/10 text-danger",
  } as const;

  return (
    <>
      <Header variant="sub" base={base} title={t("title")} />

      <div className="animate-fade-rise space-y-3 px-4 py-4">
        <InfoCard icon={Info} title={t("aSavoir")}>
          {pick(pratique.aSavoir, locale)}
        </InfoCard>

        <InfoCard icon={CookingPot} title={t("electromenager")}>
          {pick(pratique.electromenager, locale)}
        </InfoCard>

        <InfoCard icon={ScrollText} title={t("reglement")}>
          <ul className="space-y-2">
            {rules.map((rule, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 rounded-tile px-3 py-2 text-sm font-medium ${toneClass[rule.tone]}`}
              >
                <rule.icon size={18} className="shrink-0" />
                {rule.label}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard icon={Trash2} title={t("poubelles")}>
          {pick(pratique.poubelles, locale)}
        </InfoCard>

        <InfoCard icon={PawPrint} title={t("animaux")}>
          {pick(pratique.animaux, locale)}
        </InfoCard>
      </div>
    </>
  );
}
