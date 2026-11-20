import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/** Reprend un lieu déjà décrit dans le livret de Caen (même texte, déjà traduit). */
const pick = (key: string, nom: string): Lieu[] =>
  caen.autourDeMoi.categories.find((c) => c.key === key)?.lieux.filter((l) => l.nom === nom) ?? [];

/**
 * Adresses proches du 149 rue Saint-Pierre (hyper-centre, entre la rue
 * Saint-Pierre, la rue Écuyère et la place Saint-Sauveur), reprises du livret
 * StyQR « Saint-Pierre » (coups de cœur d'Agathe + commerces géolocalisés).
 * Elles remplacent les catégories « du quotidien » de Caen ; les autres
 * (culture, nature, plages, sorties…) sont reprises de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "La Casinière", desc: "Restaurant, rue aux Namps.", coords: [49.1841772, -0.3666094] },
    { nom: "Boumbap", desc: "Cuisine coréenne, passage du Grand Turc.", coords: [49.1828613, -0.3627187] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Keys & Co", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
  ],
  bars: [
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
  ],
  bouche: [
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Yver Chocolatier", desc: "Chocolatier, boulevard Maréchal Leclerc.", coords: [49.181918, -0.361601] },
  ],
  courses: [
    { nom: "Casino Shop (place Malherbe)", desc: "La supérette la plus proche, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Casino Shop (rue Saint-Pierre)", desc: "Supérette, côté Saint-Pierre.", coords: [49.1835703, -0.3620525] },
    ...pick("courses", "Monoprix"),
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de bus le plus proche", desc: "L'arrêt de bus le plus proche (~2 min à pied).", coords: [49.1831875, -0.3666995] },
    { nom: "Arrêt de tram « Saint-Pierre »", desc: "L'arrêt de tram le plus proche (~6 min à pied), devant l'église Saint-Pierre.", coords: [49.1841691, -0.3615801] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Broc' Café", desc: "Bar-tabac, rue Écuyère.", coords: [49.1820646, -0.3675769] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Urban Wash", desc: "Laverie automatique, près du château.", coords: [49.1839747, -0.3631268] },
];

/**
 * Logement « Saint-Pierre » — appartement rénové de 40 m² au 2e étage d'un
 * immeuble en pierre de Caen, 149 rue Saint-Pierre (entrée par le 44 rue de
 * Bras), en plein hyper-centre historique.
 *
 * Annonces : Airbnb 39409982 (« Saint Pierre »), Booking 15393023.
 * Photos reprises de l'annonce Airbnb (couverture = séjour).
 *
 * Refait d'après le livret StyQR « Saint-Pierre » (export du 2026-11-16, voir
 * le cerveau Josie : raw/documents/livrets-styqr/Saint-Pierre.md) :
 * chambre avec lit double et dressing, salon avec canapé-lit (2 pers.),
 * cuisine équipée, salle de bain avec douche et WC. Arrivée 17h, départ 10h.
 * Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le code de la porte d'entrée (44 rue de Bras) figurait en clair dans le
 * livret StyQR. Il n'est PAS repris ici : il est envoyé par message avec celui
 * de la boîte à clés.
 *
 * ⚠️ À vérifier par Agathe :
 *   - Adresse : l'annonce dit 149 rue Saint-Pierre, mais l'entrée se fait par
 *     le 44 rue de Bras. Le bouton « Me rendre au logement » mène donc au
 *     44 rue de Bras.
 *   - Pas d'équipement bébé mentionné dans StyQR (rubrique non reprise).
 *
 * Pour traduire un texte, voir data/i18n-styqr/saintpierre.ts (clé = texte FR exact).
 */
export const saintpierre: Logement = {
  id: "saintpierre",
  nom: "Saint-Pierre",
  adresse: "149 Rue Saint-Pierre, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=44+Rue+de+Bras+14000+Caen",
  coords: [49.181974, -0.3664757],
  cover: "/logements/saintpierre/cover.jpg",

  motAccueil:
    "Bienvenue à Saint-Pierre ! Votre appartement se trouve dans un immeuble de charme en pierre de Caen, en plein cœur du centre historique. Restaurants, boutiques et marché de la place Saint-Sauveur sont à deux pas, et le château comme les abbayes se rejoignent à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=eIoHs09ZbZg",
    checkinExpress: [
      "L'entrée de l'appartement se fait par le 44 rue de Bras (et non par la rue Saint-Pierre)",
      "L'appartement se trouve au 2e étage : c'est la porte verte sur le palier",
      "Le code de la porte d'entrée et celui de la boîte à clés vous sont communiqués par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 44 rue de Bras : l'entrée de l'appartement se fait par cette rue." },
      { texte: "Composez le code de la porte d'entrée reçu par message, puis poussez les portes jusqu'à la cour." },
      { texte: "Dans la cour, ouvrez la porte blanche sur votre droite : la boîte à clés se trouve juste derrière." },
      {
        texte:
          "Composez le code de la boîte à clés reçu par message, puis appuyez en même temps sur les boutons latéraux pour l'ouvrir. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      { texte: "Montez au 2e étage : votre porte est la porte verte sur le palier. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue de Bras, rue Demolombe, rue Pasteur, rue aux Namps, place Saint-Étienne-le-Vieux et parking de la République.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Appartement rénové de 40 m², dans un immeuble de charme en pierre de Caen",
        "Salon avec canapé-lit (2 personnes)",
        "Cuisine équipée : plaques de cuisson, four, micro-ondes, réfrigérateur, machine Nespresso, bouilloire et grille-pain",
        "Chambre indépendante avec lit double et dressing",
        "Salle de bain moderne avec douche, lavabo et WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Bbox- Thibaud et Marine",
    motDePasse: "AirbnbMT",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🚪 Sortir de l'immeuble",
        contenu: "Pour sortir de l'immeuble, appuyez sur le bouton situé à droite de la porte : il déverrouille l'ouverture.",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une capsule de lessive, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour les deux lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://www.youtube.com/watch?v=yB5Dmc_Acvk",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/saintpierre/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton Power (rouge) de la première télécommande pour allumer le téléviseur.\n2. Prenez la deuxième télécommande (la plus fine) et appuyez sur le bouton Power, en haut à droite, pour allumer la box.\n3. Utilisez les touches centrales de cette télécommande pour changer de chaîne et régler le volume.",
        photos: ["/logements/saintpierre/tv.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans le placard à côté de l'entrée.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Four", "Micro-ondes", "Réfrigérateur", "Machine Nespresso", "Bouilloire", "Grille-pain", "TV"],
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
      "Les poubelles se trouvent juste à côté de l'immeuble. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables (dans la rue, à côté de l'immeuble)\n⚫ Bac gris : ordures ménagères (dans la cour)\n🍷 Verre : conteneur au 42 place Saint-Étienne-le-Vieux",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Lit double",
    "Canapé-lit",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Machine Nespresso",
    "Salle de bain",
    "Chauffage",
    "Linge de lit & serviettes",
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
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés (derrière la porte blanche de la cour)",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Rue Écuyère — bars & restaurants (~2 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~4 min)",
      "Église Saint-Pierre & office de tourisme (~6 min)",
      "Abbaye aux Hommes & hôtel de ville (~7 min)",
      "Château de Caen (~8 min)",
      "Port de plaisance (~12 min)",
    ],
    note: "Vous êtes en plein centre historique de Caen, entre la rue Saint-Pierre, la rue Écuyère et la place Saint-Sauveur. Boutiques, restaurants, château et abbayes se rejoignent facilement à pied.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, à quelques minutes à pied. Côté table, les adresses préférées d'Agathe : Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Koboon. Pour un verre : Nonna ou Âmbar, et pour le pain, Tartines et Gourmandises.",
  },

  numerosUtiles: caen.numerosUtiles,
};
