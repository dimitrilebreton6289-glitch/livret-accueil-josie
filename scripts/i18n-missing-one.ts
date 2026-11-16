/**
 * Liste les textes d'UN logement qui n'ont pas encore de traduction.
 * Usage : npx tsx scripts/i18n-missing-one.ts <id>
 * Lit data/logements/<id>.ts et data/i18n-styqr/<id>.ts (s'il existe).
 */
import { BASE_CONTENT } from "../data/i18n-content";
import { existsSync } from "node:fs";
import path from "node:path";

const SKIP_KEYS = new Set([
  "id", "ville", "cover", "coverCredit", "itineraire", "adresse",
  "reseau", "motDePasse", "tel", "key", "heure", "url",
  "samu", "police", "pompiers", "europeen", "photo", "photos", "video", "nom",
]);

async function main() {
  const id = process.argv[2];
  if (!id) throw new Error("usage: npx tsx scripts/i18n-missing-one.ts <id>");
  const mod = await import(`../data/logements/${id}`);
  const logement = Object.values(mod).find(
    (v: any) => v && typeof v === "object" && v.id === id,
  );
  if (!logement) throw new Error(`aucun logement d'id ${id} dans data/logements/${id}.ts`);
  let own: Record<string, any> = {};
  const trFile = path.join(__dirname, "..", "data", "i18n-styqr", `${id}.ts`);
  if (existsSync(trFile)) {
    const m = await import(`../data/i18n-styqr/${id}`);
    own = (Object.values(m)[0] as Record<string, any>) ?? {};
  }
  const dict = { ...own, ...BASE_CONTENT } as Record<string, any>;
  const found = new Set<string>();
  const walk = (v: unknown, key?: string): void => {
    if (v == null) return;
    if (typeof v === "string") {
      if (key && SKIP_KEYS.has(key)) return;
      if (/^https?:\/\//.test(v) || v.startsWith("/")) return;
      if (!/[a-zA-ZÀ-ÿ]/.test(v)) return;
      found.add(v);
      return;
    }
    if (Array.isArray(v)) return v.forEach((x) => walk(x, key));
    if (typeof v === "object") {
      if ("fr" in (v as object)) return;
      for (const [k, x] of Object.entries(v as object)) walk(x, k);
    }
  };
  walk(logement);
  const missing = [...found].filter((s) => {
    const t = dict[s];
    return !t || !t.en || !t.de || !t.es || !t.it;
  });
  console.log(`${id} : ${found.size} textes, ${missing.length} sans traduction complète`);
  for (const s of missing) console.log("- " + JSON.stringify(s));
}
main();
