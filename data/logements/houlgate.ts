import type { Logement, CategorySection, ReglementInterieur } from "../types";

/**
 * HOULGATE — 23 rue des Bains (14510 Houlgate) — 4 logements Josie.
 *
 * L'immeuble regroupe 4 biens (mêmes équipements partout) :
 *   • 2ᵉ étage : un studio (« Écume ») + un T2 (« Beau Rivage »)
 *   • 3ᵉ étage : un studio (« Embruns ») + un T2 (« Belle Époque »)
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
 *   - « Autour de moi » : enrichir avec commerces locaux (boulangerie, supérette,
 *     pharmacie, restaurants) une fois les noms/adresses confirmés
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */

const VILLE = "Houlgate";
const ADRESSE = "23 Rue des Bains, 14510 Houlgate";
const ITINERAIRE = "https://maps.google.com/?q=23+Rue+des+Bains+14510+Houlgate";
// Coordonnées approximatives du 23 rue des Bains (à affiner si besoin).
const COORDS: [number, number] = [49.2984, -0.0757];

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
    animauxAcceptes: false,
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

// ── Poubelles (texte générique — à préciser) ─────────────────────────────────
const POUBELLES =
  "Un local à poubelles se trouve au rez-de-chaussée de l'immeuble. Merci d'y déposer et de trier vos déchets pendant et à la fin de votre séjour.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur à verre le plus proche";

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

// ── Autour de moi — repères stables de Houlgate et alentours ─────────────────
// NB : coordonnées approximatives (niveau « point de repère »), à affiner.
const AUTOUR_CATEGORIES: CategorySection[] = [
  {
    key: "plages",
    lieux: [
      {
        nom: "Plage de Houlgate",
        desc: "Grande plage de sable au pied de la digue-promenade, face à la mer.",
        coords: [49.2999, -0.077],
      },
      {
        nom: "Falaise des Vaches Noires",
        desc: "Falaises célèbres pour leurs fossiles, entre Houlgate et Villers-sur-Mer (accessible à marée basse).",
        coords: [49.309, -0.058],
      },
    ],
  },
  {
    key: "loisirs",
    lieux: [
      {
        nom: "Casino de Houlgate",
        desc: "Casino et restauration en bord de mer.",
        coords: [49.2996, -0.0748],
      },
      {
        nom: "Digue-promenade (Les Planches)",
        desc: "Promenade en bord de mer, idéale au coucher du soleil.",
        coords: [49.2999, -0.0762],
      },
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
  "Descendez la rue des Bains jusqu'à la plage et flânez sur la digue-promenade au coucher du soleil. À marée basse, partez à la découverte des Falaises des Vaches Noires et de leurs fossiles. Et prenez le temps d'une escapade jusqu'à Cabourg et sa digue Marcel-Proust, à quelques minutes.";

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
    etapes: etapesArrivee(etage, nom),
    parking:
      "Il n'y a pas de place de parking attitrée. Le stationnement est possible dans les rues alentour (se référer à la signalétique sur place).",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte:
      nom === "Écume" || nom === "Embruns" ? decouverteStudio() : decouverteT2(),
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
    animaux: "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Les 4 logements
// ─────────────────────────────────────────────────────────────────────────────

/** 2ᵉ étage — studio (2 pers.). */
export const ecume: Logement = {
  // cover provisoire (SVG) → remplacer par /logements/ecume/cover.jpg à réception de la photo
  ...base({ id: "ecume", nom: "Écume", etage: "2ᵉ étage", cover: "/logements/ecume/cover.svg", capacite: 2 }),
  arrivee: arrivee("2ᵉ étage", "Écume"),
  pratique: pratique(2, "2ᵉ étage"),
  equipements: equipements("studio"),
};

/** 2ᵉ étage — T2 (4 pers.). */
export const beauRivage: Logement = {
  // cover provisoire (SVG) → remplacer par /logements/beau-rivage/cover.jpg à réception de la photo
  ...base({ id: "beau-rivage", nom: "Beau Rivage", etage: "2ᵉ étage", cover: "/logements/beau-rivage/cover.svg", capacite: 4 }),
  arrivee: arrivee("2ᵉ étage", "Beau Rivage"),
  pratique: pratique(4, "2ᵉ étage"),
  equipements: equipements("t2"),
};

/** 3ᵉ étage — studio (2 pers.). */
export const embruns: Logement = {
  // cover provisoire (SVG) → remplacer par /logements/embruns/cover.jpg à réception de la photo
  ...base({ id: "embruns", nom: "Embruns", etage: "3ᵉ étage", cover: "/logements/embruns/cover.svg", capacite: 2 }),
  arrivee: arrivee("3ᵉ étage", "Embruns"),
  pratique: pratique(2, "3ᵉ étage"),
  equipements: equipements("studio"),
};

/** 3ᵉ étage — T2 (4 pers.). */
export const belleEpoque: Logement = {
  // cover provisoire (SVG) → remplacer par /logements/belle-epoque/cover.jpg à réception de la photo
  ...base({ id: "belle-epoque", nom: "Belle Époque", etage: "3ᵉ étage", cover: "/logements/belle-epoque/cover.svg", capacite: 4 }),
  arrivee: arrivee("3ᵉ étage", "Belle Époque"),
  pratique: pratique(4, "3ᵉ étage"),
  equipements: equipements("t2"),
};
