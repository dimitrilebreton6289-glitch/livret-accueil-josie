import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 48 rue de Bayeux (quartier de l'Abbaye aux Hommes),
 * reprises du livret StyQR « Studio 48 » (coups de cœur d'Agathe + commerces
 * géolocalisés). Elles remplacent les catégories « du quotidien » de Caen ;
 * les autres (culture, nature, plages, sorties…) sont reprises de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Chez Sandy", desc: "Restaurant de quartier, rue Caponière.", coords: [49.1816888, -0.3762207] },
    { nom: "Bouillon Caponière", desc: "Bouillon : cuisine traditionnelle à petits prix.", coords: [49.1819247, -0.3749707] },
    { nom: "Joufflu 1er", desc: "Restaurant, place de l'Ancienne Boucherie.", coords: [49.1826033, -0.3739158] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Mapple Coffee", desc: "Coffee shop, rue Caponière.", coords: [49.1821698, -0.374836] },
    { nom: "Café Céramique Nami", desc: "Café et pâtisseries, place de l'Ancienne Boucherie (on peut aussi y peindre sa céramique).", coords: [49.182623, -0.3741035] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
  ],
  bars: [
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Grain de blé", desc: "Boulangerie, rue Guillaume le Conquérant.", coords: [49.182368, -0.3738124] },
    { nom: "Poissonnerie Le Grand Bleu", desc: "Poissonnerie, rue Guillaume le Conquérant.", coords: [49.1823635, -0.3737343] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Carrefour Express", desc: "La supérette la plus proche, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de bus « Hôtel de Ville »", desc: "L'arrêt de bus le plus proche, devant l'Abbaye aux Hommes.", coords: [49.1811824, -0.3727734] },
    { nom: "Arrêt de tram « Place de la Mare »", desc: "L'arrêt de tram le plus proche (~12 min à pied).", coords: [49.187628, -0.3672767] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Tabac Presse de l'Abbaye", desc: "Tabac-presse, rue de Bayeux.", coords: [49.182332, -0.3750791] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Caponière", desc: "La laverie la plus proche, rue Caponière.", coords: [49.1815765, -0.3765192] },
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
];

/**
 * Logement « Studio 48 » — studio au rez-de-chaussée du 48 rue de Bayeux,
 * derrière la porte verte, à deux pas de l'Abbaye aux Hommes et de la place de
 * l'Ancienne Boucherie.
 *
 * Annonces : Booking 15395060. Pas d'annonce Airbnb identifiée.
 * Couverture reprise de l'annonce Booking le 16/11/2026 (ancienne note : photo de couverture à fournir) : en attendant, couverture générique de
 * Caen (/logements/caen/cover.jpg).
 *
 * Refait d'après le livret StyQR « Studio 48 » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Studio-48.md ; ce livret avait
 * déjà une traduction anglaise, reprise et retravaillée) : pièce de vie avec
 * canapé-lit (2 personnes), espace repas et cuisine, salle de bain avec WC.
 * Arrivée 17h, départ 10h. Animaux acceptés (1 maximum, avec supplément).
 * Non-fumeur, pas de fêtes.
 *
 * « Autour de moi » : adresses du quotidien proches du logement (NEARBY), avec
 * les coups de cœur d'Agathe repris de StyQR ; le reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message le jour de l'arrivée). Pas de vidéo d'accès dans StyQR.
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Photo de couverture et photos du studio à fournir.
 *   - Équipement de la cuisine : StyQR ne détaille que la plaque de cuisson
 *     et la cafetière filtre.
 *
 * Pour traduire un texte, voir data/i18n-styqr/studio48.ts (clé = texte FR exact).
 */
export const studio48: Logement = {
  id: "studio48",
  nom: "Studio 48",
  adresse: "48 Rue de Bayeux, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=48+Rue+de+Bayeux+14000+Caen",
  coords: [49.1829024, -0.3774544],
  cover: "/logements/studio48/cover.jpg",

  motAccueil:
    "Bienvenue au Studio 48 ! Votre studio se trouve au rez-de-chaussée, rue de Bayeux, à deux pas de l'Abbaye aux Hommes. Cafés, restaurants et commerces sont tout proches, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Le studio se trouve au rez-de-chaussée du 48 rue de Bayeux, derrière la porte verte",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez les étapes ci-dessous pour accéder au studio",
    ],
    etapes: [
      { texte: "Rendez-vous au 48 rue de Bayeux." },
      {
        texte:
          "La boîte à clés se trouve à côté de la porte verte. Composez le code reçu par message, puis baissez le loquet noir pour ouvrir la boîte.",
      },
      { texte: "Récupérez la clé, refermez la boîte et brouillez le code." },
      { texte: "Ouvrez la porte verte avec la clé : le studio est au rez-de-chaussée. Bienvenue chez vous ! 💐" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue de Bayeux (gratuit au-delà du Carrefour Express), rue Guillaume le Conquérant, rue Caponière et rue Saint-Martin.\nStationnement gratuit rue Bicoquet, rue Caponière (après le coiffeur Henriette), rue Neuve Bourg l'Abbé, rue de Bretagne, rue de l'Académie et rue d'Hastings.\nParkings souterrains payants : Mairie et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec salon et canapé-lit (2 personnes)",
        "Espace repas et cuisine",
        "Salle de bain avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Bbox-6E52C9A9",
    motDePasse: "dSv46hP7csP3NZGSP9",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, du café et du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le canapé-lit. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une cafetière à filtre. Du café vous est offert à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur.\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur.\n3. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Cafetière", "TV"],
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
      "Les poubelles sont à déposer dans le local poubelles de la résidence voisine, au 50 rue de Bayeux : le badge de votre trousseau de clés vous permet d'y entrer. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 4 place de l'Ancienne Boucherie",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Canapé-lit",
    "Plaque de cuisson",
    "Cafetière",
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
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Place de l'Ancienne Boucherie — cafés & restaurants (~3 min)",
      "Abbaye aux Hommes & hôtel de ville (~4 min)",
      "Place Saint-Martin (~6 min)",
      "Rue Écuyère — bars & restaurants (~7 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~7 min)",
      "Château de Caen (~15 min)",
    ],
    note: "Vous êtes dans le quartier de l'Abbaye aux Hommes, à l'ouest du centre historique. Supérette, boulangerie et restaurants sont à quelques pas, et la rue Écuyère, la place Saint-Sauveur et le château se rejoignent facilement à pied.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Commencez par un café place de l'Ancienne Boucherie, puis visitez l'Abbaye aux Hommes juste à côté. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
