import type { Logement } from "../types";
import { caen } from "./caen";
import { caponiere46 as c } from "./numero4";

/**
 * Logement « Vert » — appartement rénové au 1er étage du 46 rue Caponière,
 * porte n° 3 (accès par la porte 46A). Le lien StyQR de ce livret est
 * « numero3 ». Même immeuble que Numéro 4, Numéro 7 et Duplex : les textes
 * communs (parking, poubelles, quartier, autour de moi…) viennent de
 * `caponiere46` dans numero4.ts.
 *
 * Annonces : Airbnb = annonce multi-logements (pas de numéro fiable pour ce
 * logement), Booking : pas de numéro connu. Pas de photos Airbnb (les annonces
 * multi-logements du tableau renvoient une page « introuvable »).
 *
 * Refait d'après le livret StyQR « Vert » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Vert.md) : pièce de vie avec
 * canapé convertible et cuisine équipée, chambre de 15 m² avec lit double et
 * dressing, salle de bain avec baignoire et WC séparés. Arrivée 17h, départ
 * 10h. Animaux acceptés (1 maximum, avec supplément). Wifi propre (box
 * différente des autres logements du 46).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le digicode de la porte 46A figurait en clair dans le livret StyQR. Il
 * n'est PAS repris ici : il est envoyé par message, avec celui de la boîte à
 * clés.
 *
 * ⚠️ Photo de couverture à fournir (photo générique du château de Caen en
 * attendant).
 *
 * ⚠️ À vérifier par Agathe :
 *   - Taille du lit : « 140 × 200 » dans la présentation, « Queen Size
 *     160 × 200 » dans le linge de maison. Taille non indiquée ici.
 *   - Capacité : 4 voyageurs (lit double + canapé convertible) — à confirmer,
 *     ainsi que la fourniture des draps du canapé-lit.
 *   - Départ : StyQR ne dit pas où rendre la clé. On a écrit « remettre les
 *     clés dans la boîte à clés au fond de la cour » : à confirmer.
 *
 * Pour traduire un texte, voir data/i18n-styqr/vert.ts (clé = texte FR exact).
 */
export const vert: Logement = {
  id: "vert",
  nom: "Vert",
  adresse: c.adresse,
  ville: c.ville,
  itineraire: c.itineraire,
  coords: c.coords,
  cover: c.cover,

  motAccueil:
    "Bienvenue dans l'appartement Vert ! Cosy et rénové, il se trouve au 1er étage d'un immeuble de la rue Caponière, à deux pas de l'Abbaye aux Hommes et du centre-ville. Cafés, restaurants et commerces sont tout proches, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🌿",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=DT-gRRrb5Ws",
    checkinExpress: [
      "L'appartement se trouve au 1er étage (sans ascenseur) du 46 rue Caponière (porte 46A), porte n° 3",
      "Le code de la boîte à clés et celui de la porte d'entrée vous sont communiqués par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 46 rue Caponière et passez sous le porche." },
      { texte: "Allez au fond de la cour, à gauche : vous y trouverez les boîtes à clés." },
      {
        texte:
          "Composez le code de la boîte à clés reçu par message, puis appuyez sur les boutons latéraux pour l'ouvrir. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Revenez sur vos pas jusqu'à la porte 46A, composez le code de la porte d'entrée reçu par message, puis tirez la porte pour l'ouvrir.",
      },
      {
        texte:
          "Montez au 1er étage, puis tournez à gauche : votre porte est la numéro 3. Ouvrez-la avec la clé. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: c.arriveeAnticipee,
    parking: c.parking,
    bagages: c.bagages,
    decouverte: {
      rdc: [
        "Pièce de vie avec salon et canapé-lit",
        "Cuisine entièrement équipée",
        "Chambre de 15 m² avec lit double et dressing",
        "Salle de bain avec baignoire et WC séparés",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-A170",
    motDePasse: "5x9fSxZ6h4VxnxrCXc",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      { titre: "🎁 Produits d'accueil", contenu: c.produitsAvecLessive },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit double. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://www.youtube.com/watch?v=yB5Dmc_Acvk",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Allumez la télévision et le décodeur Orange.\n2. Si l'écran Orange ne s'affiche pas, appuyez sur la touche SOURCE de la télécommande Oceanic et choisissez HDMI 1.\n3. Vous avez alors accès aux chaînes de la TV d'Orange, ainsi qu'à Netflix 🍿",
      },
      c.sections.cafe,
      c.sections.plaque,
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton Power, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🔑 Porte d'entrée",
        contenu: "Pour fermer la porte à clé, pensez à bien lever la poignée vers le haut : la clé tourne alors facilement.",
      },
      c.sections.menagePiece,
      c.sections.vaisselle,
    ],
    electromenager: [
      "Plaque de cuisson",
      "Micro-ondes",
      "Réfrigérateur",
      "Machine Nespresso",
      "Bouilloire",
      "Grille-pain",
      "TV",
    ],
    reglementInterieur: { capaciteMax: 4, ...c.reglement },
    poubelles: c.poubelles,
    animaux: c.animaux,
  },

  equipements: [
    "WiFi",
    "TV",
    "Netflix",
    "Lit double",
    "Canapé-lit",
    "Dressing",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Machine Nespresso",
    "Bouilloire",
    "Grille-pain",
    "Salle de bain avec baignoire",
    "WC séparés",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      ...c.departDebut,
      "Fermer l'appartement à clé (en levant bien la poignée), puis remettre les clés dans la boîte à clés au fond de la cour",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: c.quartier,
  autourDeMoi: c.autourDeMoi,
  numerosUtiles: caen.numerosUtiles,
};
