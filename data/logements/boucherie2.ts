import type { Logement } from "../types";
import { caen } from "./caen";
import { boucherie1 } from "./boucherie1";

/**
 * Logement « Boucherie 2 » — appartement au 2e étage du 10 place de l'Ancienne
 * Boucherie, à côté de l'Abbaye aux Hommes. Même immeuble que Boucherie 1
 * (1er étage) et Boucherie 3 (3e étage) : le quartier, le stationnement et
 * « Autour de moi » sont repris de Boucherie 1.
 *
 * Annonces : Airbnb 636098891495639222 (« Boucherie 2eme »), Booking 15394629.
 * Photos reprises de l'annonce Airbnb (couverture = séjour).
 *
 * Refait d'après le livret StyQR « Boucherie 2 » (export du 2026-11-16, voir
 * le cerveau Josie : raw/documents/livrets-styqr/Boucherie-2.md) :
 * salon avec canapé-lit (2 pers.), espace repas et cuisine équipée, chambre
 * indépendante avec lit double, salle de bain et WC séparés. Arrivée 17h,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur,
 * pas de fêtes.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le code de la porte d'entrée de l'immeuble figurait en clair dans le
 * livret StyQR. Il n'est PAS repris ici : il est envoyé par message avec celui
 * de la boîte à clés.
 *
 * ⚠️ À vérifier par Agathe :
 *   - Étage : la « Présentation » StyQR dit « premier étage » (texte copié de
 *     Boucherie 1), mais le parcours d'arrivée dit « 2e étage, porte de gauche ».
 *     On a retenu le 2e étage.
 *   - Le livret StyQR parle de « velux » et de « lave-vaisselle » au départ :
 *     les velux sont repris, le lave-vaisselle non (à confirmer).
 *   - Wifi : réseau « Thibaud et Marine » (différent de Boucherie 1).
 *
 * Pour traduire un texte, voir data/i18n-styqr/boucherie2.ts (clé = texte FR exact).
 */
export const boucherie2: Logement = {
  id: "boucherie2",
  nom: "Boucherie 2",
  adresse: "10 Place de l'Ancienne Boucherie, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=10+Place+de+l'Ancienne+Boucherie+14000+Caen",
  coords: [49.1826374, -0.3743477],
  cover: "/logements/boucherie2/cover.jpg",

  motAccueil:
    "Bienvenue à Boucherie 2 ! Votre appartement se trouve sur une jolie place pavée, à deux pas de l'Abbaye aux Hommes et de l'hôtel de ville. Cafés, restaurants et petits commerces sont en bas de chez vous, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://youtube.com/shorts/JXFODr_E3Ic",
    videoPortrait: true,
    checkinExpress: [
      "L'appartement se trouve au 2e étage du 10 place de l'Ancienne Boucherie, porte de gauche sur le palier",
      "Le code de la porte d'entrée et celui de la boîte à clés vous sont communiqués par message le jour de votre arrivée",
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 10 place de l'Ancienne Boucherie." },
      { texte: "Composez le code de la porte d'entrée reçu par message, puis ouvrez la porte." },
      {
        texte:
          "Traversez le couloir et allez à gauche : les boîtes à clés se trouvent à côté des boîtes aux lettres. La vôtre est celle de droite.",
      },
      {
        texte:
          "Composez le code de la boîte à clés reçu par message, puis appuyez sur les boutons latéraux pour l'ouvrir. Récupérez les clés, refermez la boîte et brouillez le code.",
      },
      { texte: "Montez les escaliers jusqu'au 2e étage : votre porte est à gauche sur le palier. Bienvenue chez vous ! 🙂" },
    ],
    arriveeAnticipee: boucherie1.arrivee.arriveeAnticipee,
    parking: boucherie1.arrivee.parking,
    bagages: boucherie1.arrivee.bagages,
    decouverte: {
      rdc: [
        "Pièce de vie avec salon et canapé-lit (2 personnes)",
        "Espace repas et cuisine équipée",
        "Salle de bain et WC séparés",
        "Au fond de l'appartement, chambre indépendante avec lit double (2 personnes)",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Thibaud et Marine",
    motDePasse: "AirbnbMT",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour les deux lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "🛋️ Canapé-lit",
        contenu: "Pour déplier le canapé-lit, regardez cette courte vidéo.",
        video: "https://www.youtube.com/watch?v=yB5Dmc_Acvk",
        photos: ["/logements/boucherie2/canape-lit.jpg"],
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
        photos: ["/logements/boucherie2/cuisine.jpg"],
      },
      {
        titre: "📺 Télévision",
        contenu:
          "1. Appuyez sur le bouton On/Off pour allumer le téléviseur (sans image, vérifiez que la source est bien HDMI 1).\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur.\n3. Avec les flèches, sélectionnez « TV Bouygues » puis validez avec OK.\n4. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "L'aspirateur et la serpillière se trouvent dans le placard près de la salle de bain.",
      },
      {
        titre: "👶 Équipement bébé",
        contenu:
          "Un lit parapluie peut être mis à votre disposition sur demande préalable. Le matelas et les draps ne sont pas fournis.",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: ["Plaque de cuisson", "Réfrigérateur", "Machine Nespresso", "TV"],
    reglementInterieur: boucherie1.pratique.reglementInterieur,
    poubelles: boucherie1.pratique.poubelles,
    animaux: boucherie1.pratique.animaux,
  },

  equipements: boucherie1.equipements,

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres et les velux, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés (à côté des boîtes aux lettres)",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: boucherie1.quartier,

  autourDeMoi: boucherie1.autourDeMoi,

  numerosUtiles: caen.numerosUtiles,
};
