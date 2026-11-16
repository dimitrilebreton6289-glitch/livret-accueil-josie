import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 7 avenue de Thiès (quartier du Calvaire Saint-Pierre, au
 * nord du centre-ville), reprises du livret StyQR « Thiès » (commerces
 * géolocalisés + coups de cœur d'Agathe, situés dans le centre) et des
 * commerces du Calvaire Saint-Pierre déjà géolocalisés pour les Tilleuls.
 * Elles remplacent les catégories « du quotidien » de Caen ; les autres
 * (culture, nature, plages, sorties…) sont reprises de Caen. Les distances sont
 * recalculées depuis les coordonnées du logement.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Le Toucan", desc: "Restaurant, avenue de la Côte de Nacre, à deux pas du logement.", coords: [49.1992138, -0.3607664] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Miettes et Cie", desc: "Boulangerie du Calvaire Saint-Pierre : pain frais et viennoiseries du matin.", coords: [49.197657, -0.364306] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et café gourmand, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie, à Biéville-Beuville (~10 min en voiture).", coords: [49.2291049, -0.3715266] },
  ],
  courses: [
    { nom: "Carrefour City", desc: "Rue de la Défense Passive, au Calvaire Saint-Pierre : la supérette la plus proche.", coords: [49.19901, -0.365444] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de tram « Péricentre »", desc: "L'arrêt de tram le plus proche, avenue de la Côte de Nacre.", coords: [49.2005233, -0.3608119] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie du Calvaire Saint-Pierre", desc: "La pharmacie la plus proche, au Calvaire Saint-Pierre. Pharmacie de garde : composez le 3237.", coords: [49.197753, -0.364309] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique", desc: "Laverie automatique, à deux pas du logement.", coords: [49.1970251, -0.3636338] },
];

/**
 * Logement « Thiès » — studio au 2e étage (sans ascenseur) du 7 avenue de
 * Thiès, 14000 Caen, quartier calme du Calvaire Saint-Pierre, au nord du
 * centre-ville. Place de parking privée.
 *
 * Annonces : Airbnb 34830000, Booking 15387369. Photos reprises de l'annonce
 * Airbnb (couverture = séjour).
 *
 * Refait d'après le livret StyQR « Thies » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Thies.md) : petite cuisine
 * équipée, canapé-lit, dressing, TV (box Bouygues) + Internet, table pour
 * 2 personnes, salle de douche avec WC. Porte n°69. Arrivée 17h, départ 10h
 * (11h gratuit selon disponibilités). Animaux acceptés avec supplément.
 * Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Aucun code n'était écrit en clair dans StyQR (code de la boîte à clés
 *    envoyé par message). Un badge ouvre l'immeuble.
 * ⚠️ À vérifier par Agathe :
 *   - StyQR indique « l'aspirateur et la toile se situent dans le placard sous
 *     les escaliers » : texte qui semble copié d'un autre logement (studio au
 *     2e étage). Non repris ; l'emplacement est à préciser.
 *
 * Pour traduire un texte, voir data/i18n-styqr/thies.ts (clé = texte FR exact).
 */
export const thies: Logement = {
  id: "thies",
  nom: "Thiès",
  adresse: "7 Avenue de Thiès, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=7+Avenue+de+Thies+14000+Caen",
  coords: [49.1974591, -0.3626771],
  cover: "/logements/thies/cover.jpg",

  motAccueil:
    "Bienvenue à Thiès ! Votre studio se trouve dans un quartier calme, au nord du centre-ville, avec sa place de parking privée. Le tram, juste à côté, vous emmène en quelques minutes au château et dans le centre historique. Très bon séjour à Caen ! 🌿",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/U3U74qbLXG0",
    videoPortrait: true,
    checkinExpress: [
      "Le studio se trouve au 2e étage (sans ascenseur) du 7 avenue de Thiès : porte n°69",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 7 avenue de Thiès, puis dirigez-vous à gauche de l'immeuble : la boîte à clés est fixée contre le mur." },
      {
        texte:
          "Composez le code reçu par message, puis appuyez sur les boutons latéraux pour l'ouvrir. Récupérez les clés et le badge, refermez la boîte et brouillez le code.",
      },
      { texte: "Revenez devant l'immeuble et passez le badge sur l'interphone pour ouvrir la porte." },
      { texte: "Montez les escaliers jusqu'au 2e étage, puis tournez à droite dans le couloir : votre porte est la n°69. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "🅿️ Une place de parking privée vous est réservée sur le côté gauche de l'immeuble : c'est la place n°92, le long du mur.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [],
      etage: [
        "Studio au 2e étage, sans ascenseur",
        "Pièce de vie avec canapé-lit, TV et dressing",
        "Petite cuisine équipée et table pour 2 personnes",
        "Salle de douche avec WC",
      ],
      exterieur: ["Place de parking privée (n°92)"],
    },
  },

  wifi: {
    reseau: "Bbox-Thibaud et Marine",
    motDePasse: "AirbnbMT",
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
          "Les draps sont fournis pour le lit. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu: "Les draps se trouvent dans le placard. Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://youtube.com/shorts/yB5Dmc_Acvk",
        photos: ["/logements/thies/canape-lit.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/thies/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé très longuement (environ 30 à 40 secondes) sur le cadenas pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Utilisez les deux télécommandes :\n1. Allumez la télévision avec le bouton On/Off de sa télécommande.\n2. Allumez ensuite la box Bouygues avec le bouton On/Off de sa télécommande.\n3. Changez de chaîne avec la télécommande de la box.\nSi l'image ne s'affiche pas, appuyez sur SOURCE (télécommande de la TV) et sélectionnez HDMI 1.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer le radiateur, utilisez les boutons situés directement sur l'appareil. Merci de veiller à limiter votre consommation.",
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
      "Les poubelles se trouvent dans le local au rez-de-chaussée (porte à gauche en entrant dans les parties communes). Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 5 avenue de Thiès",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (box Bouygues)",
    "Canapé-lit",
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
    "Parking privé gratuit",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé (inutile de retirer les draps, l'équipe de ménage s'en charge)",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
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
      "Pharmacie, boulangerie et supérette du Calvaire Saint-Pierre (~3 min)",
      "Arrêt de tram « Péricentre » (~5 min)",
      "La Vallée des Jardins (~10 min)",
      "Le Mémorial de Caen (~20 min)",
      "Château de Caen (~15 min, ou quelques minutes en tram)",
    ],
    note: "Vous êtes dans un quartier résidentiel et calme du Calvaire Saint-Pierre, au nord du centre-ville. Pharmacie, boulangerie et supérette sont à deux pas, et le tram (arrêt Péricentre) vous emmène en quelques minutes au château, au centre historique et à la gare.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Prenez le tram jusqu'au château pour une balade sur les remparts, puis flânez dans le centre historique. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Les Burgers de Colette. Pour un verre : Nonna ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
