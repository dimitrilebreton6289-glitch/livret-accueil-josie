import type { Tx } from "@/data/types";

/**
 * Choisit la bonne langue d'un texte traduisible.
 * - si c'est une chaîne → renvoyée telle quelle (français par défaut)
 * - si c'est un objet { fr, en, ... } → renvoie la langue demandée,
 *   sinon retombe sur le français.
 */
export function pick(value: Tx, locale: string): string {
  if (typeof value === "string") return value;
  return value[locale as keyof typeof value] ?? value.fr;
}

/** Lien d'itinéraire Google Maps vers une requête texte (nom de lieu, adresse). */
export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}

/** Lien d'itinéraire vers des coordonnées [lat, lng]. */
export function directionsUrl(coords: [number, number]): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
}
