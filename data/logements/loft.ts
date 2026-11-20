import type { Logement } from "../types";
import { caen } from "./caen";
import {
  RUE_BASSE_NEARBY,
  RUE_BASSE_LAVERIES,
  RUE_BASSE_PARKING,
  RUE_BASSE_QUARTIER,
} from "./lappart";

/**
 * Logement « Loft » — loft de 90 m² sur trois niveaux au 43 rue Basse, entrée
 * au 1er étage (porte n°2, en face de l'escalier). Même immeuble que
 * « L'appart » (porte n°1) : les adresses « Autour de moi », le stationnement
 * et le quartier sont partagés avec lui (voir lappart.ts).
 *
 * Annonces : Airbnb 24422458 (« Loft lumineux 90m² · port & centre · Caen »),
 * Booking 14370100. Photos reprises de l'annonce Airbnb (couverture = salon) ;
 * photos de la TV reprises du livret StyQR.
 *
 * Refait d'après le livret StyQR « Loft » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Loft.md) : 1er étage = entrée
 * privative et escalier ; 2e = grande pièce de vie (salon, salle à manger,
 * coin bureau, cuisine équipée) avec un premier espace nuit (lit double) ;
 * 3e = grande chambre et salle de douche avec WC. 4 voyageurs (Airbnb).
 * Arrivée 17h, départ 10h. Animaux acceptés (1 maximum, avec supplément).
 * Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message).
 *
 * ⚠️ Vidéo hébergée chez StyQR : rapatriée dans le livret le 16/11/2026 (fichier MP4 dans public/logements/<id>/videos) (c'est la même vidéo que
 * pour L'appart : ouverture de la porte de l'immeuble avec la clé FICHET).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Machine à café : StyQR dit « Nespresso », la photo Airbnb montre une
 *     machine L'Or Barista (compatible capsules Nespresso). Le livret dit
 *     « machine à capsules (type Nespresso) ».
 *   - Lave-vaisselle : visible sur les photos et une pastille est fournie
 *     (listé dans les équipements).
 *
 * Pour traduire un texte, voir data/i18n-styqr/loft.ts (clé = texte FR exact).
 */
export const loft: Logement = {
  id: "loft",
  nom: "Loft",
  adresse: "43 Rue Basse, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=43+Rue+Basse+14000+Caen",
  coords: [49.1849973, -0.3570038],
  cover: "/logements/loft/cover.jpg",

  motAccueil:
    "Bienvenue au Loft ! Ce grand loft lumineux de 90 m², sur trois niveaux, vous attend en plein centre de Caen, à deux pas du port de plaisance et du quartier historique du Vaugueux. Le grand marché du dimanche matin est à 50 mètres. Très bon séjour ! ⚓",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video:
      "/logements/loft/videos/arrivee.mp4",
    videoPortrait: true,
    checkinExpress: [
      "Le loft se trouve au 43 rue Basse : entrée au 1er étage, en face de l'escalier (porte n°2)",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "La vidéo ci-dessous montre comment ouvrir la porte de l'immeuble avec la clé",
    ],
    etapes: [
      { texte: "Rendez-vous au 43 rue Basse." },
      {
        texte:
          "Utilisez la boîte à clés de gauche : composez le code reçu par message, récupérez les clés, puis refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Pour ouvrir la porte de l'immeuble, prenez la clé FICHET : mettez la pointe vers le haut, puis tournez d'un quart de tour (voir la vidéo).",
      },
      {
        texte:
          "Montez au 1er étage : le loft est en face de l'escalier, porte n°2. Montez ensuite jusqu'à la pièce de vie. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking: RUE_BASSE_PARKING,
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      // Loft sur trois niveaux à partir du 1er étage de l'immeuble : tout est
      // dans `rdc` (affiché « Le logement ») pour éviter un faux
      // « Rez-de-chaussée », chaque ligne précise l'étage.
      rdc: [
        "1er étage : entrée privative et escalier d'accès",
        "2e étage : grande pièce de vie ouverte avec salon, salle à manger et coin bureau",
        "2e étage : cuisine toute équipée (four, micro-ondes, lave-vaisselle, machine à café, grille-pain)",
        "2e étage : premier espace nuit avec lit double",
        "3e étage : grande chambre indépendante et salle de douche avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_14D9",
    motDePasse: "157scycezthxnh797ut5",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "⚠️ Douche",
        contenu:
          "Merci de bien refermer la porte de la douche avant de l'utiliser, et d'orienter le pommeau vers les murs de la cabine (jamais vers la porte). Sinon, l'eau peut passer sous la porte et causer de gros dégâts, notamment dans la cuisine juste en dessous. Merci pour votre vigilance !",
        photos: ["/logements/loft/douche.jpg"],
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, gel douche/shampooing, sel et poivre, quelques capsules de café et du thé, une pastille de lave-vaisselle, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour tous les lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café fonctionne avec des capsules (type Nespresso). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/loft/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton Power (rouge), en haut à gauche de la télécommande de la TV, pour allumer l'écran.\n2. Avec l'autre télécommande, allumez le décodeur SFR.\n3. Utilisez la télécommande du décodeur pour naviguer et changer de chaîne.\n💡 Si rien ne s'affiche, débranchez puis rebranchez le décodeur pour le redémarrer. Vérifiez aussi la source : avec la télécommande de la TV, appuyez sur SOURCE et choisissez HDMI 1, HDMI 2 ou HDMI 3.",
        photos: ["/logements/loft/tv1.jpg", "/logements/loft/tv2.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Radiateur vertical : appuyez sur le côté de l'appareil pour faire apparaître l'écran. Radiateurs horizontaux : l'écran se trouve sous le clapet blanc. Appuyez ensuite sur On/Off pour allumer, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent à côté du réfrigérateur.",
      },
      {
        titre: "👶 Équipement bébé",
        contenu:
          "Un lit parapluie peut être mis à votre disposition sur demande préalable. Le matelas et les draps ne sont pas fournis.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Four",
      "Micro-ondes",
      "Plaque de cuisson",
      "Réfrigérateur",
      "Lave-vaisselle",
      "Machine à café à capsules",
      "Grille-pain",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer dehors, sur le trottoir, en sortant de l'immeuble.\n🍷 Verre : conteneur en face du restaurant Le Bistronome, rue des Prairies Saint-Gilles.",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (décodeur SFR)",
    "2 lits doubles",
    "Espace de travail",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Lave-vaisselle",
    "Machine à café à capsules",
    "Grille-pain",
    "Salle de douche avec WC",
    "Chauffage",
    "Linge de lit & serviettes",
    "Lit parapluie (sur demande)",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Laisser les draps sur les lits et les serviettes utilisées dans la salle de bain : l'équipe de ménage s'en occupe",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: RUE_BASSE_QUARTIER,

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        RUE_BASSE_NEARBY[c.key] ? { key: c.key, lieux: RUE_BASSE_NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: RUE_BASSE_LAVERIES },
    ],
    coupDeCoeur:
      "Le dimanche matin, flânez au grand marché le long du port, juste en bas de chez vous, puis montez au château pour la vue sur la ville. Côté table, les adresses préférées d'Agathe : Le Bistrot Basque, Bœuf & Cow, Le Mug, Koboon, A Contre Sens et Les Burgers de Colette. Pour un verre : Âmbar ou Nonna.",
  },

  numerosUtiles: caen.numerosUtiles,
};
