/**
 * Correspondance livret → annonce(s) Hostaway (identifiant « listing »).
 * Sert au livret connecté : un lien de séjour n'est accepté que sur le livret
 * de son logement. Source : table `logements` de l'App Josie équipes
 * (colonne hostaway_listing_id), relevée le 16/11/2026.
 */
export const HOSTAWAY: Record<string, string[]> = {
  "10abc": ["438682", "438693", "438698"],
  maison111: ["437324"],
  studio29: ["438724"],
  adn: ["621983"],
  bayeuxcave: ["523651"],
  desmoueux: ["438697"],
  boheme: ["438696"],
  boucherie1: ["455022"],
  boucherie2: ["455020"],
  boucherie3: ["455023"],
  carlito: ["438722"],
  chateau: ["438857"],
  chezgeo: ["438699"],
  chezjohan: ["438704"],
  malo: ["584575"],
  cheztheo: ["438679"],
  cinema: ["618972"],
  demolombe: ["438858"],
  duplex: ["438694"],
  fleur: ["438687"],
  gemare: ["475801"],
  geole: ["439147"],
  granville: ["438685"],
  "houlgate-1": ["578831"],
  "houlgate-2": ["578830"],
  "houlgate-3": ["578832"],
  "houlgate-4": ["578833"],
  lappart: ["438688"],
  apto: ["618973"],
  loft: ["438689"],
  memorial: ["587623"],
  mer: ["438695"],
  vacherie: ["622008"],
  monnaie: ["578702"],
  numero4: ["438692"],
  numero7: ["438691"],
  ouistreham: ["438726"],
  perruche: ["438706"],
  pigaciere: ["438684"],
  saintjean: ["563396"],
  saintpatrice: ["513685"],
  saintpierre: ["440211"],
  saintsauveur: ["437890"],
  simone: ["438683"],
  studio48: ["439146"],
  thies: ["440210"],
  tilleul2: ["436478"],
  tilleul3: ["611426"],
  tilleul4: ["501075"],
  tilleul8: ["601636"],
  tilleul9: ["500851"],
  trouville: ["438707"],
  vaugueux1: ["440207"],
  vaugueux2: ["466231"],
  vauquelin: ["502793"],
  vert: ["438690"],
};

/** Livret correspondant à une annonce Hostaway (ou undefined). */
export function livretDeListing(listingId: string): string | undefined {
  return Object.keys(HOSTAWAY).find((id) => HOSTAWAY[id].includes(listingId));
}
