import type { Logement } from "../types";

/**
 * Logement « Monnaie » — Caen, 16 rue de la Monnaie.
 *
 * Maison indépendante sur 3 niveaux avec terrasse privative, en plein cœur
 * historique de Caen (rue piétonne, à deux pas de la rue Froide et de
 * l'église Saint-Pierre).
 *
 * ⚠️ À COMPLÉTER quand les infos seront disponibles :
 *   - cover : photo de couverture (placeholder provisoire = photo Caen générique)
 *   - wifi : réseau + mot de passe
 *   - arrivee.codeBoite / etapes / video : instructions d'accès à la boîte à clé
 *   - pratique.electromenager : confirmer plaques de cuisson / four / micro-ondes
 *   - coords : affiner le point exact sur la carte si besoin
 */
export const monnaie: Logement = {
  id: "monnaie",
  nom: "Monnaie",
  adresse: "16 Rue de la Monnaie, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=16+Rue+de+la+Monnaie+14000+Caen",
  coords: [49.1839, -0.3631],
  cover: "/logements/monnaie/cover.jpg",

  motAccueil: {
    fr: "Bienvenue dans cette maison au cœur du vieux Caen ! Sur trois niveaux avec sa terrasse privative, à deux pas de la rue Froide, de l'église Saint-Pierre et du château, tout le centre se découvre à pied. Très bon séjour à Caen ! ⚓",
    en: "Welcome to this house in the heart of old Caen! Set over three floors with its own private terrace, steps from rue Froide, Saint-Pierre church and the castle, the whole centre is within walking distance. Enjoy your stay in Caen! ⚓",
    de: "Willkommen in diesem Haus im Herzen der Altstadt von Caen! Auf drei Etagen mit eigener Terrasse, nur wenige Schritte von der Rue Froide, der Kirche Saint-Pierre und der Burg entfernt – das gesamte Zentrum ist zu Fuß erreichbar. Einen schönen Aufenthalt in Caen! ⚓",
    es: "¡Bienvenido a esta casa en el corazón del casco antiguo de Caen! Repartida en tres plantas con terraza privada, a dos pasos de la rue Froide, la iglesia Saint-Pierre y el castillo, todo el centro se recorre a pie. ¡Feliz estancia en Caen! ⚓",
    it: "Benvenuti in questa casa nel cuore della vecchia Caen! Su tre livelli con terrazza privata, a due passi da rue Froide, dalla chiesa di Saint-Pierre e dal castello, tutto il centro è raggiungibile a piedi. Buon soggiorno a Caen! ⚓",
  },

  videoPresentation: {
    url: "/logements/monnaie/visite.mp4",
    portrait: true,
  },

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Maison indépendante dans une rue piétonne, en plein centre historique",
      "Arrivée autonome : clés dans une boîte à clé sécurisée à code, près de l'entrée",
      "Le code de la boîte à clé vous est envoyé par message une fois le logement prêt",
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "Rue piétonne : pas de stationnement devant la maison.\nStationnement possible Place Pierre Bouchard, Rue de Gémare et Rue des Teinturiers, à quelques minutes à pied.\nPlusieurs parkings souterrains dans le centre (Château, Les Rives de l'Orne, Paul Doumer et République).",
    bagages:
      "Dépôt de bagages possible avant l'arrivée ou après le départ, sur demande.",
    decouverte: {
      rdc: [
        "Entrée",
        "Cuisine équipée avec accès à la terrasse",
        "Lave-linge",
        "WC indépendant",
      ],
      etage: [
        "Salon avec TV et accès à la terrasse",
        "Chambre avec lit simple",
        "Salle de douche avec lavabo",
      ],
      etage2: [
        "Chambre avec lit double et lavabo",
        "Chambre avec lit simple",
        "Douche sous les toits, accès par une échelle de meunier",
        "WC",
      ],
      exterieur: [
        "Terrasse privative",
        "Table et 4 chaises",
      ],
    },
  },

  wifi: {
    reseau: "Communiqué à l'arrivée",
    motDePasse: "Communiqué à l'arrivée",
  },

  pratique: {
    aSavoir: [
      "⚠️ La porte se verrouille en se refermant : elle ne peut plus s'ouvrir de l'extérieur sans les clés. Pensez à toujours les prendre avec vous en sortant du logement.",
      "Draps fournis et lits faits",
      "Une serviette de toilette par personne",
      "La douche du 2e étage, sous les toits, est accessible par une échelle de meunier",
      "Chauffage : merci de le baisser ou de l'éteindre à votre départ",
    ],
    electromenager: [
      "Plaques de cuisson",
      "Four",
      "Micro-ondes",
      "Réfrigérateur",
      "Lave-vaisselle",
      "Lave-linge",
      "Machine Nespresso (capsules fournies)",
      "Bouilloire",
      "Grille-pain",
      "TV (salon et chambre double)",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci de respecter le calme, en particulier entre 22h00 et 08h00, par égard pour le voisinage.",
      texte:
        "Capacité maximale : 4 voyageurs. Logement non-fumeur : merci de sortir sur la terrasse pour fumer ou vapoter. Les animaux de compagnie sont acceptés (1 animal maximum) sous réserve du supplément correspondant. Aucune fête ni événement autorisé. Merci de respecter le calme et le voisinage, dans ce quartier résidentiel et cette rue piétonne.",
    },
    poubelles:
      "Les poubelles sont à déposer dans la rue, tous les soirs.",
    animaux:
      "Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du règlement et du supplément correspondant.",
  },

  equipements: [
    "WiFi",
    "TV (x2)",
    "Cuisine équipée",
    "Plaques de cuisson",
    "Four",
    "Micro-ondes",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Lave-vaisselle",
    "Lave-linge",
    "Réfrigérateur",
    "Chauffage",
    "Eau chaude",
    "Terrasse privative",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
    "Maison indépendante",
    "Entrée indépendante",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Rassembler les serviettes de toilette utilisées",
      "Sortir les poubelles dans la rue",
      "Baisser ou éteindre le chauffage",
      "Éteindre les lumières et bien fermer les fenêtres et la porte de la terrasse",
      "Verrouiller la porte d'entrée et remettre les clés dans la boîte à clé",
    ],
    departTardif: {
      texte: {
        fr: "Le départ est prévu au plus tard à 10h. Si vous souhaitez prolonger votre séjour avec un départ tardif, merci d'en faire la demande en amont. Cette option entraîne un supplément, à régler directement via le lien correspondant ci-dessous. Merci de me communiquer votre heure de départ une fois le paiement effectué.",
        en: "Check-out is by 10 a.m. at the latest. If you'd like to extend your stay with a late check-out, please ask in advance. This option incurs an extra charge, to be paid directly via the relevant link below. Please let me know your departure time once the payment is made.",
        de: "Die Abreise ist spätestens um 10 Uhr vorgesehen. Wenn Sie Ihren Aufenthalt mit einem späten Check-out verlängern möchten, fragen Sie dies bitte im Voraus an. Diese Option ist kostenpflichtig und direkt über den entsprechenden Link unten zu bezahlen. Bitte teilen Sie mir Ihre Abreisezeit mit, sobald die Zahlung erfolgt ist.",
        es: "La salida está prevista a las 10 h como muy tarde. Si desea prolongar su estancia con una salida tardía, le rogamos que lo solicite con antelación. Esta opción conlleva un suplemento, que se abona directamente a través del enlace correspondiente más abajo. Por favor, comuníqueme su hora de salida una vez realizado el pago.",
        it: "La partenza è prevista entro le 10. Se desiderate prolungare il soggiorno con una partenza posticipata, vi preghiamo di farne richiesta in anticipo. Questa opzione prevede un supplemento, da pagare direttamente tramite il link corrispondente qui sotto. Vi prego di comunicarmi l'orario di partenza una volta effettuato il pagamento.",
      },
      options: [
        { heure: "12h", url: "https://buy.stripe.com/fZebKA7IW4Oc7egeUU" },
        { heure: "13h", url: "https://buy.stripe.com/28E9AU4Ew57rfpxgcZ7ss0b" },
        { heure: "14h", url: "https://buy.stripe.com/dRmeVe8UMgQ95OX4uh7ss0c" },
      ],
    },
  },

  quartier: {
    aPied: [
      "Tartines et Gourmandises (20 rue Froide, tout près)",
      "Rue Froide & ses commerces",
      "Église Saint-Pierre (~3 min)",
      "Rue Saint-Pierre (artère commerçante)",
      "Château de Caen (~5 min)",
    ],
    note: "Vous êtes en plein cœur historique de Caen, dans une rue piétonne à deux pas de la rue Froide et de l'église Saint-Pierre. Tout le centre-ville, le château et le port se font à pied.",
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
            desc: "Joyau du gothique flamboyant au cœur de la ville, à quelques pas du logement. Clocher remarquable et chevet richement sculpté.",
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
            desc: "Le port de plaisance en plein centre, à quelques minutes à pied : terrasses, balades le long des quais et marché du dimanche matin.",
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
            nom: "Monsieur Louis",
            desc: "Cuisine soignée, 11 place Saint-Sauveur, sur une jolie place à deux pas du logement. Tél. 02 61 53 60 50.",
            coords: [49.1828, -0.3686],
          },
          {
            nom: "Le Boudoir",
            desc: "Adresse gourmande, 15 rue Pemagnie, dans le centre historique tout proche. Tél. 02 31 93 39 43.",
            coords: [49.1837, -0.3694],
          },
          {
            nom: "Le Comptoir",
            desc: "Bonne table de centre-ville, 3-5 rue Saint-Sauveur. Tél. 02 31 38 53 40.",
            coords: [49.1838, -0.3663],
          },
          {
            nom: "À Contre Sens",
            desc: "Table gastronomique étoilée, 37 quai François Mitterrand, face au port. L'adresse d'exception de Caen. Tél. 02 31 97 44 48.",
            coords: [49.1819, -0.351],
          },
          {
            nom: "Le Bouchon du Vaugueux",
            desc: "Bistrot de référence, 12 rue Graindorge, dans le Vaugueux (~5 min à pied). Cuisine du marché soignée, référencé au Guide Michelin. Réservation conseillée. Tél. 02 31 44 26 26.",
            coords: [49.1859, -0.3586],
          },
          {
            nom: "La Trattoria",
            desc: "Cuisine italienne conviviale, 15 rue du Vaugueux, dans le quartier historique. Tél. 02 31 47 97 01.",
            coords: [49.1856, -0.3599],
          },
          {
            nom: "La Buona Tavola",
            desc: "Cuisine italienne, 47 rue Saint-Sauveur, tout près. Tél. 02 31 50 35 35.",
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
            nom: "Pizzeria Canaglia",
            desc: "Pizzas à l'italienne, 5 rue Écuyère, en plein centre. Tél. 02 31 79 90 83.",
            coords: [49.182, -0.3676],
          },
        ],
      },
      {
        key: "restorapide",
        lieux: [
          {
            nom: "Tartines et Gourmandises",
            desc: "Tartines, salades et douceurs faites maison, 20 rue Froide, tout près du logement. Tél. 02 31 50 24 32.",
            coords: [49.1837, -0.3658],
          },
          {
            nom: "Waiiha — poké bar",
            desc: "Poké bowls frais et colorés, 9 rue Écuyère, à deux pas. Tél. 02 31 26 98 73.",
            coords: [49.182, -0.3678],
          },
          {
            nom: "Les Burgers de Colette (rue Écuyère)",
            desc: "Burgers maison, 27 rue Écuyère, en centre-ville. Tél. 02 31 50 13 44.",
            coords: [49.1819, -0.3689],
          },
          {
            nom: "Bobun",
            desc: "Restaurant vietnamien du Vaugueux : bo bun, nems et plats à emporter.",
            coords: [49.1857, -0.3578],
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
            nom: "Rue Écuyère & rue de Bras",
            desc: "L'épicentre de la vie nocturne caennaise : bars et pubs à la suite, à ~5 min à pied.",
            coords: [49.1823, -0.364],
          },
          {
            nom: "Le Vertigo",
            desc: "Bar à bières incontournable de Caen, rue Écuyère : très large choix de bières.",
            coords: [49.1822, -0.3635],
          },
          {
            nom: "Le Café Mancel",
            desc: "Café-restaurant dans l'enceinte du château, jolie terrasse avec vue. Idéal en journée.",
            coords: [49.187, -0.3618],
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
            nom: "O'Donnell's Irish Pub",
            desc: "Pub irlandais sur le port, 20 quai Vendeuvre : bières, concerts et retransmissions sportives. Tél. 02 31 85 51 50.",
            coords: [49.1832, -0.3564],
          },
          {
            nom: "La Pagaille",
            desc: "Bar animé et abordable, 30 quai Vendeuvre : tapas, cocktails et terrasse face au port.",
            coords: [49.1827, -0.3554],
          },
        ],
      },
      {
        key: "cinema",
        lieux: [
          {
            nom: "Pathé Les Rives de l'Orne",
            desc: "Multiplexe au centre commercial Les Rives de l'Orne, près du port et de la gare, films récents.",
            coords: [49.1792, -0.3628],
          },
          {
            nom: "Cinéma LUX",
            desc: "Cinéma art & essai emblématique de Caen, 6 avenue Sainte-Thérèse (tram Lux-Lépine), à l'est de la ville (~1,5 km).",
            coords: [49.1906, -0.3372],
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
            nom: "Rue Froide",
            desc: "Charmante rue pavée juste à côté du logement : libraires, artisans et boutiques indépendantes dans un cadre médiéval.",
            coords: [49.1835, -0.3648],
          },
          {
            nom: "Rue Saint-Pierre",
            desc: "L'artère commerçante de Caen : boutiques, enseignes et grands magasins, à ~5 min à pied.",
            coords: [49.1822, -0.3615],
          },
          {
            nom: "Marché du dimanche matin sur le port",
            desc: "Le grand marché dominical le long du bassin Saint-Pierre (Quai Vendeuvre) : produits frais, primeurs, poissons.",
            coords: [49.1842, -0.3562],
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
            nom: "Monoprix",
            desc: "45 boulevard du Maréchal Leclerc — le plus pratique du centre, à ~5 min : courses et produits du quotidien, ouvert tard. Parking souterrain.",
            coords: [49.1826, -0.3622],
          },
          {
            nom: "Carrefour (rue de Bernières)",
            desc: "Supermarché de centre-ville, rue de Bernières, pour les courses complètes.",
            coords: [49.1833, -0.3621],
          },
          {
            nom: "Coccinelle Express",
            desc: "Supérette de dépannage vers le Vaugueux, 1 rue Basse : courses de dernière minute. Tél. 06 59 27 12 90.",
            coords: [49.1846, -0.3586],
          },
        ],
      },
      {
        key: "bouche",
        lieux: [
          {
            nom: "Talemelerie Guillaume",
            desc: "52 rue du Vaugueux — boulangerie-pâtisserie pour le pain frais et les viennoiseries du matin.",
            coords: [49.1862, -0.3578],
          },
          {
            nom: "Boulangeries rue Saint-Pierre",
            desc: "Plusieurs boulangeries-pâtisseries le long de la rue Saint-Pierre, tout près.",
            coords: [49.1825, -0.3613],
          },
          {
            nom: "Boucherie Marcel",
            desc: "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.",
            coords: [49.1828, -0.3565],
          },
        ],
      },
      {
        key: "tram",
        lieux: [
          {
            nom: "Arrêt « Bellivet »",
            desc: "Arrêt de tram proche du logement, vers l'église Saint-Pierre : rejoignez le centre, la gare et les campus universitaires.",
            coords: [49.1828, -0.3604],
          },
          {
            nom: "Arrêt « Château Quatrans »",
            desc: "Autre arrêt de tram tout proche, rue de Geôle, en direction du centre et de la gare.",
            coords: [49.1853, -0.3639],
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
            nom: "Pharmacie Saint-Pierre",
            desc: "Pharmacie de centre-ville, proche de l'église Saint-Pierre. Pharmacie de garde : composez le 3237.",
            coords: [49.1832, -0.3618],
          },
          {
            nom: "Pharmacie du Vaugueux",
            desc: "Rue Montoir-Poissonnerie, vers le Vaugueux. Pharmacie de garde : composez le 3237.",
            coords: [49.1857, -0.3597],
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
            desc: "77 rue du Vaugueux : tabac, presse et dépannage.",
            coords: [49.1865, -0.3575],
          },
        ],
      },
    ],
    coupDeCoeur:
      "Flânez dans la rue Froide et les ruelles pavées du vieux Caen, juste au pied de la maison, puis rejoignez le Vaugueux pour dîner. Et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "" },
    note: "Disponible sur la conversation Airbnb ou Booking en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
