import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches de la place Saint-Sauveur (rue Quincampoix, rue Vauquelin,
 * rue de Bras), reprises des livrets StyQR « Chez Johan », « Vauquelin » et
 * « Chez Geo » (coups de cœur d'Agathe + commerces géolocalisés). Ces trois
 * logements sont à moins de 200 m les uns des autres : la même liste sert aux
 * trois (exportée ici, réutilisée par vauquelin.ts et chezgeo.ts).
 * Elles remplacent les catégories « du quotidien » de Caen ; les autres
 * (culture, nature, plages, sorties…) sont reprises de Caen.
 */
export const NEARBY_SAINT_SAUVEUR: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "La Casinière", desc: "Restaurant, rue aux Namps.", coords: [49.1841772, -0.3666094] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Boumbap", desc: "Restaurant, passage du Grand Turc.", coords: [49.1828613, -0.3627187] },
    { nom: "Mian Mian", desc: "Restaurant, rue de Geôle.", coords: [49.1843097, -0.3620192] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Arbuste", desc: "Café, rue Montoir-Poissonnerie.", coords: [49.184466, -0.3604197] },
    { nom: "Keys & Co", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Yver Chocolatier", desc: "Chocolatier, boulevard Maréchal Leclerc.", coords: [49.181918, -0.361601] },
    { nom: "Alban Guilmet", desc: "Boulangerie-pâtisserie, rue Saint-Jean.", coords: [49.1831558, -0.3608185] },
    { nom: "Poissonnerie Le Grand Bleu", desc: "Poissonnerie, rue Guillaume le Conquérant.", coords: [49.1823635, -0.3737343] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Casino Shop Saint-Pierre", desc: "Supérette, rue Saint-Pierre.", coords: [49.1835703, -0.3620525] },
    { nom: "Carrefour Express", desc: "Supérette, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt « Château - Quatrans »", desc: "L'arrêt de tram et de bus le plus proche (~5 min à pied).", coords: [49.18508, -0.36338] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Broc' Café", desc: "Bar-tabac, rue Écuyère.", coords: [49.1820646, -0.3675769] },
    { nom: "Le Saint Alban", desc: "Bar-tabac, rue Froide.", coords: [49.183585, -0.3658956] },
  ],
};

/** Laveries proches de la place Saint-Sauveur (catégorie absente de Caen). */
export const LAVERIES_SAINT_SAUVEUR: Lieu[] = [
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Urban Wash", desc: "Laverie automatique, rue des Teinturiers.", coords: [49.1839747, -0.3631268] },
];

/**
 * Logement « Chez Johan » — appartement au 3e et dernier étage (sans
 * ascenseur) du 2 rue Quincampoix, à deux pas de la place Saint-Sauveur.
 *
 * Annonce : Airbnb 1382636463287439899 (« Chez Johan »). Pas d'annonce
 * Booking connue. Photos reprises de l'annonce Airbnb (couverture = la place
 * au pied de l'immeuble ; l'annonce n'a pas de photo du salon).
 *
 * Refait d'après le livret StyQR « Chez Johan » (export du 2026-11-16, voir
 * le cerveau Josie : raw/documents/livrets-styqr/Chez-Johan.md) : pièce de vie
 * avec salon, espace repas et cuisine équipée (four, micro-ondes, plaques,
 * hotte, réfrigérateur, Nespresso), salle de bain avec douche et WC, chambre
 * au fond avec lit double, dressing et lave-linge. Arrivée 17h, départ 10h.
 * Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas de fêtes.
 *
 * « Autour de moi » : adresses du quotidien proches (NEARBY_SAINT_SAUVEUR,
 * partagé avec Vauquelin et Chez Geo), avec les coups de cœur d'Agathe repris
 * de StyQR ; le reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message le jour de l'arrivée).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Vidéo d'accès : le livret StyQR dit « suivez la vidéo » mais aucune
 *     vidéo n'y est attachée. Le parcours est décrit en étapes ; ajouter le
 *     lien YouTube s'il existe.
 *   - Capacité : l'annonce Airbnb indique 2 voyageurs maximum, mais StyQR
 *     parle de draps « pour les deux lits (lit double + canapé convertible) ».
 *     Capacité mise à 2 ; à corriger si le canapé convertible est proposé.
 *   - Photos du salon et de la chambre à ajouter (absentes de l'annonce).
 *
 * Pour traduire un texte, voir data/i18n-styqr/chezjohan.ts (clé = texte FR exact).
 */
export const chezjohan: Logement = {
  id: "chezjohan",
  nom: "Chez Johan",
  adresse: "2 Rue Quincampoix, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=2+Rue+Quincampoix+14000+Caen",
  coords: [49.182924, -0.367097],
  cover: "/logements/chezjohan/cover.jpg",

  motAccueil:
    "Bienvenue Chez Johan ! Votre appartement se trouve au dernier étage, à deux pas de la place Saint-Sauveur. Cafés, restaurants et petits commerces sont en bas de chez vous, et le château, l'Abbaye aux Hommes et tout le centre historique de Caen se découvrent à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "L'appartement se trouve au 3e et dernier étage du 2 rue Quincampoix (immeuble sans ascenseur)",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez les étapes ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 2 rue Quincampoix." },
      { texte: "Près de la petite fenêtre, vous trouverez deux boîtes à clés : choisissez la noire." },
      {
        texte:
          "Composez le code reçu par message, puis baissez le loquet noir pour ouvrir la boîte. Récupérez les clés et le badge, refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "La porte de l'immeuble est la porte gris foncé, juste à côté de la fenêtre. Passez le badge sur le bouton noir de l'interphone (là où se trouve la lumière rouge) pour l'ouvrir.",
      },
      {
        texte:
          "Montez au 3e et dernier étage. Ouvrez la porte avec la clé, en utilisant uniquement le verrou situé au-dessus de la poignée. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Quincampoix, rue Demolombe, rue Pasteur et rue Froide.\nParkings souterrains payants : Mairie, Château et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec salon, espace repas et cuisine équipée (four, micro-ondes, plaques, hotte, réfrigérateur et machine Nespresso)",
        "Salle de bain avec douche, lavabo et WC",
        "Au fond de l'appartement, chambre indépendante avec lit double, dressing et lave-linge",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_1748",
    motDePasse: "7fek89cvky2qru98ajmw",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une pastille de lessive, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour les deux lits (lit double et canapé convertible). Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
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
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur (sans image, vérifiez que la source est bien HDMI 1).\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur.\n3. Avec les flèches, sélectionnez « SFR TV » puis validez avec OK.\n4. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧺 Lave-linge",
        contenu: "Le lave-linge se trouve dans la chambre, avec le dressing. Une pastille de lessive vous est offerte à votre arrivée.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un aspirateur et une serpillière sont à votre disposition dans l'appartement.",
      },
      {
        titre: "👶 Équipement bébé",
        contenu: "Un lit parapluie et son matelas sont à votre disposition. Les draps ne sont pas fournis.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaque de cuisson",
      "Four",
      "Micro-ondes",
      "Hotte",
      "Réfrigérateur",
      "Machine Nespresso",
      "Lave-linge",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer dans les bacs situés dehors, juste à côté de la terrasse du restaurant Le Médicis. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 28 rue Saint-Sauveur",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (box SFR)",
    "Lit double",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Plaque de cuisson",
    "Réfrigérateur",
    "Machine Nespresso",
    "Lave-linge",
    "Salle de bain",
    "Chauffage",
    "Linge de lit & serviettes",
    "Lit parapluie",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Laisser les draps sur les lits (l'équipe de ménage s'en charge) et les serviettes utilisées dans la salle de bain",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Place Saint-Sauveur — cafés & marché du vendredi (~2 min)",
      "Rue Écuyère — bars & restaurants (~2 min)",
      "Rue Saint-Pierre — commerces (~4 min)",
      "Château de Caen (~6 min)",
      "Abbaye aux Hommes & hôtel de ville (~6 min)",
      "Jardin des Plantes (~10 min)",
    ],
    note: "Vous êtes en plein centre historique, entre la place Saint-Sauveur et la rue Saint-Pierre. Cafés, restaurants, boulangeries et commerces sont à quelques pas, et le château comme l'Abbaye aux Hommes se rejoignent facilement à pied.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY_SAINT_SAUVEUR[c.key] ? { key: c.key, lieux: NEARBY_SAINT_SAUVEUR[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES_SAINT_SAUVEUR },
    ],
    coupDeCoeur:
      "Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, juste à côté. Pour le pain, filez chez Tartines et Gourmandises, rue Froide. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon et A Contre Sens. Pour un verre : Nonna, juste en bas, ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
