import { defineRouting } from "next-intl/routing";

/**
 * Langues disponibles dans le livret.
 * Pour en ajouter une : ajoutez son code ici ET créez messages/<code>.json.
 */
export const routing = defineRouting({
  locales: ["fr", "en", "de", "es", "it"],
  defaultLocale: "fr",
});
