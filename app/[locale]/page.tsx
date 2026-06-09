import { setRequestLocale } from "next-intl/server";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { logements } from "@/data/logements";
import JosieAvatar from "@/components/JosieAvatar";

/**
 * Page d'accueil de la racine (/fr). Liste les logements disponibles.
 * En usage réel, le QR code pointe directement vers /<langue>/<logement>.
 */
export default async function Index({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto flex min-h-dvh max-w-[430px] flex-col items-center px-5 py-12">
      <JosieAvatar size={88} />
      <h1 className="mt-4 font-display text-2xl font-semibold text-terracotta-dark">
        Josie Conciergerie
      </h1>
      <p className="mb-8 mt-1 text-center text-muted">Livret d&apos;accueil</p>

      <ul className="w-full space-y-3">
        {logements.map((l) => (
          <li key={l.id}>
            <Link
              href={`/${l.id}`}
              className="flex items-center gap-4 rounded-card bg-surface p-4 shadow-[0_2px_12px_rgba(58,46,41,0.06)] transition-soft active:scale-[0.99]"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark">
                <MapPin size={24} />
              </span>
              <span>
                <span className="block font-bold text-ink">{l.nom}</span>
                <span className="block text-sm text-muted">{l.adresse}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
