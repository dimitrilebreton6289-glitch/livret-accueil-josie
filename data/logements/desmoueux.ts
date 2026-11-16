import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 14 ter rue Desmoueux (place de la Mare, Jardin des
 * Plantes, place Saint-Martin), reprises du livret StyQR « Desmoueux »
 * (commerces géolocalisés). Elles remplacent les catégories « du quotidien »
 * de Caen ; les autres (culture, nature, plages, sorties…) sont reprises de
 * Caen. Les coups de cœur d'Agathe (non marqués dans ce livret StyQR) sont
 * repris des autres livrets du centre.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "La Casinière", desc: "Restaurant, rue aux Namps.", coords: [49.1841772, -0.3666094] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "Joufflu 1er", desc: "Restaurant, place de l'Ancienne Boucherie.", coords: [49.1826033, -0.3739158] },
    { nom: "Mian Mian", desc: "Restaurant, rue de Geôle.", coords: [49.1843097, -0.3620192] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
  ],
  bars: [
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Poissonnerie Le Grand Bleu", desc: "Poissonnerie, rue Guillaume le Conquérant.", coords: [49.1823635, -0.3737343] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Carrefour Express", desc: "Supérette, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de tram « Place de la Mare »", desc: "L'arrêt de tram le plus proche (~2 min à pied).", coords: [49.187628, -0.3672767] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
  ],
  tabac: [
    { nom: "Tabac Presse Pémagnie", desc: "Tabac-presse, rue Pémagnie.", coords: [49.1836016, -0.3688758] },
    { nom: "Broc' Café", desc: "Bar-tabac, rue Écuyère.", coords: [49.1820646, -0.3675769] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Urban Wash", desc: "Laverie automatique, rue des Teinturiers.", coords: [49.1839747, -0.3631268] },
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
];

/**
 * Logement « Desmoueux » (annonce Airbnb « Blue ») — appartement au 14 ter
 * rue Desmoueux, au fond d'une impasse de garages, porte n° 2 à l'étage. Près
 * de la place de la Mare (tram) et du Jardin des Plantes.
 *
 * Annonce : Airbnb 51185544 (« Blue », jusqu'à 4 voyageurs). Pas d'annonce
 * Booking connue. Photos reprises de l'annonce Airbnb (couverture = le séjour
 * avec la mezzanine ; cuisine).
 *
 * Refait d'après le livret StyQR « Desmoueux » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Desmoueux.md) : séjour-salon
 * avec table à manger, cuisine entièrement équipée, salle de bain privative
 * avec WC, fenêtres de toit (velux) qui ne s'ouvrent pas, avec store occultant
 * à télécommande. Arrivée 17h, départ 10h. Animaux acceptés (1 maximum, avec
 * supplément). Non-fumeur, pas de fêtes.
 *
 * « Autour de moi » : adresses du quotidien proches du logement (NEARBY) ; le
 * reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message le jour de l'arrivée).
 *
 * ⚠️ Vidéo hébergée chez StyQR : à mettre sur YouTube (mode d'emploi de la
 * TV, section « Télévision »).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Couchages : StyQR parle de « deux lits » sans les décrire. D'après
 *     l'annonce Airbnb (canapé-lit, 4 voyageurs) et ses photos (échelle vers
 *     une mezzanine), on indique un canapé-lit au séjour et un couchage en
 *     mezzanine. Capacité mise à 4.
 *   - Les coups de cœur d'Agathe ne sont pas marqués dans ce livret StyQR ;
 *     ils sont repris des autres livrets du centre.
 *
 * Pour traduire un texte, voir data/i18n-styqr/desmoueux.ts (clé = texte FR exact).
 */
export const desmoueux: Logement = {
  id: "desmoueux",
  nom: "Desmoueux",
  adresse: "14 ter Rue Desmoueux, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=14+ter+Rue+Desmoueux+14000+Caen",
  coords: [49.1867594, -0.3690472],
  cover: "/logements/desmoueux/cover.jpg",

  motAccueil:
    "Bienvenue rue Desmoueux ! Votre appartement se trouve dans un coin calme, entre la place de la Mare et le Jardin des Plantes, à quelques minutes à pied du centre historique de Caen. Le tram passe juste à côté. Très bon séjour ! 💙",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=ZGC0vSj9ikA",
    checkinExpress: [
      "Le logement se trouve au 14 ter rue Desmoueux, au fond d'une impasse de garages (porte n° 2, à l'étage)",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo et les étapes ci-dessous pour accéder au logement",
    ],
    etapes: [
      { texte: "Rendez-vous au 14 ter rue Desmoueux et entrez dans l'impasse de garages." },
      {
        texte:
          "Votre logement se trouve dans le renfoncement, devant des escaliers verts. La boîte à clés est celle de droite.",
      },
      {
        texte:
          "Composez le code reçu par message pour ouvrir la boîte. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      { texte: "Ouvrez la porte marron avec la première clé." },
      {
        texte:
          "Montez les escaliers et ouvrez la porte n° 2 avec l'autre clé (utilisez le verrou de la poignée). Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement gratuit rue Desmoueux, avenue de Bagatelle, rue du Docteur Leverrier, rue du XXe Siècle, rue du Docteur Rayer et rue de l'Académie.\nStationnement payant (9h-12h30 et 14h-19h) place de la Mare et fossés Saint-Julien.\nParking souterrain payant : Mairie. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Séjour-salon avec table à manger et canapé-lit",
        "Couchage en mezzanine, accessible par une échelle",
        "Cuisine entièrement équipée (plaque de cuisson, micro-ondes, réfrigérateur et machine Nespresso)",
        "Salle de bain privative avec WC",
        "Fenêtres de toit (velux) avec store occultant",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-2E40",
    motDePasse: "Qn7FuSoiy7c9ENdkgL",
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
        titre: "🪟 Fenêtres de toit (velux)",
        contenu:
          "Les fenêtres de toit (velux) ne s'ouvrent pas. Pour faire le noir dans la pièce, utilisez la télécommande accrochée au mur : elle ferme le store du velux.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/desmoueux/cuisine.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton Power (rouge, tout en haut de la télécommande blanche) pour allumer l'écran.\n2. Patientez quelques secondes jusqu'à l'apparition du menu d'accueil (ou allumez le décodeur avec sa propre télécommande, s'il y en a une deuxième).\n3. Avec les flèches, sélectionnez l'application « Molotov TV » et validez avec OK, ou allez sur la TV d'Orange pour regarder les chaînes.\n4. Utilisez ensuite la même télécommande pour choisir vos chaînes (ou celle du décodeur, uniquement pour changer de chaîne).\n💡 Avec le décodeur, appuyez sur SOURCE pour choisir la bonne entrée (HDMI 1 ou 2). Si cela ne fonctionne pas, débranchez puis rebranchez le décodeur.",
        video:
          "https://styqr-space.ams3.cdn.digitaloceanspaces.com/0ec85c6a-aecf-47bb-84de-a688fee4c3a3/copy_51A1BEE5-2B26-4FCC-BA3A-C1EF8B6264E0.MOV",
        videoPortrait: true,
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans le placard près de la salle de bain.",
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
      "TV (décodeur Orange)",
    ],
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
      "Les poubelles sont à déposer dans les bacs situés dehors, dans la cour. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 8 place de la Mare",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (décodeur Orange)",
    "Canapé-lit",
    "Lit en mezzanine",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Salle de bain",
    "Chauffage",
    "Stores occultants",
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
      "Place de la Mare — arrêt de tram (~2 min)",
      "Jardin des Plantes (~5 min)",
      "Place Saint-Martin & rue Écuyère — bars & restaurants (~6 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~8 min)",
      "Château de Caen (~8 min)",
      "Abbaye aux Hommes & hôtel de ville (~10 min)",
    ],
    note: "Vous êtes dans un coin résidentiel calme, entre la place de la Mare et le Jardin des Plantes. Le centre historique, ses restaurants et ses commerces sont à quelques minutes à pied, et le tram, tout proche, vous emmène à la gare et partout en ville.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Pour une balade au calme, le Jardin des Plantes est à 5 minutes à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
