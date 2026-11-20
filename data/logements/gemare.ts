import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 35 rue Gémare (entre le château, la rue Saint-Pierre et
 * le quartier Saint-Sauveur), reprises du livret StyQR « Gémare » (commerces
 * géolocalisés) + coups de cœur d'Agathe (marqués dans ses autres livrets
 * StyQR). Elles remplacent les catégories « du quotidien » de Caen ; les autres
 * (culture, nature, plages, sorties…) sont reprises de Caen. Les distances sont
 * recalculées depuis les coordonnées du logement.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Mian Mian", desc: "Rue de Geôle, au pied du château : une adresse que nous recommandons.", coords: [49.1843097, -0.3620192] },
    { nom: "La Napolitaine", desc: "Pizzeria, rue de Geôle.", coords: [49.1842717, -0.3619149] },
    { nom: "Boumbap", desc: "Restaurant coréen.", coords: [49.1828613, -0.3627187] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "La Casinière", desc: "Rue aux Namps, dans le quartier Saint-Sauveur : une adresse que nous recommandons.", coords: [49.1841772, -0.3666094] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Arbuste Café", desc: "Rue Montoir-Poissonnerie : coffee shop, idéal pour une pause café.", coords: [49.184466, -0.3604197] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Le Multiverre", desc: "Bar à vins, rue de Geôle.", coords: [49.1854663, -0.3651534] },
    { nom: "Kokomo", desc: "Bar, rue de Geôle.", coords: [49.1848536, -0.3636576] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Alban Guillemet", desc: "Pâtisserie-chocolaterie.", coords: [49.1831558, -0.3608185] },
    { nom: "Boucherie Sabot", desc: "Boulevard des Alliés : boucherie-charcuterie artisanale.", coords: [49.1844252, -0.3593992] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Casino Shop", desc: "Rue Saint-Pierre : supérette de centre-ville pour le dépannage.", coords: [49.1835703, -0.3620525] },
    { nom: "Casino Shop (place Malherbe)", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Coccinelle Express", desc: "Rue Basse, près du port : supérette de dépannage.", coords: [49.184705, -0.358662] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de tram « Château - Quatrans »", desc: "Arrêt de tram et de bus au pied du château.", coords: [49.18508, -0.36338] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Grande Pharmacie de Caen", desc: "Rue Saint-Pierre, en centre-ville.", coords: [49.183458, -0.36294] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Pharmacie Danjou (Aprium)", desc: "Place Malherbe, en bas de la rue Écuyère.", coords: [49.1819435, -0.3671331] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Urban Wash", desc: "Rue des Teinturiers : laverie automatique, près du château.", coords: [49.1839747, -0.3631268] },
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Pressing Baechler", desc: "Rue du Pont Saint-Jacques : pressing et nettoyage.", coords: [49.1812234, -0.362506] },
];

/**
 * Logement « Gémare » — appartement d'une chambre au rez-de-chaussée du
 * 35 rue Gémare, 14000 Caen, à deux pas du château et de la rue Saint-Pierre
 * (tram « Château - Quatrans » juste à côté).
 *
 * Annonces : Airbnb 1597334348939653391, Booking 15618153. Photos reprises de
 * l'annonce Airbnb (couverture = chambre).
 *
 * Refait d'après le livret StyQR « Gemare » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Gemare.md) : salon, cuisine et
 * espace repas à l'entrée, salle de douche avec WC, chambre avec lit
 * 140 × 190. Lit bébé et chaise enfant. Machine Nespresso, TV Free.
 * Arrivée 17h, départ 10h (11h gratuit selon disponibilités). Animaux acceptés
 * avec supplément. Pas de fêtes.
 *
 * « Autour de moi » : adresses du quotidien proches du logement (NEARBY) ; le
 * livret StyQR de Gémare n'avait aucun coup de cœur coché : ceux d'Agathe sont
 * repris de ses autres livrets. Le reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Aucun code n'était écrit en clair dans StyQR (code de la boîte à clés
 *    envoyé par message). Un badge (dans la boîte à clés) ouvre l'immeuble.
 * ⚠️ À vérifier par Agathe :
 *   - Vidéo d'accès : la version française de StyQR pointe vers
 *     youtube.com/shorts/Y5wR63un0bo (retenue), la version anglaise vers
 *     youtube.com/shorts/ZEjoSEEcKgM.
 *   - Logement non-fumeur ? (non précisé dans StyQR : « non-fumeur » retenu
 *     comme dans les autres logements).
 *
 * Pour traduire un texte, voir data/i18n-styqr/gemare.ts (clé = texte FR exact).
 */
export const gemare: Logement = {
  id: "gemare",
  nom: "Gémare",
  adresse: "35 Rue Gémare, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=35+Rue+Gemare+14000+Caen",
  coords: [49.1845861, -0.3650261],
  cover: "/logements/gemare/cover.jpg",

  motAccueil:
    "Bienvenue à Gémare ! Votre appartement se trouve à deux pas du château et de la rue Saint-Pierre, avec le tram juste à côté. Restaurants, bars et commerces sont au coin de la rue, et tout le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/Y5wR63un0bo",
    videoPortrait: true,
    checkinExpress: [
      "L'appartement se trouve au rez-de-chaussée du 35 rue Gémare, juste à gauche en entrant",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 35 rue Gémare : la boîte à clés est fixée à gauche de la porte de l'immeuble." },
      {
        texte:
          "Composez le code reçu par message, puis appuyez sur le cadenas pour ouvrir la boîte. Récupérez le badge et la clé, refermez la boîte et brouillez le code.",
      },
      { texte: "Passez le badge devant le lecteur rond, sous l'interphone, puis poussez la porte." },
      {
        texte:
          "La porte de l'appartement se trouve au rez-de-chaussée, juste sur votre gauche : ouvrez-la avec le verrou situé au-dessus de la poignée. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) passage du Grand Turc, rue Demolombe, rue Saint-Laurent, rue de Geôle et parking des Quatrans.\nParkings souterrains payants : Mairie, Paul Doumer, République et Château. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "En entrant : salon, cuisine équipée et espace repas",
        "Salle de douche avec WC",
        "Chambre séparée (lit double 140 × 190)",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Freebox-676A52",
    motDePasse: "mcx3tqc2s4qcdtcsqfv4d9",
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
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/gemare/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/gemare/plaque.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Vous disposez de deux télécommandes : l'une pour la télévision, l'autre pour le décodeur Free.\n1. Allumez la télévision et le décodeur avec leurs boutons On/Off.\n2. Sélectionnez la source HDMI 1 pour accéder à Free TV.\n3. Changez ensuite de chaîne avec la télécommande du décodeur.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.\n\n⚠️ Dans la chambre, le radiateur est tout près du lit : merci de ne pas poser la couette ou les draps dessus.",
      },
      {
        titre: "👶 Équipement bébé",
        contenu:
          "Un lit bébé est à votre disposition, rangé dans le lit coffre de la chambre (le matelas et les draps ne sont pas fournis). Vous disposez aussi d'une chaise pour enfant et d'un peu de vaisselle adaptée.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Réfrigérateur", "Four à micro-ondes", "Machine Nespresso", "Bouilloire électrique", "Grille-pain", "TV"],
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
      "Les déchets sont à déposer dans les bacs gris de la rue : le camion-poubelle passe tous les jours.\n🍷 Verre : 9 rue du Tour de Terre\n🥬 Déchets alimentaires (compost) : rue des Teinturiers",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (box)",
    "Lit double",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Four à micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Bouilloire électrique",
    "Grille-pain",
    "Salle de douche avec WC",
    "Sèche-cheveux",
    "Fer à repasser",
    "Chauffage",
    "Linge de lit & serviettes",
    "Lit bébé",
    "Chaise haute",
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
      "Fermer l'appartement à clé et remettre les clés dans la boîte à clés",
    ],
    departTardif: {
      ...caen.depart.departTardif!,
      texte:
        "Le départ est prévu au plus tard à 10h. Un départ à 11h est possible gratuitement, selon disponibilités : demandez-le-nous. Pour partir plus tard, un départ tardif est possible sur demande préalable, avec un supplément à régler via le lien correspondant ci-dessous. Merci de me communiquer votre heure de départ une fois le paiement effectué.",
    },
  },

  quartier: {
    aPied: [
      "Arrêt de tram « Château - Quatrans » (~2 min)",
      "Château de Caen (~4 min)",
      "Église Saint-Pierre & rue Saint-Pierre — shopping (~5 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~5 min)",
      "Rue Écuyère — bars & restaurants (~5 min)",
      "Port de plaisance (~10 min)",
    ],
    note: "Vous êtes en plein centre historique, entre le château, la rue Saint-Pierre et le quartier Saint-Sauveur. Restaurants, bars et commerces sont à deux pas, et le tram (arrêt Château - Quatrans) dessert la gare et la presqu'île.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Montez sur les remparts du château, juste à côté, pour la vue sur la ville, puis flânez rue Saint-Pierre et rue Froide. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Les Burgers de Colette. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
