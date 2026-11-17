import type { CategoryKey, Lieu } from "@/data/types";
import extra from "@/data/lieux-extra.json";

/**
 * Infos complémentaires des adresses « Autour de moi » (horaires, site,
 * téléphone, adresse, photo libre de droits), relevées sur OpenStreetMap et
 * Wikimedia Commons. Clé = « nom@lat,lon » (coordonnées à 4 décimales).
 */
export type LieuExtra = {
  osm?: string;
  horaires?: string;
  site?: string;
  tel?: string;
  adresse?: string;
  photo?: string;
  photoCredit?: string;
};

const EXTRA = extra as Record<string, LieuExtra>;

export function cleLieu(l: Lieu): string | null {
  if (!l.coords) return null;
  const nom = typeof l.nom === "string" ? l.nom : String(l.nom);
  return `${nom}@${l.coords[0].toFixed(4)},${l.coords[1].toFixed(4)}`;
}

export function extraLieu(l: Lieu): LieuExtra {
  const k = cleLieu(l);
  return (k && EXTRA[k]) || {};
}

/** Minutes à pied (≈ 4,5 km/h, distance à vol d'oiseau majorée de 20 %). */
export function minutesAPied(metres: number): number {
  return Math.max(1, Math.round((metres * 1.2) / 75));
}

/** Catégories « à l'abri » (idées quand il pleut). */
export const CATS_ABRI: CategoryKey[] = ["culture", "cinema", "loisirs"];
