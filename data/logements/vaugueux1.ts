import type { Logement } from "../types";
import { caen } from "./caen";

/**
 * Logement « Vaugueux 1 » — Caen, 18 rue Graindorge.
 *
 * Même immeuble que « Vaugueux 2 » (caen.ts) : on réutilise le quartier,
 * « Autour de moi », les numéros utiles et le départ tardif de Vaugueux 2.
 * Contenu repris du livret StyQR (my.styqr.fr/s/vaugueux1).
 *
 * Contenu rédigé en français ; seul le mot d'accueil est traduit inline.
 * Les traductions du reste (arrivée, pratique, départ) restent à compléter
 * dans data/i18n-content.ts (sinon affiché en FR).
 */
export const vaugueux1: Logement = {
  id: "vaugueux1",
  nom: "Vaugueux 1",
  adresse: "18 Rue Graindorge, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=18+Rue+Graindorge+14000+Caen",
  coords: [49.1852, -0.3599],
  cover: "/logements/vaugueux1/cover.jpg",

  // Même portail (serrure cassée) que Vaugueux 2 : on réutilise la vidéo traduite.
  videos: caen.videos,

  motAccueil: {
    fr: "Bienvenue au cœur du Vaugueux, le quartier historique et gourmand de Caen ! Ce duplex est idéalement situé : l'hyper-centre et l'université sont à 5 minutes à pied, au milieu des meilleurs restaurants de la ville. Très bon séjour à Caen ! ⚓",
    en: "Welcome to the heart of the Vaugueux, the historic and foodie district of Caen! This duplex is ideally located: the city centre and the university are a 5-minute walk away, surrounded by the city's best restaurants. Enjoy your stay in Caen! ⚓",
    de: "Willkommen im Herzen des Vaugueux, dem historischen und kulinarischen Viertel von Caen! Diese Maisonette liegt ideal: Stadtzentrum und Universität sind 5 Gehminuten entfernt, umgeben von den besten Restaurants der Stadt. Einen schönen Aufenthalt in Caen! ⚓",
    es: "¡Bienvenido al corazón del Vaugueux, el barrio histórico y gastronómico de Caen! Este dúplex está idealmente situado: el centro y la universidad están a 5 minutos a pie, rodeado de los mejores restaurantes de la ciudad. ¡Feliz estancia en Caen! ⚓",
    it: "Benvenuti nel cuore del Vaugueux, il quartiere storico e goloso di Caen! Questo duplex è in posizione ideale: il centro e l'università sono a 5 minuti a piedi, circondati dai migliori ristoranti della città. Buon soggiorno a Caen! ⚓",
  },

  arrivee: {
    horaire: "À partir de 17h",
    checkinExpress: [
      "Duplex : salon-séjour et cuisine au rez-de-chaussée, chambre à l'étage",
      "Accès par un portillon vert, au fond du passage du 18 rue Graindorge",
      "⚠️ Serrure du portail cassée : ouvrez le portail directement à la poignée (une vidéo est disponible dans Infos pratiques)",
      "Clés dans une boîte à clé à code (le code vous est communiqué le jour de l'arrivée)",
      "Arrivée anticipée possible sur demande préalable",
    ],
    etapes: [
      {
        texte:
          "Le code de la boîte à clé vous est communiqué le jour de votre arrivée, par message.",
      },
      {
        texte:
          "Rendez-vous au 18 rue Graindorge. Avancez sous le passage et empruntez les escaliers, puis tournez à droite : vous trouverez un portillon vert.",
      },
      {
        texte:
          "Sur la boîte à clés du dessus, composez le code reçu par message, appuyez simultanément sur les boutons latéraux pour l'ouvrir, récupérez les clés, puis refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "⚠️ Le portail d'entrée a une serrure cassée : la clé ne fonctionne pas, mais le portail n'est pas verrouillé. Pour l'ouvrir, actionnez directement la poignée — deux façons sont possibles, montrées dans la vidéo (page Infos pratiques). Pensez à bien refermer le portail derrière vous.",
        photo: "/logements/caen/portail-serrure.jpg",
      },
      {
        texte:
          "Une fois dans la cour, montez les escaliers et passez la porte en bois. Votre porte est la première à droite : ouvrez-la avec l'autre clé. Pour verrouiller, levez la poignée puis tournez la clé. Bienvenue chez vous !",
      },
    ],
    parking:
      "Stationnement payant en journée (de 9h à 12h30 et de 14h à 19h) dans les rues Graindorge, du Vaugueux, avenue de la Libération et Montoir-Poissonnerie.\nParkings souterrains payants : Mairie, Château, Paul Doumer.\nTarifs des parkings : indigoneo.fr",
    bagages:
      "Dépôt de bagages possible, sous réserve de disponibilité du logement et sur demande préalable.",
    decouverte: {
      rdc: [
        "Salon-séjour avec canapé-lit (140 × 200)",
        "Cuisine entièrement équipée",
        "Salle de bain",
        "WC séparés",
      ],
      etage: ["Grande chambre avec lit double (140 × 200)"],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Bbox-139BDADF",
    motDePasse: "evPj3xQ5yN3FR651VX",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour les deux couchages (lit double et canapé-lit). Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également à disposition.",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer l'écran du téléviseur (si aucune image ne s'affiche, vérifiez que la source sélectionnée est bien HDMI 1).\n2. Avec la télécommande de la box, appuyez sur le bouton On/Off pour allumer le décodeur.\n3. Utilisez cette télécommande pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🍳 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas pour la déverrouiller.",
      },
      {
        titre: "🔥 Four",
        contenu:
          "Tournez les boutons pour choisir la température et le type de cuisson.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (à capsules).",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton central (symbole Power), puis réglez la température avec les touches + et − de chaque côté. Merci de couper ou de baisser le chauffage lors de vos absences ou quand vous aérez, pour limiter la consommation.",
      },
      {
        titre: "🧹 Aspirateur",
        contenu: "L'aspirateur et la toile se situent dans la chambre.",
      },
    ],
    electromenager: [
      "Plaques de cuisson tactiles",
      "Four",
      "Machine Nespresso",
      "Réfrigérateur",
      "TV (décodeur box)",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci de veiller à la tranquillité du voisinage et de limiter les nuisances sonores, de jour comme de nuit.",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les animaux de compagnie sont acceptés (1 maximum) avec supplément. Les fêtes et soirées sont strictement interdites. Merci de respecter le calme et le voisinage.",
    },
    poubelles:
      "Les poubelles sont à déposer dans les bacs situés à côté du restaurant « Bo Bun ». S'ils ne sont pas présents, déposez vos déchets au 47 avenue de la Libération. Merci de trier avec soin : bac jaune (emballages et recyclables), bac gris (ordures ménagères), verre (conteneur avenue de la Libération).",
    animaux:
      "Les animaux de compagnie sont acceptés (1 maximum), avec un supplément tarifaire.",
  },

  equipements: [
    "WiFi",
    "TV (box)",
    "Machine Nespresso",
    "Plaques tactiles",
    "Four",
    "Réfrigérateur",
    "Chauffage",
    "Eau chaude",
    "Aspirateur",
    "Canapé-lit",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
    "Entrée indépendante",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Rendre l'appartement propre et rangé : faire la vaisselle et la ranger, vider les poubelles",
      "Laisser les draps sur les lits (l'équipe de ménage s'en charge) ; laisser les serviettes utilisées dans la salle de bain",
      "Fermer les fenêtres, éteindre les lumières et baisser les radiateurs (écran de commande dans l'entrée)",
      "Pensez à vous déconnecter de vos comptes (Netflix, Prime…) sur la TV",
      "Fermer l'appartement à clé et remettre les clés dans la boîte à code",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: caen.quartier,

  autourDeMoi: caen.autourDeMoi,

  numerosUtiles: caen.numerosUtiles,
};
