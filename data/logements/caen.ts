import type { Logement } from "../types";

/**
 * Logement « Vaugueux 2 » — Caen, 18 rue Graindorge.
 *
 * Pour traduire un texte, remplacez la chaîne par un objet, par exemple :
 *   motAccueil: { fr: "Bienvenue…", en: "Welcome…", de: "Willkommen…" }
 * Le français reste obligatoire ; les langues manquantes retombent sur le FR.
 */
export const caen: Logement = {
  id: "vaugueux2",
  nom: "Vaugueux 2",
  adresse: "18 Rue Graindorge, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=18+Rue+Graindorge+14000+Caen",
  coords: [49.186, -0.3585],
  cover: "/logements/caen/cover-vaugueux2.jpg",

  motAccueil: {
    fr: "Bienvenue dans le quartier du Vaugueux, le cœur historique et gourmand de Caen ! Vous êtes à deux pas du château de Guillaume le Conquérant, du port de plaisance et des meilleures tables de la ville. Tout le centre se découvre à pied. Très bon séjour à Caen ! ⚓",
    en: "Welcome to the Vaugueux district, the historic and foodie heart of Caen! You're just steps from William the Conqueror's castle, the marina and the city's best restaurants. The whole centre is within walking distance. Enjoy your stay in Caen! ⚓",
    de: "Willkommen im Viertel Vaugueux, dem historischen und kulinarischen Herzen von Caen! Sie wohnen nur wenige Schritte von der Burg Wilhelms des Eroberers, dem Yachthafen und den besten Restaurants der Stadt entfernt. Das gesamte Zentrum ist zu Fuß erreichbar. Einen schönen Aufenthalt in Caen! ⚓",
    es: "¡Bienvenido al barrio del Vaugueux, el corazón histórico y gastronómico de Caen! Está a dos pasos del castillo de Guillermo el Conquistador, del puerto deportivo y de los mejores restaurantes de la ciudad. Todo el centro se recorre a pie. ¡Feliz estancia en Caen! ⚓",
    it: "Benvenuti nel quartiere del Vaugueux, il cuore storico e goloso di Caen! Siete a due passi dal castello di Guglielmo il Conquistatore, dal porto turistico e dai migliori ristoranti della città. Tutto il centro è raggiungibile a piedi. Buon soggiorno a Caen! ⚓",
  },

  arrivee: {
    horaire: "À partir de 17h",
    checkinExpress: [
      "Appartement en rez-de-chaussée surélevé : quelques marches extérieures à monter",
      "Clés dans une boîte à clé sécurisée à code, près de l'entrée",
      "Le code de la boîte à clé vous est envoyé par message une fois le logement prêt",
      "Suivez la vidéo d'accès ci-dessous pour trouver le logement",
    ],
    video: "https://youtube.com/shorts/hDw8aJ56vOQ",
    etapes: [
      {
        texte:
          "Le code de la boîte à clé vous est envoyé par message une fois le logement prêt. La vidéo ci-dessous vous montre le chemin jusqu'au logement.",
      },
      {
        texte:
          "Repérez la boîte à clé sécurisée près de l'entrée, composez le code et récupérez les clés. Pensez à refermer la boîte et à brouiller le code.",
      },
      {
        texte:
          "Montez les quelques marches extérieures : l'appartement se situe en rez-de-chaussée surélevé. Bienvenue chez vous !",
      },
    ],
    parking:
      "Stationnement payant autour de l'appartement.\nPlace Courtonne et sur le port (parking avec barrière).\nEn voirie : rues Basse, Buquet, des Prairies Saint-Gilles, du Vaugueux et Graindorge (payant de 9h à 12h30 et de 14h à 19h).\nParking souterrain du Château, tout proche.\n⚠️ Évitez le port le samedi soir : le marché s'y tient le dimanche matin.",
    bagages:
      "Dépôt de bagages possible avant l'arrivée ou après le départ, sur demande.",
    decouverte: {
      rdc: [
        "Cuisine équipée (plaques tactiles, micro-ondes, machine Nespresso)",
        "Coin repas",
        "Salon avec canapé-lit et TV",
        "Salle d'eau avec WC",
      ],
      etage: [
        "Chambre sous pente avec lit",
        "Commode et rangements",
        "Aspirateur dans le placard sous pente, à côté de la commode",
      ],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Bbox-29DFED5E",
    motDePasse: "U6SxHerjsC12q996S",
  },

  pratique: {
    aSavoir: [
      "Draps fournis et lit fait",
      "Draps du canapé-lit dans le coffre en osier à l'entrée (une vidéo explique comment le déplier)",
      "Une serviette de toilette par personne",
      "Aspirateur dans le placard sous pente, à l'étage dans la chambre",
      "Chauffage : merci de le baisser ou de l'éteindre à votre départ",
    ],
    electromenager: [
      "Plaques de cuisson tactiles",
      "Micro-ondes",
      "Machine Nespresso",
      "Réfrigérateur",
      "TV avec décodeur Bouygues",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci de respecter le calme, en particulier entre 22h00 et 08h00, par égard pour le voisinage.",
      texte:
        "Logement non-fumeur : merci de sortir à l'extérieur pour fumer ou vapoter. Les animaux de compagnie sont acceptés (1 animal maximum) sous réserve du supplément correspondant. Aucune fête ni événement autorisé. Merci de respecter le calme et le voisinage, dans ce quartier résidentiel.",
    },
    poubelles:
      "Les poubelles sont à déposer dans la rue, dans les bacs situés à côté du restaurant « Bobun ».",
    animaux:
      "Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du règlement et du supplément correspondant.",
  },

  equipements: [
    "WiFi",
    "TV (décodeur Bouygues)",
    "Machine Nespresso",
    "Plaques tactiles",
    "Micro-ondes",
    "Réfrigérateur",
    "Chauffage",
    "Eau chaude",
    "Aspirateur",
    "Canapé-lit",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
    "Entrée indépendante",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Rassembler les serviettes de toilette utilisées",
      "Déposer les poubelles dans les bacs de la rue (à côté du « Bobun »)",
      "Baisser ou éteindre le chauffage",
      "Éteindre les lumières et bien fermer les fenêtres",
      "Verrouiller la porte et remettre les clés dans la boîte à clé",
    ],
  },

  quartier: {
    aPied: [
      "Le Bouchon du Vaugueux (12 rue Graindorge, à côté)",
      "Restaurants du Vaugueux",
      "Château de Caen (~5 min)",
      "Port de plaisance & marché du dimanche",
      "Boulangerie & tabac rue du Vaugueux",
    ],
    note: "Vous êtes au cœur du Vaugueux, le quartier historique et gourmand de Caen, entre le château et le port de plaisance. Tout le centre-ville se fait à pied.",
  },

  autourDeMoi: {
    categories: [
      {
        key: "culture",
        lieux: [
          {
            nom: "Château de Caen",
            desc: "Forteresse fondée par Guillaume le Conquérant vers 1060, l'une des plus vastes enceintes médiévales d'Europe. Remparts, jardins et belle vue sur la ville. Accès libre à l'enceinte, à ~5 min à pied. Tél. 02 31 30 47 60.",
            coords: [49.1868, -0.3615],
          },
          {
            nom: "Église Saint-Pierre",
            desc: "Joyau du gothique flamboyant au cœur de la ville, face au château. Clocher remarquable et chevet richement sculpté.",
            coords: [49.1838, -0.3608],
          },
          {
            nom: "Abbaye aux Hommes (Saint-Étienne)",
            desc: "Esplanade Jean-Marie Louvel. Fondée par Guillaume le Conquérant, qui y repose. Magnifique abbatiale ; le bâtiment abrite aujourd'hui l'hôtel de ville.",
            coords: [49.1811, -0.3717],
          },
          {
            nom: "Abbaye aux Dames (la Trinité)",
            desc: "Place Reine Mathilde. Fondée par la reine Mathilde, qui y est inhumée. Belle église romane et jardins, siège du Conseil régional. Tél. 02 31 06 98 98.",
            coords: [49.186, -0.3536],
          },
          {
            nom: "Musée de Normandie",
            desc: "Dans l'enceinte du château : histoire et patrimoine de la Normandie, des origines à nos jours.",
            coords: [49.1864, -0.3608],
          },
          {
            nom: "Maison des Quatrans",
            desc: "L'une des plus anciennes maisons à pans de bois de Caen (XVe s.), rue de Geôle, à deux pas du château.",
            coords: [49.1862, -0.36],
          },
        ],
      },
      {
        key: "loisirs",
        lieux: [
          {
            nom: "Le Mémorial de Caen",
            desc: "Esplanade Général Eisenhower. Le grand musée pour la Paix : Seconde Guerre mondiale, Débarquement et Bataille de Normandie. Incontournable, à ~10 min en voiture. Tél. 02 31 06 06 45.",
            coords: [49.1979, -0.3837],
          },
          {
            nom: "Musée des Beaux-Arts de Caen",
            desc: "Dans le château : riche collection de peintures (XVe–XXe s.) et beau parc de sculptures. Entrée des collections permanentes gratuite. Tél. 02 31 30 47 60.",
            coords: [49.1872, -0.3623],
          },
          {
            nom: "Plages du Débarquement",
            desc: "Arromanches et ses musées : la Côte de Nacre et le D-Day à 30–45 min de route.",
            coords: [49.338, -0.621],
            itineraire:
              "https://www.google.com/maps/search/?api=1&query=Arromanches-les-Bains",
          },
          {
            nom: "Cimetière américain de Colleville-sur-Mer",
            desc: "Au-dessus d'Omaha Beach : le cimetière américain de Normandie, lieu de mémoire saisissant. À ~1h de route. Tél. 02 31 51 62 00.",
            coords: [49.3586, -0.8547],
            itineraire:
              "https://www.google.com/maps/search/?api=1&query=Cimeti%C3%A8re+am%C3%A9ricain+Colleville-sur-Mer",
          },
          {
            nom: "Le Mont-Saint-Michel",
            desc: "La célèbre merveille de l'Occident, son abbaye et sa baie. Une excursion à la journée, à ~1h15 de route.",
            coords: [48.6355, -1.5103],
            itineraire:
              "https://www.google.com/maps/search/?api=1&query=Mont-Saint-Michel",
          },
          {
            nom: "Honfleur",
            desc: "Charmant port pittoresque : galeries d'art, le Vieux Bassin, les bateaux et les boutiques. À ~1h de Caen.",
            coords: [49.423, 0.2309],
            itineraire:
              "https://www.google.com/maps/search/?api=1&query=Honfleur",
          },
        ],
      },
      {
        key: "nature",
        lieux: [
          {
            nom: "Le Bassin Saint-Pierre (port de plaisance)",
            desc: "Le port de plaisance en plein centre, à deux pas du logement : terrasses, balades le long des quais et marché du dimanche matin.",
            coords: [49.1844, -0.356],
          },
          {
            nom: "Le Jardin des Plantes",
            desc: "Place Blot. Jardin botanique gratuit, serres et collections : un havre de verdure à deux pas du centre. Tél. 02 31 30 48 38.",
            coords: [49.1892, -0.3703],
          },
          {
            nom: "Parc de la Colline aux Oiseaux",
            desc: "Avenue de l'Amiral Mountbatten. Grand parc paysager de 17 ha près du Mémorial : roseraie, labyrinthe et animaux. Idéal en famille. Tél. 02 31 30 41 00.",
            coords: [49.198, -0.3924],
          },
          {
            nom: "La Prairie",
            desc: "Vaste prairie naturelle en plein cœur de ville, le long de l'Orne, avec l'hippodrome. Parfaite pour les balades et le jogging.",
            coords: [49.1788, -0.3675],
          },
        ],
      },
      {
        key: "plages",
        lieux: [
          {
            nom: "Ouistreham — Riva-Bella",
            desc: "La plage la plus proche (~20 min) : grande plage de sable, casino et front de mer animé. Embarcadère des ferries vers l'Angleterre.",
            coords: [49.2868, -0.2497],
          },
          {
            nom: "Plage de Deauville",
            desc: "Promenade des Planches. La plage chic et ses parasols, à ~40 min : planches, villas et glamour. Tél. 02 31 14 40 00.",
            coords: [49.3607, 0.0665],
            itineraire:
              "https://www.google.com/maps/search/?api=1&query=Plage+de+Deauville+Les+Planches",
          },
          {
            nom: "Lion-sur-Mer",
            desc: "Station balnéaire familiale de la Côte de Nacre, jolies villas Belle Époque.",
            coords: [49.3001, -0.317],
          },
          {
            nom: "Luc-sur-Mer",
            desc: "Plage agréable avec parc en bord de mer et centre de thalasso, à ~25 min.",
            coords: [49.3146, -0.3536],
          },
          {
            nom: "Courseulles-sur-Mer (Juno Beach)",
            desc: "Plage du Débarquement réputée pour ses huîtres et le Centre Juno Beach, à ~30 min.",
            coords: [49.3303, -0.4555],
          },
        ],
      },
      {
        key: "restaurants",
        lieux: [
          {
            nom: "Le Bouchon du Vaugueux",
            desc: "Bistrot de référence du quartier, au 12 rue Graindorge (juste à côté !). Cuisine du marché soignée, référencé au Guide Michelin. Réservation conseillée. Tél. 02 31 44 26 26.",
            coords: [49.1859, -0.3586],
          },
          {
            nom: "À Contre Sens",
            desc: "Table gastronomique étoilée, 37 quai François Mitterrand, face au port. L'adresse d'exception de Caen. Tél. 02 31 97 44 48.",
            coords: [49.1819, -0.351],
          },
          {
            nom: "La Trattoria",
            desc: "Cuisine italienne conviviale, 15 rue du Vaugueux, à deux pas du logement. Tél. 02 31 47 97 01.",
            coords: [49.1856, -0.3599],
          },
          {
            nom: "Le Bistrot Basque",
            desc: "Saveurs du Pays basque, 26 quai Vendeuvre, face au port de plaisance. Tél. 02 31 38 21 26.",
            coords: [49.1828, -0.3556],
          },
          {
            nom: "Stéphane Carbone",
            desc: "Restaurant gastronomique réputé, 14 rue de Courtonne, près du port.",
            coords: [49.1858, -0.3566],
          },
          {
            nom: "Ju'ste Chez Moi",
            desc: "Cuisine maison dans une ambiance chaleureuse, 90 rue de Geôle. Tél. 02 31 15 28 79.",
            coords: [49.1864, -0.3659],
          },
          {
            nom: "Le Comptoir",
            desc: "Bonne table de centre-ville, 3-5 rue Saint-Sauveur. Tél. 02 31 38 53 40.",
            coords: [49.1838, -0.3663],
          },
          {
            nom: "Monsieur Louis",
            desc: "Cuisine soignée, 11 place Saint-Sauveur, sur une jolie place du centre. Tél. 02 61 53 60 50.",
            coords: [49.1828, -0.3686],
          },
          {
            nom: "Le Boudoir",
            desc: "Adresse gourmande, 15 rue Pemagnie, dans le centre historique. Tél. 02 31 93 39 43.",
            coords: [49.1837, -0.3694],
          },
          {
            nom: "La Buona Tavola",
            desc: "Cuisine italienne, 47 rue Saint-Sauveur. Tél. 02 31 50 35 35.",
            coords: [49.1831, -0.3678],
          },
          {
            nom: "NONNA",
            desc: "Trattoria italienne conviviale, 45 rue Saint-Sauveur.",
            coords: [49.1831, -0.3677],
          },
          {
            nom: "Fleur de Sushi",
            desc: "Sushis et cuisine japonaise, 36 rue des Jacobins. Tél. 02 31 74 26 64.",
            coords: [49.1793, -0.3606],
          },
          {
            nom: "La Champa",
            desc: "Restaurant asiatique thaï, 12 rue du 11 Novembre. Tél. 06 86 20 96 40.",
            coords: [49.1778, -0.3582],
          },
          {
            nom: "Pizzeria Canaglia",
            desc: "Pizzas à l'italienne, 5 rue Écuyère, en plein centre. Tél. 02 31 79 90 83.",
            coords: [49.182, -0.3676],
          },
          {
            nom: "Roze",
            desc: "Belle table à Mathieu, 4 rue Augustin Fresnel, à ~10 min en voiture au nord de Caen. Tél. 02 31 44 10 17.",
            coords: [49.2556, -0.3738],
            itineraire:
              "https://www.google.com/maps/search/?api=1&query=Roze+restaurant+Mathieu+Augustin+Fresnel",
          },
        ],
      },
      {
        key: "restorapide",
        lieux: [
          {
            nom: "Bobun",
            desc: "Restaurant vietnamien juste à côté du logement (c'est près de ses bacs que sont déposées les poubelles) : bo bun, nems et plats à emporter.",
            coords: [49.1857, -0.3578],
          },
          {
            nom: "Les Burgers de Colette (rue Buquet)",
            desc: "Burgers maison, 6 rue Buquet, tout près du logement. Tél. 02 31 39 55 03.",
            coords: [49.1848, -0.3589],
          },
          {
            nom: "Les Burgers de Colette (rue Écuyère)",
            desc: "Burgers maison, 27 rue Écuyère, en centre-ville. Tél. 02 31 50 13 44.",
            coords: [49.1819, -0.3689],
          },
          {
            nom: "Waiiha — poké bar",
            desc: "Poké bowls frais et colorés, 9 rue Écuyère. Tél. 02 31 26 98 73.",
            coords: [49.182, -0.3678],
          },
          {
            nom: "Tartines et Gourmandises",
            desc: "Tartines, salades et douceurs faites maison, 20 rue Froide. Tél. 02 31 50 24 32.",
            coords: [49.1837, -0.3658],
          },
          {
            nom: "Brasseries du Quai Vendeuvre",
            desc: "Le long du port, plusieurs brasseries et terrasses pour un repas rapide face au bassin Saint-Pierre.",
            coords: [49.184, -0.3562],
          },
        ],
      },
      {
        key: "bars",
        lieux: [
          {
            nom: "Le Café Mancel",
            desc: "Café-restaurant dans l'enceinte du château, jolie terrasse avec vue. Idéal en journée.",
            coords: [49.187, -0.3618],
          },
          {
            nom: "Rue Écuyère & rue de Bras",
            desc: "L'épicentre de la vie nocturne caennaise : bars et pubs à la suite, à ~8 min à pied.",
            coords: [49.1823, -0.364],
          },
          {
            nom: "Le Vertigo",
            desc: "Bar à bières incontournable de Caen, rue Écuyère : très large choix de bières.",
            coords: [49.1822, -0.3635],
          },
          {
            nom: "Les terrasses du port (Quai Vendeuvre)",
            desc: "Bars et terrasses face au bassin Saint-Pierre, très agréables aux beaux jours.",
            coords: [49.1841, -0.356],
          },
        ],
      },
      {
        key: "nocturne",
        lieux: [
          {
            nom: "Le 32",
            desc: "Discothèque sur le port (32 quai Vendeuvre, anciennement Le Carré) : la boîte de nuit du centre, généralement ouverte du jeudi au samedi.",
            coords: [49.1827, -0.3553],
          },
          {
            nom: "El Che",
            desc: "Bar-club mythique de la nuit caennaise, 6 rue du Tour de Terre, près du château : ambiance rhum et danse, du jeudi au samedi.",
            coords: [49.1848, -0.3639],
          },
          {
            nom: "L'Orient Express",
            desc: "Bar dansant et billard, 24 rue du 11 Novembre : une institution de la nuit caennaise depuis les années 80.",
            coords: [49.1775, -0.3567],
          },
          {
            nom: "O'Donnell's Irish Pub",
            desc: "Pub irlandais sur le port, 20 quai Vendeuvre : bières, concerts et retransmissions sportives. Tél. 02 31 85 51 50.",
            coords: [49.1832, -0.3564],
          },
          {
            nom: "La Pagaille",
            desc: "Bar animé et abordable, 30 quai Vendeuvre : tapas, cocktails et terrasse face au port.",
            coords: [49.1827, -0.3554],
          },
          {
            nom: "Le French",
            desc: "Bar festif sur le port, 32 quai Vendeuvre.",
            coords: [49.1827, -0.3553],
          },
          {
            nom: "Olly's",
            desc: "Bar dansant, 33 rue Basse, à deux pas du logement.",
            coords: [49.1849, -0.3572],
          },
        ],
      },
      {
        key: "cinema",
        lieux: [
          {
            nom: "Cinéma LUX",
            desc: "Cinéma art & essai emblématique de Caen, 6 avenue Sainte-Thérèse (tram Lux-Lépine), à l'est de la ville (~1,5 km).",
            coords: [49.1906, -0.3372],
          },
          {
            nom: "Pathé Les Rives de l'Orne",
            desc: "Multiplexe au centre commercial Les Rives de l'Orne, près du port et de la gare, films récents.",
            coords: [49.1792, -0.3628],
          },
          {
            nom: "Théâtre de Caen",
            desc: "Belle programmation lyrique, danse et théâtre, boulevard du Maréchal Leclerc.",
            coords: [49.1819, -0.364],
          },
          {
            nom: "Le Cargö",
            desc: "Scène de musiques actuelles : concerts toute l'année, 9 cours Caffarelli, sur la presqu'île.",
            coords: [49.1807, -0.3475],
          },
        ],
      },
      {
        key: "commerces",
        lieux: [
          {
            nom: "Marché du dimanche matin sur le port",
            desc: "Le grand marché dominical le long du bassin Saint-Pierre (Quai Vendeuvre) : produits frais, primeurs, poissons. C'est pour lui qu'il ne faut pas se garer sur le port le samedi soir !",
            coords: [49.1842, -0.3562],
          },
          {
            nom: "La Cave du Vaugueux",
            desc: "Cave à vins et spiritueux, 2 rue des Chanoines, tout près du logement : de jolies bouteilles à offrir ou partager. Tél. 06 18 39 31 97.",
            coords: [49.1853, -0.3591],
          },
          {
            nom: "Rue Saint-Pierre",
            desc: "L'artère commerçante de Caen : boutiques, enseignes et grands magasins, à ~7 min à pied.",
            coords: [49.1822, -0.3615],
          },
          {
            nom: "Centre commercial Les Rives de l'Orne",
            desc: "Galerie marchande moderne entre le port et la gare : boutiques, restaurants et cinéma.",
            coords: [49.1792, -0.3628],
          },
        ],
      },
      {
        key: "courses",
        lieux: [
          {
            nom: "Coccinelle Express",
            desc: "La supérette la plus proche, 1 rue Basse, juste à côté du logement : dépannage et courses de dernière minute. Tél. 06 59 27 12 90.",
            coords: [49.1846, -0.3586],
          },
          {
            nom: "Monoprix",
            desc: "45 boulevard du Maréchal Leclerc — le plus pratique du centre : courses et produits du quotidien, ouvert tard. Parking souterrain.",
            coords: [49.1826, -0.3622],
          },
          {
            nom: "Le Verger Saint-Jean",
            desc: "Primeur de quartier (fruits, légumes, produits frais), 124 rue Saint-Jean. Tél. 02 31 86 00 19.",
            coords: [49.1798, -0.3581],
          },
          {
            nom: "Carrefour (rue de Bernières)",
            desc: "Supermarché de centre-ville, rue de Bernières, pour les courses complètes.",
            coords: [49.1833, -0.3621],
          },
        ],
      },
      {
        key: "bouche",
        lieux: [
          {
            nom: "Talemelerie Guillaume",
            desc: "52 rue du Vaugueux, tout près — boulangerie-pâtisserie pour le pain frais et les viennoiseries du matin.",
            coords: [49.1862, -0.3578],
          },
          {
            nom: "Boucherie Marcel",
            desc: "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.",
            coords: [49.1828, -0.3565],
          },
          {
            nom: "Boulangeries rue Saint-Pierre",
            desc: "Plusieurs boulangeries-pâtisseries le long de la rue Saint-Pierre, en allant vers le centre.",
            coords: [49.1825, -0.3613],
          },
        ],
      },
      {
        key: "tram",
        lieux: [
          {
            nom: "Arrêt « Château Quatrans »",
            desc: "L'arrêt de tram le plus proche du logement, rue de Geôle (~5 min à pied) : rejoignez le centre, la gare et les campus universitaires.",
            coords: [49.1853, -0.3639],
          },
          {
            nom: "Arrêt « Bellivet »",
            desc: "Autre arrêt de tram tout proche, en direction du centre-ville et de la gare.",
            coords: [49.1828, -0.3604],
          },
          {
            nom: "Réseau Twisto (tram & bus)",
            desc: "Le réseau de l'agglomération : 3 lignes de tram (T1, T2, T3) et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs des arrêts.",
          },
        ],
      },
      {
        key: "transports",
        lieux: [
          {
            nom: "Gare SNCF de Caen",
            desc: "Liaisons directes vers Paris Saint-Lazare (~2h). À ~15 min à pied ou en tram.",
            coords: [49.1776, -0.3481],
          },
          {
            nom: "Gare maritime de Ouistreham (Brittany Ferries)",
            desc: "Ferries vers Portsmouth (Angleterre), à ~20 min en voiture.",
            coords: [49.279, -0.248],
          },
          {
            nom: "Aéroport de Caen-Carpiquet",
            desc: "À l'ouest de la ville : vols intérieurs et saisonniers.",
            coords: [49.1733, -0.45],
          },
          {
            nom: "Taxis Abeilles Caen",
            desc: "Réservation de taxi à Caen et alentours. Tél. 02 31 52 17 89.",
          },
        ],
      },
      {
        key: "sante",
        lieux: [
          {
            nom: "Pharmacie du Vaugueux",
            desc: "Rue Montoir-Poissonnerie, la plus proche du logement. Pharmacie de garde : composez le 3237.",
            coords: [49.1857, -0.3597],
          },
          {
            nom: "Pharmacie de la presqu'île",
            desc: "Pharmacie proche du port et de la presqu'île. Tél. 02 31 95 57 30.",
            coords: [49.1832, -0.353],
          },
        ],
      },
      {
        key: "hopital",
        lieux: [
          {
            nom: "CHU Caen Normandie",
            desc: "Centre hospitalier universitaire (urgences), au nord de la ville, secteur Côte de Nacre. Tél. 02 31 06 31 06.",
            coords: [49.209, -0.37],
          },
        ],
      },
      {
        key: "medecin",
        lieux: [
          {
            nom: "SOS Médecins Caen",
            desc: "Consultations et visites à domicile, jour et nuit. Tél. 02 33 01 58 51.",
          },
        ],
      },
      {
        key: "police",
        lieux: [
          {
            nom: "Commissariat de police de Caen",
            desc: "Police (appel non urgent) : 02 31 29 22 22. En cas d'urgence, composez le 17.",
          },
        ],
      },
      {
        key: "tabac",
        lieux: [
          {
            nom: "Le Flore — Bar Tabac Presse",
            desc: "77 rue du Vaugueux, à deux pas : tabac, presse et dépannage.",
            coords: [49.1865, -0.3575],
          },
        ],
      },
    ],
    coupDeCoeur:
      "Flânez le soir dans les ruelles pavées du Vaugueux, le quartier le plus pittoresque de Caen, juste en bas de chez vous : c'est là que se concentrent les meilleures tables. Notre adresse coup de cœur : Le Bouchon du Vaugueux, 12 rue Graindorge (à deux pas) — et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation Airbnb ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
