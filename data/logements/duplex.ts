import type { Logement } from "../types";
import { caen } from "./caen";
import { caponiere46 as c } from "./numero4";

/**
 * Logement « Duplex » — appartement sur deux niveaux au 46 rue Caponière,
 * porte n° 5 (accès par la porte 46A). Même immeuble que Numéro 4, Numéro 7
 * et Vert : les textes communs (parking, poubelles, quartier, autour de moi…)
 * viennent de `caponiere46` dans numero4.ts.
 *
 * Annonces : Booking 14410694 ; Airbnb = annonce multi-logements (pas de
 * numéro fiable pour ce logement). Pas de photos Airbnb (les annonces
 * multi-logements du tableau renvoient une page « introuvable »).
 *
 * Refait d'après le livret StyQR « Duplex » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Duplex.md) : au rez-de-chaussée,
 * salon et cuisine équipée ; à l'étage, chambre avec lit double (140 × 200)
 * et salle de bain. Escalier en colimaçon étroit et pentu. Arrivée 17h,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le digicode de la porte 46A figurait EN CLAIR dans le livret StyQR (et
 * même dans l'export texte). Il n'est PAS repris ici : il est envoyé par
 * message, avec celui de la boîte à clés. Pensez à le retirer de StyQR.
 *
 * ⚠️ Photo de couverture à fournir (photo générique du château de Caen en
 * attendant).
 *
 * ⚠️ À vérifier par Agathe :
 *   - Départ : StyQR dit « verrouiller en appuyant sur la flèche (cf vidéo) »
 *     (texte copié de Numéro 7), alors que l'arrivée se fait avec une clé prise
 *     dans la boîte à clés. On a écrit « fermer à clé et remettre la clé dans la
 *     boîte à clés » : à confirmer.
 *   - Capacité : 2 voyageurs (un seul lit double) — à confirmer.
 *
 * Pour traduire un texte, voir data/i18n-styqr/duplex.ts (clé = texte FR exact).
 */
export const duplex: Logement = {
  id: "duplex",
  nom: "Duplex",
  adresse: c.adresse,
  ville: c.ville,
  itineraire: c.itineraire,
  coords: c.coords,
  cover: c.cover,

  motAccueil:
    "Bienvenue au Duplex ! Votre appartement chaleureux sur deux niveaux se trouve rue Caponière, à deux pas de l'Abbaye aux Hommes et du centre-ville. Cafés, restaurants et commerces sont tout proches, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=crQWtQTsFFc",
    checkinExpress: [
      "L'appartement se trouve au 46 rue Caponière (porte 46A), porte n° 5",
      "Le code de la boîte à clés et celui de la porte d'entrée vous sont communiqués par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 46 rue Caponière et passez sous le porche." },
      {
        texte:
          "Allez au fond de la cour, à gauche : vous y trouverez plusieurs boîtes à clés. Utilisez celle de gauche.",
      },
      {
        texte:
          "Composez le code de la boîte à clés reçu par message, puis appuyez sur les boutons latéraux pour l'ouvrir. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Revenez sur vos pas jusqu'à la porte 46A, composez le code de la porte d'entrée reçu par message, puis tirez la porte pour l'ouvrir.",
      },
      { texte: "Montez les escaliers et allez à droite : votre porte est la numéro 5. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: c.arriveeAnticipee,
    parking: c.parking,
    bagages: c.bagages,
    decouverte: {
      rdc: ["Pièce principale avec salon", "Cuisine entièrement équipée"],
      etage: [
        "Chambre avec lit double (140 × 200 cm)",
        "Salle de bain dans la chambre",
      ],
      exterieur: [],
    },
  },

  wifi: c.wifi,

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "⚠️ Escalier",
        contenu:
          "L'escalier en colimaçon qui mène à la chambre est étroit et pentu : le logement n'est pas adapté aux personnes à mobilité réduite ou ayant des difficultés à se déplacer. Soyez prudents, surtout avec des enfants.",
      },
      { titre: "🎁 Produits d'accueil", contenu: c.produitsSansLessive },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit double (140 × 200 cm). Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Allumez la télévision avec sa télécommande (bouton Power rouge, en haut à gauche). Cette même télécommande permet de régler le volume et de changer de chaîne.",
      },
      c.sections.cafe,
      c.sections.plaque,
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton Power, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      c.sections.menagePiece,
      c.sections.vaisselle,
    ],
    electromenager: [
      "Plaque de cuisson",
      "Micro-ondes",
      "Réfrigérateur",
      "Machine Nespresso",
      "Grille-pain",
      "TV",
    ],
    reglementInterieur: { capaciteMax: 2, ...c.reglement },
    poubelles: c.poubelles,
    animaux: c.animaux,
  },

  equipements: [
    "WiFi",
    "TV",
    "Lit double",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Grille-pain",
    "Salle de bain",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      ...c.departDebut,
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés (au fond de la cour, à gauche)",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: c.quartier,
  autourDeMoi: c.autourDeMoi,
  numerosUtiles: caen.numerosUtiles,
};
