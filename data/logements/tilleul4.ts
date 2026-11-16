import type { Logement } from "../types";
import { caen } from "./caen";
import { tilleul3 } from "./tilleul3";
import { TILLEUL_CATEGORIES, TILLEUL_COUP_DE_COEUR } from "./tilleul2";

/**
 * Logement « Tilleul 4 » — studio indépendant au 38 rue des Tilleuls, 14000
 * Caen (même immeuble que Tilleul 2, 3, 8 et 9), entre le Jardin des Plantes,
 * la Vallée des Jardins et le campus 1 de l'université.
 *
 * Refait d'après le livret StyQR « Tilleul 4 » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Tilleul-4.md) : une première
 * pièce chambre/séjour (lit double, deux fauteuils, petite table, TV), une
 * seconde pièce avec cuisine équipée et table à manger, salle de bain avec WC.
 * Accès par le côté DROIT de l'immeuble et un portillon noir (2 clés).
 * Cafetière à filtre (café et filtres non fournis). Arrivée 17h, départ 10h.
 * Animaux acceptés (un seul, avec supplément). Non-fumeur, pas de fêtes.
 *
 * Annonces : l'annonce Airbnb est une annonce multi-logements « proche
 * université » (pas de numéro fiable) ; Booking : un des établissements du
 * 38 rue des Tilleuls (à répartir).
 *
 * Parking, poubelles et « Autour de moi » repris de Tilleul 3 / Tilleul 2
 * (même immeuble, avec les coups de cœur d'Agathe). Photos : portillon rouge
 * et bacs (Tilleul 8), radiateur, télécommandes et cafetière (StyQR).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Photo de couverture à fournir : la couverture actuelle est la façade de
 *    l'immeuble (photo de Tilleul 8), faute de photos propres au studio.
 * ⚠️ À vérifier par Agathe :
 *   - Nom exact du réseau WiFi : StyQR affiche « XXXX_7B50 » (même mot de passe
 *     que Tilleul 9, dont le réseau est « SFR_7B50 ») ; « SFR_7B50 » retenu.
 *   - Photos du parcours d'arrivée côté droit (boîte à clés, portillon noir) :
 *     la vidéo existe déjà.
 *   - Aucun code n'était écrit en clair dans StyQR (code envoyé par message).
 *
 * Pour traduire un texte, voir data/i18n-styqr/tilleul4.ts (clé = texte FR exact).
 */
export const tilleul4: Logement = {
  id: "tilleul4",
  nom: "Tilleul 4",
  adresse: "38 Rue des Tilleuls, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=38+Rue+des+Tilleuls+14000+Caen",
  coords: [49.1935284, -0.3673367],
  cover: "/logements/tilleul4/cover.jpg",

  motAccueil:
    "Bienvenue au Tilleul 4 ! Votre studio est niché dans une rue calme, à deux pas de l'université, du Jardin des Plantes et de la Vallée des Jardins. Le château et le centre historique sont à une dizaine de minutes à pied. Très bon séjour à Caen ! 🌳",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/y2N8VfOs0TQ",
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
        photo: "/logements/tilleul4/arrivee-1.jpg",
      },
      { texte: "Dirigez-vous sur la droite de l'immeuble : la boîte à clés se trouve sur votre gauche." },
      { texte: "Composez le code, puis appuyez vers le bas sur le bouton central pour ouvrir la boîte et récupérer les clés." },
      { texte: "Ouvrez le portillon noir avec la première clé." },
      { texte: "Votre porte se trouve juste en face : ouvrez-la avec la deuxième clé. Bienvenue !" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking: tilleul3.arrivee.parking,
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Chambre-séjour avec lit double (2 personnes), deux fauteuils, une petite table et la télévision",
        "Seconde pièce avec la cuisine équipée et une table à manger",
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
          "Les draps sont fournis pour le lit. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "☕ Machine à café",
        contenu:
          "Une cafetière classique à filtre (café moulu) est à votre disposition dans la cuisine. Le café et les filtres ne sont pas fournis.",
        photos: ["/logements/tilleul4/cafe.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Allumez le téléviseur avec sa télécommande (bouton On/Off), puis allumez le décodeur avec la télécommande de la box.\n2. Quand l'écran affiche « Connect TV », appuyez sur OK avec la télécommande de la box pour accéder aux chaînes.\n3. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.",
        photos: ["/logements/tilleul4/tv.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer le radiateur, appuyez sur le bouton On/Off, puis réglez la température avec les boutons + et −. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/tilleul4/chauffage.jpg"],
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
    electromenager: ["Plaques de cuisson", "Réfrigérateur", "Cafetière filtre", "TV"],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme: tilleul3.pratique.reglementInterieur.horairesCalme,
      texte: tilleul3.pratique.reglementInterieur.texte,
    },
    poubellesPhoto: "/logements/tilleul4/poubelles.jpg",
    poubelles: tilleul3.pratique.poubelles,
    animaux: tilleul3.pratique.animaux,
  },

  equipements: [
    "WiFi",
    "TV (box)",
    "Lit double",
    "Cuisine équipée",
    "Plaques de cuisson",
    "Réfrigérateur",
    "Cafetière filtre",
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
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
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
