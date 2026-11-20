import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 29 avenue du Six Juin (entre la rue Saint-Jean et le port
 * de plaisance), reprises du livret StyQR « 29 » (coups de cœur d'Agathe +
 * commerces géolocalisés). Elles remplacent les catégories « du quotidien » de
 * Caen ; les autres (culture, nature, plages, sorties…) sont reprises de Caen.
 * Les distances sont recalculées depuis les coordonnées du logement.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe : cuisine thaïe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "La Grande Bouteille", desc: "Restaurant, rue des Prairies Saint-Gilles.", coords: [49.1846082, -0.3575041] },
    { nom: "Boumbap", desc: "Cuisine coréenne, passage du Grand Turc.", coords: [49.1828613, -0.3627187] },
    { nom: "Mian Mian", desc: "Nouilles et cuisine chinoise, rue de Geôle.", coords: [49.1843097, -0.3620192] },
    { nom: "Amalfi", desc: "Pizzeria italienne.", coords: [49.1783798, -0.3561148] },
    { nom: "Chez Gisèle", desc: "Restaurant, quai Eugène Meslin.", coords: [49.1758169, -0.3564825] },
    { nom: "Pigalle Brasserie", desc: "Brasserie, près de la gare.", coords: [49.1761728, -0.3531354] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Key's and Co", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
    { nom: "Céramilatte", desc: "Café céramique, juste à côté (on peut y peindre sa céramique).", coords: [49.1817209, -0.358129] },
    { nom: "Arbuste", desc: "Café, rue Montoir-Poissonnerie.", coords: [49.184466, -0.3604197] },
    { nom: "Les 3 Marches", desc: "Café, rue Basse.", coords: [49.1847382, -0.357961] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
  ],
  bars: [
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Fada", desc: "Bar, quai Vendeuvre.", coords: [49.1833493, -0.3568259] },
    { nom: "La Pagaille", desc: "Bar animé et abordable, 30 quai Vendeuvre : tapas, cocktails et terrasse face au port.", coords: [49.1827146, -0.3554654] },
    { nom: "L'Accès Soir", desc: "Bar, quai François Mitterrand.", coords: [49.1813673, -0.3495009] },
  ],
  bouche: [
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et café gourmand, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie, à Biéville-Beuville (~15 min en voiture).", coords: [49.2291049, -0.3715266] },
    { nom: "Boulangerie Banette Saveurs", desc: "Boulangerie, rue Saint-Jean.", coords: [49.1817953, -0.359248] },
    { nom: "Alban Guilmet", desc: "Boulangerie-pâtisserie réputée.", coords: [49.1831558, -0.3608185] },
    { nom: "Boucherie Marcel", desc: "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.", coords: [49.1827939, -0.3565822] },
    { nom: "Les Embruns", desc: "Poissonnerie, rue Saint-Jean.", coords: [49.1811185, -0.3581254] },
    { nom: "Le Verger Saint-Jean", desc: "Primeur de quartier (fruits, légumes, produits frais), 124 rue Saint-Jean. Tél. 02 31 86 00 19.", coords: [49.1799123, -0.3580777] },
    { nom: "Yver Chocolatier", desc: "Chocolatier, boulevard Maréchal Leclerc.", coords: [49.181918, -0.361601] },
  ],
  courses: [
    { nom: "Monop'", desc: "Supermarché de centre-ville, ouvert tard.", coords: [49.181708, -0.3572948] },
    { nom: "Cocci Market", desc: "Supérette, rue Saint-Jean.", coords: [49.1814724, -0.358567] },
    { nom: "Coccinelle Express", desc: "Supérette, rue Basse.", coords: [49.184705, -0.358662] },
    { nom: "Casino Shop", desc: "Supérette, rue Saint-Pierre.", coords: [49.1835703, -0.3620525] },
  ],
  tram: [
    { nom: "Arrêt de tram « Résistance Saint-Jean »", desc: "L'arrêt de tram le plus proche, au pied de l'immeuble (lignes T1, T2 et T3).", coords: [49.18073, -0.35593] },
    { nom: "Arrêt de tram « Saint-Pierre »", desc: "Arrêt de tram au pied de l'église Saint-Pierre (~400 m).", coords: [49.1840696, -0.3606901] },
    { nom: "Arrêt de bus « Bernières »", desc: "Arrêt de bus, rue de Bernières (~200 m).", coords: [49.182796, -0.358659] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie de la presqu'île", desc: "Pharmacie proche du port et de la presqu'île. Tél. 02 31 95 57 30.", coords: [49.1832724, -0.3530554] },
    { nom: "Grande Pharmacie de Caen", desc: "Grande pharmacie du centre-ville.", coords: [49.183458, -0.36294] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Prairies-Saint-Gilles", desc: "Laverie automatique ouverte 7j/7, rue des Prairies Saint-Gilles.", coords: [49.1845518, -0.356995] },
  { nom: "Urban Wash", desc: "Laverie automatique, rue des Teinturiers.", coords: [49.1839747, -0.3631268] },
];

/**
 * Logement « Studio 29 » — studio rénové au 4e et dernier étage (sans
 * ascenseur), porte n° 2, au 29 avenue du Six Juin, en plein centre de Caen,
 * côté cour. Pièce de vie avec lit double, table à manger et TV, coin cuisine
 * équipé, salle de douche avec WC et machine à laver. 2 voyageurs.
 *
 * Annonce : Airbnb 54032318 (« Studio calme côté cour · centre Caen · tram »).
 * Photos reprises de l'annonce (couverture = pièce de vie).
 *
 * Refait d'après le livret StyQR « 29 » (export du 2026-11-16, voir le cerveau
 * Josie : raw/documents/livrets-styqr/29.md). Arrivée 17h, départ 10h. Animaux
 * acceptés (1 maximum, avec supplément). Non-fumeur, pas de fêtes. Aucun code
 * en clair dans le livret StyQR. Pas de vidéo d'arrivée.
 *
 * « Autour de moi » : adresses du quotidien proches du logement (NEARBY), avec
 * les coups de cœur d'Agathe repris de StyQR ; le reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Nom affiché : « Studio 29 » (le livret StyQR s'appelait simplement « 29 »).
 *   - Lit : StyQR dit « lit Queen Size 160 × 200 », l'annonce Airbnb dit
 *     « lit 2 personnes 140 × 200 ». Le livret dit « lit double ».
 *   - Vidéo d'arrivée : aucune dans StyQR (à tourner si besoin).
 *
 * Pour traduire un texte, voir data/i18n-styqr/studio29.ts (clé = texte FR exact).
 */
export const studio29: Logement = {
  id: "studio29",
  nom: "Studio 29",
  adresse: "29 Avenue du Six Juin, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=29+Avenue+du+Six+Juin+14000+Caen",
  coords: [49.1817097, -0.356747],
  cover: "/logements/studio29/cover.jpg",

  motAccueil:
    "Bienvenue au Studio 29 ! Votre studio, rénové et au calme côté cour, se trouve en plein centre de Caen, entre la rue Saint-Jean et le port de plaisance. Le tram est au pied de l'immeuble et le château se rejoint à pied. Très bon séjour ! ⚓",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Studio au 4e et dernier étage (sans ascenseur), porte n° 2",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Dans la boîte à clés : la clé du studio et le badge de l'immeuble",
    ],
    etapes: [
      { texte: "Rendez-vous au 29 avenue du Six Juin." },
      {
        texte:
          "La boîte à clés se trouve juste à droite de la porte d'entrée. Composez le code reçu par message, récupérez la clé et le badge, puis refermez la boîte et brouillez le code.",
      },
      { texte: "Passez le badge sur le bouton gris de l'interphone, puis poussez la porte." },
      { texte: "Montez tout en haut, au dernier étage : votre porte est la n° 2. Ouvrez avec la clé. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) avenue du Six Juin, rue Guilbert, rue de l'Engannerie et rue des Équipes d'Urgence.\nStationnement gratuit place Reine Mathilde, rue de Calix, rue Richard Lenoir et rue des Chanoines.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec lit double, table à manger et TV",
        "Coin cuisine équipé (plaque de cuisson, micro-ondes, réfrigérateur, machine Nespresso, bouilloire, grille-pain)",
        "Salle de douche avec WC et machine à laver",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-88A0",
    motDePasse: "YfzRhQbaejbg2A6SeA",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, une capsule de lessive, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit double. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🚶 4e étage sans ascenseur",
        contenu:
          "Le studio se trouve au 4e et dernier étage, sans ascenseur : prévoyez-le pour vos bagages. Les parties communes de la résidence sont anciennes, mais le studio est rénové et donne côté cour, au calme.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Allumez d'abord le téléviseur avec sa télécommande.\n2. Allumez ensuite le décodeur Orange avec sa propre télécommande.\n3. Si les chaînes ne s'affichent pas, appuyez sur le bouton SOURCE de la télécommande du téléviseur et choisissez HDMI 1 ou HDMI 2, jusqu'à voir l'écran d'accueil Orange.\n4. Utilisez ensuite uniquement la télécommande du décodeur pour changer de chaîne.\n💡 En cas de problème, débranchez puis rebranchez le décodeur, situé derrière le téléviseur.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/studio29/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧺 Machine à laver",
        contenu:
          "Une machine à laver (à hublot) se trouve dans la salle de bain. Une capsule de lessive vous est offerte à votre arrivée.",
        photos: ["/logements/studio29/machine-a-laver.jpg"],
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un aspirateur, une pelle et une balayette se trouvent dans la salle de bain.",
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
      "Bouilloire",
      "Grille-pain",
      "Lave-linge",
      "TV (décodeur Orange)",
    ],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer sur le trottoir, devant l'immeuble.\n🍷 Verre : conteneur au 6 place de la Résistance",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (décodeur Orange)",
    "Lit double",
    "Coin cuisine équipé",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Lave-linge",
    "Salle de douche avec WC",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Laisser les draps sur le lit et les serviettes utilisées dans la salle de bain",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre la clé et le badge dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Rue Saint-Jean — commerces & restaurants (~2 min)",
      "Port de plaisance & quai Vendeuvre (~3 min)",
      "Église Saint-Pierre & rue Saint-Pierre (~6 min)",
      "Abbaye aux Dames (~8 min)",
      "Château de Caen (~10 min)",
      "Gare SNCF (~12 min)",
    ],
    note: "Vous êtes au cœur de Caen, entre la rue Saint-Jean et le port de plaisance. Restaurants, bars et commerces sont au pied de l'immeuble, et le tram vous emmène partout en ville.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Vous êtes entouré des adresses préférées d'Agathe : Le Bistrot Basque sur le port, Bœuf & Cow, A Contre Sens et Koboon quai François Mitterrand, et Le Mug rue Saint-Pierre. Pour un verre : Âmbar ou Nonna. Côté gourmandises : la Crémerie des Baratineurs, juste à côté, et Tartines et Gourmandises. Le dimanche matin, ne manquez pas le grand marché sur le port.",
  },

  numerosUtiles: caen.numerosUtiles,
};
