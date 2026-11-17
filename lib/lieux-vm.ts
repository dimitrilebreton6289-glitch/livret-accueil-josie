import type { CategoryKey, Lieu, Logement } from "@/data/types";
import type { PlaceVM } from "@/components/PlaceCard";
import { formatDistance, haversineMeters, mapsUrl, pick } from "@/lib/content";
import { CATS_ABRI, extraLieu, minutesAPied } from "@/lib/lieux";

/** Adresses d'un logement, prêtes à afficher, par catégorie. */
export function categoriesVM(logement: Logement, locale: string): { key: CategoryKey; places: PlaceVM[] }[] {
  // Itinéraire d'un lieu : lien explicite, sinon recherche Google Maps par nom + ville
  // (plus fiable que des coordonnées approximatives pour un commerce).
  const placeUrl = (l: Lieu) => l.itineraire ?? mapsUrl(`${l.nom}, ${logement.ville}`);
  return logement.autourDeMoi.categories
    .map((c) => ({
      key: c.key,
      places: c.lieux.map((l): PlaceVM => {
        const x = extraLieu(l);
        const m = l.coords ? haversineMeters(logement.coords, l.coords) : undefined;
        const coeur = /coup de c(œ|oe)ur/i.test(pick(l.desc, "fr"));
        // « Coup de cœur d'Agathe : burgers… » → le cœur est déjà affiché à part.
        let desc = pick(l.desc, locale);
        if (coeur) {
          const court = desc.replace(/^[^:,]{0,45}Agathe[^:,]{0,25}[:,]\s*/i, "");
          if (court.length > 2) desc = court.charAt(0).toUpperCase() + court.slice(1);
        }
        return {
          nom: pick(l.nom, locale),
          desc,
          itineraire: placeUrl(l),
          distance: m !== undefined ? `~${formatDistance(m)}` : undefined,
          minutes: m !== undefined ? minutesAPied(m) : undefined,
          horaires: x.horaires,
          site: x.site,
          tel: x.tel,
          adresse: x.adresse,
          photo: x.photo,
          photoCredit: x.photoCredit,
          coupDeCoeur: coeur,
          abri: CATS_ABRI.includes(c.key),
        };
      }),
    }))
    .filter((c) => c.places.length > 0);
}

/** Catégories « pratiques » qu'on ne met pas en avant sur l'accueil. */
const PRATIQUES: CategoryKey[] = [
  "transports", "tram", "sante", "laverie", "stations", "tabac", "hopital", "medecin", "police", "courses",
];

/**
 * Sélection « À découvrir près d'ici » : coups de cœur d'Agathe d'abord, puis
 * les adresses avec photo, puis les plus proches (12 au maximum).
 */
export function aDecouvrir(logement: Logement, locale: string, max = 12): PlaceVM[] {
  const vus = new Set<string>();
  const toutes = categoriesVM(logement, locale)
    .filter((c) => !PRATIQUES.includes(c.key))
    .flatMap((c) => c.places)
    .filter((p) => {
      if (vus.has(p.nom)) return false;
      vus.add(p.nom);
      return p.coupDeCoeur || (p.minutes ?? 999) <= 40;
    });
  const score = (p: PlaceVM) => (p.coupDeCoeur ? 0 : 1000) + (p.photo ? 0 : 500) + (p.minutes ?? 999);
  return toutes.sort((a, b) => score(a) - score(b)).slice(0, max);
}
