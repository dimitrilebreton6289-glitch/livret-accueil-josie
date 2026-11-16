import type { Logement, CategorySection } from "../types";
import { caen } from "./caen";

/**
 * « Autour de moi » à Ouistreham Riva-Bella, repris des adresses géolocalisées
 * du livret StyQR « Ouistreham » (export du 2026-11-16). Seules les adresses de
 * Ouistreham et des environs sont gardées (+ le coup de cœur d'Agathe, la
 * poissonnerie Maison Geslain). Distances recalculées par la carte.
 */
const CATEGORIES: CategorySection[] = [
  {
    key: "plages",
    lieux: [
      { nom: "Plage de Riva-Bella", desc: "La grande plage de sable de Ouistreham (Sword Beach), juste au bout de la rue.", coords: [49.2914044, -0.2662163] },
      { nom: "Plage de Colleville-Montgomery", desc: "Plage voisine, côté ouest, accessible à pied par le front de mer.", coords: [49.2934522, -0.2816112] },
    ],
  },
  {
    key: "culture",
    lieux: [
      { nom: "Musée du N°4 Commando", desc: "Musée consacré aux commandos français et britanniques du 6 juin 1944.", coords: [49.288617, -0.25965] },
      { nom: "Le Grand Bunker — Musée du Mur de l'Atlantique", desc: "Ancien poste de commandement allemand de 5 étages, reconstitué.", coords: [49.287449, -0.252313] },
      { nom: "Phare de Ouistreham", desc: "Le phare rouge et blanc, à l'entrée du port.", coords: [49.2799143, -0.2478847] },
      { nom: "La Grange aux Dîmes", desc: "Grange médiévale près de l'église, lieu d'expositions.", coords: [49.2766662, -0.2577796] },
      { nom: "Office de tourisme de Ouistreham", desc: "Plans, visites et idées de sorties, près du casino.", coords: [49.2890142, -0.2580932] },
    ],
  },
  {
    key: "loisirs",
    lieux: [
      { nom: "Casino Barrière", desc: "Casino, restaurant et cinéma face à la mer.", coords: [49.2892018, -0.2588246] },
      { nom: "Thalazur Ouistreham", desc: "Thalassothérapie, spa et espace marin.", coords: [49.2895063, -0.2602236] },
      { nom: "Piscine Aquabella", desc: "Piscine de Ouistreham.", coords: [49.2891721, -0.2569553] },
      { nom: "Centre nautique de Ouistreham", desc: "Voile, char à voile et activités nautiques.", coords: [49.2802717, -0.2470386] },
      { nom: "Le Mémorial de Caen", desc: "Le grand musée pour la Paix (Seconde Guerre mondiale, Débarquement), à ~20 min en voiture.", coords: [49.1973431, -0.3839795] },
    ],
  },
  {
    key: "nature",
    lieux: [
      { nom: "Port de plaisance de Ouistreham", desc: "Balade le long du canal et des bateaux, jusqu'au phare.", coords: [49.2792746, -0.2490285] },
      { nom: "Le Bois du Caprice", desc: "Petit bois pour une balade au calme.", coords: [49.2716, -0.281207] },
    ],
  },
  {
    key: "restaurants",
    lieux: [
      { nom: "La Moulerie", desc: "Moules et fruits de mer, près du casino.", coords: [49.2884282, -0.2587929] },
      { nom: "La Voile Blanche", desc: "Restaurant face à la mer.", coords: [49.2889246, -0.2568883] },
      { nom: "L'Entrepotes", desc: "Restaurant, avenue de la mer.", coords: [49.2850715, -0.2595346] },
      { nom: "Au Cheval Blanc", desc: "Restaurant, avenue de la mer.", coords: [49.2845413, -0.2600376] },
      { nom: "La Table d'Hôtes", desc: "Cuisine française.", coords: [49.283482, -0.2590416] },
      { nom: "Mamma Mia", desc: "Pizzeria.", coords: [49.2865754, -0.2591829] },
      { nom: "Le Channel", desc: "Restaurant sur le port.", coords: [49.2788872, -0.251575] },
      { nom: "L'Auberge", desc: "Restaurant sur le port.", coords: [49.2789821, -0.2514237] },
    ],
  },
  {
    key: "restorapide",
    lieux: [
      { nom: "Les Délices de la Plage", desc: "Restauration rapide, avenue de la mer.", coords: [49.2873932, -0.2585487] },
      { nom: "Crousti' Gourmet", desc: "Restauration rapide, avenue de la mer.", coords: [49.2871652, -0.2584108] },
      { nom: "Ô 54", desc: "Restauration rapide, avenue de la mer.", coords: [49.2858313, -0.2590149] },
      { nom: "L'Accostage", desc: "Café face à la mer.", coords: [49.289009, -0.2570226] },
    ],
  },
  {
    key: "bars",
    lieux: [
      { nom: "Oxo Bar", desc: "Bar, avenue de la mer.", coords: [49.286145, -0.2589766] },
      { nom: "Le Phare", desc: "Bar sur le port.", coords: [49.2787066, -0.2504979] },
      { nom: "Le Goéland", desc: "Bar sur le port.", coords: [49.2794907, -0.2510281] },
    ],
  },
  {
    key: "courses",
    lieux: [
      { nom: "Carrefour City", desc: "Supérette, près de l'avenue de la mer.", coords: [49.2845317, -0.2612811] },
      { nom: "Auchan", desc: "Supermarché, à l'ouest de Riva-Bella.", coords: [49.2903014, -0.2848278] },
      { nom: "Carrefour Market", desc: "Supermarché, au sud de la ville.", coords: [49.26819, -0.26003] },
      { nom: "Marché de Riva-Bella", desc: "Le marché du mardi et du samedi matin.", coords: [49.2867419, -0.2588085] },
      { nom: "Marché d'été", desc: "Marché du vendredi et du dimanche matin, d'avril à octobre.", coords: [49.2848529, -0.2617263] },
    ],
  },
  {
    key: "bouche",
    lieux: [
      { nom: "Banette", desc: "Boulangerie.", coords: [49.2855333, -0.2602586] },
      { nom: "Aux Délices de Riva", desc: "Boulangerie.", coords: [49.2854563, -0.2602996] },
      { nom: "Boulangerie l'Épi d'Or", desc: "Boulangerie.", coords: [49.2862777, -0.258938] },
      { nom: "Le Cri du Radis", desc: "Fromagerie et primeur.", coords: [49.2849026, -0.2598598] },
      { nom: "Le Caveau Normand", desc: "Caviste.", coords: [49.2846205, -0.2600872] },
      { nom: "Au Vivier", desc: "Poissonnerie.", coords: [49.293703, -0.2851858] },
      { nom: "Marché aux poissons", desc: "Poissons et fruits de mer de la pêche locale, sur le port.", coords: [49.2804381, -0.2498756] },
      { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie, à Biéville-Beuville (~15 min en voiture).", coords: [49.2291049, -0.3715266] },
    ],
  },
  {
    key: "tabac",
    lieux: [
      { nom: "Le Havane", desc: "Bar-tabac, avenue de la mer.", coords: [49.2852989, -0.2596444] },
    ],
  },
  {
    key: "laverie",
    lieux: [
      { nom: "La Belle Laverie", desc: "Laverie automatique, près de l'avenue de la mer.", coords: [49.2844325, -0.2609908] },
    ],
  },
  {
    key: "transports",
    lieux: [
      { nom: "Arrêt de bus le plus proche", desc: "Bus vers Caen et la Côte de Nacre.", coords: [49.2850437, -0.262886] },
      { nom: "Gare maritime de Ouistreham (Brittany Ferries)", desc: "Ferries vers Portsmouth (Angleterre), sur le port.", coords: [49.279, -0.248] },
      { nom: "Taxis de Ouistreham", desc: "Taxis.", coords: [49.2836149, -0.2602303] },
    ],
  },
  {
    key: "sante",
    lieux: [
      { nom: "Pharmacie de la Plage", desc: "Pharmacie, avenue de la mer. Pharmacie de garde : composez le 3237.", coords: [49.2863169, -0.2591104] },
      { nom: "Pharmacie du Port", desc: "Pharmacie, près du port.", coords: [49.2796016, -0.2510407] },
      { nom: "Pôle santé de Ouistreham", desc: "Médecins et professionnels de santé.", coords: [49.2762665, -0.266918] },
    ],
  },
  {
    key: "hopital",
    lieux: [
      { nom: "CHU Caen Normandie", desc: "Centre hospitalier universitaire (urgences), à ~20 min en voiture.", coords: [49.2050156, -0.3575204] },
    ],
  },
];

/**
 * Logement « Ouistreham » — appartement de plain-pied (rez-de-chaussée) avec
 * jardin privé et garage, au 28 boulevard Maréchal Joffre, à 30 m de la plage de
 * Riva-Bella. Salon avec canapé-lit (140 × 190), chambre avec lit double
 * (140 × 200), cuisine équipée avec lave-vaisselle, salle de bain avec douche et
 * WC, machine à laver. 4 voyageurs.
 *
 * Annonce : Airbnb 1076648468744306836 (« F2 à 30m de la mer · jardin & garage »).
 * Photos reprises de l'annonce (couverture = pièce de vie).
 *
 * Refait d'après le livret StyQR « Ouistreham » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Ouistreham.md). Arrivée 17h,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas
 * de fêtes. PAS DE WIFI. Aucun code en clair dans le livret StyQR. Vidéos
 * YouTube (arrivée + canapé-lit) reprises telles quelles.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Café : StyQR dit « café et filtres non fournis », l'annonce Airbnb dit
 *     « café et thé offerts à votre arrivée ». Le livret suit StyQR.
 *   - Verre : conteneur « au 51 avenue Andry » (repris de StyQR).
 *
 * Pour traduire un texte, voir data/i18n-styqr/ouistreham.ts (clé = texte FR exact).
 */
export const ouistreham: Logement = {
  id: "ouistreham",
  nom: "Ouistreham",
  adresse: "28 Boulevard Maréchal Joffre, 14150 Ouistreham",
  ville: "Ouistreham",
  itineraire: "https://maps.google.com/?q=28+Boulevard+Mar%C3%A9chal+Joffre+14150+Ouistreham",
  coords: [49.2907888, -0.2668927],
  cover: "/logements/ouistreham/cover.jpg",

  motAccueil:
    "Bienvenue à Ouistreham ! Votre appartement de plain-pied, avec jardin privé et garage, est à quelques pas de la grande plage de Riva-Bella. Commerces, restaurants et casino sont à une dizaine de minutes à pied. Très bon séjour ! 🌊",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/pitSKMZkBts",
    videoPortrait: true,
    checkinExpress: [
      "Appartement de plain-pied, au rez-de-chaussée de la résidence, avec jardin privé et garage",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 28 boulevard Maréchal Joffre, à Ouistreham." },
      { texte: "Empruntez l'allée, puis tournez à gauche et dirigez-vous vers le garage, au fond à droite." },
      {
        texte:
          "La boîte à clés se trouve à droite du garage. Composez le code reçu par message, puis appuyez vers le bas sur le bouton central pour l'ouvrir. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      { texte: "Ouvrez le garage avec la clé : vous pouvez y garer votre voiture.", photo: "/logements/ouistreham/garage.jpg" },
      {
        texte:
          "Allez ensuite à la porte de l'immeuble et passez le badge devant l'interphone. Pour ouvrir la porte principale, appuyez fermement sur le bouton situé sur le mur, juste à droite de la porte.",
      },
      { texte: "Votre appartement se trouve au rez-de-chaussée. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Une place privée vous est réservée : le garage fermé, situé dans la résidence (voir la vidéo d'arrivée). Vous pouvez aussi rejoindre le garage par le jardin, avec l'autre clé du trousseau.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Salon spacieux avec canapé-lit (2 personnes, 140 × 190)",
        "Espace repas et cuisine entièrement équipée (avec lave-vaisselle)",
        "Chambre indépendante avec lit double (140 × 200) et volet roulant",
        "Salle de bain avec douche et WC",
        "Machine à laver",
      ],
      etage: [],
      exterieur: [
        "Jardin privé avec terrasse, table et chaises longues",
        "Garage privé fermé",
      ],
    },
  },

  wifi: {
    reseau: "Pas de WiFi pour le moment",
    motDePasse: "Prévoyez votre connexion mobile (4G/5G)",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit double et le canapé-lit. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "📶 WiFi",
        contenu:
          "Le logement n'est pas équipé du WiFi. Prévoyez votre connexion mobile (4G/5G) pour vos usages internet.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://www.youtube.com/watch?v=yB5Dmc_Acvk",
        photos: ["/logements/ouistreham/canape-lit.jpg"],
      },
      {
        titre: "☕ Café",
        contenu:
          "Une cafetière classique à filtre (café moulu) et une machine Dolce Gusto (capsules) sont à votre disposition. Le café (moulu et capsules) et les filtres ne sont pas fournis.",
        photos: ["/logements/ouistreham/cafe.jpg"],
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer le radiateur, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🍽️ Lave-vaisselle",
        contenu:
          "Un lave-vaisselle est à votre disposition dans la cuisine. À votre départ, merci de laisser sa porte entrouverte pour éviter les mauvaises odeurs et l'humidité.",
      },
      {
        titre: "🧺 Machine à laver",
        contenu:
          "Une machine à laver est installée dans le logement. À votre départ, merci de laisser le capot ouvert pour aérer la cuve.",
      },
      {
        titre: "🚿 Salle de bain",
        contenu:
          "La salle de bain privative dispose d'une douche. À votre départ, merci de laisser ouvertes la porte de la douche et celle de la salle de bain pour évacuer l'humidité.",
      },
      {
        titre: "🌳 Jardin",
        contenu:
          "Profitez du jardin privé : terrasse avec table et chaises, et chaises longues sur la pelouse. Le garage est aussi accessible depuis le jardin.",
        photos: ["/logements/ouistreham/jardin.jpg"],
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaques de cuisson",
      "Four",
      "Micro-ondes",
      "Réfrigérateur",
      "Lave-vaisselle",
      "Lave-linge",
      "Cafetière filtre",
      "Machine Dolce Gusto",
      "Grille-pain",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer dans le local situé à l'extérieur de la résidence : en sortant de la résidence, prenez à droite, puis encore à droite. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 51 avenue Andry",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "Jardin privé",
    "Garage privé",
    "Chambre séparée (lit double 140 × 200)",
    "Canapé-lit (140 × 190)",
    "Cuisine équipée",
    "Plaques de cuisson",
    "Four",
    "Micro-ondes",
    "Réfrigérateur",
    "Lave-vaisselle",
    "Lave-linge",
    "Cafetière filtre",
    "Machine Dolce Gusto",
    "Grille-pain",
    "Salle de bain avec douche",
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
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Laisser les draps sur les lits et les serviettes utilisées dans la salle de bain",
      "Laisser entrouverts le lave-vaisselle, le capot de la machine à laver et les portes de la salle de bain",
      "Fermer l'appartement et le garage à clé, puis remettre les clés dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Plage de Riva-Bella (~1 min)",
      "Thalasso & piscine (~7 min)",
      "Casino, office de tourisme & musée du N°4 Commando (~8 min)",
      "Avenue de la mer — commerces, restaurants & marché (~10 min)",
      "Le Grand Bunker — musée du Mur de l'Atlantique (~15 min)",
      "Port de plaisance & phare (~25 min)",
    ],
    note: "Vous êtes à Ouistreham Riva-Bella, station balnéaire de la Côte de Nacre, juste derrière la plage (Sword Beach, l'une des plages du Débarquement). L'avenue de la mer concentre commerces, restaurants et marchés. Caen est à 20 minutes en voiture.",
  },

  autourDeMoi: {
    categories: CATEGORIES,
    coupDeCoeur:
      "Profitez de la plage de Riva-Bella, juste au bout de la rue, et d'une balade sur le front de mer jusqu'au casino. Le mardi et le samedi matin, ne manquez pas le marché ; sur le port, le marché aux poissons propose la pêche du jour. Côté histoire, visitez le musée du N°4 Commando et le Grand Bunker. Et pour les amateurs de poisson, le coup de cœur d'Agathe : la poissonnerie Maison Geslain, à Biéville-Beuville.",
  },

  numerosUtiles: caen.numerosUtiles,
};
