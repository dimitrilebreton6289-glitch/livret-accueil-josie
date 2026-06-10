import type { Logement } from "../types";

/**
 * Logement « Granville ».
 *
 * Pour traduire un texte, remplacez la chaîne par un objet, par exemple :
 *   motAccueil: { fr: "Bienvenue…", en: "Welcome…", de: "Willkommen…" }
 * Le français reste obligatoire ; les langues manquantes retombent sur le FR.
 */
export const granville: Logement = {
  id: "granville",
  nom: "Granville",
  adresse: "228 Rue des 3 Cheminées, 50400 Granville",
  ville: "Granville",
  itineraire:
    "https://maps.google.com/?q=228+Rue+des+3+Cheminées+50400+Granville",
  coords: [48.8377, -1.5789],
  cover: "/logements/granville/cover-granville.jpg",
  coverCredit: "Photo : Florian Pépellin / Wikimedia Commons — CC BY-SA 4.0",

  motAccueil: {
    fr: "Bienvenue dans cette maison à 800 m de la mer et du centre-ville ! Entièrement équipée, au calme et sans vis-à-vis, elle a tout pour un beau séjour. Bon séjour à Granville ! 🐚",
    en: "Welcome to this house, just 800 m from the sea and the town centre! Fully equipped, quiet and with no overlooking neighbours, it has everything for a lovely stay. Enjoy Granville! 🐚",
  },

  arrivee: {
    horaire: "À partir de 16h (départ flexible sur demande)",
    checkinExpress: [
      "Entrée indépendante, depuis une rue calme à sens unique",
      "Clés dans une boîte à clé sécurisée à code, près de l'entrée",
    ],
    codeBoite: "4816",
    parking:
      "Stationnement gratuit et facile dans la rue, devant la maison ou à quelques mètres.",
    bagages:
      "Dépôt de bagages possible avant l'arrivée ou après le départ, sur demande.",
    decouverte: {
      rdc: [
        "Cuisine entièrement équipée",
        "Coin repas pour 4 personnes",
        'Salon avec TV 55" 4K The Frame',
        "WC indépendant",
      ],
      etage: [
        "Palier avec vestiaire",
        "Chambre 1 — lit 140×190",
        "Chambre 2 — lit 140×190",
        "Salle de douche avec WC",
      ],
      exterieur: [
        "Espace privatif sans vis-à-vis",
        "Table à manger",
        "Barbecue au charbon de bois",
        "Salon de jardin",
      ],
    },
  },

  wifi: {
    reseau: "SFR EB2F",
    motDePasse: "1pfm9z2v1r95y2uult1c",
  },

  pratique: {
    aSavoir: [
      "Draps fournis et lits faits",
      "Une serviette de toilette par personne",
      "Lit parapluie à disposition",
      "Lave-linge, fer à repasser et étendoir",
    ],
    electromenager: [
      "Four",
      "Micro-ondes",
      "Plaque vitrocéramique",
      "Réfrigérateur-congélateur",
      "Lave-vaisselle",
      "Lave-linge",
      "Bouilloire",
      "Grille-pain",
      "Machine Nespresso",
      "Appareil à raclette",
      "Crêpe party",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      tournagesAutorises: true,
      horairesCalme: "Le calme doit être respecté de 23h00 à 08h00.",
      texte:
        "Capacité maximale : 4 voyageurs. Logement non-fumeur (ni vapotage). Animaux non acceptés. Aucune fête ni événement autorisé. Photographie commerciale et tournages autorisés. Merci de respecter le calme entre 23h00 et 08h00, dans cette rue paisible.",
    },
    poubelles:
      "Tri sélectif. Merci de rassembler toutes les poubelles, salle de bain comprise, et de déposer le sac sur la terrasse au départ.",
    animaux: "Les animaux ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "TV 4K The Frame",
    "Lave-linge",
    "Lave-vaisselle",
    "Chauffage",
    "Eau chaude",
    "Sèche-cheveux",
    "Fer à repasser",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Appareil à raclette",
    "Crêpe party",
    "Barbecue charbon",
    "Mobilier de jardin",
    "Lit parapluie",
    "Shampoing & gel douche",
    "Linge de lit & serviettes",
    "Produits de base",
    "Stores occultants",
    "Cintres & rangement",
    "Entrée privée",
    "Jardin clos privé",
  ],

  menageEnSejour:
    "Disponible en supplément, du lundi au jeudi de 8h à 15h. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Rassembler les serviettes utilisées dans la salle de bain",
      "Rassembler toutes les poubelles (salle de bain comprise) et déposer le sac sur la terrasse",
      "Éteindre les lumières et baisser les radiateurs",
      "Bien verrouiller la porte d'entrée et le portillon",
      "Remettre les clés dans la boîte à code",
    ],
  },

  quartier: {
    aPied: [
      "Lidl (~200 m)",
      "Boulangerie",
      "Pharmacie",
      "Bureau de tabac",
      "Supérette",
    ],
    note: "La plage et le centre-ville sont accessibles à pied en 15 à 20 minutes, ou en voiture.",
  },

  autourDeMoi: {
    categories: [
      {
        key: "culture",
        lieux: [
          {
            nom: "La Haute-Ville",
            desc: "Cœur historique de la cité corsaire : remparts, ruelles pavées, église Notre-Dame et panoramas sur la mer.",
            coords: [48.8358, -1.6005],
          },
          {
            nom: "Musée Christian Dior",
            desc: "Villa Les Rhumbs, maison d'enfance du couturier, face à la mer. Expositions haute-couture et jardins. Fermé le mardi.",
            coords: [48.8401, -1.5986],
          },
          {
            nom: "Musée d'Art moderne Richard Anacréon",
            desc: "Dans la Haute-Ville : peintures, livres et manuscrits du XXe siècle (Colette, Apollinaire…).",
            coords: [48.8362, -1.601],
          },
          {
            nom: "Musée d'Art et d'Histoire de Granville",
            desc: "Dans l'ancien corps de garde de la Haute-Ville : histoire maritime et patrimoine de la cité corsaire.",
            coords: [48.836, -1.6018],
          },
          {
            nom: "Office de Tourisme Granville Terre et Mer",
            desc: "Près du port : idéal pour planifier excursions, sorties guidées et croisières.",
            coords: [48.8371, -1.6007],
          },
        ],
      },
      {
        key: "nature",
        lieux: [
          {
            nom: "La Pointe du Roc",
            desc: "L'incontournable « Monaco du Nord » : phare, sémaphore, bunkers et vue sur les îles Chausey. Magnifique au coucher du soleil.",
            coords: [48.8336, -1.6105],
          },
          {
            nom: "Parc du Val ès Fleurs",
            desc: "Grand parc public verdoyant en plein cœur de Granville : balade nature, aires de jeux et petit parc animalier.",
            coords: [48.8388, -1.592],
          },
          {
            nom: "Les îles Chausey",
            desc: "Archipel préservé à ~1h de bateau depuis la gare maritime. Plages de rêve, calme absolu, plus grand archipel d'Europe.",
            coords: [48.8709, -1.8225],
          },
          {
            nom: "Le sentier des douaniers (GR223)",
            desc: "Chemin côtier le long des falaises : balades panoramiques entre la Pointe du Roc et Donville.",
            coords: [48.8345, -1.608],
          },
          {
            nom: "Jardin Christian Dior",
            desc: "Jardin suspendu de la Villa Les Rhumbs, face à la mer. Roseraie et pergola fleurie, accès libre.",
            coords: [48.8403, -1.599],
          },
        ],
      },
      {
        key: "plages",
        lieux: [
          {
            nom: "Plage du Plat Gousset",
            desc: "La plage centrale, au pied de la vieille ville : promenade Belle Époque et piscine d'eau de mer à marée basse.",
            coords: [48.8389, -1.5994],
          },
          {
            nom: "Plage de Hérel",
            desc: "Juste à côté du port de plaisance, plus abritée. Pratique avant ou après une balade au port.",
            coords: [48.8338, -1.602],
          },
          {
            nom: "Plage de Donville-les-Bains",
            desc: "Grande plage de sable familiale, juste au nord de Granville. Baignade surveillée l'été.",
            coords: [48.8455, -1.5969],
          },
          {
            nom: "Plage de Saint-Pair-sur-Mer",
            desc: "Charmante plage surveillée l'été, avec bassin de baignade à marée basse.",
            coords: [48.8146, -1.578],
          },
        ],
      },
      {
        key: "restaurants",
        lieux: [
          {
            nom: "Les Grands Vilains",
            desc: "Rue des Juifs — adresse intimiste très bien notée, cuisine moderne et soignée.",
            coords: [48.8382, -1.5997],
          },
          {
            nom: "L'Edulis",
            desc: "Table bistronomique de référence, produits locaux et de la mer.",
            coords: [48.8375, -1.5974],
          },
          {
            nom: "Le Jardin",
            desc: "Rue Lecampion — belle adresse, plats frais dans un cadre agréable.",
            coords: [48.8376, -1.5995],
          },
          {
            nom: "Cabane sur mer",
            desc: "Boulevard des Amiraux — huîtres et fruits de mer ultra-frais face au port.",
            coords: [48.8357, -1.5975],
          },
        ],
      },
      {
        key: "restorapide",
        lieux: [
          {
            nom: "D'wich",
            desc: "Rue des Juifs — sandwichs et encas haut de gamme faits maison, produits frais.",
            coords: [48.8384, -1.5993],
          },
          {
            nom: "Good Burger",
            desc: "Impasse Alsace-Lorraine — burgers gourmands, tout près du centre.",
            coords: [48.8379, -1.5854],
          },
          {
            nom: "Burgers N Brothers",
            desc: "Rue du Conillot — réputé pour les meilleurs burgers artisanaux du coin.",
            coords: [48.8401, -1.5632],
          },
          {
            nom: "La Fabbrica",
            desc: "Rue du Port — excellentes pizzas artisanales, à emporter ou sur le pouce.",
            coords: [48.8359, -1.6052],
          },
        ],
      },
      {
        key: "bars",
        lieux: [
          {
            nom: "Brasserie du Stade",
            desc: "Au coin de la rue, avenue des Matignon — café le matin, brasserie le midi, verre en fin de journée. Sans la voiture !",
            coords: [48.8381, -1.5786],
          },
          {
            nom: "7 Sens",
            desc: "Rue Saint-Sauveur — bar à vins & tapas chaleureux, avec épicerie fine.",
            coords: [48.8368, -1.5971],
          },
          {
            nom: "Les Planches",
            desc: "Café/bar sympa et bien placé pour se détendre en centre-ville.",
            coords: [48.8385, -1.5977],
          },
          {
            nom: "La Rafale",
            desc: "Place Cambernon (Haute-Ville) — bar d'ambiance culturel : planches, concerts réguliers.",
            coords: [48.8376, -1.6038],
          },
          {
            nom: "Bar La Cale",
            desc: "Face au port de plaisance — ambiance maritime décontractée, appréciée des locaux.",
            coords: [48.8357, -1.5963],
          },
        ],
      },
      {
        key: "nocturne",
        lieux: [
          {
            nom: "Le Purple",
            desc: "Place du Maréchal-Foch (complexe du Casino), face au Plat Gousset. Le club de la ville pour finir la nuit, généralement du jeudi au dimanche dès 22h30.",
            coords: [48.8391, -1.5985],
          },
        ],
      },
      {
        key: "cinema",
        lieux: [
          {
            nom: "Cinéma Le Sélect",
            desc: "Cinéma de centre-ville (3 salles, 3D), boulevard d'Hauteserve. Films récents et art & essai.",
            coords: [48.8388, -1.5945],
          },
          {
            nom: "L'Archipel — Scène nationale",
            desc: "La scène culturelle majeure de Granville : concerts, théâtre et danse toute l'année.",
            coords: [48.8378, -1.5965],
          },
        ],
      },
      {
        key: "loisirs",
        lieux: [
          {
            nom: "Casino de Granville",
            desc: "Face à la mer au Plat Gousset (place du Maréchal-Foch) : jeux, animations et restaurant avec vue.",
            coords: [48.8391, -1.5985],
          },
          {
            nom: "Roc des Curiosités — Musée & Aquarium",
            desc: "Sur la Pointe du Roc (1 bd Vaufleury) : aquarium, féerie de coquillages et minéraux. Idéal en famille.",
            coords: [48.8345, -1.6075],
          },
          {
            nom: "Croisière vers les îles Chausey",
            desc: "Départ de la gare maritime (port de Hérel) avec la Compagnie Jolie France. Réservez à l'avance en saison.",
            coords: [48.834, -1.6005],
          },
          {
            nom: "Centre Régional de Nautisme (CRNG)",
            desc: "Au port de Hérel : char à voile, catamaran, paddle, kayak, longe-côte… Locations et stages.",
            coords: [48.833, -1.599],
          },
        ],
      },
      {
        key: "bouche",
        lieux: [
          {
            nom: "Boulangerie Pâtisserie Maison Gôtier",
            desc: "Avenue des Matignon, à 3 min à pied — pain frais, viennoiseries du matin et formules sandwichs le midi.",
            coords: [48.8379, -1.5777],
          },
          {
            nom: "Boucherie Maison Marguery",
            desc: "Rue Couraye — l'artisan boucher de référence à Granville, réputé pour ses viandes et préparations.",
            coords: [48.8375, -1.5913],
          },
          {
            nom: "Boucherie Terroir et Tradition (Vimond)",
            desc: "Rue Couraye — très bonne boucherie-charcuterie artisanale.",
            coords: [48.8373, -1.594],
          },
          {
            nom: "Boulangerie Robert",
            desc: "« La Flûte Gana » — boulangerie-pâtisserie traditionnelle, pain et viennoiseries.",
            coords: [48.8372, -1.5951],
          },
          {
            nom: "Boulangerie La Mascotte (Maison Savary)",
            desc: "Pain, gâteaux et formules snacking le midi.",
            coords: [48.8376, -1.5926],
          },
        ],
      },
      {
        key: "courses",
        lieux: [
          {
            nom: "CocciMarket",
            desc: "Juste en face, rue du Vieux Moulin — supérette d'ultra-proximité pour les courses de dernière minute.",
            coords: [48.8384, -1.5786],
          },
          {
            nom: "Lidl",
            desc: "Avenue Aristide Briand — le plus proche du logement, pratique et rapide.",
            coords: [48.8362, -1.5823],
          },
          {
            nom: "Carrefour City (rue Couraye)",
            desc: "Courses d'appoint, ouvert tard et le dimanche matin.",
            coords: [48.8377, -1.5911],
          },
          {
            nom: "Carrefour City (Desmaisons)",
            desc: "Autre supérette de proximité, près du port.",
            coords: [48.8367, -1.5988],
          },
          {
            nom: "E.Leclerc Granville",
            desc: "Grand hypermarché de la zone commerciale (Yquelon), avec station-service. Pour les grosses courses.",
            coords: [48.8399, -1.5503],
          },
        ],
      },
      {
        key: "commerces",
        lieux: [
          {
            nom: "La Cave Granvillaise",
            desc: "Avenue des Matignon, à deux pas — bonne adresse de quartier pour de jolies bouteilles et des spécialités locales à offrir ou partager.",
            coords: [48.8381, -1.5797],
          },
          {
            nom: "Grand marché du samedi matin",
            desc: "Le rendez-vous de la semaine, au Cours Jonville et sous les halles : produits de la mer, primeurs, fromages, circuits courts.",
            coords: [48.8372, -1.5948],
          },
          {
            nom: "Marché couvert (Les Halles)",
            desc: "Halle historique de 1936, en plein centre : commerçants de bouche et producteurs locaux.",
            coords: [48.8373, -1.5947],
          },
        ],
      },
      {
        key: "transports",
        lieux: [
          {
            nom: "Arrêts de bus « Stade Dior »",
            desc: "À moins de 50 m, avenue des Matignon (deux arrêts) — pour rejoindre le centre-ville, le port ou la gare sans voiture.",
            coords: [48.8378, -1.5785],
          },
          {
            nom: "Gare SNCF de Granville",
            desc: "Ligne directe Paris-Montparnasse (~3h) et réseaux régionaux. Place Pierre Sémard.",
            coords: [48.8384, -1.5873],
          },
          {
            nom: "Cars Nomad (bus régional)",
            desc: "Réseau de bus Nomad pour rejoindre Avranches, Coutances et les villages alentour.",
          },
        ],
      },
      {
        key: "sante",
        lieux: [
          {
            nom: "Pharmacie Le Saint",
            desc: "La plus proche du logement. Pharmacie de garde : composez le 3237.",
            coords: [48.8379, -1.5853],
          },
          {
            nom: "Pharmacie de la Gare",
            desc: "Avenue du Maréchal Leclerc, juste à côté de la gare.",
            coords: [48.8376, -1.5894],
          },
          {
            nom: "Pharmacie Centrale",
            desc: "Cours Jonville, en plein centre-ville.",
            coords: [48.8376, -1.5981],
          },
        ],
      },
      {
        key: "stations",
        lieux: [
          {
            nom: "Station TotalEnergies",
            desc: "Avenue de la Libération, à l'est de la ville.",
            coords: [48.838, -1.5652],
          },
          {
            nom: "Station E.Leclerc",
            desc: "À l'hypermarché (Yquelon) : carburant souvent moins cher.",
            coords: [48.8399, -1.5503],
          },
        ],
      },
      {
        key: "laverie",
        lieux: [
          {
            nom: "Le Salon Lavoir",
            desc: "Laverie automatique en libre-service, en centre-ville. D'autres laveries se trouvent aussi avenue Aristide Briand, près du logement.",
            coords: [48.8369, -1.6002],
          },
        ],
      },
      {
        key: "tabac",
        lieux: [
          {
            nom: "Bureaux de tabac & presse",
            desc: "Plusieurs bureaux de tabac et de presse avenue Aristide Briand (près du logement) et rue Couraye.",
          },
        ],
      },
    ],
    coupDeCoeur:
      "Les fruits de mer et le homard des îles Chausey, LA spécialité de Granville : à déguster face au port, par exemple à la Cabane sur mer (voir Restaurants).",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation Airbnb ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
