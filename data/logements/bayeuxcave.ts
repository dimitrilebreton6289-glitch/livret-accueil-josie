import type { Logement, CategorySection } from "../types";
import { caen } from "./caen";

/**
 * « Autour de moi » à Bayeux, repris des adresses géolocalisées du livret StyQR
 * « Bayeux Cave » (export du 2026-11-16). Seules les adresses de Bayeux et des
 * environs sont gardées (les adresses de Caen, à 27 km, sont retirées). Ces
 * catégories sont aussi utilisées par le livret « Saint-Patrice » (même ville) :
 * les distances sont recalculées par la carte depuis chaque logement, donc les
 * descriptions ne donnent pas de distance.
 */
const CATEGORIES: CategorySection[] = [
  {
    key: "culture",
    lieux: [
      { nom: "Musée de la Tapisserie de Bayeux", desc: "La célèbre Tapisserie de Bayeux (XIe siècle) raconte la conquête de l'Angleterre par Guillaume le Conquérant. Incontournable.", coords: [49.274411, -0.7005935] },
      { nom: "Cathédrale Notre-Dame de Bayeux", desc: "Magnifique cathédrale romane et gothique, au cœur de la vieille ville.", coords: [49.2754687, -0.7034685] },
      { nom: "Musée d'Art et d'Histoire Baron Gérard (MAHB)", desc: "Musée des beaux-arts et de la porcelaine de Bayeux, au pied de la cathédrale.", coords: [49.2760469, -0.7036102] },
      { nom: "Musée Mémorial de la Bataille de Normandie", desc: "Musée consacré à la bataille de Normandie de l'été 1944.", coords: [49.2734247, -0.7114066] },
      { nom: "Cimetière militaire britannique", desc: "Le plus grand cimetière britannique de la Seconde Guerre mondiale en France, face au Musée Mémorial.", coords: [49.2740209, -0.7141757] },
      { nom: "Office de tourisme de Bayeux", desc: "Plans, visites et idées de sorties, rue Saint-Jean.", coords: [49.2768722, -0.7008716] },
    ],
  },
  {
    key: "loisirs",
    lieux: [
      { nom: "Arromanches-les-Bains", desc: "Plage du Débarquement et vestiges du port artificiel, à ~15 min en voiture.", coords: [49.338, -0.621], itineraire: "https://www.google.com/maps/search/?api=1&query=Arromanches-les-Bains" },
      { nom: "Cimetière américain de Colleville-sur-Mer", desc: "Au-dessus d'Omaha Beach : le cimetière américain de Normandie, lieu de mémoire saisissant. À ~25 min en voiture.", coords: [49.3586, -0.8547], itineraire: "https://www.google.com/maps/search/?api=1&query=Cimeti%C3%A8re+am%C3%A9ricain+Colleville-sur-Mer" },
      { nom: "Centre aquatique Auréo", desc: "Piscine de Bayeux.", coords: [49.2826952, -0.7009584] },
      { nom: "Bayeux Aventure", desc: "Parc accrobranche en forêt, à ~10 min en voiture.", coords: [49.2870095, -0.7654357] },
      { nom: "Bowling 868", desc: "Bowling de Bayeux.", coords: [49.2650399, -0.6763638] },
    ],
  },
  {
    key: "nature",
    lieux: [
      { nom: "Jardin botanique de Bayeux", desc: "Joli jardin et son hêtre pleureur classé « arbre remarquable ».", coords: [49.2868786, -0.7174301] },
      { nom: "Port-en-Bessin", desc: "Port de pêche pittoresque, à ~15 min en voiture.", coords: [49.3464425, -0.753295] },
    ],
  },
  {
    key: "plages",
    lieux: [
      { nom: "Plage d'Asnelles", desc: "Grande plage de sable (Gold Beach), idéale pour le char à voile. À ~15 min en voiture.", coords: [49.3419678, -0.5833882] },
      { nom: "Plage de Courseulles-sur-Mer", desc: "Plage du Débarquement (Juno Beach), réputée pour ses huîtres. À ~25 min en voiture.", coords: [49.3352889, -0.4495877] },
    ],
  },
  {
    key: "restaurants",
    lieux: [
      { nom: "Brasserie des Ducs", desc: "Coup de cœur d'Agathe : brasserie, rue Saint-Patrice.", coords: [49.279185, -0.7090095] },
      { nom: "La Table du Lion", desc: "Restaurant de l'hôtel Le Lion d'Or, rue Saint-Jean.", coords: [49.2760739, -0.6985123] },
      { nom: "L'Alchimie", desc: "Cuisine française, rue Saint-Jean.", coords: [49.2764064, -0.6992372] },
      { nom: "La Rapière", desc: "Cuisine normande, rue Saint-Jean.", coords: [49.27632, -0.699237] },
      { nom: "L'Angle Saint-Laurent", desc: "Cuisine française, rue des Bouchers.", coords: [49.277666, -0.7009097] },
      { nom: "L'Alcôve", desc: "Cuisine française, rue Larcher.", coords: [49.275484, -0.7020119] },
      { nom: "Chez Paulette", desc: "Restaurant, rue des Cuisiniers.", coords: [49.2761546, -0.7038555] },
      { nom: "Le Moulin de la Galette", desc: "Crêperie-galetterie.", coords: [49.2740669, -0.7009363] },
      { nom: "Pizzeria Fred'Au", desc: "Pizzeria.", coords: [49.2768941, -0.7001208] },
      { nom: "Le Florentin", desc: "Pizzeria.", coords: [49.2763883, -0.703453] },
      { nom: "Patanella", desc: "Cuisine italienne.", coords: [49.2754945, -0.7045195] },
    ],
  },
  {
    key: "restorapide",
    lieux: [
      { nom: "Le Café Cuillère", desc: "Salon de thé, rue Saint-Jean.", coords: [49.2765001, -0.6997768] },
      { nom: "Selma Alabama", desc: "Brunch, rue Saint-Jean.", coords: [49.2763363, -0.6998627] },
      { nom: "Les Volets Roses", desc: "Salon de thé et brunch, près de la cathédrale.", coords: [49.2756423, -0.7045252] },
      { nom: "Bisette", desc: "Café, rue Saint-Jean.", coords: [49.2767399, -0.7011442] },
      { nom: "Youmaa Café", desc: "Café, rue Saint-Jean.", coords: [49.2767886, -0.7012051] },
      { nom: "Ma pause marché", desc: "Restauration rapide, rue Saint-Malo.", coords: [49.2783215, -0.7057323] },
      { nom: "Bread Rolls", desc: "Sandwichs à emporter, rue Saint-Malo.", coords: [49.2784378, -0.7059976] },
    ],
  },
  {
    key: "bars",
    lieux: [
      { nom: "Pub Fiction", desc: "Pub, rue du Petit Rouen.", coords: [49.2753906, -0.697636] },
      { nom: "Le Montmartre", desc: "Bar, rue Saint-Jean.", coords: [49.2765933, -0.7001692] },
      { nom: "Le Conquérant", desc: "Pub, rue de Nesmond.", coords: [49.2740022, -0.7003821] },
      { nom: "La Paillote", desc: "Bar de nuit, rue Montfiquet.", coords: [49.2809437, -0.7081608] },
    ],
  },
  {
    key: "cinema",
    lieux: [
      { nom: "Cinéma Le Méliès", desc: "Le cinéma de Bayeux.", coords: [49.2781258, -0.703335] },
    ],
  },
  {
    key: "courses",
    lieux: [
      { nom: "Carrefour City", desc: "Supérette, rue Saint-Jean.", coords: [49.276481, -0.7002993] },
      { nom: "Coccimarket", desc: "Supérette, avenue Georges Clemenceau.", coords: [49.2761638, -0.693528] },
      { nom: "Viveco market", desc: "Épicerie, rue Saint-Patrice.", coords: [49.2793599, -0.7097929] },
      { nom: "Carrefour Bayeux", desc: "Hypermarché, route de Vaux-sur-Aure.", coords: [49.28542, -0.70608] },
      { nom: "E.Leclerc Bayeux", desc: "Hypermarché, boulevard du 6 Juin.", coords: [49.278017, -0.7194488] },
      { nom: "Marché Saint-Jean", desc: "Marché du mercredi matin (7h30-13h30).", coords: [49.2760222, -0.6987085] },
      { nom: "Marché Saint-Patrice", desc: "Grand marché du samedi matin (7h30-14h), place Saint-Patrice.", coords: [49.279398, -0.7077124] },
    ],
  },
  {
    key: "bouche",
    lieux: [
      { nom: "Le Petit Moulin", desc: "Boulangerie, avenue Georges Clemenceau.", coords: [49.2762748, -0.6937155] },
      { nom: "Boulangerie des Ducs", desc: "Boulangerie, rue Saint-Martin.", coords: [49.276947, -0.7019489] },
      { nom: "Boulangerie Saint-Patrice", desc: "Boulangerie, rue Saint-Patrice.", coords: [49.2788102, -0.7080332] },
      { nom: "La Fromagerie de Bayeux", desc: "Fromagerie, rue Alain Chartier.", coords: [49.2789957, -0.7074254] },
      { nom: "La Nouvelle Vague", desc: "Poissonnerie, rue Saint-Malo.", coords: [49.2787563, -0.7075975] },
      { nom: "Rungis", desc: "Primeur, rue Saint-Patrice.", coords: [49.2788177, -0.7078972] },
      { nom: "Boucherie Saint-Loup", desc: "Boucherie, rue Saint-Loup.", coords: [49.2741761, -0.7062178] },
      { nom: "Bajocave", desc: "Caviste, rue Saint-Martin.", coords: [49.2770569, -0.7017265] },
    ],
  },
  {
    key: "tabac",
    lieux: [
      { nom: "La Gitane", desc: "Bar-tabac, rue Saint-Jean.", coords: [49.2761961, -0.6988811] },
      { nom: "Les Petites Bulles", desc: "Bar-tabac, rue Saint-Jean.", coords: [49.2766719, -0.7000429] },
      { nom: "Tabac Saint-Patrice", desc: "Tabac, rue Alain Chartier.", coords: [49.2792785, -0.7069767] },
    ],
  },
  {
    key: "laverie",
    lieux: [
      { nom: "Lavomatique (rue Maréchal Foch)", desc: "Laverie automatique, rue Maréchal Foch.", coords: [49.277216, -0.7009259] },
      { nom: "Lavomatique (rue des Bouchers)", desc: "Laverie automatique, rue des Bouchers.", coords: [49.2794069, -0.7066896] },
    ],
  },
  {
    key: "transports",
    lieux: [
      { nom: "Gare de Bayeux", desc: "Trains directs vers Caen (~20 min) et Paris Saint-Lazare.", coords: [49.2697187, -0.6981174] },
      { nom: "Arrêt de bus « Saint-Jean »", desc: "Arrêt de bus, avenue Georges Clemenceau.", coords: [49.2766942, -0.694606] },
      { nom: "Arrêt de bus « Saint-Patrice »", desc: "Arrêt de bus, rue du Marché.", coords: [49.2796386, -0.7071994] },
      { nom: "Taxis du Bessin", desc: "Taxis, place de la Gare.", coords: [49.269814, -0.6982066] },
      { nom: "Aéroport de Caen-Carpiquet", desc: "Vols intérieurs et saisonniers, à ~25 min en voiture.", coords: [49.183191, -0.4594302] },
    ],
  },
  {
    key: "stations",
    lieux: [
      { nom: "TotalEnergies Access", desc: "Station-service, boulevard Sadi Carnot.", coords: [49.271077, -0.699922] },
      { nom: "Station Carrefour Bayeux", desc: "Station-service de l'hypermarché Carrefour.", coords: [49.285376, -0.704171] },
    ],
  },
  {
    key: "sante",
    lieux: [
      { nom: "Pharmacie du Pont Saint-Jean", desc: "Pharmacie, rue Saint-Jean. Pharmacie de garde : composez le 3237.", coords: [49.2768852, -0.7011411] },
      { nom: "Pharmacie du Centre", desc: "Pharmacie, rue Saint-Malo.", coords: [49.2776415, -0.7046216] },
      { nom: "Pharmacie Saint-Patrice", desc: "Pharmacie, rue Saint-Patrice.", coords: [49.2789085, -0.7081884] },
    ],
  },
  {
    key: "hopital",
    lieux: [
      { nom: "Centre hospitalier de Bayeux", desc: "Hôpital (urgences), rue de Nesmond.", coords: [49.2746205, -0.7012321] },
    ],
  },
];

/**
 * Logement « Bayeux Cave » — appartement de 75 m² au dernier étage (sous les
 * combles) du 32 rue de la Cave, en plein centre historique de Bayeux. Deux
 * chambres avec lit double (140 × 200), salon avec 2 canapés, cuisine équipée,
 * salle de bain avec baignoire et machine à laver, WC séparés. 4 voyageurs.
 *
 * Annonce : Airbnb 1665893409491802628 (« Toits de Bayeux - Cathédrale et
 * Tapisserie à pied »). L'annonce correspond clairement au livret (dernier étage
 * sous les combles, 2 chambres avec lit double, cafetière filtre, baignoire,
 * machine à laver dans la salle de bain) : ses photos sont reprises
 * (couverture = pièce de vie). Pas d'annonce Booking connue.
 *
 * Refait d'après le livret StyQR « Bayeux Cave » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Bayeux-Cave.md). Arrivée 17h30,
 * départ 10h. Animaux acceptés (1 maximum, avec supplément). Non-fumeur, pas
 * de fêtes. Aucun code en clair dans le livret StyQR.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ À VÉRIFIER PAR AGATHE :
 *   - Lien Airbnb : la table indiquait « peut-être Toits de Bayeux » ; les photos
 *     de cette annonce correspondent bien à la description StyQR → à confirmer.
 *   - WiFi : rien dans StyQR, et l'annonce Airbnb indique le WiFi comme « non
 *     disponible ». Le livret affiche donc « Pas de WiFi pour le moment ».
 *   - Départ : StyQR demande de verrouiller « en appuyant sur la flèche (cf
 *     vidéo) », mais il n'y a pas de vidéo dans le livret StyQR. Une vidéo
 *     d'arrivée / de départ serait utile.
 *   - Arrivée anticipée : pas de lien Stripe dans StyQR (sur demande seulement).
 *
 * Pour traduire un texte, voir data/i18n-styqr/bayeuxcave.ts (clé = texte FR exact).
 */
export const bayeuxcave: Logement = {
  id: "bayeuxcave",
  nom: "Bayeux Cave",
  adresse: "32 Rue de la Cave, 14400 Bayeux",
  ville: "Bayeux",
  itineraire: "https://maps.google.com/?q=32+Rue+de+la+Cave+14400+Bayeux",
  coords: [49.2766587, -0.697333],
  cover: "/logements/bayeuxcave/cover.jpg",

  motAccueil:
    "Bienvenue à Bayeux ! Votre appartement, sous les toits de la vieille ville, est à deux pas de la rue Saint-Jean, de la célèbre Tapisserie et de la cathédrale. Tout se découvre à pied, et les plages du Débarquement sont à quelques minutes en voiture. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h30",
    checkinExpress: [
      "L'appartement se trouve au dernier étage du 32 rue de la Cave (escalier étroit, sans ascenseur)",
      "Le code de la boîte à clés vous est communiqué par message le jour de votre arrivée",
      "Dans la boîte à clés : la clé de l'appartement et le badge de la porte d'entrée",
    ],
    etapes: [
      { texte: "Rendez-vous au 32 rue de la Cave, à Bayeux. Devant l'immeuble, passez sous le porche (l'arche) et traversez-le." },
      { texte: "Continuez jusqu'aux boîtes aux lettres : la boîte à clés se trouve dans la boîte aux lettres tout en haut à gauche." },
      {
        texte:
          "Abaissez le cache noir pour faire apparaître le clavier, puis composez le code reçu par message. Appuyez ensuite sur le petit loquet noir, sur le côté gauche de la boîte, pour l'ouvrir. Récupérez la clé et le badge, refermez la boîte et brouillez le code.",
      },
      { texte: "La porte d'entrée de l'immeuble est à gauche des boîtes aux lettres : présentez le badge devant le lecteur noir, puis poussez la porte." },
      {
        texte:
          "Montez les escaliers jusqu'au dernier étage (attention, ça grimpe !). L'appartement est la seule porte du palier : ouvrez avec la clé. Bienvenue chez vous ! 🙂",
      },
    ],
    arriveeAnticipee: {
      texte:
        "Vous souhaitez arriver avant 17h30 ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
    },
    parking:
      "Stationnement gratuit dans les rues voisines : rue de la Cave, avenue Georges Clemenceau et rue Saint-Jean.",
    bagages:
      "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
    decouverte: {
      rdc: [
        "Pièce de vie avec coin salon (2 canapés) et grande table à manger",
        "Cuisine entièrement équipée",
        "Deux chambres indépendantes, chacune avec un lit double (140 × 200), stores et volets",
        "Salle de bain avec baignoire et machine à laver",
        "WC séparés",
      ],
      etage: [],
      exterieur: [],
    },
  },

  wifi: {
    reseau: "Pas de WiFi pour le moment",
    motDePasse: "Prévoyez votre connexion mobile (4G/5G)",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: "🎁 Produits d'accueil",
        contenu:
          "À votre arrivée, vous trouverez à disposition : papier toilette, gel douche/shampooing, sel et poivre, du café et du thé, du produit vaisselle et une éponge.",
      },
      {
        titre: "🛏️ Linge de maison",
        contenu:
          "Les draps sont fournis pour les deux lits doubles. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
      },
      {
        titre: "📶 WiFi",
        contenu:
          "Le logement n'est pas équipé du WiFi. Prévoyez votre connexion mobile (4G/5G) pour vos usages internet.",
      },
      {
        titre: "🪜 Escalier",
        contenu:
          "L'appartement est au dernier étage, sous les combles, sans ascenseur. L'escalier est étroit et en colimaçon (avec rampe) : prévoyez-le pour vos bagages. L'accès peut être difficile pour les personnes à mobilité réduite.",
      },
      {
        titre: "☕ Machine à café",
        contenu: "La machine à café est une cafetière à filtre. Une bouilloire est aussi à votre disposition.",
        photos: ["/logements/bayeuxcave/cafe.jpg"],
      },
      {
        titre: "🔥 Plaque de cuisson",
        contenu:
          "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement (au moins 30 secondes) sur le cadenas pour la déverrouiller.",
      },
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, utilisez la chaudière située dans le placard : appuyez sur le bouton avec le symbole « Chauffage + Robinet ». Les radiateurs se mettent alors en route ; réglez ensuite la température avec la molette sur le côté de chaque radiateur. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧺 Machine à laver",
        contenu: "Une machine à laver est à votre disposition dans la salle de bain.",
        photos: ["/logements/bayeuxcave/machine-a-laver.jpg"],
      },
      {
        titre: "🧹 Ménage",
        contenu:
          "Un balai, une serpillière et un aspirateur sont à votre disposition dans l'appartement (le balai est dans le placard de la pièce de vie).",
      },
      {
        titre: "🍽️ Vaisselle",
        contenu:
          "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
      },
    ],
    electromenager: [
      "Plaque de cuisson",
      "Micro-ondes",
      "Réfrigérateur",
      "Cafetière filtre",
      "Bouilloire",
      "Lave-linge",
    ],
    reglementInterieur: {
      capaciteMax: 4,
      nonFumeur: true,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme:
        "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).",
      texte:
        "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
    },
    poubelles:
      "Les poubelles sont à déposer dans les bacs situés à l'extérieur, dans la rue. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères",
    animaux:
      "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  },

  equipements: [
    "Deux chambres (lits doubles 140 × 200)",
    "Salon avec 2 canapés",
    "Cuisine équipée",
    "Plaque de cuisson",
    "Micro-ondes",
    "Réfrigérateur",
    "Cafetière filtre",
    "Bouilloire",
    "Lave-linge",
    "Salle de bain avec baignoire",
    "WC séparés",
    "Chauffage",
    "Linge de lit & serviettes",
    "Animaux acceptés (supplément)",
  ],

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [
      "Faire la vaisselle, la ranger et vider les poubelles",
      "Rendre l'appartement propre et rangé",
      "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
      "Laisser les draps sur les lits et les serviettes utilisées dans la salle de bain",
      "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
      "Fermer l'appartement à clé, puis remettre la clé et le badge dans la boîte à clés",
    ],
    departTardif: caen.depart.departTardif,
  },

  quartier: {
    aPied: [
      "Rue Saint-Jean — commerces, cafés & restaurants (~2 min)",
      "Marché Saint-Jean, le mercredi matin (~2 min)",
      "Musée de la Tapisserie de Bayeux (~5 min)",
      "Cathédrale Notre-Dame (~7 min)",
      "Gare de Bayeux (~12 min)",
      "Musée Mémorial de la Bataille de Normandie (~15 min)",
    ],
    note: "Vous êtes en plein centre historique de Bayeux, à deux pas de la rue Saint-Jean, la rue commerçante. La Tapisserie, la cathédrale et les musées se visitent à pied. Les plages du Débarquement (Arromanches, Omaha Beach) sont à 15–25 minutes en voiture.",
  },

  autourDeMoi: {
    categories: CATEGORIES,
    coupDeCoeur:
      "Le coup de cœur d'Agathe à Bayeux : la Brasserie des Ducs, rue Saint-Patrice. Ne manquez pas la Tapisserie de Bayeux et la cathédrale, puis flânez rue Saint-Jean. Le mercredi matin, le marché Saint-Jean s'installe tout près ; le samedi matin, c'est le grand marché de la place Saint-Patrice. Et prenez le temps d'aller voir les plages du Débarquement, à quelques minutes en voiture.",
  },

  numerosUtiles: caen.numerosUtiles,
};
