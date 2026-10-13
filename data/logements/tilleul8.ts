import type { Logement } from "../types";

/**
 * Logement « Tilleul 8 » — studio indépendant au 38 rue des Tilleuls, 14000 Caen,
 * entre le Jardin des Plantes, la Vallée des Jardins et le campus 1 de
 * l'université, à ~10 min à pied du château.
 *
 * Construit sur le livret StyQR de « Tilleul 2 » (même immeuble) et sur
 * l'annonce Airbnb 1795690762068018121 (hôte Maxime, Agathe co-hôte) :
 * studio pour UNE personne, canapé convertible avec vrai matelas, coin
 * bureau avec vue sur la verdure, coin cuisine équipé, salle d'eau avec
 * douche + WC. 1er étage, porte n°8. PAS de WiFi ni de TV. Parking gratuit
 * sur place.
 * Animaux acceptés (un seul, avec supplément).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER / VÉRIFIER PAR AGATHE :
 *   - Vidéo d'arrivée propre à Tilleul 8 (celle de Tilleul 2 mène à la porte 2,
 *     elle n'est donc pas reprise ici)
 *   - Vidéo du canapé-lit : reprise de Tilleul 2 — à confirmer que c'est le
 *     même modèle
 *
 * « Autour de moi » : les adresses recommandées par Agathe sur le livret StyQR
 * de Tilleul 2 + commerces géolocalisés via OpenStreetMap. Les distances sont
 * recalculées automatiquement depuis les coordonnées du logement.
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */
export const tilleul8: Logement = {
  id: "tilleul8",
  nom: "Tilleul 8",
  adresse: "38 Rue des Tilleuls, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=38+Rue+des+Tilleuls+14000+Caen",
  coords: [49.1935284, -0.3673367],
  cover: "/logements/tilleul8/cover.jpg",

  motAccueil:
    "Bienvenue au Tilleul 8 ! Votre studio, pensé pour une personne, est niché dans une rue calme, à deux pas de l'université, du Jardin des Plantes et de la Vallée des Jardins. Son coin bureau avec vue sur la verdure est idéal pour étudier ou télétravailler, et le château comme le centre historique sont à une dizaine de minutes à pied. Très bon séjour à Caen ! 🌳",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "La boîte à clés se trouve sur le côté gauche de l'immeuble, au 38 rue des Tilleuls (passez le portillon rouge) : c'est la boîte seule, en bas à gauche",
      "La porte de la résidence (porte blanche sous le balcon) est toujours ouverte, pas besoin de clé",
      "Votre logement est au 1er étage, porte n°8",
    ],
    etapes: [
      {
        texte: "Au 38 rue des Tilleuls, passez le portillon rouge, puis montez les escaliers.",
        photo: "/logements/tilleul8/arrivee-1.jpg",
      },
      {
        texte: "Remontez l'allée jusqu'à la maison.",
        photo: "/logements/tilleul8/arrivee-2.jpg",
      },
      {
        texte: "Dirigez-vous sur la gauche de l'immeuble. Trois boîtes à clés sont fixées au mur : la vôtre est la boîte seule, en bas à gauche.",
        photo: "/logements/tilleul8/arrivee-3.jpg",
      },
      { texte: "Composez le code, puis faites descendre le bouton noir pour ouvrir la boîte et récupérer la clé." },
      {
        texte: "Montez ensuite les escaliers sur votre droite pour accéder à la résidence. La porte blanche, sous le balcon, est la porte de la résidence : elle est toujours ouverte, pas besoin de clé.",
        photo: "/logements/tilleul8/arrivee-4.jpg",
      },
      { texte: "Montez au 1er étage : votre logement est la porte n°8. Bienvenue !" },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "🅿️ Un parking gratuit se trouve sur place, avec des places faciles à trouver.\n🅿️ Vous pouvez aussi vous garer dans les rues voisines : rue des Tilleuls, rue Branly, rue du Magasin à Poudre et avenue de Courseulles.\n🅿️ Parkings souterrains payants dans le centre : Mairie, Château et Paul Doumer (tarifs sur indigoneo.fr).",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec canapé convertible (vrai matelas) et rangements",
        "Coin bureau avec vue dégagée sur la verdure",
        "Coin cuisine équipé",
        "Coin repas",
        "Salle d'eau avec douche, lavabo et WC",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Pas de WiFi dans ce logement",
    motDePasse: "Prévoyez votre connexion mobile (4G/5G)",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "📶 Pas de WiFi ni de TV",
        contenu:
          "Le studio ne dispose ni du WiFi ni de la télévision. Pensez à prévoir votre connexion mobile (4G/5G) pour toute la durée de votre séjour.",
      },
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, quelques essentiels vous attendent :\n\n• 🧻 Papier toilette & savon\n• 🧴 Gel douche & shampoing\n• 🧂 Huile, sel & poivre\n• 🧽 Produit vaisselle & éponge",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu:
          "Le studio accueille 1 personne sur le canapé convertible, équipé d'un vrai matelas pour un couchage confortable. Les draps sont fournis.\n\n🎬 La vidéo ci-dessous montre comment déplier le canapé-lit.",
        video: "https://www.youtube.com/watch?v=yB5Dmc_Acvk",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Linge de qualité hôtelière, traité par une blanchisserie professionnelle :\n\n• 🛏️ Draps fournis pour le canapé-lit\n• 🛁 Une serviette de toilette par voyageur + un tapis de bain\n• 🍽️ Un torchon de cuisine\n• 👕 Cintres, rangements & fer à repasser à disposition",
      },
      {
        titre: "🍳 Cuisine",
        contenu:
          "Le coin cuisine est équipé pour préparer vos repas :\n\n• 🔥 Plaques de cuisson\n• ❄️ Réfrigérateur\n• 🍲 Four à micro-ondes\n• ☕ Cafetière, bouilloire & grille-pain\n• 🍴 Vaisselle, couverts, casseroles & poêles\n• 🧂 Huile, sel & poivre fournis",
      },
      {
        titre: "🪑 Espace de travail",
        contenu:
          "Un coin bureau, face à la fenêtre et à la verdure, vous permet d'étudier ou de télétravailler confortablement. Pour la connexion, prévoyez votre partage de connexion mobile (pas de WiFi).",
      },
      {
        titre: "🚿 Salle d'eau",
        contenu: "La salle d'eau dispose d'une douche, d'un lavabo, d'un WC et d'un sèche-cheveux.",
      },
      {
        titre: "🔥 Chauffage",
        contenu:
          "Pour allumer le radiateur, soulevez le petit capot et appuyez sur le bouton marche/arrêt (au centre) : l'écran affiche « Con » (mode confort). Réglez ensuite la température avec les touches + et −. Merci de limiter votre consommation et de baisser le chauffage avant de partir.\n\n🎬 La vidéo ci-dessous montre la manipulation.",
        video: "/logements/tilleul8/chauffage.mp4",
        videoPortrait: true,
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
    electromenager: [
      "Plaques de cuisson",
      "Réfrigérateur",
      "Four à micro-ondes",
      "Bouilloire électrique",
      "Cafetière",
      "Grille-pain",
      "Fer à repasser",
      "Sèche-cheveux",
    ],
    reglementInterieur: {
      capaciteMax: 1,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, à l'intérieur du logement comme dans les parties communes.",
    },
    poubellesPhoto: "/logements/tilleul8/poubelles.jpg",
    poubelles:
      "♻️ Les bacs se trouvent dans la rue des Tilleuls, à la sortie du portail. Merci de bien trier vos déchets.\n\n🟡 Bac jaune — emballages & recyclables\n⚫ Bac gris — ordures ménagères\n🍷 Verre — conteneur au 9 rue des Tilleuls",
    animaux:
      "Les animaux de compagnie sont les bienvenus (un seul par séjour), avec un supplément tarifaire.",
  },

  equipements: [
    "Canapé convertible (vrai matelas)",
    "Espace de travail dédié",
    "Coin cuisine équipé",
    "Plaques de cuisson",
    "Four à micro-ondes",
    "Réfrigérateur",
    "Cafetière & bouilloire",
    "Grille-pain",
    "Salle d'eau avec douche",
    "Sèche-cheveux",
    "Fer à repasser",
    "Stores ou rideaux occultants",
    "Chauffage",
    "Eau chaude",
    "Linge de lit & serviettes",
    "Parking gratuit sur place",
    "Animaux acceptés",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle et la ranger",
      "Vider les poubelles dans les bacs de la rue des Tilleuls (à la sortie du portail)",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser le chauffage",
      "Fermer l'appartement à clé et remettre la clé dans la boîte à clés",
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
      "Arrêt de tram « CROUS - SUAPS » (~3 min)",
      "Carrefour City et boulangeries du Calvaire Saint-Pierre (~7 min)",
      "Le Jardin des Plantes (~7 min)",
      "La Vallée des Jardins (~7 min)",
      "Château de Caen (~11 min)",
      "Rue Saint-Pierre et le centre historique (~15 min)",
      "Le Mémorial de Caen (~17 min)",
    ],
    note: "Vous êtes au nord du centre-ville, dans un quartier résidentiel et calme, entre le Jardin des Plantes, la Vallée des Jardins et le campus universitaire. Le château et le centre historique se rejoignent à pied en une dizaine de minutes, et le tram (arrêt CROUS - SUAPS, à 3 minutes) dessert la gare et la presqu'île.",
  },

  autourDeMoi: {
    categories: [
      {
        key: "culture",
        lieux: [
          {
            nom: "Château de Caen",
            desc: "Forteresse fondée par Guillaume le Conquérant vers 1060, l'une des plus vastes enceintes médiévales d'Europe. Remparts, jardins et belle vue sur la ville. Accès libre à l'enceinte, à ~11 min à pied. Tél. 02 31 30 47 60.",
            coords: [49.186585, -0.3632897],
          },
          {
            nom: "Église Saint-Pierre",
            desc: "Joyau du gothique flamboyant au cœur de la ville, face au château. Clocher remarquable et chevet richement sculpté.",
            coords: [49.1840696, -0.3606901],
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
            nom: "Bibliothèque Alexis-de-Tocqueville",
            desc: "La grande bibliothèque de Caen, sur la presqu'île, face au port : architecture spectaculaire et belle vue depuis les étages.",
            coords: [49.1823039, -0.3504537],
          },
        ],
      },
      {
        key: "loisirs",
        lieux: [
          {
            nom: "Le Mémorial de Caen",
            desc: "Esplanade Général Eisenhower. Le grand musée pour la Paix : Seconde Guerre mondiale, Débarquement et Bataille de Normandie. L'incontournable de Caen, à ~17 min à pied. Tél. 02 31 06 06 45.",
            coords: [49.1973431, -0.3839795],
          },
          {
            nom: "Musée des Beaux-Arts de Caen",
            desc: "Dans le château : riche collection de peintures (XVe–XXe s.) et beau parc de sculptures. Entrée des collections permanentes gratuite. Tél. 02 31 30 47 60.",
            coords: [49.1872, -0.3623],
          },
          {
            nom: "Patinoire de Caen la Mer",
            desc: "Rue Jean de la Varende, près de la Prairie : patinage en famille ou entre amis.",
            coords: [49.1773338, -0.3685847],
          },
          {
            nom: "Stade nautique Eugène Maës",
            desc: "Boulevard Yves Guillou : la grande piscine de Caen, bassins intérieurs et extérieurs.",
            coords: [49.1765959, -0.3688306],
          },
          {
            nom: "Au fil de l'Orne (pédalos)",
            desc: "Quai Amiral Hamelin : balade en pédalo sur l'Orne, aux beaux jours.",
            coords: [49.1787233, -0.3507161],
          },
          {
            nom: "Festyland",
            desc: "Parc d'attractions familial à Bretteville-sur-Odon, à ~10 min en voiture.",
            coords: [49.1839642, -0.4249263],
          },
          {
            nom: "Bowling de Caen",
            desc: "Avenue de la Voie au Coq, à Bretteville-sur-Odon : bowling et jeux, à ~12 min en voiture.",
            coords: [49.1648779, -0.4250074],
          },
          {
            nom: "Golf de Caen la Mer",
            desc: "Parcours de golf au Vallon, à Biéville-Beuville, à ~15 min en voiture.",
            coords: [49.228079, -0.336928],
          },
          {
            nom: "Plages du Débarquement",
            desc: "Arromanches et ses musées : la Côte de Nacre et le D-Day à 30–45 min de route.",
            coords: [49.338, -0.621],
            itineraire: "https://www.google.com/maps/search/?api=1&query=Arromanches-les-Bains",
          },
          {
            nom: "Le Mont-Saint-Michel",
            desc: "La célèbre merveille de l'Occident, son abbaye et sa baie. Une excursion à la journée, à ~1h15 de route.",
            coords: [48.6355, -1.5103],
            itineraire: "https://www.google.com/maps/search/?api=1&query=Mont-Saint-Michel",
          },
          {
            nom: "Parc zoologique de Jurques",
            desc: "Zoo dans un beau cadre vallonné du Bocage normand, à ~35 min de route. Idéal en famille.",
            coords: [49.0032281, -0.7533696],
          },
        ],
      },
      {
        key: "nature",
        lieux: [
          {
            nom: "Le Jardin des Plantes",
            desc: "Place Blot. Jardin botanique gratuit, serres et collections : un havre de verdure à ~7 min à pied du logement. Tél. 02 31 30 48 38.",
            coords: [49.189344, -0.3711567],
          },
          {
            nom: "La Vallée des Jardins",
            desc: "Avenue de Courseulles, tout près du logement : grand parc paysager avec rivière, ponts et grands arbres. Parfait pour une balade ou un footing.",
            coords: [49.1955221, -0.3735593],
          },
          {
            nom: "Parc de la Colline aux Oiseaux",
            desc: "Avenue de l'Amiral Mountbatten. Grand parc paysager de 17 ha près du Mémorial : roseraie, labyrinthe et animaux. Idéal en famille. Tél. 02 31 30 41 00.",
            coords: [49.1974651, -0.3923646],
          },
          {
            nom: "Le Bassin Saint-Pierre (port de plaisance)",
            desc: "Le port de plaisance en plein centre : terrasses, balades le long des quais et marché du dimanche matin.",
            coords: [49.1829324, -0.3539953],
          },
          {
            nom: "La Prairie",
            desc: "Vaste prairie naturelle en plein cœur de ville, le long de l'Orne, avec l'hippodrome. Parfaite pour les balades et le jogging.",
            coords: [49.1788, -0.3675],
          },
          {
            nom: "Randonnée à Clécy",
            desc: "Au cœur de la Suisse normande : falaises, boucles de l'Orne et belles randonnées, à ~40 min de route.",
            coords: [48.916865, -0.481599],
            itineraire: "https://www.google.com/maps/search/?api=1&query=Cl%C3%A9cy",
          },
        ],
      },
      {
        key: "plages",
        lieux: [
          {
            nom: "Plage de Colleville-Montgomery",
            desc: "Grande plage de sable de la Côte de Nacre (Sword Beach), à ~20 min en voiture.",
            coords: [49.2934522, -0.2816112],
          },
          {
            nom: "Ouistreham — Riva-Bella",
            desc: "La plage la plus proche (~20 min) : grande plage de sable, casino et front de mer animé. Embarcadère des ferries vers l'Angleterre.",
            coords: [49.2868, -0.2497],
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
          {
            nom: "Plage de Deauville",
            desc: "Promenade des Planches. La plage chic et ses parasols, à ~40 min : planches, villas et glamour. Tél. 02 31 14 40 00.",
            coords: [49.3607, 0.0665],
            itineraire: "https://www.google.com/maps/search/?api=1&query=Plage+de+Deauville+Les+Planches",
          },
        ],
      },
      {
        key: "restaurants",
        lieux: [
          {
            nom: "Ty Gibus",
            desc: "Le restaurant le plus proche, juste à côté du logement.",
            coords: [49.193753, -0.367609],
          },
          {
            nom: "Le Pavillon",
            desc: "Cuisine française, à ~8 min à pied du logement.",
            coords: [49.192564, -0.35947],
          },
          {
            nom: "La Casinière",
            desc: "Rue aux Namps, dans le quartier Saint-Sauveur : une adresse que nous recommandons.",
            coords: [49.1841772, -0.3666094],
          },
          {
            nom: "Le Comptoir",
            desc: "Bonne table de centre-ville, 3-5 rue Saint-Sauveur. Tél. 02 31 38 53 40.",
            coords: [49.1837389, -0.3662196],
          },
          {
            nom: "Le Boudoir",
            desc: "Adresse gourmande, 15 rue Pemagnie, dans le centre historique. Tél. 02 31 93 39 43.",
            coords: [49.1836653, -0.3694402],
          },
          {
            nom: "La Buona Tavola",
            desc: "Cuisine italienne, 47 rue Saint-Sauveur. Tél. 02 31 50 35 35.",
            coords: [49.1830556, -0.3677778],
          },
          {
            nom: "Mian Mian",
            desc: "Rue de Geôle, au pied du château : une adresse que nous recommandons.",
            coords: [49.1843097, -0.3620192],
          },
          {
            nom: "Pizzeria Canaglia",
            desc: "Pizzas à l'italienne, 5 rue Écuyère, en plein centre. Tél. 02 31 79 90 83.",
            coords: [49.1819193, -0.3675325],
          },
        ],
      },
      {
        key: "restorapide",
        lieux: [
          {
            nom: "Les Burgers de Colette (rue Buquet)",
            desc: "Burgers maison, 6 rue Buquet. Tél. 02 31 39 55 03.",
            coords: [49.1848381, -0.3589643],
          },
          {
            nom: "Tartines et Gourmandises",
            desc: "Tartines, salades et douceurs faites maison, 20 rue Froide. Tél. 02 31 50 24 32.",
            coords: [49.1837062, -0.3656687],
          },
          {
            nom: "Bayla",
            desc: "Rue Écuyère, en centre-ville : une adresse que nous recommandons.",
            coords: [49.1818898, -0.3701178],
          },
        ],
      },
      {
        key: "bars",
        lieux: [
          {
            nom: "Arbuste Café",
            desc: "Rue Montoir-Poissonnerie : coffee shop, idéal pour une pause café.",
            coords: [49.184466, -0.3604197],
          },
          {
            nom: "Kinkuro",
            desc: "Coffee shop de la rue Écuyère : cafés de spécialité et douceurs.",
            coords: [49.1819977, -0.3687669],
          },
          {
            nom: "Le Dépôt",
            desc: "Rue Buquet, près du port : un bar que nous recommandons.",
            coords: [49.1849681, -0.3590667],
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
            nom: "El Che",
            desc: "Bar-club mythique de la nuit caennaise, 6 rue du Tour de Terre, près du château : ambiance rhum et danse, du jeudi au samedi.",
            coords: [49.1848553, -0.3640192],
          },
          {
            nom: "Le French",
            desc: "Bar festif sur le port, 32 quai Vendeuvre.",
            coords: [49.1826539, -0.3553094],
          },
          {
            nom: "Le Portobello Rock Club",
            desc: "Avenue de Tourville, près du port : bar rock et concerts.",
            coords: [49.1836413, -0.3522146],
          },
          {
            nom: "Rue Écuyère & rue de Bras",
            desc: "L'épicentre de la vie nocturne caennaise : bars et pubs à la suite, à ~15 min à pied.",
            coords: [49.1823, -0.364],
          },
          {
            nom: "Casino de Luc-sur-Mer",
            desc: "Rue Guynemer, face à la mer : machines à sous, jeux de table et restaurant, à ~25 min en voiture.",
            coords: [49.3211111, -0.3566667],
          },
        ],
      },
      {
        key: "cinema",
        lieux: [
          {
            nom: "Pathé Les Rives de l'Orne",
            desc: "Multiplexe au centre commercial Les Rives de l'Orne, près du port et de la gare, films récents.",
            coords: [49.1773856, -0.3500946],
          },
          {
            nom: "Cinéma LUX",
            desc: "Cinéma art & essai emblématique de Caen, 6 avenue Sainte-Thérèse, à l'est de la ville.",
            coords: [49.1906, -0.3372],
          },
          {
            nom: "Théâtre de Caen",
            desc: "Belle programmation lyrique, danse et théâtre, boulevard du Maréchal Leclerc.",
            coords: [49.1819, -0.364],
          },
        ],
      },
      {
        key: "commerces",
        lieux: [
          {
            nom: "Marché Saint-Sauveur (vendredi matin)",
            desc: "Le grand marché du vendredi matin, place Saint-Sauveur : produits frais, fromages, poissons et primeurs.",
            coords: [49.182429, -0.369917],
          },
          {
            nom: "Galerie des Croisiers",
            desc: "Rue des Croisiers, dans le centre historique : une galerie que nous recommandons.",
            coords: [49.1842979, -0.365522],
          },
          {
            nom: "Cave Rouge et Blanc",
            desc: "Caviste rue aux Namps : de jolies bouteilles à offrir ou partager.",
            coords: [49.1840356, -0.3664232],
          },
          {
            nom: "Rue Saint-Pierre",
            desc: "L'artère commerçante de Caen : boutiques, enseignes et grands magasins, à ~15 min à pied.",
            coords: [49.1822, -0.3615],
          },
          {
            nom: "Centre commercial Les Rives de l'Orne",
            desc: "Galerie marchande moderne entre le port et la gare : boutiques, restaurants et cinéma.",
            coords: [49.1786285, -0.3504814],
          },
          {
            nom: "Office de Tourisme de Caen",
            desc: "Place Saint-Pierre : plans, idées de visites et billetterie.",
            coords: [49.1837083, -0.3612722],
          },
          {
            nom: "La Poste",
            desc: "Bureau de poste rue Georges Lebret, près de la Prairie.",
            coords: [49.1800912, -0.3640333],
          },
        ],
      },
      {
        key: "courses",
        lieux: [
          {
            nom: "Carrefour City",
            desc: "Rue de la Défense Passive, au Calvaire Saint-Pierre : la supérette la plus pratique (~8 min à pied).",
            coords: [49.19901, -0.365444],
          },
          {
            nom: "E.Leclerc Caen",
            desc: "Rue Lanfranc : hypermarché pour les courses complètes, à ~5 min en voiture.",
            coords: [49.1862961, -0.3810212],
          },
          {
            nom: "Casino Shop",
            desc: "Rue Saint-Pierre : supérette de centre-ville pour le dépannage.",
            coords: [49.1835703, -0.3620525],
          },
          {
            nom: "Coccinelle Express",
            desc: "Rue Basse, près du port : supérette de dépannage.",
            coords: [49.184705, -0.358662],
          },
          {
            nom: "Le Verger Saint-Jean",
            desc: "Primeur de quartier (fruits, légumes, produits frais), 124 rue Saint-Jean. Tél. 02 31 86 00 19.",
            coords: [49.1799123, -0.3580777],
          },
        ],
      },
      {
        key: "bouche",
        lieux: [
          {
            nom: "Miettes et Cie",
            desc: "Boulangerie du Calvaire Saint-Pierre, à ~7 min à pied : pain frais et viennoiseries du matin.",
            coords: [49.197657, -0.364306],
          },
          {
            nom: "Aux Délices d'Édimbourg",
            desc: "Boulangerie-pâtisserie, à ~8 min à pied côté rue de la Délivrande.",
            coords: [49.191209, -0.359841],
          },
          {
            nom: "Maison Kayser — Saint-Sauveur",
            desc: "Place Saint-Sauveur : boulangerie-pâtisserie, pain au levain et viennoiseries.",
            coords: [49.1828662, -0.3681402],
          },
          {
            nom: "Fromagerie Conquérant",
            desc: "Rue Guillaume le Conquérant : fromages normands et d'ailleurs, de bon conseil.",
            coords: [49.1822109, -0.371903],
          },
          {
            nom: "Poissonnerie Le Grand Bleu",
            desc: "Rue Guillaume le Conquérant : poissons et fruits de mer de la côte normande.",
            coords: [49.1823635, -0.3737343],
          },
          {
            nom: "Boucherie Sabot",
            desc: "Boulevard des Alliés : boucherie-charcuterie artisanale.",
            coords: [49.1844252, -0.3593992],
          },
          {
            nom: "Boucherie Marcel",
            desc: "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.",
            coords: [49.1827939, -0.3565822],
          },
          {
            nom: "La Crémerie des Baratineurs",
            desc: "Rue Saint-Jean : crémerie-fromagerie, beurre et produits laitiers normands.",
            coords: [49.181263, -0.3583316],
          },
        ],
      },
      {
        key: "tram",
        lieux: [
          {
            nom: "Arrêt « CROUS - SUAPS »",
            desc: "L'arrêt de tram le plus proche du logement (~3 min à pied) : rejoignez le centre, la gare et la presqu'île.",
            coords: [49.193764, -0.363836],
          },
          {
            nom: "Arrêt « Université »",
            desc: "Arrêt de tram et de bus de l'esplanade de la Paix (~6 min à pied), au pied du campus.",
            coords: [49.188868, -0.364064],
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
            desc: "Liaisons directes vers Paris Saint-Lazare (~2h). À ~15 min en tram depuis l'arrêt CROUS - SUAPS.",
            coords: [49.1771634, -0.3489263],
          },
          {
            nom: "Gare routière de Caen",
            desc: "Bus régionaux (Nomad) vers les plages, Bayeux et le reste du Calvados, à côté de la gare SNCF.",
            coords: [49.176488, -0.346787],
          },
          {
            nom: "Aéroport de Caen-Carpiquet",
            desc: "À l'ouest de la ville : vols intérieurs et saisonniers.",
            coords: [49.183191, -0.4594302],
          },
          {
            nom: "Sixt — location de voitures",
            desc: "Place de la Gare : location de voitures pour explorer la Normandie.",
            coords: [49.1756227, -0.3481749],
          },
          {
            nom: "Taxis Abeilles Caen",
            desc: "Réservation de taxi à Caen et alentours. Tél. 02 31 52 17 89.",
          },
          {
            nom: "TotalEnergies — Relais Beau Site",
            desc: "Station-service boulevard Yves Guillou.",
            coords: [49.1727, -0.389726],
          },
        ],
      },
      {
        key: "sante",
        lieux: [
          {
            nom: "Pharmacie du Calvaire Saint-Pierre",
            desc: "La pharmacie la plus proche du logement (~7 min à pied). Pharmacie de garde : composez le 3237.",
            coords: [49.197753, -0.364309],
          },
          {
            nom: "Grande Pharmacie de Caen",
            desc: "Rue Saint-Pierre, en centre-ville.",
            coords: [49.183458, -0.36294],
          },
          {
            nom: "Pharmacie Danjou (Aprium)",
            desc: "Place Malherbe, en bas de la rue Écuyère.",
            coords: [49.1819435, -0.3671331],
          },
          {
            nom: "Clinique vétérinaire Hastings",
            desc: "Boulevard Dunois : pour votre compagnon à quatre pattes en cas de besoin.",
            coords: [49.1860168, -0.3841164],
          },
        ],
      },
      {
        key: "hopital",
        lieux: [
          {
            nom: "Clinique de la Miséricorde",
            desc: "Fossés Saint-Julien, à ~12 min à pied : l'établissement de santé le plus proche du logement.",
            coords: [49.185343, -0.367257],
          },
          {
            nom: "Hôpital privé Saint-Martin",
            desc: "Rue des Roquemonts, près du Mémorial (urgences privées). Tél. 02 31 15 51 51.",
            coords: [49.1980727, -0.3805366],
          },
          {
            nom: "CHU Caen Normandie",
            desc: "Centre hospitalier universitaire (urgences), au nord de la ville, secteur Côte de Nacre. Tél. 02 31 06 31 06.",
            coords: [49.205918, -0.35519],
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
        key: "laverie",
        lieux: [
          {
            nom: "Urban Wash",
            desc: "Rue des Teinturiers : laverie automatique, près du château.",
            coords: [49.1839747, -0.3631268],
          },
          {
            nom: "Lavomatique Caen Écuyère",
            desc: "Rue Écuyère : laverie automatique en centre-ville.",
            coords: [49.1820676, -0.3674522],
          },
          {
            nom: "Pressing Baechler",
            desc: "Rue du Pont Saint-Jacques : pressing et nettoyage.",
            coords: [49.1812234, -0.362506],
          },
        ],
      },
      {
        key: "tabac",
        lieux: [
          {
            nom: "Tabac L'Antre Potes",
            desc: "114 rue de Geôle : le bar-tabac le plus proche du logement (~9 min à pied).",
            coords: [49.1872386, -0.3660168],
          },
          {
            nom: "Tabac Presse Pemagnie",
            desc: "Rue Pemagnie : tabac et presse, dans le centre historique.",
            coords: [49.1836016, -0.3688758],
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
    ],
    coupDeCoeur:
      "Commencez la journée par une balade dans la Vallée des Jardins, juste à côté, puis descendez par le Jardin des Plantes jusqu'au château : tout se fait à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur — et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation Airbnb ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
