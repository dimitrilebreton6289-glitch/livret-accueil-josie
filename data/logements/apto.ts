import type { Logement } from "../types";
import { cinema } from "./cinema";

/**
 * Logement « L'Apto » — gîte éco-rénové (paille, terre, chaux) dans le même
 * corps de ferme que la Cinéma Room, 27 rue Éole à Moult-Chicheboville.
 * « Apto » signifie « domaine de la pomme » en vieux normand.
 *
 * D'après l'annonce Airbnb 50543472 (hôte Benoit) : 4 voyageurs, 2 lits
 * doubles 160 × 200, chambre en mezzanine avec filet suspendu et hamac
 * intérieur, lit enfant + lit bébé + lit parapluie, salon avec vidéoprojecteur
 * (comptes de streaming personnels, aucun abonnement fourni), bureau,
 * pompe à chaleur + poêle à bois. Jardin privé clos : terrasse bois avec
 * cuisine extérieure et plancha, chaises longues, piscine, trampoline 5 m,
 * balançoire, toboggan. Arrivée 16h, départ 10h, calme 22h → 9h.
 * ⚠️ Eau froide NON POTABLE (puits) : bouteilles fournies.
 *
 * JACUZZI : partagé avec la Cinéma Room, pour qui il est inclus. Il n'est
 * proposé à l'Apto (en supplément) que si les voyageurs de la Cinéma Room ne
 * l'utilisent pas.
 *
 * Quartier, « Autour de moi » et numéros utiles repris de cinema.ts (même
 * adresse) : les modifier là-bas.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER / VÉRIFIER PAR AGATHE :
 *   - Tarif du jacuzzi pour l'Apto (repris de l'annonce : 20 € / 15 € / offert
 *     par créneau de 4 h)
 *   - Piscine : période d'ouverture et consignes de sécurité
 *   - Boîte à clés : emplacement exact + photos d'arrivée
 *   - Poubelles : repris de la Cinéma Room (à préciser)
 *   - Liens Stripe repris des autres livrets (l'annonce indique 10 € pour
 *     l'arrivée anticipée / le dépôt de bagages)
 *   - Mode d'emploi du poêle à bois et du vidéoprojecteur
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */
export const apto: Logement = {
  id: "apto",
  nom: "L'Apto",
  adresse: cinema.adresse,
  ville: cinema.ville,
  itineraire: cinema.itineraire,
  coords: cinema.coords,
  cover: "/logements/apto/cover.jpg",

  motAccueil:
    "Bienvenue à l'Apto, « le domaine de la pomme » en vieux normand ! Ce gîte éco-rénové en paille, terre et chaux vous offre une vraie parenthèse au vert, au calme de la campagne et à seulement 15 minutes de Caen. Côté jardin : plancha, chaises longues, piscine et trampoline ; côté intérieur : poêle à bois et filet suspendu pour paresser. Il ne vous reste plus qu'à ralentir et profiter ! 🍏",

  arrivee: {
    horaire: "Arrivée autonome à partir de 16h",
    checkinExpress: [
      "Arrivée autonome grâce à une boîte à clés sécurisée : le code vous est communiqué par message avant votre arrivée",
      "Le gîte se trouve dans un corps de ferme en rénovation avec une verrière centrale",
      "Entrez dans la cour par le portail noir (électrique) et allez jusqu'au fond de l'allée : vous êtes arrivés à l'Apto",
      "⚠️ Le logement n'est pas adapté aux personnes à mobilité réduite",
    ],
    etapes: [
      { texte: "Présentez-vous au 27 rue Éole, à Chicheboville : un corps de ferme en rénovation, avec une verrière centrale." },
      { texte: "Entrez dans la cour par le portail noir et garez-vous sur le parking privé." },
      { texte: "Allez jusqu'au fond de l'allée : c'est le gîte Apto." },
      { texte: "Récupérez la clé dans la boîte à clés sécurisée, avec le code reçu par message. Bienvenue !" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 16h ou déposer vos bagages ? C'est possible sur demande (supplément), selon disponibilité. Réservez ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking: cinema.arrivee.parking,
    bagages:
      "Le dépôt de bagages est possible avant ou après votre séjour, sur demande et selon disponibilité (supplément, comme l'arrivée anticipée).",
    decouverte: {
      rdc: [
        "Salon chaleureux avec canapé, vidéoprojecteur et poêle à bois",
        "Cuisine équipée avec table à manger",
        "Espace bureau pour le télétravail",
        "Salle d'eau avec douche",
      ],
      etage: [
        "Chambre en mezzanine avec lit double 160 × 200, filet suspendu et hamac intérieur",
        "Seconde chambre avec lit double 160 × 200",
        "Lit enfant, lit bébé et lit parapluie à disposition",
      ],
      exterieur: [
        "Jardin privé entièrement clos",
        "Terrasse en bois avec cuisine extérieure, plancha et chaises longues",
        "Piscine",
        "Trampoline de 5 m, balançoire et toboggan",
        "Parking privé avec portail électrique",
      ],
    },
  },

  wifi: {
    reseau: "Apto/Harel",
    motDePasse: "Eco14370",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🚱 Eau non potable",
        contenu:
          "⚠️ L'eau du robinet provient d'un puits : elle n'est PAS potable à froid. Des bouteilles d'eau sont mises à votre disposition pour boire et cuisiner. Une fois chauffée, l'eau peut être utilisée normalement, notamment pour la toilette et la vaisselle.",
      },
      {
        titre: "🌿 Un gîte éco-rénové",
        contenu:
          "Le gîte a été rénové dans une démarche écologique, avec des matériaux naturels (paille, terre, chaux). Le confort est assuré par une pompe à chaleur (chauffage et climatisation) et un poêle à bois. Merci de limiter votre consommation et de tout baisser avant de partir.",
      },
      {
        titre: "🔥 Poêle à bois",
        contenu:
          "Le poêle à bois est à votre disposition pour des soirées conviviales. Ne laissez jamais le feu sans surveillance. Si vous l'utilisez, merci de vider les cendres froides dans le compost situé derrière le cabanon.",
      },
      {
        titre: "🎬 Vidéoprojecteur",
        contenu:
          "Le salon est équipé d'un vidéoprojecteur qui donne accès aux principales applications de streaming (Netflix, etc.).\n\n⚠️ Aucun abonnement n'est fourni : merci d'utiliser vos propres comptes, et pensez à vous déconnecter avant de partir.",
      },
      {
        titre: "🛁 Jacuzzi privatif",
        contenu:
          "Le jacuzzi privatif, équipé d'un vidéoprojecteur, est disponible d'avril à octobre, en option, par créneaux de 4 heures :\n\n• 1er créneau : 20 €\n• 2e créneau : 15 €\n• 3e créneau : offert\n\nÀ réserver au moins 24 h à l'avance, sous réserve de disponibilité (il est partagé avec l'autre gîte de la ferme). Contactez-nous pour réserver votre créneau !",
      },
      {
        titre: "🌳 Jardin, piscine & jeux",
        contenu:
          "Le jardin privé est entièrement clos :\n\n• 🍖 Terrasse en bois avec cuisine extérieure et plancha\n• 🪑 Mobilier d'extérieur et chaises longues\n• 🏊 Piscine\n• 🤸 Trampoline de 5 m de diamètre, balançoire et toboggan\n\n⚠️ Les enfants doivent rester sous la surveillance d'un adulte, en particulier autour de la piscine et sur les jeux.",
      },
      {
        titre: "🚴 Vélos",
        contenu:
          "Des vélos et une remorque enfant sont proposés à la location (10 € par vélo pour le séjour) : idéal pour explorer les marais et les petites routes de campagne. Contactez-nous pour en profiter.",
      },
      {
        titre: "🛏️ Couchages & linge",
        contenu:
          "• 🛏️ Deux lits doubles 160 × 200 avec literie confortable\n• 🕸️ Chambre en mezzanine avec filet suspendu et hamac intérieur\n• 👶 Lit enfant, lit bébé et lit parapluie\n• ➕ Oreillers et couvertures supplémentaires\n• 🧺 Draps, serviettes, savon et papier toilette fournis\n• 👕 Rangements, cintres, fer à repasser et étendoir à linge",
      },
      {
        titre: "🍳 Cuisine",
        contenu:
          "La cuisine est équipée pour préparer vos repas :\n\n• 🔥 Cuisinière gaz 5 feux et four\n• 🍲 Four à micro-ondes\n• ❄️ Réfrigérateur et mini-réfrigérateur\n• ☕ Cafetière filtre (café fourni), bouilloire et grille-pain\n• 🍴 Vaisselle, couverts, verres à vin, casseroles et poêles\n• 🧂 Huile, sel et poivre fournis\n• 🪑 Table à manger",
      },
      {
        titre: "🎲 Jeux & lecture",
        contenu:
          "Des jeux de société et des livres sont à votre disposition. Vous trouverez aussi dans le gîte deux classeurs de documentation touristique pour préparer vos sorties.",
      },
      {
        titre: "📹 Vidéosurveillance",
        contenu:
          "Une caméra de surveillance filme l'accès extérieur du logement (aucune caméra à l'intérieur).",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Vidéoprojecteur",
      "Système audio",
      "Cuisinière gaz 5 feux",
      "Four",
      "Four à micro-ondes",
      "Réfrigérateur",
      "Mini-réfrigérateur",
      "Cafetière filtre",
      "Bouilloire électrique",
      "Grille-pain",
      "Plancha",
      "Fer à repasser",
      "Sèche-cheveux",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      tournagesAutorises: false,
      horairesCalme:
        "Merci de respecter le calme entre 22h00 et 9h00, notamment dans le jardin, par égard pour le voisinage et les autres voyageurs de la ferme.",
      texte:
        "Logement non-fumeur (cigarette électronique et vapotage compris). Les fêtes et les événements sont interdits. Les animaux ne sont pas acceptés. Le branchement de voiture électrique est interdit sur place. Les photos et tournages commerciaux ne sont pas autorisés. Merci de fermer le logement à clé à votre départ.",
    },
    poubelles: cinema.pratique.poubelles,
    animaux: cinema.pratique.animaux,
  },

  equipements: [
    "WiFi",
    "Connexion Ethernet",
    "Routeur WiFi portable",
    "Vidéoprojecteur (vos comptes de streaming)",
    "Système audio",
    "Poêle à bois",
    "Climatisation (pompe à chaleur)",
    "Deux lits doubles 160 × 200",
    "Filet suspendu & hamac intérieur",
    "Lit enfant, lit bébé & lit parapluie",
    "Cuisine équipée",
    "Cuisinière gaz 5 feux",
    "Four & micro-ondes",
    "Réfrigérateur",
    "Cafetière filtre & café",
    "Grille-pain & bouilloire",
    "Espace de travail",
    "Jeux de société & livres",
    "Jardin privé clos",
    "Terrasse avec cuisine extérieure & plancha",
    "Chaises longues",
    "Piscine",
    "Trampoline, balançoire & toboggan",
    "Jacuzzi (en option)",
    "Vélos (location)",
    "Linge de lit & serviettes",
    "Étendoir à linge",
    "Sèche-cheveux",
    "Fer à repasser",
    "Parking privé gratuit",
    "Entrée privée",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Regrouper les draps, serviettes et torchons utilisés dans le bac à linge",
      "Vider les cendres froides du poêle dans le compost derrière le cabanon (si vous l'avez utilisé)",
      "Fermer les fenêtres, éteindre les lumières et le vidéoprojecteur, et baisser le chauffage ou la climatisation",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, etc.)",
      "Fermer le logement à clé et remettre les clés dans la boîte à clés",
    ],
    departTardif: cinema.depart.departTardif,
  },

  quartier: cinema.quartier,

  autourDeMoi: {
    categories: cinema.autourDeMoi.categories,
    coupDeCoeur:
      "Profitez du calme de la campagne : enfourchez un vélo pour une balade dans les marais de Chicheboville-Bellengreville et poussez jusqu'à l'observatoire pour guetter les oiseaux. De retour au gîte, allumez la plancha sur la terrasse pendant que les enfants s'amusent sur le trampoline, puis terminez la soirée au coin du poêle à bois. 🍏",
  },

  numerosUtiles: cinema.numerosUtiles,
};
