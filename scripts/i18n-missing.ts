import { logements } from "../data/logements";
import { CONTENT } from "../data/i18n-content";

// Champs dont la valeur n'est PAS traduite via le dictionnaire CONTENT.
const SKIP_KEYS = new Set([
  "id", "ville", "cover", "coverCredit", "itineraire", "adresse",
  "reseau", "motDePasse", "tel", "key", "heure", "url",
  "samu", "police", "pompiers", "europeen", "photo", "video",
]);

const targets = logements.filter(
  (l) =>
    l.id === "fleur" ||
    l.id === "mer" ||
    l.id === "boheme" ||
    l.id === "saintjean",
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
  if (Array.isArray(v)) {
    v.forEach((x) => walk(x, key));
    return;
  }
  if (typeof v === "object") {
    if ("fr" in (v as Record<string, unknown>)) return; // objet Tx déjà traduit
    for (const k of Object.keys(v as Record<string, unknown>)) {
      walk((v as Record<string, unknown>)[k], k);
    }
  }
}

for (const l of targets) walk(l);

const absent: string[] = [];
const partial: string[] = [];
for (const s of found) {
  const tr = CONTENT[s];
  if (!tr) absent.push(s);
  else if (!tr.en || !tr.de || !tr.es || !tr.it) partial.push(s);
}

console.log("=== DÉJÀ PRÉSENTES MAIS INCOMPLÈTES (" + partial.length + ") — à éditer ===");
for (const m of partial) console.log("• " + JSON.stringify(m));
console.log("\n=== TOTALEMENT ABSENTES (" + absent.length + ") — à ajouter ===");
for (const m of absent) console.log("• " + JSON.stringify(m));
console.log("\n(total traduisible : " + found.size + ")");
