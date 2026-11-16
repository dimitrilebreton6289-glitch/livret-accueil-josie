import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 17 rue Écuyère (rue piétonne entre la place
 * Saint-Sauveur et la place Malherbe), reprises du livret StyQR « Rue Ec »
 * (coups de cœur d'Agathe + commerces géolocalisés). Les distances affichées
 * par StyQR pour ce livret étaient fausses : elles sont recalculées depuis les
 * coordonnées du logement. Ces adresses remplacent les catégories « du
 * quotidien » de Caen ; les autres (culture, nature, plages, sorties…) sont
 * reprises de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Joufflu 1er", desc: "Restaurant, place de l'Ancienne Boucherie.", coords: [49.1826033, -0.3739158] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, juste à côté, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
  ],
  bars: [
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Le Vertigo", desc: "Bar à bières incontournable de Caen, rue Écuyère : très large choix de bières.", coords: [49.1822, -0.3635] },
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
    { nom: "Casino Shop", desc: "La supérette la plus proche, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Night Market", desc: "Épicerie de dépannage ouverte tard.", coords: [49.18134, -0.36719] },
    { nom: "Carrefour Express", desc: "Supérette, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de bus « Hôtel de Ville »", desc: "L'arrêt de bus le plus proche, devant l'Abbaye aux Hommes.", coords: [49.1811824, -0.3727734] },
    { nom: "Arrêt de tram « Château Quatrans »", desc: "L'arrêt de tram le plus proche (~7 min à pied).", coords: [49.18524, -0.36384] },
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
  { nom: "Lavomatique Écuyère", desc: "La laverie la plus proche, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Urban Wash", desc: "Laverie automatique, rue des Teinturiers.", coords: [49.1839747, -0.3631268] },
];

/**
 * Logement « Rue Ec' » — triplex au 3e étage sans ascenseur du 17 rue
 * Écuyère, en plein centre piéton.
 *
 * Annonces : Airbnb 1326091004455994431 (« Rue Ec' », annonce masquée : la
 * page renvoie une erreur 404, aucune photo récupérable), Booking 15359614.
 *
 * ⚠️ Photo de couverture à fournir : en attendant, photo générique du château
 * de Caen (/logements/caen/cover.jpg). Les photos de la TV, du radiateur et de
 * la plaque viennent du livret StyQR.
 *
 * Refait d'après le livret StyQR « Rue Ec » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Rue-Ec.md) : salon, cuisine et
 * espace repas au 1er niveau ; salle de bain, dressing, WC et première chambre
 * au 2e niveau ; deuxième chambre sous les combles. Lave-linge et
 * lave-vaisselle. Lit parapluie et chaise haute. Arrivée 17h, départ 11h
 * (et non 10h comme les autres logements). Animaux NON acceptés. Non-fumeur,
 * pas de fêtes.
 *
 * ⚠️ PARTICULARITÉ : la boîte à clés n'est PAS au 17 rue Écuyère mais rue aux
 * Fromages, accrochée à une gouttière à gauche du bar « La Trappe Café ».
 * Aucun code en clair dans le livret StyQR (le code est envoyé par message).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Capacité : non précisée dans StyQR (deux chambres) ; fixée à 4.
 *   - Départ tardif : départ normal à 11h, mais les liens Stripe sont les
 *     mêmes que pour les autres logements (12h, 13h, 14h) : à confirmer.
 *   - Niveaux : StyQR parle de « rez-de-chaussée », « premier » et
 *     « troisième étage » à l'intérieur du triplex. Le livret dit niveau 1, 2, 3.
 *
 * Pour traduire un texte, voir data/i18n-styqr/ruec.ts (clé = texte FR exact).
 */
export const ruec: Logement = {
  id: "ruec",
  nom: "Rue Ec'",
  adresse: "17 Rue Écuyère, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=17+Rue+%C3%89cuy%C3%A8re+14000+Caen",
  coords: [49.1818284, -0.3682916],
  cover: "/logements/caen/cover.jpg",

  motAccueil:
    "Bienvenue à Caen ! Votre triplex vous attend rue Écuyère, la rue piétonne et animée du centre historique, avec ses bars et ses restaurants. La place Saint-Sauveur, l'Abbaye aux Hommes et le château se rejoignent à pied en quelques minutes. Très beau séjour ! 🌸",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/QEyXvGqfUo4",
    videoPortrait: true,
    checkinExpress: [
      "⚠️ Deux étapes : la boîte à clés se trouve rue aux Fromages, à côté du bar La Trappe Café, à quelques mètres du logement",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "L'appartement est au 3e étage sans ascenseur du 17 rue Écuyère, porte de gauche",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      {
        texte:
          "Rendez-vous d'abord rue aux Fromages, à côté du bar La Trappe Café : la boîte à clés est accrochée à une gouttière, à gauche du bar.",
      },
      {
        texte:
          "Ouvrez le clapet noir, composez le code reçu par message, puis appuyez en même temps sur les boutons latéraux pour ouvrir la boîte. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      { texte: "Revenez sur vos pas jusqu'au 17 rue Écuyère. Passez le badge et poussez la porte." },
      {
        texte:
          "Montez les escaliers jusqu'au 3e étage : c'est la porte de gauche. Ouvrez avec les deux clés. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Guillaume le Conquérant, fossés Saint-Julien, rue Saint-Laurent, rue Demolombe et parking de la Gloriette.\nParking de l'Hippodrome : 2 heures gratuites. Attention, il peut être fermé ponctuellement (risque d'inondation ou courses hippiques) : vérifiez les panneaux à l'entrée.\nParkings souterrains payants : Mairie et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      // Triplex à partir du 3e étage : tout est dans `rdc` (affiché « Le
      // logement ») pour éviter un faux « Rez-de-chaussée ».
      rdc: [
        "Appartement au 3e étage sans ascenseur, réparti sur trois niveaux",
        "Niveau 1 : salon, cuisine équipée et espace repas",
        "Niveau 2 : salle de bain, WC, dressing et première chambre",
        "Niveau 3, sous les combles : deuxième chambre",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Freebox-A0A314",
    motDePasse: "derecte5%-conflat-coronemur3%-ornandus95",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎶 Une rue animée",
        contenu:
          "La rue Écuyère est piétonne et festive ; les bars ferment à 1h du matin. L'appartement est bien isolé, mais les personnes très sensibles au bruit peuvent ressentir une légère gêne.",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, gel douche, shampooing, sel et poivre, quelques capsules de café et du thé, du produit vaisselle, une éponge, ainsi qu'une pastille pour le lave-vaisselle et une pour le lave-linge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour les deux lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🧺 Lave-linge & lave-vaisselle",
        contenu: "Un lave-linge et un lave-vaisselle sont à votre disposition dans la cuisine.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/ruec/plaque.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur.\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur. Avec les flèches, sélectionnez « FreeTV », puis validez avec OK.\n3. Utilisez ensuite cette télécommande pour changer de chaîne et régler le volume.",
        photos: ["/logements/ruec/tv1.jpg", "/logements/ruec/tv2.jpg", "/logements/ruec/tv3.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs verticaux, appuyez sur leur côté droit : un écran apparaît. Réglez ensuite la température avec les flèches. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/ruec/chauffage.jpg"],
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans le placard sous les escaliers.",
      },
      {
        titre: "👶 Équipement bébé",
        contenu:
          "Un lit parapluie et une chaise haute sont à votre disposition dans l'appartement. Le matelas et les draps ne sont pas fournis.",
      },
      {
        titre: "🪴 Plantes",
        contenu: "Merci de ne pas toucher ni arroser les plantes vertes.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaque de cuisson",
      "Réfrigérateur",
      "Lave-vaisselle",
      "Lave-linge",
      "Machine Nespresso",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles se trouvent dans les parties communes, au rez-de-chaussée de l'immeuble. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 42 place Saint-Étienne-le-Vieux",
    animaux: "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "TV (box Free)",
    "2 chambres",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Réfrigérateur",
    "Lave-vaisselle",
    "Lave-linge",
    "Machine Nespresso",
    "Salle de bain",
    "Dressing",
    "Chauffage",
    "Linge de lit & serviettes",
    "Lit parapluie",
    "Chaise haute",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 11h",
    instructions: [
      "Faire la vaisselle (ou lancer le lave-vaisselle), la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres et les velux, éteindre les lumières et baisser les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés de la rue aux Fromages",
    ],
    departTardif: {
      texte:
        "Le départ est prévu au plus tard à 11h. Si vous souhaitez prolonger votre séjour avec un départ tardif, merci d'en faire la demande en amont. Cette option entraîne un supplément, à régler directement via le lien correspondant ci-dessous. Merci de me communiquer votre heure de départ une fois le paiement effectué.",
      options: [
        { heure: "12h", url: "https://buy.stripe.com/fZebKA7IW4Oc7egeUU" },
        { heure: "13h", url: "https://buy.stripe.com/28E9AU4Ew57rfpxgcZ7ss0b" },
        { heure: "14h", url: "https://buy.stripe.com/dRmeVe8UMgQ95OX4uh7ss0c" },
      ],
    },
  },

  quartier: {
    aPied: [
      "Rue Écuyère — bars & restaurants (en bas de chez vous)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~2 min)",
      "Abbaye aux Hommes & hôtel de ville (~5 min)",
      "Rue Saint-Pierre — shopping (~5 min)",
      "Château de Caen (~9 min)",
    ],
    note: "Vous êtes en plein centre historique, dans la rue piétonne la plus animée de Caen. La place Saint-Sauveur, l'Abbaye aux Hommes et le château se rejoignent à pied en quelques minutes.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, à deux pas. Pour un burger, Les Burgers de Colette sont juste à côté. Les autres adresses préférées d'Agathe : Le Mug, Bœuf & Cow, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
