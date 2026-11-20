/**
 * Génère, pour chaque livret, le texte complet du message Hostaway « infos <logement> »
 * (lien universel du séjour). Usage : npx tsx scripts/messages-hostaway.ts > sortie.md
 */
import { logements } from "../data/logements";
import { HOSTAWAY } from "../data/hostaway";

const LIEN =
  "https://accueil.josie-conciergerie.fr/fr/sejour?r={{hostaway_reservation_id}}&c={{channel_reservation_id}}";

function heure(h: string | undefined): string {
  const m = /(\d{1,2})\s*h\s*(\d{2})?/i.exec(h ?? "");
  return m ? `${m[1]}h${m[2] ?? ""}` : "17h";
}

/** Ligne supplémentaire propre à un logement (jacuzzi). */
const JACUZZI: Record<string, string> = {
  cinema:
    "➡️ Le jacuzzi privatif est inclus dans votre séjour (d'avril à octobre) : réservez votre créneau au moins 24 h à l'avance depuis le livret, rubrique Infos pratiques > Jacuzzi privatif, bouton « Voir le calendrier et réserver un créneau ».",
  apto:
    "➡️ Le jacuzzi privatif est proposé en option (d'avril à octobre : 20 € le créneau de 4 h, le 3e créneau offert) : réservez votre créneau au moins 24 h à l'avance depuis le livret, rubrique Infos pratiques > Jacuzzi privatif, bouton « Voir le calendrier et réserver un créneau ».",
};

function message(l: (typeof logements)[number]): string {
  const v = l.arrivee.video;
  const youtube = v && /^https?:\/\/(www\.)?youtu/.test(v);
  const lignes: string[] = [
    "Afin de préparer au mieux votre arrivée,",
    "",
    `➡️ vous trouverez, via le lien ci-dessous, l’ensemble des informations utiles concernant le logement dans un livret numérique (modalités d’accès, équipements, consignes, recommandations, informations de départ) : ${LIEN}`,
    "Ce lien est personnel : gardez-le, il vous accompagne pendant tout le séjour.",
    "",
  ];
  if (youtube) {
    lignes.push(
      `➡️ Une vidéo explicative pour accéder au logement est également disponible ici : ${v!.replace("youtube.com/watch?v=", "youtube.com/watch?v=")}`,
      "",
    );
  } else if (v) {
    lignes.push("➡️ Une vidéo explicative pour accéder au logement est disponible dans le livret.", "");
  }
  lignes.push(
    `➡️ Le code d’accès vous sera communiqué le jour de votre arrivée (il s'affichera aussi directement dans le livret). L’entrée dans les lieux est possible à partir de ${heure(l.arrivee.horaire)}.`,
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
