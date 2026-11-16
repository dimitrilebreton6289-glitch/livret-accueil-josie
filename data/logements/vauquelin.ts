import type { Logement } from "../types";
import { caen } from "./caen";
import { NEARBY_SAINT_SAUVEUR, LAVERIES_SAINT_SAUVEUR, chezjohan } from "./chezjohan";

/**
 * Logement « Vauquelin » — studio au 1er étage (porte n° 42), rue Vauquelin,
 * à deux pas de la place Saint-Sauveur. La boîte à clés se trouve rue
 * Quincampoix (l'immeuble donne sur les deux rues).
 *
 * Annonces : Airbnb 1063669486433511580 (« Vauquelin ») ; Booking 17149201 (?).
 * Photos reprises de l'annonce Airbnb (couverture = la pièce de vie ; lit
 * escamotable replié / déplié).
 *
 * Refait d'après le livret StyQR « Vauquelin » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Vauquelin.md) : pièce de vie
 * avec coin salon, table haute et 2 tabourets, cuisine équipée (plaques, four
 * combiné micro-ondes, Dolce Gusto), lit double escamotable sous la télévision,
 * salle de bain avec douche, WC et lave-linge. Arrivée 17h, départ 10h.
 * Non-fumeur, pas de fêtes, pas d'animaux (selon StyQR).
 *
 * « Autour de moi » : mêmes adresses que Chez Johan, à 30 m
 * (NEARBY_SAINT_SAUVEUR) ; le reste vient de Caen.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Aucun code en clair dans le livret StyQR (le code de la boîte à clés est
 * envoyé par message le jour de l'arrivée).
 *
 * ⚠️ Vidéo hébergée chez StyQR : rapatriée dans le livret le 16/11/2026 (fichier MP4 dans public/logements/<id>/videos) (dépliage du lit,
 * section « Lit escamotable »). Le livret StyQR contenait une 2e vidéo du même
 * sujet, plus ancienne, non reprise :
 * https://styqr-space.ams3.cdn.digitaloceanspaces.com/03683869-86f1-473d-872a-1fc65bdd47ff/0401-(1).mov
 *
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Adresse : StyQR indique 20 rue Vauquelin (gardée ici), Booking indique
 *     8 bis rue Vauquelin — qui est l'adresse du logement « Malo » : probable
 *     confusion entre les deux annonces.
 *   - Animaux : StyQR dit « nous n'acceptons pas les animaux », mais l'annonce
 *     Airbnb affiche « Animaux acceptés ». Mis à « non » ici.
 *
 * Pour traduire un texte, voir data/i18n-styqr/vauquelin.ts (clé = texte FR exact).
 */
export const vauquelin: Logement = {
  id: "vauquelin",
  nom: "Vauquelin",
  adresse: "20 Rue Vauquelin, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=20+Rue+Vauquelin+14000+Caen",
  coords: [49.1831392, -0.3670934],
  cover: "/logements/vauquelin/cover.jpg",

  motAccueil:
    "Bienvenue au studio Vauquelin ! Vous êtes en plein centre historique, à deux pas de la place Saint-Sauveur. Cafés, restaurants et petits commerces sont en bas de chez vous, et le château comme l'Abbaye aux Hommes se rejoignent à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=lG6LSAXAwxs",
    checkinExpress: [
      "Le studio se trouve au 1er étage, porte n° 42. La boîte à clés est rue Quincampoix",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Suivez la vidéo et les étapes ci-dessous pour accéder au studio",
    ],
    etapes: [
      { texte: "Rendez-vous rue Quincampoix : c'est dans cette rue que se trouve la boîte à clés." },
      { texte: "La boîte à clés est à côté d'une porte en bois : c'est celle du dessus, marquée « GRIFEMA »." },
      {
        texte:
          "Composez le code reçu par message, puis appuyez sur les boutons latéraux pour ouvrir la boîte. Récupérez les clés et le badge, refermez la boîte et brouillez le code.",
      },
      {
        texte:
          "Passez le badge devant l'interphone pour entrer. Allez ensuite jusqu'à la porte de l'immeuble et passez de nouveau le badge devant l'interphone.",
      },
      {
        texte:
          "Montez les escaliers jusqu'au 1er étage et allez au fond du couloir : votre porte est la n° 42. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking: chezjohan.arrivee.parking,
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec coin salon, table haute et 2 tabourets",
        "Cuisine équipée (plaques de cuisson, four combiné micro-ondes, machine Dolce Gusto)",
        "Lit double escamotable, qui se replie sous la télévision pour gagner de la place",
        "Salle de bain avec douche, lavabo, WC et lave-linge",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Livebox-5990",
    motDePasse: "oQxLVVWNrFSNjE2VWg",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une pastille de lessive, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour le lit double. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛏️ Lit escamotable",
        contenu:
          "Pour gagner de la place, le lit double se replie contre le mur, sous la télévision. Pour le déplier ou le replier, regardez cette courte vidéo.",
        video:
          "/logements/vauquelin/videos/lit.mp4",
        videoPortrait: true,
        photos: ["/logements/vauquelin/lit-ferme.jpg", "/logements/vauquelin/lit-ouvert.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Dolce Gusto. Deux capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off de la télécommande pour allumer la télévision.\n2. Avec les flèches, sélectionnez « Live TV », puis validez avec OK.\n3. Utilisez la même télécommande pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧺 Lave-linge",
        contenu:
          "Le lave-linge (ouverture par le dessus) se trouve dans la salle de bain. Merci de laisser le couvercle ouvert lorsqu'il est vide.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans la salle de bain.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaque de cuisson",
      "Four combiné micro-ondes",
      "Réfrigérateur",
      "Machine Dolce Gusto",
      "Lave-linge",
      "TV",
    ],
    reglementInterieur: {
      capaciteMax: 2,
      nonFumeur: true,
      animauxAcceptes: false,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer dans les bacs situés dehors, à droite de la porte de sortie de l'immeuble. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 28 rue Saint-Sauveur",
    animaux: "Les animaux de compagnie ne sont pas acceptés dans ce logement.",
  },

  equipements: [
    "WiFi",
    "TV",
    "Lit double escamotable",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Four combiné micro-ondes",
    "Réfrigérateur",
    "Machine Dolce Gusto",
    "Lave-linge",
    "Salle de bain",
    "Chauffage",
    "Linge de lit & serviettes",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: chezjohan.depart.instructions,
    departTardif: caen.depart.departTardif,
  },

  quartier: chezjohan.quartier,

  autourDeMoi: {
    categories: [
      ...caen.autourDeMoi.categories.map((c) =>
        NEARBY_SAINT_SAUVEUR[c.key] ? { key: c.key, lieux: NEARBY_SAINT_SAUVEUR[c.key] } : c,
      ),
      { key: "laverie", lieux: LAVERIES_SAINT_SAUVEUR },
    ],
    coupDeCoeur: chezjohan.autourDeMoi.coupDeCoeur,
  },

  numerosUtiles: caen.numerosUtiles,
};
