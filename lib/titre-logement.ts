/**
 * Nom affiché aux voyageurs. Le nom interne du logement (« Tilleul 3 »,
 * « Boucherie 1 »…) ne sert qu'à nous repérer dans l'adresse du livret :
 * il n'est jamais affiché.
 */
import type { Logement } from "@/data/types";

const TITRE: Record<string, string> = {
  fr: "Votre logement à {ville}",
  en: "Your accommodation in {ville}",
  de: "Ihre Unterkunft in {ville}",
  es: "Su alojamiento en {ville}",
  it: "Il vostro alloggio a {ville}",
};

const COURT: Record<string, string> = {
  fr: "Votre logement",
  en: "Your accommodation",
  de: "Ihre Unterkunft",
  es: "Su alojamiento",
  it: "Il vostro alloggio",
};

/** Livrets dont le nom est une marque connue des voyageurs : on le garde affiché. */
const NOM_AFFICHE = new Set(["cinema", "apto"]);

/** « Votre logement à Caen » (ou le nom, pour Cinéma Room et L'Apto). */
export function titreLogement(l: Pick<Logement, "ville"> & Partial<Pick<Logement, "id" | "nom">>, locale: string): string {
  if (l.id && l.nom && NOM_AFFICHE.has(l.id)) return l.nom;
  return (TITRE[locale] ?? TITRE.fr).replace("{ville}", l.ville);
}

/** « Votre logement » (étiquettes courtes : carte, nom d'appli). */
export function titreCourt(locale: string, l?: Pick<Logement, "id" | "nom">): string {
  if (l && NOM_AFFICHE.has(l.id)) return l.nom;
  return COURT[locale] ?? COURT.fr;
}

/**
 * Le mot d'accueil commence souvent par « Bienvenue au Tilleul 3 ! » : on retire
 * cette première phrase quand elle cite le nom interne (le bandeau dit déjà
 * « Bienvenue »).
 */
export function motAccueilSansNom(texte: string, l: Pick<Logement, "id" | "nom">): string {
  if (NOM_AFFICHE.has(l.id)) return texte;
  const i = texte.indexOf("!");
  if (i < 0) return texte;
  const sansAccent = (x: string) => x.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const premiere = texte.slice(0, i);
  const debut = /^[¡\s]*(bienvenue|welcome|willkommen|bienvenid|benvenut)/i.test(premiere);
  if (!debut || !sansAccent(premiere).includes(sansAccent(l.nom))) return texte;
  const reste = texte.slice(i + 1).trimStart();
  return reste ? reste.charAt(0).toUpperCase() + reste.slice(1) : texte;
}
