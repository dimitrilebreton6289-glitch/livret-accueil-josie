import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/** Reprend un lieu déjà décrit dans le livret de Caen (même texte, déjà traduit). */
const pick = (key: string, nom: string): Lieu[] =>
  caen.autourDeMoi.categories.find((c) => c.key === key)?.lieux.filter((l) => l.nom === nom) ?? [];

/**
 * Adresses proches du 102 rue de Geôle (au pied du château, côté université),
 * reprises du livret StyQR « Geôle » (coups de cœur d'Agathe + commerces
 * géolocalisés). Elles remplacent les catégories « du quotidien » de Caen ;
 * les autres (culture, nature, plages, sorties…) sont reprises de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    ...pick("restaurants", "Ju'ste Chez Moi"),
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "La Casinière", desc: "Restaurant, rue aux Namps.", coords: [49.1841772, -0.3666094] },
    { nom: "Mian Mian", desc: "Cuisine asiatique.", coords: [49.1843097, -0.3620192] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "Boumbap", desc: "Cuisine coréenne, passage du Grand Turc.", coords: [49.1828613, -0.3627187] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Les Burgers de Colette (rue Écuyère)", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Keys & Co", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
    { nom: "Arbuste", desc: "Café, rue Montoir-Poissonnerie.", coords: [49.184466, -0.3604197] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
  ],
  bars: [
    { nom: "Le Tripot", desc: "Bar juste en bas du logement.", coords: [49.1867546, -0.365889] },
    { nom: "L'Antre Potes", desc: "Bar convivial.", coords: [49.1872949, -0.3661049] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
  ],
  bouche: [
    { nom: "La Fabrique de Famie", desc: "La boulangerie la plus proche (~2 min à pied).", coords: [49.1879279, -0.3667258] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
  ],
  courses: [
    { nom: "Viveco", desc: "La supérette la plus proche, à deux pas du logement.", coords: [49.1875496, -0.366119] },
    { nom: "Casino Shop", desc: "Supérette, côté Saint-Pierre.", coords: [49.1835703, -0.3620525] },
    ...pick("courses", "Monoprix"),
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    {
      nom: "Arrêt de tram « Place de la Mare »",
      desc: "L'arrêt de tram (et de bus) le plus proche, juste en bas du logement : rejoignez le centre, la gare et les campus.",
      coords: [49.187065, -0.366141],
    },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Grande Pharmacie de Caen", desc: "Pharmacie de centre-ville, proche de l'église Saint-Pierre. Pharmacie de garde : composez le 3237.", coords: [49.183458, -0.36294] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Tabac du Château", desc: "Bar-tabac, près du château.", coords: [49.1849215, -0.3636204] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Urban Wash", desc: "Laverie automatique, près du château.", coords: [49.1839747, -0.3631268] },
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
];

/**
 * Logement « Geôle » — studio au 2e étage du 102 rue de Geôle, en plein
 * centre historique, au pied du château et de l'université. Parking privé
 * (places non attribuées) dans la résidence.
 *
 * Annonces : Airbnb 1114295381760811527 (« Geole »), Booking 15395159.
 * Photos reprises de l'annonce Airbnb (couverture = pièce de vie).
 *
 * Refait d'après le livret StyQR « Geôle » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Geole.md) : pièce de vie avec
 * canapé-lit double et TV, cuisine équipée, salle de bain avec WC.
 * Arrivée 17h, départ 10h. Animaux acceptés (1 maximum, avec supplément).
 * Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Pas de code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message le jour J).
 *
 * ⚠️ Vidéo hébergée chez StyQR (chemin jusqu'aux poubelles) : à mettre sur
 * YouTube (le lien StyQR cessera de marcher à la fin de l'abonnement).
 *
 * ⚠️ À vérifier par Agathe :
 *   - Chauffage : StyQR dit « molette blanche sur le côté de l'appareil » dans
 *     les infos pratiques, mais « écran de commande dans l'entrée » au départ
 *     (texte copié du livret Château). On a retenu la molette.
 *
 * Pour traduire un texte, voir data/i18n-styqr/geole.ts (clé = texte FR exact).
 */
export const geole: Logement = {
  id: "geole",
  nom: "Geôle",
  adresse: "102 Rue de Geôle, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=102+Rue+de+Geole+14000+Caen",
  coords: [49.1867823, -0.3659669],
  cover: "/logements/geole/cover.jpg",

  motAccueil:
    "Bienvenue à Geôle ! Votre studio se trouve en plein centre historique de Caen, au pied du château et de l'université. Le tram s'arrête juste en bas, et restaurants, boutiques et monuments se découvrent à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=yxQWt8TLUJY",
    checkinExpress: [
      "Le studio se trouve au 2e étage du 102 rue de Geôle : c'est la porte verte à gauche",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder au studio",
    ],
    etapes: [
      { texte: "Rendez-vous au 102 rue de Geôle, à Caen." },
      {
        texte:
          "Garez-vous sur l'une des places de la résidence montrées dans la vidéo (les places ne sont pas attribuées). Si aucune n'est libre, cherchez une place dans les rues voisines.",
      },
      { texte: "Dirigez-vous vers la porte blanche : la boîte à clés s'y trouve." },
      {
        texte:
          "Composez le code de la boîte à clés reçu par message, puis baissez le loquet noir pour l'ouvrir. Récupérez la clé, refermez la boîte et brouillez le code.",
      },
      { texte: "Passez la porte blanche (elle ne nécessite pas de clé) et montez au 2e étage : votre porte est la porte verte à gauche." },
      { texte: "Ouvrez la porte avec la clé. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Un parking privé et sécurisé se trouve dans la résidence. Les places ne sont pas attribuées : vous pouvez vous garer s'il y a de la place à votre arrivée.\nSi besoin, stationnement payant en journée (9h-12h30 et 14h-19h) fossés Saint-Julien, rue Chanoine Xavier de Saint-Paul, rue Gemare et parking de la place de la Mare (en face du tram).\nParkings souterrains payants : Mairie, Château et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie chaleureuse avec coin nuit : canapé-lit double (2 personnes) et TV",
        "Cuisine équipée : plaques de cuisson, micro-ondes, réfrigérateur, cafetière, bouilloire et grille-pain",
        "Salle de bain avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Bbox-Geole Chateau",
    motDePasse: "BienvenueNormandie14",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🔒 Fermer la porte à clé",
        contenu: "Pour verrouiller la porte, levez d'abord la poignée à la verticale, puis tournez la clé.",
      },
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
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://www.youtube.com/watch?v=yB5Dmc_Acvk",
        photos: ["/logements/geole/canape-lit.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une cafetière classique, avec du café moulu.",
        photos: ["/logements/geole/cuisine.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off de la télécommande pour allumer le téléviseur.\n2. Utilisez cette même télécommande pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour régler les radiateurs, tournez la grosse molette blanche située sur le côté de l'appareil. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur se trouve dans le placard.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Micro-ondes", "Réfrigérateur", "Cafetière", "Bouilloire", "Grille-pain", "TV"],
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
      "Les poubelles se trouvent dans la cour, à l'extérieur de l'immeuble, à côté du portail d'entrée. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 8 place de la Mare",
    poubellesVideo:
      "/logements/geole/videos/poubelles.mp4",
    poubellesVideoPortrait: true,
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Canapé-lit",
    "Cuisine équipée",
    "Micro-ondes",
    "Cafetière",
    "Salle de bain",
    "Parking privé (places non attribuées)",
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
      "Laisser les draps sur le canapé-lit (l'équipe de ménage s'en charge) et les serviettes utilisées dans la salle de bain",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer la porte à clé (en levant la poignée), puis remettre la clé dans la boîte à clés près de la porte blanche",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Arrêt de tram « Place de la Mare » (~1 min)",
      "Château de Caen (~3 min)",
      "Université de Caen (~5 min)",
      "Église Saint-Pierre & office de tourisme (~6 min)",
      "Jardin des Plantes (~7 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~8 min)",
    ],
    note: "Vous êtes en plein centre historique, au pied du château et à deux pas de l'université. Le quartier est vivant, avec bars et restaurants tout autour, et la rue Saint-Pierre comme la place Saint-Sauveur se rejoignent à pied.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Commencez par une balade sur les remparts du château, juste à côté. Côté table, les adresses préférées d'Agathe : Le Mug, Bœuf & Cow, Les Burgers de Colette, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna ou Âmbar, et pour le pain, Tartines et Gourmandises.",
  },

  numerosUtiles: caen.numerosUtiles,
};
