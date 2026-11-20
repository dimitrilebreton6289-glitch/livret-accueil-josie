import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 51 rue Saint-Sauveur (sur la place Saint-Sauveur),
 * reprises du livret StyQR « Saint-Sauveur » (coups de cœur d'Agathe +
 * commerces géolocalisés). Elles remplacent les catégories « du quotidien »
 * de Caen ; les autres (culture, nature, plages, sorties…) sont reprises de
 * Caen. Les coups de cœur trop éloignés (Bibiche, Maison Geslain) ne sont pas
 * repris.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "La Buona Tavola", desc: "Cuisine italienne, juste à côté du logement.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "La Casinière", desc: "Restaurant, rue aux Namps.", coords: [49.1841772, -0.3666094] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
  ],
  bars: [
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, juste à côté du logement.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Maison Kayser", desc: "Boulangerie, juste en bas, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Poissonnerie Le Grand Bleu", desc: "Poissonnerie, rue Guillaume le Conquérant.", coords: [49.1823635, -0.3737343] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, juste en bas de chez vous : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Casino Shop (rue Saint-Pierre)", desc: "Supérette, rue Saint-Pierre.", coords: [49.1835703, -0.3620525] },
    { nom: "Carrefour Express", desc: "Supérette, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
  ],
  tram: [
    { nom: "Arrêt de tram « Château Quatrans »", desc: "L'arrêt de tram le plus proche (~5 min à pied).", coords: [49.18508, -0.36338] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Grande Pharmacie de Caen", desc: "Pharmacie, rue Saint-Pierre.", coords: [49.183458, -0.36294] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Tabac Saint-Sauveur", desc: "Tabac-presse, place Saint-Sauveur.", coords: [49.1835821, -0.3688844] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Écuyère", desc: "La laverie la plus proche, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Urban Wash", desc: "Laverie automatique, rue des Teinturiers.", coords: [49.1839747, -0.3631268] },
];

/**
 * Logement « Saint-Sauveur » — appartement au 1er étage (sans ascenseur) du
 * 51 rue Saint-Sauveur, avec terrasse privée donnant sur la place
 * Saint-Sauveur (au-dessus du café « L'Atelier » ; lien StyQR « latelier »).
 *
 * Annonces : Airbnb 749374221457940970 (« Appart avec terrasse · place
 * Saint-Sauveur · Caen », 4 voyageurs), Booking 15312019. Photos reprises de
 * l'annonce Airbnb (couverture = salon).
 *
 * Refait d'après le livret StyQR « Saint-Sauveur » (export du 2026-11-16, voir
 * le cerveau Josie : raw/documents/livrets-styqr/Saint-Sauveur.md) : salon
 * avec canapé convertible, espace repas et cuisine ouverte équipée, chambre
 * avec lit double, salle de bain avec douche à l'italienne, terrasse privée.
 * Arrivée 17h, départ 10h. Animaux acceptés (1 maximum, avec supplément).
 * Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Poubelles : StyQR situe les bacs « à côté de la terrasse du restaurant
 *     Le Médicis », une fois « rue Vauquelin », une fois « rue Vauquelin / rue
 *     Quincampoix ». Le livret reprend les deux noms de rue.
 *
 * Pour traduire un texte, voir data/i18n-styqr/saintsauveur.ts (clé = texte FR exact).
 */
export const saintsauveur: Logement = {
  id: "saintsauveur",
  nom: "Saint-Sauveur",
  adresse: "51 Rue Saint-Sauveur, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=51+Rue+Saint-Sauveur+14000+Caen",
  coords: [49.1830242, -0.3678617],
  cover: "/logements/saintsauveur/cover.jpg",

  motAccueil:
    "Bienvenue à Saint-Sauveur ! Votre appartement offre une vue imprenable sur la place Saint-Sauveur, l'une des plus belles de Caen, avec sa terrasse privée pour profiter de l'animation du quartier. Cafés, restaurants et commerces sont en bas de chez vous, et tout le centre historique se découvre à pied. Très bon séjour ! ☀️",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/CsiHaRx2g50",
    videoPortrait: true,
    checkinExpress: [
      "L'appartement se trouve au 1er étage (sans ascenseur) du 51 rue Saint-Sauveur, porte de gauche sur le palier",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      {
        texte:
          "Rendez-vous au 51 rue Saint-Sauveur. La boîte à clés se trouve à côté de la porte : c'est la boîte noire, en bas à droite.",
      },
      {
        texte:
          "Composez le code reçu par message, puis tournez le bouton pour ouvrir la boîte. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Ouvrez la porte de la rue avec l'une des clés. Suivez le couloir extérieur, puis allez à gauche jusqu'à une porte marron : ouvrez-la.",
      },
      {
        texte:
          "Montez les escaliers jusqu'au 1er étage : c'est la porte de gauche sur le palier. Ouvrez avec l'autre clé. Bienvenue chez vous ! 🙂",
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
        "Salon avec canapé convertible",
        "Espace repas et cuisine ouverte entièrement équipée",
        "Chambre indépendante avec lit double",
        "Salle de bain avec douche à l'italienne",
      ],
      etage: [],
      exterieur: ["Terrasse privée donnant sur la place Saint-Sauveur"],
    },
  },

  wifi: {
    reseau: "Livebox 8250",
    motDePasse: "Xt2YE4FabYWnKgZz3X",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🌇 Terrasse",
        contenu:
          "L'appartement possède une terrasse privée donnant sur la place Saint-Sauveur : idéale pour profiter de l'animation du quartier. Merci de rester discrets le soir, par égard pour les voisins.",
        photos: ["/logements/saintsauveur/terrasse.jpg"],
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
        contenu:
          "Pour déplier le canapé-lit, il suffit de le tirer vers vous : il se déplie tout seul. La couette et les oreillers se trouvent dans le placard de l'entrée.",
        photos: ["/logements/saintsauveur/canape-lit.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/saintsauveur/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off de la télécommande pour allumer la télévision.\n2. Appuyez sur SOURCE, sélectionnez HDMI 1 ou HDMI 2 avec les flèches, puis validez avec OK.\n3. Utilisez cette même télécommande pour changer de chaîne et régler le volume.",
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
    electromenager: ["Plaque de cuisson", "Micro-ondes", "Réfrigérateur", "Machine Nespresso", "TV"],
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
      "Les poubelles sont à déposer dans les bacs dehors, juste à côté de la terrasse du restaurant Le Médicis (rue Vauquelin / rue Quincampoix). Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 28 rue Saint-Sauveur",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Lit double",
    "Canapé-lit",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Douche à l'italienne",
    "Terrasse privée",
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
      "Laisser les draps sur les lits et les serviettes utilisées dans la salle de bain : l'équipe de ménage s'en occupe",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Place Saint-Sauveur — cafés & marché du vendredi (en bas de chez vous)",
      "Rue Écuyère — bars & restaurants (~2 min)",
      "Rue Saint-Pierre — shopping (~4 min)",
      "Abbaye aux Hommes & hôtel de ville (~5 min)",
      "Château de Caen (~7 min)",
    ],
    note: "Vous êtes sur la place Saint-Sauveur, l'une des plus belles places du centre historique de Caen, entourée de cafés et de restaurants. Le vendredi matin, le marché s'installe juste en bas. La rue Écuyère, l'Abbaye aux Hommes et le château se rejoignent à pied en quelques minutes.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Prenez un café en terrasse sur la place, puis flânez rue Écuyère et montez sur les remparts du château pour la vue sur la ville. Le vendredi matin, ne manquez pas le marché, juste en bas. Pour un verre, Nonna, le coup de cœur d'Agathe, est juste à côté. Côté table : Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon et A Contre Sens.",
  },

  numerosUtiles: caen.numerosUtiles,
};
