import type { Logement } from "../types";
import { memorial } from "./memorial";

/**
 * Logement « Cinéma Room » — appartement de 55 m² dans un corps de ferme rénové,
 * 27 rue Éole à Moult-Chicheboville (hameau de Chicheboville), à 15 min de Caen
 * et 25 min des plages. Cour privative avec parking et portail électrique.
 *
 * D'après l'annonce Airbnb 1202631215226502834 (hôte Benoit) : 4 voyageurs,
 * chambre avec lit queen size + canapé-lit dans le salon, lit bébé. Salon
 * cinéma avec vidéoprojecteur XXL (Netflix, Disney+, Canal+… pas de Prime
 * Video), PS3 et borne d'arcade rétro, système audio. Jacuzzi privatif avec
 * vidéoprojecteur (avril → octobre), INCLUS sans supplément : les voyageurs
 * préviennent s'ils l'utilisent ; sinon il est proposé (payant) à l'autre
 * logement de la ferme (annonce 50543472).
 * Cuisine équipée (cuisinière gaz, four, micro-ondes, congélateur). Clim,
 * Ethernet, espace de travail. Arrivée autonome 16h → 2h, départ 10h.
 * ⚠️ Eau froide NON POTABLE (puits) : des bouteilles d'eau sont fournies.
 * Recharge de voiture électrique interdite. Caméra extérieure sur l'accès.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER / VÉRIFIER PAR AGATHE :
 *   - Photos de la boîte à clés (devant la porte du logement) et des
 *     conteneurs à poubelles — à venir
 *   - Mode d'emploi vidéoprojecteur / jacuzzi / borne d'arcade (photos ?)
 *
 * Confirmé par Agathe (2026-11-04) : portail à code (1437#) ; WiFi Eco14370
 * (même mot de passe que l'Apto) ; conteneurs dans l'allée ; boîte à clés
 * devant la porte de chaque logement ; ménage comme d'habitude (pas d'option
 * 80 €) ; arrivée anticipée (14h30) et départ tardif (12h max) à 10 € chacun,
 * sur demande, comme le propriétaire (pas de lien Stripe) ; jacuzzi de 18h à 22h.
 *
 * « Autour de moi » : adresses réelles géolocalisées via OpenStreetMap autour du
 * 27 rue Éole (Bellengreville à ~2 km, Argences à ~4 km). Culture et plages
 * reprises du livret Mémorial (Caen). Distances recalculées automatiquement.
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */
export const cinema: Logement = {
  id: "cinema",
  nom: "Cinéma Room",
  adresse: "27 Rue Éole, 14370 Moult-Chicheboville",
  ville: "Moult-Chicheboville",
  itineraire: "https://maps.google.com/?q=27+Rue+%C3%89ole+14370+Moult-Chicheboville",
  coords: [49.111199, -0.222583],
  cover: "/logements/cinema/cover.jpg",

  motAccueil:
    "Bienvenue à la Cinéma Room ! Installez-vous dans le canapé : écran XXL, pack streaming, borne d'arcade et jacuzzi vous attendent dans ce corps de ferme rénové, au calme de la campagne, à seulement 15 minutes de Caen. Petit défi : nous avons glissé des références cinématographiques un peu partout dans le logement… saurez-vous toutes les retrouver ? 🎬🍿",

  arrivee: {
    horaire: "Arrivée autonome de 16h à 2h du matin",
    checkinExpress: [
      "Arrivée autonome grâce à une boîte à clés sécurisée, située devant la porte du logement",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Le portail de la cour s'ouvre avec le code 1437# : entrez et garez-vous sur le parking privé",
      "⚠️ Le logement n'est pas adapté aux personnes à mobilité réduite",
    ],
    etapes: [
      {
        texte:
          "Rendez-vous au 27 rue Éole, à Moult-Chicheboville. Ouvrez le portail de la cour avec le code 1437# et garez-vous à l'intérieur. ⚠️ Il n'y a de la place que pour une seule voiture : si vous venez à deux véhicules, un parking est disponible au niveau de la mairie, un peu plus loin.",
      },
      {
        texte:
          "Repérez la porte en bois, avec la pancarte « Cinema Room ». La boîte à clés sécurisée est fixée sur le mur en pierre, juste à droite de la porte. Composez le code communiqué dans votre message pour l'ouvrir et récupérer les clés.",
        photo: "/logements/cinema/boite-cles.jpg",
      },
      {
        texte:
          "Ouvrez la porte en bois avec la clé grise : tournez la poignée et poussez. Veillez à bien refermer la porte derrière vous.",
      },
      {
        texte:
          "Montez ensuite au premier étage : la porte du logement se trouve sur votre gauche. Ouvrez-la avec la clé rouge… et bon séjour ! 🎬",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver plus tôt ? Une arrivée anticipée à partir de 14h30 est possible sur demande, selon disponibilité, moyennant un supplément de 10 €. Contactez-nous pour la réserver.",
    },
    parking:
      "Parking privé gratuit sur place, dans la cour (portail à code : 1437#). ⚠️ Il n'y a de la place que pour une seule voiture : si vous venez à deux véhicules, un parking est disponible au niveau de la mairie, un peu plus loin.\n⚠️ La recharge de voiture électrique est interdite sur place. Bornes de recharge les plus proches : à Bellengreville (~2 km) et au E.Leclerc d'Argences (~4 km).",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Salon cinéma avec vidéoprojecteur XXL, système audio et canapé-lit",
        "Espace gaming : PlayStation 3 et borne d'arcade rétro",
        "Chambre spacieuse avec lit queen size et armoire",
        "Cuisine équipée avec table à manger",
        "Salle de bain avec douche et lavabo",
        "Espace de travail",
      ],
      etage: [],
      exterieur: [
        "Cour privative avec parking",
        "Jacuzzi privatif avec vidéoprojecteur, sans supplément (d'avril à octobre)",
      ],
    },
  },

  wifi: {
    reseau: "Cinéma Room",
    motDePasse: "Eco14370",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🚱 Eau non potable",
        contenu:
          "⚠️ L'eau froide du robinet provient d'un puits : elle n'est PAS potable. Des bouteilles d'eau sont mises à votre disposition pour boire et cuisiner. L'eau chaude peut être utilisée normalement pour la douche et la vaisselle.",
      },
      {
        titre: "🎬 Salle cinéma & streaming",
        contenu:
          "Le salon est pensé comme une vraie salle de cinéma : vidéoprojecteur XXL, système audio et stores occultants.\n\n• 📺 Pack streaming inclus : Netflix, Disney+, Canal+ et bien d'autres\n• ❌ Prime Video n'est pas proposé\n• 🔑 Pensez à vous déconnecter de vos comptes personnels avant de partir\n\nEt ouvrez l'œil : des clins d'œil à des films cultes sont cachés un peu partout dans le logement ! 🔍",
      },
      {
        titre: "🎮 Espace gaming",
        contenu:
          "Une PlayStation 3 et une borne d'arcade rétro sont à votre disposition pour des parties entre amis ou en famille. Merci d'en prendre soin et de les éteindre après utilisation.",
      },
      {
        titre: "🛁 Jacuzzi privatif",
        contenu:
          "Le jacuzzi privatif, équipé d'un vidéoprojecteur, est inclus dans votre séjour, sans supplément (disponible d'avril à octobre, de 18h à 22h).\n\n⚠️ Merci de nous prévenir à l'avance si vous comptez l'utiliser ou non pendant votre séjour : cela nous permet de l'organiser au mieux.",
      },
      {
        titre: "🚴 Vélos",
        contenu:
          "Des vélos et une remorque enfant sont proposés à la location : idéal pour explorer les marais et la campagne alentour. Contactez-nous pour en profiter.",
      },
      {
        titre: "🛏️ Couchage & linge",
        contenu:
          "• 🛏️ Chambre avec lit queen size, literie en coton\n• 🛋️ Canapé-lit dans le salon\n• 👶 Lit bébé disponible\n• ➕ Oreillers et couvertures supplémentaires\n• 👕 Armoire, cintres et fer à repasser",
      },
      {
        titre: "🍳 Cuisine",
        contenu:
          "La cuisine est équipée pour préparer vos repas :\n\n• 🔥 Cuisinière gaz et four\n• 🍲 Four à micro-ondes\n• ❄️ Réfrigérateur et congélateur\n• ☕ Cafetière et bouilloire\n• 🍴 Vaisselle, couverts, verres à vin, casseroles et poêles\n• 🧂 Huile, sel et poivre fournis\n• 🪑 Table à manger",
      },
      {
        titre: "🚿 Salle de bain",
        contenu: "La salle de bain dispose d'une douche, d'un lavabo, de rangements et d'un sèche-cheveux.",
      },
      {
        titre: "🌡️ Chauffage & climatisation",
        contenu:
          "Le logement est équipé de radiateurs et de la climatisation. Merci de limiter votre consommation, de fermer les fenêtres quand le chauffage ou la clim fonctionne, et de tout baisser avant de partir.",
      },
      {
        titre: "👥 Visiteurs",
        contenu:
          "Vous pouvez recevoir jusqu'à 3 personnes en journée, à condition qu'elles ne passent pas la nuit sur place et n'utilisent pas la douche. Toute personne non prévue dans la réservation sera facturée 20 € par nuit, pour toute la durée du séjour.",
      },
      {
        titre: "📹 Vidéosurveillance",
        contenu:
          "Une caméra de surveillance filme l'accès extérieur du logement (aucune caméra à l'intérieur).",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Vidéoprojecteur",
      "Système audio",
      "PlayStation 3",
      "Borne d'arcade",
      "Cuisinière gaz",
      "Four",
      "Four à micro-ondes",
      "Réfrigérateur",
      "Congélateur",
      "Cafetière",
      "Bouilloire électrique",
      "Fer à repasser",
      "Sèche-cheveux",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      tournagesAutorises: false,
      horairesCalme:
        "Merci de respecter le calme entre 22h00 et 8h00, notamment dans la cour et au jacuzzi, par égard pour le voisinage.",
      texte:
        "Logement non-fumeur (cigarette électronique et vapotage compris). Les fêtes et les événements sont interdits. Les animaux ne sont pas acceptés. La recharge de voiture électrique est interdite sur place. Les photos et tournages commerciaux ne sont pas autorisés.",
    },
    poubelles:
      "Les conteneurs à poubelles se trouvent dans l'allée, à droite en sortant de la Cinéma Room. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : à déposer au point de collecte du village",
    poubellesPhoto: "/logements/cinema/poubelles.jpg",
    animaux: "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "Connexion Ethernet",
    "Salle cinéma avec vidéoprojecteur XXL",
    "Netflix, Disney+, Canal+",
    "Système audio",
    "PlayStation 3",
    "Borne d'arcade",
    "Jacuzzi privatif inclus (avril → octobre)",
    "Lit queen size",
    "Canapé-lit",
    "Lit bébé",
    "Cuisine équipée",
    "Cuisinière gaz",
    "Four",
    "Four à micro-ondes",
    "Réfrigérateur & congélateur",
    "Cafetière & bouilloire",
    "Table à manger",
    "Espace de travail",
    "Climatisation",
    "Chauffage",
    "Eau chaude",
    "Stores ou rideaux occultants",
    "Sèche-cheveux",
    "Fer à repasser",
    "Linge de lit",
    "Vélos (location)",
    "Parking privé gratuit",
    "Entrée privée",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Fermer les fenêtres, éteindre les lumières, le vidéoprojecteur et la borne d'arcade, et baisser le chauffage ou la climatisation",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Disney+, etc.)",
      "Fermer le logement à clé et remettre les clés dans la boîte à clés",
    ],
    departTardif: {
      texte:
        "Le départ est prévu au plus tard à 10h. Un départ tardif jusqu'à 12h maximum est possible sur demande, selon disponibilité, moyennant un supplément de 10 €. Contactez-nous pour le réserver.",
      options: [],
    },
  },

  quartier: {
    aPied: [
      "Observatoire ornithologique des marais (~15 min)",
      "Étangs du Grand Marais (~15 min)",
      "Sentiers de randonnée du Val ès Dunes (sur place)",
    ],
    note: "Vous êtes à la campagne, dans un hameau calme de Moult-Chicheboville, au bord des marais de Chicheboville-Bellengreville : idéal pour les balades à pied ou à vélo. Une voiture est conseillée : les premiers commerces sont à Bellengreville (~3 min), le supermarché et les services à Argences (~6 min), Caen et le Mémorial à 15–20 min, les plages de la Côte Fleurie à 25 min.",
  },

  autourDeMoi: {
    categories: [
      {
        key: "nature",
        lieux: [
          {
            nom: "Observatoire ornithologique des marais",
            desc: "À ~15 min à pied du logement : un affût pour observer les oiseaux des marais de Chicheboville-Bellengreville. Pensez aux jumelles !",
            coords: [49.11594, -0.2141],
          },
          {
            nom: "Marais de Chicheboville-Bellengreville",
            desc: "Espace naturel protégé, l'un des derniers marais alcalins de la plaine de Caen : roselières, orchidées et oiseaux. Sentier de découverte balisé, parfait à pied ou à vélo.",
            coords: [49.11646, -0.21054],
          },
          {
            nom: "Étangs du Grand Marais",
            desc: "Plans d'eau au cœur des marais, à ~1 km : une jolie balade au calme.",
            coords: [49.11879, -0.2127],
          },
          {
            nom: "Circuits de randonnée du Val ès Dunes",
            desc: "Plusieurs boucles balisées au départ des villages alentour, à travers champs, bois et marais. Plans affichés sur les panneaux d'information.",
            coords: [49.08884, -0.23692],
          },
          {
            nom: "Parc Georgette Loir",
            desc: "Le parc de Bellengreville, à ~2 km : espace vert et aire de jeux pour les enfants.",
            coords: [49.12583, -0.2111],
          },
        ],
      },
      {
        key: "loisirs",
        lieux: [
          {
            nom: "Pop Corn Labyrinthe",
            desc: "Labyrinthe géant dans un champ de maïs, à ~3 km : jeux et énigmes en famille (ouvert en été, vérifiez les dates).",
            coords: [49.12766, -0.25948],
          },
          {
            nom: "Fraiserie Hardy",
            desc: "Cueillette et vente de fraises à la ferme, à ~3 km (en saison).",
            coords: [49.13633, -0.21589],
          },
          {
            nom: "La Cueillette de Cagny",
            desc: "Cueillette de fruits, légumes et fleurs, avec boutique de produits fermiers, à ~10 min en voiture.",
            coords: [49.15864, -0.27363],
          },
          {
            nom: "Le Mémorial de Caen",
            desc: "Le grand musée pour la Paix : Seconde Guerre mondiale, Débarquement et Bataille de Normandie. L'incontournable de Caen, à ~20 min en voiture. Tél. 02 31 06 06 45.",
            coords: [49.1976, -0.38475],
          },
          {
            nom: "Pegasus Bridge — Mémorial Pegasus",
            desc: "Le pont libéré dans la nuit du 5 au 6 juin 1944 et son musée, à Ranville, à ~20 min en voiture.",
            coords: [49.2425, -0.2731],
            itineraire: "https://www.google.com/maps/search/?api=1&query=M%C3%A9morial+Pegasus+Ranville",
          },
          {
            nom: "Plages du Débarquement",
            desc: "Arromanches et ses musées, sur la Côte de Nacre : le D-Day à ~45 min de route.",
            coords: [49.338, -0.621],
            itineraire: "https://www.google.com/maps/search/?api=1&query=Arromanches-les-Bains",
          },
          {
            nom: "Honfleur",
            desc: "Charmant port pittoresque : galeries d'art, le Vieux Bassin, les bateaux et les boutiques. À ~50 min.",
            coords: [49.423, 0.2309],
            itineraire: "https://www.google.com/maps/search/?api=1&query=Honfleur",
          },
        ],
      },
      {
        key: "culture",
        lieux: [
          {
            nom: "Site de la bataille du Val-ès-Dunes",
            desc: "À ~2 km : c'est ici qu'en 1047 le jeune Guillaume, futur Conquérant, remporta sa première grande victoire et s'imposa comme duc de Normandie. Panneaux d'interprétation sur place.",
            coords: [49.11624, -0.2476],
          },
          ...(memorial.autourDeMoi.categories.find((c) => c.key === "culture")?.lieux ?? []),
        ],
      },
      {
        key: "plages",
        lieux: [
          {
            nom: "Merville-Franceville",
            desc: "Grande plage de sable à l'embouchure de l'Orne, à ~25 min. La batterie de Merville se visite.",
            coords: [49.2826, -0.1958],
          },
          {
            nom: "Cabourg",
            desc: "Station Belle Époque de la Côte Fleurie, sa promenade Marcel-Proust et son Grand Hôtel, à ~25 min.",
            coords: [49.2917, -0.1157],
          },
          {
            nom: "Houlgate",
            desc: "Jolie station balnéaire aux villas Belle Époque et sa plage de sable, à ~30 min.",
            coords: [49.3007, -0.0807],
          },
          {
            nom: "Ouistreham — Riva-Bella",
            desc: "Grande plage de sable, casino et front de mer animé, à ~30 min.",
            coords: [49.2868, -0.2497],
          },
          {
            nom: "Plage de Deauville",
            desc: "La plage chic et ses célèbres Planches, à ~40 min. Tél. 02 31 14 40 00.",
            coords: [49.3607, 0.0665],
            itineraire: "https://www.google.com/maps/search/?api=1&query=Plage+de+Deauville+Les+Planches",
          },
        ],
      },
      {
        key: "restaurants",
        lieux: [
          { nom: "Chez Fratelli", desc: "Pizzeria à Bellengreville, la plus proche (~3 min en voiture).", coords: [49.12541, -0.20964] },
          { nom: "Le Caen Paris", desc: "Pizzeria au bord de la route de Paris, à Bellengreville.", coords: [49.12179, -0.19753] },
          { nom: "Oh Barbecue!", desc: "Grillades et barbecue, à Argences.", coords: [49.11849, -0.17952] },
          { nom: "Bistrô Ma Poule", desc: "Bistrot, dans la zone commerciale d'Argences.", coords: [49.11991, -0.17337] },
          { nom: "Renée", desc: "Restaurant dans le centre d'Argences. Tél. 02 31 85 62 23.", coords: [49.12633, -0.16406] },
          { nom: "La Renaissance", desc: "Restaurant à Frénouville.", coords: [49.14665, -0.25582] },
          { nom: "La Brasserie", desc: "Cuisine régionale, à Cagny.", coords: [49.14983, -0.26463] },
          { nom: "Le Leprechaun", desc: "Restaurant-pub, à Moult.", coords: [49.10108, -0.15373] },
        ],
      },
      {
        key: "restorapide",
        lieux: [
          { nom: "Ô Kebab House", desc: "Kebab à emporter, à Bellengreville.", coords: [49.12711, -0.21288] },
          { nom: "McDonald's", desc: "Burgers, à Argences (zone commerciale).", coords: [49.11798, -0.17705] },
          { nom: "Le P'tit Roméa", desc: "Pizzas à emporter.", coords: [49.13489, -0.29511] },
        ],
      },
      {
        key: "bars",
        lieux: [
          { nom: "Le Bellen", desc: "Le bar le plus proche, à Bellengreville.", coords: [49.12469, -0.20657] },
          { nom: "Le Yearling", desc: "Bar du centre d'Argences.", coords: [49.12627, -0.16444] },
          { nom: "Au Bon Accueil", desc: "Café-bar à Argences.", coords: [49.12716, -0.16441] },
          { nom: "Bar des Amis", desc: "Bar de Moult.", coords: [49.11643, -0.1654] },
          { nom: "Le Normandy", desc: "Bar à Frénouville.", coords: [49.14606, -0.25479] },
        ],
      },
      {
        key: "bouche",
        lieux: [
          { nom: "Le Fournil des Saveurs", desc: "La boulangerie la plus proche, à Bellengreville : pain frais et viennoiseries.", coords: [49.12718, -0.213] },
          { nom: "Le Fournil de Cyril", desc: "Boulangerie à Moult, sandwichs.", coords: [49.11636, -0.16494] },
          { nom: "Au Fournil de Benjamin", desc: "Boulangerie-pâtisserie du centre d'Argences.", coords: [49.12641, -0.16458] },
          { nom: "La Talemière d'Argences", desc: "Boulangerie-pâtisserie à Argences. Tél. 02 31 23 61 10.", coords: [49.12541, -0.16396] },
          { nom: "Du pain mais pas que", desc: "Boulangerie à Frénouville.", coords: [49.14652, -0.25559] },
          { nom: "Le Billot Argençais", desc: "Boucherie-charcuterie à Argences. Tél. 02 31 23 60 80.", coords: [49.12603, -0.16404] },
          { nom: "Franck Placet Traiteur", desc: "Boucherie-traiteur à Argences.", coords: [49.1265, -0.16469] },
        ],
      },
      {
        key: "courses",
        lieux: [
          { nom: "Coccimarket", desc: "La supérette la plus proche, à Bellengreville (~3 min), pour le dépannage du quotidien.", coords: [49.12513, -0.20738] },
          { nom: "Lidl", desc: "Supermarché à Argences.", coords: [49.11909, -0.18674] },
          { nom: "E.Leclerc Argences", desc: "Hypermarché avec station-service, à ~6 min en voiture.", coords: [49.11937, -0.17272] },
          { nom: "Proxi", desc: "Supérette du centre d'Argences.", coords: [49.12656, -0.16495] },
          { nom: "Aldi", desc: "Supermarché à Cagny.", coords: [49.15073, -0.26387] },
          { nom: "Carrefour City", desc: "Supérette à Cagny.", coords: [49.14971, -0.26426] },
        ],
      },
      {
        key: "transports",
        lieux: [
          {
            nom: "Gare de Moult-Argences",
            desc: "La gare la plus proche (~3 km) : trains TER vers Caen (~10 min) et Lisieux.",
            coords: [49.11121, -0.18642],
          },
          {
            nom: "Gare de Frénouville-Cagny",
            desc: "Autre halte TER sur la ligne Caen–Lisieux, à ~4 km.",
            coords: [49.14125, -0.26038],
          },
        ],
      },
      {
        key: "stations",
        lieux: [
          {
            nom: "Station Service E.Leclerc",
            desc: "Carburant 24 h/24 et bornes de recharge pour voiture électrique, à Argences (~6 min).",
            coords: [49.11885, -0.17462],
          },
        ],
      },
      {
        key: "sante",
        lieux: [
          { nom: "Pharmacie de l'Envol", desc: "La pharmacie la plus proche, à Moult (~4 km). Pharmacie de garde : composez le 3237.", coords: [49.11676, -0.1659] },
          { nom: "Pharmacie Decoutère", desc: "Pharmacie du centre d'Argences. Tél. 02 31 23 60 35.", coords: [49.12702, -0.16504] },
          { nom: "Pharmacie de la Plaine", desc: "Pharmacie à Frénouville.", coords: [49.1446, -0.25172] },
        ],
      },
      {
        key: "medecin",
        lieux: [
          {
            nom: "SOS Médecins Caen",
            desc: "Consultations et visites à domicile, jour et nuit. Tél. 02 33 01 58 51.",
          },
          {
            nom: "Cabinet médical de Moult",
            desc: "Médecins généralistes, à ~4 km.",
            coords: [49.1206, -0.16618],
          },
        ],
      },
      {
        key: "hopital",
        lieux: [
          {
            nom: "CHU Caen Normandie",
            desc: "Centre hospitalier universitaire (urgences), à ~20 min en voiture. Tél. 02 31 06 31 06.",
            coords: [49.205918, -0.35519],
          },
        ],
      },
      {
        key: "police",
        lieux: [
          {
            nom: "Gendarmerie d'Argences",
            desc: "Gendarmerie nationale, à ~4 km. En cas d'urgence, composez le 17.",
            coords: [49.11681, -0.16891],
          },
        ],
      },
    ],
    coupDeCoeur:
      "Profitez du calme de la campagne : enfourchez un vélo pour une balade dans les marais de Chicheboville-Bellengreville et poussez jusqu'à l'observatoire pour guetter les oiseaux. Le soir, installez-vous dans la salle cinéma avec un bol de pop-corn… et à la belle saison, offrez-vous une séance au jacuzzi sous les étoiles ! 🍿",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
