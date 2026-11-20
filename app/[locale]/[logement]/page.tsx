import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DoorOpen, Info, Phone, MapPin, Clapperboard, ChevronRight, Navigation, KeyRound } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import JosieAvatar from "@/components/JosieAvatar";
import VideoEmbed from "@/components/VideoEmbed";
import Accordion from "@/components/Accordion";
import WeatherCard from "@/components/WeatherCard";
import SejourBlocs from "@/components/SejourBlocs";
import ADecouvrir from "@/components/ADecouvrir";
import HeroSejour from "@/components/home/HeroSejour";
import Tuiles from "@/components/home/Tuiles";
import DepartCarte from "@/components/home/DepartCarte";
import IdeeDuJour from "@/components/home/IdeeDuJour";
import Installer from "@/components/home/Installer";
import { aDecouvrir, categoriesVM } from "@/lib/lieux-vm";
import { motAccueilSansNom, titreLogement } from "@/lib/titre-logement";

/**
 * Accueil du livret, en « tableau de bord » : grande photo, mot d'Agathe,
 * séjour (logement prêt, codes…), arrivée, adresse, tuiles (WiFi, logement,
 * carte, services), idée du jour, adresses à découvrir, départ (« Je pars »).
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Nav");
  const tHome = await getTranslations("Home");
  const tA = await getTranslations("Accueil");
  const base = `/${logement.id}`;

  const decouvrir = aDecouvrir(logement, locale);
  const nbAdresses = categoriesVM(logement, locale).reduce((n, c) => n + c.places.length, 0);
  const wifiDispo =
    Boolean(logement.wifi.motDePasse) &&
    !/^pas de wifi/i.test(logement.wifi.reseau) &&
    !/^prévoyez/i.test(logement.wifi.motDePasse);
  const aServices = Boolean(logement.arrivee.arriveeAnticipee || logement.depart.departTardif);
  const carte = "rounded-[22px] bg-surface shadow-[0_2px_14px_rgba(58,46,41,0.07)]";

  return (
    <>
      <Header variant="home" base={base} />

      <div className="animate-fade-rise space-y-3 px-4 pb-6 pt-3">
        {/* Grande photo + nom du logement (+ jour du séjour avec un lien de séjour) */}
        <section className="relative h-64 overflow-hidden rounded-[28px] shadow-[0_8px_28px_rgba(58,46,41,0.18)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logement.cover} alt={titreLogement(logement, locale)} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1f1a]/85 via-[#2b1f1a]/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-sm font-semibold text-white/85">{tA("bienvenue")}</p>
            <h1 className="font-display text-[30px] font-semibold leading-tight text-white">{titreLogement(logement, locale)}</h1>
            <HeroSejour livret={logement.id} />
          </div>
        </section>
        {logement.coverCredit && (
          <p className="-mt-1 px-2 text-[10px] leading-tight text-muted/70">{logement.coverCredit}</p>
        )}

        {/* Mot d'Agathe */}
        <section className={`${carte} p-5`}>
          <p className="text-[15px] italic leading-relaxed text-ink/85">« {motAccueilSansNom(pick(logement.motAccueil, locale), logement)} »</p>
          <div className="mt-3 flex items-center gap-2">
            <JosieAvatar size={30} />
            <span className="text-sm font-bold text-terracotta-dark">Agathe</span>
            <span className="text-xs text-muted">· {tA("votreHote")}</span>
          </div>
        </section>

        {/* Livret connecté : logement prêt, codes, état à l'arrivée, avis */}
        <SejourBlocs livret={logement.id} />

        {/* Comment entrer */}
        <Link
          href={`${base}/arrivee`}
          className="flex items-center gap-3 rounded-[22px] bg-terracotta p-4 text-white shadow-[0_6px_18px_rgba(215,92,69,0.35)] transition-soft active:scale-[0.99]"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
            <DoorOpen size={24} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs text-white/85">{pick(logement.arrivee.horaire, locale)}</span>
            <span className="block font-display text-lg font-semibold">{tA("commentEntrer")}</span>
          </span>
          <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-terracotta-dark">
            <KeyRound size={14} /> {tA("guide")}
          </span>
        </Link>

        {/* Adresse + itinéraire */}
        <a
          href={logement.itineraire}
          target="_blank"
          rel="noopener noreferrer"
          className={`${carte} flex items-center gap-3 p-3 transition-soft active:scale-[0.99]`}
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-cream-deep text-terracotta">
            <MapPin size={20} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs text-muted">{tA("adresse")}</span>
            <span className="block truncate text-sm font-bold text-ink">{logement.adresse}</span>
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-terracotta-dark">
            <Navigation size={14} /> {tA("itineraire")}
          </span>
        </a>

        {/* Tuiles */}
        <Tuiles
          base={base}
          reseau={logement.wifi.reseau}
          wifiDispo={wifiDispo}
          equipements={logement.equipements}
          nbAdresses={nbAdresses}
          aServices={aServices}
        />

        {/* Idée du jour (selon la météo) */}
        <IdeeDuJour places={aDecouvrir(logement, locale, 80)} coords={logement.coords} />

        {/* Adresses à découvrir */}
        <div className="pt-2">
          <ADecouvrir places={decouvrir} pool={aDecouvrir(logement, locale, 200)} autourHref={`${base}/autour`} />
        </div>

        {/* Météo des prochains jours */}
        <WeatherCard coords={logement.coords} />

        {/* Vidéo de présentation du logement */}
        {logement.videoPresentation && (
          <section className={`${carte} p-5`}>
            <h2 className="mb-3 font-display text-base font-semibold text-terracotta-dark">{tHome("videoTitle")}</h2>
            <VideoEmbed
              url={logement.videoPresentation.url}
              title={tHome("videoTitle")}
              portrait={logement.videoPresentation.portrait}
            />
          </section>
        )}

        {/* Visite guidée en vidéo, pièce par pièce */}
        {logement.visiteMaison && logement.visiteMaison.length > 0 && (
          <Accordion icon={<Clapperboard size={20} />} title={tHome("discoverVideoTitle")}>
            <div className="-mx-4 -mb-4 space-y-5 rounded-b-card bg-cream-deep px-4 pb-4 pt-3">
              {logement.visiteMaison.map((groupe, gi) => (
                <div key={gi}>
                  <h3 className="mb-2.5 font-display text-sm font-semibold text-ink/80">{pick(groupe.titre, locale)}</h3>
                  <div className="space-y-2">
                    {groupe.videos.map((v, vi) => (
                      <Accordion key={vi} title={pick(v.titre, locale)}>
                        {v.texte && <p>{pick(v.texte, locale)}</p>}
                        {v.url && (
                          <div className={v.texte ? "mt-3" : ""}>
                            <VideoEmbed url={v.url} title={pick(v.titre, locale)} portrait={v.portrait} preload="none" />
                          </div>
                        )}
                        {v.photo && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={v.photo}
                            alt={pick(v.titre, locale)}
                            loading="lazy"
                            className={`w-full rounded-tile object-cover shadow-[0_2px_12px_rgba(58,46,41,0.08)] ${
                              v.texte || v.url ? "mt-3" : ""
                            }`}
                          />
                        )}
                      </Accordion>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        )}

        {/* Départ (« Je pars » le jour du départ) */}
        <DepartCarte
          livret={logement.id}
          base={base}
          horaire={pick(logement.depart.horaire, locale)}
          instructions={logement.depart.instructions.map((i) => pick(i, locale))}
        />

        {/* Le reste du livret */}
        <section className={`${carte} divide-y divide-cream-deep`}>
          {[
            { href: `${base}/pratique`, icon: Info, label: t("sections.pratique"), desc: t("descriptions.pratique") },
            { href: `${base}/numeros`, icon: Phone, label: t("sections.numeros"), desc: t("descriptions.numeros") },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="flex items-center gap-3 p-4 transition-soft active:bg-cream">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cream-deep text-terracotta-dark">
                <r.icon size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-ink">{r.label}</span>
                <span className="block truncate text-xs text-muted">{r.desc}</span>
              </span>
              <ChevronRight size={18} className="text-muted" />
            </Link>
          ))}
        </section>

        <Installer />
      </div>
    </>
  );
}
