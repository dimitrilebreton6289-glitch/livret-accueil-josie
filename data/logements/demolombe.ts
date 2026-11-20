import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 36 rue Demolombe (quartier Saint-Sauveur, en plein
 * centre historique), reprises du livret StyQR « Demolombe » (coups de cœur
 * d'Agathe + commerces géolocalisés). Elles remplacent les catégories « du
 * quotidien » de Caen ; les autres (culture, nature, plages, sorties…) sont
 * reprises de Caen. Les distances sont recalculées depuis les coordonnées du
 * logement.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "La Casinière", desc: "Rue aux Namps, dans le quartier Saint-Sauveur : une adresse que nous recommandons.", coords: [49.1841772, -0.3666094] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Mian Mian", desc: "Rue de Geôle, au pied du château : une adresse que nous recommandons.", coords: [49.1843097, -0.3620192] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Poissonnerie Le Grand Bleu", desc: "Rue Guillaume le Conquérant : poissons et fruits de mer de la côte normande.", coords: [49.1823635, -0.3737343] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
  ],
  courses: [
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "Casino Shop (rue Saint-Pierre)", desc: "Rue Saint-Pierre : supérette de centre-ville pour le dépannage.", coords: [49.1835703, -0.3620525] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de tram « Château - Quatrans »", desc: "Arrêt de tram et de bus au pied du château.", coords: [49.18508, -0.36338] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
  { nom: "Urban Wash", desc: "Rue des Teinturiers : laverie automatique, près du château.", coords: [49.1839747, -0.3631268] },
];

/**
 * Logement « Demolombe » — studio au 3e étage (sans ascenseur) du 36 rue
 * Demolombe, 14000 Caen, quartier Saint-Sauveur, en plein centre historique.
 *
 * Annonces : Airbnb 548589389500164792, Booking 15395211. Photos reprises de
 * l'annonce Airbnb (couverture = séjour).
 *
 * Refait d'après le livret StyQR « Demolombe » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Demolombe.md) : petite cuisine
 * équipée, canapé-lit, TV + Internet, bar pour 2 personnes, salle de douche
 * avec WC. Cafetière à filtre (confirmée par l'annonce Airbnb). Arrivée 17h,
 * départ 10h (11h gratuit selon disponibilités). Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Aucun code n'était écrit en clair dans StyQR (code de la boîte à clés
 *    envoyé par message). Un badge ouvre l'immeuble.
 * ⚠️ À vérifier par Agathe (contradictions dans le livret StyQR, qui contient
 *    des rubriques copiées d'un autre logement) :
 *   - Télévision : deux rubriques, l'une avec un décodeur Orange, l'autre avec
 *     une box Bouygues. Orange retenu (le WiFi est une Livebox).
 *   - Poubelles : « dans la cour extérieure » (rubrique départ, retenu) ou
 *     « au rez-de-chaussée, porte à gauche en entrant » (rubrique infos).
 *   - Ménage : « placard sous les escaliers » (non repris, emplacement à
 *     préciser).
 *   - Animaux : acceptés avec supplément selon StyQR, mais l'annonce Airbnb ne
 *     les mentionne pas. StyQR retenu.
 *
 * Pour traduire un texte, voir data/i18n-styqr/demolombe.ts (clé = texte FR exact).
 */
export const demolombe: Logement = {
  id: "demolombe",
  nom: "Demolombe",
  adresse: "36 Rue Demolombe, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=36+Rue+Demolombe+14000+Caen",
  coords: [49.1832924, -0.3665447],
  cover: "/logements/demolombe/cover.jpg",

  motAccueil:
    "Bienvenue à Demolombe ! Votre studio se trouve en plein centre historique, à deux pas de la place Saint-Sauveur et de la rue Écuyère. Cafés, restaurants et commerces sont en bas de chez vous, et le château se rejoint à pied en quelques minutes. Très bon séjour à Caen ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/Espvft0WNN4",
    videoPortrait: true,
    checkinExpress: [
      "Le studio se trouve au 3e étage (sans ascenseur) du 36 rue Demolombe, porte à gauche sur le palier",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 36 rue Demolombe, entrez dans la cour et dirigez-vous vers les boîtes aux lettres." },
      { texte: "Les boîtes à clés sont fixées contre le mur : la vôtre est celle de gauche." },
      {
        texte:
          "Composez le code reçu par message, puis appuyez vers le bas sur le bouton central pour ouvrir la boîte. Récupérez les clés et le badge, refermez la boîte et brouillez le code.",
      },
      { texte: "Montez les escaliers et passez le badge sur l'interphone pour ouvrir la porte." },
      { texte: "Montez jusqu'au 3e étage, puis tournez à droite dans le couloir : votre porte est à gauche sur le palier. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Demolombe, rue aux Namps, rue des Croisiers et rue Pasteur.\nParkings souterrains payants : Mairie et Paul Doumer. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [],
      etage: [
        "Studio au 3e étage, sans ascenseur",
        "Pièce de vie avec canapé-lit et TV",
        "Petite cuisine équipée et bar pour 2 personnes",
        "Salle de douche avec WC",
      ],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-958A",
    motDePasse: "4aTMCJ6wY6ZhRwzPwt",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://youtube.com/shorts/yB5Dmc_Acvk",
        photos: ["/logements/demolombe/canape-lit.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "Une cafetière classique à filtre (café moulu) est à votre disposition dans la cuisine.",
        photos: ["/logements/demolombe/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé très longuement (environ 30 à 40 secondes) sur le cadenas pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Utilisez les deux télécommandes :\n1. Allumez la télévision avec le bouton On/Off de sa télécommande.\n2. Allumez ensuite le décodeur avec le bouton On/Off de la télécommande Orange.\n3. Changez de chaîne avec la télécommande Orange.\nSi l'image ne s'affiche pas, appuyez sur SOURCE (télécommande de la TV) et sélectionnez HDMI 1.",
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
    electromenager: ["Plaque de cuisson", "Réfrigérateur", "Four à micro-ondes", "Cafetière filtre", "Bouilloire électrique", "TV"],
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
      "Les poubelles se trouvent dans la cour extérieure. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 42 place Saint-Étienne-le-Vieux",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (décodeur Orange)",
    "Canapé-lit",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Four à micro-ondes",
    "Réfrigérateur",
    "Cafetière filtre",
    "Bouilloire électrique",
    "Salle de douche avec WC",
    "Sèche-cheveux",
    "Fer à repasser",
    "Espace de travail dédié",
    "Chauffage",
    "Linge de lit & serviettes",
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
      "Place Saint-Sauveur et ses terrasses (~2 min)",
      "Rue Écuyère — bars & restaurants (~3 min)",
      "Église Saint-Pierre & rue Saint-Pierre — shopping (~5 min)",
      "Château de Caen (~6 min)",
      "Abbaye aux Hommes & hôtel de ville (~7 min)",
      "Port de plaisance (~12 min)",
    ],
    note: "Vous êtes au cœur du quartier Saint-Sauveur, dans le centre historique. Cafés, restaurants et commerces sont à deux pas, le marché du vendredi se tient place Saint-Sauveur, et le château, la rue Saint-Pierre et l'Abbaye aux Hommes se rejoignent facilement à pied.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
    ],
    coupDeCoeur:
      "Commencez par un café place Saint-Sauveur, puis montez au château pour la vue sur la ville. Le vendredi matin, le marché se tient juste à côté. Côté table, les adresses préférées d'Agathe : Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna, à deux pas, ou Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
