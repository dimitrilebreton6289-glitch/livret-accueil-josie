import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 17 rue Saint-Martin (place Saint-Martin, entre la place
 * Saint-Sauveur et l'Abbaye aux Hommes), reprises du livret StyQR « Carlito »
 * (coups de cœur d'Agathe + commerces géolocalisés). Elles remplacent les
 * catégories « du quotidien » de Caen ; les autres (culture, nature, plages,
 * sorties…) sont reprises de Caen. Les coups de cœur trop éloignés (Bibiche,
 * Maison Geslain, Keys & Co.) ne sont pas repris.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Bouillon Saint Martin", desc: "Bouillon, juste en bas du logement, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Joufflu 1er", desc: "Restaurant, place de l'Ancienne Boucherie.", coords: [49.1826033, -0.3739158] },
    { nom: "La Casinière", desc: "Restaurant, rue aux Namps.", coords: [49.1841772, -0.3666094] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "Bouillon Caponière", desc: "Bouillon : cuisine traditionnelle à petits prix.", coords: [49.1819247, -0.3749707] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Café Céramique Nami", desc: "Café céramique, place de l'Ancienne Boucherie.", coords: [49.182623, -0.3741035] },
    { nom: "Mapple Coffee", desc: "Coffee shop, rue Caponière.", coords: [49.1821698, -0.374836] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
  ],
  bars: [
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Poissonnerie Le Grand Bleu", desc: "Poissonnerie, rue Guillaume le Conquérant.", coords: [49.1823635, -0.3737343] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Carrefour Express", desc: "Supérette, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de bus « Hôtel de Ville »", desc: "L'arrêt de bus le plus proche, devant l'Abbaye aux Hommes.", coords: [49.1811824, -0.3727734] },
    { nom: "Arrêt de tram « Place de la Mare »", desc: "L'arrêt de tram le plus proche (~7 min à pied).", coords: [49.187628, -0.3672767] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Tabac Presse Pémagnie", desc: "Tabac-presse, rue Pémagnie.", coords: [49.1836016, -0.3688758] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Lavomatique Caponière", desc: "Laverie automatique, rue Caponière.", coords: [49.1815765, -0.3765192] },
];

/**
 * Logement « Carlito » — studio rénové au 1er étage d'un petit immeuble,
 * 17 rue Saint-Martin, en plein centre (place Saint-Martin).
 *
 * Annonce Airbnb 900480083663458937 (« Cœur de Caen · studio rénové · tout à
 * pied », 3 voyageurs). Pas d'annonce Booking connue. Photos reprises de
 * l'annonce Airbnb (couverture = pièce de vie) ; photos de la TV et du
 * radiateur reprises du livret StyQR.
 *
 * Refait d'après le livret StyQR « Carlito » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Carlito.md) : pièce de vie avec
 * canapé-lit, coin cuisine avec bar et 3 chaises hautes, mezzanine avec un
 * couchage simple (enfant dès 8 ans), salle de douche avec WC. Arrivée 17h,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur,
 * pas de fêtes.
 *
 * ⚠️ PARTICULARITÉ : la boîte à clés n'est PAS au 17 rue Saint-Martin mais au
 * 1 avenue du Canada (bâtiment « Grand Bruit »), à quelques mètres : boîte de
 * droite (la grise), près des boîtes aux lettres. Elle contient la clé et le
 * badge de l'interphone. Aucun code en clair dans le livret StyQR (le code est
 * envoyé par message).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Lave-vaisselle : StyQR demande de « mettre le lave-vaisselle en
 *     fonction » au départ, mais il n'apparaît pas dans la liste des
 *     équipements. Non listé ici.
 *   - Badge : StyQR dit seulement « récupérez la clé », puis « passez le
 *     badge ». Le livret suppose que le badge est avec la clé dans la boîte.
 *
 * Pour traduire un texte, voir data/i18n-styqr/carlito.ts (clé = texte FR exact).
 */
export const carlito: Logement = {
  id: "carlito",
  nom: "Carlito",
  adresse: "17 Rue Saint-Martin, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=17+Rue+Saint-Martin+14000+Caen",
  coords: [49.1835397, -0.3708176],
  cover: "/logements/carlito/cover.jpg",

  motAccueil:
    "Bienvenue à Carlito ! Votre studio lumineux et chaleureux vous attend en plein cœur de Caen, sur la place Saint-Martin. Commerces, restaurants et rues piétonnes sont à deux pas : ici, tout se fait à pied. Très bon séjour ! 🌿",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/MtQxTZ6MRL0",
    videoPortrait: true,
    checkinExpress: [
      "⚠️ Deux étapes : les clés sont à récupérer au 1 avenue du Canada (bâtiment « Grand Bruit »), à quelques mètres du logement",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Le studio se trouve au 1er étage du 17 rue Saint-Martin, porte blanche juste à gauche",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      {
        texte:
          "Rendez-vous d'abord au 1 avenue du Canada, bâtiment « Grand Bruit ». Près des boîtes aux lettres, vous trouverez deux boîtes à clés : prenez celle de droite, la grise.",
      },
      {
        texte:
          "Composez le code reçu par message, puis appuyez sur les boutons latéraux pour ouvrir la boîte. Récupérez la clé, refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Allez au 17 rue Saint-Martin, à quelques mètres. Passez le badge devant l'interphone (bouton noir) et poussez la porte.",
      },
      {
        texte:
          "Montez au 1er étage : c'est la porte blanche juste à gauche. Insérez la clé et tournez vers la droite. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Guillaume le Conquérant, rue Caponière, rue Saint-Martin, place Saint-Martin et rue de Bayeux.\nStationnement gratuit rue Bicoquet, rue Caponière (après le coiffeur Henriette), rue Neuve Bourg l'Abbé, rue de Bretagne, rue de l'Académie, rue d'Hastings et rue du Docteur Leverrier.\nParkings souterrains payants : Mairie et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec canapé-lit",
        "Coin cuisine avec bar et trois chaises hautes",
        "Cuisine entièrement équipée (four, plaque à induction, micro-ondes, réfrigérateur, grille-pain, bouilloire, machine Nespresso)",
        "Mezzanine avec un couchage simple, idéale pour un enfant à partir de 8 ans (hauteur sous plafond très limitée)",
        "Salle de douche avec vasque, rangements et WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_6452",
    motDePasse: "a5ifnj5uualebwiwfwjk",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🔑 Clé sécurisée",
        contenu:
          "La porte du studio est blindée et la clé est sécurisée : faites bien attention à ne pas la perdre, son remplacement est très coûteux !",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, du produit vaisselle et une éponge.",
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
        photos: ["/logements/carlito/canape-lit.jpg"],
      },
      {
        titre: "🪜 Mezzanine",
        contenu:
          "La mezzanine offre un couchage simple, idéal pour un enfant à partir de 8 ans. Attention : la hauteur sous plafond y est très limitée.",
        photos: ["/logements/carlito/mezzanine.jpg"],
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
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur.\n2. Avec cette même télécommande, sélectionnez « TV » avec les flèches, puis validez avec OK.\n3. Utilisez ensuite cette télécommande pour changer de chaîne et régler le volume.",
        photos: ["/logements/carlito/tv1.jpg", "/logements/carlito/tv2.jpg", "/logements/carlito/tv3.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/carlito/chauffage.jpg"],
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans le placard de la salle de bain.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Four",
      "Plaque induction",
      "Micro-ondes",
      "Réfrigérateur",
      "Grille-pain",
      "Bouilloire",
      "Machine Nespresso",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 3,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer dehors, sur le trottoir.\n🍷 Verre : conteneur au 19 place Saint-Martin.",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Canapé-lit",
    "Mezzanine (couchage simple)",
    "Cuisine équipée",
    "Four",
    "Plaque induction",
    "Micro-ondes",
    "Réfrigérateur",
    "Grille-pain",
    "Bouilloire",
    "Machine Nespresso",
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
      "Fermer les fenêtres et les velux, éteindre les lumières et baisser les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre la clé dans la boîte à clés du 1 avenue du Canada",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Place Saint-Sauveur — cafés & marché du vendredi (~2 min)",
      "Rue Écuyère — bars & restaurants (~3 min)",
      "Abbaye aux Hommes & hôtel de ville (~4 min)",
      "Jardin des Plantes (~8 min)",
      "Château de Caen (~9 min)",
    ],
    note: "Vous êtes en plein centre historique, sur la place Saint-Martin, entre la place Saint-Sauveur et l'Abbaye aux Hommes. Restaurants, cafés et commerces sont au pied de l'immeuble, et tout le centre se découvre à pied.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, à deux pas. Visitez ensuite l'Abbaye aux Hommes, juste à côté. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
