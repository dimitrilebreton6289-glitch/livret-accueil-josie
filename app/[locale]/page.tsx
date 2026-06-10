import { redirect } from "@/i18n/navigation";
import { logements } from "@/data/logements";

/**
 * Racine (/fr) : redirige directement vers le livret du premier logement,
 * sans passer par un écran de sélection (un seul logement disponible).
 * En usage réel, le QR code peut pointer vers /<langue>/<logement>.
 */
export default async function Index({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect({ href: `/${logements[0].id}`, locale });
}
