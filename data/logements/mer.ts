import type { Logement } from "../types";
import { fleur } from "./fleur";

/**
 * Logement « Mer » — Caen, 8 bis rue Desmoueux, juste à côté de « Fleur »
 * (même rue, même immeuble/quartier). Dupliqué de Fleur ; « Autour de moi »
 * réutilise les adresses de Fleur (distances recalculées depuis ce logement).
 *
 * ⚠️ À CONFIRMER, car propre à CE logement (pour l'instant repris de Fleur ou en
 * attente) : WiFi (placeholder ci-dessous), vidéo d'accès (à ajouter, propre au
 * 8 bis), place de parking réservée, couchage, liens Stripe de départ tardif.
 */
export const mer: Logement = {
  id: "mer",
  nom: "Mer",
  adresse: "8 bis Rue Desmoueux, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=8+bis+Rue+Desmoueux+14000+Caen",
  coords: [49.1885, -0.3705],
  cover: "/logements/mer/cover.jpg",
  coverCredit:
    "Abbaye aux Hommes, Caen — Photo : Mattana / Wikimedia Commons (CC BY 2.0)",

  motAccueil: {
    fr: "Bienvenue dans l'appartement Mer, en plein cœur de Caen ! Vous êtes à deux pas de la place Saint-Sauveur, des restaurants, des commerces et des grands monuments — l'Abbaye aux Hommes et le château sont à quelques minutes à pied. Tout se découvre à pied. Très bon séjour à Caen ! 🌊",
    en: "Welcome to the Mer apartment, right in the heart of Caen! You're just steps from Place Saint-Sauveur, the restaurants, the shops and the main landmarks — the Abbaye aux Hommes and the castle are a few minutes' walk away. Everything is within walking distance. Enjoy your stay in Caen! 🌊",
    de: "Willkommen in der Wohnung Mer, mitten im Herzen von Caen! Sie wohnen nur wenige Schritte vom Place Saint-Sauveur, von Restaurants, Geschäften und den wichtigsten Sehenswürdigkeiten entfernt – die Abbaye aux Hommes und die Burg sind in wenigen Gehminuten erreichbar. Alles ist zu Fuß erreichbar. Einen schönen Aufenthalt in Caen! 🌊",
    es: "¡Bienvenido al apartamento Mer, en pleno corazón de Caen! Está a dos pasos de la plaza Saint-Sauveur, de los restaurantes, las tiendas y los principales monumentos: la Abbaye aux Hommes y el castillo están a pocos minutos a pie. Todo se recorre a pie. ¡Feliz estancia en Caen! 🌊",
    it: "Benvenuti nell'appartamento Mer, nel pieno cuore di Caen! Siete a due passi da place Saint-Sauveur, dai ristoranti, dai negozi e dai principali monumenti: l'Abbaye aux Hommes e il castello sono a pochi minuti a piedi. Tutto è raggiungibile a piedi. Buon soggiorno a Caen! 🌊",
  },

  arrivee: {
    horaire: "À partir de 17h",
    checkinExpress: [
      "Le code de la boîte à clés vous sera communiqué le jour de votre arrivée.",
      "Vous recevrez toutes les informations d'accès à l'appartement par message, avec un lien vidéo, dans la conversation de la plateforme avec laquelle vous avez réservé.",
      "Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable.",
    ],
    // video : à ajouter — vidéo d'accès propre au 8 bis (celle de Fleur montre le 14 ter).
    parking:
      "Stationnement gratuit dans les rues voisines : rue Desmoueux, avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie.\nStationnement payant (9h–12h30 et 14h–19h) : Place de la Mare, Les Fossés Saint-Julien.\nParking souterrain de la Mairie (payant), tout proche.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Salon avec canapé, pour se détendre",
        "Coin nuit avec lit double (140 × 200 cm)",
        "Cuisine entièrement équipée",
        "Salle de douche privative avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  // ⚠️ WiFi PROPRE À CE LOGEMENT — à remplacer (réseau + mot de passe du 8 bis).
  wifi: {
    reseau: "À compléter",
    motDePasse: "À compléter",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis et le lit (140 × 200 cm) est fait. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Étape 1 — Appuyez sur le bouton Power (rouge, tout en haut de la télécommande blanche) pour allumer l'écran.\nÉtape 2 — Patientez quelques secondes que le menu d'accueil apparaisse ; au besoin, allumez aussi la télécommande du décodeur.\nÉtape 3 — Avec les flèches de navigation, sélectionnez l'application « Molotov TV » et validez avec OK, ou passez par la TV d'Orange via le décodeur.\nÉtape 4 — Naviguez et choisissez vos chaînes avec cette télécommande (ou servez-vous de la télécommande du décodeur pour changer de chaîne).\n\nPour les TV avec décodeur, mettez la source sur le bon emplacement HDMI (1 ou 2). Si cela ne fonctionne pas, débranchez puis rebranchez le décodeur.",
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
          "Les fenêtres de toit (velux) ne s'ouvrent pas. Le store est électrique : une télécommande accrochée au mur permet de le fermer pour occulter la pièce et profiter de nuits dans le noir.",
      },
      {
        titre: "🧹 Aspirateur & ménage",
        contenu:
          "L'aspirateur se trouve dans le placard près de la salle de douche. Merci de rendre l'appartement propre et rangé à votre départ.",
      },
      {
        titre: "🍽️ Casse de vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Machine à café Nespresso",
      "Plaques de cuisson tactiles",
      "Réfrigérateur",
      "Micro-ondes",
      "Grille-pain",
      "Poêles & casseroles",
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
        "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du supplément correspondant. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores.",
    },
    poubelles:
      "Les déchets doivent être déposés dans les bacs situés à l'extérieur, dans la cour.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur situé au 8 Place de la Mare",
    animaux:
      "Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du règlement et du supplément correspondant.",
  },

  equipements: [
    "WiFi",
    "Lit double (140 × 200)",
    "TV (décodeur Orange)",
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
      "Rendre l'appartement propre et rangé (aspirateur dans le placard près de la salle de douche)",
      "Fermer les fenêtres et velux s'ils ont été ouverts, éteindre les lumières et baisser la température des radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé et remettre les clés dans la boîte à code",
    ],
    // ⚠️ Liens Stripe repris de Fleur — à confirmer (mêmes liens ou propres au 8 bis ?).
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
    // Mêmes adresses que « Fleur » (logement voisin) ; distances recalculées
    // automatiquement depuis les coordonnées de ce logement.
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
