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

/** « Votre logement à Caen ». */
export function titreLogement(l: Pick<Logement, "ville">, locale: string): string {
  return (TITRE[locale] ?? TITRE.fr).replace("{ville}", l.ville);
}

/** « Votre logement » (étiquettes courtes : carte, nom d'appli). */
export function titreCourt(locale: string): string {
  return COURT[locale] ?? COURT.fr;
}

/**
 * Le mot d'accueil commence souvent par « Bienvenue au Tilleul 3 ! » : on retire
 * cette première phrase quand elle cite le nom interne (le bandeau dit déjà
 * « Bienvenue »).
 */
export function motAccueilSansNom(texte: string, l: Pick<Logement, "nom">): string {
  const i = texte.indexOf("!");
  if (i < 0) return texte;
  const sansAccent = (x: string) => x.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const premiere = texte.slice(0, i);
  const debut = /^[¡\s]*(bienvenue|welcome|willkommen|bienvenid|benvenut)/i.test(premiere);
  if (!debut || !sansAccent(premiere).includes(sansAccent(l.nom))) return texte;
  const reste = texte.slice(i + 1).trimStart();
  return reste ? reste.charAt(0).toUpperCase() + reste.slice(1) : texte;
}
