import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 127 boulevard Raymond Poincaré (quartier résidentiel au
 * sud-est de la gare, près du cinéma LUX), reprises du livret StyQR « Chez
 * Théo » (commerces géolocalisés + coups de cœur d'Agathe, en centre-ville).
 * Elles remplacent les catégories « du quotidien » de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Le Rethel", desc: "Restaurant tout proche.", coords: [49.1684194, -0.3348856] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Pigalle Brasserie", desc: "Brasserie, près de la gare.", coords: [49.1761728, -0.3531354] },
  ],
  restorapide: [
    { nom: "Keys & Co", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Les Burgers de Colette (rue Écuyère)", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
  ],
  bars: [
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
  ],
  cinema: [
    { nom: "Cinéma LUX", desc: "Cinéma d'art et essai, à ~3 min à pied du logement.", coords: [49.1696843, -0.3394071] },
    ...(caen.autourDeMoi.categories.find((c) => c.key === "cinema")?.lieux.filter((l) => l.nom !== "Cinéma LUX") ?? []),
  ],
  bouche: [
    { nom: "Carrément Gourmand", desc: "La boulangerie la plus proche (~4 min à pied).", coords: [49.1698647, -0.3410275] },
    { nom: "Bon'blé", desc: "Boulangerie, rue de Falaise.", coords: [49.168771, -0.35248] },
    { nom: "Mademoiselle Hel", desc: "Chocolatier, rue Saint-Michel.", coords: [49.1752616, -0.3550424] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Intermarché", desc: "Supermarché, avenue Capitaine Georges Guynemer (~7 min à pied).", coords: [49.169358, -0.345426] },
    { nom: "Carrefour Express", desc: "Supérette, place de la Liberté.", coords: [49.160709, -0.343664] },
    { nom: "Coccinelle Express", desc: "Supérette, rue de Falaise.", coords: [49.1685309, -0.3519471] },
  ],
  tram: [
    { nom: "Arrêt de bus « Poincaré »", desc: "L'arrêt de bus le plus proche (~6 min à pied).", coords: [49.165367, -0.342732] },
    {
      nom: "Arrêt de tram « Lux - Victor Lépine »",
      desc: "L'arrêt de tram le plus proche (~6 min à pied) : rejoignez le centre-ville et la gare.",
      coords: [49.17107, -0.342014],
    },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie du Parc", desc: "La pharmacie la plus proche du logement (~7 min à pied). Pharmacie de garde : composez le 3237.", coords: [49.1693263, -0.3435031] },
    { nom: "Pharmacie de la Guérinière", desc: "Pharmacie, place de la Liberté.", coords: [49.1610337, -0.3419418] },
    { nom: "Polyclinique du Parc", desc: "Clinique, avenue Capitaine Georges Guynemer.", coords: [49.1679948, -0.3452583] },
  ],
  tabac: [
    { nom: "Le Guynemer", desc: "Bar-tabac, avenue Albert 1er.", coords: [49.1682839, -0.3466445] },
    { nom: "L'Agora", desc: "Bar-tabac, boulevard Leroy.", coords: [49.1710159, -0.3506962] },
  ],
};

/** Catégories absentes du livret de Caen, ajoutées ici. */
const LAVERIES: Lieu[] = [
  { nom: "Revolution Laundry", desc: "La laverie la plus proche, avenue Capitaine Georges Guynemer.", coords: [49.1693443, -0.3453235] },
  { nom: "Lavomatique Lyautey", desc: "Laverie automatique, boulevard Maréchal Lyautey.", coords: [49.1702028, -0.3534928] },
];
const STATIONS: Lieu[] = [
  { nom: "Station-service Intermarché", desc: "Station-service, avenue Capitaine Georges Guynemer.", coords: [49.169413, -0.345234] },
];

/** Le logement est loin du Vaugueux : on retire les lieux de Caen décrits comme « à côté du logement ». */
const prochesDuVaugueux = (l: Lieu) =>
  typeof l.desc === "string" && /du logement|juste à côté/.test(l.desc);

/**
 * Logement « Chez Théo » — appartement rénové au 3e et dernier étage (avec
 * ascenseur) de la résidence Le Paris, 127 boulevard Raymond Poincaré, avec
 * balcon à la vue dégagée et parking gratuit dans la résidence. Serrure
 * connectée Nuki (ouverture au smartphone).
 *
 * Annonces : Airbnb 997130021892284284 (« Chez Théo »), Booking 14419850.
 * Photos reprises de l'annonce Airbnb (couverture = séjour).
 *
 * Refait d'après le livret StyQR « Chez Théo » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Chez-Theo.md) : séjour avec
 * canapé-lit d'appoint, cuisine entièrement équipée, chambre avec lit double,
 * salle de bain avec douche, WC séparés. Arrivée 17h, départ 10h. Animaux NON
 * acceptés. Non-fumeur, pas de fêtes. Chauffage collectif.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le code du digicode de l'immeuble figurait en clair dans le livret StyQR.
 * Il n'est PAS repris ici : il est envoyé par message le jour de l'arrivée.
 *
 * ⚠️ À vérifier par Agathe :
 *   - Machine à café : StyQR dit « Nespresso », mais la photo de l'annonce
 *     Airbnb montre une machine à dosettes (Malongo). On a écrit « machine à
 *     dosettes ».
 *   - StyQR parle d'un « code de boîte à clés » alors que l'accès se fait par
 *     la serrure connectée Nuki : la boîte à clés n'est pas mentionnée ici.
 *   - Capacité : 4 personnes retenues (lit double + canapé-lit d'appoint).
 *   - Nom exact de l'arrêt de tram le plus proche (« Lux - Victor Lépine »).
 *
 * Pour traduire un texte, voir data/i18n-styqr/cheztheo.ts (clé = texte FR exact).
 */
export const cheztheo: Logement = {
  id: "cheztheo",
  nom: "Chez Théo",
  adresse: "127 Boulevard Raymond Poincaré, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=127+Boulevard+Raymond+Poincare+14000+Caen",
  coords: [49.1679784, -0.3380999],
  cover: "/logements/cheztheo/cover.jpg",

  motAccueil:
    "Bienvenue Chez Théo ! Votre appartement tout juste rénové se trouve au dernier étage d'une résidence calme, avec un balcon à la vue dégagée et un parking gratuit. Le cinéma LUX et les commerces sont à quelques minutes à pied, et le centre de Caen se rejoint facilement en tram. Très bon séjour ! 🌿",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=iiJ90tsEXEk",
    checkinExpress: [
      "L'appartement se trouve au 3e et dernier étage de la résidence Le Paris (avec ascenseur), au fond du couloir à droite",
      "Le code d'entrée du bâtiment vous est communiqué par message le jour de votre arrivée",
      "La porte s'ouvre avec votre smartphone (serrure connectée Nuki), grâce au lien reçu par message",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 127 boulevard Raymond Poincaré, résidence Le Paris." },
      {
        texte:
          "Garez-vous sur le parking de la résidence (les places ne sont pas réservées). S'il n'y a plus de place, garez-vous dans la rue.",
      },
      { texte: "À l'entrée du bâtiment, composez le code du digicode reçu par message, puis poussez la porte." },
      {
        texte:
          "Montez au 3e étage par l'ascenseur ou les escaliers. En sortant de l'ascenseur, allez à droite jusqu'au fond du couloir : c'est la porte de droite.",
      },
      {
        texte:
          "Ouvrez la porte avec votre smartphone (serrure connectée Nuki), grâce au lien reçu par message ou à l'application Nuki. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement gratuit sur le parking privé de la résidence : les places ne sont pas réservées, mais il est très facile d'en trouver une. Sinon, vous pouvez vous garer dans la rue.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Appartement rénové au 3e et dernier étage, avec ascenseur",
        "Séjour lumineux avec canapé-lit (couchage d'appoint)",
        "Cuisine entièrement équipée : four, micro-ondes, plaques de cuisson, hotte, réfrigérateur, machine à café, bouilloire et grille-pain",
        "Chambre indépendante avec lit double",
        "Salle de bain avec douche et WC séparés",
      ],
      etage: [],
      exterieur: [
        "Balcon avec vue dégagée",
        "Parking gratuit dans la résidence (places non réservées)",
      ],
    },
  },

  wifi: {
    reseau: "Bbox-6E1CA1C6",
    motDePasse: "3WCvZif6sRSC3yHaZD",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🔐 Serrure connectée",
        contenu:
          "La porte s'ouvre et se verrouille avec votre smartphone, grâce au lien reçu par message ou à l'application Nuki. Une fois à l'intérieur, vous pouvez verrouiller ou déverrouiller la porte avec le bouton central de la serrure. En sortant, verrouillez la porte avec votre smartphone.",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques dosettes de café et du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour les deux lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu:
          "Pour déplier le canapé-lit, retirez les dossiers et les assises : le lit se trouve dessous, il ne reste plus qu'à le déplier. C'est un couchage d'appoint, idéal pour un court séjour.",
        photos: ["/logements/cheztheo/canape-lit.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café fonctionne avec des dosettes. Quelques dosettes vous sont offertes à votre arrivée.",
        photos: ["/logements/cheztheo/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/cheztheo/cuisine.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Allumez d'abord le téléviseur avec sa télécommande.\n2. Allumez ensuite le décodeur avec sa propre télécommande.\n3. Si les chaînes ne s'affichent pas, appuyez sur SOURCE (télécommande du téléviseur) et choisissez HDMI 1 ou HDMI 2.\n4. Utilisez ensuite uniquement la télécommande du décodeur pour changer de chaîne.\nEn cas de souci, débranchez puis rebranchez le décodeur (derrière le téléviseur) : cela règle généralement le problème.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Le chauffage est collectif (géré par la copropriété) : vous pouvez seulement l'ajuster avec les molettes sur le côté des radiateurs. S'il ne fonctionne pas, c'est qu'il n'a pas encore été mis en route par la copropriété : il n'est alors pas possible de l'allumer. Merci de votre compréhension.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Four", "Micro-ondes", "Hotte", "Réfrigérateur", "Machine à café", "Bouilloire", "Grille-pain", "TV"],
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
      "Les poubelles se trouvent dans le local à la sortie de l'immeuble, sur votre droite. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 83 boulevard Raymond Poincaré",
    animaux: "Les animaux ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Ascenseur",
    "Lit double",
    "Canapé-lit",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Machine à café",
    "Balcon avec vue",
    "Parking privé gratuit",
    "Serrure connectée",
    "Salle de bain",
    "WC séparés",
    "Linge de lit & serviettes",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Laisser les draps sur les lits (l'équipe de ménage s'en charge) et les serviettes utilisées dans la salle de bain",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "En partant, verrouiller la porte avec votre smartphone (serrure connectée)",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Cinéma LUX (~3 min)",
      "Commerces de l'avenue Capitaine Georges Guynemer (~7 min)",
      "Gare SNCF de Caen (~15 min)",
      "Centre commercial Les Rives de l'Orne (~18 min)",
      "Centre historique & château (~15 min en tram)",
    ],
    note: "Vous êtes dans un quartier résidentiel calme, au sud-est de la gare, avec les commerces du quotidien à quelques minutes à pied. Le centre historique, le château et le port se rejoignent facilement en tram ou en bus.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key]
          ? { key: c.key, lieux: NEARBY[c.key] }
          : { key: c.key, lieux: c.lieux.filter((l) => !prochesDuVaugueux(l)) },
      ),
      { key: "laverie", lieux: LAVERIES },
      { key: "stations", lieux: STATIONS },
    ],
    coupDeCoeur:
      "Le cinéma LUX, à deux pas, propose une belle programmation d'art et essai. Pour sortir, le centre-ville est à quelques arrêts de tram : les adresses préférées d'Agathe sont Koboon, A Contre Sens, Le Bistrot Basque, Bœuf & Cow et Le Mug. Pour un verre : Âmbar ou Nonna.",
  },

  numerosUtiles: caen.numerosUtiles,
};
