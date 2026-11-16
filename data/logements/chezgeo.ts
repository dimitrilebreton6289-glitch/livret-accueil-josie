import type { Logement } from "../types";
import { caen } from "./caen";
import { NEARBY_SAINT_SAUVEUR, LAVERIES_SAINT_SAUVEUR, chezjohan } from "./chezjohan";

/**
 * Logement « Chez Geo » — studio au 1er étage (sans ascenseur) du 20 rue de
 * Bras, rue piétonne de l'hyper-centre, entre la place Saint-Sauveur et la
 * rue Saint-Pierre. Porte verte entre le fleuriste et le café.
 *
 * Annonce : Airbnb 51167625 (« Chez Geo »). Pas d'annonce Booking connue.
 * Photos reprises de l'annonce Airbnb (couverture = la pièce principale ;
 * façade avec le fleuriste pour l'étape 1 ; kitchenette).
 *
 * Refait d'après le livret StyQR « Chez Geo » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Chez-Geo.md) : pièce principale
 * avec lit double, coin dressing et Smart TV, kitchenette équipée (micro-ondes,
 * bouilloire, grille-pain, Nespresso), salle de bain avec douche et WC.
 * Arrivée 17h, départ 10h. Animaux acceptés (1 maximum, avec supplément).
 * Non-fumeur, pas de fêtes.
 *
 * « Autour de moi » : mêmes adresses que Chez Johan, à 150 m
 * (NEARBY_SAINT_SAUVEUR) ; le reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message le jour de l'arrivée ; la porte de l'immeuble s'ouvre
 * avec le bouton « GEO » de l'interphone, sans code).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - La vidéo d'accès YouTube est en partie dépassée (elle demande d'appeler
 *     un numéro, ce qui n'est plus nécessaire) : un avertissement est affiché
 *     au-dessus. À refaire un jour.
 *   - L'annonce Airbnb mentionne un lave-linge, absent du livret StyQR : non
 *     repris ici.
 *   - Les 4 photos du mode d'emploi de la TV (StyQR) ne sont pas reprises.
 *
 * Pour traduire un texte, voir data/i18n-styqr/chezgeo.ts (clé = texte FR exact).
 */
export const chezgeo: Logement = {
  id: "chezgeo",
  nom: "Chez Geo",
  adresse: "20 Rue de Bras, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=20+Rue+de+Bras+14000+Caen",
  coords: [49.182411, -0.3651894],
  cover: "/logements/chezgeo/cover.jpg",

  motAccueil:
    "Bienvenue Chez Geo ! Votre studio se trouve dans une rue piétonne en plein cœur de Caen, entre la place Saint-Sauveur et la rue Saint-Pierre. Commerces, cafés, bars et restaurants sont au pied de l'immeuble : l'endroit idéal pour découvrir la ville à pied. Très bon séjour ! 🌷",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=RGlJW1vYJgI",
    checkinExpress: [
      "Le studio se trouve au 1er étage du 20 rue de Bras (porte verte, immeuble sans ascenseur)",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "⚠️ Dans la vidéo, on vous demande d'appeler un numéro : ce n'est plus nécessaire. Appuyez simplement sur le bouton « GEO » de l'interphone et la porte s'ouvre",
    ],
    etapes: [
      {
        texte: "Rendez-vous au 20 rue de Bras, entre le fleuriste et le café : c'est la porte verte.",
        photo: "/logements/chezgeo/facade.jpg",
      },
      {
        texte:
          "Appuyez sur le bouton « GEO » de l'interphone (juste à droite de l'étiquette GEO, en haut à gauche) : la porte s'ouvre, il suffit de la pousser.",
      },
      {
        texte:
          "Dans le couloir, prenez la première porte à gauche et montez au 1er étage : votre porte est juste en face, avec la boîte à clés au-dessus de la poignée.",
      },
      {
        texte:
          "Composez le code reçu par message et appuyez en même temps sur les boutons latéraux pour ouvrir la boîte. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Ouvrez la porte avec la clé. Bienvenue chez vous ! 🙂 Pour vos allers-retours, le badge du trousseau ouvre la porte de l'immeuble : passez-le sur le bouton noir de l'interphone.",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Quincampoix, rue Demolombe, rue Pasteur et rue Froide.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce principale avec lit double, coin dressing et TV connectée",
        "Kitchenette équipée (plaque de cuisson, micro-ondes, bouilloire, grille-pain et machine Nespresso)",
        "Salle de bain avec douche et WC",
        "Dans une rue piétonne : commerces, bars et restaurants au pied de l'immeuble",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Bbox-079B51F1",
    motDePasse: "vCrp6x7UgKML36615F",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, du produit vaisselle et une éponge.",
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
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/chezgeo/kitchenette.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur.\n2. Avec la même télécommande, sélectionnez l'application « Molotov TV », puis appuyez sur OK.\n3. Utilisez cette télécommande pour changer de chaîne et régler le volume.\n4. Si l'interface ne s'affiche pas, appuyez sur le bouton en forme de maison (Home) pour revenir à l'écran d'accueil.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un aspirateur et une serpillière sont à votre disposition dans le dressing.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaque de cuisson",
      "Micro-ondes",
      "Bouilloire",
      "Grille-pain",
      "Machine Nespresso",
      "TV connectée",
    ],
    // Même règlement que Chez Johan (2 voyageurs, animaux acceptés).
    reglementInterieur: chezjohan.pratique.reglementInterieur,
    poubelles:
      "Les poubelles sont à déposer dans les bacs situés dans le couloir des parties communes. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 12 rue Pierre Aimé Lair",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV connectée",
    "Lit double",
    "Kitchenette équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Bouilloire",
    "Grille-pain",
    "Machine Nespresso",
    "Salle de bain",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: chezjohan.depart.instructions,
    departTardif: caen.depart.departTardif,
  },

  quartier: chezjohan.quartier,

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY_SAINT_SAUVEUR[c.key] ? { key: c.key, lieux: NEARBY_SAINT_SAUVEUR[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES_SAINT_SAUVEUR },
    ],
    coupDeCoeur: chezjohan.autourDeMoi.coupDeCoeur,
  },

  numerosUtiles: caen.numerosUtiles,
};
