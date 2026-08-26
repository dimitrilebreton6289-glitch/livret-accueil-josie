import type { CategorySection, Logement } from "../types";
import { monnaie } from "./monnaie";

/**
 * « Chez Malo » — Caen, centre historique.
 *
 * T2 refait à neuf au 2ᵉ étage (sans ascenseur) d'une petite copropriété calme,
 * dans une rue piétonne du cœur historique. Poutres apparentes, parquet en
 * chevrons, rideaux occultants partout. 2 voyageurs maximum.
 *   • Chambre avec lit Queen Size
 *   • Salon avec canapé, TV et table à manger
 *   • Coin cuisine (plaques + micro-ondes, PAS de four ni de lave-vaisselle)
 *   • Salle de bain avec douche et WC
 *   • PAS de lave-linge → laveries automatiques listées dans « Autour de moi »
 *
 * Accès : arrivée autonome par boîte à clés, code envoyé par message.
 *
 * « Autour de moi » : le logement est à ~300 m de « Monnaie » (16 rue de la
 * Monnaie), même quartier, mêmes adresses → on réutilise directement les
 * catégories de monnaie.ts (⚠️ modifier monnaie.ts modifie donc aussi ce
 * livret), en y ajoutant une catégorie « laverie », utile ici puisqu'il n'y a
 * pas de lave-linge.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER PAR AGATHE :
 *   - ADRESSE EXACTE (rue + numéro) → met aussi à jour ITINERAIRE et COORDS
 *   - WiFi : réseau + mot de passe (provisoire : « voir le dessous de la box »)
 *   - Accès immeuble : porte libre ? code ? interphone ? (texte générique en place)
 *   - Emplacement précis de la boîte à clés + photos du guide d'arrivée
 *   - Poubelles : emplacement des conteneurs + borne à verre (texte générique)
 *   - Animaux : renseignés comme NON acceptés (l'annonce Airbnb ne les mentionne pas)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */

// ⚠️ Adresse provisoire — à remplacer par l'adresse exacte.
const ADRESSE = "Centre historique, 14000 Caen";
const ITINERAIRE = "https://maps.google.com/?q=Rue+Froide+14000+Caen";
// Point provisoire (rue Froide, cœur historique) — à affiner avec l'adresse exacte.
const COORDS: [number, number] = [49.1837, -0.3652];

// ── Autour de moi : mêmes adresses que « Monnaie » + les laveries ────────────
const LAVERIE: CategorySection = {
  key: "laverie",
  lieux: [
    {
      nom: "Urban Wash",
      desc: "Laverie automatique en libre-service, allée des Quatrans (au pied du château), à quelques minutes à pied. Utile : le logement n'a pas de lave-linge.",
      coords: [49.18396, -0.36315],
    },
    {
      nom: "Lavomatique (rue Écuyère)",
      desc: "Laverie automatique en libre-service, vers la rue Écuyère et la place Malherbe, à environ 5 min à pied.",
      coords: [49.18206, -0.36733],
    },
  ],
};

const AUTOUR_CATEGORIES: CategorySection[] = (() => {
  const cats = monnaie.autourDeMoi.categories;
  const i = cats.findIndex((c) => c.key === "courses");
  return [...cats.slice(0, i + 1), LAVERIE, ...cats.slice(i + 1)];
})();

export const malo: Logement = {
  id: "malo",
  nom: "Chez Malo",
  adresse: ADRESSE,
  ville: "Caen",
  itineraire: ITINERAIRE,
  coords: COORDS,
  cover: "/logements/malo/cover.jpg",

  motAccueil: {
    fr: "Bienvenue chez Malo ! Vous êtes en plein cœur historique de Caen, dans une rue piétonne au calme, à deux pas des rues commerçantes, du château et de l'église Saint-Pierre. Poutres apparentes, parquet en chevrons et lumière du matin : tout le centre-ville se découvre à pied. Très bon séjour ! ⚓",
    en: "Welcome to Chez Malo! You're right in the heart of historic Caen, on a quiet pedestrian street, steps from the shopping streets, the castle and Saint-Pierre church. Exposed beams, herringbone parquet and morning light — the whole town centre is within walking distance. Enjoy your stay! ⚓",
    de: "Willkommen bei Chez Malo! Sie wohnen mitten in der Altstadt von Caen, in einer ruhigen Fußgängerstraße, nur wenige Schritte von den Einkaufsstraßen, der Burg und der Kirche Saint-Pierre entfernt. Sichtbalken, Fischgrätparkett und Morgenlicht – die gesamte Innenstadt ist zu Fuß erreichbar. Einen schönen Aufenthalt! ⚓",
    es: "¡Bienvenido a Chez Malo! Está en pleno casco histórico de Caen, en una tranquila calle peatonal, a dos pasos de las calles comerciales, el castillo y la iglesia Saint-Pierre. Vigas vistas, parqué en espiga y luz de la mañana: todo el centro se recorre a pie. ¡Feliz estancia! ⚓",
    it: "Benvenuti a Chez Malo! Siete nel cuore storico di Caen, in una tranquilla via pedonale, a due passi dalle vie dello shopping, dal castello e dalla chiesa di Saint-Pierre. Travi a vista, parquet a spina di pesce e luce del mattino: tutto il centro è raggiungibile a piedi. Buon soggiorno! ⚓",
  },

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Immeuble dans une rue piétonne du centre historique",
      "Arrivée autonome : la clé se trouve dans une boîte à clés à code",
      "Le code de la boîte à clés vous est envoyé par message une fois le logement prêt",
      "Appartement au 2ᵉ étage, sans ascenseur",
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    etapes: [
      { texte: "Rendez-vous à l'adresse du logement, dans le centre historique de Caen." },
      { texte: "Entrez dans l'immeuble, puis montez au 2ᵉ étage (il n'y a pas d'ascenseur)." },
      {
        texte:
          "Une boîte à clés à code se trouve à l'entrée du logement. Composez le code reçu par message dans la conversation, puis prenez la clé.",
      },
      { texte: "Ouvrez la porte avec la clé." },
      { texte: "Bienvenue et bon séjour ! ⚓" },
    ],
    parking:
      "Rue piétonne : pas de stationnement possible devant l'immeuble.\nStationnement dans les rues voisines : rue Quincampoix, Fossés Saint-Julien et rue Demolombe.\nParkings souterrains les plus pratiques : République et Paul Doumer, à quelques minutes à pied.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Salon lumineux avec canapé, TV et table à manger (poutres apparentes, parquet en chevrons)",
        "Chambre avec lit Queen Size",
        "Coin cuisine équipé (plaques de cuisson, hotte, micro-ondes, réfrigérateur avec congélateur)",
        "Salle de bain avec douche et WC",
        "Rideaux occultants dans toutes les pièces",
      ],
      etage: [],
      exterieur: [],
    },
  },

  // ⚠️ Provisoire : les champs WiFi ne passent PAS par le dictionnaire de
  // traduction (ce sont normalement un SSID et un mot de passe bruts). D'où la
  // mention bilingue, en attendant les vrais identifiants.
  wifi: {
    reseau: "Voir sous la box · See under the router",
    motDePasse: "Voir sous la box · See under the router",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, savon, gel douche et shampooing, une capsule de café par personne ainsi que du thé.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis et les lits sont faits à votre arrivée. Chaque voyageur dispose d'une serviette de toilette. Le linge est de qualité hôtelière, traité par une blanchisserie professionnelle.",
      },
      {
        titre: "📶 WiFi",
        contenu:
          "Le logement est équipé du WiFi. Le nom du réseau et le mot de passe sont indiqués sur l'étiquette collée sous la box, dans le logement.",
      },
      {
        titre: "🚶 2ᵉ étage sans ascenseur",
        contenu:
          "L'appartement se situe au 2ᵉ étage et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages.",
      },
      {
        titre: "🧺 Pas de lave-linge",
        contenu:
          "Le logement ne dispose pas de lave-linge. Plusieurs laveries automatiques en libre-service se trouvent à quelques minutes à pied : retrouvez-les dans « Autour de moi », rubrique Laverie.",
      },
      {
        titre: "🍳 Cuisine",
        contenu:
          "Le coin cuisine est équipé de plaques de cuisson avec hotte, d'un four à micro-ondes et d'un réfrigérateur avec congélateur, ainsi que du nécessaire de cuisine (casseroles et poêles, vaisselle, couverts, verres à vin, huile, sel et poivre). Il n'y a ni four traditionnel ni lave-vaisselle : merci de laver et de ranger la vaisselle après usage.",
      },
      {
        titre: "☕ Petit-déjeuner",
        contenu:
          "Une cafetière, une bouilloire et un grille-pain sont à votre disposition. Une capsule de café par personne et du thé vous sont offerts pour démarrer.",
      },
      {
        titre: "🔥 Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton on/off et réglez la température. Merci de limiter votre consommation et de baisser le chauffage à votre départ.",
      },
      {
        titre: "🌙 Rideaux occultants",
        contenu:
          "Toutes les pièces sont équipées de rideaux occultants, pour des nuits reposantes et des matinées au calme.",
      },
      {
        titre: "👶 Lit parapluie",
        contenu:
          "Un lit parapluie est disponible dans le logement, si vous voyagez avec un bébé. Merci de nous le signaler à la réservation.",
      },
      {
        titre: "🤫 Rue piétonne & voisinage",
        contenu:
          "L'immeuble est une petite copropriété calme. Merci de veiller à la tranquillité du voisinage, dans le logement comme dans les parties communes (couloirs, escaliers), en particulier entre 22h00 et 8h00.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaques de cuisson",
      "Hotte",
      "Micro-ondes",
      "Réfrigérateur",
      "Congélateur",
      "Cafetière",
      "Bouilloire",
      "Grille-pain",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Capacité maximale : 2 voyageurs. Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les animaux ne sont pas acceptés. Les fêtes et les soirées sont strictement interdites. L'appartement se situe au 2ᵉ étage (sans ascenseur), dans une petite copropriété calme : merci de veiller à la tranquillité du voisinage, dans le logement comme dans les parties communes.",
    },
    poubelles:
      "Merci de descendre vos déchets ménagers, en sac fermé, dans les conteneurs les plus proches de l'immeuble, pendant et à la fin de votre séjour.\n🍷 Le verre ne se met pas avec les ordures ménagères : déposez-le dans la borne à verre la plus proche.",
    animaux:
      "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Chambre séparée (lit Queen Size)",
    "Cuisine équipée",
    "Plaques de cuisson",
    "Hotte",
    "Micro-ondes",
    "Réfrigérateur",
    "Congélateur",
    "Cafetière",
    "Bouilloire",
    "Grille-pain",
    "Salle de bain avec douche",
    "Sèche-cheveux",
    "Chauffage",
    "Eau chaude",
    "Rideaux occultants",
    "Linge de lit & serviettes",
    "Lit parapluie",
    "Dépôt de bagages",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Rassembler les serviettes de toilette utilisées",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Fermer l'appartement à clé, puis remettre la clé dans la boîte à clés",
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
      "Rue Froide & ses commerces",
      "Rue Saint-Pierre (artère commerçante)",
      "Église Saint-Pierre (~3 min)",
      "Château de Caen (~5 min)",
      "Le port de plaisance & le quai Vendeuvre (~7 min)",
    ],
    note: "Vous êtes en plein cœur historique de Caen, dans une rue piétonne au calme. Tout le centre-ville, le château, le port et les rues commerçantes se font à pied, et le tram vous emmène à la gare en quelques minutes.",
  },

  autourDeMoi: {
    categories: AUTOUR_CATEGORIES,
    coupDeCoeur:
      "Commencez par flâner dans la rue Froide et les ruelles pavées du vieux Caen, juste à côté, puis montez au château pour la vue et le Musée des Beaux-Arts. Le soir, le quartier du Vaugueux et les terrasses du port sont les meilleures adresses pour dîner. Et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
