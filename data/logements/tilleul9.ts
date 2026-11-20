import type { Logement } from "../types";
import { caen } from "./caen";
import { tilleul3 } from "./tilleul3";
import { TILLEUL_CATEGORIES, TILLEUL_COUP_DE_COEUR } from "./tilleul2";

/**
 * Logement « Tilleul 9 » — studio indépendant pour UNE personne au 38 rue des
 * Tilleuls, 14000 Caen (même immeuble que Tilleul 2, 3, 4 et 8), entre le
 * Jardin des Plantes, la Vallée des Jardins et le campus 1 de l'université.
 *
 * Refait d'après le livret StyQR « Tilleul 9 » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Tilleul-9.md) : pièce principale
 * avec lit simple, coin cuisine équipé et coin repas, salle de bain avec WC.
 * Accès par le côté DROIT de l'immeuble et un portillon noir (2 clés).
 * Cafetière à filtre (café et filtres non fournis), déshumidificateur.
 * Arrivée 17h, départ 10h. Animaux acceptés (un seul, avec supplément).
 * Non-fumeur, pas de fêtes.
 *
 * Annonces : l'annonce Airbnb est une annonce multi-logements « proche
 * université » (pas de numéro fiable) ; Booking : un des établissements du
 * 38 rue des Tilleuls (à répartir).
 *
 * Parking, poubelles et « Autour de moi » repris de Tilleul 3 / Tilleul 2
 * (même immeuble, avec les coups de cœur d'Agathe). Photos : portillon rouge
 * et bacs (Tilleul 8), radiateur, cafetière et déshumidificateur (StyQR).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Couverture reprise de l'annonce Airbnb 1649517131502445626 (« Studio terrasse privée », annonce « Appartements de Maxime ») le 16/11/2026 (ancienne note : photo de couverture à fournir) : la couverture actuelle est la façade de
 *    l'immeuble (photo de Tilleul 8), faute de photos propres au studio.
 * ⚠️ À vérifier par Agathe :
 *   - Photos du parcours d'arrivée côté droit (boîte à clés, portillon noir) :
 *     la vidéo existe déjà.
 *   - Aucun code n'était écrit en clair dans StyQR (code envoyé par message).
 *
 * Pour traduire un texte, voir data/i18n-styqr/tilleul9.ts (clé = texte FR exact).
 */
export const tilleul9: Logement = {
  id: "tilleul9",
  nom: "Tilleul 9",
  adresse: "38 Rue des Tilleuls, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=38+Rue+des+Tilleuls+14000+Caen",
  coords: [49.1935284, -0.3673367],
  cover: "/logements/tilleul9/cover.jpg",

  motAccueil:
    "Bienvenue au Tilleul 9 ! Votre studio, pensé pour une personne, est niché dans une rue calme, à deux pas de l'université, du Jardin des Plantes et de la Vallée des Jardins. Le château et le centre historique sont à une dizaine de minutes à pied. Très bon séjour à Caen ! 🌳",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/epY2VsMzupw",
    videoPortrait: true,
    checkinExpress: [
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "La boîte à clés se trouve sur le côté droit de l'immeuble, au 38 rue des Tilleuls (passez le portillon rouge)",
      "La boîte contient deux clés : la première ouvre le portillon noir, la seconde la porte du studio",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      {
        texte: "Au 38 rue des Tilleuls, passez le portillon rouge, puis montez les escaliers.",
        photo: "/logements/tilleul9/arrivee-1.jpg",
      },
      {
        texte:
          "Dirigez-vous sur la droite de l'immeuble, puis encore à droite : la boîte à clés se trouve sur votre gauche.",
      },
      { texte: "Composez le code, puis appuyez vers le bas sur le bouton central pour ouvrir la boîte et récupérer les clés." },
      { texte: "Revenez sur vos pas jusqu'au portillon noir, sur la droite, et ouvrez-le avec la première clé." },
      { texte: "Votre porte se trouve juste en face : ouvrez-la avec la deuxième clé. Bienvenue !" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking: tilleul3.arrivee.parking,
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce principale avec lit simple (1 personne)",
        "Coin cuisine équipé",
        "Coin repas",
        "Salle de bain avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_7B50",
    motDePasse: "wxq77svaf4pyi89kpue8",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit. Vous disposez d'une serviette de toilette, d'un tapis de bain et d'un torchon de cuisine.",
      },
      {
        titre: "☕ Machine à café",
        contenu:
          "Une cafetière classique à filtre (café moulu) est à votre disposition dans la cuisine. Le café et les filtres ne sont pas fournis.",
        photos: ["/logements/tilleul9/cafe.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer le radiateur, appuyez sur le bouton On/Off, puis réglez la température avec les flèches : un simple effleurement des boutons tactiles suffit. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/tilleul9/chauffage.jpg"],
      },
      {
        titre: "💧 Déshumidificateur",
        contenu:
          "Un déshumidificateur est à votre disposition dans l'appartement. Vous pouvez l'éteindre quand vous êtes sur place, mais nous vous conseillons de le laisser fonctionner pendant vos absences. Pensez à vider régulièrement son réservoir : retirez-le, videz l'eau, puis remettez-le en place.",
        photos: ["/logements/tilleul9/deshumidificateur.jpg"],
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
      {
        titre: "🐾 Animaux",
        contenu:
          "Nous accueillons avec plaisir votre animal de compagnie (un seul animal par séjour). Un supplément tarifaire est appliqué pour son accueil.",
      },
    ],
    electromenager: ["Plaques de cuisson", "Réfrigérateur", "Cafetière filtre", "Déshumidificateur"],
    reglementInterieur: {
      capaciteMax: 1,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme: tilleul3.pratique.reglementInterieur.horairesCalme,
      texte: tilleul3.pratique.reglementInterieur.texte,
    },
    poubellesPhoto: "/logements/tilleul9/poubelles.jpg",
    poubelles: tilleul3.pratique.poubelles,
    animaux: tilleul3.pratique.animaux,
  },

  equipements: [
    "WiFi",
    "Lit simple",
    "Coin cuisine équipé",
    "Plaques de cuisson",
    "Réfrigérateur",
    "Cafetière filtre",
    "Déshumidificateur",
    "Chauffage",
    "Linge de lit & serviettes",
    "Stationnement gratuit dans les rues adjacentes",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle et la ranger",
      "Vider les poubelles dans les bacs de la rue des Tilleuls (à la sortie du portail)",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Laisser les draps sur le lit et déposer les serviettes utilisées dans la salle de bain",
      "Fermer l'appartement à clé et remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: tilleul3.quartier,

  autourDeMoi: {
    categories: [...TILLEUL_CATEGORIES],
    coupDeCoeur: TILLEUL_COUP_DE_COEUR,
  },

  numerosUtiles: caen.numerosUtiles,
};
