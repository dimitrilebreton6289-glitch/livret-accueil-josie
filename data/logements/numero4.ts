import type { CategorySection, Lieu, Logement } from "../types";
import { caen } from "./caen";

/* ────────────────────────────────────────────────────────────────────────────
 * Immeuble du 46 rue Caponière : éléments COMMUNS aux quatre logements
 * Numéro 4, Numéro 7, Duplex et Vert (même adresse, mêmes parkings, mêmes
 * poubelles, même quartier). Ils sont définis ici et réutilisés par
 * numero7.ts, duplex.ts et vert.ts pour garder exactement les mêmes textes.
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * Adresses proches du 46 rue Caponière, reprises des livrets StyQR (coups de
 * cœur d'Agathe + commerces géolocalisés). Elles remplacent les catégories
 * « du quotidien » de Caen.
 */
const NEARBY_CAPONIERE: Record<string, Lieu[]> = {
  restaurants: [
    { nom: "Chez Sandy", desc: "Restaurant de quartier, rue Caponière.", coords: [49.1816888, -0.3762207] },
    { nom: "Bouillon Caponière", desc: "Bouillon : cuisine traditionnelle à petits prix.", coords: [49.1819247, -0.3749707] },
    { nom: "Joufflu 1er", desc: "Restaurant, place de l'Ancienne Boucherie.", coords: [49.1826033, -0.3739158] },
    { nom: "Bouillon Saint Martin", desc: "Bouillon, place Saint-Martin.", coords: [49.183564, -0.3706303] },
    { nom: "Monsieur Louis", desc: "Cuisine normande.", coords: [49.1828029, -0.3685023] },
    { nom: "La Buona Tavola", desc: "Cuisine italienne, près de la place Saint-Sauveur.", coords: [49.1830556, -0.3677778] },
    { nom: "Canaglia", desc: "Pizzeria.", coords: [49.1819193, -0.3675325] },
    { nom: "La Tomette", desc: "Restaurant de cuisine maison.", coords: [49.181308, -0.3663487] },
    { nom: "Le Mug", desc: "Coup de cœur d'Agathe, rue Saint-Pierre.", coords: [49.1832633, -0.3639462] },
    { nom: "Bœuf & Cow", desc: "Coup de cœur d'Agathe : viandes et burgers.", coords: [49.1834259, -0.3604218] },
    { nom: "Le Bistrot Basque", desc: "Coup de cœur d'Agathe, quai Vendeuvre.", coords: [49.1829026, -0.3557928] },
    { nom: "A Contre Sens", desc: "Coup de cœur d'Agathe : table gastronomique, quai François Mitterrand.", coords: [49.1815869, -0.3499325] },
    { nom: "Koboon", desc: "Coup de cœur d'Agathe, quai François Mitterrand.", coords: [49.181279, -0.3492958] },
  ],
  restorapide: [
    { nom: "Les Burgers de Colette", desc: "Coup de cœur d'Agathe : burgers, rue Écuyère.", coords: [49.1818593, -0.3689317] },
    { nom: "Mapple Coffee", desc: "Coffee shop, rue Caponière.", coords: [49.1821698, -0.374836] },
    { nom: "Café Céramique Nami", desc: "Café et pâtisseries, place de l'Ancienne Boucherie (on peut aussi y peindre sa céramique).", coords: [49.182623, -0.3741035] },
    { nom: "Bayla", desc: "Brunch, rue Écuyère.", coords: [49.1818898, -0.3701178] },
    { nom: "Kinkuro", desc: "Coffee shop, rue Écuyère.", coords: [49.1819977, -0.3687669] },
    { nom: "Bagel Street", desc: "Bagels.", coords: [49.1819321, -0.3665865] },
    { nom: "Grain de folie", desc: "Sandwichs et formules à emporter.", coords: [49.1824995, -0.3647361] },
    { nom: "Keys & Co.", desc: "Coup de cœur d'Agathe : brunch, avenue du Six Juin.", coords: [49.17857, -0.3531926] },
  ],
  bars: [
    { nom: "Le Boudoir", desc: "Bar, rue Pémagnie.", coords: [49.1836653, -0.3694402] },
    { nom: "Nonna", desc: "Coup de cœur d'Agathe, rue Saint-Sauveur.", coords: [49.1830556, -0.3676429] },
    { nom: "Le Comptoir", desc: "Bar de quartier, produits locaux.", coords: [49.1837389, -0.3662196] },
    { nom: "Âmbar", desc: "Coup de cœur d'Agathe, boulevard Maréchal Leclerc.", coords: [49.1816815, -0.3614276] },
  ],
  bouche: [
    { nom: "Poissonnerie Le Grand Bleu", desc: "Poissonnerie, à deux pas du logement.", coords: [49.1823635, -0.3737343] },
    { nom: "Fromagerie Conquérant", desc: "Fromagerie, rue Guillaume le Conquérant.", coords: [49.1822109, -0.371903] },
    { nom: "Maison Kayser", desc: "Boulangerie, place Saint-Sauveur.", coords: [49.1828662, -0.3681402] },
    { nom: "Tartines et Gourmandises", desc: "Coup de cœur d'Agathe : boulangerie, rue Froide.", coords: [49.1837062, -0.3656687] },
    { nom: "Pâtisserie Bibiche", desc: "Coup de cœur d'Agathe : pâtisserie et salon de thé, avenue Henry Chéron.", coords: [49.1738601, -0.3908533] },
    { nom: "Cave Rouge et Blanc", desc: "Caviste, rue aux Namps.", coords: [49.1840356, -0.3664232] },
    { nom: "La Crémerie des Baratineurs", desc: "Coup de cœur d'Agathe : fromagerie, rue Saint-Jean.", coords: [49.181263, -0.3583316] },
    { nom: "Poissonnerie Maison Geslain", desc: "Coup de cœur d'Agathe : poissonnerie à Biéville-Beuville (~15 min en voiture).", coords: [49.2291049, -0.3715266] },
  ],
  courses: [
    { nom: "Carrefour Express", desc: "La supérette la plus proche, rue de Bayeux.", coords: [49.1824752, -0.3760565] },
    { nom: "Casino Shop", desc: "Supérette, place Malherbe.", coords: [49.1820829, -0.3669639] },
    { nom: "E.Leclerc", desc: "Supermarché, rue Lanfranc.", coords: [49.1862961, -0.3810212] },
    { nom: "Marché Saint-Sauveur", desc: "Le marché du vendredi matin, place Saint-Sauveur : l'un des plus beaux de Caen.", coords: [49.182429, -0.369917] },
  ],
  tram: [
    { nom: "Arrêt de bus « Hôtel de Ville »", desc: "L'arrêt de bus le plus proche, devant l'Abbaye aux Hommes.", coords: [49.1811824, -0.3727734] },
    { nom: "Arrêt de tram « Place de la Mare »", desc: "L'arrêt de tram le plus proche (~10 min à pied).", coords: [49.187628, -0.3672767] },
    { nom: "Réseau Twisto (tram & bus)", desc: "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs." },
  ],
  sante: [
    { nom: "Pharmacie Danjou", desc: "La pharmacie la plus proche, place Malherbe. Pharmacie de garde : composez le 3237.", coords: [49.1819435, -0.3671331] },
    { nom: "Pharmacie Lafayette du Théâtre", desc: "Pharmacie, rue Paul Doumer.", coords: [49.1817725, -0.3650896] },
    { nom: "Clinique de la Miséricorde", desc: "Clinique, fossés Saint-Julien.", coords: [49.185343, -0.367257] },
  ],
  tabac: [
    { nom: "Tabac Presse de l'Abbaye", desc: "Tabac-presse, rue de Bayeux, à deux pas du logement.", coords: [49.182332, -0.3750791] },
  ],
};

/** Laveries proches (catégorie absente du livret de Caen, ajoutée ici). */
const LAVERIES_CAPONIERE: Lieu[] = [
  { nom: "Lavomatique Caponière", desc: "La laverie la plus proche, rue Caponière.", coords: [49.1815765, -0.3765192] },
  { nom: "Lavomatique Écuyère", desc: "Laverie automatique, rue Écuyère.", coords: [49.1820676, -0.3674522] },
];

/**
 * Catégories de Caen sans les adresses décrites « à côté du logement » de
 * Vaugueux 2 (elles n'ont pas de sens depuis la rue Caponière), avec les
 * catégories de proximité remplacées par NEARBY.
 */
const PRES_DU_VAUGUEUX = /du logement|juste à côté|tout près|à deux pas :/;
const descFr = (l: Lieu) => (typeof l.desc === "string" ? l.desc : l.desc.fr);
function categoriesCaen(nearby: Record<string, Lieu[]>, extra: CategorySection[]): CategorySection[] {
  return [
    ...caen.autourDeMoi.categories
      .map((c) =>
        nearby[c.key]
          ? { key: c.key, lieux: nearby[c.key] }
          : { key: c.key, lieux: c.lieux.filter((l) => !PRES_DU_VAUGUEUX.test(descFr(l))) },
      )
      .filter((c) => c.lieux.length > 0),
    ...extra,
  ];
}

/** Textes et infos partagés par les 4 logements du 46 rue Caponière. */
export const caponiere46 = {
  adresse: "46 Rue Caponière, 14000 Caen",
  ville: "Caen",
  itineraire: "https://maps.google.com/?q=46+Rue+Caponi%C3%A8re+14000+Caen",
  coords: [49.1813497, -0.3768572] as [number, number],
  /** Pas de photo du logement disponible : photo générique de Caen (château). */
  cover: "/logements/caen/cover.jpg",
  /** Wifi commun à Numéro 4, Numéro 7 et Duplex (Vert a sa propre box). */
  wifi: { reseau: "Livebox-700E", motDePasse: "BNB-CAPONIERE-46" },
  parking:
    "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Caponière, rue de l'Abbatiale, rue de Bayeux, place de l'Ancienne Boucherie et rue Guillaume le Conquérant.\nStationnement gratuit rue Neuve Bourg l'Abbé, rue de Bretagne et rue Caponière (à partir du bar-tabac).\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr",
  bagages:
    "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.",
  arriveeAnticipee: {
    texte:
      "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable. Contactez-nous pour la demander.",
  },
  poubelles:
    "Les poubelles se trouvent dans les bacs à l'extérieur, juste à côté du salon de coiffure « Henriette ». Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 4 place de l'Ancienne Boucherie",
  animaux:
    "Votre animal de compagnie est le bienvenu (un seul animal par séjour). Un supplément est appliqué pour son accueil.",
  reglement: {
    nonFumeur: true,
    animauxAcceptes: true,
    evenementsAutorises: false,
    horairesCalme:
      "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes.",
    texte:
      "Logement non-fumeur : merci de descendre dans la rue pour fumer. Les fêtes et les soirées sont strictement interdites. Merci de limiter le bruit, dans l'appartement comme dans les couloirs et les escaliers.",
  },
  /** Premières lignes de la checklist de départ (la dernière dépend du logement). */
  departDebut: [
    "Faire la vaisselle, la ranger et vider les poubelles",
    "Rendre l'appartement propre et rangé",
    "Fermer les fenêtres, éteindre les lumières et baisser ou éteindre les radiateurs",
    "Laisser les draps sur les lits (l'équipe de ménage s'en charge) ; vous pouvez laisser les serviettes utilisées dans la salle de bain",
    "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)",
  ],
  quartier: {
    aPied: [
      "FRAC Normandie (~2 min)",
      "Abbaye aux Hommes & hôtel de ville (~4 min)",
      "Rue Écuyère — bars & restaurants (~7 min)",
      "Place Saint-Sauveur — cafés & marché du vendredi (~7 min)",
      "Jardin des Plantes (~13 min)",
      "Château de Caen (~15 min)",
    ],
    note: "Vous êtes rue Caponière, dans le quartier de l'Abbaye aux Hommes, à l'ouest du centre historique. Boulangerie, supérette, laverie et petits restaurants sont dans la rue, et la place Saint-Sauveur, la rue Écuyère et le château se rejoignent facilement à pied.",
  },
  autourDeMoi: {
    categories: categoriesCaen(NEARBY_CAPONIERE, [{ key: "laverie", lieux: LAVERIES_CAPONIERE }]),
    coupDeCoeur:
      "Commencez par un café rue Caponière ou sur la place de l'Ancienne Boucherie, puis visitez l'Abbaye aux Hommes, à quelques minutes à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Koboon. Pour un verre : Nonna ou Âmbar.",
  },
  /** Accordéons « à savoir » identiques dans les 4 logements. */
  sections: {
    plaque: {
      titre: "🔥 Plaque de cuisson",
      contenu:
        "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas (ou la clé selon le modèle) pour la déverrouiller.",
    },
    cafe: {
      titre: "☕ Machine à café",
      contenu: "La machine à café est une Nespresso (capsules). Quelques capsules vous sont offertes à votre arrivée.",
    },
    vaisselle: {
      titre: "🍽️ Vaisselle",
      contenu:
        "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.",
    },
    menagePiece: {
      titre: "🧹 Ménage",
      contenu: "Un balai, une pelle et une balayette se trouvent dans le placard de la pièce de vie.",
    },
  },
  produitsAvecLessive:
    "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une capsule de lessive, du produit vaisselle et une éponge.",
  produitsSansLessive:
    "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, du produit vaisselle et une éponge.",
  /** Textes communs à Numéro 4 et Numéro 7 (studios avec serrure à code). */
  studio: {
    checkinCode:
      "Le code de la porte de l'immeuble et celui de la serrure de votre porte vous sont communiqués par message le jour de votre arrivée",
    etapePorche: "Passez sous le porche : l'entrée de l'immeuble se trouve sur votre gauche.",
    etapeSerrure:
      "Pour ouvrir votre porte, composez sur la serrure le code reçu par message. Pour la refermer, levez la poignée puis appuyez sur le bouton central de la serrure.",
    departSerrure:
      "En partant, verrouillez la porte : levez la poignée puis appuyez sur le bouton central de la serrure",
    decouverte: [
      "Pièce de vie avec lit double (queen size 160 × 200 cm)",
      "Cuisine entièrement équipée et bar pour les repas",
      "Salle de douche moderne avec WC",
    ],
    linge:
      "Les draps sont fournis pour le lit queen size (160 × 200 cm). Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.",
    tv: "Allumez la télévision avec la télécommande Samsung (bouton Power rouge, en haut à gauche). Avec le bouton central, sélectionnez l'application Orange TV pour accéder aux chaînes en direct, puis validez avec OK. Cette même télécommande permet de régler le volume et de changer de chaîne.",
    electromenager: [
      "Plaque de cuisson",
      "Micro-ondes",
      "Réfrigérateur",
      "Machine Nespresso",
      "Bouilloire",
      "Grille-pain",
      "Appareil à raclette",
      "TV",
    ],
    equipements: [
      "WiFi",
      "TV",
      "Lit double",
      "Cuisine équipée",
      "Plaque de cuisson",
      "Micro-ondes",
      "Réfrigérateur",
      "Machine Nespresso",
      "Bouilloire",
      "Grille-pain",
      "Appareil à raclette",
      "Salle de douche avec WC",
      "Chauffage",
      "Linge de lit & serviettes",
      "Animaux acceptés",
    ],
  },
};

const c = caponiere46;

/**
 * Logement « Numéro 4 » — studio au 1er étage (sans ascenseur) du 46 rue
 * Caponière, porte n° 4. Même immeuble que Numéro 7, Duplex et Vert.
 *
 * Annonces : Airbnb = annonce multi-logements (pas de numéro fiable pour ce
 * logement), Booking : pas de numéro connu. Pas de photos Airbnb : les annonces
 * multi-logements du tableau (1806683279231676717, 1806683392041677486,
 * 1806683375826498307, 1806683440611717546) renvoient une page « introuvable ».
 *
 * Refait d'après le livret StyQR « Numéro 4 » (export du 2026-11-16, voir le
 * cerveau Josie : raw/documents/livrets-styqr/Numero-4.md) : pièce de vie avec
 * lit double queen size, bar et cuisine équipée, salle de douche avec WC.
 * Arrivée 17h, départ 10h. Animaux acceptés (1 maximum, avec supplément).
 * Serrure à code sur la porte de l'appartement.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️ Le code de la porte de l'immeuble figurait en clair dans le livret
 * StyQR. Il n'est PAS repris ici : il est envoyé par message, avec celui de la
 * serrure.
 *
 * Couverture reprise de l'annonce Airbnb 38215581 (« Studio rénové haut de gamme », annonce « Appartements de François ») le 16/11/2026 (ancienne note : photo de couverture à fournir) (photo générique du château de Caen en
 * attendant).
 *
 * ⚠️ Vidéo « Télévision » hébergée chez StyQR : rapatriée dans le livret le 16/11/2026 (fichier MP4 dans public/logements/<id>/videos).
 *
 * ⚠️ À vérifier par Agathe :
 *   - Départ : StyQR dit à la fois « remettre les clés dans la boîte à code »
 *     (check-out) et « serrure à code sur la porte » (check-in). On a gardé la
 *     serrure à code (verrouillage avec la poignée + bouton central). Y a-t-il
 *     aussi des clés à rendre ?
 *   - Capacité : 2 voyageurs (un seul lit double) — à confirmer.
 *
 * Pour traduire un texte, voir data/i18n-styqr/numero4.ts (clé = texte FR exact).
 */
export const numero4: Logement = {
  id: "numero4",
  nom: "Numéro 4",
  adresse: c.adresse,
  ville: c.ville,
  itineraire: c.itineraire,
  coords: c.coords,
  cover: "/logements/numero4/cover.jpg",

  motAccueil:
    "Bienvenue au Numéro 4 ! Votre studio se trouve au 1er étage d'un immeuble de la rue Caponière, à deux pas de l'Abbaye aux Hommes et de la place Saint-Sauveur. Cafés, restaurants et commerces sont tout proches, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰",

  arrivee: {
    horaire: "Arrivée autonome à partir de 17h",
    video: "https://www.youtube.com/watch?v=51kJgr3Ih4k",
    checkinExpress: [
      "Le studio se trouve au 1er étage (sans ascenseur) du 46 rue Caponière, porte n° 4",
      c.studio.checkinCode,
      "Suivez la vidéo ci-dessous pour accéder à l'appartement",
    ],
    etapes: [
      { texte: "Rendez-vous au 46 rue Caponière." },
      { texte: c.studio.etapePorche },
      { texte: "Composez le code de la porte d'entrée reçu par message, puis ouvrez la porte." },
      { texte: "Montez au 1er étage, puis tournez à gauche : votre porte est la numéro 4." },
      { texte: c.studio.etapeSerrure },
    ],
    arriveeAnticipee: c.arriveeAnticipee,
    parking: c.parking,
    bagages: c.bagages,
    decouverte: {
      rdc: c.studio.decouverte,
      etage: [],
      exterieur: [],
    },
  },

  wifi: c.wifi,

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      { titre: "🎁 Produits d'accueil", contenu: c.produitsAvecLessive },
      { titre: "🛏️ Linge de maison", contenu: c.studio.linge },
      {
        titre: "📺 Télévision",
        contenu: c.studio.tv,
        video: "/logements/numero4/videos/tv.mp4",
        videoPortrait: true,
      },
      c.sections.cafe,
      c.sections.plaque,
      {
        titre: "🌡️ Chauffage",
        contenu:
          "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.",
      },
      {
        titre: "🧹 Ménage",
        contenu: "Un balai, une pelle et une balayette se trouvent dans le placard de la salle de bain.",
      },
      c.sections.vaisselle,
    ],
    electromenager: c.studio.electromenager,
    reglementInterieur: { capaciteMax: 2, ...c.reglement },
    poubelles: c.poubelles,
    animaux: c.animaux,
  },

  equipements: c.studio.equipements,

  menageEnSejour: caen.menageEnSejour,

  depart: {
    horaire: "Jusqu'à 10h",
    instructions: [...c.departDebut, c.studio.departSerrure],
    departTardif: caen.depart.departTardif,
  },

  quartier: c.quartier,
  autourDeMoi: c.autourDeMoi,
  numerosUtiles: caen.numerosUtiles,
};
