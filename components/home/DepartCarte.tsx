"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Luggage, ChevronRight, Check, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { envoyerRetour, useSejour } from "@/lib/sejour";

/**
 * Carte « Votre départ » de l'accueil. Le jour du départ (avec un lien de
 * séjour), le bouton « Je pars » ouvre la check-list : une fois validée,
 * l'équipe ménage est prévenue dans l'App Josie équipes.
 */
export default function DepartCarte({
  livret,
  base,
  horaire,
  instructions,
}: {
  livret: string;
  base: string;
  horaire: string;
  instructions: string[];
}) {
  const t = useTranslations("Accueil");
  const [sejour, recharger] = useSejour(livret);
  const [ouvert, setOuvert] = useState(false);
  const [coches, setCoches] = useState<boolean[]>(() => instructions.map(() => false));
  const [etat, setEtat] = useState<"liste" | "envoi" | "fini" | "erreur">("liste");

  const jourDepart = sejour && sejour.aujourdhui === sejour.info.depart;
  const dejaFait = sejour?.info.departFait;

  async function valider() {
    if (!sejour) return;
    setEtat("envoi");
    const ok = await envoyerRetour(sejour, { type: "depart" });
    setEtat(ok ? "fini" : "erreur");
    if (ok) setTimeout(recharger, 3000);
  }

  return (
    <section className="rounded-[22px] bg-surface p-4 shadow-[0_2px_14px_rgba(58,46,41,0.07)]">
      <Link href={`${base}/depart`} className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-terracotta-soft text-terracotta-dark">
          <Luggage size={20} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-base font-semibold text-ink">{t("votreDepart")}</span>
          <span className="block truncate text-xs text-muted">{horaire}</span>
        </span>
        <ChevronRight size={18} className="text-muted" />
      </Link>

      {jourDepart && !dejaFait && etat !== "fini" && (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#e9a23b] py-3 text-sm font-bold text-ink shadow-[0_4px_14px_rgba(233,162,59,0.35)] transition-soft active:scale-[0.98]"
        >
          <Luggage size={18} />
          {t("jePars")}
        </button>
      )}
      {(dejaFait || etat === "fini") && (
        <p className="mt-3 rounded-2xl bg-[#e3f1e6] p-3 text-sm font-semibold text-[#1f5a2e]">{t("departMerci")}</p>
      )}

      {ouvert && (
        <div className="fixed inset-0 z-50 mx-auto flex max-w-[430px] flex-col justify-end">
          <button type="button" aria-label={t("fermer")} onClick={() => setOuvert(false)} className="absolute inset-0 bg-ink/40" />
          <div role="dialog" aria-modal="true" className="relative rounded-t-[28px] bg-surface p-6 pb-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setOuvert(false)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-cream-deep text-muted"
            >
              <X size={18} />
            </button>
            <h2 className="font-display text-xl font-semibold text-ink">{t("avantDePartir")}</h2>
            <p className="mb-4 text-sm text-muted">{t("cochez")}</p>
            {etat === "fini" ? (
              <p className="rounded-2xl bg-[#e3f1e6] p-4 text-sm font-semibold text-[#1f5a2e]">{t("departMerci")}</p>
            ) : (
              <>
                <ul className="mb-5 space-y-2">
                  {instructions.map((ins, i) => (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => setCoches((c) => c.map((v, j) => (j === i ? !v : v)))}
                        className="flex w-full items-start gap-3 rounded-2xl bg-cream-deep p-3 text-left text-sm text-ink"
                      >
                        <span
                          className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 ${
                            coches[i] ? "border-terracotta bg-terracotta text-white" : "border-ink/25 bg-white"
                          }`}
                        >
                          {coches[i] && <Check size={14} strokeWidth={3} />}
                        </span>
                        {ins}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled={!coches.every(Boolean) || etat === "envoi"}
                  onClick={valider}
                  className="w-full rounded-full bg-terracotta py-3 text-sm font-bold text-white transition-soft disabled:opacity-40"
                >
                  {etat === "envoi" ? t("envoi") : t("validerDepart")}
                </button>
                {etat === "erreur" && <p className="mt-2 text-center text-sm text-terracotta-dark">{t("erreurEnvoi")}</p>}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
