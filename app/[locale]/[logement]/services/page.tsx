import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DoorOpen, Hourglass, Sparkles, ExternalLink, MessageCircle } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";

/**
 * Services du séjour : arrivée anticipée, départ tardif, ménage en cours de
 * séjour. Les paiements se font par les liens Stripe déjà utilisés par Josie.
 */
export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);
  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Services");
  const tDep = await getTranslations("Depart");
  const base = `/${logement.id}`;
  const anticipee = logement.arrivee.arriveeAnticipee;
  const tardif = logement.depart.departTardif;

  const carte = "rounded-[22px] bg-surface p-5 shadow-[0_2px_14px_rgba(58,46,41,0.07)]";
  const bouton =
    "flex min-h-12 items-center justify-between gap-3 rounded-full bg-terracotta px-5 font-bold text-white shadow-[0_4px_14px_rgba(215,92,69,0.3)] transition-soft active:scale-[0.98]";
  const titre = (Icon: typeof DoorOpen, txt: string) => (
    <div className="mb-2 flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-2xl bg-terracotta-soft text-terracotta-dark">
        <Icon size={20} />
      </span>
      <h2 className="font-display text-lg font-semibold text-ink">{txt}</h2>
    </div>
  );

  return (
    <>
      <Header variant="sub" base={base} title={t("title")} />
      <div className="animate-fade-rise space-y-3 px-4 py-4">
        <p className="px-1 text-sm text-muted">{t("intro")}</p>

        {anticipee && (
          <section className={carte}>
            {titre(DoorOpen, t("arriveeAnticipee"))}
            <p className="text-[15px] leading-relaxed text-ink/80">{pick(anticipee.texte, locale)}</p>
            {anticipee.url && (
              <a href={anticipee.url} target="_blank" rel="noopener noreferrer" className={`${bouton} mt-3`}>
                <span>{t("reserver")}</span>
                <ExternalLink size={18} />
              </a>
            )}
          </section>
        )}

        {tardif && (
          <section className={carte}>
            {titre(Hourglass, tDep("departTardif"))}
            <p className="text-[15px] leading-relaxed text-ink/80">{pick(tardif.texte, locale)}</p>
            <div className="mt-3 space-y-2">
              {tardif.options.map((o) => (
                <a key={o.heure} href={o.url} target="_blank" rel="noopener noreferrer" className={bouton}>
                  <span>{tDep("departTardifOption", { heure: o.heure })}</span>
                  <ExternalLink size={18} />
                </a>
              ))}
            </div>
          </section>
        )}

        <section className={carte}>
          {titre(Sparkles, tDep("menage"))}
          <p className="whitespace-pre-line text-[15px] leading-relaxed text-ink/80">
            {pick(logement.menageEnSejour, locale)}
          </p>
        </section>

        <p className="flex items-center gap-2 px-1 text-sm text-muted">
          <MessageCircle size={16} className="shrink-0 text-terracotta" />
          {t("demande")}
        </p>
      </div>
    </>
  );
}
