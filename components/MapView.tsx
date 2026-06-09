"use client";

import dynamic from "next/dynamic";
import type { MapMarker } from "./Map";

// Leaflet a besoin de `window` : on désactive le rendu côté serveur.
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-cream-deep text-sm text-muted">
      Chargement de la carte…
    </div>
  ),
});

/** Conteneur arrondi pour la carte (hauteur fixe, coins arrondis). */
export default function MapView(props: {
  center: [number, number];
  homeLabel: string;
  itinerary: string;
  markers: MapMarker[];
}) {
  return (
    <div className="h-[60vh] min-h-80 overflow-hidden rounded-card shadow-[0_2px_12px_rgba(58,46,41,0.06)]">
      <Map {...props} />
    </div>
  );
}
