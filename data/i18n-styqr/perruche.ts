import type { Tr } from "../i18n-content";
import { numero4Tr } from "./numero4";

/**
 * Traductions du livret « Perruche ». Les phrases identiques à celles des
 * logements du 46 rue Caponière (adresses autour, consignes de départ…)
 * viennent de numero4Tr.
 */
export const perrucheTr: Record<string, Tr> = {
  ...numero4Tr,
  "Bienvenue à la Perruche ! Votre studio de charme se trouve au dernier étage d'un immeuble ancien en pierre de Caen, rue Froide, en plein centre piéton. Restaurants, bars, boutiques et château sont à quelques pas. Très bon séjour ! 🦜": {
    en: "Welcome to La Perruche! Your charming studio is on the top floor of an old Caen-stone building on rue Froide, right in the pedestrian centre. Restaurants, bars, shops and the castle are just a few steps away. Enjoy your stay! 🦜",
    de: "Willkommen in der Perruche! Ihr charmantes Studio liegt im obersten Stock eines alten Hauses aus Caen-Stein in der Rue Froide, mitten in der Fußgängerzone. Restaurants, Bars, Geschäfte und die Burg sind nur wenige Schritte entfernt. Einen schönen Aufenthalt! 🦜",
    es: "¡Bienvenido a la Perruche! Su encantador estudio se encuentra en la última planta de un antiguo edificio de piedra de Caen, en la rue Froide, en pleno centro peatonal. Restaurantes, bares, tiendas y el castillo están a pocos pasos. ¡Feliz estancia! 🦜",
    it: "Benvenuti alla Perruche! Il vostro monolocale di charme si trova all'ultimo piano di un antico edificio in pietra di Caen, in rue Froide, in pieno centro pedonale. Ristoranti, bar, negozi e il castello sono a pochi passi. Buon soggiorno! 🦜",
  },
  "Le studio se trouve au 4e et dernier étage du 53 rue Froide, sans ascenseur (attention, les escaliers sont raides)": {
    en: "The studio is on the 4th and top floor of 53 rue Froide, with no lift (careful, the stairs are steep)",
    de: "Das Studio befindet sich im 4. und obersten Stock der Rue Froide 53, ohne Aufzug (Vorsicht, die Treppe ist steil)",
    es: "El estudio está en la 4.ª y última planta del 53 rue Froide, sin ascensor (cuidado, las escaleras son empinadas)",
    it: "Il monolocale si trova al 4° e ultimo piano del 53 rue Froide, senza ascensore (attenzione, le scale sono ripide)",
  },
  "Le numéro à appeler pour ouvrir la porte de l'immeuble et le code de la boîte à clés vous sont communiqués par message le jour de votre arrivée": {
    en: "The number to call to open the building door and the key box code are sent to you by message on the day of your arrival",
    de: "Die Telefonnummer zum Öffnen der Haustür und der Code des Schlüsselkastens werden Ihnen am Anreisetag per Nachricht mitgeteilt",
    es: "El número al que llamar para abrir la puerta del edificio y el código de la caja de llaves se le envían por mensaje el día de su llegada",
    it: "Il numero da chiamare per aprire il portone e il codice della cassetta delle chiavi vi vengono comunicati via messaggio il giorno dell'arrivo",
  },
  "Rendez-vous au 53 rue Froide : c'est la porte blanche, entre l'Aca Bières et le Schmilblic.": {
    en: "Go to 53 rue Froide: it's the white door, between L'Aca Bières and Le Schmilblic.",
    de: "Gehen Sie zur Rue Froide 53: Es ist die weiße Tür zwischen L'Aca Bières und Le Schmilblic.",
    es: "Diríjase al 53 rue Froide: es la puerta blanca, entre L'Aca Bières y Le Schmilblic.",
    it: "Recatevi al 53 rue Froide: è la porta bianca, tra L'Aca Bières e Le Schmilblic.",
  },
  "Appelez le numéro reçu par message : dès que vous entendez le « bip », poussez la porte pour entrer.": {
    en: "Call the number you received by message: as soon as you hear the « beep », push the door to go in.",
    de: "Rufen Sie die per Nachricht erhaltene Nummer an: Sobald Sie den « Piepton » hören, drücken Sie die Tür auf.",
    es: "Llame al número recibido por mensaje: en cuanto oiga el « pitido », empuje la puerta para entrar.",
    it: "Chiamate il numero ricevuto via messaggio: appena sentite il « bip », spingete la porta per entrare.",
  },
  "Montez jusqu'au 4e étage (attention, les escaliers sont raides).": {
    en: "Go up to the 4th floor (careful, the stairs are steep).",
    de: "Gehen Sie hinauf in den 4. Stock (Vorsicht, die Treppe ist steil).",
    es: "Suba hasta la 4.ª planta (cuidado, las escaleras son empinadas).",
    it: "Salite fino al 4° piano (attenzione, le scale sono ripide).",
  },
  "Votre porte est à droite, avec une boîte à code au-dessus de la poignée. Composez le code reçu par message et baissez le loquet noir pour l'ouvrir.": {
    en: "Your door is on the right, with a code box above the handle. Enter the code you received by message and pull down the black latch to open it.",
    de: "Ihre Tür ist rechts, mit einem Code-Kasten über dem Türgriff. Geben Sie den per Nachricht erhaltenen Code ein und ziehen Sie den schwarzen Riegel nach unten, um ihn zu öffnen.",
    es: "Su puerta está a la derecha, con una caja de código encima de la manilla. Marque el código recibido por mensaje y baje el pestillo negro para abrirla.",
    it: "La vostra porta è a destra, con una cassetta a codice sopra la maniglia. Digitate il codice ricevuto via messaggio e abbassate il chiavistello nero per aprirla.",
  },
  "Récupérez les clés et ouvrez la porte de l'appartement. Pendant votre séjour, le badge fourni avec les clés ouvre la porte de l'immeuble : passez-le simplement devant l'interphone. Bienvenue chez vous ! 🙂": {
    en: "Take the keys and open the apartment door. During your stay, the fob provided with the keys opens the building door: simply hold it in front of the intercom. Welcome home! 🙂",
    de: "Nehmen Sie die Schlüssel und öffnen Sie die Wohnungstür. Während Ihres Aufenthalts öffnet der Chip, der bei den Schlüsseln liegt, die Haustür: Halten Sie ihn einfach vor die Gegensprechanlage. Willkommen zu Hause! 🙂",
    es: "Coja las llaves y abra la puerta del apartamento. Durante su estancia, la tarjeta que acompaña a las llaves abre la puerta del edificio: basta con acercarla al interfono. ¡Bienvenido a casa! 🙂",
    it: "Prendete le chiavi e aprite la porta dell'appartamento. Durante il soggiorno, il badge fornito con le chiavi apre il portone: basta passarlo davanti al citofono. Benvenuti a casa! 🙂",
  },
  "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Quincampoix, rue Demolombe, rue Pasteur et rue Froide.\nStationnement gratuit rue Leverrier et rue Demolombe.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr": {
    en: "Paid parking during the day (9 am–12:30 pm and 2–7 pm) on rue Quincampoix, rue Demolombe, rue Pasteur and rue Froide.\nFree parking on rue Leverrier and rue Demolombe.\nPaid underground car parks: Mairie, Château, Paul Doumer and place de la République. Prices: indigoneo.fr",
    de: "Gebührenpflichtiges Parken tagsüber (9–12:30 Uhr und 14–19 Uhr) in der Rue Quincampoix, Rue Demolombe, Rue Pasteur und Rue Froide.\nKostenloses Parken in der Rue Leverrier und der Rue Demolombe.\nGebührenpflichtige Tiefgaragen: Mairie, Château, Paul Doumer und Place de la République. Preise: indigoneo.fr",
    es: "Aparcamiento de pago durante el día (de 9 h a 12:30 h y de 14 h a 19 h) en la rue Quincampoix, rue Demolombe, rue Pasteur y rue Froide.\nAparcamiento gratuito en la rue Leverrier y la rue Demolombe.\nAparcamientos subterráneos de pago: Mairie, Château, Paul Doumer y place de la République. Tarifas: indigoneo.fr",
    it: "Parcheggio a pagamento durante il giorno (9-12:30 e 14-19) in rue Quincampoix, rue Demolombe, rue Pasteur e rue Froide.\nParcheggio gratuito in rue Leverrier e rue Demolombe.\nParcheggi sotterranei a pagamento: Mairie, Château, Paul Doumer e place de la République. Tariffe: indigoneo.fr",
  },
  "Pièce principale avec lit double (140 × 200 cm), espace repas et coin salon, avec vue sur la rue Froide": {
    en: "Main room with a double bed (140 × 200 cm), dining area and seating area, overlooking rue Froide",
    de: "Hauptraum mit Doppelbett (140 × 200 cm), Essbereich und Sitzecke, mit Blick auf die Rue Froide",
    es: "Estancia principal con cama doble (140 × 200 cm), zona de comedor y rincón de salón, con vistas a la rue Froide",
    it: "Locale principale con letto matrimoniale (140 × 200 cm), zona pranzo e angolo salotto, con vista su rue Froide",
  },
  "Les draps sont fournis pour le lit double. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.": {
    en: "Bed linen is provided for the double bed. Each guest has a bath towel. A bath mat and a tea towel are also provided.",
    de: "Bettwäsche für das Doppelbett wird gestellt. Jeder Gast erhält ein Handtuch. Eine Badematte und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
    es: "Se proporcionan sábanas para la cama doble. Cada huésped dispone de una toalla. También tiene a su disposición una alfombrilla de baño y un paño de cocina.",
    it: "Le lenzuola sono fornite per il letto matrimoniale. Ogni ospite dispone di un asciugamano. Sono a vostra disposizione anche un tappetino da bagno e uno strofinaccio da cucina.",
  },
  "L'aspirateur et la serpillière se trouvent dans le placard à côté de l'entrée.": {
    en: "The vacuum cleaner and the floor cloth are in the cupboard next to the entrance.",
    de: "Staubsauger und Wischtuch befinden sich im Schrank neben dem Eingang.",
    es: "La aspiradora y la bayeta para el suelo están en el armario junto a la entrada.",
    it: "L'aspirapolvere e lo straccio per pavimenti si trovano nell'armadio accanto all'ingresso.",
  },
  "Les poubelles se trouvent dans les bacs à l'extérieur, juste à côté de l'agence Billet Giraud. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 28 rue Saint-Sauveur": {
    en: "The bins are outside, right next to the Billet Giraud agency. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 28 rue Saint-Sauveur",
    de: "Die Mülltonnen stehen draußen, direkt neben der Agentur Billet Giraud. Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container in der Rue Saint-Sauveur 28",
    es: "Los contenedores están fuera, justo al lado de la agencia Billet Giraud. Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 28 rue Saint-Sauveur",
    it: "I bidoni si trovano all'esterno, proprio accanto all'agenzia Billet Giraud. Vi preghiamo di differenziare bene i rifiuti:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore al 28 rue Saint-Sauveur",
  },
  "Fermer l'appartement à clé, puis remettre les clés et le badge dans la boîte à code (au-dessus de la poignée)": {
    en: "Lock the apartment, then put the keys and the fob back in the code box (above the handle)",
    de: "Die Wohnung abschließen und Schlüssel und Chip in den Code-Kasten (über dem Türgriff) zurücklegen",
    es: "Cerrar el apartamento con llave y devolver las llaves y la tarjeta a la caja de código (encima de la manilla)",
    it: "Chiudere a chiave l'appartamento, poi rimettere le chiavi e il badge nella cassetta a codice (sopra la maniglia)",
  },
  "Église Saint-Pierre & office de tourisme (~5 min)": {
    en: "Église Saint-Pierre & tourist office (~5 min)",
    de: "Kirche Saint-Pierre & Touristeninformation (~5 Min.)",
    es: "Iglesia de Saint-Pierre y oficina de turismo (~5 min)",
    it: "Chiesa di Saint-Pierre e ufficio del turismo (~5 min)",
  },
  "Abbaye aux Hommes (~7 min)": {
    en: "Abbaye aux Hommes (~7 min)",
    de: "Abbaye aux Hommes (~7 Min.)",
    es: "Abbaye aux Hommes (~7 min)",
    it: "Abbaye aux Hommes (~7 min)",
  },
  "Port de plaisance (~12 min)": {
    en: "Marina (~12 min)",
    de: "Yachthafen (~12 Min.)",
    es: "Puerto deportivo (~12 min)",
    it: "Porto turistico (~12 min)",
  },
  "Vous êtes rue Froide, une rue piétonne du centre historique, entre la place Saint-Sauveur et l'église Saint-Pierre. Bars, restaurants, boutiques et le château sont à quelques minutes à pied.": {
    en: "You're on rue Froide, a pedestrian street in the historic centre, between place Saint-Sauveur and the Église Saint-Pierre. Bars, restaurants, shops and the castle are a few minutes' walk away.",
    de: "Sie wohnen in der Rue Froide, einer Fußgängerstraße der Altstadt, zwischen der Place Saint-Sauveur und der Kirche Saint-Pierre. Bars, Restaurants, Geschäfte und die Burg sind nur wenige Gehminuten entfernt.",
    es: "Está en la rue Froide, una calle peatonal del centro histórico, entre la place Saint-Sauveur y la iglesia de Saint-Pierre. Bares, restaurantes, tiendas y el castillo están a pocos minutos a pie.",
    it: "Siete in rue Froide, una via pedonale del centro storico, tra place Saint-Sauveur e la chiesa di Saint-Pierre. Bar, ristoranti, negozi e il castello sono a pochi minuti a piedi.",
  },
  "Restaurant, rue aux Namps, juste à côté du logement.": {
    en: "Restaurant, rue aux Namps, right next to the apartment.",
    de: "Restaurant, Rue aux Namps, direkt neben der Wohnung.",
    es: "Restaurante, rue aux Namps, justo al lado del alojamiento.",
    it: "Ristorante, rue aux Namps, proprio accanto all'alloggio.",
  },
  "Restaurant, passage du Grand Turc.": {
    en: "Restaurant, passage du Grand Turc.",
    de: "Restaurant, Passage du Grand Turc.",
    es: "Restaurante, passage du Grand Turc.",
    it: "Ristorante, passage du Grand Turc.",
  },
  "Restaurant, rue de Geôle.": {
    en: "Restaurant, rue de Geôle.",
    de: "Restaurant, Rue de Geôle.",
    es: "Restaurante, rue de Geôle.",
    it: "Ristorante, rue de Geôle.",
  },
  "Coup de cœur d'Agathe : burgers, rue Buquet.": {
    en: "One of Agathe's favourites: burgers, rue Buquet.",
    de: "Agathes Lieblingsadresse: Burger, rue Buquet.",
    es: "Uno de los favoritos de Agathe: hamburguesas, rue Buquet.",
    it: "Uno dei preferiti di Agathe: hamburger, rue Buquet.",
  },
  "Café, rue Montoir-Poissonnerie.": {
    en: "Café, rue Montoir-Poissonnerie.",
    de: "Café, Rue Montoir-Poissonnerie.",
    es: "Cafetería, rue Montoir-Poissonnerie.",
    it: "Caffè, rue Montoir-Poissonnerie.",
  },
  "Bar de quartier, produits locaux, presque en face du logement.": {
    en: "Neighbourhood bar with local products, almost opposite the apartment.",
    de: "Nachbarschaftsbar mit regionalen Produkten, fast gegenüber der Wohnung.",
    es: "Bar de barrio con productos locales, casi enfrente del alojamiento.",
    it: "Bar di quartiere con prodotti locali, quasi di fronte all'alloggio.",
  },
  "Discothèque, rue Paul Doumer.": {
    en: "Nightclub, rue Paul Doumer.",
    de: "Diskothek, Rue Paul Doumer.",
    es: "Discoteca, rue Paul Doumer.",
    it: "Discoteca, rue Paul Doumer.",
  },
  "Club, rue du Tour de Terre, près du château.": {
    en: "Club, rue du Tour de Terre, near the castle.",
    de: "Club, Rue du Tour de Terre, nahe der Burg.",
    es: "Club, rue du Tour de Terre, cerca del castillo.",
    it: "Locale notturno, rue du Tour de Terre, vicino al castello.",
  },
  "Club, rue Buquet.": {
    en: "Club, rue Buquet.",
    de: "Club, Rue Buquet.",
    es: "Club, rue Buquet.",
    it: "Locale notturno, rue Buquet.",
  },
  "Supérette, rue Saint-Pierre.": {
    en: "Mini-market, rue Saint-Pierre.",
    de: "Kleiner Supermarkt, Rue Saint-Pierre.",
    es: "Supermercado, rue Saint-Pierre.",
    it: "Minimarket, rue Saint-Pierre.",
  },
  "Supérette, rue Basse.": {
    en: "Mini-market, rue Basse.",
    de: "Kleiner Supermarkt, Rue Basse.",
    es: "Supermercado, rue Basse.",
    it: "Minimarket, rue Basse.",
  },
  "Coup de cœur d'Agathe : boulangerie, rue Froide, juste en bas du logement.": {
    en: "One of Agathe's favourites: bakery, rue Froide, right below the apartment.",
    de: "Agathes Lieblingsadresse: Bäckerei, Rue Froide, direkt unter der Wohnung.",
    es: "Uno de los favoritos de Agathe: panadería, rue Froide, justo debajo del alojamiento.",
    it: "Uno dei preferiti di Agathe: panetteria, rue Froide, proprio sotto l'alloggio.",
  },
  "Pâtissier-chocolatier, rue Saint-Jean.": {
    en: "Pastry chef and chocolatier, rue Saint-Jean.",
    de: "Konditor und Chocolatier, Rue Saint-Jean.",
    es: "Pastelería y chocolatería, rue Saint-Jean.",
    it: "Pasticceria e cioccolateria, rue Saint-Jean.",
  },
  "Chocolatier, boulevard Maréchal Leclerc.": {
    en: "Chocolatier, boulevard Maréchal Leclerc.",
    de: "Chocolatier, Boulevard Maréchal Leclerc.",
    es: "Chocolatería, boulevard Maréchal Leclerc.",
    it: "Cioccolateria, boulevard Maréchal Leclerc.",
  },
  "Boucherie, boulevard des Alliés.": {
    en: "Butcher's shop, boulevard des Alliés.",
    de: "Metzgerei, Boulevard des Alliés.",
    es: "Carnicería, boulevard des Alliés.",
    it: "Macelleria, boulevard des Alliés.",
  },
  "L'arrêt de tram et de bus le plus proche (~3 min à pied).": {
    en: "The nearest tram and bus stop (~3 min walk).",
    de: "Die nächste Straßenbahn- und Bushaltestelle (~3 Min. zu Fuß).",
    es: "La parada de tranvía y autobús más cercana (~3 min a pie).",
    it: "La fermata di tram e autobus più vicina (~3 min a piedi).",
  },
  "Pharmacie, place Malherbe. Pharmacie de garde : composez le 3237.": {
    en: "Pharmacy, place Malherbe. Duty pharmacy: dial 3237.",
    de: "Apotheke, Place Malherbe. Notdienst-Apotheke: wählen Sie 3237.",
    es: "Farmacia, place Malherbe. Farmacia de guardia: marque el 3237.",
    it: "Farmacia, place Malherbe. Farmacia di turno: componete il 3237.",
  },
  "Pharmacie, rue Saint-Pierre.": {
    en: "Pharmacy, rue Saint-Pierre.",
    de: "Apotheke, Rue Saint-Pierre.",
    es: "Farmacia, rue Saint-Pierre.",
    it: "Farmacia, rue Saint-Pierre.",
  },
  "Bar-tabac, rue Froide, à deux pas du logement.": {
    en: "Bar and tobacconist, rue Froide, a short walk from the apartment.",
    de: "Bar mit Tabakladen, Rue Froide, nur wenige Schritte von der Wohnung.",
    es: "Bar-estanco, rue Froide, a dos pasos del alojamiento.",
    it: "Bar-tabacchi, rue Froide, a due passi dall'alloggio.",
  },
  "Laverie automatique, rue des Teinturiers.": {
    en: "Launderette, rue des Teinturiers.",
    de: "Waschsalon, Rue des Teinturiers.",
    es: "Lavandería automática, rue des Teinturiers.",
    it: "Lavanderia self-service, rue des Teinturiers.",
  },
  "Vous êtes au cœur du Caen piéton : le pain du matin chez Tartines et Gourmandises, juste en bas, et un verre au Comptoir, presque en face. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Koboon. Pour un verre : Nonna ou Âmbar.": {
    en: "You're in the heart of pedestrian Caen: morning bread from Tartines et Gourmandises, just downstairs, and a drink at Le Comptoir, almost opposite. On Friday morning, don't miss the market on place Saint-Sauveur. For food, Agathe's favourite spots: Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque, A Contre Sens and Koboon. For a drink: Nonna or Âmbar.",
    de: "Sie wohnen im Herzen der Caener Fußgängerzone: frisches Brot am Morgen bei Tartines et Gourmandises, direkt unten, und ein Drink im Comptoir, fast gegenüber. Verpassen Sie freitagvormittags nicht den Markt auf der Place Saint-Sauveur. Zum Essen Agathes Lieblingsadressen: Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque, A Contre Sens und Koboon. Für einen Drink: Nonna oder Âmbar.",
    es: "Está en el corazón del Caen peatonal: el pan de la mañana en Tartines et Gourmandises, justo abajo, y una copa en Le Comptoir, casi enfrente. El viernes por la mañana, no se pierda el mercado de la place Saint-Sauveur. Para comer, las direcciones favoritas de Agathe: Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque, A Contre Sens y Koboon. Para tomar algo: Nonna o Âmbar.",
    it: "Siete nel cuore della Caen pedonale: il pane del mattino da Tartines et Gourmandises, proprio sotto casa, e un drink al Comptoir, quasi di fronte. Il venerdì mattina non perdete il mercato di place Saint-Sauveur. A tavola, gli indirizzi preferiti di Agathe: Le Mug, Les Burgers de Colette, Bœuf & Cow, Le Bistrot Basque, A Contre Sens e Koboon. Per un drink: Nonna o Âmbar.",
  },
};
