"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export interface MapMarker {
  coords: [number, number];
  nom: string;
  desc?: string;
  itineraire: string;
}

/** Marqueur SVG en forme de goutte, aux couleurs de la marque. */
function pinIcon(color: string, dot = "#ffffff") {
  return L.divIcon({
    className: "",
    html: `<svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.2 0 0 7 0 15.7 0 27 16 40 16 40s16-13 16-24.3C32 7 24.8 0 16 0z" fill="${color}"/>
      <circle cx="16" cy="15.5" r="6" fill="${dot}"/>
    </svg>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -36],
  });
}

const PLACE_ICON = pinIcon("#D75C45");
const HOME_ICON = pinIcon("#B8472F", "#F3D9CF");

/** Carte OpenStreetMap centrée sur le logement, avec marqueurs des lieux. */
export default function Map({
  center,
  homeLabel,
  itinerary,
  markers,
}: {
  center: [number, number];
  homeLabel: string;
  itinerary: string;
  markers: MapMarker[];
}) {
  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: "#F6ECE0" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={center} icon={HOME_ICON}>
        <Popup>
          <strong>{homeLabel}</strong>
          <br />
          <a href={itinerary} target="_blank" rel="noopener noreferrer">
            ➜ Itinéraire
          </a>
        </Popup>
      </Marker>

      {markers.map((m) => (
        <Marker key={m.nom} position={m.coords} icon={PLACE_ICON}>
          <Popup>
            <strong>{m.nom}</strong>
            {m.desc && (
              <>
                <br />
                {m.desc}
              </>
            )}
            <br />
            <a href={m.itineraire} target="_blank" rel="noopener noreferrer">
              ➜ Itinéraire
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
