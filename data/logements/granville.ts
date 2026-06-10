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
  coords: [48.8367, -1.5959],
  cover: "/logements/granville/cover-granville.jpg",
  coverCredit: "Photo : Florian Pépellin / Wikimedia Commons — CC BY-SA 4.0",

  motAccueil: {
    fr: "Nous sommes ravis de vous accueillir dans cette maison à 800 m de la mer et du centre-ville. Entièrement équipée et joliment décorée, elle offre tout le confort pour profiter pleinement de la vie granvillaise — été comme hiver, dans un cadre calme et sans vis-à-vis. Bon séjour à Granville ! 🐚",
    en: "We are delighted to welcome you to this house, just 800 m from the sea and the town centre. Fully equipped and beautifully decorated, it offers every comfort to fully enjoy life in Granville — summer and winter alike, in a quiet setting with no overlooking neighbours. Enjoy your stay! 🐚",
  },

  arrivee: {
    horaire: "À partir de 16h (départ flexible possible sur demande)",
    checkinExpress:
      "L'accès se fait par une entrée indépendante, depuis une rue calme à sens unique. Les clés se trouvent dans une boîte à clé sécurisée à code, près de l'entrée.",
    codeBoite: "4816",
    parking:
      "Stationnement gratuit et facile dans la rue, devant la maison ou à quelques mètres.",
    bagages:
      "Dépôt de bagages possible avant l'arrivée ou après le départ, sur demande.",
    decouverte: {
      rdc: 'Cuisine entièrement équipée, coin repas pour 4 personnes, salon avec TV 55" 4K The Frame, WC indépendant.',
      etage:
        "Palier avec vestiaire, chambre 1 (lit 140×190), chambre 2 (lit 140×190), salle de douche avec WC.",
      exterieur:
        "Espace privatif sans vis-à-vis avec table à manger, barbecue au charbon de bois et salon de jardin.",
    },
  },

  wifi: {
    reseau: "SFR EB2F",
    motDePasse: "1pfm9z2v1r95y2uult1c",
  },

  pratique: {
    aSavoir:
      "Draps fournis et lits faits, une serviette de toilette par personne, lit parapluie à disposition. Lave-linge, fer à repasser et étendoir dans le logement.",
    electromenager:
      "Four, micro-ondes, plaque vitrocéramique, réfrigérateur-congélateur, lave-vaisselle, lave-linge, bouilloire, grille-pain, machine à café Nespresso, appareil à raclette et crêpe party.",
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
      "Supérette (ouverte tous les jours)",
      "Magasin bio",
      "Boulangerie",
      "Bar-tabac",
      "Cave à vins",
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
            desc: "Cœur historique de la cité corsaire : ruelles pavées, remparts du XVe siècle et le plus beau point de vue sur la mer.",
            coords: [48.8358, -1.6005],
          },
          {
            nom: "Musée Christian Dior",
            desc: "Villa Les Rhumbs, maison d'enfance du couturier, face à la mer. Expositions haute-couture et jardins suspendus. Fermé le mardi.",
            coords: [48.8401, -1.5986],
          },
          {
            nom: "Musée d'Art moderne Richard Anacréon",
            desc: "Au cœur de la Haute-Ville : peintures, livres et manuscrits du XXe siècle (Colette, Apollinaire…).",
            coords: [48.8362, -1.601],
          },
          {
            nom: "Musée d'Art et d'Histoire de Granville",
            desc: "Installé dans l'ancien corps de garde de la Haute-Ville : histoire maritime et patrimoine de la cité corsaire.",
            coords: [48.836, -1.6018],
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
            nom: "Plage de Donville-les-Bains",
            desc: "Grande plage de sable familiale, juste au nord de Granville. Baignade surveillée l'été.",
            coords: [48.8455, -1.5969],
          },
          {
            nom: "Plage de Saint-Pair-sur-Mer",
            desc: "Charmante plage surveillée l'été (15 juin – 15 septembre), avec bassin de baignade à marée basse.",
            coords: [48.8146, -1.578],
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
        key: "restaurants",
        lieux: [
          {
            nom: "Edulis",
            desc: "Table gastronomique — cuisine raffinée et créative du chef Jonathan Datin. Pour une grande occasion.",
            coords: [48.8377, -1.5945],
          },
          {
            nom: "La Citadelle",
            desc: "Ambiance bord de mer : plateaux de fruits de mer, huîtres de la Manche et homard de Chausey grillé.",
            coords: [48.8347, -1.6],
          },
          {
            nom: "Le P'tit Mareyeur",
            desc: "Face au port de pêche : poissons, coquillages et crustacés ultra-frais, service en continu.",
            coords: [48.834, -1.5998],
          },
          {
            nom: "Le 110",
            desc: "Bistronomie fraîche et authentique, à deux pas du port et de la plage. Produits locaux de saison.",
            coords: [48.8369, -1.5959],
          },
          {
            nom: "Le Borsalino",
            desc: "Près du port : décor soigné, jolie terrasse et accueil chaleureux.",
            coords: [48.8345, -1.5995],
          },
        ],
      },
      {
        key: "bars",
        lieux: [
          {
            nom: "La Rafale",
            desc: "Bar convivial de la Haute-Ville : vins, bières, plus de trente rhums du monde et tapas.",
            coords: [48.8352, -1.6008],
          },
          {
            nom: "L'Octroi",
            desc: "Au centre-ville : bières pression, cocktails, vins et bons cafés, dans une ambiance détendue.",
            coords: [48.8372, -1.595],
          },
          {
            nom: "Selene",
            desc: "Bar à vins et cave dédiés aux vins naturels et biodynamiques (plus de 100 références).",
            coords: [48.8368, -1.5952],
          },
          {
            nom: "Chez Maguie",
            desc: "Café, bar et restaurant chaleureux — une halte simple et sympathique pour tous les goûts.",
            coords: [48.837, -1.5955],
          },
        ],
      },
      {
        key: "cinema",
        lieux: [
          {
            nom: "Cinéma Le Sélect",
            desc: "Cinéma de centre-ville (3 salles, 3D), 7 boulevard d'Hauteserve. Films récents et art & essai.",
            coords: [48.8388, -1.5945],
          },
          {
            nom: "L'Archipel — Scène nationale",
            desc: "Théâtre et salle de spectacles face à la mer : concerts, danse, théâtre et cirque toute la saison.",
            coords: [48.8378, -1.5965],
          },
        ],
      },
      {
        key: "loisirs",
        lieux: [
          {
            nom: "Stelsia Casino de Granville",
            desc: "Casino du front de mer (place du Maréchal-Foch) : machines à sous, jeux et concerts. Bâtiment de 1911 classé.",
            coords: [48.8385, -1.5975],
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
        key: "commerces",
        lieux: [
          {
            nom: "Grand marché du samedi matin",
            desc: "Le rendez-vous de la semaine, au Cours Jonville et sous les halles couvertes : produits de la mer, primeurs, fromages.",
            coords: [48.8372, -1.5948],
          },
          {
            nom: "Marché bio du mardi",
            desc: "Marché de producteurs bio et locaux, le mardi après-midi (16h30–19h), Cours Jonville.",
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
            nom: "Gare SNCF de Granville",
            desc: "Terminus de la ligne directe Paris-Montparnasse (~3h), Place Pierre Sémard.",
            coords: [48.8384, -1.5873],
          },
          {
            nom: "Cars Nomad (bus régional)",
            desc: "Réseau de bus Nomad pour rejoindre Avranches, Coutances et les villages alentour.",
          },
        ],
      },
      {
        key: "courses",
        lieux: [
          {
            nom: "Carrefour City",
            desc: "Supérette de centre-ville, pratique pour les courses du quotidien.",
            coords: [48.8367, -1.5988],
          },
          {
            nom: "Utile",
            desc: "Supérette de proximité, en centre-ville.",
            coords: [48.8372, -1.5997],
          },
          {
            nom: "Netto",
            desc: "Supermarché à ~1 km (avec station-service) pour les courses plus importantes.",
            coords: [48.8439, -1.5844],
          },
        ],
      },
      {
        key: "bouche",
        lieux: [
          {
            nom: "Boulangerie Robert",
            desc: "Boulangerie-pâtisserie rue Couraye — la plus proche du logement.",
            coords: [48.8372, -1.5951],
          },
          {
            nom: "La Mie Câline",
            desc: "Boulangerie & snacking, en centre-ville.",
            coords: [48.8374, -1.5979],
          },
          {
            nom: "La Mascotte",
            desc: "Boulangerie-pâtisserie, rue Couraye.",
            coords: [48.8376, -1.5926],
          },
          {
            nom: "Boucherie Vimond",
            desc: "Boucherie de quartier, à deux pas.",
            coords: [48.8373, -1.594],
          },
          {
            nom: "Boucherie Marguery",
            desc: "Boucherie-charcuterie, rue Couraye.",
            coords: [48.8375, -1.5913],
          },
        ],
      },
      {
        key: "sante",
        lieux: [
          {
            nom: "Pharmacie 3000",
            desc: "2-4 rue Couraye — la plus proche. Pharmacie de garde : composez le 3237.",
            coords: [48.8371, -1.5972],
          },
          {
            nom: "Pharmacie Centrale",
            desc: "En plein centre-ville.",
            coords: [48.8376, -1.5981],
          },
          {
            nom: "Pharmacie de la Gare",
            desc: "Avenue du Maréchal Leclerc, vers la gare.",
            coords: [48.8376, -1.5894],
          },
        ],
      },
      {
        key: "laverie",
        lieux: [
          {
            nom: "Le Salon Lavoir",
            desc: "Laverie automatique en libre-service, en centre-ville.",
            coords: [48.8369, -1.6002],
          },
        ],
      },
      {
        key: "stations",
        lieux: [
          {
            nom: "Station Netto",
            desc: "Carburant au supermarché Netto, à ~1 km.",
            coords: [48.8444, -1.5836],
          },
          {
            nom: "Station Total",
            desc: "Station-service Total, à l'est de la ville.",
            coords: [48.838, -1.5652],
          },
        ],
      },
      {
        key: "tabac",
        lieux: [
          {
            nom: "Bureaux de tabac & presse",
            desc: "Plusieurs bureaux de tabac et de presse en centre-ville (rue Couraye, rue Lecampion). Un bar-tabac se trouve aussi à deux pas du logement.",
          },
        ],
      },
      {
        key: "nocturne",
        lieux: [
          {
            nom: "Sortir le soir à Granville",
            desc: "Granville reste paisible la nuit : l'ambiance se trouve surtout dans les bars de la Haute-Ville et du port (voir « Bars & cafés »). Pas de discothèque en ville.",
          },
        ],
      },
    ],
    coupDeCoeur:
      "Fruits de mer & homard des îles Chausey : la grande spécialité de Granville, à déguster face au port.",
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: "Disponible sur la conversation Airbnb ou par téléphone en cas de besoin.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
