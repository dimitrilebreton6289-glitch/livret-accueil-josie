import type { Logement, Lieu, CategorySection } from "../types";
import { caen } from "./caen";
import { tilleul3 } from "./tilleul3";

/**
 * Coups de cœur d'Agathe (repris du livret StyQR, communs aux trois Tilleuls).
 * Ils s'ajoutent en tête des catégories « Autour de moi » de Tilleul 3 (même
 * immeuble), sans doublon.
 */
const COUPS_DE_COEUR: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette (rue Buquet)", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et café gourmand, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie, à Biéville-Beuville (~10 min en voiture).", coords: [49.2291049, -0.3715266] },
  ],
};

/** Catégories « Autour de moi » des Tilleuls : celles de Tilleul 3 + coups de cœur. */
export const TILLEUL_CATEGORIES: CategorySection[] = (() => {
  // Les lieux déjà présents chez Tilleul 3 sous le même nom ne sont pas doublés.
  const dejaVus = new Set(Object.values(COUPS_DE_COEUR).flat().map((l) => l.nom));
  return tilleul3.autourDeMoi.categories.map((c) =>
    COUPS_DE_COEUR[c.key]
      ? { key: c.key, lieux: [...COUPS_DE_COEUR[c.key], ...c.lieux.filter((l) => !dejaVus.has(l.nom))] }
      : c,
  );
})();

export const TILLEUL_COUP_DE_COEUR =
  "Commencez la journée par une balade dans la Vallée des Jardins, juste à côté, puis descendez par le Jardin des Plantes jusqu'au château : tout se fait à pied. Côté table, les adresses préférées d'Agathe : Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Les Burgers de Colette. Pour un verre : Nonna ou Âmbar.";

/**
 * Logement « Tilleul 2 » — studio indépendant au 38 rue des Tilleuls, 14000
 * Caen (même immeuble que Tilleul 3, 4, 8 et 9), entre le Jardin des Plantes,
 * la Vallée des Jardins et le campus 1 de l'université.
 *
 * Refait d'après le livret StyQR « Tilleul 2 » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Tilleul-2.md) : pièce principale
 * avec canapé-lit (2 personnes), coin cuisine équipé et coin repas, salle de
 * bain avec WC. Porte n°2, sur la gauche en entrant dans la résidence. WiFi,
 * machine Nespresso. Arrivée 17h, départ 10h. Animaux acceptés (un seul, avec
 * supplément). Non-fumeur, pas de fêtes.
 *
 * Annonces : l'annonce Airbnb est une annonce multi-logements « proche
 * université » (pas de numéro fiable) ; Booking : un des établissements du
 * 38 rue des Tilleuls (à répartir).
 *
 * Accès, parking, poubelles et « Autour de moi » repris de Tilleul 3 (même
 * immeuble) ; coups de cœur d'Agathe (StyQR) ajoutés en tête de liste.
 * Photos d'accès reprises de Tilleul 8 : portillon (arrivee-1), porte de la
 * résidence (arrivee-4), bacs (poubelles). Photo du radiateur : StyQR.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Photo de couverture à fournir : la couverture actuelle est la façade de
 *    l'immeuble (photo de Tilleul 8), faute de photos propres au studio.
 * ⚠️ À vérifier par Agathe :
 *   - Nom exact du réseau WiFi : StyQR affiche « XXXX_7B50 » pour Tilleul 2 et
 *     « SFR_7B50 » pour Tilleul 9 (même mot de passe) ; « SFR_7B50 » retenu.
 *   - Quelle boîte à clés est celle de Tilleul 2 (StyQR dit seulement « devant
 *     vous » à gauche de l'immeuble) : une photo avec la boîte entourée serait
 *     utile, comme pour Tilleul 3 et Tilleul 8.
 *   - Aucun code n'était écrit en clair dans StyQR (code envoyé par message).
 *
 * Pour traduire un texte, voir data/i18n-styqr/tilleul2.ts (clé = texte FR exact).
 */
export const tilleul2: Logement = {
  id: "tilleul2",
  nom: "Tilleul 2",
  adresse: "38 Rue des Tilleuls, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=38+Rue+des+Tilleuls+14000+Caen",
  coords: [49.1935284, -0.3673367],
  cover: "/logements/tilleul2/cover.jpg",

  motAccueil:
    "Bienvenue au Tilleul 2 ! Votre studio est niché dans une rue calme, à deux pas de l'université, du Jardin des Plantes et de la Vallée des Jardins. Le château et le centre historique sont à une dizaine de minutes à pied. Très bon séjour à Caen ! 🌳",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=6H2H2kW5Dtc",
    videoPortrait: true,
    checkinExpress: [
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "La boîte à clés se trouve sur le côté gauche de l'immeuble, au 38 rue des Tilleuls (passez le portillon rouge)",
      "La porte de la résidence (porte blanche sous le balcon) est toujours ouverte, pas besoin de clé",
      "Votre logement est sur votre gauche en entrant dans la résidence (porte n°2)",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      {
        texte: "Au 38 rue des Tilleuls, passez le portillon rouge, puis montez les escaliers.",
        photo: "/logements/tilleul2/arrivee-1.jpg",
      },
      { texte: "Remontez l'allée jusqu'à la maison.", photo: "/logements/tilleul2/cover.jpg" },
      { texte: "Dirigez-vous sur la gauche de l'immeuble : la boîte à clés se trouve devant vous." },
      { texte: "Composez le code, puis faites descendre le bouton noir pour ouvrir la boîte et récupérer la clé." },
      {
        texte:
          "Montez ensuite les escaliers sur votre droite pour accéder à la résidence. La porte blanche, sous le balcon, est la porte de la résidence : elle est toujours ouverte, pas besoin de clé.",
        photo: "/logements/tilleul2/arrivee-4.jpg",
      },
      { texte: "Une fois dans la résidence, votre logement est sur votre gauche : porte n°2. Bienvenue !" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking: tilleul3.arrivee.parking,
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce principale avec canapé-lit (2 personnes)",
        "Coin cuisine équipé",
        "Coin repas",
        "Salle de bain avec WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "SFR_7B50",
    motDePasse: "wxq77svaf4pyi89kpue8",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le canapé-lit. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://youtube.com/shorts/yB5Dmc_Acvk",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer le radiateur, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/tilleul2/chauffage.jpg"],
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
      {
        titre: "🐾 Animaux",
        contenu:
          "Nous accueillons avec plaisir votre animal de compagnie (un seul animal par séjour). Un supplément tarifaire est appliqué pour son accueil.",
      },
    ],
    electromenager: ["Plaques de cuisson", "Réfrigérateur", "Machine Nespresso"],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme: tilleul3.pratique.reglementInterieur.horairesCalme,
      texte: tilleul3.pratique.reglementInterieur.texte,
    },
    poubellesPhoto: "/logements/tilleul2/poubelles.jpg",
    poubelles: tilleul3.pratique.poubelles,
    animaux: tilleul3.pratique.animaux,
  },

  equipements: [
    "WiFi",
    "Canapé-lit",
    "Coin cuisine équipé",
    "Plaques de cuisson",
    "Réfrigérateur",
    "Machine Nespresso",
    "Chauffage",
    "Linge de lit & serviettes",
    "Stationnement gratuit dans les rues adjacentes",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle et la ranger",
      "Vider les poubelles dans les bacs de la rue des Tilleuls (à la sortie du portail)",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Fermer l'appartement à clé et remettre la clé dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: tilleul3.quartier,

  autourDeMoi: {
    categories: [...TILLEUL_CATEGORIES],
    coupDeCoeur: TILLEUL_COUP_DE_COEUR,
  },

  numerosUtiles: caen.numerosUtiles,
};
