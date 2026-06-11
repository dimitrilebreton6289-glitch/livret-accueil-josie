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
  PlayCircle,
} from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick, pickList } from "@/lib/content";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import Bullets from "@/components/Bullets";
import Chips from "@/components/Chips";
import VideoEmbed from "@/components/VideoEmbed";

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
        {/* À savoir */}
        <InfoCard icon={Info} title={t("aSavoir")}>
          <Bullets items={pickList(pratique.aSavoir, locale)} />
        </InfoCard>

        {/* Électroménager */}
        <InfoCard icon={CookingPot} title={t("electromenager")}>
          <Chips items={pickList(pratique.electromenager, locale)} />
        </InfoCard>

        {/* Vidéos (mode d'emploi : télévision, etc.) — juste après l'électroménager */}
        {logement.videos?.map((v, i) => (
          <InfoCard key={i} icon={PlayCircle} title={pick(v.titre, locale)}>
            <VideoEmbed url={v.url} title={pick(v.titre, locale)} />
          </InfoCard>
        ))}

        {/* Règlement intérieur */}
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

        {/* Poubelles / tri */}
        <InfoCard icon={Trash2} title={t("poubelles")}>
          {pick(pratique.poubelles, locale)}
        </InfoCard>
      </div>
    </>
  );
}
