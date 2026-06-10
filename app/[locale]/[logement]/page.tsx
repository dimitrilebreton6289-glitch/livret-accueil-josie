import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LogIn, LogOut, Info, Compass, Phone, MapPin } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import MenuCard from "@/components/MenuCard";
import WifiMenuCard from "@/components/WifiMenuCard";
import JosieAvatar from "@/components/JosieAvatar";

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
  const base = `/${logement.id}`;

  return (
    <>
      <Header variant="home" base={base} />

      <div className="animate-fade-rise px-4">
        {/* Photo de couverture */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logement.cover}
          alt={logement.nom}
          className="mt-4 h-44 w-full rounded-card object-cover shadow-[0_2px_12px_rgba(58,46,41,0.08)]"
        />
        {logement.coverCredit && (
          <p className="mt-1 px-1 text-[10px] leading-tight text-muted/70">
            {logement.coverCredit}
          </p>
        )}

        <div className="mt-5 space-y-3">
          {/* 1. Itinéraire (carte mise en avant) */}
          <MenuCard
            icon={MapPin}
            label={tHome("directions")}
            desc={logement.adresse}
            externalHref={logement.itineraire}
            featured
          />

          {/* 2. Mot d'accueil */}
          <section className="rounded-card bg-cream-deep p-5">
            <div className="flex items-start gap-3">
              <JosieAvatar size={52} className="shrink-0" />
              <div>
                <h2 className="mb-1 font-display text-base font-semibold text-terracotta-dark">
                  {tHome("welcomeTitle")}
                </h2>
                <p className="text-[15px] leading-relaxed text-ink/85">
                  {pick(logement.motAccueil, locale)}
                </p>
              </div>
            </div>
          </section>

          {/* 3–8. Sections */}
          <MenuCard
            icon={LogIn}
            label={t("sections.arrivee")}
            desc={t("descriptions.arrivee")}
            href={`${base}/arrivee`}
          />
          <MenuCard
            icon={LogOut}
            label={t("sections.depart")}
            desc={t("descriptions.depart")}
            href={`${base}/depart`}
          />
          <MenuCard
            icon={Info}
            label={t("sections.pratique")}
            desc={t("descriptions.pratique")}
            href={`${base}/pratique`}
          />
          <WifiMenuCard />
          <MenuCard
            icon={Compass}
            label={t("sections.autour")}
            desc={t("descriptions.autour")}
            href={`${base}/autour`}
          />
          <MenuCard
            icon={Phone}
            label={t("sections.numeros")}
            desc={t("descriptions.numeros")}
            href={`${base}/numeros`}
          />
        </div>
      </div>
    </>
  );
}
