import type { Logement, Lieu } from "../types";
import { caen } from "./caen";

/**
 * Adresses proches du logement (rue Desmoueux), géolocalisées via OpenStreetMap.
 * Elles remplacent les catégories « du quotidien » de Caen (restaurants, bars,
 * courses, boulangerie, tram/bus, pharmacies) pour coller au quartier ; les
 * autres catégories (culture, nature, plages, excursions…) sont reprises de Caen.
 */
const NEARBY: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Et si & Cie", desc: "Cuisine du marché conviviale, à ~300 m (côté université).", coords: [49.1881, -0.3663] },
    { nom: "Ju'ste Chez Moi", desc: "Cuisine maison dans une ambiance chaleureuse, crêpes et plats du jour.", coords: [49.1864, -0.3659] },
    { nom: "La Perle du Liban", desc: "Spécialités libanaises : mezze et grillades.", coords: [49.1856, -0.3653] },
    { nom: "Modjo", desc: "Table conviviale à deux pas du centre.", coords: [49.1852, -0.3657] },
    { nom: "Bouillon Saint-Martin", desc: "Bouillon à la parisienne : cuisine française généreuse à petit prix.", coords: [49.1836, -0.3706] },
    { nom: "Les Pavés de Caen", desc: "Crêperie-galetterie au cœur du centre.", coords: [49.1834, -0.3682] },
    { nom: "Chez Tuyet", desc: "Cuisine vietnamienne familiale.", coords: [49.1844, -0.3647] },
  ],
  restorapide: [
    { nom: "Brez", desc: "Kebab et plats à emporter, le plus proche (~280 m).", coords: [49.1880, -0.3664] },
    { nom: "Royal Kebab", desc: "Kebab et grillades à emporter.", coords: [49.1866, -0.3659] },
    { nom: "L'Apostrophe", desc: "Café-sandwicherie : formules, donuts et boissons.", coords: [49.1894, -0.3649] },
    { nom: "La Parenthèse", desc: "Sandwichs, salades et cafés à emporter.", coords: [49.1903, -0.3648] },
    { nom: "Schmilblic", desc: "Sandwichs et salades faits maison.", coords: [49.1838, -0.3661] },
    { nom: "Chez Poto", desc: "Burgers maison.", coords: [49.1848, -0.3634] },
  ],
  bars: [
    { nom: "L'Orangerie", desc: "Café-bar le plus proche, à ~170 m.", coords: [49.1894, -0.3719] },
    { nom: "Le Baroudeur", desc: "Bar étudiant animé, côté université.", coords: [49.1880, -0.3664] },
    { nom: "Bar de la Fac", desc: "Bar convivial face à la faculté.", coords: [49.1879, -0.3661] },
    { nom: "L'Antre Potes", desc: "Bar de quartier sympathique.", coords: [49.1873, -0.3661] },
    { nom: "Le Tripot", desc: "Bar à l'ambiance décontractée.", coords: [49.1868, -0.3659] },
    { nom: "Le Multiverre", desc: "Bar à bières et tapas.", coords: [49.1855, -0.3652] },
    { nom: "Le Boudoir", desc: "Bar à cocktails du centre.", coords: [49.1837, -0.3694] },
  ],
  bouche: [
    { nom: "Fabrique de Fa'mie", desc: "Boulangerie-pâtisserie la plus proche : pain frais et viennoiseries.", coords: [49.1879, -0.3667] },
    { nom: "Maison Eric Kayser", desc: "Boulangerie réputée : pains et pâtisseries.", coords: [49.1829, -0.3682] },
    { nom: "Tartines et Gourmandises", desc: "Tartines, salades et douceurs maison.", coords: [49.1837, -0.3657] },
    { nom: "Boucherie Saint-Sauveur", desc: "Boucherie-charcuterie artisanale, près de la place Saint-Sauveur.", coords: [49.1835, -0.3688] },
  ],
  courses: [
    { nom: "Viveco", desc: "La supérette la plus proche, pour le dépannage du quotidien.", coords: [49.1876, -0.3661] },
    { nom: "Eelam Market", desc: "Épicerie (produits du monde) à deux pas.", coords: [49.1865, -0.3659] },
    { nom: "Alternativi", desc: "Épicerie bio et vrac.", coords: [49.1842, -0.3702] },
    { nom: "Épicerie de nuit les Quatrans", desc: "Dépannage en soirée, près du château.", coords: [49.1847, -0.3630] },
    { nom: "Monoprix", desc: "Supermarché du centre (45 bd Maréchal Leclerc), ouvert tard.", coords: [49.1826, -0.3622] },
  ],
  tram: [
    { nom: "Arrêt de tram « Place de la Mare »", desc: "L'arrêt de tram le plus proche (~330 m) — réseau Twisto, vers le centre, la gare et les campus.", coords: [49.1870, -0.3662] },
    { nom: "Arrêt de bus « Jardin des Plantes »", desc: "L'arrêt de bus au pied du logement (~90 m).", coords: [49.1890, -0.3698] },
    { nom: "Arrêt de tram « Université »", desc: "Arrêt de tram desservant le campus 1 et le centre.", coords: [49.1889, -0.3641] },
    { nom: "Arrêt de tram « Château Quatrans »", desc: "Arrêt de tram près du château.", coords: [49.1852, -0.3636] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Schiebold-Derouet", desc: "Pharmacie à ~750 m. Pharmacie de garde : composez le 3237.", coords: [49.1823, -0.3746] },
    { nom: "Pharmacie Danjou-Rousselot", desc: "Pharmacie proche du centre.", coords: [49.1819, -0.3671] },
    { nom: "Grande Pharmacie de Caen", desc: "Grande pharmacie du centre-ville.", coords: [49.1834, -0.3630] },
  ],
};

/**
 * Logement « Fleur » — studio de 30 m², Caen, 14 ter rue Desmoueux
 * (hyper-centre, près de la place Saint-Sauveur, de l'Abbaye aux Hommes et du
 * château). Place de parking privée gratuite réservée devant l'immeuble.
 *
 * « Autour de moi » réutilise les adresses de Caen (même ville) : les distances
 * sont recalculées automatiquement depuis les coordonnées de ce logement.
 *
 * Pour traduire un texte, remplacez la chaîne par un objet, par exemple :
 *   motAccueil: { fr: "Bienvenue…", en: "Welcome…", de: "Willkommen…" }
 * Le français reste obligatoire ; les langues manquantes retombent sur le FR.
 */
export const fleur: Logement = {
  id: "fleur",
  nom: "Fleur",
  adresse: "14 ter Rue Desmoueux, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=14+ter+Rue+Desmoueux+14000+Caen",
  coords: [49.1883, -0.3703],
  cover: "/logements/fleur/cover2.jpg",

  motAccueil: {
    fr: "Bienvenue dans l'appartement Fleur, en plein cœur de Caen ! Vous êtes à deux pas de la place Saint-Sauveur, des restaurants, des commerces et des grands monuments — l'Abbaye aux Hommes et le château sont à quelques minutes à pied. Et bonne nouvelle : une place de parking gratuite vous est réservée juste devant l'immeuble. Tout se découvre à pied. Très bon séjour à Caen ! 🌸",
    en: "Welcome to the Fleur apartment, right in the heart of Caen! You're just steps from Place Saint-Sauveur, the restaurants, the shops and the main landmarks — the Abbaye aux Hommes and the castle are a few minutes' walk away. And good news: a free parking space is reserved for you right in front of the building. Everything is within walking distance. Enjoy your stay in Caen! 🌸",
    de: "Willkommen in der Wohnung Fleur, mitten im Herzen von Caen! Sie wohnen nur wenige Schritte vom Place Saint-Sauveur, von Restaurants, Geschäften und den wichtigsten Sehenswürdigkeiten entfernt – die Abbaye aux Hommes und die Burg sind in wenigen Gehminuten erreichbar. Und die gute Nachricht: Ein kostenloser Parkplatz ist direkt vor dem Gebäude für Sie reserviert. Alles ist zu Fuß erreichbar. Einen schönen Aufenthalt in Caen! 🌸",
    es: "¡Bienvenido al apartamento Fleur, en pleno corazón de Caen! Está a dos pasos de la plaza Saint-Sauveur, de los restaurantes, las tiendas y los principales monumentos: la Abbaye aux Hommes y el castillo están a pocos minutos a pie. Y una buena noticia: tiene una plaza de aparcamiento gratuita reservada justo delante del edificio. Todo se recorre a pie. ¡Feliz estancia en Caen! 🌸",
    it: "Benvenuti nell'appartamento Fleur, nel pieno cuore di Caen! Siete a due passi da place Saint-Sauveur, dai ristoranti, dai negozi e dai principali monumenti: l'Abbaye aux Hommes e il castello sono a pochi minuti a piedi. E una buona notizia: un posto auto gratuito è riservato per voi proprio davanti all'edificio. Tutto è raggiungibile a piedi. Buon soggiorno a Caen! 🌸",
  },

  arrivee: {
    horaire: "À partir de 17h",
    checkinExpress: [
      "Le code de la boîte à clés vous sera communiqué le jour de votre arrivée.",
      "Vous recevrez toutes les informations d'accès à l'appartement par message, avec un lien vidéo, dans la conversation de la plateforme avec laquelle vous avez réservé.",
      "Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable.",
    ],
    video: "https://youtube.com/shorts/6nbLYcgaGWk",
    parking:
      "Une place de parking gratuite vous est réservée, juste devant l'entrée de l'immeuble — place non sécurisée (ni barrière, ni portail, ni code).\nPour un second véhicule, stationnement gratuit dans les rues voisines : rue Desmoueux, avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie.\nStationnement payant (9h–12h30 et 14h–19h) : Place de la Mare, Les Fossés Saint-Julien.\nParking souterrain de la Mairie (payant), tout proche.",
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

  wifi: {
    reseau: "Livebox-2E40",
    motDePasse: "Qn7FuSoiy7c9ENdkgL",
  },

  pratique: {
    // « À savoir » présenté en sous-parties dépliables (voir aSavoirSections).
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
          "Les fenêtres de toit (velux) ne s'ouvrent pas. Le store est électrique : une télécommande, accrochée au mur entre le lit et la table de nuit, permet de le fermer pour occulter la pièce et profiter de nuits dans le noir.",
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
    "Parking privé gratuit",
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
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres et velux s'ils ont été ouverts, éteindre les lumières et baisser la température des radiateurs",
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
    // Catégories « du quotidien » (restaurants, bars, courses, boulangerie,
    // tram/bus, pharmacies) remplacées par les adresses proches de NEARBY ; les
    // autres (culture, nature, plages, excursions…) sont reprises de Caen.
    // Les distances sont recalculées automatiquement depuis ce logement.
    categories: caen.autourDeMoi.categories.map((c) =>
      NEARBY[c.key] ? { key: c.key, lieux: NEARBY[c.key] } : c,
    ),
    coupDeCoeur:
      "À deux pas de chez vous : le Jardin des Plantes (gratuit, ~2 min) pour une pause au vert, et la place Saint-Sauveur avec ses terrasses. L'Abbaye aux Hommes et le château se rejoignent à pied. Le soir, le quartier du Vaugueux concentre les meilleures tables — et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
