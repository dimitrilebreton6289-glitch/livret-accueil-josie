import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/** Reprend un lieu déjà décrit dans le livret de Caen (même texte, déjà traduit). */
const pick = (key: string, nom: string): Lieu[] =>
  caen.autourDeMoi.categories.find((c) => c.key === key)?.lieux.filter((l) => l.nom === nom) ?? [];

/**
 * Adresses proches du 72 rue du Vaugueux (quartier du Vaugueux, au pied du
 * château), reprises du livret StyQR « Château » (coups de cœur d'Agathe +
 * commerces géolocalisés) et, pour quelques-unes, du livret de Caen (même
 * quartier). Elles remplacent les catégories « du quotidien » de Caen ; les
 * autres (culture, nature, plages, sorties, tabac…) sont reprises de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    ...pick("restaurants", "Le Bouchon du Vaugueux"),
    ...pick("restaurants", "La Trattoria"),
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "La Grande Bouteille", desc: "Restaurant tout proche.", coords: [49.1846082, -0.3575041] },
    { nom: "Mian Mian", desc: "Cuisine asiatique.", coords: [49.1843097, -0.3620192] },
    { nom: "Boumbap", desc: "Cuisine coréenne, passage du Grand Turc.", coords: [49.1828613, -0.3627187] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Les Burgers de Colette (rue Écuyère)", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Keys & Co", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
    { nom: "Arbuste", desc: "Café, rue Montoir-Poissonnerie.", coords: [49.184466, -0.3604197] },
    { nom: "Céramilatte", desc: "Café céramique, rue de l'Engannerie.", coords: [49.1817209, -0.358129] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
  ],
  bars: [
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Fada", desc: "Bar sur le port, quai Vendeuvre.", coords: [49.1833493, -0.3568259] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
  ],
  bouche: [
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Alban Guilmet", desc: "Boulangerie-pâtisserie réputée.", coords: [49.1831558, -0.3608185] },
    { nom: "Boucherie Sabot", desc: "Boucherie, boulevard des Alliés.", coords: [49.1844252, -0.3593992] },
    ...pick("bouche", "Boucherie Marcel"),
    { nom: "Yver Chocolatier", desc: "Chocolatier, boulevard Maréchal Leclerc.", coords: [49.181918, -0.361601] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
  ],
  courses: [
    { nom: "Coccinelle Express", desc: "La supérette la plus proche, rue Basse.", coords: [49.184705, -0.358662] },
    { nom: "Casino Shop", desc: "Supérette, côté Saint-Pierre.", coords: [49.1835703, -0.3620525] },
    { nom: "Cocci Market", desc: "Supérette, rue Saint-Jean.", coords: [49.1814724, -0.358567] },
    ...pick("courses", "Monoprix"),
  ],
  tram: [
    { nom: "Arrêt de bus « Vaugueux »", desc: "L'arrêt de bus le plus proche (~2 min à pied).", coords: [49.18576, -0.359481] },
    { nom: "Arrêt de tram « Saint-Pierre »", desc: "L'arrêt de tram le plus proche (~5 min à pied), devant l'église Saint-Pierre.", coords: [49.1840696, -0.3606901] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    ...pick("sante", "Pharmacie du Vaugueux"),
    { nom: "Grande Pharmacie de Caen", desc: "Pharmacie de centre-ville, proche de l'église Saint-Pierre. Pharmacie de garde : composez le 3237.", coords: [49.183458, -0.36294] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Urban Wash", desc: "Laverie automatique, près du château.", coords: [49.1839747, -0.3631268] },
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
];

/**
 * Logement « Château » — appartement au 3e étage (avec ascenseur) d'une
 * résidence du 72 rue du Vaugueux, avec balcon-terrasse face au château de
 * Caen et place de parking privée (n° 24).
 *
 * Annonces : Booking 15869581. Pas d'annonce Airbnb identifiée avec certitude.
 *
 * Refait d'après le livret StyQR « Château » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Chateau.md) : grand séjour avec
 * coin repas, cuisine équipée (four, lave-vaisselle, Tassimo), deux chambres,
 * salle de douche, WC séparés avec lave-linge, balcon-terrasse avec vue sur le
 * château, local à vélos. Arrivée 17h, départ 10h. Animaux acceptés (1 maximum,
 * avec supplément). Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le code de l'interphone de la résidence figurait en clair dans le livret
 * StyQR. Il n'est PAS repris ici : il est envoyé par message avec celui de la
 * boîte à clés.
 *
 * Couverture reprise de l'annonce Booking le 16/11/2026 (ancienne note : photo de couverture à fournir) : en attendant, photo générique du château
 * de Caen (/logements/caen/cover.jpg), faute d'annonce Airbnb pour ce logement.
 *
 * ⚠️ Vidéos hébergées chez StyQR (local vélo, départ, poubelles) : à mettre
 * sur YouTube (les liens StyQR cesseront de marcher à la fin de l'abonnement).
 *
 * ⚠️ À vérifier par Agathe :
 *   - Couchages : la présentation StyQR parle de « deux chambres avec lits
 *     doubles », mais la rubrique linge parle de « lit double + canapé
 *     convertible ». On a retenu deux chambres avec lit double (4 personnes).
 *   - Ouverture du parking : « badge » (rubrique Parking) ou « télécommande »
 *     (parcours d'arrivée) ? On a écrit « la télécommande du trousseau ».
 *
 * Pour traduire un texte, voir data/i18n-styqr/chateau.ts (clé = texte FR exact).
 */
export const chateau: Logement = {
  id: "chateau",
  nom: "Château",
  adresse: "72 Rue du Vaugueux, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=72+Rue+du+Vaugueux+14000+Caen",
  coords: [49.187145, -0.3601249],
  cover: "/logements/chateau/cover.jpg",

  motAccueil:
    "Bienvenue au Château ! Votre appartement se trouve dans le quartier du Vaugueux, au pied du château de Caen, que vous pourrez admirer depuis votre balcon. Ruelles pavées, restaurants et port de plaisance sont à quelques pas, et tout le centre historique se découvre à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=cGJRXTZxjUs",
    checkinExpress: [
      "L'appartement se trouve au 3e étage du 72 rue du Vaugueux (avec ascenseur) : en sortant de l'ascenseur, c'est la porte de gauche",
      "Le code de l'interphone et celui de la boîte à clés vous sont communiqués par message le jour de votre arrivée",
      "Une place de parking privée (n° 24) vous est réservée dans la résidence",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 72 rue du Vaugueux, à Caen." },
      {
        texte:
          "Garez-vous quelques instants en feux de détresse devant la porte du garage, à côté du salon de coiffure, le temps de récupérer les clés.",
      },
      { texte: "À l'interphone, appuyez sur A puis composez le code reçu par message, et poussez la porte." },
      {
        texte:
          "Traversez les parties communes jusqu'à la porte vitrée qui mène au parking : appuyez sur le bouton à gauche pour l'ouvrir.",
      },
      {
        texte:
          "Rendez-vous à la place n° 24 : la boîte à clés est fixée sur le poteau. Composez le code reçu par message pour l'ouvrir, puis récupérez le trousseau.",
      },
      {
        texte:
          "Ouvrez la porte du garage avec la télécommande (appuyez 2 secondes sur le bouton de gauche), entrez avec votre voiture et garez-vous sur la place n° 24.",
      },
      { texte: "Revenez dans les parties communes par la porte vitrée et prenez l'ascenseur jusqu'au 3e étage." },
      { texte: "En sortant de l'ascenseur, votre porte est à gauche. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Une place de stationnement privée et sécurisée vous est réservée dans la résidence (place n° 24). Ouvrez la porte du garage avec la télécommande du trousseau.\nSi besoin, stationnement payant en journée (9h-12h30 et 14h-19h) rue de la Pigacière, rue du Vaugueux, avenue de la Libération, rue de la Délivrande et rue Doyen Morière.\nParkings souterrains payants : Mairie, Château et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Grand séjour-salon avec coin repas",
        "Cuisine entièrement équipée (four, lave-vaisselle, machine Tassimo)",
        "Deux chambres indépendantes avec lit double et rangements",
        "Salle de douche",
        "WC séparés, avec lave-linge",
      ],
      etage: [],
      exterieur: [
        "Balcon-terrasse privé avec table, chaises et Fatboy, vue directe sur le château",
        "Place de parking privée n° 24 dans la résidence",
        "Local à vélos (prévoir un antivol)",
      ],
    },
  },

  wifi: {
    reseau: "Bbox-Chateau",
    motDePasse: "Bienvenue14normandie",
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
          "Les draps sont fournis pour les deux lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Tassimo (capsules). Quelques capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "♨️ Four",
        contenu:
          "1. Appuyez sur le bouton Power (à gauche de la molette centrale) pour allumer le four.\n2. Tournez la molette centrale pour choisir le mode de cuisson (icônes à gauche) ou régler la température.\n3. Appuyez sur le bouton Play (à droite de la molette centrale) pour lancer la cuisson.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur (sans image, vérifiez que la source est bien HDMI 1).\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur.\n3. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour régler les radiateurs, utilisez l'écran de commande situé à côté du placard de l'entrée. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🚲 Local à vélos",
        contenu:
          "Un local à vélos est à votre disposition à l'extérieur de l'immeuble : en sortant, partez sur la gauche, il se trouve juste à droite du local poubelles. Pensez à prévoir un antivol. La vidéo ci-dessous vous montre le chemin.",
        video:
          "/logements/chateau/videos/velo.mp4",
        videoPortrait: true,
      },
      {
        titre: "🔑 Départ : rendre les clés",
        contenu:
          "Le jour du départ, suivez cette vidéo pour sortir de la résidence et remettre les clés dans la boîte à clés de la place n° 24.",
        video: "/logements/chateau/videos/depart-cles.mp4",
        videoPortrait: true,
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans les WC.",
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
    electromenager: ["Plaque de cuisson", "Four", "Lave-vaisselle", "Lave-linge", "Réfrigérateur", "Machine Tassimo", "TV"],
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
      "Les poubelles se trouvent dans le « LOCAL POUBELLES », à l'extérieur, à côté de la porte d'entrée de l'immeuble. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 47 avenue de la Libération",
    poubellesVideo:
      "/logements/chateau/videos/poubelles.mp4",
    poubellesVideoPortrait: true,
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Ascenseur",
    "2 lits doubles",
    "Cuisine équipée",
    "Four",
    "Lave-vaisselle",
    "Lave-linge",
    "Machine Tassimo",
    "Balcon avec vue sur le château",
    "Place de parking privée",
    "Local à vélos",
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
      "Fermer les fenêtres, éteindre les lumières et baisser les radiateurs depuis l'écran de commande de l'entrée",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés de la place n° 24 (voir la vidéo dans les infos pratiques)",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Château de Caen (~5 min)",
      "Restaurants du Vaugueux",
      "Église Saint-Pierre & office de tourisme (~5 min)",
      "Abbaye aux Dames (~7 min)",
      "Port de plaisance & marché du dimanche",
      "Place Saint-Sauveur — cafés & marché du vendredi (~12 min)",
    ],
    note: "Vous êtes dans le Vaugueux, le quartier historique et gourmand de Caen, au pied du château. Ruelles pavées, restaurants et port de plaisance sont à quelques pas, et tout le centre-ville se fait à pied.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Profitez de la vue sur le château depuis votre balcon, puis flânez dans les ruelles pavées du Vaugueux, juste en bas de chez vous. Côté table, les adresses préférées d'Agathe : Bœuf & Cow, Le Mug, Le Bistrot Basque, A Contre Sens et Les Burgers de Colette. Pour un verre : Âmbar ou Nonna.",
  },

  numerosUtiles: caen.numerosUtiles,
};
