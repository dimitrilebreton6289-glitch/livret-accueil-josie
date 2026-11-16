import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import RedirectionSejour from "@/components/RedirectionSejour";

/**
 * Lien universel envoyé par Hostaway à chaque voyageur :
 *   /fr/sejour?r=<id réservation Hostaway>&c=<n° de réservation de la plateforme>
 * La page retrouve le logement de la réservation et ouvre son livret.
 */
export default async function SejourPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <Suspense>
      <RedirectionSejour />
    </Suspense>
  );
}
