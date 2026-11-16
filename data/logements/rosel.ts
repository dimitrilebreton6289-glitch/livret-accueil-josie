import type { Logement, CategorySection } from "../types";
import { caen } from "./caen";

/**
 * « Autour de moi » à Rosel (village au nord-ouest de Caen), repris des adresses
 * géolocalisées du livret StyQR « Rosel » (export du 2026-11-16) : commerces des
 * villages voisins (Rots, Cairon, Thue et Mue), sorties autour de Caen, et les
 * coups de cœur d'Agathe à Caen (~15 min en voiture). Distances recalculées par
 * la carte.
 */
const CATEGORIES: CategorySection[] = [
  {
    key: "culture",
    lieux: [
      { nom: "Le Mémorial de Caen", desc: "Le grand musée pour la Paix (Seconde Guerre mondiale, Débarquement), à ~15 min en voiture.", coords: [49.1973431, -0.3839795] },
      { nom: "Château de Caen", desc: "Forteresse de Guillaume le Conquérant, en plein centre de Caen (~20 min en voiture).", coords: [49.186585, -0.3632897] },
      { nom: "Abbaye aux Hommes", desc: "L'abbaye fondée par Guillaume le Conquérant, qui abrite l'hôtel de ville de Caen.", coords: [49.1818001, -0.3729837] },
      { nom: "Musée de la Tapisserie de Bayeux", desc: "La célèbre Tapisserie de Bayeux, à ~25 min en voiture.", coords: [49.274411, -0.7005935] },
    ],
  },
  {
    key: "plages",
    lieux: [
      { nom: "Plage de Courseulles-sur-Mer", desc: "Plage du Débarquement (Juno Beach), réputée pour ses huîtres. À ~20 min en voiture.", coords: [49.3352889, -0.4495877] },
      { nom: "Plage de Ouistreham Riva-Bella", desc: "Grande plage de sable, casino et front de mer animé. À ~25 min en voiture.", coords: [49.2914044, -0.2662163] },
    ],
  },
  {
    key: "nature",
    lieux: [
      { nom: "Jardin des Coteaux de la Mue", desc: "Jardin au bord de la Mue, à Rots.", coords: [49.2105867, -0.4772904] },
      { nom: "Parc de la Colline aux Oiseaux", desc: "Grand parc paysager près du Mémorial : roseraie, labyrinthe et animaux. Idéal en famille.", coords: [49.197753, -0.3923751] },
    ],
  },
  {
    key: "loisirs",
    lieux: [
      { nom: "Festyland", desc: "Parc d'attractions pour toute la famille, à ~10 min en voiture.", coords: [49.1839642, -0.4249263] },
      { nom: "Centre aqualudique Siréna", desc: "Piscine, toboggans et espace bien-être, à Carpiquet.", coords: [49.186628, -0.442111] },
      { nom: "CECA — Écuries du Clos d'Ardennes", desc: "Centre équestre, à Saint-Contest.", coords: [49.2165451, -0.4269005] },
      { nom: "Bowling de Bretteville-sur-Odon", desc: "Bowling.", coords: [49.1648779, -0.4250074] },
    ],
  },
  {
    key: "restaurants",
    lieux: [
      { nom: "Le Brunch de Billy", desc: "Brunch à la ferme de Billy, à Rots.", coords: [49.2135347, -0.4725578] },
      { nom: "L'exutoire", desc: "Restaurant, bar et brunch, à Cairon.", coords: [49.2202028, -0.4250709] },
      { nom: "L'Italien", desc: "Pizzeria, à Carpiquet.", coords: [49.1845465, -0.4464823] },
      { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
      { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
      { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
      { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    ],
  },
  {
    key: "restorapide",
    lieux: [
      { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
      { nom: "McDonald's Rots", desc: "Restauration rapide, près du centre commercial de Rots.", coords: [49.197441, -0.457122] },
    ],
  },
  {
    key: "bars",
    lieux: [
      { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
      { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    ],
  },
  {
    key: "courses",
    lieux: [
      { nom: "Carrefour Caen-Rots", desc: "Hypermarché et centre commercial, à ~5 min en voiture.", coords: [49.19932, -0.46102] },
      { nom: "U Express", desc: "Supérette, à Thue et Mue.", coords: [49.21556, -0.50489] },
    ],
  },
  {
    key: "bouche",
    lieux: [
      { nom: "Boulangerie Leray", desc: "Boulangerie, à Cairon.", coords: [49.2338406, -0.4440318] },
      { nom: "Boucherie Fabien Auvray", desc: "Boucherie, à Rots.", coords: [49.2099637, -0.4762086] },
      { nom: "Les Caves de Rosel", desc: "Caviste, dans le village.", coords: [49.2302742, -0.4606326] },
      { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie, à Biéville-Beuville.", coords: [49.2291049, -0.3715266] },
      { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et café gourmand, à Caen.", coords: [49.1738601, -0.3908533] },
      { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
      { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    ],
  },
  {
    key: "stations",
    lieux: [
      { nom: "Station Carrefour Caen-Rots", desc: "Station-service de l'hypermarché.", coords: [49.2000963, -0.4594763] },
    ],
  },
  {
    key: "tabac",
    lieux: [
      { nom: "Le Cadran Solaire", desc: "Bar-tabac, à Thue et Mue.", coords: [49.2100981, -0.5107511] },
    ],
  },
  {
    key: "transports",
    lieux: [
      { nom: "Arrêt de bus « Rosel Bourg »", desc: "L'arrêt de bus du village.", coords: [49.228394, -0.459349] },
      { nom: "Gare SNCF de Caen", desc: "Trains directs vers Paris Saint-Lazare (~2h), à ~20 min en voiture.", coords: [49.1764351, -0.3476215] },
      { nom: "Aéroport de Caen-Carpiquet", desc: "Vols intérieurs et saisonniers, à ~10 min en voiture.", coords: [49.183191, -0.4594302] },
    ],
  },
  {
    key: "sante",
    lieux: [
      { nom: "Pharmacie de garde", desc: "Pour trouver la pharmacie de garde la plus proche, composez le 3237." },
    ],
  },
  {
    key: "hopital",
    lieux: [
      { nom: "CHU Caen Normandie", desc: "Centre hospitalier universitaire (urgences), à ~15 min en voiture.", coords: [49.2050156, -0.3575204] },
      { nom: "Hôpital privé Saint-Martin", desc: "Hôpital privé, à Caen.", coords: [49.1980727, -0.3805366] },
    ],
  },
];

/**
 * Logement « Rosel » — maison sur deux étages au 3 chemin du Ricaras, à Rosel
 * (à ~15 min au nord-ouest de Caen), avec grand jardin privatif de 350 m²
 * (terrasse, barbecue, pétanque, palets), cour pour se garer et dépendance
 * (2e réfrigérateur, sèche-linge, jeux). Au rez-de-chaussée : pièce de vie avec
 * grande table, cuisine équipée (four, lave-vaisselle, lave-linge, plaques). À
 * l'étage : chambre parentale (lit double), chambre modulable (2 lits simples ou
 * 1 lit double), coin nuit sur le palier (lits superposés), salle de bain avec
 * douche à l'italienne. Deux WC (un par étage). WiFi et TV connectée.
 *
 * Annonces : Airbnb 1644088917826924334 (annonce masquée : la page renvoie une
 * erreur 404, photos impossibles à récupérer), Booking 16013530.
 *
 * Refait d'après le livret StyQR « Rosel » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Rosel.md). Arrivée 17h, départ
 * 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas de fêtes.
 * Aucun code en clair dans le livret StyQR. Vidéo d'arrivée YouTube (« Maison
 * Rosel ») reprise telle quelle.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Photo de couverture à fournir : en attendant, photo générique du château
 *    de Caen (/logements/caen/cover.jpg).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Capacité : 6 personnes déduite des couchages (lit double + chambre
 *     modulable + lits superposés). À confirmer.
 *   - Code postal 14740 (Rosel) et coordonnées reprises de StyQR.
 *
 * Pour traduire un texte, voir data/i18n-styqr/rosel.ts (clé = texte FR exact).
 */
export const rosel: Logement = {
  id: "rosel",
  nom: "Rosel",
  adresse: "3 Chemin du Ricaras, 14740 Rosel",
  ville: "Rosel",
  itineraire: "https://maps.google.com/?q=3+Chemin+du+Ricaras+14740+Rosel",
  coords: [49.2215876, -0.4666072],
  cover: "/logements/caen/cover.jpg",

  motAccueil:
    "Bienvenue à Rosel ! Votre maison, avec son grand jardin de 350 m², vous attend au calme de la campagne, à 15 minutes de Caen. Les plages du Débarquement et Bayeux sont à une demi-heure. Très bon séjour ! 🌳",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=D1HXbS4cl_c",
    checkinExpress: [
      "Maison avec cour et grand jardin privé, au 3 chemin du Ricaras",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à la maison",
    ],
    etapes: [
      { texte: "Rendez-vous au 3 chemin du Ricaras, à Rosel." },
      {
        texte:
          "La boîte à clés se trouve à côté des boîtes aux lettres : composez le code reçu par message, récupérez les clés, puis refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Ouvrez le portail noir avec l'une des clés. Vous pouvez garer votre voiture dans la cour, ou sur le terrain à côté des boîtes aux lettres (il appartient à la maison).",
      },
      {
        texte:
          "Ouvrez la porte de la maison avec la deuxième clé. La troisième clé ouvre la dépendance, en face de la maison. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement gratuit et privé : dans la cour de la maison, ou sur le terrain à côté des boîtes aux lettres, chemin du Ricaras (il appartient à la maison).",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec salon et grande table pour les repas",
        "Cuisine entièrement équipée (four, plaques de cuisson, lave-vaisselle, lave-linge)",
        "WC",
      ],
      etage: [
        "Chambre parentale avec lit double",
        "Chambre modulable : deux lits simples ou un lit double",
        "Coin nuit sur le palier avec lits superposés",
        "Salle de bain avec douche à l'italienne",
        "WC séparés",
      ],
      exterieur: [
        "Grand jardin privatif de 350 m² avec terrasse et barbecue",
        "Jeux extérieurs : pétanque et palets",
        "Dépendance avec deuxième réfrigérateur, sèche-linge et matériel de loisirs",
        "Cour privée pour garer votre voiture",
      ],
    },
  },

  wifi: {
    reseau: "Bon séjour",
    motDePasse: "bonsejour",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, une capsule de lessive, une pastille de lave-vaisselle, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour tous les lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Allumez le téléviseur avec sa télécommande (bouton On/Off), puis faites de même avec la télécommande du décodeur (box).\n2. Une fois l'écran allumé, changez de chaîne avec la télécommande du décodeur.\nLa TV est connectée : Netflix et Amazon Prime sont disponibles avec vos propres identifiants.",
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
        titre: "🌡️ Chauffage",
        contenu:
          "Le chauffage de la maison fonctionne au gaz. Pour régler la température, tournez la vanne située sur le côté de chaque radiateur. Merci de limiter votre consommation et de baisser le chauffage quand vous quittez la maison ou aérez les pièces.",
      },
      {
        titre: "🏡 Dépendance",
        contenu:
          "La dépendance, en face de la maison, s'ouvre avec la troisième clé du trousseau. Vous y trouverez un deuxième réfrigérateur, un sèche-linge et les jeux d'extérieur (pétanque, palets).",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans le placard de la cuisine, à côté du réfrigérateur.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Four",
      "Plaques de cuisson",
      "Lave-vaisselle",
      "Lave-linge",
      "Sèche-linge",
      "Réfrigérateur",
      "Machine Nespresso",
      "TV connectée",
    ],
    reglementInterieur: {
      capaciteMax: 6,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun et la tranquillité du voisinage.",
      texte:
        "Maison non-fumeur : merci de fumer à l'extérieur. Les fêtes et les soirées sont strictement interdites. Merci de veiller à la tranquillité du voisinage en limitant le bruit, dans la maison comme dans le jardin.",
    },
    poubelles:
      "Les poubelles sont à déposer dans les bacs situés dans la cour. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\nLe ramassage a lieu le mercredi : merci de sortir les bacs le mardi soir ou le mercredi matin, à droite en sortant du portail.",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV connectée",
    "Jardin privé de 350 m²",
    "Terrasse & barbecue",
    "Pétanque & palets",
    "Parking privé dans la cour",
    "Cuisine entièrement équipée",
    "Four",
    "Lave-vaisselle",
    "Lave-linge",
    "Sèche-linge",
    "Machine Nespresso",
    "Douche à l'italienne",
    "Deux WC",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Lancer le lave-vaisselle avant de partir",
      "Rendre la maison propre et rangée",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Laisser les draps sur les lits et les serviettes utilisées dans la salle de bain",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer la maison, la dépendance et le portail à clé, puis remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Le village de Rosel, au calme de la campagne",
      "Les Caves de Rosel (~15 min à pied)",
      "Boulangerie à Cairon (~5 min en voiture)",
      "Centre commercial Carrefour Caen-Rots (~5 min en voiture)",
      "Caen centre (~15 min en voiture)",
      "Plages du Débarquement (~20 min en voiture)",
    ],
    note: "Vous êtes à Rosel, petit village de la plaine de Caen, au calme. Une voiture est recommandée : Caen, le Mémorial, les plages du Débarquement et Bayeux sont à 15–30 minutes.",
  },

  autourDeMoi: {
    categories: CATEGORIES,
    coupDeCoeur:
      "Profitez du jardin et d'un barbecue en famille, puis partez à la découverte de la région : le Mémorial de Caen, les plages du Débarquement et Bayeux sont tout proches. À Caen, les adresses préférées d'Agathe : Le Bistrot Basque, Bœuf & Cow, A Contre Sens et Le Mug ; pour un verre, Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
