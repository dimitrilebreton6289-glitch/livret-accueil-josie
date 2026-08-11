import { logements } from "../data/logements";
import { CONTENT } from "../data/i18n-content";
import { writeFileSync } from "node:fs";

const SKIP_KEYS = new Set([
  "id", "ville", "cover", "coverCredit", "itineraire", "adresse",
  "reseau", "motDePasse", "tel", "key", "heure", "url",
  "samu", "police", "pompiers", "europeen", "photo", "video",
]);

// Noms propres (logements, commerces, lieux, personne) : pas de traduction.
const SKIP_NAMES = new Set([
  "Houlgate 1", "Houlgate 2", "Houlgate 3", "Houlgate 4",
  "Le Royalty", "L'Authentic", "Le Patio", "Le Jardin du Plaza",
  "La Maison du Coquillage", "Les Passantes", "Aux Bains Fleuris",
  "La Maison Florent", "La Gourmandine", "Carrefour City", "Pharmacie des Bains",
  "Plage de Houlgate", "Falaises des Vaches Noires", "Digue-promenade",
  "Casino de Houlgate", "Cabourg", "Deauville",
  "Dives-sur-Mer — Village Guillaume-le-Conquérant", "Agathe — Josie Conciergerie",
]);

const targets = logements.filter(
  (l) => ["houlgate-1", "houlgate-2", "houlgate-3", "houlgate-4"].includes(l.id),
);
const found = new Set<string>();

function walk(v: unknown, key?: string): void {
  if (v == null) return;
  if (typeof v === "string") {
    if (key && SKIP_KEYS.has(key)) return;
    if (/^https?:\/\//.test(v)) return;
    if (!/[a-zA-ZÀ-ÿ]/.test(v)) return;
    if (/^\+?\d[\d\s]*$/.test(v)) return;
    found.add(v);
    return;
  }
  if (Array.isArray(v)) { v.forEach((x) => walk(x, key)); return; }
  if (typeof v === "object") {
    if ("fr" in (v as Record<string, unknown>)) return;
    for (const k of Object.keys(v as Record<string, unknown>)) {
      walk((v as Record<string, unknown>)[k], k);
    }
  }
}
for (const l of targets) walk(l);

const toTranslate = [...found].filter((s) => !CONTENT[s] && !SKIP_NAMES.has(s));
writeFileSync(
  process.env.OUT_JSON || "/tmp/to-translate.json",
  JSON.stringify(toTranslate, null, 2),
);
console.log("À traduire : " + toTranslate.length);
