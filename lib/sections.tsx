import {
  LogIn,
  LogOut,
  Info,
  Wifi,
  Compass,
  Phone,
  type LucideIcon,
} from "lucide-react";

/**
 * Sections du livret, utilisées par le menu latéral et la page d'accueil.
 * `key` correspond à une clé de traduction dans messages/*.json (nav.*).
 * `href` est le chemin RELATIF au logement ("" = page d'accueil).
 */
export interface Section {
  key: "arrivee" | "depart" | "pratique" | "wifi" | "autour" | "numeros";
  href: string;
  icon: LucideIcon;
  /** WiFi n'a pas de page : il ouvre un volet sur la page d'accueil. */
  isSheet?: boolean;
}

export const SECTIONS: Section[] = [
  { key: "arrivee", href: "/arrivee", icon: LogIn },
  { key: "depart", href: "/depart", icon: LogOut },
  { key: "pratique", href: "/pratique", icon: Info },
  { key: "wifi", href: "", icon: Wifi, isSheet: true },
  { key: "autour", href: "/autour", icon: Compass },
  { key: "numeros", href: "/numeros", icon: Phone },
];
