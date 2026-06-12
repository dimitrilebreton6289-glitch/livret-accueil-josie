/**
 * Modèle de données d'un logement.
 *
 * Les champs de TEXTE utilisent le type `Tx` : vous pouvez écrire soit une
 * simple chaîne en français, soit un objet par langue
 * `{ fr: "...", en: "...", de: "..." }`. Le français est toujours obligatoire ;
 * les autres langues sont optionnelles (on retombe sur le français si absent).
 */

export const LOCALES = ["fr", "en", "de", "es", "it"] as const;
export type Locale = (typeof LOCALES)[number];

/** Texte traduisible : chaîne FR simple, ou objet { fr, en, ... }. */
export type Tx = string | ({ fr: string } & Partial<Record<Locale, string>>);

/** Un lieu recommandé « autour de moi ». */
export interface Lieu {
  nom: string;
  desc: Tx;
  /** Coordonnées [latitude, longitude] pour le marqueur sur la carte. */
  coords?: [number, number];
  /** Lien d'itinéraire (sinon généré depuis le nom + la ville). */
  itineraire?: string;
}

/**
 * Catégories disponibles pour « Autour de moi ».
 * Pour en ajouter une : ajoutez sa clé ici, son libellé dans messages/*.json
 * (Autour.categories.*) et son icône dans components/AutourView.tsx.
 */
export type CategoryKey =
  | "culture"
  | "plages"
  | "nature"
  | "restaurants"
  | "restorapide"
  | "bars"
  | "cinema"
  | "loisirs"
  | "commerces"
  | "transports"
  | "courses"
  | "bouche"
  | "sante"
  | "laverie"
  | "stations"
  | "tabac"
  | "nocturne"
  | "tram"
  | "hopital"
  | "medecin"
  | "police";

/** Une catégorie et ses lieux. */
export interface CategorySection {
  key: CategoryKey;
  lieux: Lieu[];
}

export interface ReglementInterieur {
  capaciteMax: number;
  nonFumeur: boolean;
  animauxAcceptes: boolean;
  evenementsAutorises: boolean;
  /** Optionnel : si absent, la ligne « tournages » n'est pas affichée. */
  tournagesAutorises?: boolean;
  horairesCalme: Tx;
  texte: Tx;
}

export interface Logement {
  id: string;
  nom: string;
  adresse: string;
  /** Ville, utilisée pour les recherches d'itinéraire des lieux. */
  ville: string;
  /** Lien Google Maps vers le logement (bouton « Me rendre au logement »). */
  itineraire: string;
  /** Coordonnées du logement [latitude, longitude] (centre de la carte). */
  coords: [number, number];
  /** Chemin de la photo de couverture (dans /public). */
  cover: string;
  /** Crédit / licence de la photo de couverture (affiché discrètement). Optionnel. */
  coverCredit?: string;

  motAccueil: Tx;

  /** Vidéos (visite, mode d'emploi…). URL YouTube, Vimeo ou fichier /public. */
  videos?: { titre: Tx; url: string }[];

  arrivee: {
    horaire: Tx;
    /** Points d'accès, en liste à puces. */
    checkinExpress: string[];
    /** Code de la boîte à clé (affiché en évidence). Optionnel. */
    codeBoite?: string;
    /** Guide d'arrivée illustré : étapes numérotées avec photo optionnelle. */
    etapes?: { texte: string; photo?: string }[];
    /** Vidéo d'accès au logement (URL YouTube/Vimeo/MP4), affichée dans le check-in. */
    video?: string;
    parking: Tx;
    bagages: Tx;
    /** Contenu de chaque espace, en listes courtes. */
    decouverte: { rdc: string[]; etage: string[]; exterieur: string[] };
  };

  wifi: { reseau: string; motDePasse: string };

  pratique: {
    /** Points « à savoir », en liste à puces. */
    aSavoir: string[];
    /**
     * Variante « à savoir » en sous-parties dépliables (accordéon) : chaque
     * entrée a un titre cliquable et son contenu. Si renseignée, elle remplace
     * la liste à puces `aSavoir` sur la page Infos pratiques.
     */
    aSavoirSections?: { titre: Tx; contenu: Tx }[];
    /** Électroménager, en étiquettes. */
    electromenager: string[];
    reglementInterieur: ReglementInterieur;
    poubelles: Tx;
    animaux: Tx;
  };

  equipements: string[];
  menageEnSejour: Tx;

  depart: {
    horaire: Tx;
    instructions: Tx[];
    /**
     * Départ tardif optionnel : un texte d'explication + des options horaires
     * avec leur lien de paiement (ex. Stripe). Affiché en bloc cliquable sur la
     * page Départ. Si absent, la section n'apparaît pas.
     */
    departTardif?: {
      texte: Tx;
      options: { heure: string; url: string }[];
    };
  };

  quartier: {
    aPied: string[];
    note: Tx;
  };

  autourDeMoi: {
    /** Catégories affichées dans l'ordre du tableau. */
    categories: CategorySection[];
    coupDeCoeur: Tx;
  };

  numerosUtiles: {
    contact: { nom: string; tel: string };
    note: Tx;
    urgences: { samu: string; police: string; pompiers: string; europeen: string };
  };
}
