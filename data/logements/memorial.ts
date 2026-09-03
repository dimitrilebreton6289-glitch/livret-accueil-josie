import type { Logement } from "../types";

/**
 * Logement « Mémorial » — appartement de 50 m² en résidence, 18 avenue Maréchal
 * Montgomery, quartier de la Folie-Couvrechef, à 300 m du Mémorial de Caen et
 * du parc de la Colline aux Oiseaux.
 *
 * 3ᵉ étage. Chambre avec lit double, séjour avec canapé-lit 1 place, cuisine
 * séparée équipée, salle de bains avec baignoire et lave-linge, WC séparés,
 * balcon exposé sud-est. Résidence sécurisée avec ascenseur. Capacité
 * 3 personnes.
 *
 * ⚠️ PARTICULARITÉ : la boîte à clés n'est PAS sur place. Elle se trouve au
 * 46 rue Caponière (~2,2 km, ~8 min en voiture) et contient le badge de la
 * résidence, la clé de l'appartement et la clé du local poubelles. Le guide
 * d'arrivée est construit autour de ce double trajet.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À COMPLÉTER PAR AGATHE (placeholders / infos manquantes) :
 *   - WiFi : nom du réseau + mot de passe (placeholder actuellement)
 *   - Code de la boîte à clés (sinon « communiqué par message »)
 *   - Numéro de porte au 3ᵉ étage (étape 6 du guide)
 *   - Photos d'arrivée pas à pas → public/logements/memorial/arrivee-1..7.jpg
 *     (le texte des étapes est déjà écrit, il suffit d'ajouter les `photo:`)
 *   - Photo de couverture réelle → remplacer public/logements/memorial/cover.jpg
 *     (actuellement une photo du Mémorial, Wikimedia Commons, avec coverCredit)
 *   - Bar-tabac du quartier : nom exact (l'annonce en mentionne un, absent d'OSM)
 *
 * « Autour de moi » : adresses réelles géolocalisées via OpenStreetMap autour du
 * 18 avenue Maréchal Montgomery. Les distances sont recalculées automatiquement
 * depuis les coordonnées du logement.
 *
 * Pour traduire un texte, voir data/i18n-content.ts (clé = texte FR exact).
 */
export const memorial: Logement = {
  id: "memorial",
  nom: "Mémorial",
  adresse: "18 Avenue Maréchal Montgomery, 14000 Caen",
  ville: "Caen",
  itineraire:
    "https://maps.google.com/?q=18+Avenue+Mar%C3%A9chal+Montgomery+14000+Caen",
  coords: [49.20008, -0.38623],
  cover: "/logements/memorial/cover2.jpg",

  motAccueil:
    "Bienvenue dans l'appartement Mémorial ! Vous êtes juste en face du Mémorial de Caen et du parc de la Colline aux Oiseaux, dans un quartier calme et verdoyant, à 10 minutes du centre-ville et de la mer. L'appartement est lumineux, exposé sud-est, avec un balcon parfait pour le café du matin. Très bon séjour à Caen ! 🕊️",

  videoPresentation: { url: "/logements/memorial/visite.mp4", portrait: true },

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    checkinExpress: [
      "⚠️ Deux étapes : la boîte à clés se trouve au 46 rue Caponière, puis vous rejoignez le logement au 18 avenue Maréchal Montgomery (~2,2 km, ~8 min en voiture)",
      "La boîte à clés contient le badge de la résidence, la clé de l'appartement et la clé du local poubelles",
      "Le code de la boîte à clés vous est envoyé par message une fois le logement prêt",
      "Résidence sécurisée avec ascenseur : le badge ouvre la porte de l'immeuble, puis montez au 3ᵉ étage",
    ],
    video: "/logements/memorial/checkin.mp4",
    etapes: [
      {
        texte:
          "Première étape : rendez-vous au 46 rue Caponière, à Caen. C'est là que se trouve la boîte à clés — pas à l'adresse du logement. Comptez ce détour dans votre trajet.",
      },
      {
        texte:
          "Composez le code de la boîte à clés (il vous est envoyé par message une fois le logement prêt) et récupérez son contenu : le badge d'accès à la résidence, la clé de l'appartement et la petite clé du local poubelles. Pensez à refermer la boîte et à brouiller le code.",
      },
      {
        texte:
          "Deuxième étape : rejoignez le logement au 18 avenue Maréchal Montgomery, 14000 Caen — environ 2,2 km, soit 8 minutes en voiture. Le bâtiment est situé juste en face du Mémorial de Caen.",
      },
      {
        texte:
          "Garez-vous dans l'une des rues adjacentes : le stationnement y est gratuit et il y a presque toujours de la place. La résidence ne dispose pas de place attribuée.",
      },
      {
        texte:
          "Présentez le badge devant la porte de la résidence pour l'ouvrir, puis prenez l'ascenseur jusqu'au 3ᵉ étage.",
      },
      {
        texte:
          "Ouvrez la porte de l'appartement avec la clé. Bienvenue chez vous ! ⚠️ Ne laissez jamais les clés à l'intérieur.",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.",
      url: "https://buy.stripe.com/8x2eVeef67fzgtB3qd7ss0i",
    },
    parking:
      "La résidence ne dispose pas de place de stationnement attribuée.\nLe stationnement est gratuit dans les rues adjacentes (avenue Maréchal Montgomery et alentours) et il est généralement très facile de se garer, y compris en pleine saison.\nUne borne de recharge pour véhicule électrique est disponible sur place.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Entrée avec placard",
        "Grand séjour avec deux canapés, dont un canapé-lit 1 place, et TV",
        "Chambre avec lit double et parquet flottant",
        "Cuisine séparée entièrement équipée",
        "Salle de bains avec baignoire et lave-linge",
        "WC séparés",
      ],
      etage: [],
      exterieur: [
        "Balcon privatif exposé sud-est, avec mobilier d'extérieur",
      ],
    },
  },

  wifi: {
    reseau: "Freebox Nouria",
    motDePasse: "MZARIWILEM26",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, quelques essentiels vous attendent :\n\n• 🧻 Papier toilette & savon\n• 🧴 Gel douche / shampoing (une miniature par personne)\n• 🧂 Sel, poivre & huile\n• 🧽 Produit vaisselle & éponge",
      },
      {
        titre: "🛌 Couchages",
        contenu:
          "L'appartement accueille 3 personnes :\n\n• 🛏️ Chambre — un lit double\n• 🛋️ Séjour — un canapé-lit 1 place\n\nLes draps sont fournis pour ces deux couchages.\n\n➕ Un matelas d'appoint 1 place est aussi rangé sous le lit de la chambre (pour dépanner) — les draps ne sont pas fournis pour celui-ci, pensez à apporter les vôtres si besoin.\n\n🎬 La vidéo ci-dessous montre comment déplier et replier le canapé-lit du séjour.",
        video: "/logements/memorial/canape.mp4",
        videoPortrait: true,
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "• 🛏️ Draps fournis — le lit de la chambre est fait, ceux du canapé-lit sont fournis\n• 🛁 Une serviette de toilette par voyageur + un tapis de bain\n• 🍽️ Un torchon de cuisine\n• 👕 Cintres & étendoir à linge à disposition",
      },
      {
        titre: "🛁 Salle de bain",
        contenu:
          "La salle de bains dispose d'une baignoire avec douche et d'un sèche-cheveux. Les WC sont séparés. Merci de bien refermer le rideau pour éviter les éclaboussures.",
      },
      {
        titre: "🧺 Lave-linge",
        contenu:
          "Un lave-linge se trouve dans la salle de bains. Utilisez une petite dose de lessive et lancez un programme court. Il n'y a pas de sèche-linge : merci d'étendre le linge sur l'étendoir plutôt que de le laisser dans le tambour.",
      },
      {
        titre: "🍳 Cuisine",
        contenu:
          "Cuisine séparée, entièrement équipée :\n\n• 🔥 Four & plaque vitrocéramique\n• ❄️ Réfrigérateur & congélateur\n• ☕ Micro-ondes, bouilloire, cafetière & grille-pain\n• 🍴 Vaisselle, couverts, verres à vin & ustensiles (casseroles, poêles…)\n• 🧂 Huile, sel & poivre fournis\n• 🪑 Table à manger pour les repas",
      },
      {
        titre: "🔥 Four",
        contenu:
          "Le four est électrique et se pilote avec deux boutons et un afficheur central.\n\n1. Réglez le THERMOSTAT (bouton de gauche) sur la température souhaitée (de 50° à 250°) : le voyant rouge « marche » s'allume.\n2. Réglez le SÉLECTEUR (bouton de droite) sur le mode de cuisson voulu : « pâtisseries / poissons », « flans / tartes aux fruits », « grillades / tournebroche » ou « maintien au chaud ». Sur « 0 », le four est éteint.\n3. L'afficheur central sert de minuteur et d'horloge : avec la touche « sélection » et les touches + / −, vous pouvez régler un minuteur (facultatif).\n\nPensez à bien remettre les deux boutons sur « 0 » après utilisation.",
        photos: [
          "/logements/memorial/four-1.jpg",
          "/logements/memorial/four-2.jpg",
          "/logements/memorial/four-3.jpg",
        ],
      },
      {
        titre: "🍳 Plaque de cuisson",
        contenu:
          "La plaque est vitrocéramique, à commandes tactiles (pas de bouton à tourner).\n\n1. Effleurez la touche marche/arrêt pour activer la plaque.\n2. Sélectionnez la zone de cuisson, puis réglez la puissance avec les touches + et −.\n3. Pour éteindre, ramenez la puissance à « 0 » ou appuyez sur la touche marche/arrêt.\n\nUne sécurité enfant (cadenas) peut verrouiller les commandes : maintenez la touche cadenas appuyée pour déverrouiller. La vidéo ci-dessous montre le fonctionnement.",
        video: "/logements/memorial/plaque.mp4",
        videoPortrait: false,
      },
      {
        titre: "📺 Télévision",
        contenu:
          "Deux télécommandes sont nécessaires : la télécommande Samsung (noire, marquée « SAMSUNG ») pour l'écran, et la télécommande Free (grise, logo « free ») pour la Freebox.\n\n1. Allumez le téléviseur avec le bouton rouge, en haut à gauche de la télécommande Samsung.\n2. Appuyez sur le bouton « SOURCE » (en haut à droite de la télécommande Samsung) et sélectionnez « HDMI2/DVI ».\n3. Allumez la Freebox avec la télécommande grise « free » (bouton de mise en marche en haut à droite).\n4. Utilisez ensuite la télécommande « free » pour changer de chaîne, régler le volume et naviguer dans Freebox TV.\n\nSi l'écran affiche « Pas de signal », vérifiez que la source est bien sur « HDMI2/DVI » et que la Freebox est allumée.",
        photos: [
          "/logements/memorial/tv-1.jpg",
          "/logements/memorial/tv-2.jpg",
          "/logements/memorial/tv-3.jpg",
        ],
      },
      {
        titre: "🔥 Chauffage",
        contenu:
          "L'appartement est chauffé par des radiateurs. Merci de limiter votre consommation et de baisser le chauffage avant de partir ou lorsque vous aérez.",
      },
      {
        titre: "🌿 Balcon",
        contenu:
          "Le balcon est exposé sud-est : c'est le meilleur endroit de l'appartement le matin. Du mobilier d'extérieur est à votre disposition. Merci de veiller à la tranquillité du voisinage, notamment en soirée, et de ne rien jeter par-dessus la rambarde.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
      {
        titre: "🔑 Dépôt des clés au départ",
        contenu:
          "À votre départ, déposez le badge de la résidence, la clé de l'appartement et la petite clé du local poubelles dans la boîte aux lettres de l'appartement (boîte n°89), dans le hall de la résidence, au 18 avenue Maréchal Montgomery. Vous la reconnaîtrez à l'autocollant « CAEN & MER IMMO / STOP PUB » (voir photo).\n\n(Pour rappel, la récupération des clés se fait à votre arrivée au 46 rue Caponière — pas à la même adresse.)",
        photos: ["/logements/memorial/boite.jpg"],
      },
      {
        titre: "🐾 Animaux",
        contenu:
          "Les animaux de compagnie ne sont malheureusement pas acceptés dans ce logement.",
      },
    ],
    electromenager: [
      "Four",
      "Plaque vitrocéramique",
      "Réfrigérateur",
      "Congélateur",
      "Micro-ondes",
      "Bouilloire électrique",
      "Cafetière",
      "Grille-pain",
      "Lave-linge",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 3,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans l'appartement comme sur le balcon et dans les parties communes de la résidence.",
      texte:
        "Logement non-fumeur : merci de descendre à l'extérieur pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites. Les animaux de compagnie ne sont pas acceptés. Vous séjournez dans une résidence habitée à l'année : merci de veiller à la tranquillité du voisinage, en particulier sur le balcon et dans les parties communes.",
    },
    poubelles:
      "♻️ Le tri se fait au local poubelles, au sous-sol de la résidence (niveau -1). La petite clé est dans la boîte à clés, avec le badge et la clé de l'appartement.\n\n🟡 Bac jaune — emballages & recyclables\n⚫ Bac gris — ordures ménagères\n🍷 Verre — borne à verre la plus proche : 1 rue Normandie-Niémen\n\n👉 Merci de bien refermer le local derrière vous.",
    poubellesVideo: "/logements/memorial/poubelles.mp4",
    poubellesVideoPortrait: true,
    animaux:
      "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "Balcon exposé sud-est",
    "Chambre séparée (lit double)",
    "Canapé-lit 1 place",
    "TV",
    "Cuisine séparée équipée",
    "Four",
    "Plaque vitrocéramique",
    "Micro-ondes",
    "Réfrigérateur & congélateur",
    "Cafetière & bouilloire",
    "Grille-pain",
    "Lave-linge",
    "Salle de bains avec baignoire",
    "WC séparés",
    "Sèche-cheveux",
    "Chauffage",
    "Eau chaude",
    "Ascenseur",
    "Linge de lit & serviettes",
    "Stationnement gratuit dans les rues adjacentes",
    "Borne de recharge véhicule électrique",
    "Lit bébé sur demande",
  ],

  menageEnSejour:
    "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.",

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles dans le local du sous-sol",
      "Rassembler les serviettes de toilette utilisées",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres et la porte du balcon, éteindre les lumières et baisser le chauffage",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé",
      "Déposer le badge de la résidence, la clé de l'appartement et la clé du local poubelles dans la boîte aux lettres de l'appartement (boîte n°89, dans le hall de la résidence — autocollant « CAEN & MER IMMO / STOP PUB »), au 18 avenue Maréchal Montgomery",
    ],
    instructionsPhoto: "/logements/memorial/boite.jpg",
    instructionsPhotoLegende:
      "La boîte aux lettres où déposer les clés : boîte n°89, dans le hall — repérable à l'autocollant « CAEN & MER IMMO / STOP PUB ».",
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
      "Le Mémorial de Caen (~4 min)",
      "Supérette Panier Sympa (~3 min)",
      "Square de Nashville (~2 min)",
      "Boulangerie La Folie's (~4 min)",
      "Arrêt de bus « Nashville » (~2 min)",
      "Parc de la Colline aux Oiseaux (~6 min)",
      "Hôpital privé Saint-Martin (~6 min)",
    ],
    note: "Vous êtes dans le quartier de la Folie-Couvrechef, au nord-ouest de Caen : calme, résidentiel et très vert. Le Mémorial et le parc de la Colline aux Oiseaux sont juste en face. Le centre-ville, la gare, l'aéroport et la mer sont à une dizaine de minutes en voiture, et le périphérique est tout proche pour rayonner vers les plages du Débarquement.",
  },

  autourDeMoi: {
    categories: [
      {
        key: "loisirs",
        lieux: [
          {
            nom: "Le Mémorial de Caen",
            desc: "Esplanade Général Eisenhower, juste en face du logement (~4 min à pied). Le grand musée pour la Paix : Seconde Guerre mondiale, Débarquement et Bataille de Normandie. L'incontournable de Caen. Tél. 02 31 06 06 45.",
            coords: [49.1976, -0.38475],
          },
          {
            nom: "Plages du Débarquement",
            desc: "Arromanches et ses musées, sur la Côte de Nacre : le D-Day à 30–45 min de route. Le périphérique tout proche facilite le trajet.",
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
            nom: "Musée des Beaux-Arts de Caen",
            desc: "Dans l'enceinte du château : riche collection de peintures (XVᵉ–XXᵉ s.) et beau parc de sculptures. Entrée des collections permanentes gratuite. Tél. 02 31 30 47 60.",
            coords: [49.1872, -0.3623],
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
            nom: "Parc de la Colline aux Oiseaux",
            desc: "Avenue de l'Amiral Mountbatten, à ~6 min à pied. Grand parc paysager de 17 ha : roseraie, labyrinthe, animaux de la ferme et grandes pelouses. Le voisin idéal, parfait en famille. Tél. 02 31 30 41 00.",
            coords: [49.19796, -0.391384],
          },
          {
            nom: "Square de Nashville",
            desc: "Le petit square du quartier, à deux pas de la résidence : quelques bancs et de la verdure pour souffler.",
            coords: [49.201497, -0.385155],
          },
          {
            nom: "Jardin des Pétales",
            desc: "Jardin de quartier aux abords de la Colline aux Oiseaux, agréable pour une balade courte.",
            coords: [49.199518, -0.393266],
          },
          {
            nom: "Jardins des Bruyères",
            desc: "Espace vert calme au sud-ouest du parc de la Colline aux Oiseaux.",
            coords: [49.198627, -0.394949],
          },
          {
            nom: "Jardin des Poètes",
            desc: "Petit jardin de quartier de la Folie-Couvrechef, au nord de la résidence.",
            coords: [49.205195, -0.382383],
          },
          {
            nom: "Vallée des Jardins",
            desc: "Vaste parc paysager de Caen, entre le quartier et le centre : rivière, ponts et grands arbres.",
            coords: [49.195303, -0.373019],
          },
          {
            nom: "La Prairie",
            desc: "Vaste prairie naturelle en plein cœur de ville, le long de l'Orne, avec l'hippodrome. Parfaite pour les balades et le jogging.",
            coords: [49.1788, -0.3675],
          },
        ],
      },
      {
        key: "culture",
        lieux: [
          {
            nom: "Château de Caen",
            desc: "Forteresse fondée par Guillaume le Conquérant vers 1060, l'une des plus vastes enceintes médiévales d'Europe. Remparts, jardins et belle vue sur la ville. Accès libre à l'enceinte, à ~10 min en voiture ou en bus. Tél. 02 31 30 47 60.",
            coords: [49.1868, -0.3615],
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
            nom: "Église Saint-Pierre",
            desc: "Joyau du gothique flamboyant au cœur de la ville, face au château. Clocher remarquable et chevet richement sculpté.",
            coords: [49.1838, -0.3608],
          },
          {
            nom: "Musée de Normandie",
            desc: "Dans l'enceinte du château : histoire et patrimoine de la Normandie, des origines à nos jours.",
            coords: [49.1864, -0.3608],
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
          {
            nom: "Plage de Deauville",
            desc: "Promenade des Planches. La plage chic et ses parasols, à ~40 min : planches, villas et glamour. Tél. 02 31 14 40 00.",
            coords: [49.3607, 0.0665],
            itineraire:
              "https://www.google.com/maps/search/?api=1&query=Plage+de+Deauville+Les+Planches",
          },
        ],
      },
      {
        key: "restaurants",
        lieux: [
          {
            nom: "Restaurant Linette",
            desc: "Rue Karl Probst — le restaurant le plus proche du logement (~3 min à pied).",
            coords: [49.200714, -0.389224],
          },
          {
            nom: "La Folie Douce",
            desc: "Crêperie du quartier, à deux pas de la résidence : galettes et crêpes.",
            coords: [49.202124, -0.386865],
          },
          {
            nom: "Le 36",
            desc: "Table de quartier, à quelques minutes à pied côté Colline aux Oiseaux.",
            coords: [49.202836, -0.390524],
          },
          {
            nom: "Le Patio",
            desc: "Rue Alfred Kastler — restaurant du secteur, un peu plus à l'ouest.",
            coords: [49.201753, -0.393377],
          },
          {
            nom: "Brasserie Laurent",
            desc: "Brasserie de cuisine française, vers la rue d'Authie.",
            coords: [49.199877, -0.397123],
          },
          {
            nom: "Le Cosmos",
            desc: "Rue du Chemin Vert — restaurant du quartier voisin, près de la Halle Molière.",
            coords: [49.192746, -0.393116],
          },
        ],
      },
      {
        key: "restorapide",
        lieux: [
          {
            nom: "Miam's la Folie",
            desc: "Kebabs et tacos à emporter, du côté de la Porte de l'Europe.",
            coords: [49.201187, -0.379185],
          },
          {
            nom: "Glo'express Café",
            desc: "Porte de l'Europe — pizzas, pâtes, sandwichs et salades, sur place ou à emporter.",
            coords: [49.20087, -0.378687],
          },
          {
            nom: "Aux Délices Express",
            desc: "Kebab et grillades à emporter, quartier du Chemin Vert.",
            coords: [49.192136, -0.395544],
          },
          {
            nom: "Nemour",
            desc: "Pizzeria du Chemin Vert, à côté de la Halle Molière.",
            coords: [49.193111, -0.393226],
          },
        ],
      },
      {
        key: "bars",
        lieux: [
          {
            nom: "Le Kikalou",
            desc: "Café de quartier, secteur Porte de l'Europe.",
            coords: [49.202959, -0.379014],
          },
          {
            nom: "The Coffee Bar",
            desc: "Bar convivial, à côté du Carrefour Express de la Porte de l'Europe.",
            coords: [49.203212, -0.378968],
          },
          {
            nom: "Le Café Mancel",
            desc: "Café-restaurant dans l'enceinte du château, en centre-ville : jolie terrasse avec vue. Idéal en journée.",
            coords: [49.187, -0.3618],
          },
        ],
      },
      {
        key: "bouche",
        lieux: [
          {
            nom: "La Folie's",
            desc: "La boulangerie la plus proche (~4 min à pied) : pain frais et viennoiseries du matin.",
            coords: [49.200845, -0.382089],
          },
          {
            nom: "L'Alchimie",
            desc: "Boulangerie-pâtisserie du quartier, au nord-ouest de la résidence.",
            coords: [49.204438, -0.390271],
          },
          {
            nom: "Boulangerie du Chemin Vert",
            desc: "Boulangerie du quartier voisin, près de la Halle Molière.",
            coords: [49.192619, -0.39245],
          },
          {
            nom: "La Boucherie du Centre",
            desc: "Boucherie-charcuterie, secteur Chemin Vert.",
            coords: [49.193041, -0.392984],
          },
        ],
      },
      {
        key: "courses",
        lieux: [
          {
            nom: "Panier Sympa",
            desc: "La supérette la plus proche (~3 min à pied) : dépannage et courses de dernière minute.",
            coords: [49.202102, -0.385193],
          },
          {
            nom: "Carrefour Express",
            desc: "Supérette de la Porte de l'Europe, ouverte tard.",
            coords: [49.203271, -0.379016],
          },
          {
            nom: "Cours des Halles",
            desc: "Primeur de la Porte de l'Europe : fruits, légumes et produits frais.",
            coords: [49.203012, -0.378997],
          },
          {
            nom: "Super U",
            desc: "Supermarché pour les courses complètes, vers la rue d'Authie (~10 min à pied).",
            coords: [49.200152, -0.397633],
          },
          {
            nom: "Netto",
            desc: "Supermarché discount, juste à côté du Super U.",
            coords: [49.200988, -0.397421],
          },
        ],
      },
      {
        key: "commerces",
        lieux: [
          {
            nom: "Porte de l'Europe",
            desc: "Le petit pôle commerçant du quartier, à ~7 min à pied : supérette, primeur, café, restauration rapide et bureau de poste.",
            coords: [49.20238, -0.379],
          },
          {
            nom: "Halle Molière",
            desc: "Centre commercial du Chemin Vert : commerces de proximité, pharmacie et boucherie.",
            coords: [49.192771, -0.392965],
          },
          {
            nom: "Bureau de poste Caen La Folie-Couvrechef",
            desc: "Le bureau de poste du quartier, secteur Porte de l'Europe.",
            coords: [49.202401, -0.379274],
          },
          {
            nom: "Centre commercial Les Rives de l'Orne",
            desc: "Galerie marchande moderne entre le port et la gare : boutiques, restaurants et cinéma. À ~12 min en voiture.",
            coords: [49.1792, -0.3628],
          },
        ],
      },
      {
        key: "tram",
        lieux: [
          {
            nom: "Arrêt de bus « Nashville »",
            desc: "L'arrêt le plus proche du logement (~2 min à pied) — réseau Twisto, vers le centre-ville et la gare.",
            coords: [49.200447, -0.3875],
          },
          {
            nom: "Arrêt de bus « Mémorial »",
            desc: "Arrêt desservant le Mémorial de Caen, à ~4 min à pied.",
            coords: [49.198554, -0.382827],
          },
          {
            nom: "Arrêt de bus « Colline aux Oiseaux »",
            desc: "Arrêt côté parc, à ~4 min à pied.",
            coords: [49.19821, -0.388759],
          },
          {
            nom: "Arrêt de tram « Calvaire Saint-Pierre »",
            desc: "L'arrêt de tram le plus proche (~1,6 km) : la ligne file vers le centre, la gare et les campus. Le bus reste le plus pratique depuis le logement.",
            coords: [49.198074, -0.363987],
          },
          {
            nom: "Réseau Twisto (tram & bus)",
            desc: "Le réseau de l'agglomération : 3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs des arrêts.",
          },
        ],
      },
      {
        key: "transports",
        lieux: [
          {
            nom: "Gare SNCF de Caen",
            desc: "Liaisons directes vers Paris Saint-Lazare (~2h). À ~10 min en voiture.",
            coords: [49.1776, -0.3481],
          },
          {
            nom: "Aéroport de Caen-Carpiquet",
            desc: "À l'ouest de la ville, tout proche par le périphérique : vols intérieurs et saisonniers.",
            coords: [49.1733, -0.45],
          },
          {
            nom: "Gare maritime de Ouistreham (Brittany Ferries)",
            desc: "Ferries vers Portsmouth (Angleterre), à ~20 min en voiture.",
            coords: [49.279, -0.248],
          },
          {
            nom: "Taxis Abeilles Caen",
            desc: "Réservation de taxi à Caen et alentours. Tél. 02 31 52 17 89.",
          },
        ],
      },
      {
        key: "cinema",
        lieux: [
          {
            nom: "Pathé Les Rives de l'Orne",
            desc: "Multiplexe au centre commercial Les Rives de l'Orne, près du port et de la gare : films récents.",
            coords: [49.1792, -0.3628],
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
          {
            nom: "Le Cargö",
            desc: "Scène de musiques actuelles : concerts toute l'année, 9 cours Caffarelli, sur la presqu'île.",
            coords: [49.1807, -0.3475],
          },
        ],
      },
      {
        key: "nocturne",
        lieux: [
          {
            nom: "Rue Écuyère & rue de Bras",
            desc: "L'épicentre de la vie nocturne caennaise : bars et pubs à la suite, en centre-ville (~10 min en voiture).",
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
          {
            nom: "Le 32",
            desc: "Discothèque sur le port, 32 quai Vendeuvre : la boîte de nuit du centre, généralement ouverte du jeudi au samedi.",
            coords: [49.1827, -0.3553],
          },
        ],
      },
      {
        key: "sante",
        lieux: [
          {
            nom: "Pharmacie de La Folie-Couvrechef",
            desc: "La pharmacie la plus proche du logement (~7 min à pied), secteur Porte de l'Europe. Pharmacie de garde : composez le 3237.",
            coords: [49.201023, -0.37899],
          },
          {
            nom: "Pharmacie 2000",
            desc: "Pharmacie de la Halle Molière, quartier du Chemin Vert.",
            coords: [49.192916, -0.393328],
          },
          {
            nom: "Pharmacie du Chemin Vert",
            desc: "Autre pharmacie du quartier voisin, rue du Chemin Vert.",
            coords: [49.192101, -0.395403],
          },
        ],
      },
      {
        key: "hopital",
        lieux: [
          {
            nom: "Hôpital privé Saint-Martin",
            desc: "L'établissement de santé le plus proche, à ~6 min à pied du logement (urgences privées). Tél. 02 31 15 51 51.",
            coords: [49.198214, -0.381026],
          },
          {
            nom: "CHU Caen Normandie",
            desc: "Centre hospitalier universitaire (urgences), secteur Côte de Nacre, à ~10 min en voiture. Tél. 02 31 06 31 06.",
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
          {
            nom: "Cabinet médical de la Folie-Couvrechef",
            desc: "Médecins généralistes du quartier (Dr Fromager, Dr Schaeffer), à ~5 min à pied.",
            coords: [49.200877, -0.381787],
          },
        ],
      },
      {
        key: "laverie",
        lieux: [
          {
            nom: "Laverie du Chemin Vert",
            desc: "Laverie automatique du quartier voisin, rue du Chemin Vert.",
            coords: [49.192077, -0.395672],
          },
          {
            nom: "Lavomatique",
            desc: "Avenue de la 1ʳᵉ Armée Française — laverie automatique, à ~5 min en voiture.",
            coords: [49.188536, -0.382215],
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
      "Vous avez la chance d'avoir le Mémorial de Caen juste en face : réservez-y votre matinée, c'est l'un des plus beaux musées d'histoire de France. Prolongez ensuite par le parc de la Colline aux Oiseaux, à deux pas — sa roseraie et son labyrinthe sont magnifiques aux beaux jours, et l'entrée est gratuite. Et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !",
  },

  numerosUtiles: {
    contact: { nom: "Josie Conciergerie", tel: "" },
    note: "Nous restons disponibles à tout moment via la conversation de votre plateforme de réservation (Airbnb ou Booking) : n'hésitez pas à nous écrire pour la moindre question.",
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
