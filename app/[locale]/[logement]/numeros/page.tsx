import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PhoneCall, Ambulance, ShieldAlert, Flame, LifeBuoy } from "lucide-react";
import { getLogement } from "@/data/logements";
import { pick } from "@/lib/content";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";

export default async function NumerosPage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Numeros");
  const tc = await getTranslations("Common");
  const { numerosUtiles } = logement;
  const { contact, urgences } = numerosUtiles;
  const base = `/${logement.id}`;

  const emergencies = [
    { icon: Ambulance, label: t("samu"), num: urgences.samu },
    { icon: ShieldAlert, label: t("police"), num: urgences.police },
    { icon: Flame, label: t("pompiers"), num: urgences.pompiers },
    { icon: LifeBuoy, label: t("europeen"), num: urgences.europeen },
  ];

  return (
    <>
      <Header variant="sub" base={base} title={t("title")} />

      <div className="animate-fade-rise space-y-3 px-4 py-4">
        <InfoCard icon={PhoneCall} title={t("contact")}>
          <p className="font-semibold text-ink">{contact.nom}</p>
          <p className="mt-1 text-muted">{pick(numerosUtiles.note, locale)}</p>
          <a
            href={`tel:${contact.tel}`}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-terracotta px-6 font-bold text-white transition-soft active:scale-95"
          >
            <PhoneCall size={18} />
            {tc("call")} · {contact.tel}
          </a>
        </InfoCard>

        <section>
          <h2 className="mb-3 mt-2 px-1 font-display text-lg font-semibold text-terracotta-dark">
            {t("urgences")}
          </h2>
          <ul className="grid grid-cols-2 gap-3">
            {emergencies.map((e) => (
              <li key={e.label}>
                <a
                  href={`tel:${e.num}`}
                  className="flex flex-col items-center gap-1 rounded-card bg-surface p-4 text-center shadow-[0_2px_12px_rgba(58,46,41,0.06)] transition-soft active:scale-[0.98]"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark">
                    <e.icon size={22} />
                  </span>
                  <span className="text-sm font-semibold text-ink">{e.label}</span>
                  <span className="text-2xl font-extrabold text-terracotta">
                    {e.num}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
