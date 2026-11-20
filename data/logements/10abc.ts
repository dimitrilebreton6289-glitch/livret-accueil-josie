import type { Logement, Lieu } from "../types";
import { caen } from "./caen";
import { chezjohan } from "./chezjohan";

/**
 * Adresses proches du 10 rue de Maltot (quartier résidentiel du Beau Site, au
 * sud-ouest du centre), reprises du livret StyQR « 10ABC » (commerces
 * géolocalisés + coups de cœur d'Agathe, dont la plupart sont dans le centre,
 * à 15-25 min à pied). La pharmacie la plus proche, absente de StyQR, a été
 * géolocalisée via OpenStreetMap. Elles remplacent les catégories « du
 * quotidien » de Caen ; les autres (culture, nature, plages, sorties…) sont
 * reprises de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Chez Sandy", desc: "Restaurant de quartier, rue Caponière.", coords: [49.1816888, -0.3762207] },
    { nom: "Bouillon Caponière", desc: "Bouillon : cuisine traditionnelle à petits prix.", coords: [49.1819247, -0.3749707] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
  ],
  restorapide: [
    { nom: "Mapple Coffee", desc: "Coffee shop, rue Caponière.", coords: [49.1821698, -0.374836] },
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Keys & Co", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Boulangerie Jolin", desc: "Boulangerie, rue Caponière.", coords: [49.1753639, -0.3873115] },
    { nom: "Maison Toulorge", desc: "Boulangerie-pâtisserie, rue Eugène Maës.", coords: [49.1759586, -0.3887997] },
    { nom: "Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et café gourmand, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Mariatte et Fils", desc: "Boulangerie, boulevard Yves Guillou.", coords: [49.1722612, -0.3892843] },
    { nom: "Zénith Fraîcheur", desc: "Primeur, boulevard Yves Guillou.", coords: [49.1715714, -0.3871187] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Contact Market", desc: "Supérette, rue Caponière.", coords: [49.178353, -0.380122] },
    { nom: "Carrefour City", desc: "Supérette, rue Saint-Ouen.", coords: [49.175213, -0.3777006] },
    { nom: "Carrefour Express", desc: "Supérette, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Saint-Ouen", desc: "La pharmacie la plus proche, rue du Blanc. Pharmacie de garde : composez le 3237.", coords: [49.1726965, -0.3808697] },
  ],
  tabac: [
    { nom: "Tabac Presse Saint-Ouen", desc: "Tabac-presse, rue Saint-Ouen.", coords: [49.1751061, -0.3777891] },
    { nom: "Le Beau Site", desc: "Bar-tabac, rue Caponière.", coords: [49.175255, -0.3876825] },
  ],
};

/** Laverie la plus proche (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Caponière", desc: "La laverie la plus proche, rue Caponière.", coords: [49.1815765, -0.3765192] },
];

/**
 * Logement « 10ABC » — maison en briques rouges au 10 rue de Maltot, qui
 * compte TROIS logements : 10A, 10B et 10C. Un seul livret pour les trois
 * (comme dans StyQR) : le numéro du logement et les instructions d'accès sont
 * envoyés la veille de l'arrivée dans la messagerie de la plateforme.
 *
 * Annonces Airbnb : 10A = 658754757159277404 (4 voyageurs), 10B = 49316215
 * (4 voyageurs), « Maltot 10C » = 48502434 (5 voyageurs). Pas d'annonce
 * Booking connue. Photos reprises des annonces Airbnb (couverture = salon du
 * 10A ; façade de la maison ; machine Nespresso du 10B).
 *
 * Refait d'après le livret StyQR « 10ABC » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/10ABC.md) : au rez-de-chaussée,
 * espace de vie avec salon, TV connectée, coin repas et cuisine équipée (four,
 * micro-ondes, plaques, hotte, Nespresso, bouilloire) ; couchages selon le
 * nombre de voyageurs réservé. Arrivée 17h, départ 10h. Animaux acceptés
 * (1 maximum, avec supplément). Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (il ne décrit pas l'accès : tout
 * est envoyé la veille par la plateforme). Pas de vidéo d'accès.
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Un seul livret pour 3 logements (10A, 10B, 10C) : les textes restent
 *     généraux (étage, couchages). Faut-il 3 livrets séparés ?
 *   - Capacité : mise à 5 (maximum, celle du 10C) ; 10A et 10B sont à 4.
 *   - Chambres et salle de douche « à l'étage » d'après les photos des
 *     annonces (escalier dans les trois logements) : à confirmer.
 *
 * Pour traduire un texte, voir data/i18n-styqr/10abc.ts (clé = texte FR exact).
 */
export const maltot10: Logement = {
  id: "10abc",
  nom: "10 rue de Maltot",
  adresse: "10 Rue de Maltot, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=10+Rue+de+Maltot+14000+Caen",
  coords: [49.1761117, -0.3826623],
  cover: "/logements/10abc/cover.jpg",

  motAccueil:
    "Bienvenue au 10 rue de Maltot ! Votre logement se trouve dans une jolie maison en briques rouges, dans un quartier résidentiel calme où l'on se gare facilement. Le centre historique de Caen et l'Abbaye aux Hommes sont à un quart d'heure à pied. Très bon séjour ! 🧱",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Votre logement (10A, 10B ou 10C) se trouve au 10 rue de Maltot, dans une maison en briques rouges",
      "Toutes les instructions d'arrivée (numéro du logement, accès et code de la boîte à clés) vous sont envoyées la veille de votre arrivée, dans la messagerie de votre plateforme de réservation (Airbnb, Booking…)",
    ],
    etapes: [
      { texte: "Rendez-vous au 10 rue de Maltot : c'est la maison en briques rouges.", photo: "/logements/10abc/facade.jpg" },
      {
        texte:
          "Suivez ensuite les instructions reçues la veille de votre arrivée dans la messagerie de votre plateforme de réservation. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement gratuit rue de Maltot, venelle aux Loups, rue Caponière (à partir du bar-tabac), rue du Mesnil et rue de Bretteville.\nParkings souterrains payants dans le centre : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Espace de vie chaleureux avec salon et TV connectée",
        "Coin repas",
        "Cuisine entièrement équipée (four, micro-ondes, plaques de cuisson, hotte, machine Nespresso et bouilloire)",
      ],
      etage: [
        "Chambres, avec les couchages prévus pour le nombre de voyageurs indiqué à la réservation",
        "Salle de douche",
      ],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-FE10",
    motDePasse: "fQPWfTAZ2NgNSTCEGp",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🏠 10A, 10B ou 10C",
        contenu:
          "La maison du 10 rue de Maltot compte trois logements : 10A, 10B et 10C. Le numéro de votre logement vous est indiqué dans les instructions d'arrivée, envoyées la veille par la plateforme de réservation.",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour tous les lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/10abc/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Allumez la télévision avec sa télécommande (bouton Power rouge).\n2. Allumez ensuite le décodeur avec la télécommande de la box (bouton Power rouge), puis sélectionnez l'application « Orange TV » et validez avec le bouton central OK.\n3. Utilisez cette même télécommande pour régler le volume et changer de chaîne.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.\n💡 Les touches tactiles des radiateurs sont parfois capricieuses : effleurez ou appuyez deux fois de suite sur le bouton On/Off pour les allumer.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un aspirateur se trouve dans le placard de la pièce de vie.",
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
      "Hotte",
      "Machine Nespresso",
      "Bouilloire",
      "TV connectée",
    ],
    reglementInterieur: {
      capaciteMax: 5,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer dans les bacs situés dehors, juste à côté du logement. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 160 rue Caponière",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV connectée",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Plaque de cuisson",
    "Hotte",
    "Machine Nespresso",
    "Bouilloire",
    "Chauffage",
    "Linge de lit & serviettes",
    "Stationnement gratuit dans la rue",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: chezjohan.depart.instructions,
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Boulangeries et supérettes, rue Caponière et rue Saint-Ouen (~5 min)",
      "Zénith & Palais des Sports (~8 min)",
      "Abbaye aux Hommes & hôtel de ville (~15 min)",
      "Rue Écuyère — bars & restaurants (~18 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~18 min)",
    ],
    note: "Vous êtes dans un quartier résidentiel calme, au sud-ouest du centre-ville, où l'on se gare facilement et gratuitement. Boulangeries et supérettes sont à quelques minutes à pied, et le centre historique se rejoint en un quart d'heure à pied ou en bus.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Pour un goûter gourmand, filez chez Bibiche, la pâtisserie coup de cœur d'Agathe, à 8 minutes à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, dans le centre. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon et A Contre Sens. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
