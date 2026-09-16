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
 * Accès : arrivée autonome. Boîte à clés grise fixée sur la façade, juste à
 * droite de la porte bleue de l'immeuble (8 bis) — pas de code ni d'interphone
 * pour l'immeuble. Elle contient 3 clés : celle de la porte bleue de
 * l'immeuble, celle de la poignée de la porte du logement, et celle de la
 * serrure du haut (verrou), montée à l'envers — elle s'ouvre dans le sens
 * inverse des aiguilles d'une montre. Vidéo d'accès :
 * /logements/malo/arrivee/keybox.mp4 (photos 1.jpg / 2.jpg extraites de cette
 * même vidéo).
 *
 * « Autour de moi » : le logement est à ~300 m de « Monnaie » (16 rue de la
 * Monnaie), même quartier, mêmes adresses → on réutilise directement les
 * catégories de monnaie.ts (⚠️ modifier monnaie.ts modifie donc aussi ce
 * livret), en y ajoutant une catégorie « laverie », utile ici puisqu'il n'y a
 * pas de lave-linge.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER PAR AGATHE :
 *   - Photo du point poubelles (bacs gris) — le texte est en place
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */

const ADRESSE = "8 bis Rue Vauquelin, 14000 Caen";
const ITINERAIRE = "https://maps.google.com/?q=8+bis+Rue+Vauquelin+14000+Caen";
// Géocodage OpenStreetMap / Nominatim du 8 bis rue Vauquelin.
const COORDS: [number, number] = [49.18251, -0.36689];

// ── Autour de moi : mêmes adresses que « Monnaie » + les laveries ────────────
const LAVERIE: CategorySection = {
  key: "laverie",
  lieux: [
    {
      nom: "Lavomatique (rue Écuyère)",
      desc: "La laverie automatique la plus proche, en libre-service, au coin de la rue Écuyère — à moins d'une minute à pied. Utile : le logement n'a pas de lave-linge.",
      coords: [49.18206, -0.36733],
    },
    {
      nom: "Urban Wash",
      desc: "Autre laverie automatique en libre-service, allée des Quatrans, au pied du château.",
      coords: [49.18396, -0.36315],
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
    fr: "Bienvenue chez Malo ! Vous êtes en plein cœur historique de Caen, rue Vauquelin, à deux pas de la place Saint-Sauveur, des rues commerçantes et des meilleures terrasses de la ville. Poutres apparentes, parquet en chevrons et lumière du matin : tout le centre-ville se découvre à pied. Très bon séjour ! ⚓",
    en: "Welcome to Chez Malo! You're right in the heart of historic Caen, on rue Vauquelin, steps from place Saint-Sauveur, the shopping streets and the town's best terraces. Exposed beams, herringbone parquet and morning light — the whole town centre is within walking distance. Enjoy your stay! ⚓",
    de: "Willkommen bei Chez Malo! Sie wohnen mitten in der Altstadt von Caen, in der Rue Vauquelin, nur wenige Schritte vom Place Saint-Sauveur, den Einkaufsstraßen und den schönsten Terrassen der Stadt entfernt. Sichtbalken, Fischgrätparkett und Morgenlicht – die gesamte Innenstadt ist zu Fuß erreichbar. Einen schönen Aufenthalt! ⚓",
    es: "¡Bienvenido a Chez Malo! Está en pleno casco histórico de Caen, en la rue Vauquelin, a dos pasos de la place Saint-Sauveur, de las calles comerciales y de las mejores terrazas de la ciudad. Vigas vistas, parqué en espiga y luz de la mañana: todo el centro se recorre a pie. ¡Feliz estancia! ⚓",
    it: "Benvenuti a Chez Malo! Siete nel cuore storico di Caen, in rue Vauquelin, a due passi da place Saint-Sauveur, dalle vie dello shopping e dalle migliori terrazze della città. Travi a vista, parquet a spina di pesce e luce del mattino: tutto il centro è raggiungibile a piedi. Buon soggiorno! ⚓",
  },

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Immeuble à la porte bleue, 8 bis rue Vauquelin",
      "Boîte à clés grise fixée sur la façade, juste à droite de la porte bleue",
      "Le code de la boîte à clés vous est envoyé le jour de votre arrivée, vers 12h, sur la conversation",
      "La boîte contient 3 clés : porte de l'immeuble, poignée du logement, et serrure du haut (montée à l'envers : elle s'ouvre dans le sens inverse des aiguilles d'une montre)",
      "Appartement au 2ᵉ étage sans ascenseur, porte de gauche",
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    etapes: [
      {
        texte:
          "Rendez-vous au 8 bis rue Vauquelin, à Caen. L'immeuble se reconnaît à sa porte bleue et au numéro « 8 bis » sur la pierre.",
        photo: "/logements/malo/arrivee/1.jpg",
      },
      {
        texte:
          "Une boîte à clés grise est fixée sur la façade, juste à droite de la porte bleue.",
        photo: "/logements/malo/arrivee/2.jpg",
      },
      {
        texte:
          "Composez le code reçu sur la conversation le jour de votre arrivée, ouvrez la boîte comme le montre la vidéo ci-dessous, puis prenez les 3 clés à l'intérieur.",
      },
      { texte: "Ouvrez la porte bleue de l'immeuble avec la clé correspondante." },
      { texte: "Montez au 2ᵉ étage (il n'y a pas d'ascenseur) : la porte du logement est à gauche." },
      {
        texte:
          "La porte du logement s'ouvre avec les deux autres clés : une pour la poignée, une pour la serrure du haut. ⚠️ Cette dernière est montée à l'envers : tournez-la dans le sens inverse des aiguilles d'une montre pour déverrouiller.",
      },
      { texte: "Bienvenue et bon séjour ! ⚓" },
    ],
    video: "/logements/malo/arrivee/keybox.mp4",
    videoPortrait: true,
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

  // Réseau 2,4 GHz (portée maximale) ; le 5 GHz « XXXX_BF50_5GHZ » utilise le
  // même mot de passe, il est mentionné dans la section « WiFi » ci-dessous.
  wifi: {
    reseau: "XXXX_BF50",
    motDePasse: "zuf98yjym2man48prcr8",
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
          "Le logement est équipé du WiFi. Deux réseaux sont disponibles, avec le même mot de passe : XXXX_BF50 (2,4 GHz, meilleure portée dans tout l'appartement) et XXXX_BF50_5GHZ (5 GHz, plus rapide à proximité de la box). Le mot de passe est dans la rubrique WiFi de ce livret, et aussi sur l'étiquette collée sous la box.",
      },
      {
        titre: "🚶 2ᵉ étage sans ascenseur",
        contenu:
          "L'appartement se situe au 2ᵉ étage et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages.",
      },
      {
        titre: "🔑 Porte du logement",
        contenu:
          "La porte du logement s'ouvre avec deux clés : une pour la poignée, une pour la serrure du haut (verrou). ⚠️ Cette dernière est montée à l'envers : il faut tourner la clé dans le sens inverse des aiguilles d'une montre pour l'ouvrir, et donc dans le sens des aiguilles d'une montre pour la refermer.",
      },
      {
        titre: "🧺 Pas de lave-linge",
        contenu:
          "Le logement ne dispose pas de lave-linge. La laverie automatique la plus proche est le Lavomatique du coin de la rue Écuyère, en libre-service, à moins d'une minute à pied (sortez de l'immeuble, la rue Écuyère est juste au bout de la rue Vauquelin). Une autre laverie, Urban Wash, se trouve allée des Quatrans, au pied du château. Les deux sont dans « Autour de moi », rubrique Laverie.",
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
        titre: "📺 Télévision",
        contenu:
          "Deux télécommandes sont nécessaires : la télécommande Samsung (la plus petite, sans chiffres) pour la télévision, et la télécommande du décodeur (la plus longue, avec les chiffres) pour les chaînes.\n\n1. Allumez la télévision avec la télécommande Samsung : bouton rouge de mise en marche, en haut à gauche.\n2. Allumez le décodeur avec sa télécommande : bouton de mise en marche en haut à droite.\n3. Si l'écran d'accueil Samsung reste affiché, sélectionnez l'entrée du décodeur : naviguez avec le pavé circulaire de la télécommande Samsung et validez avec le bouton central.\n4. Les chaînes s'affichent : utilisez ensuite la télécommande du décodeur pour changer de chaîne (P+ / P− ou les chiffres) et régler le volume (V+ / V−).\n\nPour Netflix, Prime Video ou YouTube, utilisez directement les boutons dédiés de la télécommande Samsung. Pensez à vous déconnecter de vos comptes avant votre départ.",
        photos: [
          "/logements/malo/tv-1.jpg",
          "/logements/malo/tv-2.jpg",
          "/logements/malo/tv-3.jpg",
          "/logements/malo/tv-4.jpg",
          "/logements/malo/tv-5.jpg",
        ],
      },
      {
        titre: "🔥 Chauffage",
        contenu:
          "Chaque radiateur se règle depuis son boîtier de commande, sur le dessus, à droite (voir la photo).\n\n• Bouton rond › : change de mode. Les voyants indiquent le mode actif : ☀ Confort (chauffe à la température réglée), ECO (température abaissée, idéal la nuit ou en votre absence), PROG (programmation). Le dernier voyant, 🔧, correspond aux réglages : merci de ne pas l'utiliser.\n• Flèches ▲ / ▼ : augmentent ou baissent la température.\n• Le petit voyant en bas à gauche s'allume quand le radiateur chauffe.\n\nSi les boutons ne réagissent pas, le clavier est peut-être verrouillé (cadenas à côté des flèches) : maintenez ▲ et ▼ appuyés ensemble quelques secondes.\n\nMerci de limiter votre consommation et de repasser les radiateurs en mode ECO à votre départ.",
        photos: ["/logements/malo/chauffage.jpg"],
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
      "⚠️ Le camion poubelle ne passe pas rue Vauquelin : merci de ne jamais laisser vos sacs devant l'immeuble.\nDeux possibilités pour vos déchets ménagers, en sac fermé :\n• À tout moment : les bacs gris situés à côté des terrasses du restaurant La Médicis et du bar Le Chat Noir, juste à côté de l'immeuble.\n• Ou, après 18h uniquement : rue Saint-Pierre, rue Quincampoix ou rue Saint-Sauveur, toutes à une ou deux minutes à pied.\n🍷 Le verre ne se met pas avec les ordures ménagères : déposez-le dans le conteneur à verre du 28 rue Saint-Sauveur, à environ 2 minutes à pied.",
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
      "Faire la vaisselle et la ranger",
      "Rassembler vos déchets dans un sac fermé et le déposer en suivant les consignes « Poubelles » ci-dessous",
      "Rendre l'appartement propre et rangé",
      "Rassembler les serviettes de toilette utilisées",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Fermer l'appartement à clé (les deux serrures), puis remettre les 3 clés dans la boîte à clés",
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
      "Rue Écuyère & rue de Bras — bars et restaurants (~1 min)",
      "Place Saint-Sauveur et ses terrasses (~2 min)",
      "Rue Froide & ses commerces (~3 min)",
      "Rue Saint-Pierre (artère commerçante)",
      "Église Saint-Pierre (~6 min)",
      "Château de Caen (~8 min)",
      "Le port de plaisance & le quai Vendeuvre (~10 min)",
    ],
    note: "Vous êtes en plein cœur historique de Caen, dans une petite rue piétonne juste à côté de la rue Écuyère et de la place Saint-Sauveur — le quartier des terrasses, des bars et des restaurants. Tout le centre-ville, le château, le port et les rues commerçantes se font à pied, et le tram vous emmène à la gare en quelques minutes.",
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
