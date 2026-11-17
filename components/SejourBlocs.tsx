"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, KeyRound, Camera, Star, Sparkles } from "lucide-react";
import {
  envoyerRetour,
  lienAvisPublic,
  reduirePhoto,
  useSejour,
  type Sejour,
} from "@/lib/sejour";

/**
 * Blocs du livret connecté (visibles seulement avec un lien de séjour valable) :
 * logement prêt, codes d'accès, état du logement à l'arrivée, avis au départ.
 * `montrer` choisit les blocs (page d'accueil : tous ; page Arrivée : codes).
 */
export default function SejourBlocs({
  livret,
  // « etat » (Bien installé ?) mis en pause le 17/11/2026 à la demande de
  // Dimitri : le code reste prêt, il suffit de le rajouter ici pour le réactiver.
  montrer = ["pret", "codes", "avis"],
}: {
  livret: string;
  montrer?: ("pret" | "codes" | "etat" | "avis")[];
}) {
  const [sejour, recharger] = useSejour(livret);
  if (!sejour) return null;
  const { info, aujourdhui } = sejour;
  const jourArrivee = aujourdhui === info.arrivee;
  // État du logement : du jour d'arrivée à la veille du départ.
  const pendant = aujourdhui >= info.arrivee && aujourdhui < info.depart;
  // Avis : le jour du départ et le lendemain (le lien expire ensuite).
  const finSejour = aujourdhui >= info.depart;

  return (
    <div className="space-y-3">
      {montrer.includes("pret") && jourArrivee && info.pret !== null && (
        <Pret pret={info.pret} heure={info.heureArrivee} />
      )}
      {montrer.includes("codes") && info.codes && <Codes codes={info.codes} />}
      {montrer.includes("etat") && pendant && !finSejour && !info.etatDonne && (
        <Etat sejour={sejour} onFini={recharger} />
      )}
      {montrer.includes("avis") && finSejour && !info.avisDonne && <Avis sejour={sejour} />}
    </div>
  );
}

function Pret({ pret, heure }: { pret: boolean; heure: number | null }) {
  const t = useTranslations("Sejour");
  return (
    <section
      className={`flex items-start gap-3 rounded-card p-4 ${
        pret ? "bg-[#e3f1e6] text-[#1f5a2e]" : "bg-cream-deep text-ink/85"
      }`}
    >
      {pret ? <CheckCircle2 className="mt-0.5 shrink-0" size={22} /> : <Sparkles className="mt-0.5 shrink-0 text-terracotta" size={22} />}
      <div>
        <p className="font-display font-semibold">{pret ? t("pretTitre") : t("enPreparationTitre")}</p>
        <p className="mt-0.5 text-sm">
          {pret
            ? heure !== null
              ? t("pretTexteHeure", { heure })
              : t("pretTexte")
            : t("enPreparationTexte")}
        </p>
      </div>
    </section>
  );
}

function Codes({ codes }: { codes: string }) {
  const t = useTranslations("Sejour");
  return (
    <section className="rounded-card bg-terracotta p-5 text-white shadow-[0_6px_18px_rgba(215,92,69,0.35)]">
      <div className="mb-2 flex items-center gap-2">
        <KeyRound size={20} />
        <h2 className="font-display text-base font-semibold">{t("codesTitre")}</h2>
      </div>
      <p className="whitespace-pre-line font-mono text-lg font-bold leading-relaxed">{codes}</p>
      <p className="mt-2 text-xs text-white/85">{t("codesNote")}</p>
    </section>
  );
}

function Etat({ sejour, onFini }: { sejour: Sejour; onFini: () => void }) {
  const t = useTranslations("Sejour");
  const [mode, setMode] = useState<"choix" | "probleme" | "envoi" | "merci" | "erreur">("choix");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  async function envoyer(toutVaBien: boolean) {
    setMode("envoi");
    const blob = photo ? await reduirePhoto(photo) : null;
    const ok = await envoyerRetour(sejour, {
      type: "etat",
      toutVaBien,
      message: toutVaBien ? undefined : message,
      photo: blob,
    });
    setMode(ok ? "merci" : "erreur");
    if (ok) setTimeout(onFini, 4000);
  }

  return (
    <section className="rounded-card bg-cream-deep p-5">
      <h2 className="mb-1 font-display text-base font-semibold text-terracotta-dark">{t("etatTitre")}</h2>
      {mode === "choix" && (
        <>
          <p className="mb-3 text-sm text-ink/80">{t("etatQuestion")}</p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => envoyer(true)}
              className="rounded-full bg-terracotta px-4 py-2.5 text-sm font-semibold text-white"
            >
              {t("etatOk")}
            </button>
            <button
              type="button"
              onClick={() => setMode("probleme")}
              className="rounded-full bg-surface px-4 py-2.5 text-sm font-semibold text-ink ring-1 ring-ink/10"
            >
              {t("etatProbleme")}
            </button>
          </div>
        </>
      )}
      {mode === "probleme" && (
        <div className="space-y-3">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            maxLength={2000}
            placeholder={t("etatPlaceholder")}
            className="w-full rounded-tile bg-surface p-3 text-sm text-ink ring-1 ring-ink/10"
          />
          <label className="flex cursor-pointer items-center gap-2 text-sm text-ink/80">
            <Camera size={18} className="text-terracotta" />
            <span>{photo ? photo.name : t("etatPhoto")}</span>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
            />
          </label>
          <button
            type="button"
            disabled={message.trim().length === 0 && !photo}
            onClick={() => envoyer(false)}
            className="w-full rounded-full bg-terracotta px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {t("envoyer")}
          </button>
        </div>
      )}
      {mode === "envoi" && <p className="text-sm text-ink/70">{t("envoi")}</p>}
      {mode === "merci" && <p className="text-sm text-ink/85">{t("etatMerci")}</p>}
      {mode === "erreur" && <p className="text-sm text-terracotta-dark">{t("erreur")}</p>}
    </section>
  );
}

function Avis({ sejour }: { sejour: Sejour }) {
  const t = useTranslations("Sejour");
  const [note, setNote] = useState(0);
  const [message, setMessage] = useState("");
  const [etape, setEtape] = useState<"note" | "detail" | "merci" | "erreur">("note");
  const publicLien = lienAvisPublic(sejour.info.canal);

  async function choisir(n: number) {
    setNote(n);
    const ok = await envoyerRetour(sejour, { type: "avis", note: n });
    setEtape(ok ? (n >= 4 ? "merci" : "detail") : "erreur");
  }

  async function envoyerDetail() {
    const ok = await envoyerRetour(sejour, { type: "avis", note, message });
    setEtape(ok ? "merci" : "erreur");
  }

  const lienPublic = publicLien && (
    <a
      href={publicLien.url}
      target="_blank"
      rel="noreferrer"
      className="mt-3 inline-block text-sm font-semibold text-terracotta-dark underline"
    >
      {t("avisPublicLien", { plateforme: publicLien.nom })}
    </a>
  );

  return (
    <section className="rounded-card bg-cream-deep p-5">
      <h2 className="mb-1 font-display text-base font-semibold text-terracotta-dark">{t("avisTitre")}</h2>
      {etape === "note" && (
        <>
          <p className="mb-3 text-sm text-ink/80">{t("avisQuestion")}</p>
          <div className="flex justify-center gap-2" role="radiogroup" aria-label={t("avisTitre")}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                aria-label={`${n}/5`}
                onClick={() => choisir(n)}
                className="p-1 text-terracotta"
              >
                <Star size={34} fill={n <= note ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
        </>
      )}
      {etape === "detail" && (
        <div className="space-y-3">
          <p className="text-sm text-ink/80">{t("avisPrive")}</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            maxLength={2000}
            className="w-full rounded-tile bg-surface p-3 text-sm text-ink ring-1 ring-ink/10"
          />
          <button
            type="button"
            disabled={message.trim().length === 0}
            onClick={envoyerDetail}
            className="w-full rounded-full bg-terracotta px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {t("envoyer")}
          </button>
          {lienPublic}
        </div>
      )}
      {etape === "merci" && (
        <div>
          <p className="text-sm text-ink/85">{note >= 4 ? t("avisMerciBon") : t("avisMerci")}</p>
          {lienPublic}
        </div>
      )}
      {etape === "erreur" && <p className="text-sm text-terracotta-dark">{t("erreur")}</p>}
    </section>
  );
}
