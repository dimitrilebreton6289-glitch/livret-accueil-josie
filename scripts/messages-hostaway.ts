/**
 * Génère, pour chaque livret, le texte complet du message Hostaway « infos <logement> »
 * (lien universel du séjour). Usage : npx tsx scripts/messages-hostaway.ts > sortie.md
 */
import { logements } from "../data/logements";
import { HOSTAWAY } from "../data/hostaway";

const LIEN =
  "https://accueil.josie-conciergerie.fr/fr/sejour?r={{hostaway_reservation_id}}&c={{channel_reservation_id}}";

type Horaire = string | { fr: string } | undefined;
function texteHoraire(h: Horaire): string {
  return typeof h === "string" ? h : (h?.fr ?? "");
}
function heure(h: Horaire): string {
  const m = /(\d{1,2})\s*h\s*(\d{2})?/i.exec(texteHoraire(h));
  if (!m) throw new Error("Horaire d'arrivée illisible : " + JSON.stringify(h));
  return `${m[1]}h${m[2] ?? ""}`;
}
/** « jusqu'à 22h » = heure limite d'arrivée, pas heure d'ouverture. */
const DEBUT_ARRIVEE: Record<string, string> = { saintjean: "17h" };
function phraseEntree(h: Horaire, id: string): string {
  return /jusqu/i.test(texteHoraire(h))
    ? DEBUT_ARRIVEE[id]
      ? `L’arrivée autonome est possible de ${DEBUT_ARRIVEE[id]} à ${heure(h)}.`
      : `L’arrivée autonome est possible jusqu’à ${heure(h)}.`
    : `L’entrée dans les lieux est possible à partir de ${heure(h)}.`;
}

/** Ligne supplémentaire propre à un logement (jacuzzi). */
const LIGNE_JACUZZI =
  "➡️ Votre logement donne accès à un jacuzzi privatif, partagé avec le logement voisin. Réservez votre créneau (matin, après-midi ou soir) au moins 24 h à l'avance ici :\nhttps://equipe.josie-conciergerie.fr/jacuzzi/{{hostaway_reservation_id}}?c={{channel_reservation_id}}";
const JACUZZI: Record<string, string> = { cinema: LIGNE_JACUZZI, apto: LIGNE_JACUZZI };

/** Logements dont la vidéo d'arrivée du livret ne doit pas être annoncée dans le message. */
const SANS_VIDEO = new Set(["lappart"]);
/** Vidéo YouTube d'accès à annoncer dans le message quand elle n'est pas dans arrivee.video. */
const VIDEO_MESSAGE: Record<string, string> = {
  vaugueux1: "https://youtube.com/shorts/u6rL3qjGdMk",
};

function message(l: (typeof logements)[number]): string {
  const v = SANS_VIDEO.has(l.id) ? undefined : (VIDEO_MESSAGE[l.id] ?? l.arrivee.video);
  const youtube = v && /^https?:\/\/(www\.)?youtu/.test(v);
  const lignes: string[] = [
    "Afin de préparer au mieux votre arrivée,",
    "",
    `➡️ vous trouverez, via le lien ci-dessous, l’ensemble des informations utiles concernant le logement dans un livret numérique (modalités d’accès, équipements, consignes, recommandations, informations de départ) : ${LIEN}`,
    "Ce lien est personnel : gardez-le, il vous accompagne pendant tout le séjour.",
    "",
  ];
  if (SANS_VIDEO.has(l.id)) {
    lignes.push("➡️ Les étapes pour accéder au logement sont détaillées dans le livret.", "");
  } else if (youtube) {
    lignes.push(
      `➡️ Une vidéo explicative pour accéder au logement est également disponible ici : ${v!.replace("youtube.com/watch?v=", "youtube.com/watch?v=")}`,
      "",
    );
  } else if (v) {
    lignes.push("➡️ Les étapes pour accéder au logement sont détaillées dans le livret.", "");
  }
  lignes.push(
    `➡️ Le code d’accès vous sera communiqué le jour de votre arrivée (il s'affichera aussi directement dans le livret). ${phraseEntree(l.arrivee.horaire, l.id)}`,
    "",
    "➡️ Si vous souhaitez arriver plus tôt ou partir plus tard que l'horaire habituel, n'hésitez pas à nous le demander à l'avance, cela peut être possible selon les disponibilités.",
    "",
    ...(JACUZZI[l.id] ? [JACUZZI[l.id], ""] : []),
    "➡️ Le jour de votre départ, une petite check-list est proposée dans le livret : appuyez sur « Je pars » pour prévenir directement notre équipe ménage.",
    "",
    "Bien à vous,",
    "Agathe",
  );
  return lignes.join("\n");
}

const sortie: string[] = [];
const tri = [...logements].sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
for (const l of tri) {
  const ids = HOSTAWAY[l.id] ?? [];
  sortie.push(`## ${l.nom}\n*Message Hostaway : « infos ${l.nom} » — annonce(s) Hostaway : ${ids.join(", ") || "à vérifier"}*\n\n\`\`\`\n${message(l)}\n\`\`\`\n`);
}
console.log(sortie.join("\n"));
