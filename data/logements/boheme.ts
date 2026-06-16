import type { Logement } from "../types";
import { fleur } from "./fleur";

/**
 * Logement « Bohème » — Caen, 8 bis rue Desmoueux (même immeuble que « Mer »).
 * Dupliqué de Mer ; « Autour de moi » réutilise les adresses de Fleur (distances
 * recalculées depuis ce logement).
 *
 * Spécificité : espace nuit en MEZZANINE (hauteur sous plafond réduite,
 * recommandée aux enfants dès 8 ans). Pas de TV mentionnée dans l'annonce.
 * WiFi et liens Stripe identiques à Fleur/Mer. Capacité estimée à 3 (à confirmer).
 */
export const boheme: Logement = {
  id: "boheme",
  nom: "Bohème",
  adresse: "8 bis Rue Desmoueux, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=8+bis+Rue+Desmoueux+14000+Caen",
  coords: [49.1885, -0.3705],
  cover: "/logements/boheme/cover2.jpg",

  motAccueil: {
    fr: "Bienvenue dans l'appartement Bohème, à deux pas du centre de Caen et de la place Saint-Sauveur ! Ce logement atypique, avec sa mezzanine, vous charmera — entouré de restaurants, de bars et de commerces, tout se découvre à pied. Très bon séjour à Caen ! 🎨",
    en: "Welcome to the Bohème apartment, just steps from the centre of Caen and Place Saint-Sauveur! This characterful flat, with its mezzanine, will charm you — surrounded by restaurants, bars and shops, everything is within walking distance. Enjoy your stay in Caen! 🎨",
    de: "Willkommen in der Wohnung Bohème, nur wenige Schritte vom Zentrum von Caen und dem Place Saint-Sauveur entfernt! Diese außergewöhnliche Wohnung mit ihrer Galerie (Mezzanin) wird Sie bezaubern — umgeben von Restaurants, Bars und Geschäften ist alles zu Fuß erreichbar. Einen schönen Aufenthalt in Caen! 🎨",
    es: "¡Bienvenido al apartamento Bohème, a dos pasos del centro de Caen y de la plaza Saint-Sauveur! Este alojamiento con encanto, con su altillo (mezzanine), le enamorará — rodeado de restaurantes, bares y comercios, todo se recorre a pie. ¡Feliz estancia en Caen! 🎨",
    it: "Benvenuti nell'appartamento Bohème, a due passi dal centro di Caen e da place Saint-Sauveur! Questo alloggio caratteristico, con il suo soppalco (mezzanine), vi conquisterà — circondato da ristoranti, bar e negozi, tutto è raggiungibile a piedi. Buon soggiorno a Caen! 🎨",
  },

  arrivee: {
    horaire: "À partir de 17h",
    checkinExpress: [
      "Le code de la boîte à clés vous sera communiqué le jour de votre arrivée.",
      "Vous recevrez toutes les informations d'accès à l'appartement par message, avec un lien vidéo, dans la conversation de la plateforme avec laquelle vous avez réservé.",
      "Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable.",
    ],
    video: "https://youtube.com/shorts/s5HVlo7Qq3M",
    parking:
      "Stationnement gratuit dans la rue de l'appartement (rue Desmoueux) et les rues voisines : avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie. Selon l'heure d'arrivée, il n'est pas toujours évident de trouver une place.\nStationnement payant (9h–12h30 et 14h–19h, gratuit les dimanches et jours fériés) : rue des Fossés Saint-Julien, Place de la Mare.\nParking souterrain de la Mairie (payant), tout proche.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Séjour lumineux avec coin salon et espace nuit",
        "Mezzanine aménagée pour un couchage supplémentaire (hauteur réduite : 68–90 cm, recommandée aux enfants dès 8 ans)",
        "Cuisine équipée et coin repas",
        "Salle de douche privative avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-2E40",
    motDePasse: "Qn7FuSoiy7c9ENdkgL",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🪜 Mezzanine (couchage d'appoint)",
        contenu:
          "L'espace nuit en mezzanine offre un couchage supplémentaire. ⚠️ La hauteur sous plafond y est réduite (68 cm au plus bas, 90 cm au plus haut) : cet espace est recommandé pour des enfants à partir de 8 ans. Accédez-y avec prudence.",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis et le lit est fait. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Allumez la télévision avec l'unique télécommande (bouton Power). Il n'y a pas de décodeur : le téléviseur est directement connecté à l'application TV d'Orange. Utilisez les flèches et le bouton OK pour naviguer et choisir vos chaînes.",
      },
      {
        titre: "🔥 Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton on/off et réglez la température avec les flèches. Merci de limiter votre consommation.",
      },
      {
        titre: "🍳 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas afin de la déverrouiller.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (à capsules).",
      },
      {
        titre: "🪟 Fenêtres de toit (velux)",
        contenu:
          "Les fenêtres de toit (velux) ne s'ouvrent pas. Le store est électrique : une télécommande, accrochée au mur à côté du placard sur la droite, permet de le fermer pour occulter la pièce et profiter de nuits dans le noir.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
      {
        titre: "🐾 Animaux",
        contenu:
          "Les animaux de compagnie sont acceptés (1 animal maximum). Le supplément correspondant est à régler directement sur la plateforme de réservation.",
      },
    ],
    electromenager: [
      "Machine à café Nespresso",
      "Plaques de cuisson tactiles",
      "Réfrigérateur",
      "Micro-ondes",
      "Grille-pain",
      "Poêles & casseroles",
      "TV (Orange)",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du supplément correspondant. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores.",
    },
    poubelles:
      "Les déchets doivent être déposés dans les bacs situés à l'extérieur, dans la cour.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur situé au 8 Place de la Mare",
    animaux:
      "Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du règlement et du supplément correspondant.",
  },

  equipements: [
    "WiFi",
    "Mezzanine (couchage d'appoint)",
    "Coin repas",
    "TV (Orange)",
    "Machine Nespresso",
    "Plaques de cuisson tactiles",
    "Réfrigérateur",
    "Micro-ondes",
    "Grille-pain",
    "Chauffage",
    "Eau chaude",
    "Aspirateur",
    "Linge de lit & serviettes",
    "Salle de douche privative",
    "Animaux acceptés (supplément)",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles dans les bacs de la cour",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres et velux s'ils ont été ouverts, éteindre les lumières et baisser la température des radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé et remettre les clés dans la boîte à code",
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
  },

  quartier: {
    aPied: [
      "Place Saint-Sauveur — bars & restaurants (3 min)",
      "Hyper-centre — shopping, bars, restaurants (3–4 min)",
      "Mairie & Abbaye aux Hommes (3–4 min)",
      "Château de Caen (5 min)",
      "Quartier du Vaugueux — restaurants (10 min)",
      "Port de Caen — bars & restaurants (10–12 min)",
    ],
    note: "Vous êtes en plein centre-ville de Caen, à deux pas des restaurants, des commerces et des principaux monuments. Le Mémorial de Caen est à moins de 10 minutes en voiture.",
  },

  autourDeMoi: {
    // Mêmes adresses que « Fleur »/« Mer » (même rue) ; distances recalculées.
    categories: fleur.autourDeMoi.categories,
    coupDeCoeur:
      "À deux pas de chez vous : le Jardin des Plantes (gratuit, ~2 min) pour une pause au vert, et la place Saint-Sauveur avec ses terrasses. L'Abbaye aux Hommes et le château se rejoignent à pied. Le soir, le quartier du Vaugueux concentre les meilleures tables — et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
