import type { Logement } from "../types";
import { saintjean } from "./saintjean";

/**
 * Descriptions « Autour de moi » à neutraliser pour ce logement : Saint-Jean
 * indiquait « le plus proche / ~X m » (juste au 144 rue Saint-Jean), or place du
 * 36ème R.I. est ~180 m plus au nord — d'autres adresses y sont plus proches.
 * La distance réelle reste affichée par la carte ; clé = nom du lieu.
 */
const DESC_OVERRIDE: Record<string, string> = {
  "Sasésu": "Cuisine vietnamienne, à deux pas.",
  "Le Valéa": "Café-bar de quartier.",
  "Pharmacie Saint-Jean": "La pharmacie la plus proche. Pharmacie de garde : composez le 3237.",
  "Aux Délices Normands": "Boulangerie-pâtisserie : pain frais et viennoiseries.",
  "Baïkal Market": "Supérette pour le dépannage du quotidien.",
};

/**
 * Logement « Sur les quais » — appartement entièrement rénové (35 m²) en plein
 * cœur de Caen, proche de la rue Saint-Jean et avec vue sur les quais (Bassin
 * Saint-Pierre). Une chambre (lit 140 × 190 + grand dressing), un salon avec
 * TV connectée et canapé-lit d'appoint, une cuisine équipée et une salle de bain
 * moderne avec lave-linge. Capacité 3 personnes. 5ᵉ étage SANS ascenseur.
 * Adresse : 9 place du 36ème Régiment d'Infanterie, 14000 Caen (à côté de
 * l'armurerie). Accès en autonomie par boîte à clés sécurisée (clé + badge) ;
 * emplacement et code communiqués par message (boîte pas encore installée → pas
 * de code pour le moment). Puis badge à l'interphone et 5 étages à pied. Guide
 * d'arrivée illustré (8 étapes) dans `arrivee.etapes`.
 *
 * « Autour de moi » réutilise les adresses de Saint-Jean (même quartier, sud de
 * la rue Saint-Jean / port) : les distances sont recalculées automatiquement
 * depuis les coordonnées de ce logement.
 *
 * ⚠️ RESTE À RENSEIGNER (par la gérante) :
 *   - WiFi (réseau + mot de passe) — pas encore installé (la fibre est prévue)
 *   - animaux : l'annonce ne le précise pas → mis à NON pour l'instant
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */
export const quais: Logement = {
  id: "quais",
  nom: "Sur les quais",
  adresse: "9 Place du 36ème Régiment d'Infanterie, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=9+Place+du+36e+Regiment+d%27Infanterie+14000+Caen",
  coords: [49.17785, -0.35612],
  cover: "/logements/quais/cover.png",

  motAccueil:
    "Bienvenue à Caen ! Vous êtes en plein centre, à deux pas de la rue Saint-Jean et de ses commerces, avec une jolie vue sur les quais. Ici, tout se fait à pied. Très bon séjour ! ⛵",

  arrivee: {
    horaire: "Arrivée entre 17h et 21h",
    checkinExpress: [
      "L'accès se fait en autonomie : suivez le guide pas à pas ci-dessous, de la récupération des clés jusqu'à la porte de l'appartement.",
      "⚠️ L'appartement est au 5ᵉ et dernier étage, sans ascenseur — pensez-y pour vos bagages.",
    ],
    etapes: [
      {
        texte:
          "L'accès se fait en autonomie : la clé et le badge d'accès se trouvent dans une boîte à clés sécurisée. Son emplacement et son code vous sont communiqués par message avant votre arrivée.",
      },
      {
        texte:
          "Une fois les clés en main, rendez-vous devant l'immeuble, à côté de l'armurerie, au 9 place du 36ème Régiment d'Infanterie. Si le portail n'est pas ouvert, passez le badge sur le bouton noir de l'interphone à droite, puis empruntez la porte piétonne qui s'ouvre automatiquement.",
        photo: "/logements/quais/arrivee-2.jpg",
      },
      {
        texte:
          "Entrez par ici et dirigez-vous vers la droite, après les boîtes aux lettres.",
        photo: "/logements/quais/arrivee-3.jpg",
      },
      {
        texte: "Dirigez-vous ensuite vers la porte noire.",
        photo: "/logements/quais/arrivee-4.jpg",
      },
      {
        texte:
          "Passez le badge devant le bouton noir de l'interphone : une fois le voyant vert, poussez la porte pour l'ouvrir.",
        photo: "/logements/quais/arrivee-5.jpg",
      },
      {
        texte:
          "Une fois dans les parties communes, montez les 5 étages : c'est tout en haut !",
        photo: "/logements/quais/arrivee-6.jpg",
      },
      {
        texte:
          "Arrivé en haut, dirigez-vous vers la porte de droite et ouvrez-la avec la clé. Bienvenue !",
        photo: "/logements/quais/arrivee-7.jpg",
      },
      {
        texte:
          "À votre départ, merci de remettre la clé et le badge dans la boîte à clés et de bien la refermer.",
      },
    ],
    parking:
      "Il n'y a pas de place de parking attitrée. Le stationnement est possible dans la rue (payant en journée, de 9h à 12h30 et de 14h à 19h). Pensez à l'appli de stationnement de la ville pour payer à distance.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Chambre avec lit double (140 × 190 cm), grand dressing, store et rideau occultant",
        "Salon cosy avec canapé-lit d'appoint et TV connectée",
        "Cuisine entièrement équipée (lave-vaisselle, four, micro-ondes, Nespresso)",
        "Salle de bain moderne avec douche et lave-linge",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    // TODO: pas encore installé — renseigner le réseau + mot de passe dès la box.
    reseau: "WiFi non disponible pour le moment",
    motDePasse: "—",
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
          "Les draps sont fournis et le lit (140 × 190 cm) est fait. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.",
      },
      {
        titre: "🛗 5ᵉ étage sans ascenseur",
        contenu:
          "L'appartement se situe au 5ᵉ étage et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages — mais l'effort est récompensé par le calme, l'absence de vis-à-vis et la vue sur les quais.",
      },
      {
        titre: "🪟 Stores & occultation",
        contenu:
          "La chambre est équipée d'un store et d'un rideau occultant pour un sommeil au calme, à l'abri de la lumière du jour. À noter : si vous utilisez le canapé-lit du salon, les fenêtres du séjour ne disposent ni de rideaux ni de volets.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Le salon dispose d'une TV connectée. Allumez l'écran avec le bouton Power de la télécommande, puis lancez l'application souhaitée (Netflix et les autres plateformes sont accessibles avec VOS identifiants personnels). Pensez à vous déconnecter de vos comptes avant votre départ.",
      },
      {
        titre: "🛁 Salle de bain",
        contenu:
          "La salle de bain, moderne, dispose d'une douche. Merci de bien refermer le rideau / la paroi pour éviter les éclaboussures.",
      },
      {
        titre: "🧺 Lave-linge",
        contenu:
          "Un lave-linge est à votre disposition. Utilisez une petite dose de lessive et lancez un programme court. Merci d'étendre le linge plutôt que de le laisser dans le tambour.",
      },
      {
        titre: "🔥 Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton on/off et réglez la température avec les flèches. Merci de limiter votre consommation.",
      },
      {
        titre: "🍳 Cuisine",
        contenu:
          "La cuisine est entièrement équipée : four, micro-ondes, plaques de cuisson avec hotte, lave-vaisselle, réfrigérateur, machine à café Nespresso (à capsules), bouilloire et grille-pain, ainsi que tout le nécessaire de cuisine.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Four",
      "Micro-ondes",
      "Plaques de cuisson",
      "Hotte",
      "Lave-vaisselle",
      "Réfrigérateur",
      "Machine à café Nespresso",
      "Bouilloire",
      "Grille-pain",
      "Lave-linge",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 3,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. L'appartement se trouve au 5ᵉ étage sans ascenseur. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, dans le logement comme dans les parties communes (couloirs, escaliers).",
    },
    poubelles:
      "Le local à poubelles se situe en sortant de l'immeuble, sur la droite, au fond de la cour (les bacs sont à l'intérieur). Merci de trier vos déchets.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur à verre au 2 Promenade de Sévigné (~2 min à pied)",
    animaux:
      "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "Vue sur les quais",
    "Chambre séparée (lit double 140 × 190)",
    "Canapé-lit d'appoint",
    "TV connectée",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Plaques de cuisson",
    "Hotte",
    "Lave-vaisselle",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Réfrigérateur",
    "Lave-linge",
    "Salle de bain avec douche",
    "Sèche-cheveux",
    "Chauffage",
    "Eau chaude",
    "Linge de lit & serviettes",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres et la porte du balcon, éteindre les lumières et baisser la température des radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre la clé et le badge dans la boîte à clés",
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
      "Rue Saint-Jean — restaurants, cafés & commerces (sur place)",
      "Port de plaisance — bars & restaurants (3 min)",
      "Église Saint-Jean (5 min)",
      "Théâtre de Caen (6–7 min)",
      "Hyper-centre — shopping, bars, restaurants (7–8 min)",
      "Quartier du Vaugueux — restaurants (8–10 min)",
      "Château de Caen (10–12 min)",
    ],
    note: "Vous êtes en plein centre-ville de Caen, sur l'une des rues les plus commerçantes, à deux pas du port de plaisance. Tout se fait à pied : restaurants, commerces, monuments. Le Mémorial de Caen est à moins de 10 minutes en voiture.",
  },

  autourDeMoi: {
    // Mêmes adresses que Saint-Jean (quartier sud rue Saint-Jean / quais) ;
    // distances recalculées automatiquement depuis les coordonnées du logement.
    // Quelques descriptions de Saint-Jean indiquaient « le plus proche / ~X m »
    // valable au 144 rue Saint-Jean : on les neutralise ici (ce logement est
    // ~180 m plus au nord), la distance exacte restant affichée par la carte.
    categories: saintjean.autourDeMoi.categories.map((c) => ({
      key: c.key,
      lieux: c.lieux.map((l) =>
        DESC_OVERRIDE[l.nom] ? { ...l, desc: DESC_OVERRIDE[l.nom] } : l,
      ),
    })),
    coupDeCoeur:
      "Vous êtes idéalement placé pour découvrir Caen à pied : flânez sur la rue Saint-Jean et ses commerces, rejoignez le château et l'Abbaye aux Hommes, puis offrez-vous une soirée dans le quartier du Vaugueux, qui concentre les meilleures tables. Pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
