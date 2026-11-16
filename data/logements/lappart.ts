import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 43 rue Basse (entre le port de plaisance et le quartier
 * du Vaugueux), reprises des livrets StyQR « L'appart » et « Loft » (même
 * immeuble, mêmes adresses : coups de cœur d'Agathe + commerces géolocalisés).
 * Elles remplacent les catégories « du quotidien » de Caen ; les autres
 * (culture, nature, plages, sorties…) sont reprises de Caen.
 * Exportées pour être partagées avec le livret « Loft » (même adresse).
 */
export const RUE_BASSE_NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "La Grande Bouteille", desc: "Restaurant, rue des Prairies Saint-Gilles, juste à côté.", coords: [49.1846082, -0.3575041] },
    { nom: "Le Bouchon du Vaugueux", desc: "Bistrot de référence du quartier, au 12 rue Graindorge (juste à côté !). Cuisine du marché soignée, référencé au Guide Michelin. Réservation conseillée. Tél. 02 31 44 26 26.", coords: [49.1859, -0.3586] },
    { nom: "La Trattoria", desc: "Cuisine italienne conviviale, 15 rue du Vaugueux, à deux pas du logement. Tél. 02 31 47 97 01.", coords: [49.1856, -0.3599] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Mian Mian", desc: "Restaurant, rue de Geôle.", coords: [49.1843097, -0.3620192] },
    { nom: "Boumbap", desc: "Restaurant, passage du Grand Turc.", coords: [49.1828613, -0.3627187] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Les 3 Marches", desc: "Café, rue Basse, juste à côté.", coords: [49.1847382, -0.357961] },
    { nom: "Café Le Régent", desc: "Café, avenue de la Libération.", coords: [49.1841724, -0.3598809] },
    { nom: "Arbuste Café", desc: "Café, rue Montoir-Poissonnerie.", coords: [49.184466, -0.3604197] },
    { nom: "Céramilatte", desc: "Café céramique, rue de l'Engannerie.", coords: [49.1817209, -0.358129] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Fada", desc: "Bar, quai Vendeuvre.", coords: [49.1833493, -0.3568259] },
    { nom: "Les terrasses du port (Quai Vendeuvre)", desc: "Bars et terrasses face au bassin Saint-Pierre, très agréables aux beaux jours.", coords: [49.1841, -0.356] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
  ],
  bouche: [
    { nom: "La Brioche Chaude", desc: "Boulangerie, rue Neuve Saint-Jean.", coords: [49.183284, -0.359432] },
    { nom: "Talemelerie Guillaume", desc: "52 rue du Vaugueux, tout près — boulangerie-pâtisserie pour le pain frais et les viennoiseries du matin.", coords: [49.1866196, -0.3600755] },
    { nom: "Alban Guilmet", desc: "Boulangerie-pâtisserie, rue Saint-Jean.", coords: [49.1831558, -0.3608185] },
    { nom: "Boucherie Sabot", desc: "Boucherie, boulevard des Alliés.", coords: [49.1844252, -0.3593992] },
    { nom: "Boucherie Marcel", desc: "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.", coords: [49.1827939, -0.3565822] },
    { nom: "Julien Marée", desc: "Poissonnerie, avenue du Six Juin.", coords: [49.1835115, -0.3591619] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
  ],
  courses: [
    { nom: "Coccinelle Express", desc: "La supérette la plus proche, 1 rue Basse, juste à côté du logement : dépannage et courses de dernière minute. Tél. 06 59 27 12 90.", coords: [49.184705, -0.358662] },
    { nom: "Casino Shop", desc: "Supérette, rue Saint-Pierre.", coords: [49.1835703, -0.3620525] },
    { nom: "Cocci Market", desc: "Supérette, rue Saint-Jean.", coords: [49.1814724, -0.358567] },
    { nom: "Monoprix", desc: "45 boulevard du Maréchal Leclerc — le plus pratique du centre : courses et produits du quotidien, ouvert tard. Parking souterrain.", coords: [49.1826, -0.3622] },
  ],
  tram: [
    { nom: "Arrêt de bus « Tour Leroy »", desc: "L'arrêt de bus le plus proche (~2 min à pied).", coords: [49.1842791, -0.3590386] },
    { nom: "Arrêt de tram « Saint-Pierre »", desc: "L'arrêt de tram le plus proche, au pied de l'église Saint-Pierre (~5 min à pied).", coords: [49.1840696, -0.3606901] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie du Vaugueux", desc: "Rue Montoir-Poissonnerie, la plus proche du logement. Pharmacie de garde : composez le 3237.", coords: [49.1857, -0.3597] },
    { nom: "Pharmacie de la presqu'île", desc: "Pharmacie proche du port et de la presqu'île. Tél. 02 31 95 57 30.", coords: [49.1832724, -0.3530554] },
    { nom: "Grande Pharmacie de Caen", desc: "Pharmacie, rue Saint-Pierre.", coords: [49.183458, -0.36294] },
  ],
  tabac: [
    { nom: "Le Hopping", desc: "Bar-tabac, rue Basse, juste à côté.", coords: [49.1848898, -0.3563881] },
    { nom: "Le Saint-Claude", desc: "Bar-tabac, boulevard des Alliés.", coords: [49.1840715, -0.3588082] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
export const RUE_BASSE_LAVERIES: Lieu[] = [
  { nom: "Lavomatique Prairies-Saint-Gilles", desc: "La laverie la plus proche (7j/7), rue des Prairies Saint-Gilles, juste à côté.", coords: [49.1845518, -0.356995] },
  { nom: "Urban Wash", desc: "Laverie automatique, rue des Teinturiers.", coords: [49.1839747, -0.3631268] },
];

/** Stationnement autour du 43 rue Basse (texte StyQR, identique pour L'appart et Loft). */
export const RUE_BASSE_PARKING =
  "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Basse, rue des Prairies Saint-Gilles et rue Buquet.\nStationnement gratuit place de la Reine Mathilde, rue de Calix, rue Richard Lenoir et rue des Chanoines.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr";

/** Quartier du 43 rue Basse (partagé avec Loft). */
export const RUE_BASSE_QUARTIER: Logement["quartier"] = {
  aPied: [
    "Port de plaisance & marché du dimanche (~3 min)",
    "Quartier du Vaugueux — restaurants (~3 min)",
    "Église Saint-Pierre & office de tourisme (~4 min)",
    "Abbaye aux Dames (~5 min)",
    "Rue Saint-Pierre — shopping (~6 min)",
    "Château de Caen (~7 min)",
  ],
  note: "Vous êtes entre le port de plaisance et le quartier historique du Vaugueux, en plein centre de Caen. Restaurants, bars et commerces sont au pied de l'immeuble, et le château se rejoint à pied en quelques minutes. Le dimanche matin, le grand marché s'installe le long du port, à deux pas.",
};

/**
 * Logement « L'appart » — appartement au 1er étage du 43 rue Basse, porte n°1
 * (à gauche sur le palier). Même immeuble que le Loft (porte n°2).
 *
 * Annonce Airbnb 27352176 (« T3 lumineux 60m² · port & centre · Caen ·
 * 4 pers. »). Dans la table des annonces, le lien était marqué « ? » : il est
 * confirmé par la position de l'annonce (rue Basse) et par les photos, qui
 * correspondent à la description StyQR (séjour avec bar, deux chambres à lit
 * double, salle de douche avec WC). Pas d'annonce Booking connue.
 * Photos reprises de l'annonce Airbnb (couverture = salon) ; photos de la TV
 * et du radiateur reprises du livret StyQR.
 *
 * Refait d'après le livret StyQR « L'appart » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/L-appart.md). Arrivée 17h,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur,
 * pas de fêtes.
 *
 * « Autour de moi » : adresses du quotidien proches du logement
 * (RUE_BASSE_NEARBY, partagé avec le Loft), avec les coups de cœur d'Agathe
 * repris de StyQR ; le reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message).
 *
 * ⚠️ Vidéo hébergée chez StyQR : à mettre sur YouTube (la même vidéo sert au
 * Loft). Si StyQR est résilié, le lien cessera de fonctionner.
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Linge : StyQR parle d'un « lit Queen Size 160x200 » mais aussi de deux
 *     chambres avec lits doubles. Le livret indique « les deux lits ».
 *   - Les produits d'accueil comprennent une capsule de lessive : y a-t-il un
 *     lave-linge ? (non mentionné dans StyQR, donc pas listé ici). Un
 *     lave-vaisselle semble visible sur les photos Airbnb, non listé non plus.
 *
 * Pour traduire un texte, voir data/i18n-styqr/lappart.ts (clé = texte FR exact).
 */
export const lappart: Logement = {
  id: "lappart",
  nom: "L'appart",
  adresse: "43 Rue Basse, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=43+Rue+Basse+14000+Caen",
  coords: [49.1849973, -0.3570038],
  cover: "/logements/lappart/cover.jpg",

  motAccueil:
    "Bienvenue à L'appart ! Votre appartement lumineux se trouve à deux pas du port de plaisance et du quartier historique du Vaugueux. Restaurants, bars et commerces sont au pied de l'immeuble, et tout le centre de Caen se découvre à pied. Très bon séjour ! ⚓",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video:
      "https://styqr-space.ams3.cdn.digitaloceanspaces.com/03e578d7-c54a-4850-90bb-71a5967d8469/IMG_8654.mov",
    videoPortrait: true,
    checkinExpress: [
      "L'appartement se trouve au 1er étage du 43 rue Basse, à gauche sur le palier (porte n°1)",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "La vidéo ci-dessous montre comment ouvrir la porte de l'immeuble avec la clé",
    ],
    etapes: [
      { texte: "Rendez-vous au 43 rue Basse." },
      {
        texte:
          "Utilisez la boîte à clés de droite : composez le code reçu par message, récupérez les clés, puis refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Pour ouvrir la porte de l'immeuble, prenez la clé FICHET : mettez la pointe vers le haut, puis tournez d'un quart de tour (voir la vidéo).",
      },
      { texte: "Montez au 1er étage : l'appartement est à gauche, porte n°1. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking: RUE_BASSE_PARKING,
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Séjour spacieux avec canapé",
        "Bar à manger et cuisine entièrement équipée (four, micro-ondes, plaque de cuisson, machine à café)",
        "Deux chambres indépendantes avec lit double",
        "Salle de douche avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_14D9",
    motDePasse: "157scycezthxnh797ut5",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
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
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/lappart/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton Power (rouge), en haut à gauche de la télécommande, pour allumer l'écran.\n2. Avec cette même télécommande, choisissez vos chaînes avec les touches numérotées ou les flèches.",
        photos: ["/logements/lappart/tv1.jpg", "/logements/lappart/tv2.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/lappart/chauffage.jpg"],
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un balai, une pelle et une balayette se trouvent dans le placard de la pièce de vie.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Four", "Micro-ondes", "Plaque de cuisson", "Réfrigérateur", "Machine Nespresso", "TV"],
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
      "Les poubelles sont à déposer dehors, sur le trottoir, en sortant de l'immeuble.\n🍷 Verre : conteneur en face du restaurant Le Bistronome, rue des Prairies Saint-Gilles.",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV",
    "2 lits doubles",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Plaque de cuisson",
    "Réfrigérateur",
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
      "Laisser les draps sur les lits et les serviettes utilisées dans la salle de bain : l'équipe de ménage s'en occupe",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: RUE_BASSE_QUARTIER,

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        RUE_BASSE_NEARBY[c.key] ? { key: c.key, lieux: RUE_BASSE_NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: RUE_BASSE_LAVERIES },
    ],
    coupDeCoeur:
      "Le dimanche matin, flânez au grand marché le long du port, juste en bas de chez vous, puis montez au château pour la vue sur la ville. Côté table, les adresses préférées d'Agathe : Le Bistrot Basque, Bœuf & Cow, Le Mug, Koboon, A Contre Sens et Les Burgers de Colette. Pour un verre : Âmbar ou Nonna.",
  },

  numerosUtiles: caen.numerosUtiles,
};
