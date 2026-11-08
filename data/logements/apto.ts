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
 *   - Photos de la boîte à clés (devant la porte du logement) et des
 *     conteneurs à poubelles — à venir
 *   - Mode d'emploi du poêle à bois et du vidéoprojecteur
 *
 * Confirmé par Agathe (2026-11-04) : portail à code (1437#) ; conteneurs dans
 * l'allée, à gauche en venant de l'Apto ; jacuzzi par
 * créneaux de 4 h de 18h à 22h, 20 € / 15 € / 3e offert, à réserver idéalement
 * 24 h avant ; piscine en général de début juin à début
 * septembre selon la météo ; arrivée
 * anticipée (14h30) et départ tardif (12h max) à 10 €, sur demande, sans lien
 * Stripe (départ tardif partagé avec cinema.ts).
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
      "Arrivée autonome grâce à une boîte à clés sécurisée, située devant la porte du logement : le code vous est communiqué par message avant votre arrivée",
      "Le gîte se trouve dans un corps de ferme en rénovation avec une verrière centrale",
      "Le portail noir de la cour s'ouvre avec le code 1437# : entrez et allez jusqu'au fond de l'allée, vous êtes arrivés à l'Apto",
      "⚠️ Le logement n'est pas adapté aux personnes à mobilité réduite",
    ],
    etapes: [
      { texte: "Présentez-vous au 27 rue Éole, à Chicheboville : un corps de ferme en rénovation, avec une verrière centrale." },
      { texte: "Ouvrez le portail noir avec le code 1437#, entrez dans la cour et garez-vous sur le parking privé." },
      { texte: "Allez jusqu'au fond de l'allée : c'est le gîte Apto." },
      { texte: "La boîte à clés se trouve devant la porte du gîte : composez le code reçu par message et récupérez la clé. Bienvenue !" },
    ],
    arriveeAnticipee: cinema.arrivee.arriveeAnticipee,
    parking: cinema.arrivee.parking,
    bagages:
      "Le dépôt de bagages est possible avant ou après votre séjour, sur demande et selon disponibilité, moyennant un supplément de 10 €.",
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
        "Piscine (en général de début juin à début septembre, selon la météo)",
        "Trampoline de 5 m, balançoire et toboggan",
        "Parking privé dans la cour",
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
          "Le jacuzzi privatif, équipé d'un vidéoprojecteur, est proposé en option d'avril à octobre. Chaque créneau dure 4 heures, de 18h à 22h :\n\n• 1er créneau : 20 €\n• 2e créneau : 15 €\n• 3e créneau : offert\n\nPar exemple, 3 créneaux réservés = 12 heures d'accès au total, par tranches de 4 heures. À réserver idéalement 24 h à l'avance, selon les disponibilités : le jacuzzi est partagé avec un autre logement. Contactez-nous pour réserver vos créneaux !",
      },
      {
        titre: "🌳 Jardin, piscine & jeux",
        contenu:
          "Le jardin privé est entièrement clos :\n\n• 🍖 Terrasse en bois avec cuisine extérieure et plancha\n• 🪑 Mobilier d'extérieur et chaises longues\n• 🏊 Piscine, ouverte en général de début juin à début septembre (selon la météo)\n• 🤸 Trampoline de 5 m de diamètre, balançoire et toboggan\n\n⚠️ Les enfants doivent rester sous la surveillance d'un adulte, en particulier autour de la piscine et sur les jeux.",
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
    poubelles:
      "Les conteneurs à poubelles se trouvent dans l'allée, sur la gauche en venant du gîte. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : à déposer au point de collecte du village",
    poubellesPhoto: "/logements/apto/poubelles.jpg",
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
    "Piscine (juin → septembre)",
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
