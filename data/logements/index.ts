import type { Logement } from "../types";
import { granville } from "./granville";
import { caen } from "./caen";
import { vaugueux1 } from "./vaugueux1";
import { fleur } from "./fleur";
import { mer } from "./mer";
import { boheme } from "./boheme";
import { saintjean } from "./saintjean";
import { monnaie } from "./monnaie";
import { houlgate1, houlgate2, houlgate3, houlgate4 } from "./houlgate";
import { malo } from "./malo";
import { memorial } from "./memorial";
import { tilleul3 } from "./tilleul3";
import { cinema } from "./cinema";
import { apto } from "./apto";
import { tilleul8 } from "./tilleul8";
import { vacherie } from "./vacherie";
import { adn } from "./adn";
import { boucherie1 } from "./boucherie1";
// Livrets refaits depuis StyQR (novembre 2026)
import { boucherie2 } from "./boucherie2";
import { boucherie3 } from "./boucherie3";
import { chateau } from "./chateau";
import { saintpierre } from "./saintpierre";
import { cheztheo } from "./cheztheo";
import { geole } from "./geole";
import { numero4 } from "./numero4";
import { numero7 } from "./numero7";
import { duplex } from "./duplex";
import { vert } from "./vert";
import { simone } from "./simone";
import { perruche } from "./perruche";
import { tilleul2 } from "./tilleul2";
import { tilleul4 } from "./tilleul4";
import { tilleul9 } from "./tilleul9";
import { gemare } from "./gemare";
import { thies } from "./thies";
import { demolombe } from "./demolombe";
import { pigaciere } from "./pigaciere";
import { lappart } from "./lappart";
import { loft } from "./loft";
import { maison111 } from "./maison111";
import { carlito } from "./carlito";
import { saintsauveur } from "./saintsauveur";
import { bayeuxcave } from "./bayeuxcave";
import { saintpatrice } from "./saintpatrice";
import { ouistreham } from "./ouistreham";
import { trouville } from "./trouville";
import { studio29 } from "./studio29";
import { chezjohan } from "./chezjohan";
import { vauquelin } from "./vauquelin";
import { chezgeo } from "./chezgeo";
import { desmoueux } from "./desmoueux";
import { studio48 } from "./studio48";
import { maltot10 } from "./10abc";

/**
 * Registre des logements.
 * Pour AJOUTER un logement :
 *   1. Créez data/logements/<id>.ts (copiez granville.ts comme modèle).
 *   2. Importez-le ici et ajoutez-le au tableau ci-dessous.
 * Son livret sera alors accessible sur /<langue>/<id>.
 */
export const logements: Logement[] = [granville, caen, vaugueux1, fleur, mer, boheme, saintjean, monnaie, houlgate1, houlgate2, houlgate3, houlgate4, malo, memorial, tilleul3, tilleul8, cinema, apto, vacherie, adn, boucherie1,
  boucherie2, boucherie3, chateau, saintpierre, cheztheo, geole, numero4, numero7, duplex, vert, simone, perruche, tilleul2, tilleul4, tilleul9, gemare, thies, demolombe, pigaciere, lappart, loft, maison111, carlito, saintsauveur, bayeuxcave, saintpatrice, ouistreham, trouville, studio29, chezjohan, vauquelin, chezgeo, desmoueux, studio48, maltot10,
];

/** Retourne un logement par son identifiant (ou undefined). */
export function getLogement(id: string): Logement | undefined {
  return logements.find((l) => l.id === id);
}

/** Liste des identifiants (pour la génération statique des routes). */
export function getLogementIds(): string[] {
  return logements.map((l) => l.id);
}
