import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 13 rue de la Pigacière (entre le château, l'Abbaye aux
 * Dames et l'université), reprises du livret StyQR « Pigacière » (coups de
 * cœur d'Agathe + commerces géolocalisés). Elles remplacent les catégories
 * « du quotidien » de Caen ; les autres (culture, nature, plages, sorties…)
 * sont reprises de Caen. Les distances sont recalculées depuis les coordonnées
 * du logement.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Mian Mian", desc: "Rue de Geôle, au pied du château : une adresse que nous recommandons.", coords: [49.1843097, -0.3620192] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "La Casinière", desc: "Rue aux Namps, dans le quartier Saint-Sauveur : une adresse que nous recommandons.", coords: [49.1841772, -0.3666094] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Arbuste Café", desc: "Rue Montoir-Poissonnerie : coffee shop, idéal pour une pause café.", coords: [49.184466, -0.3604197] },
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Le Dépôt", desc: "Rue Buquet, près du port : un bar que nous recommandons.", coords: [49.1849681, -0.3590667] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
  ],
  bouche: [
    { nom: "Boucherie Sabot", desc: "Boulevard des Alliés : boucherie-charcuterie artisanale.", coords: [49.1844252, -0.3593992] },
    { nom: "Alban Guillemet", desc: "Pâtisserie-chocolaterie.", coords: [49.1831558, -0.3608185] },
    { nom: "Boucherie Marcel", desc: "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.", coords: [49.1827939, -0.3565822] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et café gourmand, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie, à Biéville-Beuville (~10 min en voiture).", coords: [49.2291049, -0.3715266] },
  ],
  courses: [
    { nom: "Coccinelle Express", desc: "Rue Basse, près du port : supérette de dépannage.", coords: [49.184705, -0.358662] },
    { nom: "Casino Shop", desc: "Rue Saint-Pierre : supérette de centre-ville pour le dépannage.", coords: [49.1835703, -0.3620525] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt « Université »", desc: "Arrêt de tram et de bus de l'esplanade de la Paix (~6 min à pied), au pied du campus.", coords: [49.188868, -0.364064] },
    { nom: "Arrêt de tram « Château - Quatrans »", desc: "Arrêt de tram et de bus au pied du château.", coords: [49.18508, -0.36338] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Grande Pharmacie de Caen", desc: "Rue Saint-Pierre, en centre-ville.", coords: [49.183458, -0.36294] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Urban Wash", desc: "Rue des Teinturiers : laverie automatique, près du château.", coords: [49.1839747, -0.3631268] },
  { nom: "Pressing Baechler", desc: "Rue du Pont Saint-Jacques : pressing et nettoyage.", coords: [49.1812234, -0.362506] },
];

/**
 * Logement « Pigacière » — appartement de plain-pied avec entrée indépendante
 * au 13 rue de la Pigacière, 14000 Caen, à quelques minutes à pied du château
 * et de l'Abbaye aux Dames.
 *
 * Annonces : Airbnb 50196259 (pas de Booking connu). Photos reprises de
 * l'annonce Airbnb (couverture = séjour).
 *
 * Refait d'après le livret StyQR « Pigaciere » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Pigaciere.md) : pièce de vie
 * avec salon et canapé convertible (2 personnes), espace repas, cuisine
 * équipée et coin bureau ; WC séparés avec lavabo ; au fond, chambre avec lit
 * double et salle de douche attenante. 4 voyageurs. Lit parapluie avec
 * matelas. Machine Nespresso, TV SFR. Arrivée 17h, départ 10h. Animaux
 * acceptés (un seul, avec supplément). Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Aucun code n'était écrit en clair dans StyQR (code de la boîte à clés
 *    envoyé par message).
 * ⚠️ À vérifier par Agathe :
 *   - Stationnement : StyQR indique des places « payantes en journée » rue de
 *     la Pigacière, rue de la Délivrande et rue Doyen Morière, alors que
 *     l'annonce Airbnb parle aussi de stationnement gratuit dans la rue.
 *
 * Pour traduire un texte, voir data/i18n-styqr/pigaciere.ts (clé = texte FR exact).
 */
export const pigaciere: Logement = {
  id: "pigaciere",
  nom: "Pigacière",
  adresse: "13 Rue de la Pigacière, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=13+Rue+de+la+Pigaci%C3%A8re+14000+Caen",
  coords: [49.1881724, -0.3587588],
  cover: "/logements/pigaciere/cover.jpg",

  motAccueil:
    "Bienvenue à Pigacière ! Votre appartement de plain-pied, avec son entrée indépendante, se trouve dans une rue calme, à quelques minutes à pied du château, de l'Abbaye aux Dames et du port de plaisance. Très bon séjour à Caen ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/VtC5ShSwyik",
    videoPortrait: true,
    checkinExpress: [
      "L'appartement est au rez-de-chaussée du 13 rue de la Pigacière, avec une entrée indépendante",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 13 rue de la Pigacière : la boîte à clés se trouve à droite de la porte d'entrée de l'appartement." },
      {
        texte:
          "Composez le code reçu par message, puis appuyez vers le bas sur le bouton central pour ouvrir la boîte. Récupérez la clé, refermez la boîte et brouillez le code.",
      },
      { texte: "Ouvrez la porte avec la clé. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue de la Pigacière, rue de la Délivrande et rue Doyen Morière.\nParkings souterrains payants : Mairie, Château et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec salon et canapé-lit (2 personnes)",
        "Espace repas et cuisine équipée",
        "Coin bureau",
        "WC séparés avec lavabo",
        "Au fond de l'appartement, chambre indépendante avec lit double (2 personnes)",
        "Salle de douche attenante à la chambre",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_28F8",
    motDePasse: "23vdtp5twh36pujx7bpq",
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
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://youtube.com/shorts/yB5Dmc_Acvk",
        photos: ["/logements/pigaciere/canape-lit.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/pigaciere/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur (sans image, vérifiez que la source est bien HDMI 1).\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur.\n3. Avec les flèches, sélectionnez « SFR TV » puis validez avec OK.\n4. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur l'interrupteur situé derrière l'appareil, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans les WC.",
      },
      {
        titre: "👶 Équipement bébé",
        contenu: "Un lit parapluie est à votre disposition, avec son matelas. Les draps ne sont pas fournis.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Réfrigérateur", "Four", "Four à micro-ondes", "Machine Nespresso", "Bouilloire électrique", "Grille-pain", "TV"],
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
      "Les poubelles se trouvent à l'extérieur, à l'arrière de l'appartement (voir la vidéo). Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 40 rue des Cordes",
    poubellesVideo: "https://youtube.com/shorts/Dy8POrswPKE",
    poubellesVideoPortrait: true,
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (box)",
    "Lit double",
    "Canapé-lit",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Four & micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Bouilloire électrique",
    "Grille-pain",
    "Espace de travail dédié",
    "WC séparés",
    "Sèche-cheveux",
    "Fer à repasser",
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
      "Laisser les draps sur les lits et déposer les serviettes utilisées dans la salle de bain",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé et remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Château de Caen (~5 min)",
      "Abbaye aux Dames (~6 min)",
      "Arrêt de tram « Université » (~6 min)",
      "Église Saint-Pierre & rue Saint-Pierre — shopping (~7 min)",
      "Port de plaisance (~10 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~12 min)",
    ],
    note: "Vous êtes dans une rue calme au nord-est du centre, entre le château, l'Abbaye aux Dames et l'université. Le centre historique, la rue Saint-Pierre et le port de plaisance se rejoignent facilement à pied, et le tram (arrêts Université ou Château - Quatrans) dessert la gare et la presqu'île.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Commencez par une balade sur les remparts du château, puis descendez vers le port de plaisance et ses terrasses. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette (rue Buquet, tout près), Bœuf & Cow, Le Bistrot Basque, Le Mug et A Contre Sens. Pour un verre : Âmbar ou Nonna.",
  },

  numerosUtiles: caen.numerosUtiles,
};
