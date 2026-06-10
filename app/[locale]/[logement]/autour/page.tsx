import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLogement } from "@/data/logements";
import { pick, mapsUrl, haversineMeters, formatDistance } from "@/lib/content";
import type { Lieu } from "@/data/types";
import Header from "@/components/Header";
import AutourView, {
  type CategoryVM,
  type PlaceVM,
} from "@/components/AutourView";
import type { MapMarker } from "@/components/Map";

export default async function AutourPage({
  params,
}: {
  params: Promise<{ locale: string; logement: string }>;
}) {
  const { locale, logement: id } = await params;
  setRequestLocale(locale);

  const logement = getLogement(id);
  if (!logement) notFound();

  const t = await getTranslations("Autour");
  const a = logement.autourDeMoi;
  const base = `/${logement.id}`;

  // Itinéraire d'un lieu : lien explicite, sinon recherche Google Maps par nom + ville
  // (plus fiable que des coordonnées approximatives pour un commerce).
  const placeUrl = (l: Lieu) =>
    l.itineraire ?? mapsUrl(`${l.nom}, ${logement.ville}`);

  const toVM = (lieux: Lieu[]): PlaceVM[] =>
    lieux.map((l) => ({
      nom: l.nom,
      desc: pick(l.desc, locale),
      itineraire: placeUrl(l),
      distance: l.coords
        ? `~${formatDistance(haversineMeters(logement.coords, l.coords))}`
        : undefined,
    }));

  // Catégories dans l'ordre des données (on n'affiche que celles qui ont des lieux).
  const categories: CategoryVM[] = a.categories
    .map((c) => ({ key: c.key, places: toVM(c.lieux) }))
    .filter((c) => c.places.length > 0);

  // Marqueurs : tous les lieux géolocalisés.
  const allLieux: Lieu[] = a.categories.flatMap((c) => c.lieux);
  const markers: MapMarker[] = allLieux
    .filter((l) => l.coords)
    .map((l) => ({
      coords: l.coords!,
      nom: l.nom,
      desc: pick(l.desc, locale),
      itineraire: placeUrl(l),
    }));

  return (
    <>
      <Header variant="sub" base={base} title={t("title")} />
      <div className="animate-fade-rise">
        <Suspense>
          <AutourView
            center={logement.coords}
            homeLabel={logement.nom}
            itinerary={logement.itineraire}
            markers={markers}
            categories={categories}
            coupDeCoeur={pick(a.coupDeCoeur, locale)}
            aPied={logement.quartier.aPied}
            aPiedNote={pick(logement.quartier.note, locale)}
          />
        </Suspense>
      </div>
    </>
  );
}
