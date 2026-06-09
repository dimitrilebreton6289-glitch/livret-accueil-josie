import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Next.js 16 : le « middleware » s'appelle désormais « proxy ».
 * Il redirige « / » vers « /fr » et gère la langue dans l'URL.
 */
export default createMiddleware(routing);

export const config = {
  // S'applique à toutes les routes sauf les fichiers internes / statiques.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
