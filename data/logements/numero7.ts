import type { Logement } from "../types";
import { caen } from "./caen";
import { caponiere46 as c } from "./numero4";

/**
 * Logement « Numéro 7 » — studio au 2e étage (sans ascenseur) du 46 rue
 * Caponière, porte n° 7. Même immeuble que Numéro 4, Duplex et Vert : les
 * textes communs (parking, poubelles, quartier, autour de moi…) viennent de
 * `caponiere46` dans numero4.ts.
 *
 * Annonces : Airbnb = annonce multi-logements (pas de numéro fiable pour ce
 * logement), Booking : pas de numéro connu. Pas de photos Airbnb (les annonces
 * multi-logements du tableau renvoient une page « introuvable »).
 *
 * Refait d'après le livret StyQR « Numéro 7 » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Numero-7.md) : même
 * aménagement que Numéro 4, un étage plus haut. Arrivée 17h, départ 10h.
 * Animaux acceptés (1 maximum, avec supplément). Serrure à code sur la porte.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le code de la porte de l'immeuble figurait en clair dans le livret
 * StyQR. Il n'est PAS repris ici : il est envoyé par message, avec celui de la
 * serrure.
 *
 * ⚠️ Photo de couverture à fournir (photo générique du château de Caen en
 * attendant).
 *
 * ⚠️ Vidéos « Télévision » et « Chauffage » hébergées chez StyQR : à mettre
 * sur YouTube.
 *
 * ⚠️ À vérifier par Agathe :
 *   - Départ : StyQR dit « verrouiller en appuyant sur la flèche (cf vidéo) ».
 *     On a repris le même geste que Numéro 4 (lever la poignée + bouton
 *     central de la serrure) : à confirmer.
 *   - Capacité : 2 voyageurs (un seul lit double) — à confirmer.
 *
 * Pour traduire un texte, voir data/i18n-styqr/numero7.ts (clé = texte FR exact).
 */
export const numero7: Logement = {
  id: "numero7",
  nom: "Numéro 7",
  adresse: c.adresse,
  ville: c.ville,
  itineraire: c.itineraire,
  coords: c.coords,
  cover: c.cover,

  motAccueil:
    "Bienvenue au Numéro 7 ! Votre studio se trouve au 2e étage d'un immeuble de la rue Caponière, à deux pas de l'Abbaye aux Hommes et de la place Saint-Sauveur. Cafés, restaurants et commerces sont tout proches, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=8eZ-KLPGBAQ",
    checkinExpress: [
      "Le studio se trouve au 2e étage (sans ascenseur) du 46 rue Caponière, porte n° 7",
      c.studio.checkinCode,
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 46 rue Caponière." },
      { texte: c.studio.etapePorche },
      { texte: "Composez le code de la porte d'entrée reçu par message, puis ouvrez la porte." },
      { texte: "Montez au 2e étage, puis tournez à gauche : votre porte est la numéro 7." },
      { texte: c.studio.etapeSerrure },
    ],
    arriveeAnticipee: c.arriveeAnticipee,
    parking: c.parking,
    bagages: c.bagages,
    decouverte: {
      rdc: c.studio.decouverte,
      etage: [],
      exterieur: [],
    },
  },

  wifi: c.wifi,

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      { titre: "🎁 Produits d'accueil", contenu: c.produitsAvecLessive },
      { titre: "🛏️ Linge de maison", contenu: c.studio.linge },
      {
        titre: "📺 Télévision",
        contenu: c.studio.tv,
        video: "https://styqr-space.ams3.cdn.digitaloceanspaces.com/f678db1b-7c6c-49d5-a06d-c2508a8aec4c/IMG_8056-(1)-(1).mov",
        videoPortrait: true,
      },
      c.sections.cafe,
      c.sections.plaque,
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, sélectionnez « Allumer » avec les flèches, puis réglez la température. La vidéo ci-dessous vous montre comment faire. Merci de veiller à limiter votre consommation.",
        video: "https://styqr-space.ams3.cdn.digitaloceanspaces.com/8c7aaf15-7799-4977-97ec-581db1a00ca3/IMG_8053.MOV",
        videoPortrait: true,
      },
      c.sections.menagePiece,
      c.sections.vaisselle,
    ],
    electromenager: c.studio.electromenager,
    reglementInterieur: { capaciteMax: 2, ...c.reglement },
    poubelles: c.poubelles,
    animaux: c.animaux,
  },

  equipements: c.studio.equipements,

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [...c.departDebut, c.studio.departSerrure],
    departTardif: caen.depart.departTardif,
  },

  quartier: c.quartier,
  autourDeMoi: c.autourDeMoi,
  numerosUtiles: caen.numerosUtiles,
};
