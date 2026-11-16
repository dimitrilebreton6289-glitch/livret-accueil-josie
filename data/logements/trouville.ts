import type { Logement, CategorySection } from "../types";
import { caen } from "./caen";

/**
 * « Autour de moi » à Trouville-sur-Mer (et Deauville, de l'autre côté de la
 * Touques), repris des adresses géolocalisées du livret StyQR « Trouville »
 * (export du 2026-11-16). Pas de coup de cœur d'Agathe dans ce livret StyQR.
 * Distances recalculées par la carte.
 */
const CATEGORIES: CategorySection[] = [
  {
    key: "plages",
    lieux: [
      { nom: "La Grande Plage de Trouville", desc: "La grande plage de sable, au pied du Palace.", coords: [49.3709196, 0.0809685] },
      { nom: "La Plage de Deauville", desc: "La plage chic et ses célèbres parasols, de l'autre côté de la Touques.", coords: [49.3604495, 0.065522] },
    ],
  },
  {
    key: "culture",
    lieux: [
      { nom: "Église Notre-Dame-du-Bon-Secours", desc: "L'église de Trouville, à deux pas du logement.", coords: [49.3681882, 0.0809729] },
      { nom: "Musée Villa Montebello", desc: "Villa du XIXe siècle face à la mer : peintures et histoire de Trouville.", coords: [49.3713529, 0.0842666] },
      { nom: "La Halle aux Poissons", desc: "Halle classée de 1936 sur le quai : la pêche du jour et les fruits de mer.", coords: [49.3649408, 0.0818722] },
      { nom: "Les Franciscaines", desc: "Musée et médiathèque de Deauville, dans un ancien couvent.", coords: [49.3544194, 0.0666102] },
      { nom: "Office de tourisme de Trouville", desc: "Plans, visites et idées de sorties.", coords: [49.3627766, 0.0854524] },
    ],
  },
  {
    key: "loisirs",
    lieux: [
      { nom: "Promenade des Planches", desc: "La promenade en bois le long de la plage, idéale au coucher du soleil.", coords: [49.369664, 0.080588] },
      { nom: "Casino Barrière Trouville", desc: "Casino face à la mer.", coords: [49.3663861, 0.0789893] },
      { nom: "Le Bac Trouville-Deauville", desc: "Petit bac pour traverser la Touques vers Deauville (à marée haute).", coords: [49.3655511, 0.0795078] },
      { nom: "Club nautique de Trouville-Hennequeville", desc: "Voile et activités nautiques.", coords: [49.3764836, 0.086876] },
      { nom: "Piscine olympique de Deauville", desc: "Piscine d'eau de mer chauffée, face à la plage de Deauville.", coords: [49.3600453, 0.0670712] },
    ],
  },
  {
    key: "nature",
    lieux: [
      { nom: "Parc des Lais de Mer", desc: "Jardin en bord de mer, à Deauville.", coords: [49.3611464, 0.0710333] },
      { nom: "Parc de la Roseraie", desc: "Jardin fleuri sur les hauteurs de Trouville.", coords: [49.3584438, 0.090654] },
    ],
  },
  {
    key: "restaurants",
    lieux: [
      { nom: "Bistrot Le Vivier", desc: "Bistrot, à deux pas du Palace.", coords: [49.3676014, 0.0785948] },
      { nom: "Les 4 Chats", desc: "Restaurant de cuisine française.", coords: [49.367256, 0.0817402] },
      { nom: "La Tradi Pizza", desc: "Pizzeria.", coords: [49.367631, 0.0808244] },
      { nom: "Les Vapeurs", desc: "La brasserie mythique de Trouville, face au marché aux poissons.", coords: [49.3653704, 0.0817765] },
      { nom: "Le Central", desc: "Brasserie sur le quai.", coords: [49.3652783, 0.0820878] },
      { nom: "La Mer Paulette", desc: "Restaurant de poissons et fruits de mer.", coords: [49.3656651, 0.0822449] },
      { nom: "Marinette", desc: "Restaurant sur le quai.", coords: [49.3652152, 0.0822591] },
      { nom: "Le Comptoir & La Table", desc: "Restaurant, côté Deauville.", coords: [49.3625, 0.0791667] },
    ],
  },
  {
    key: "restorapide",
    lieux: [
      { nom: "Pipelettes & Co", desc: "Café.", coords: [49.3671636, 0.081435] },
      { nom: "L'étoile des délices", desc: "Café et douceurs.", coords: [49.3666153, 0.0790007] },
      { nom: "Chez Ginette", desc: "Brunch.", coords: [49.3658166, 0.0822764] },
      { nom: "Le Neptune", desc: "Café.", coords: [49.3657574, 0.0815038] },
      { nom: "Dupont avec un thé", desc: "Salon de thé et pâtisseries.", coords: [49.3647232, 0.0827462] },
    ],
  },
  {
    key: "bars",
    lieux: [
      { nom: "Les Affiches", desc: "Bar à vin et izakaya, à deux pas du Palace.", coords: [49.3677788, 0.0789999] },
      { nom: "L'utopiste — Chez Iva", desc: "Bar.", coords: [49.367033, 0.0812662] },
      { nom: "La Lucarne", desc: "Bar.", coords: [49.3665851, 0.0797764] },
      { nom: "Kingorry Pub", desc: "Pub.", coords: [49.3655496, 0.0823089] },
    ],
  },
  {
    key: "cinema",
    lieux: [
      { nom: "Cinéma Cures Marines", desc: "Le cinéma de Trouville.", coords: [49.3659656, 0.078042] },
    ],
  },
  {
    key: "courses",
    lieux: [
      { nom: "Monoprix", desc: "Supermarché de centre-ville.", coords: [49.365941, 0.0810467] },
      { nom: "Carrefour Express", desc: "Supérette.", coords: [49.3622512, 0.0862006] },
      { nom: "Marché de Deauville", desc: "Marché couvert, tous les matins sauf le mercredi.", coords: [49.3607969, 0.0793186] },
    ],
  },
  {
    key: "bouche",
    lieux: [
      { nom: "Maisons JK", desc: "Boulangerie-pâtisserie.", coords: [49.3668132, 0.0815595] },
      { nom: "Chez Meunier", desc: "Boulangerie.", coords: [49.3647232, 0.0827462] },
      { nom: "La Fromagerie des Bains", desc: "Fromagerie.", coords: [49.366494, 0.082152] },
      { nom: "Les Toqués du Terroir Normand", desc: "Épicerie fine et produits normands.", coords: [49.3663308, 0.0821857] },
      { nom: "Marché aux Poissons", desc: "Poissons et fruits de mer, sur le quai.", coords: [49.3649408, 0.0818722] },
      { nom: "Boucherie Leblanc", desc: "Boucherie.", coords: [49.3657316, 0.0816558] },
      { nom: "La Cave Trouvillaise", desc: "Caviste.", coords: [49.3660651, 0.082434] },
    ],
  },
  {
    key: "tabac",
    lieux: [
      { nom: "Le Diplomate", desc: "Bar-tabac.", coords: [49.3668132, 0.0815595] },
      { nom: "La Civette", desc: "Tabac.", coords: [49.3663567, 0.0820473] },
    ],
  },
  {
    key: "laverie",
    lieux: [
      { nom: "Le Lavoir Normand", desc: "Laverie automatique, à deux pas du Palace.", coords: [49.3673788, 0.0810703] },
    ],
  },
  {
    key: "transports",
    lieux: [
      { nom: "Gare de Trouville-Deauville", desc: "Trains vers Paris Saint-Lazare (~2h) et Lisieux.", coords: [49.3592706, 0.0841479] },
      { nom: "Arrêt de bus le plus proche", desc: "Bus de la Côte Fleurie.", coords: [49.36489, 0.0841] },
      { nom: "Central Taxi Deauville Trouville", desc: "Taxis.", coords: [49.3606633, 0.0827225] },
    ],
  },
  {
    key: "sante",
    lieux: [
      { nom: "Pharmacie du Port", desc: "Pharmacie, sur le quai. Pharmacie de garde : composez le 3237.", coords: [49.36478, 0.082691] },
      { nom: "Grande Pharmacie Trouvillaise", desc: "Pharmacie.", coords: [49.3639824, 0.0837272] },
    ],
  },
  {
    key: "hopital",
    lieux: [
      { nom: "Hôpital privé du Pays d'Auge", desc: "Hôpital privé, à Deauville.", coords: [49.3538424, 0.0692796] },
    ],
  },
];

/**
 * Logement « Trouville » — studio n° 234 au 2e étage de l'ancien Palace de
 * Trouville (résidence, rue de Londres), à deux pas de la plage et des Planches.
 * Pièce de vie avec cuisine équipée, lit en mezzanine (échelle de meunier,
 * plafond bas), salle de douche avec WC, volet roulant électrique. 2 voyageurs.
 * PAS DE WIFI.
 *
 * Annonce : Airbnb 14310390 (« Studio Résidence Palace de Trouville - Plage »).
 * Photos reprises de l'annonce (couverture = pièce de vie) ; photo des crochets
 * de l'échelle reprise de StyQR.
 *
 * Refait d'après le livret StyQR « Trouville » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Trouville.md). Arrivée 17h,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas
 * de fêtes. Aucun code en clair dans le livret StyQR (seul le n° d'emplacement
 * de la boîte à clés, 28, est indiqué — ce n'est pas un code).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Vidéos hébergées chez StyQR (local vélo, local poubelles) : à mettre sur YouTube.
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Vidéo d'arrivée : dans StyQR, le lien cliquable mène à « Palace Trouville »
 *     (CsElT9IjYAw, repris ici) mais le texte affiché montrait un autre lien
 *     (M-6m1zW3Ips = « Appartement 3 - Place AB »).
 *   - Linge : StyQR dit « draps fournis pour les deux lits » alors que le studio
 *     n'a qu'un lit (mezzanine) + un canapé. Le canapé est-il convertible ?
 *     (capacité laissée à 2.)
 *   - Travaux de copropriété en face du logement (semaine, 8h-17h) : repris de
 *     l'annonce Airbnb — à retirer quand ils seront terminés.
 *
 * Pour traduire un texte, voir data/i18n-styqr/trouville.ts (clé = texte FR exact).
 */
export const trouville: Logement = {
  id: "trouville",
  nom: "Trouville",
  adresse: "Résidence Le Palace, Rue de Londres, 14360 Trouville-sur-Mer",
  ville: "Trouville-sur-Mer",
  itineraire: "https://maps.google.com/?q=Palace+Rue+de+Londres+14360+Trouville-sur-Mer",
  coords: [49.368483, 0.079467],
  cover: "/logements/trouville/cover.jpg",

  motAccueil:
    "Bienvenue à Trouville ! Votre studio se trouve dans l'ancien Palace de Trouville, un lieu chargé d'histoire, à deux pas de la plage et des Planches. Le port, le marché aux poissons et les rues piétonnes se découvrent à pied. Très bon séjour ! 🐚",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/CsElT9IjYAw",
    videoPortrait: true,
    checkinExpress: [
      "Studio n° 234, au 2e étage de la résidence du Palace, rue de Londres",
      "Les codes des portes d'entrée et de la boîte à clés vous sont communiqués par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous rue de Londres, à la résidence du Palace de Trouville." },
      { texte: "Composez les codes reçus par message pour ouvrir les portes d'entrée du Palace." },
      {
        texte:
          "Allez à droite des escaliers, dans le local des boîtes à clés. Ouvrez la boîte n° 28 avec le code reçu par message et récupérez la clé. Refermez la boîte et brouillez le code.",
      },
      { texte: "Montez au 2e étage, puis allez à droite : votre studio est le n° 234. Ouvrez avec la clé. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement payant en journée (9h-19h) rue Victor Hugo, rue de Paris et sur le parking de l'église Notre-Dame-du-Bon-Secours.\nStationnement gratuit rue du Chancelier, rue des Jardins et rue Bon Secours.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie lumineuse avec coin salon et TV",
        "Cuisine équipée (plaque de cuisson, micro-ondes, machine Nespresso, bouilloire, grille-pain)",
        "Lit double en mezzanine, accessible par une échelle de meunier (plafond bas)",
        "Salle de douche avec WC",
        "Volet roulant électrique",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Pas de WiFi pour le moment",
    motDePasse: "Prévoyez votre connexion mobile (4G/5G)",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "📶 WiFi",
        contenu:
          "Le logement n'est pas équipé du WiFi. Prévoyez votre connexion mobile (4G/5G) pour vos usages internet.",
      },
      {
        titre: "🪜 Mezzanine",
        contenu:
          "Le lit se trouve sur la mezzanine, accessible par une échelle de meunier. Pour votre sécurité, vérifiez toujours que l'échelle est bien glissée et calée dans les deux crochets métalliques fixés au mur avant de monter. Le plafond de la mezzanine est bas : on s'y tient à genoux. Le logement n'est pas adapté aux personnes à mobilité réduite.",
        photos: ["/logements/trouville/mezzanine.jpg", "/logements/trouville/mezzanine-crochets.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur.\n2. Utilisez la télécommande pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les touches + et -. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🚲 Local vélo",
        contenu:
          "Un local vélo est à votre disposition dans la résidence, juste à l'entrée du local poubelles. La vidéo ci-dessous vous montre où il se trouve.",
        video: "https://styqr-space.ams3.cdn.digitaloceanspaces.com/d02eb1fb-455b-4b04-92b7-477e95fb541e/video-543_singular_display.mov",
        videoPortrait: true,
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur se trouve dans l'armoire de la mezzanine.",
      },
      {
        titre: "🚧 Travaux",
        contenu:
          "Des travaux de la copropriété ont lieu en face du logement, du lundi au vendredi de 8h à 17h (pas de travaux le week-end). Merci de votre compréhension.",
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
      "Réfrigérateur",
      "Machine Nespresso",
      "Bouilloire",
      "Grille-pain",
      "TV",
    ],
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
      "Les poubelles sont à déposer dans les bacs du local situé en face de la réception, au rez-de-chaussée (voir la vidéo ci-dessous). Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 21 rue de Paris",
    poubellesVideo:
      "https://styqr-space.ams3.cdn.digitaloceanspaces.com/cc1c8b5d-f9e6-4b04-8a3e-9784c5cf09ab/video-543_singular_display.MOV",
    poubellesVideoPortrait: true,
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "Lit double en mezzanine",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "TV",
    "Salle de douche avec WC",
    "Volet roulant électrique",
    "Local vélo",
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
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre la clé dans la boîte à clés n° 28",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Église Notre-Dame-du-Bon-Secours (~2 min)",
      "La Grande Plage & les Planches (~3 min)",
      "Casino Barrière (~4 min)",
      "Marché aux poissons & port de pêche (~6 min)",
      "Musée Villa Montebello (~7 min)",
      "Gare de Trouville-Deauville (~15 min)",
    ],
    note: "Vous êtes à Trouville-sur-Mer, sur la Côte Fleurie, dans l'ancien Palace, entre la plage et les rues piétonnes. Le port de pêche, le marché aux poissons et Deauville, de l'autre côté de la Touques, se rejoignent à pied.",
  },

  autourDeMoi: {
    categories: CATEGORIES,
    coupDeCoeur:
      "Flânez sur les Planches au coucher du soleil, puis offrez-vous un plateau de fruits de mer face au port, aux Vapeurs ou au marché aux poissons. Le matin, faites un tour dans les ruelles piétonnes et sur le quai, et traversez la Touques pour découvrir Deauville et ses célèbres parasols.",
  },

  numerosUtiles: caen.numerosUtiles,
};
