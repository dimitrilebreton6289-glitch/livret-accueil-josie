import type { Logement } from "../types";
import { caen } from "./caen";
import { bayeuxcave } from "./bayeuxcave";

/**
 * Logement « Saint-Patrice » — studio lumineux et récemment refait, au 1er étage
 * du 57 rue Saint-Patrice, en plein cœur de Bayeux. Espace nuit avec lit double,
 * cuisine équipée et coin repas, salle de bain moderne avec WC. 2 voyageurs.
 *
 * Annonces : Booking 16257172. Pas d'annonce Airbnb fiable connue → pas de
 * photos d'annonce. Les photos de la plaque de cuisson et du radiateur sont
 * reprises du livret StyQR.
 *
 * Refait d'après le livret StyQR « Saint-Patrice » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Saint-Patrice.md). Arrivée 17h,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas
 * de fêtes. Aucun code en clair dans le livret StyQR. Vidéo d'arrivée YouTube
 * (« Bayeux - Saint Patrice ») reprise telle quelle.
 *
 * « Autour de moi » : mêmes adresses que « Bayeux Cave » (même ville) ; les
 * distances sont recalculées automatiquement depuis ce logement.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Couverture reprise de l'annonce Booking le 16/11/2026 (ancienne note : photo de couverture à fournir) : en attendant, c'est une vue des toits de
 *    Bayeux et de la cathédrale (prise depuis l'appartement Bayeux Cave).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Lave-linge : StyQR offre « une capsule de lessive » mais ne mentionne pas
 *     de machine à laver → non indiquée ici.
 *   - Départ : StyQR demande de verrouiller « en appuyant sur la flèche (cf
 *     vidéo) » ; on demande de remettre les clés dans la boîte à clés.
 *
 * Pour traduire un texte, voir data/i18n-styqr/saintpatrice.ts (clé = texte FR exact).
 */
export const saintpatrice: Logement = {
  id: "saintpatrice",
  nom: "Saint-Patrice",
  adresse: "57 Rue Saint-Patrice, 14400 Bayeux",
  ville: "Bayeux",
  itineraire: "https://maps.google.com/?q=57+Rue+Saint-Patrice+14400+Bayeux",
  coords: [49.2792981, -0.7097177],
  cover: "/logements/saintpatrice/cover.jpg",

  motAccueil:
    "Bienvenue à Bayeux ! Votre studio, lumineux et refait à neuf, se trouve rue Saint-Patrice, à deux pas de la place du marché du samedi. La cathédrale, la Tapisserie et les ruelles de la vieille ville se découvrent à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=vVPIHwLW0u8",
    checkinExpress: [
      "Le studio se trouve au 1er étage du 57 rue Saint-Patrice, première porte à gauche",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 57 rue Saint-Patrice, à Bayeux." },
      { texte: "La boîte à clés se trouve juste derrière le portillon : passez le bras à travers le portillon pour l'atteindre." },
      { texte: "Composez le code reçu par message, récupérez les clés, puis refermez la boîte et brouillez le code." },
      { texte: "Ouvrez le portillon avec l'une des clés et entrez dans les parties communes." },
      {
        texte:
          "Prenez la première à gauche et montez au 1er étage : votre porte est la première à gauche. Ouvrez avec la clé. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue du Docteur Guillet, rue Saint-Patrice, rue du Marché, rue Royale et rue Saint-Malo.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie lumineuse, récemment refaite",
        "Espace nuit avec lit double",
        "Cuisine équipée et coin repas",
        "Salle de bain moderne avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-9970",
    motDePasse: "ccub5augXSmXvKRHKH",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, une capsule de lessive, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit double. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles.\n1. Appuyez sur le bouton Power (à gauche) pour allumer la plaque.\n2. Choisissez le foyer à utiliser en appuyant sur son symbole (le rectangle avec le cercle plein).\n3. Réglez la puissance avec les touches + et -.\nSi la plaque se verrouille, restez appuyé longuement sur le cadenas pour la déverrouiller.",
        photos: ["/logements/saintpatrice/plaque-1.jpg", "/logements/saintpatrice/plaque-2.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer le radiateur, appuyez sur le bouton On/Off situé derrière l'appareil, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/saintpatrice/chauffage-1.jpg", "/logements/saintpatrice/chauffage-2.jpg"],
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un balai, une serpillière et un aspirateur se trouvent dans le placard de la pièce de vie.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Machine Nespresso"],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer directement sur le trottoir, devant l'immeuble, pour le passage du camion de ramassage.",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "Lit double",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Machine Nespresso",
    "Coin repas",
    "Salle de bain",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Laisser les draps sur le lit et les serviettes utilisées dans la salle de bain",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés, derrière le portillon",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Place Saint-Patrice — marché du samedi matin (~2 min)",
      "Rue Saint-Malo — commerces & restaurants (~3 min)",
      "Cathédrale Notre-Dame (~8 min)",
      "Musée Mémorial de la Bataille de Normandie (~9 min)",
      "Musée de la Tapisserie de Bayeux (~12 min)",
      "Gare de Bayeux (~18 min)",
    ],
    note: "Vous êtes en plein cœur de Bayeux, rue Saint-Patrice, avec boulangerie, pharmacie et épicerie au pied de l'immeuble. La vieille ville, la cathédrale et la Tapisserie se visitent à pied. Les plages du Débarquement sont à 15–25 minutes en voiture.",
  },

  autourDeMoi: {
    // Mêmes adresses que « Bayeux Cave » ; distances recalculées depuis ce logement.
    categories: bayeuxcave.autourDeMoi.categories,
    coupDeCoeur:
      "Le coup de cœur d'Agathe est juste à côté : la Brasserie des Ducs, rue Saint-Patrice. Le samedi matin, le grand marché s'installe sur la place Saint-Patrice, au pied du studio. Ne manquez pas la Tapisserie de Bayeux et la cathédrale, et prenez le temps d'aller voir les plages du Débarquement, à quelques minutes en voiture.",
  },

  numerosUtiles: caen.numerosUtiles,
};
