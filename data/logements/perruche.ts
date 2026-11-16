import type { CategorySection, Lieu, Logement } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 53 rue Froide (centre piéton, entre la place
 * Saint-Sauveur et l'église Saint-Pierre), reprises du livret StyQR
 * « Perruche » (coups de cœur d'Agathe + commerces géolocalisés). Elles
 * remplacent les catégories « du quotidien » de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "La Casinière", desc: "Restaurant, rue aux Namps, juste à côté du logement.", coords: [49.1841772, -0.3666094] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "Boumbap", desc: "Restaurant, passage du Grand Turc.", coords: [49.1828613, -0.3627187] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Mian Mian", desc: "Restaurant, rue de Geôle.", coords: [49.1843097, -0.3620192] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
  ],
  restorapide: [
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Arbuste", desc: "Café, rue Montoir-Poissonnerie.", coords: [49.184466, -0.3604197] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux, presque en face du logement.", coords: [49.1837389, -0.3662196] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  nocturne: [
    { nom: "Le Farniente", desc: "Discothèque, rue Paul Doumer.", coords: [49.181961, -0.3650175] },
    { nom: "Le Che", desc: "Club, rue du Tour de Terre, près du château.", coords: [49.1848553, -0.3640192] },
    { nom: "Le Dépôt", desc: "Club, rue Buquet.", coords: [49.1849681, -0.3590667] },
  ],
  bouche: [
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide, juste en bas du logement.", coords: [49.1837062, -0.3656687] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Alban Guilmet", desc: "Pâtissier-chocolatier, rue Saint-Jean.", coords: [49.1831558, -0.3608185] },
    { nom: "Yver Chocolatier", desc: "Chocolatier, boulevard Maréchal Leclerc.", coords: [49.181918, -0.361601] },
    { nom: "Boucherie Sabot", desc: "Boucherie, boulevard des Alliés.", coords: [49.1844252, -0.3593992] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et salon de thé, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie à Biéville-Beuville (~15 min en voiture).", coords: [49.2291049, -0.3715266] },
  ],
  courses: [
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Casino Shop (rue Saint-Pierre)", desc: "Supérette, rue Saint-Pierre.", coords: [49.1835703, -0.3620525] },
    { nom: "Coccinelle Express", desc: "Supérette, rue Basse.", coords: [49.184705, -0.358662] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt « Château - Quatrans »", desc: "L'arrêt de tram et de bus le plus proche (~3 min à pied).", coords: [49.18508, -0.36338] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "Pharmacie, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Grande Pharmacie de Caen", desc: "Pharmacie, rue Saint-Pierre.", coords: [49.183458, -0.36294] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Le Saint Alban", desc: "Bar-tabac, rue Froide, à deux pas du logement.", coords: [49.183585, -0.3658956] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Urban Wash", desc: "Laverie automatique, rue des Teinturiers.", coords: [49.1839747, -0.3631268] },
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
 * Logement « Perruche » — studio au 4e et dernier étage (sans ascenseur,
 * escaliers raides) d'un immeuble ancien en pierre de Caen, 53 rue Froide, en
 * plein centre piéton.
 *
 * Annonces : Airbnb 968010506374772170 (« Studio de charme · centre piéton de
 * Caen · pierres »), 2 voyageurs. Photos reprises de l'annonce Airbnb
 * (couverture = pièce principale).
 *
 * Refait d'après le livret StyQR « Perruche » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Perruche.md) : pièce principale
 * avec lit double 140 × 200, espace repas et coin salon, kitchenette équipée,
 * salle de douche avec WC. Arrivée 17h, départ 10h. Animaux acceptés
 * (1 maximum, avec supplément).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Pour ouvrir la porte de l'immeuble, le livret StyQR donnait en clair deux
 * numéros de téléphone à appeler (ouverture à distance). Ils ne sont PAS
 * repris ici : le livret dit « appelez le numéro reçu par message ». Penser à
 * l'envoyer dans le message d'arrivée.
 *
 * ⚠️ À vérifier par Agathe :
 *   - Couchage : StyQR parle d'un seul lit double dans la présentation, mais
 *     de « draps pour les deux lits (lit double + canapé convertible) » dans le
 *     linge de maison ; l'annonce Airbnb indique 2 voyageurs. On a gardé
 *     2 voyageurs, lit double seul.
 *   - Départ : on demande de remettre les clés ET le badge dans la boîte à
 *     code (StyQR ne parle que des clés).
 *   - Pas de rubrique Télévision dans StyQR : y a-t-il une TV ?
 *
 * Pour traduire un texte, voir data/i18n-styqr/perruche.ts (clé = texte FR exact).
 */
export const perruche: Logement = {
  id: "perruche",
  nom: "Perruche",
  adresse: "53 Rue Froide, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=53+Rue+Froide+14000+Caen",
  coords: [49.183783, -0.3661972],
  cover: "/logements/perruche/cover.jpg",

  motAccueil:
    "Bienvenue à la Perruche ! Votre studio de charme se trouve au dernier étage d'un immeuble ancien en pierre de Caen, rue Froide, en plein centre piéton. Restaurants, bars, boutiques et château sont à quelques pas. Très bon séjour ! 🦜",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=dpHXAkOvpKA",
    checkinExpress: [
      "Le studio se trouve au 4e et dernier étage du 53 rue Froide, sans ascenseur (attention, les escaliers sont raides)",
      "Le numéro à appeler pour ouvrir la porte de l'immeuble et le code de la boîte à clés vous sont communiqués par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 53 rue Froide : c'est la porte blanche, entre l'Aca Bières et le Schmilblic." },
      {
        texte:
          "Appelez le numéro reçu par message : dès que vous entendez le « bip », poussez la porte pour entrer.",
      },
      { texte: "Montez jusqu'au 4e étage (attention, les escaliers sont raides)." },
      {
        texte:
          "Votre porte est à droite, avec une boîte à code au-dessus de la poignée. Composez le code reçu par message et baissez le loquet noir pour l'ouvrir.",
      },
      {
        texte:
          "Récupérez les clés et ouvrez la porte de l'appartement. Pendant votre séjour, le badge fourni avec les clés ouvre la porte de l'immeuble : passez-le simplement devant l'interphone. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Quincampoix, rue Demolombe, rue Pasteur et rue Froide.\nStationnement gratuit rue Leverrier et rue Demolombe.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce principale avec lit double (140 × 200 cm), espace repas et coin salon, avec vue sur la rue Froide",
        "Kitchenette équipée",
        "Salle de douche avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_4441",
    motDePasse: "qxl4mzsr3ysjndk27kwx",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une capsule de lessive, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit double. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/perruche/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/perruche/kitchenette.jpg"],
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
    electromenager: [
      "Plaque de cuisson",
      "Micro-ondes",
      "Réfrigérateur",
      "Machine Nespresso",
      "Bouilloire",
      "Grille-pain",
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
      "Les poubelles se trouvent dans les bacs à l'extérieur, juste à côté de l'agence Billet Giraud. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 28 rue Saint-Sauveur",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "Lit double",
    "Kitchenette équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Salle de douche avec WC",
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
      "Fermer l'appartement à clé, puis remettre les clés et le badge dans la boîte à code (au-dessus de la poignée)",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Place Saint-Sauveur — cafés & marché du vendredi (~3 min)",
      "Rue Écuyère — bars & restaurants (~3 min)",
      "Château de Caen (~5 min)",
      "Église Saint-Pierre & office de tourisme (~5 min)",
      "Abbaye aux Hommes (~7 min)",
      "Port de plaisance (~12 min)",
    ],
    note: "Vous êtes rue Froide, une rue piétonne du centre historique, entre la place Saint-Sauveur et l'église Saint-Pierre. Bars, restaurants, boutiques et le château sont à quelques minutes à pied.",
  },

  autourDeMoi: {
    categories: CATEGORIES,
    coupDeCoeur:
      "Vous êtes au cœur du Caen piéton : le pain du matin chez Tartines et Gourmandises, juste en bas, et un verre au Comptoir, presque en face. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Koboon. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
