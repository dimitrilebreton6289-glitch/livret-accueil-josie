import { NextResponse } from "next/server";
import { getLogement } from "@/data/logements";

/**
 * Manifeste « application » d'un livret : permet d'ajouter le livret de CE
 * logement à l'écran d'accueil du téléphone (il s'ouvre alors en plein écran).
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string; logement: string }> },
) {
  const { locale, logement: id } = await params;
  const logement = getLogement(id);
  if (!logement) return NextResponse.json({}, { status: 404 });
  return NextResponse.json(
    {
      name: `${logement.nom} · Josie`,
      short_name: logement.nom,
      start_url: `/${locale}/${logement.id}`,
      scope: `/${locale}/${logement.id}`,
      display: "standalone",
      background_color: "#fbf6ef",
      theme_color: "#d75c45",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    { headers: { "Content-Type": "application/manifest+json" } },
  );
}
