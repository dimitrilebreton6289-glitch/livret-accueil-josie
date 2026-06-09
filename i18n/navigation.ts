import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Liens et navigation conscients de la langue.
 * Utilisez ce <Link> partout : il conserve la locale dans l'URL.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
