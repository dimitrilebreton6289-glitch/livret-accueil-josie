import type { Logement, CategorySection, ReglementInterieur } from "../types";

/**
 * HOULGATE — 23 rue des Bains (14510 Houlgate) — 4 logements Josie.
 *
 * L'immeuble regroupe 4 biens (mêmes équipements partout) :
 *   • 2ᵉ étage : un studio (« Houlgate 2 ») + un T2 (« Houlgate 1 »)
 *   • 3ᵉ étage : un studio (« Houlgate 4 ») + un T2 (« Houlgate 3 »)
 *
 * Studios : pièce unique avec canapé-lit 140 × 190 (2 pers.), coin cuisine, et
 *   salle d'eau (douche + lavabo + WC) dans la même pièce.
 * T2 : une chambre (lit double 140 × 190) + un salon avec canapé-lit 140 × 190
 *   (jusqu'à 4 pers.).
 *
 * Accès : l'entrée de l'immeuble est libre (on rentre directement) ; une boîte à
 *   clés est fixée SUR LA PORTE de chaque appartement. Le code est communiqué par
 *   message (non affiché ici → pas de `codeBoite` renseigné).
 *
 * PAS DE WIFI pour le moment (voir champ `wifi` ci-dessous).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER PAR AGATHE (placeholders / infos manquantes) :
 *   - Photos de couverture réelles → remplacer les fichiers cover.jpg de chaque logement
 *   - Codes des boîtes à clés (si on veut les afficher : ajouter `codeBoite`)
 *   - Étapes d'arrivée illustrées (photos) — le texte générique est en place
 *   - Présence/absence d'ascenseur (2ᵉ / 3ᵉ étage)
 *   - Plaques de cuisson / hotte (non précisées ; retirées par prudence)
 *   - Détail du local & tri des poubelles (texte générique en place)
 *   - « Autour de moi » : OK — établissements réels de la rue des Bains vérifiés
 *     (annuaire ville-houlgate.fr, Michelin, PagesJaunes) et géolocalisés.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */

const VILLE = "Houlgate";
const ADRESSE = "23 Rue des Bains, 14510 Houlgate";
const ITINERAIRE = "https://maps.google.com/?q=23+Rue+des+Bains+14510+Houlgate";
// Coordonnées du 23 rue des Bains (géocodage OpenStreetMap / Nominatim).
const COORDS: [number, number] = [49.30391, -0.07543];

// ── Électroménager commun (uniquement ce qui a été confirmé) ─────────────────
const ELECTROMENAGER = [
  "Plaques de cuisson",
  "Four",
  "Micro-ondes",
  "Réfrigérateur",
  "Congélateur",
  "Machine à café Nespresso",
  "Bouilloire",
  "Grille-pain",
  "Lave-linge",
];

// ── Règlement intérieur (capacité renseignée par logement) ───────────────────
function reglement(capaciteMax: number, etage: string): ReglementInterieur {
  return {
    capaciteMax,
    nonFumeur: true,
    animauxAcceptes: true,
    evenementsAutorises: false,
    horairesCalme:
      "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
    texte: `Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites. L'appartement se situe au ${etage} (sans ascenseur). Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, dans le logement comme dans les parties communes (couloirs, escaliers).`,
  };
}

// ── Sections « à savoir » communes ───────────────────────────────────────────
function aSavoirSections(etage: string) {
  return [
    {
      titre: "🎁 Produits d'accueil",
      contenu:
        "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, du produit vaisselle et une éponge.",
    },
    {
      titre: "🛏️ Linge de maison",
      contenu:
        "Les draps sont fournis et les lits sont faits à votre arrivée. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.",
    },
    {
      titre: "📶 WiFi",
      contenu:
        "Le logement n'est pas encore équipé du WiFi. Prévoyez votre connexion mobile (4G/5G) pour vos usages internet. Merci de votre compréhension — l'installation est prévue.",
    },
    {
      titre: `🚶 ${etage} sans ascenseur`,
      contenu: `L'appartement se situe au ${etage} et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages.`,
    },
    {
      titre: "🛁 Salle d'eau",
      contenu:
        "La salle d'eau réunit douche, lavabo et WC. Merci de bien refermer le rideau / la paroi de douche pour éviter les éclaboussures.",
    },
    {
      titre: "🧺 Lave-linge",
      contenu:
        "Un lave-linge est à votre disposition. Utilisez une petite dose de lessive et lancez un programme court. Merci d'étendre le linge plutôt que de le laisser dans le tambour.",
    },
    {
      titre: "🍳 Cuisine",
      contenu:
        "Le coin cuisine est équipé : plaques de cuisson, four, micro-ondes, réfrigérateur avec congélateur, machine à café Nespresso (à capsules), bouilloire et grille-pain, ainsi que le nécessaire de cuisine (vaisselle, casseroles, couverts).",
    },
    {
      titre: "☕ Machine à café Nespresso",
      contenu:
        "La machine fonctionne avec des capsules Nespresso. Remplissez le réservoir d'eau, insérez une capsule, placez votre tasse et lancez. Quelques capsules vous sont offertes pour démarrer.",
    },
    {
      titre: "🔥 Chauffage",
      contenu:
        "Pour allumer les radiateurs, appuyez sur le bouton on/off et réglez la température. Merci de limiter votre consommation et de baisser le chauffage à votre départ.",
    },
    {
      titre: "🍽️ Vaisselle",
      contenu:
        "En cas de casse durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
    },
  ];
}

// ── Étapes d'arrivée communes (texte ; photos à ajouter plus tard) ───────────
function etapesArrivee(etage: string, nom: string) {
  return [
    {
      texte: `L'immeuble se trouve au 23 rue des Bains, à Houlgate. L'entrée de l'immeuble est libre : poussez la porte et entrez.`,
    },
    {
      texte: `Montez jusqu'au ${etage}, à la porte du logement « ${nom} ».`,
    },
    {
      texte:
        "Une boîte à clés est fixée sur la porte de l'appartement. Ouvrez-la avec le code que nous vous communiquons par message, puis prenez la clé.",
    },
    {
      texte: "Ouvrez la porte avec la clé. Bienvenue !",
    },
  ];
}

// ── Poubelles (conteneurs de rue devant le Square Claude Debussy) ────────────
const POUBELLES =
  "Les conteneurs à déchets se trouvent au bord de la rue, devant le Square Claude Debussy, à environ 2 minutes à pied du logement (voir la photo ci-dessous). Merci d'y déposer vos déchets ménagers, en sac fermé, pendant et à la fin de votre séjour.\n🍷 Le verre ne se met pas dans ces conteneurs : déposez-le dans la borne à verre située rue d'Axbridge, à environ 2 minutes à pied (vers le haut de la rue des Bains, côté mer).";
const POUBELLES_PHOTO = "/logements/houlgate-1/poubelles.jpg";

// ── Quartier (à pied) — commun ───────────────────────────────────────────────
const QUARTIER = {
  aPied: [
    "Plage de Houlgate & la digue-promenade (front de mer, ~2–3 min)",
    "Rue des Bains — commerces, cafés & restaurants (sur place)",
    "Casino de Houlgate (~3 min)",
    "Marché de Houlgate (centre, ~3–4 min)",
    "Église Saint-Aubin (~4 min)",
    "Office de tourisme (~4 min)",
  ],
  note: "Vous êtes à Houlgate, station balnéaire Belle Époque de la Côte Fleurie, à quelques pas de la plage. La rue des Bains descend droit vers la mer et concentre les commerces. Tout se fait à pied. Cabourg, Dives-sur-Mer et Deauville sont à quelques minutes en voiture.",
};

// ── Autour de moi — lieux réels de Houlgate ──────────────────────────────────
// Établissements vérifiés (annuaire officiel ville-houlgate.fr, guide Michelin,
// PagesJaunes) et géolocalisés à l'adresse exacte via OpenStreetMap / Nominatim.
// Presque tout est sur la rue des Bains, la rue commerçante qui descend à la mer,
// devant le logement. Distances recalculées par la carte depuis le 23 rue des Bains.
const AUTOUR_CATEGORIES: CategorySection[] = [
  {
    key: "plages",
    lieux: [
      {
        nom: "Plage de Houlgate",
        desc: "Grande plage de sable au pied de la digue-promenade, à quelques minutes à pied.",
        coords: [49.30549, -0.07726],
      },
      {
        nom: "Falaises des Vaches Noires",
        desc: "Falaises célèbres pour leurs fossiles, entre Houlgate et Villers-sur-Mer (accessibles à marée basse).",
        coords: [49.309, -0.058],
      },
    ],
  },
  {
    key: "loisirs",
    lieux: [
      {
        nom: "Digue-promenade",
        desc: "La promenade en bord de mer, idéale au coucher du soleil.",
        coords: [49.30521, -0.07648],
      },
      {
        nom: "Casino de Houlgate",
        desc: "Casino face à la mer, avec restaurant (Entre Terre et Mer).",
        coords: [49.30489, -0.07567],
      },
    ],
  },
  {
    key: "restaurants",
    lieux: [
      { nom: "Le Royalty", desc: "Brasserie-glacier en haut de la rue des Bains (n° 2).", coords: [49.30426, -0.07480] },
      { nom: "L'Authentic", desc: "Cuisine traditionnelle, 3 rue des Bains.", coords: [49.30412, -0.07491] },
      { nom: "Le Patio", desc: "Restaurant italien & pizzeria, 7 rue des Bains.", coords: [49.30408, -0.07502] },
      { nom: "Le Jardin du Plaza", desc: "Cuisine française, 23 rue des Bains (au pied de l'immeuble).", coords: [49.30385, -0.07545] },
      { nom: "La Maison du Coquillage", desc: "Fruits de mer et cuisine régionale, 37 rue des Bains.", coords: [49.30368, -0.07616] },
      { nom: "Les Passantes", desc: "Cuisine de saison et produits frais (cité au guide Michelin), 41 rue des Bains.", coords: [49.30360, -0.07630] },
      { nom: "Aux Bains Fleuris", desc: "Cuisine saine & bar à jus frais, 49 rue des Bains.", coords: [49.30356, -0.07655] },
    ],
  },
  {
    key: "bouche",
    lieux: [
      { nom: "La Maison Florent", desc: "Boulangerie-pâtisserie artisanale (spécialité : la falue), 55 rue des Bains.", coords: [49.30343, -0.07705] },
      { nom: "La Gourmandine", desc: "Glacier, crêpes, gaufres et beignets, 25 rue des Bains.", coords: [49.30384, -0.07553] },
    ],
  },
  {
    key: "courses",
    lieux: [
      { nom: "Carrefour City", desc: "La supérette la plus proche, 57 rue des Bains, pour le dépannage du quotidien.", coords: [49.30342, -0.07696] },
      { nom: "Marché couvert (La Halle)", desc: "Commerçants de bouche et producteurs locaux, au cœur du bourg. Les matins du jeudi au dimanche (tous les jours pendant les vacances scolaires).", coords: [49.30333, -0.07705] },
    ],
  },
  {
    key: "sante",
    lieux: [
      { nom: "Pharmacie des Bains", desc: "La pharmacie la plus proche, 42 rue des Bains (tél. 02 31 28 70 52). Pharmacie de garde : composez le 3237.", coords: [49.30344, -0.07722] },
    ],
  },
  {
    key: "culture",
    lieux: [
      {
        nom: "Cabourg",
        desc: "Station Belle Époque voisine, sa digue Marcel-Proust et le Grand Hôtel (~10 min en voiture).",
        coords: [49.2872, -0.1157],
      },
      {
        nom: "Dives-sur-Mer — Village Guillaume-le-Conquérant",
        desc: "Village d'artisans et halles médiévales (~8 min en voiture).",
        coords: [49.2831, -0.1012],
      },
      {
        nom: "Deauville",
        desc: "Planches, villas et boutiques (~20 min en voiture).",
        coords: [49.36, 0.075],
      },
    ],
  },
];

const COUP_DE_COEUR =
  "Descendez la rue des Bains jusqu'à la plage et flânez sur la digue-promenade au coucher du soleil. Faites un tour au marché couvert, offrez-vous des fruits de mer à La Maison du Coquillage, puis, à marée basse, partez à la découverte des Falaises des Vaches Noires et de leurs fossiles. Et prenez le temps d'une escapade jusqu'à Cabourg et sa digue Marcel-Proust, à quelques minutes.";

const CONTACT = { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" } as const;
const URGENCES = { samu: "15", police: "17", pompiers: "18", europeen: "112" } as const;

const WIFI = {
  reseau: "Pas de WiFi pour le moment",
  motDePasse: "Prévoyez votre connexion mobile (4G/5G)",
};

const MENAGE_EN_SEJOUR =
  "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.";

// Départ commun (mêmes options de départ tardif que les autres livrets Josie).
function depart() {
  return {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Fermer l'appartement à clé, puis remettre la clé dans la boîte à clés fixée sur la porte",
    ],
    departTardif: {
      texte:
        "Le départ est prévu au plus tard à 10h. Si vous souhaitez prolonger votre séjour avec un départ tardif, merci d'en faire la demande en amont. Cette option entraîne un supplément, à régler directement via le lien correspondant ci-dessous. Merci de me communiquer votre heure de départ une fois le paiement effectué.",
      options: [
        { heure: "12h", url: "https://buy.stripe.com/fZebKA7IW4Oc7egeUU" },
        { heure: "13h", url: "https://buy.stripe.com/28E9AU4Ew57rfpxgcZ7ss0b" },
        { heure: "14h", url: "https://buy.stripe.com/dRmeVe8UMgQ95OX4uh7ss0c" },
      ],
    },
  };
}

// Base commune à tous les logements (les champs propres à chaque bien sont
// fournis lors de la composition ci-dessous).
function base(opts: {
  id: string;
  nom: string;
  etage: string; // ex. "2ᵉ étage"
  cover: string;
  coverCredit?: string;
  capacite: number;
}): Omit<Logement, "motAccueil" | "arrivee" | "pratique" | "equipements"> & {
  motAccueil: string;
} {
  return {
    id: opts.id,
    nom: opts.nom,
    adresse: ADRESSE,
    ville: VILLE,
    itineraire: ITINERAIRE,
    coords: COORDS,
    cover: opts.cover,
    coverCredit: opts.coverCredit,
    motAccueil: `Bienvenue à Houlgate ! Vous êtes à deux pas de la plage, dans une charmante station balnéaire de la Côte Fleurie. La rue des Bains vous mène droit à la mer. Très bon séjour ! 🌊`,
    wifi: WIFI,
    menageEnSejour: MENAGE_EN_SEJOUR,
    depart: depart(),
    quartier: QUARTIER,
    autourDeMoi: { categories: AUTOUR_CATEGORIES, coupDeCoeur: COUP_DE_COEUR },
    numerosUtiles: {
      contact: { ...CONTACT },
      note: "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.",
      urgences: { ...URGENCES },
    },
  };
}

// Équipements par type (studio / T2).
function equipements(type: "studio" | "t2"): string[] {
  const commun = [
    "Cuisine équipée",
    "Plaques de cuisson",
    "Four",
    "Micro-ondes",
    "Réfrigérateur",
    "Congélateur",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Lave-linge",
    "Salle d'eau avec douche",
    "Sèche-cheveux",
    "Chauffage",
    "Eau chaude",
    "Linge de lit & serviettes",
  ];
  return type === "studio"
    ? ["Canapé-lit (140 × 190)", ...commun]
    : [
        "Chambre séparée (lit double 140 × 190)",
        "Canapé-lit d'appoint (140 × 190)",
        ...commun,
      ];
}

// Découverte des lieux par type.
function decouverteStudio(): { rdc: string[]; etage: string[]; exterieur: string[] } {
  return {
    rdc: [
      "Pièce à vivre avec canapé-lit (140 × 190)",
      "Coin cuisine équipé (plaques de cuisson, four, micro-ondes, réfrigérateur/congélateur, Nespresso, bouilloire, grille-pain)",
      "Salle d'eau : douche, lavabo et WC dans la même pièce",
      "Lave-linge",
    ],
    etage: [],
    exterieur: [],
  };
}

function decouverteT2(): { rdc: string[]; etage: string[]; exterieur: string[] } {
  return {
    rdc: [
      "Chambre avec lit double (140 × 190)",
      "Salon avec canapé-lit d'appoint (140 × 190)",
      "Cuisine équipée (plaques de cuisson, four, micro-ondes, réfrigérateur/congélateur, Nespresso, bouilloire, grille-pain)",
      "Salle d'eau avec douche, lavabo et WC",
      "Lave-linge",
    ],
    etage: [],
    exterieur: [],
  };
}

// Bloc « arrivée » commun.
function arrivee(etage: string, nom: string) {
  return {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Entrée de l'immeuble libre (on entre directement)",
      "Boîte à clés fixée sur la porte de l'appartement",
      "Code de la boîte communiqué par message",
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    etapes: etapesArrivee(etage, nom),
    parking:
      "Devant le logement, rue des Bains, vous trouverez des places en zone bleue (stationnement gratuit à durée limitée — pensez au disque).\nPour un stationnement gratuit et sans limite de durée, privilégiez les rues voisines : rue Henri Dobert, rue Émilie Deschanel ou rue du 11 Novembre 1918.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte:
      nom === "Houlgate 2" || nom === "Houlgate 4" ? decouverteStudio() : decouverteT2(),
  };
}

// Bloc « pratique » commun.
function pratique(capacite: number, etage: string) {
  return {
    aSavoir: [],
    aSavoirSections: aSavoirSections(etage),
    electromenager: ELECTROMENAGER,
    reglementInterieur: reglement(capacite, etage),
    poubelles: POUBELLES,
    poubellesPhoto: POUBELLES_PHOTO,
    animaux: "Les animaux de compagnie sont les bienvenus ! Merci simplement de veiller à leur propreté, d'éviter qu'ils ne montent sur les lits et canapés, et de ne pas les laisser seuls dans le logement.",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Les 4 logements
// ─────────────────────────────────────────────────────────────────────────────

/** Houlgate 1 — 2ᵉ étage — T2 (4 pers.). */
export const houlgate1: Logement = {
  // cover provisoire : photo Houlgate (Wikimedia Commons) → remplacer par la vraie photo du logement
  ...base({ id: "houlgate-1", nom: "Houlgate 1", etage: "2ᵉ étage", cover: "/logements/houlgate-1/cover.jpg", coverCredit: "Photo : la digue de Houlgate — Gregory Deryckère, CC BY 2.5 (Wikimedia Commons). Provisoire.", capacite: 4 }),
  arrivee: {
    // Guide d'arrivée illustré propre à Houlgate 1 (photos + vidéo de la boîte à clés).
    ...arrivee("2ᵉ étage", "Houlgate 1"),
    etapes: [
      {
        texte: "Rendez-vous au 23 rue des Bains, à Houlgate.",
        photo: "/logements/houlgate-1/arrivee/1.jpg",
      },
      {
        texte:
          "Poussez la porte bleue à côté du restaurant. Il n'y a ni clé ni badge pour cette porte : il suffit de la pousser pour entrer.",
        photo: "/logements/houlgate-1/arrivee/2.jpg",
      },
      {
        texte: "Dirigez-vous au fond du couloir, puis montez au 2ᵉ étage.",
      },
      {
        texte: "Au 2ᵉ étage, dirigez-vous vers la porte numéro 1.",
        photo: "/logements/houlgate-1/arrivee/3.jpg",
      },
      {
        texte:
          "Une boîte à clés se trouve à côté de cette porte. Composez le code reçu par message dans la conversation, puis ouvrez-la comme le montre la vidéo ci-dessous et prenez la clé.",
      },
      {
        texte: "Ouvrez la porte avec la clé.",
      },
      {
        texte: "Bienvenue et bon séjour ! 🌊",
      },
    ],
    video: "/logements/houlgate-1/arrivee/keybox.mp4",
    videoPortrait: true,
  },
  pratique: pratique(4, "2ᵉ étage"),
  equipements: equipements("t2"),
};

/** Houlgate 2 — 2ᵉ étage — studio (2 pers.). */
export const houlgate2: Logement = {
  // cover provisoire : photo Houlgate (Wikimedia Commons) → remplacer par la vraie photo du logement
  ...base({ id: "houlgate-2", nom: "Houlgate 2", etage: "2ᵉ étage", cover: "/logements/houlgate-2/cover.jpg", coverCredit: "Photo : Houlgate, plage à marée basse — Martpan, CC BY-SA 4.0 (Wikimedia Commons). Provisoire.", capacite: 2 }),
  arrivee: {
    // Même entrée d'immeuble et même boîte à clés que Houlgate 1 (photos 1/2 et
    // vidéo réutilisées) ; seule change la porte du logement (porte n° 2).
    ...arrivee("2ᵉ étage", "Houlgate 2"),
    etapes: [
      {
        texte: "Rendez-vous au 23 rue des Bains, à Houlgate.",
        photo: "/logements/houlgate-1/arrivee/1.jpg",
      },
      {
        texte:
          "Poussez la porte bleue à côté du restaurant. Il n'y a ni clé ni badge pour cette porte : il suffit de la pousser pour entrer.",
        photo: "/logements/houlgate-1/arrivee/2.jpg",
      },
      {
        texte: "Dirigez-vous au fond du couloir, puis montez au 2ᵉ étage.",
      },
      {
        texte: "Au 2ᵉ étage, dirigez-vous vers la porte numéro 2.",
        photo: "/logements/houlgate-2/arrivee/3.jpg",
      },
      {
        texte:
          "Une boîte à clés se trouve à côté de cette porte. Composez le code reçu par message dans la conversation, puis ouvrez-la comme le montre la vidéo ci-dessous et prenez la clé.",
      },
      {
        texte: "Ouvrez la porte avec la clé.",
      },
      {
        texte: "Bienvenue et bon séjour ! 🌊",
      },
    ],
    video: "/logements/houlgate-1/arrivee/keybox.mp4",
    videoPortrait: true,
  },
  pratique: pratique(2, "2ᵉ étage"),
  equipements: equipements("studio"),
};

/** Houlgate 3 — 3ᵉ étage — T2 (4 pers.). */
export const houlgate3: Logement = {
  // cover provisoire : photo Houlgate (Wikimedia Commons) → remplacer par la vraie photo du logement
  ...base({ id: "houlgate-3", nom: "Houlgate 3", etage: "3ᵉ étage", cover: "/logements/houlgate-3/cover.jpg", coverCredit: "Photo : villa Belle Époque, 1 boulevard des Belges, Houlgate — DimiTalen, CC0 (Wikimedia Commons). Provisoire.", capacite: 4 }),
  arrivee: {
    // Même entrée d'immeuble et même boîte à clés que Houlgate 1 (photos 1/2 et
    // vidéo réutilisées) ; on monte au 3ᵉ étage, porte n° 3.
    ...arrivee("3ᵉ étage", "Houlgate 3"),
    etapes: [
      {
        texte: "Rendez-vous au 23 rue des Bains, à Houlgate.",
        photo: "/logements/houlgate-1/arrivee/1.jpg",
      },
      {
        texte:
          "Poussez la porte bleue à côté du restaurant. Il n'y a ni clé ni badge pour cette porte : il suffit de la pousser pour entrer.",
        photo: "/logements/houlgate-1/arrivee/2.jpg",
      },
      {
        texte: "Dirigez-vous au fond du couloir, puis montez au 3ᵉ étage.",
      },
      {
        texte: "Au 3ᵉ étage, dirigez-vous vers la porte numéro 3.",
        photo: "/logements/houlgate-3/arrivee/3.jpg",
      },
      {
        texte:
          "Une boîte à clés se trouve à côté de cette porte. Composez le code reçu par message dans la conversation, puis ouvrez-la comme le montre la vidéo ci-dessous et prenez la clé.",
      },
      {
        texte: "Ouvrez la porte avec la clé.",
      },
      {
        texte: "Bienvenue et bon séjour ! 🌊",
      },
    ],
    video: "/logements/houlgate-1/arrivee/keybox.mp4",
    videoPortrait: true,
  },
  pratique: pratique(4, "3ᵉ étage"),
  equipements: equipements("t2"),
};

/** Houlgate 4 — 3ᵉ étage — studio (2 pers.). */
export const houlgate4: Logement = {
  // cover provisoire : photo Houlgate (Wikimedia Commons) → remplacer par la vraie photo du logement
  ...base({ id: "houlgate-4", nom: "Houlgate 4", etage: "3ᵉ étage", cover: "/logements/houlgate-4/cover.jpg", coverCredit: "Photo : Houlgate, plage au couchant — Martpan, CC BY-SA 4.0 (Wikimedia Commons). Provisoire.", capacite: 2 }),
  arrivee: {
    // Même entrée d'immeuble et même boîte à clés que Houlgate 1 (photos 1/2 et
    // vidéo réutilisées) ; on monte au 3ᵉ étage, porte n° 4.
    ...arrivee("3ᵉ étage", "Houlgate 4"),
    etapes: [
      {
        texte: "Rendez-vous au 23 rue des Bains, à Houlgate.",
        photo: "/logements/houlgate-1/arrivee/1.jpg",
      },
      {
        texte:
          "Poussez la porte bleue à côté du restaurant. Il n'y a ni clé ni badge pour cette porte : il suffit de la pousser pour entrer.",
        photo: "/logements/houlgate-1/arrivee/2.jpg",
      },
      {
        texte: "Dirigez-vous au fond du couloir, puis montez au 3ᵉ étage.",
      },
      {
        texte: "Au 3ᵉ étage, dirigez-vous vers la porte numéro 4.",
        photo: "/logements/houlgate-4/arrivee/3.jpg",
      },
      {
        texte:
          "Une boîte à clés se trouve à côté de cette porte. Composez le code reçu par message dans la conversation, puis ouvrez-la comme le montre la vidéo ci-dessous et prenez la clé.",
      },
      {
        texte: "Ouvrez la porte avec la clé.",
      },
      {
        texte: "Bienvenue et bon séjour ! 🌊",
      },
    ],
    video: "/logements/houlgate-1/arrivee/keybox.mp4",
    videoPortrait: true,
  },
  pratique: pratique(2, "3ᵉ étage"),
  equipements: equipements("studio"),
};
