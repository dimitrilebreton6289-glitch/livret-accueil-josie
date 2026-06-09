import type messages from "./messages/fr.json";

// Donne l'autocomplétion et la vérification de type sur les clés de traduction.
declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
  }
}
