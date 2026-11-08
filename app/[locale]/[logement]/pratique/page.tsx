import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Info,
  CookingPot,
  ScrollText,
  PawPrint,
  Users,
  CigaretteOff,
  PartyPopper,
  Camera,
  Moon,
  PlayCircle,
  Droplet,
  Clapperboard,
  Gamepad2,
  Bath,
  Bike,
  BedDouble,
  ShowerHead,
  Thermometer,
  Cctv,
  Utensils,
  Leaf,
  Flame,
  Trees,
  Dices,
} from "lucide-react";

/**
 * Icône (lucide) affichée dans le badge rond de chaque section « à savoir »,
 * à la place de l'émoji en tête de titre. La clé est l'émoji du titre, privé
 * de son éventuel sélecteur de variation (️), pour un appariement fiable.
 */
const SECTION_ICONS: Record<string, typeof Info | undefined> = {
  "🚱": Droplet,
  "🎬": Clapperboard,
  "🎮": Gamepad2,
  "🛁": Bath,
  "🚴": Bike,
  "🛏": BedDouble,
  "🍳": CookingPot,
  "🚿": ShowerHead,
  "🌡": Thermometer,
  "👥": Users,
  "📹": Cctv,
  "🍽": Utensils,
  "🌿": Leaf,
  "🔥": Flame,
  "🌳": Trees,
  "🎲": Dices,
};

/** Sépare l'émoji de tête d'un titre et renvoie l'icône associée + le libellé nettoyé. */
function sectionIcon(title: string): { Icon: typeof Info; label: string } {
  const sp = title.indexOf(" ");
  if (sp > 0) {
    const token = title.slice(0, sp).replace(/️/g, "");
    const Icon = SECTION_ICONS[token];
    if (Icon) return { Icon, label: title.slice(sp + 1) };
  }
  return { Icon: Info, label: title };
}
import { getLogement } from "@/data/logements";
import { pick, pickList } from "@/lib/content";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import Bullets from "@/components/Bullets";
import Chips from "@/components/Chips";
import VideoEmbed from "@/components/VideoEmbed";
import Accordion from "@/components/Accordion";
import SectionHeader from "@/components/SectionHeader";

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
      // Ligne « tournages » affichée uniquement si le champ est renseigné.
      ...(r.tournagesAutorises !== undefined
        ? [
            {
              icon: Camera,
              label: r.tournagesAutorises ? t("tournagesOui") : t("tournagesNon"),
              tone: (r.tournagesAutorises ? "ok" : "no") as "ok" | "no",
            },
          ]
        : []),
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
        {/* À savoir : sous-parties dépliables si renseignées, sinon liste à puces */}
        {pratique.aSavoirSections && pratique.aSavoirSections.length > 0 ? (
          <>
            <SectionHeader>{t("aSavoir")}</SectionHeader>
            <div className="space-y-3">
              {pratique.aSavoirSections.map((sec, i) => {
                const picked = pick(sec.titre, locale);
                // Icônes (au lieu des émojis) sur les livrets Cinéma Room et Apto.
                const useIcons = id === "cinema" || id === "apto";
                const { Icon, label } = useIcons
                  ? sectionIcon(picked)
                  : { Icon: null as typeof Info | null, label: picked };
                return (
                <Accordion
                  key={i}
                  icon={Icon ? <Icon size={20} /> : undefined}
                  title={label}
                  defaultOpen={i === 0}
                >
                  <p className="whitespace-pre-line">{pick(sec.contenu, locale)}</p>
                  {sec.video && (
                    <div className="mt-3">
                      <VideoEmbed
                        url={sec.video}
                        title={pick(sec.titre, locale)}
                        portrait={sec.videoPortrait}
                      />
                    </div>
                  )}
                  {sec.photos && sec.photos.length > 0 && (
                    <div className="mt-3 space-y-3">
                      {sec.photos.map((p, j) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={j}
                          src={p}
                          alt=""
                          className="w-full rounded-tile object-cover shadow-[0_2px_12px_rgba(58,46,41,0.08)]"
                        />
                      ))}
                    </div>
                  )}
                </Accordion>
                );
              })}
            </div>
          </>
        ) : (
          <InfoCard icon={Info} title={t("aSavoir")}>
            <Bullets items={pickList(pratique.aSavoir, locale)} />
          </InfoCard>
        )}

        {/* Électroménager */}
        <InfoCard icon={CookingPot} title={t("electromenager")}>
          <Chips items={pickList(pratique.electromenager, locale)} />
        </InfoCard>

        {/* Vidéos (mode d'emploi : télévision, etc.) — juste après l'électroménager */}
        {logement.videos?.map((v, i) => (
          <InfoCard key={i} icon={PlayCircle} title={pick(v.titre, locale)}>
            <VideoEmbed url={v.url} title={pick(v.titre, locale)} portrait={v.portrait} />
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
      </div>
    </>
  );
}
