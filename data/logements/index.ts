import type { Logement } from "../types";
import { granville } from "./granville";
import { caen } from "./caen";
import { fleur } from "./fleur";
import { mer } from "./mer";
import { boheme } from "./boheme";
import { saintjean } from "./saintjean";
import { quais } from "./quais";

/**
 * Registre des logements.
 * Pour AJOUTER un logement :
 *   1. Créez data/logements/<id>.ts (copiez granville.ts comme modèle).
 *   2. Importez-le ici et ajoutez-le au tableau ci-dessous.
 * Son livret sera alors accessible sur /<langue>/<id>.
 */
export const logements: Logement[] = [granville, caen, fleur, mer, boheme, saintjean, quais];

/** Retourne un logement par son identifiant (ou undefined). */
export function getLogement(id: string): Logement | undefined {
  return logements.find((l) => l.id === id);
}

/** Liste des identifiants (pour la génération statique des routes). */
export function getLogementIds(): string[] {
  return logements.map((l) => l.id);
}
