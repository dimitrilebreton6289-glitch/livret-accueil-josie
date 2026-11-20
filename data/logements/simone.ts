import type { CategorySection, Lieu, Logement } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 131 rue Caponière (côté Zénith / Stade Hélitas),
 * reprises du livret StyQR « Simone » (coups de cœur d'Agathe + commerces
 * géolocalisés). Elles remplacent les catégories « du quotidien » de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Chez Sandy", desc: "Restaurant de quartier, rue Caponière.", coords: [49.1816888, -0.3762207] },
    { nom: "Bouillon Caponière", desc: "Bouillon : cuisine traditionnelle à petits prix.", coords: [49.1819247, -0.3749707] },
    { nom: "Joufflu 1er", desc: "Restaurant, place de l'Ancienne Boucherie.", coords: [49.1826033, -0.3739158] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Mapple Coffee", desc: "Coffee shop, rue Caponière.", coords: [49.1821698, -0.374836] },
    { nom: "Café Céramique Nami", desc: "Café et pâtisseries, place de l'Ancienne Boucherie (on peut aussi y peindre sa céramique).", coords: [49.182623, -0.3741035] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Boulangerie Jolin", desc: "Boulangerie, rue Caponière.", coords: [49.1753639, -0.3873115] },
    { nom: "Boulangerie Calou", desc: "Boulangerie-pâtisserie, rue Caponière.", coords: [49.181751, -0.3760983] },
    { nom: "Maison Toulorge", desc: "Boulangerie, rue Eugène Maës.", coords: [49.1759586, -0.3887997] },
    { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et salon de thé, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Poissonnerie Le Grand Bleu", desc: "Poissonnerie, rue Guillaume le Conquérant.", coords: [49.1823635, -0.3737343] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie à Biéville-Beuville (~15 min en voiture).", coords: [49.2291049, -0.3715266] },
  ],
  courses: [
    { nom: "Contact'Market", desc: "La supérette la plus proche, rue Caponière, à deux pas du logement.", coords: [49.178353, -0.380122] },
    { nom: "Carrefour Express", desc: "Supérette, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "Zénith Fraîcheur", desc: "Primeur, boulevard Yves Guillou.", coords: [49.1715714, -0.3871187] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de bus « Rectorat »", desc: "L'arrêt de bus le plus proche, à deux pas du logement.", coords: [49.177448, -0.381565] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "Pharmacie, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Le Royal", desc: "Bar-tabac, rue Caponière, à deux pas du logement.", coords: [49.1784362, -0.3794985] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Caponière", desc: "Laverie automatique, rue Caponière.", coords: [49.1815765, -0.3765192] },
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
];

/** Catégories de Caen, sans les adresses décrites « à côté » de Vaugueux 2. */
const PRES_DU_VAUGUEUX = /du logement|juste à côté|tout près|à deux pas :/;
const descFr = (l: Lieu) => (typeof l.desc === "string" ? l.desc : l.desc.fr);
const CATEGORIES: CategorySection[] = [
  ...caen.autourDeMoi.categories
    .map((c) =>
      NEARBY[c.key]
        ? { key: c.key, lieux: NEARBY[c.key] }
        : { key: c.key, lieux: c.lieux.filter((l) => !PRES_DU_VAUGUEUX.test(descFr(l))) },
    )
    .filter((c) => c.lieux.length > 0),
  { key: "laverie", lieux: LAVERIES },
];

/**
 * Logement « Simone » — duplex rénové de 35 m² au 1er étage d'un immeuble
 * calme et sans vis-à-vis, 131 rue Caponière (accès par le porche du n° 135).
 *
 * Annonces : Airbnb 1045075194430640105 (« Duplex calme à Caen · proche Zénith
 * & commerces »), 2 voyageurs. Photos reprises de l'annonce Airbnb
 * (couverture = salon).
 *
 * Refait d'après le livret StyQR « Simone » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Simone.md) : en bas, pièce de
 * vie avec TV, table à manger et cuisine équipée ; à l'étage, chambre
 * indépendante avec lit double et stores occultants, salle de douche. Arrivée
 * 17h, départ 10h. Animaux acceptés (1 maximum, avec supplément).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Pas de code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message).
 *
 * ⚠️ À vérifier par Agathe :
 *   - Taille du lit : « lit double » dans la présentation, « Queen Size
 *     160 × 200 » dans le linge de maison. On a gardé « queen size ».
 *   - Poubelles : à déposer sur le palier extérieur (l'équipe les retire),
 *     verre au 160 rue Caponière — à confirmer.
 *
 * Pour traduire un texte, voir data/i18n-styqr/simone.ts (clé = texte FR exact).
 */
export const simone: Logement = {
  id: "simone",
  nom: "Simone",
  adresse: "131 Rue Caponière, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=131+Rue+Caponi%C3%A8re+14000+Caen",
  coords: [49.1777673, -0.3807869],
  cover: "/logements/simone/cover.jpg",

  motAccueil:
    "Bienvenue chez Simone ! Votre duplex entièrement rénové se trouve dans un immeuble calme et sans vis-à-vis de la rue Caponière, tout près du Zénith et à un quart d'heure à pied du centre historique de Caen. Très bon séjour ! 🌿",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=PiP5OxTktH8",
    checkinExpress: [
      "L'appartement se trouve au 1er étage du 131 rue Caponière : l'accès se fait par le porche du numéro 135",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 131 rue Caponière, puis passez sous le porche du numéro 135." },
      { texte: "Au bout du porche, la boîte à clés se trouve sur votre gauche." },
      {
        texte:
          "Composez le code de la boîte à clés reçu par message, puis appuyez sur les boutons latéraux pour l'ouvrir. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      { texte: "Ouvrez le portillon avec la grande clé, puis montez les escaliers." },
      { texte: "Votre porte est celle de gauche : ouvrez-la avec l'autre clé. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement gratuit rue Caponière, rue Damozanne, rue Saint-Ouen, rue de Maltot et venelle aux Loups.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: ["Pièce de vie avec salon et TV", "Table à manger", "Cuisine entièrement équipée"],
      etage: [
        "Chambre indépendante avec lit double et stores occultants",
        "Salle de douche (gel douche, shampoing et sèche-cheveux fournis)",
      ],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-B500",
    motDePasse: "x9MgijvxWbVpTHFvz7",
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
          "Les draps sont fournis pour le lit queen size (160 × 200 cm). Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
        photos: ["/logements/simone/chambre.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Allumez l'écran avec la télécommande de la télévision (bouton Power rouge).\n2. Allumez ensuite la box avec sa propre télécommande (bouton Power).\n3. Utilisez la télécommande de la box pour régler le volume et changer de chaîne.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/simone/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/simone/cuisine.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le côté du radiateur pour faire apparaître l'écran, puis sur le bouton On/Off. Réglez ensuite la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un balai, une pelle et une balayette se trouvent dans le placard de la pièce de vie.",
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
      "Sèche-cheveux",
      "Fer à repasser",
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
      "Déposez vos sacs poubelle sur le palier extérieur : nous nous chargeons de les retirer. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 160 rue Caponière",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Lit double",
    "Stores occultants",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Salle de douche",
    "Sèche-cheveux",
    "Fer à repasser",
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
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Laisser les draps sur les lits (l'équipe de ménage s'en charge) ; vous pouvez laisser les serviettes utilisées dans la salle de bain",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer les portes à clé, puis remettre les clés dans la boîte à clés (au bout du porche du numéro 135)",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "FRAC Normandie (~5 min)",
      "Abbaye aux Hommes & hôtel de ville (~9 min)",
      "Zénith & Palais des Sports (~10 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~12 min)",
      "Rue Écuyère — bars & restaurants (~13 min)",
      "Château de Caen (~20 min)",
    ],
    note: "Vous êtes rue Caponière, dans un quartier résidentiel calme à l'ouest du centre, entre l'Abbaye aux Hommes et le Zénith. Une supérette, un bar-tabac et un arrêt de bus sont juste à côté, et le centre historique se rejoint à pied en un quart d'heure environ.",
  },

  autourDeMoi: {
    categories: CATEGORIES,
    coupDeCoeur:
      "Le quartier est calme : idéal pour se reposer après un concert au Zénith ! Pour le goûter, filez chez Bibiche, la pâtisserie coup de cœur d'Agathe, à 10 minutes à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Koboon. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
