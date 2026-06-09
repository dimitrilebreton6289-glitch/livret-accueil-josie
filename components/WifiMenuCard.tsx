"use client";

import { Wifi } from "lucide-react";
import { useTranslations } from "next-intl";
import MenuCard from "./MenuCard";
import { openWifiSheet } from "./WifiSheet";

/** Carte « WiFi » de la page d'accueil : ouvre le volet réseau + mot de passe. */
export default function WifiMenuCard() {
  const t = useTranslations("Nav");
  return (
    <MenuCard
      icon={Wifi}
      label={t("sections.wifi")}
      desc={t("descriptions.wifi")}
      onClick={openWifiSheet}
    />
  );
}
