import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses réellement proches du 144 rue Saint-Jean (extrémité sud, près du port),
 * géolocalisées via OpenStreetMap. Elles remplacent les catégories « du quotidien »
 * de Caen (restaurants, restauration rapide, bars, boulangeries, courses, tram/bus,
 * pharmacies) ; les autres catégories (culture, nature, plages, excursions…) sont
 * reprises de Caen. Les distances sont recalculées depuis les coordonnées du logement.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Sasésu", desc: "Cuisine vietnamienne, le restaurant le plus proche (~20 m).", coords: [49.17905, -0.35733] },
    { nom: "Yatai Sushis", desc: "Sushis et cuisine japonaise, à deux pas.", coords: [49.1793, -0.3572] },
    { nom: "Bayon", desc: "Cuisine asiatique.", coords: [49.17888, -0.35713] },
    { nom: "Les Quatre Bouchons", desc: "Bistrot de cuisine française.", coords: [49.17861, -0.35721] },
    { nom: "Le Palais de Bombay", desc: "Spécialités indiennes.", coords: [49.17863, -0.35649] },
    { nom: "Le Grenier à Crêpes", desc: "Crêperie-galetterie.", coords: [49.17843, -0.35666] },
    { nom: "Amalfi", desc: "Pizzeria italienne.", coords: [49.17834, -0.35617] },
    { nom: "Le Chef et sa Femme", desc: "Table française réputée du quartier.", coords: [49.17794, -0.3583] },
  ],
  restorapide: [
    { nom: "Crousty Games", desc: "Burgers et plats à emporter, tout proche.", coords: [49.17895, -0.35677] },
    { nom: "202", desc: "Kebab et grillades à emporter.", coords: [49.17795, -0.35614] },
    { nom: "Mc Boho", desc: "Burgers maison.", coords: [49.17773, -0.35659] },
    { nom: "Pause Fringale", desc: "Sandwichs et snacks à emporter.", coords: [49.17953, -0.35431] },
  ],
  bars: [
    { nom: "Le Valéa", desc: "Café-bar le plus proche, à ~30 m.", coords: [49.17919, -0.35707] },
    { nom: "BTKC", desc: "Bar de quartier.", coords: [49.17877, -0.357] },
    { nom: "Le Bon Prétexte", desc: "Pub convivial.", coords: [49.18012, -0.35632] },
    { nom: "Solide", desc: "Bar à l'ambiance décontractée.", coords: [49.17998, -0.35886] },
    { nom: "Le Machiniste", desc: "Bar animé du côté du port.", coords: [49.17754, -0.35682] },
    { nom: "Le Longchamp", desc: "Bar-brasserie, le long des quais.", coords: [49.17797, -0.3545] },
  ],
  bouche: [
    { nom: "Aux Délices Normands", desc: "Boulangerie-pâtisserie la plus proche : pain frais et viennoiseries.", coords: [49.17964, -0.35753] },
    { nom: "Le Pétrin de Saint-Jean", desc: "Boulangerie artisanale.", coords: [49.17837, -0.3566] },
    { nom: "Aux délices de Saint-Jean", desc: "Boulangerie-pâtisserie.", coords: [49.17812, -0.35633] },
    { nom: "Maison Toulorge", desc: "Boulangerie-pâtisserie réputée.", coords: [49.18047, -0.35881] },
  ],
  courses: [
    { nom: "Baïkal Market", desc: "La supérette la plus proche, pour le dépannage du quotidien.", coords: [49.17924, -0.3571] },
    { nom: "Carrefour Express", desc: "Supérette de dépannage.", coords: [49.17823, -0.35643] },
    { nom: "Monop'", desc: "Supermarché de centre-ville, ouvert tard.", coords: [49.18168, -0.35726] },
    { nom: "Biocoop", desc: "Supermarché bio et vrac.", coords: [49.18172, -0.36039] },
    { nom: "Carrefour City", desc: "Supérette ouverte tard.", coords: [49.18262, -0.35919] },
  ],
  tram: [
    { nom: "Arrêt de tram « Résistance Saint-Jean »", desc: "L'arrêt de tram le plus proche (~200 m) — réseau Twisto, vers le centre, la gare et les campus.", coords: [49.18073, -0.35593] },
    { nom: "Arrêt de bus « Saint-Jean Église »", desc: "L'arrêt de bus le plus proche (~170 m).", coords: [49.18055, -0.35853] },
    { nom: "Arrêt de tram « Quai de Juillet »", desc: "Arrêt de tram, le long des quais.", coords: [49.17847, -0.35353] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Saint-Jean", desc: "La pharmacie la plus proche (~50 m). Pharmacie de garde : composez le 3237.", coords: [49.17957, -0.35789] },
    { nom: "Pharmacie de la République", desc: "Pharmacie proche du théâtre.", coords: [49.18137, -0.36267] },
    { nom: "Pharmacie Saint-Michel", desc: "Pharmacie côté sud, près de la rue de Bayeux.", coords: [49.17516, -0.35421] },
  ],
};

/**
 * Logement « Saint-Jean » — appartement F2 (2 pièces) en plein centre de Caen,
 * rue Saint-Jean, l'une des artères les plus animées et commerçantes de la ville.
 * Chambre séparée (lit double 140), salon avec TV, cuisine séparée équipée, salle
 * de bain avec baignoire, WC séparés, lave-linge, et un balcon avec vue sur la rue
 * Saint-Jean et les toits de Caen. Capacité 2 personnes. Arrivée autonome jusqu'à 22h.
 *
 * « Autour de moi » réutilise les adresses de Caen (même ville, plein centre) : les
 * distances sont recalculées automatiquement depuis les coordonnées de ce logement.
 *
 * ⚠️ À CONFIRMER PAR LA GÉRANTE (valeurs provisoires marquées « TODO ») :
 *   - numéro exact rue Saint-Jean (→ adresse, itineraire, coords précises)
 *   - WiFi (réseau + mot de passe)
 *   - vidéo d'accès (lien YouTube) + modalités boîte à clés
 *   - stationnement réel (rue/parkings payants — pas de place privée a priori)
 *   - animaux acceptés ? (l'annonce ne le précise pas → mis à NON pour l'instant)
 *   - photo de couverture (provisoire pour le moment)
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */
export const saintjean: Logement = {
  id: "saintjean",
  nom: "Saint-Jean",
  adresse: "144 Rue Saint-Jean, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=144+Rue+Saint-Jean+14000+Caen",
  coords: [49.1792, -0.3575],
  cover: "/logements/saintjean/salon.jpg",

  motAccueil:
    "Bienvenue dans l'appartement Saint-Jean, en plein cœur de Caen ! Vous êtes rue Saint-Jean, à deux pas des restaurants, des commerces et du port — tout se fait à pied. Son petit plus : un balcon avec vue sur les toits de Caen, parfait pour un café le matin ou un verre le soir. Très bon séjour ! ☕",

  arrivee: {
    horaire: "Arrivée autonome jusqu'à 22h",
    codeBoite: "1991",
    checkinExpress: [
      "L'accès à l'appartement se fait en autonomie ; vous pouvez arriver jusqu'à 22h.",
      "Les clés se trouvent dans la boîte à clés. Composez le code indiqué ci-dessus pour l'ouvrir.",
      "L'appartement est au 3ᵉ étage à droite — porte de droite.",
      "Pensez à bien remettre les clés dans la boîte à clés à votre départ et à refermer celle-ci.",
      "Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable.",
    ],
    parking:
      "Le logement se situe en plein centre-ville : il n'y a pas de place de parking privée.\nStationnement payant en voirie dans le secteur (horodateurs) et plusieurs parkings publics à proximité (Parking de la République, Parking du Théâtre, Parking de la gare). Pensez à l'appli de stationnement de la ville pour payer à distance.", // TODO: confirmer parkings recommandés
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Chambre avec lit double (140 × 200 cm), rangements et dressing",
        "Salon lumineux avec canapé et TV",
        "Cuisine séparée entièrement équipée",
        "Salle de bain avec baignoire/douche",
        "WC séparés",
      ],
      etage: [],
      exterieur: [
        "Balcon avec vue sur la rue Saint-Jean et les toits de Caen",
      ],
    },
  },

  wifi: {
    // TODO: pas de WiFi pour le moment — à renseigner dès l'installation de la box.
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
          "Les draps sont fournis et le lit (140 × 200 cm) est fait. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Allumez l'écran avec le bouton Power de la télécommande, puis patientez quelques secondes que le menu d'accueil apparaisse. Sélectionnez ensuite l'application TV ou la chaîne souhaitée à l'aide des flèches de navigation, et validez avec OK.",
      },
      {
        titre: "🛁 Salle de bain",
        contenu:
          "La salle de bain dispose d'une baignoire avec douche. Les WC sont séparés. Merci de bien refermer le rideau / la paroi pour éviter les éclaboussures.",
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
          "La cuisine, séparée du séjour, est entièrement équipée : four, micro-ondes, plaques de cuisson, lave-vaisselle, réfrigérateur et machine à café Nespresso (à capsules), ainsi que tout le nécessaire de cuisine.",
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
      "Four",
      "Micro-ondes",
      "Plaques de cuisson",
      "Lave-vaisselle",
      "Réfrigérateur",
      "Machine à café Nespresso",
      "Lave-linge",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du supplément correspondant. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, notamment sur le balcon.",
    },
    poubelles:
      "Les déchets doivent être triés et déposés dans les conteneurs prévus à cet effet.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur situé au 88 rue Saint-Jean", // TODO: préciser l'emplacement exact des bacs / point de collecte
    animaux:
      "Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du règlement et du supplément correspondant.",
  },

  equipements: [
    "WiFi",
    "Balcon avec vue",
    "Chambre séparée (lit double 140 × 200)",
    "TV",
    "Cuisine séparée équipée",
    "Four",
    "Micro-ondes",
    "Plaques de cuisson",
    "Lave-vaisselle",
    "Machine Nespresso",
    "Réfrigérateur",
    "Lave-linge",
    "Salle de bain avec baignoire",
    "WC séparés",
    "Chauffage",
    "Eau chaude",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
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
    // Catégories « du quotidien » remplacées par les adresses proches de NEARBY
    // (géolocalisées autour du 144) ; les autres (culture, nature, plages,
    // excursions…) sont reprises de Caen. Distances recalculées depuis le logement.
    categories: caen.autourDeMoi.categories.map((c) =>
      NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
    ),
    coupDeCoeur:
      "Vous êtes idéalement placé pour découvrir Caen à pied : flânez sur la rue Saint-Jean et ses commerces, rejoignez le château et l'Abbaye aux Hommes, puis offrez-vous une soirée dans le quartier du Vaugueux, qui concentre les meilleures tables. Pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
