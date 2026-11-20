import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLogement } from "@/data/logements";
import {
  pick,
  pickList,
  mapsUrl,
} from "@/lib/content";
import type { Lieu } from "@/data/types";
import { categoriesVM } from "@/lib/lieux-vm";
import Header from "@/components/Header";
import AutourView, {
  type CategoryVM,
} from "@/components/AutourView";
import type { MapMarker } from "@/components/Map";
import { titreCourt } from "@/lib/titre-logement";

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

  const placeUrl = (l: Lieu) =>
    l.itineraire ?? mapsUrl(`${l.nom}, ${logement.ville}`);

  // Catégories dans l'ordre des données (on n'affiche que celles qui ont des lieux),
  // avec horaires, photo, temps de marche (voir lib/lieux-vm.ts).
  const categories: CategoryVM[] = categoriesVM(logement, locale);

  // Marqueurs : tous les lieux géolocalisés.
  const allLieux: Lieu[] = a.categories.flatMap((c) => c.lieux);
  const markers: MapMarker[] = allLieux
    .filter((l) => l.coords)
    .map((l) => ({
      coords: l.coords!,
      nom: pick(l.nom, locale),
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
            homeLabel={titreCourt(locale)}
            itinerary={logement.itineraire}
            markers={markers}
            categories={categories}
            coupDeCoeur={pick(a.coupDeCoeur, locale)}
            aPied={pickList(logement.quartier.aPied, locale)}
            aPiedNote={pick(logement.quartier.note, locale)}
          />
        </Suspense>
      </div>
    </>
  );
}
