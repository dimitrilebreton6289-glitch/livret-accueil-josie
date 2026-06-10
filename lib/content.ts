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

/** Distance à vol d'oiseau (en mètres) entre deux points [lat, lng]. */
export function haversineMeters(
  a: [number, number],
  b: [number, number],
): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Formate une distance en mètres : « 850 m » ou « 1,2 km ». */
export function formatDistance(meters: number): string {
  if (meters < 950) return `${Math.round(meters / 10) * 10} m`;
  return `${(meters / 1000).toFixed(1).replace(".", ",")} km`;
}
