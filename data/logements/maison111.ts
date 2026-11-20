import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du 111 rue Basse (près de l'Abbaye aux Dames et du port de
 * plaisance), reprises du livret StyQR « 111 » (coups de cœur d'Agathe +
 * commerces géolocalisés). Elles remplacent les catégories « du quotidien »
 * de Caen ; les autres (culture, nature, plages, sorties…) sont reprises de
 * Caen. Les coups de cœur trop éloignés (Bibiche, Maison Geslain) ne sont pas
 * repris.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
    { nom: "The People", desc: "Restaurant, avenue Victor Hugo.", coords: [49.1819092, -0.3481091] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "La Grande Bouteille", desc: "Restaurant, rue des Prairies Saint-Gilles.", coords: [49.1846082, -0.3575041] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Buquet.", coords: [49.1848381, -0.3589643] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
    { nom: "Les 3 Marches", desc: "Café, rue Basse.", coords: [49.1847382, -0.357961] },
    { nom: "Céramilatte", desc: "Café céramique, rue de l'Engannerie.", coords: [49.1817209, -0.358129] },
  ],
  bars: [
    { nom: "L'Accès Soir", desc: "Bar, quai François Mitterrand.", coords: [49.1813673, -0.3495009] },
    { nom: "Fada", desc: "Bar, quai Vendeuvre.", coords: [49.1833493, -0.3568259] },
    { nom: "Les terrasses du port (Quai Vendeuvre)", desc: "Bars et terrasses face au bassin Saint-Pierre, très agréables aux beaux jours.", coords: [49.1841, -0.356] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
  ],
  bouche: [
    { nom: "Boucherie Marcel", desc: "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.", coords: [49.1827939, -0.3565822] },
    { nom: "La Brioche Chaude", desc: "Boulangerie, rue Neuve Saint-Jean.", coords: [49.183284, -0.359432] },
    { nom: "Talemelerie Guillaume", desc: "Boulangerie-pâtisserie, rue du Vaugueux.", coords: [49.1866196, -0.3600755] },
    { nom: "Les Embruns", desc: "Poissonnerie, rue Saint-Jean.", coords: [49.1811185, -0.3581254] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
  ],
  courses: [
    { nom: "Coccinelle Express", desc: "Supérette, rue Basse (~8 min à pied).", coords: [49.184705, -0.358662] },
    { nom: "E.Leclerc Relais Piéton", desc: "Supermarché, centre commercial Les Rives de l'Orne.", coords: [49.1784359, -0.3489195] },
    { nom: "Cocci Market", desc: "Supérette, rue Saint-Jean.", coords: [49.1814724, -0.358567] },
    { nom: "Marché du dimanche matin sur le port", desc: "Le grand marché dominical le long du bassin Saint-Pierre (Quai Vendeuvre) : produits frais, primeurs, poissons.", coords: [49.1842, -0.3562] },
  ],
  tram: [
    { nom: "Arrêt de bus (rue Basse)", desc: "L'arrêt de bus le plus proche (~5 min à pied).", coords: [49.1852806, -0.3450449] },
    { nom: "Arrêt de tram « Saint-Pierre »", desc: "Arrêt de tram au pied de l'église Saint-Pierre (~10 min à pied).", coords: [49.1840696, -0.3606901] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie de la presqu'île", desc: "La pharmacie la plus proche, avenue de Tourville. Pharmacie de garde : composez le 3237.", coords: [49.1832724, -0.3530554] },
    { nom: "Grande Pharmacie de Caen", desc: "Pharmacie, rue Saint-Pierre.", coords: [49.183458, -0.36294] },
  ],
  tabac: [
    { nom: "Le Hopping", desc: "Bar-tabac, rue Basse.", coords: [49.1848898, -0.3563881] },
    { nom: "Le Balto", desc: "Bar-tabac, quai Vendeuvre.", coords: [49.1828256, -0.3558511] },
  ],
};

/** Laverie et station-service proches (catégories absentes du livret de Caen). */
const LAVERIES: Lieu[] = [
  { nom: "Lavomatique Prairies-Saint-Gilles", desc: "Laverie automatique 7j/7, rue des Prairies Saint-Gilles.", coords: [49.1845518, -0.356995] },
];
const STATIONS: Lieu[] = [
  { nom: "TotalEnergies Relais Saint-Gilles", desc: "Station-service, avenue Georges Clemenceau.", coords: [49.18925, -0.348373] },
];

/**
 * Logement « 111 » — maison de ville avec jardin, 111 rue Basse, sur trois
 * niveaux (escaliers assez raides), à ~10 min à pied du château.
 *
 * Annonces : Airbnb 1409536980815758802 (« Maison de ville avec jardin ·
 * centre de Caen », 3 voyageurs), Booking 15359475. Photos reprises de
 * l'annonce Airbnb (couverture = salon) ; photo du radiateur reprise de StyQR.
 *
 * Refait d'après le livret StyQR « 111 » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/111.md) : rez-de-chaussée =
 * salle à manger et cuisine équipée ; 1er étage = salon avec TV (Netflix),
 * lit banquette 1 personne, salle de douche et accès au jardin ; dernier étage
 * = chambre avec lit double 140x200 et dressing. Arrivée 17h, départ 10h.
 * Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message).
 *
 * ⚠️ Vidéo hébergée chez StyQR (stationnement des vélos) : rapatriée dans le livret le 16/11/2026 (fichier MP4 dans public/logements/<id>/videos).
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Jardin : la présentation StyQR et Airbnb disent « jardin privatif », mais
 *     la rubrique Vélos dit que le jardin est « partagé avec les autres
 *     résidents de l'immeuble ». Le livret dit simplement « jardin arboré ».
 *   - Lit banquette : StyQR dit « 1 personne », mais une photo Airbnb le montre
 *     déplié en lit double (banquette gigogne). Capacité gardée à 3 (Airbnb).
 *
 * Pour traduire un texte, voir data/i18n-styqr/maison111.ts (clé = texte FR exact).
 */
export const maison111: Logement = {
  id: "maison111",
  nom: "111",
  adresse: "111 Rue Basse, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=111+Rue+Basse+14000+Caen",
  coords: [49.185711, -0.3505383],
  cover: "/logements/maison111/cover.jpg",

  motAccueil:
    "Bienvenue au 111 ! Cette charmante maison de ville avec jardin vous accueille à deux pas de l'Abbaye aux Dames et du port de plaisance, à 10 minutes à pied du château et de l'hypercentre. Un petit coin de verdure rare en plein Caen. Très bon séjour ! 🌳",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "La maison se trouve au 111 rue Basse, avec sa propre porte d'entrée",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "⚠️ La maison est sur trois niveaux reliés par des escaliers assez raides",
    ],
    etapes: [
      { texte: "Rendez-vous au 111 rue Basse." },
      {
        texte:
          "La boîte à clés se trouve à côté de la porte. Composez le code reçu par message, puis baissez le loquet noir pour l'ouvrir.",
      },
      { texte: "Récupérez la clé, refermez la boîte et brouillez le code." },
      { texte: "Ouvrez la porte avec la clé. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Stationnement gratuit rue Basse, rue Varignon et rue Fresnel.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Salle à manger",
        "Cuisine entièrement équipée (plaques, four, micro-ondes, réfrigérateur, lave-vaisselle)",
      ],
      etage: [
        "Salon cosy avec TV (accès Netflix)",
        "Lit banquette pour 1 personne",
        "Salle de douche",
        "Accès direct au jardin",
      ],
      etage2: ["Chambre lumineuse avec lit double (140x200) et espace dressing"],
      exterieur: ["Jardin arboré avec table et chaises"],
    },
  },

  wifi: {
    reseau: "SFR_840F",
    motDePasse: "4fa55tuqt3gfx4dwywcv",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🪜 Escaliers & aération",
        contenu:
          "La maison s'élève sur trois niveaux reliés par des escaliers assez raides : soyez prudents, surtout avec des enfants. Une VMC (aération) est installée au rez-de-chaussée : merci de la mettre au maximum pendant vos absences.",
      },
      {
        titre: "🌳 Jardin",
        contenu:
          "Le jardin arboré est accessible directement depuis le 1er étage. Profitez-en pour un repas ou un café au calme !",
        photos: ["/logements/maison111/jardin.jpg"],
      },
      {
        titre: "🚲 Vélos",
        contenu:
          "Si vous voyagez à vélo, vous pouvez stationner vos vélos dans le jardin de la résidence (voir la vidéo). Le jardin étant partagé avec les autres résidents, il n'est pas sécurisé à 100 % : pensez à apporter vos antivols.",
        video:
          "/logements/maison111/videos/velos.mp4",
        videoPortrait: true,
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une capsule de lessive, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour tous les lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Lit banquette",
        contenu: "Le salon, au 1er étage, dispose d'un lit banquette pour une personne.",
        photos: ["/logements/maison111/banquette.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
        photos: ["/logements/maison111/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton Power (rouge), en haut à gauche de la télécommande, pour allumer l'écran.\n2. Avec cette même télécommande, choisissez vos chaînes avec les touches numérotées ou les flèches.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
        photos: ["/logements/maison111/chauffage.jpg"],
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un balai, une pelle et une balayette se trouvent dans le placard de la pièce de vie.",
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
      "Plaque de cuisson",
      "Réfrigérateur",
      "Lave-vaisselle",
      "Machine Nespresso",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 3,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur : merci de sortir pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, à l'intérieur comme dans le jardin, par égard pour le voisinage.",
    },
    poubelles:
      "Les poubelles sont à déposer dans les bacs devant la porte de la maison. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 145 rue Basse",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "WiFi",
    "TV (accès Netflix)",
    "Lit double",
    "Lit banquette (1 personne)",
    "Cuisine équipée",
    "Four",
    "Micro-ondes",
    "Lave-vaisselle",
    "Machine Nespresso",
    "Salle de douche",
    "Jardin",
    "Stationnement vélos",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre la maison propre et rangée",
      "Laisser les draps sur les lits et les serviettes utilisées dans la salle de bain : l'équipe de ménage s'en occupe",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer la maison à clé, puis remettre la clé dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Abbaye aux Dames (~3 min)",
      "Port de plaisance & marché du dimanche (~5 min)",
      "Quartier du Vaugueux — restaurants (~10 min)",
      "Église Saint-Pierre & rue Saint-Pierre — shopping (~10 min)",
      "Château de Caen (~12 min)",
      "Gare SNCF (~15 min)",
    ],
    note: "Vous êtes dans un quartier calme et résidentiel, au pied de l'Abbaye aux Dames, à quelques minutes du port de plaisance. Le château, le Vaugueux et l'hypercentre se rejoignent à pied en une dizaine de minutes.",
  },

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES },
      { key: "stations", lieux: STATIONS },
    ],
    coupDeCoeur:
      "Commencez par la visite de l'Abbaye aux Dames, juste à côté, puis descendez vers le port : le dimanche matin, le grand marché s'y installe. Côté table, les adresses préférées d'Agathe : A Contre Sens, Koboon, Le Bistrot Basque, Bœuf & Cow et Les Burgers de Colette. Pour un verre : Âmbar.",
  },

  numerosUtiles: caen.numerosUtiles,
};
