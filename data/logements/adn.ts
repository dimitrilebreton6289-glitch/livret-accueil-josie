import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses réellement proches du 12 rue des Croisiers (entre le château et la
 * place Saint-Sauveur), géolocalisées via OpenStreetMap. Elles remplacent les
 * catégories « du quotidien » de Caen ; les autres (culture, nature, plages,
 * sorties…) sont reprises de Caen. Les distances sont recalculées depuis les
 * coordonnées du logement.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Le Dauphin", desc: "Restaurant à deux pas du studio.", coords: [49.18452, -0.36487] },
    { nom: "Chez Tuyet", desc: "Cuisine vietnamienne.", coords: [49.18439, -0.36472] },
    { nom: "Blossom", desc: "Restaurant tout proche.", coords: [49.18411, -0.3647] },
    { nom: "Bouchon & Houblon", desc: "Bistrot, bières et bons petits plats.", coords: [49.18354, -0.3656] },
    { nom: "Rustica", desc: "Pizzeria.", coords: [49.18328, -0.36519] },
    { nom: "La Galettoire", desc: "Crêperie-galetterie.", coords: [49.1833, -0.36719] },
    { nom: "Bistrot Saigon", desc: "Cuisine vietnamienne.", coords: [49.18396, -0.36366] },
    { nom: "La Perle du Liban", desc: "Spécialités libanaises.", coords: [49.18557, -0.36535] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.18311, -0.36777] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.18279, -0.36855] },
  ],
  restorapide: [
    { nom: "Schmilblic", desc: "Sandwichs et salades, le plus proche.", coords: [49.18378, -0.36615] },
    { nom: "Safran", desc: "Kebab.", coords: [49.18369, -0.36644] },
    { nom: "Chez Poto", desc: "Burgers.", coords: [49.18484, -0.36336] },
    { nom: "S'il-vous-plaît", desc: "Gaufres à emporter.", coords: [49.18285, -0.36642] },
    { nom: "La Fournée", desc: "Sandwichs et formules à emporter.", coords: [49.18239, -0.36462] },
    { nom: "Burger King", desc: "Burgers, près du château.", coords: [49.18507, -0.36416] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.182, -0.36656] },
  ],
  bars: [
    { nom: "L'écume", desc: "Le bar le plus proche, juste à côté du studio.", coords: [49.18421, -0.36563] },
    { nom: "L'Aca Va Bières", desc: "Bar à bières.", coords: [49.18382, -0.36623] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.18378, -0.36628] },
    { nom: "Chez Paulette", desc: "Bar convivial.", coords: [49.18374, -0.36635] },
    { nom: "1824", desc: "Bar à cocktails.", coords: [49.18462, -0.36668] },
    { nom: "Café des Quatrans", desc: "Café-bar face au château.", coords: [49.18391, -0.36409] },
    { nom: "Le Multiverre", desc: "Bar à vins et tapas.", coords: [49.18546, -0.36516] },
    { nom: "Au Chat Noir", desc: "Pub.", coords: [49.183, -0.36722] },
  ],
  bouche: [
    { nom: "Tartines et Gourmandises", desc: "La boulangerie la plus proche (~70 m) : pain frais et viennoiseries.", coords: [49.18366, -0.36574] },
    { nom: "Atelier Rambaud", desc: "Pâtisserie.", coords: [49.18356, -0.36568] },
    { nom: "Koméli", desc: "Épicerie fine, à deux pas.", coords: [49.184, -0.36595] },
    { nom: "Le P'tit Chou Normand", desc: "Boulangerie-pâtisserie.", coords: [49.18327, -0.36342] },
    { nom: "Aux Normandises", desc: "Boulangerie-pâtisserie.", coords: [49.18253, -0.36555] },
    { nom: "Eric Kayser", desc: "Boulangerie.", coords: [49.18293, -0.3682] },
    { nom: "Boucherie Saint-Sauveur", desc: "Boucherie, près de la place Saint-Sauveur.", coords: [49.18353, -0.3688] },
  ],
  courses: [
    { nom: "La Maison du Vrac", desc: "Épicerie en vrac, la plus proche (~100 m).", coords: [49.18464, -0.36454] },
    { nom: "Épicerie de nuit les Quatrans", desc: "Épicerie de dépannage, ouverte tard.", coords: [49.18465, -0.36303] },
    { nom: "Casino Shop", desc: "Supérette, rue Écuyère.", coords: [49.18208, -0.36688] },
    { nom: "Casino Shop", desc: "Supérette, côté Saint-Pierre.", coords: [49.18374, -0.36216] },
    { nom: "Night Market", desc: "Épicerie de dépannage ouverte tard.", coords: [49.18134, -0.36719] },
  ],
  tram: [
    { nom: "Arrêt de tram « Château Quatrans »", desc: "L'arrêt de tram le plus proche (~175 m) — réseau Twisto, vers la gare et les campus.", coords: [49.18524, -0.36384] },
    { nom: "Arrêt de tram « Saint-Pierre »", desc: "Arrêt de tram au pied de l'église Saint-Pierre (~400 m).", coords: [49.18369, -0.3603] },
    { nom: "Arrêt de tram « Place de la Mare »", desc: "Arrêt de tram côté université (~300 m).", coords: [49.18701, -0.36617] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Grande Pharmacie de Caen", desc: "La pharmacie la plus proche (~220 m). Pharmacie de garde : composez le 3237.", coords: [49.18344, -0.363] },
    { nom: "Pharmacie Danjou-Rousselot", desc: "Pharmacie rue Écuyère. Tél. 02 31 30 78 17.", coords: [49.18193, -0.3671] },
    { nom: "Pharmacie Lafayette", desc: "Pharmacie près du parking Paul Doumer. Tél. 02 31 86 07 37.", coords: [49.1816, -0.36495] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Urban Wash", desc: "Laverie automatique (~200 m).", coords: [49.18396, -0.36315] },
  { nom: "Laverie du Château", desc: "Laverie automatique, près du château.", coords: [49.18484, -0.3631] },
  { nom: "Lavomatique", desc: "Laverie automatique, rue Écuyère.", coords: [49.18206, -0.36733] },
];

/**
 * Logement « ADN » — studio de charme en pierres de Caen, 12 rue des Croisiers,
 * en hypercentre (entre le château et la place Saint-Sauveur), au 1er étage,
 * dans une rue calme et donnant sur cour.
 *
 * D'après l'annonce Airbnb 1800124021493101637 (hôte Antoine, Agathe co-hôte) :
 * 2 voyageurs, lit double queen sous poutres apparentes, coin salon et petit
 * bureau près de la fenêtre, kitchenette (plaque induction 2 feux, réfrigérateur,
 * cafetière) avec bar et tabourets, salle d'eau (douche, lavabo, WC), TV, WiFi
 * + Ethernet. Café et thé offerts. Linge hôtelier (draps + 1 serviette par
 * voyageur). Arrivée 16h, départ 10h. Non-fumeur, pas d'animaux, pas de fêtes.
 *
 * « Autour de moi » : catégories du quotidien géolocalisées autour du logement
 * (NEARBY), le reste repris de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER PAR AGATHE (le guide d'arrivée de l'annonce est vide) :
 *   - WiFi : nom du réseau + mot de passe
 *   - Boîte à clés : emplacement, porte d'immeuble (digicode ?), photos
 *   - Poubelles : emplacement des bacs
 *   - Chauffage, TV : modes d'emploi
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */
export const adn: Logement = {
  id: "adn",
  nom: "ADN",
  adresse: "12 Rue des Croisiers, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=12+Rue+des+Croisiers+14000+Caen",
  coords: [49.184286, -0.365757],
  cover: "/logements/adn/cover.jpg",

  motAccueil:
    "Bienvenue à ADN, votre cocon en pierres de Caen ! Niché dans une rue calme et donnant sur cour, ce studio plein de charme vous offre une tranquillité rare en plein hypercentre. Le château, la place Saint-Sauveur et les meilleures adresses de la ville sont à quelques minutes à pied. Très bon séjour à Caen ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 16h",
    checkinExpress: [
      "Arrivée autonome grâce à une boîte à clés sécurisée",
      "Toutes les informations d'accès (code de la boîte à clés) vous sont transmises par message avant votre arrivée",
      "Le studio se trouve au 1er étage",
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 16h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Le logement est en hypercentre : il n'y a pas de place de parking privée.\nStationnement payant en voirie dans le secteur. Parkings publics à proximité : place Jean Letellier (~200 m), Paul Doumer (~300 m) et Château.\nTarifs des parkings : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Espace nuit avec lit double (queen) sous de jolies poutres apparentes",
        "Coin salon et petit espace bureau près de la fenêtre",
        "Kitchenette équipée avec coin repas (bar et tabourets)",
        "Salle d'eau avec douche, lavabo et WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "À compléter", // TODO: nom du réseau WiFi
    motDePasse: "À compléter", // TODO: mot de passe WiFi
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "Café et thé sont offerts à votre arrivée, pour vous installer en douceur. Vous trouverez aussi le nécessaire de base : papier toilette, savon, et de quoi faire la vaisselle.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Linge de qualité hôtelière, traité par une blanchisserie professionnelle : les draps sont fournis pour le lit double et chaque voyageur dispose d'une serviette de toilette.",
      },
      {
        titre: "🍳 Kitchenette",
        contenu:
          "La kitchenette est équipée pour préparer vos repas sur place :\n\n• 🔥 Plaque de cuisson à induction (2 feux)\n• ❄️ Réfrigérateur\n• ☕ Cafetière et bouilloire\n• 🍴 Vaisselle et ustensiles de cuisine\n• 🪑 Coin repas avec bar et tabourets",
      },
      {
        titre: "💻 Télétravail",
        contenu:
          "Un petit espace bureau est aménagé près de la fenêtre. Le WiFi est disponible dans tout le studio, et une prise Ethernet permet aussi une connexion filaire.",
      },
      {
        titre: "🚿 Salle d'eau",
        contenu: "La salle d'eau dispose d'une douche, d'un lavabo et d'un WC.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaque induction (2 feux)",
      "Réfrigérateur",
      "Cafetière",
      "Bouilloire",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur (cigarette électronique et vapotage compris) : merci de descendre dans la rue pour fumer. Les fêtes et les événements sont interdits. Les animaux ne sont pas acceptés.",
    },
    poubelles:
      "Les déchets doivent être triés et déposés dans les bacs prévus à cet effet.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : à déposer dans les conteneurs à verre du quartier", // TODO: emplacement des bacs
    animaux: "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "Connexion Ethernet",
    "TV",
    "Lit double (queen)",
    "Espace de travail",
    "Kitchenette équipée",
    "Plaque induction",
    "Réfrigérateur",
    "Cafetière & bouilloire",
    "Café et thé offerts",
    "Salle d'eau avec douche",
    "Chauffage",
    "Eau chaude",
    "Linge de lit & serviettes",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer le logement à clé et remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Place Saint-Sauveur — cafés & marché du vendredi (~3 min)",
      "Rue Écuyère — bars & restaurants (~3 min)",
      "Château de Caen (~4 min)",
      "Église Saint-Pierre & rue Saint-Pierre — shopping (~5 min)",
      "Abbaye aux Hommes (~8 min)",
      "Quartier du Vaugueux — restaurants (~8 min)",
    ],
    note: "Vous êtes en plein hypercentre de Caen, entre le château et la place Saint-Sauveur, dans une rue calme. Tout se fait à pied : restaurants, bars, commerces et monuments. L'arrêt de tram « Château Quatrans » est à 2 minutes.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Profitez de l'emplacement : montez sur les remparts du château pour la vue sur la ville, flânez ensuite place Saint-Sauveur et rue Écuyère, puis offrez-vous un verre en terrasse. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, l'un des plus beaux de Caen !",
  },

  numerosUtiles: caen.numerosUtiles,
};
