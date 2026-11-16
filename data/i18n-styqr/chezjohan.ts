import type { Tr } from "../i18n-content";

/**
 * Traductions du livret « Chez Johan » (2 rue Quincampoix, Caen).
 * Contient aussi les textes partagés avec Vauquelin, Chez Geo, Desmoueux,
 * Studio 48 et 10ABC (adresses du quartier Saint-Sauveur, consignes communes) :
 * ces fichiers reprennent ce dictionnaire avec `...chezjohanTr`.
 * Clé = texte français EXACT.
 */
export const chezjohanTr: Record<string, Tr> = {
  // ------------------------------------------ Chez Johan : accueil & arrivée
  "Bienvenue Chez Johan ! Votre appartement se trouve au dernier étage, à deux pas de la place Saint-Sauveur. Cafés, restaurants et petits commerces sont en bas de chez vous, et le château, l'Abbaye aux Hommes et tout le centre historique de Caen se découvrent à pied. Très bon séjour ! 🏰": {
    en: "Welcome to Chez Johan! Your apartment is on the top floor, a stone's throw from Place Saint-Sauveur. Cafés, restaurants and small shops are right downstairs, and the castle, the Abbaye aux Hommes and Caen's whole historic centre are easy to explore on foot. Enjoy your stay! 🏰",
    de: "Willkommen bei Chez Johan! Ihre Wohnung liegt im obersten Stock, nur wenige Schritte von der Place Saint-Sauveur entfernt. Cafés, Restaurants und kleine Geschäfte finden Sie direkt vor der Haustür, und die Burg, die Abbaye aux Hommes und das gesamte historische Zentrum von Caen lassen sich bequem zu Fuß entdecken. Einen schönen Aufenthalt! 🏰",
    es: "¡Bienvenido a Chez Johan! Su apartamento está en la última planta, a dos pasos de la plaza Saint-Sauveur. Cafés, restaurantes y pequeñas tiendas están justo abajo, y el castillo, la Abbaye aux Hommes y todo el centro histórico de Caen se descubren a pie. ¡Que disfrute de su estancia! 🏰",
    it: "Benvenuti Chez Johan! Il vostro appartamento si trova all'ultimo piano, a due passi da place Saint-Sauveur. Caffè, ristoranti e piccoli negozi sono proprio sotto casa, e il castello, l'Abbaye aux Hommes e tutto il centro storico di Caen si scoprono a piedi. Buon soggiorno! 🏰",
  },
  "L'appartement se trouve au 3e et dernier étage du 2 rue Quincampoix (immeuble sans ascenseur)": {
    en: "The apartment is on the 3rd and top floor of 2 rue Quincampoix (no lift in the building)",
    de: "Die Wohnung liegt im 3. und obersten Stock von 2 rue Quincampoix (Gebäude ohne Aufzug)",
    es: "El apartamento está en la 3.ª y última planta del 2 rue Quincampoix (edificio sin ascensor)",
    it: "L'appartamento si trova al 3° e ultimo piano del 2 rue Quincampoix (edificio senza ascensore)",
  },
  "Suivez les étapes ci-dessous pour accéder à l'appartement": {
    en: "Follow the steps below to get into the apartment",
    de: "Folgen Sie den Schritten unten, um in die Wohnung zu gelangen",
    es: "Siga los pasos que se indican a continuación para acceder al apartamento",
    it: "Seguite i passaggi qui sotto per accedere all'appartamento",
  },
  "Rendez-vous au 2 rue Quincampoix.": {
    en: "Go to 2 rue Quincampoix.",
    de: "Gehen Sie zu 2 rue Quincampoix.",
    es: "Diríjase al 2 rue Quincampoix.",
    it: "Recatevi al 2 rue Quincampoix.",
  },
  "Près de la petite fenêtre, vous trouverez deux boîtes à clés : choisissez la noire.": {
    en: "Next to the small window you'll find two key boxes: use the black one.",
    de: "Neben dem kleinen Fenster finden Sie zwei Schlüsselboxen: Nehmen Sie die schwarze.",
    es: "Junto a la ventana pequeña encontrará dos cajas de llaves: elija la negra.",
    it: "Vicino alla finestrella troverete due cassette portachiavi: scegliete quella nera.",
  },
  "Composez le code reçu par message, puis baissez le loquet noir pour ouvrir la boîte. Récupérez les clés et le badge, refermez la boîte et brouillez le code.": {
    en: "Enter the code you received by message, then pull down the black latch to open the box. Take the keys and the fob, close the box and scramble the code.",
    de: "Geben Sie den per Nachricht erhaltenen Code ein und ziehen Sie dann den schwarzen Riegel nach unten, um die Box zu öffnen. Nehmen Sie die Schlüssel und den Chip, schließen Sie die Box und verstellen Sie den Code.",
    es: "Marque el código recibido por mensaje y baje el pestillo negro para abrir la caja. Recoja las llaves y la tarjeta, cierre la caja y desordene el código.",
    it: "Digitate il codice ricevuto via messaggio, poi abbassate la levetta nera per aprire la cassetta. Prendete le chiavi e il badge, richiudete la cassetta e mescolate il codice.",
  },
  "La porte de l'immeuble est la porte gris foncé, juste à côté de la fenêtre. Passez le badge sur le bouton noir de l'interphone (là où se trouve la lumière rouge) pour l'ouvrir.": {
    en: "The building door is the dark grey door right next to the window. Hold the fob against the black button on the intercom (where the red light is) to open it.",
    de: "Die Haustür ist die dunkelgraue Tür direkt neben dem Fenster. Halten Sie den Chip an den schwarzen Knopf der Sprechanlage (dort, wo das rote Licht ist), um sie zu öffnen.",
    es: "La puerta del edificio es la puerta gris oscuro, justo al lado de la ventana. Pase la tarjeta por el botón negro del portero automático (donde está la luz roja) para abrirla.",
    it: "Il portone è la porta grigio scuro, proprio accanto alla finestra. Avvicinate il badge al pulsante nero del citofono (dove c'è la luce rossa) per aprirla.",
  },
  "Montez au 3e et dernier étage. Ouvrez la porte avec la clé, en utilisant uniquement le verrou situé au-dessus de la poignée. Bienvenue chez vous ! 🙂": {
    en: "Go up to the 3rd and top floor. Open the door with the key, using only the lock above the handle. Welcome home! 🙂",
    de: "Gehen Sie hinauf in den 3. und obersten Stock. Öffnen Sie die Tür mit dem Schlüssel und benutzen Sie dabei nur das Schloss über der Klinke. Willkommen zu Hause! 🙂",
    es: "Suba a la 3.ª y última planta. Abra la puerta con la llave, utilizando únicamente la cerradura situada encima de la manilla. ¡Bienvenido a casa! 🙂",
    it: "Salite al 3° e ultimo piano. Aprite la porta con la chiave, usando solo la serratura sopra la maniglia. Benvenuti a casa! 🙂",
  },
  "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Quincampoix, rue Demolombe, rue Pasteur et rue Froide.\nParkings souterrains payants : Mairie, Château et Paul Doumer. Tarifs : indigoneo.fr": {
    en: "Paid street parking during the day (9am-12:30pm and 2pm-7pm) on rue Quincampoix, rue Demolombe, rue Pasteur and rue Froide.\nPaid underground car parks: Mairie, Château and Paul Doumer. Rates: indigoneo.fr",
    de: "Gebührenpflichtiges Parken tagsüber (9-12:30 Uhr und 14-19 Uhr) in der rue Quincampoix, rue Demolombe, rue Pasteur und rue Froide.\nGebührenpflichtige Tiefgaragen: Mairie, Château und Paul Doumer. Tarife: indigoneo.fr",
    es: "Aparcamiento de pago durante el día (9h-12h30 y 14h-19h) en la rue Quincampoix, rue Demolombe, rue Pasteur y rue Froide.\nAparcamientos subterráneos de pago: Mairie, Château y Paul Doumer. Tarifas: indigoneo.fr",
    it: "Parcheggio a pagamento durante il giorno (9-12:30 e 14-19) in rue Quincampoix, rue Demolombe, rue Pasteur e rue Froide.\nParcheggi sotterranei a pagamento: Mairie, Château e Paul Doumer. Tariffe: indigoneo.fr",
  },
  "Pièce de vie avec salon, espace repas et cuisine équipée (four, micro-ondes, plaques, hotte, réfrigérateur et machine Nespresso)": {
    en: "Living area with lounge, dining area and equipped kitchen (oven, microwave, hob, extractor hood, fridge and Nespresso machine)",
    de: "Wohnbereich mit Sitzecke, Essbereich und ausgestatteter Küche (Backofen, Mikrowelle, Kochfeld, Dunstabzug, Kühlschrank und Nespresso-Maschine)",
    es: "Sala de estar con salón, comedor y cocina equipada (horno, microondas, placa, campana, frigorífico y cafetera Nespresso)",
    it: "Zona giorno con salotto, zona pranzo e cucina attrezzata (forno, microonde, piano cottura, cappa, frigorifero e macchina Nespresso)",
  },
  "Salle de bain avec douche, lavabo et WC": {
    en: "Bathroom with shower, washbasin and toilet",
    de: "Badezimmer mit Dusche, Waschbecken und WC",
    es: "Baño con ducha, lavabo e inodoro",
    it: "Bagno con doccia, lavabo e WC",
  },
  "Au fond de l'appartement, chambre indépendante avec lit double, dressing et lave-linge": {
    en: "At the back of the apartment, a separate bedroom with double bed, walk-in wardrobe and washing machine",
    de: "Im hinteren Teil der Wohnung ein separates Schlafzimmer mit Doppelbett, Ankleide und Waschmaschine",
    es: "Al fondo del apartamento, dormitorio independiente con cama doble, vestidor y lavadora",
    it: "In fondo all'appartamento, camera indipendente con letto matrimoniale, cabina armadio e lavatrice",
  },

  // ------------------------------------------ Chez Johan : infos pratiques
  "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une pastille de lessive, du produit vaisselle et une éponge.": {
    en: "On arrival you'll find: toilet paper, a mini shower gel/shampoo per person, salt and pepper, a few coffee capsules and some tea, a laundry tablet, washing-up liquid and a sponge.",
    de: "Bei Ihrer Ankunft finden Sie: Toilettenpapier, ein Mini-Duschgel/Shampoo pro Person, Salz und Pfeffer, einige Kaffeekapseln und Tee, eine Waschmitteltablette, Spülmittel und einen Schwamm.",
    es: "A su llegada encontrará: papel higiénico, un gel de ducha/champú en miniatura por persona, sal y pimienta, algunas cápsulas de café y té, una pastilla de detergente, lavavajillas y una esponja.",
    it: "Al vostro arrivo troverete: carta igienica, un mini bagnoschiuma/shampoo a persona, sale e pepe, qualche capsula di caffè e del tè, una pastiglia di detersivo per il bucato, detersivo per i piatti e una spugna.",
  },
  "Les draps sont fournis pour les deux lits (lit double et canapé convertible). Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.": {
    en: "Bed linen is provided for both beds (double bed and sofa bed). Each guest has a bath towel. A bath mat and a tea towel are also provided.",
    de: "Bettwäsche wird für beide Betten gestellt (Doppelbett und Schlafsofa). Jeder Gast erhält ein Handtuch. Eine Badematte und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
    es: "Se proporcionan sábanas para las dos camas (cama doble y sofá cama). Cada huésped dispone de una toalla. También hay una alfombrilla de baño y un paño de cocina.",
    it: "Le lenzuola sono fornite per entrambi i letti (letto matrimoniale e divano letto). Ogni ospite ha un asciugamano. Sono a disposizione anche un tappetino da bagno e uno strofinaccio da cucina.",
  },
  "1. Appuyez sur le bouton On/Off pour allumer le téléviseur (sans image, vérifiez que la source est bien HDMI 1).\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur.\n3. Avec les flèches, sélectionnez « SFR TV » puis validez avec OK.\n4. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.": {
    en: "1. Press the On/Off button to turn on the TV (if there's no picture, check that the source is set to HDMI 1).\n2. With the box remote, press On/Off to turn on the set-top box.\n3. Use the arrows to select « SFR TV » and confirm with OK.\n4. Then use the box remote to change channels and adjust the volume.",
    de: "1. Drücken Sie die Ein/Aus-Taste, um den Fernseher einzuschalten (ohne Bild prüfen Sie, ob die Quelle auf HDMI 1 steht).\n2. Schalten Sie mit der Fernbedienung der Box den Decoder über Ein/Aus ein.\n3. Wählen Sie mit den Pfeiltasten « SFR TV » und bestätigen Sie mit OK.\n4. Mit der Fernbedienung der Box wechseln Sie dann die Sender und regeln die Lautstärke.",
    es: "1. Pulse el botón On/Off para encender el televisor (si no hay imagen, compruebe que la fuente sea HDMI 1).\n2. Con el mando del decodificador, pulse On/Off para encenderlo.\n3. Con las flechas, seleccione « SFR TV » y confirme con OK.\n4. Use después el mando del decodificador para cambiar de canal y ajustar el volumen.",
    it: "1. Premete il tasto On/Off per accendere il televisore (se non c'è immagine, verificate che la sorgente sia HDMI 1).\n2. Con il telecomando del decoder, premete On/Off per accenderlo.\n3. Con le frecce selezionate « SFR TV » e confermate con OK.\n4. Usate poi il telecomando del decoder per cambiare canale e regolare il volume.",
  },
  "Le lave-linge se trouve dans la chambre, avec le dressing. Une pastille de lessive vous est offerte à votre arrivée.": {
    en: "The washing machine is in the bedroom, next to the walk-in wardrobe. A laundry tablet is provided on arrival.",
    de: "Die Waschmaschine befindet sich im Schlafzimmer, bei der Ankleide. Bei Ihrer Ankunft liegt eine Waschmitteltablette bereit.",
    es: "La lavadora está en el dormitorio, junto al vestidor. A su llegada le ofrecemos una pastilla de detergente.",
    it: "La lavatrice si trova in camera, accanto alla cabina armadio. Al vostro arrivo troverete una pastiglia di detersivo in omaggio.",
  },
  "Un aspirateur et une serpillière sont à votre disposition dans l'appartement.": {
    en: "A vacuum cleaner and a floor cloth are available in the apartment.",
    de: "Ein Staubsauger und ein Wischtuch stehen Ihnen in der Wohnung zur Verfügung.",
    es: "Tiene a su disposición una aspiradora y una fregona en el apartamento.",
    it: "Nell'appartamento sono a vostra disposizione un aspirapolvere e uno straccio per pavimenti.",
  },
  "Un lit parapluie et son matelas sont à votre disposition. Les draps ne sont pas fournis.": {
    en: "A travel cot with its mattress is available. Sheets are not provided.",
    de: "Ein Reisebett mit Matratze steht zur Verfügung. Bettwäsche wird dafür nicht gestellt.",
    es: "Hay una cuna de viaje con su colchón a su disposición. No se proporcionan sábanas.",
    it: "Sono a disposizione un lettino da viaggio e il suo materasso. Le lenzuola non sono fornite.",
  },
  "Les poubelles sont à déposer dans les bacs situés dehors, juste à côté de la terrasse du restaurant Le Médicis. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 28 rue Saint-Sauveur": {
    en: "Please take your rubbish to the bins outside, right next to the terrace of the restaurant Le Médicis. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 28 rue Saint-Sauveur",
    de: "Bitte bringen Sie den Müll zu den Tonnen draußen, direkt neben der Terrasse des Restaurants Le Médicis. Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container in der 28 rue Saint-Sauveur",
    es: "Deposite la basura en los contenedores de fuera, justo al lado de la terraza del restaurante Le Médicis. Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 28 rue Saint-Sauveur",
    it: "I rifiuti vanno gettati nei bidoni all'esterno, proprio accanto alla terrazza del ristorante Le Médicis. Vi preghiamo di fare con cura la raccolta differenziata:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore al 28 rue Saint-Sauveur",
  },
  "TV (box SFR)": {
    en: "TV (SFR box)",
    de: "TV (SFR-Box)",
    es: "TV (decodificador SFR)",
    it: "TV (decoder SFR)",
  },

  // ------------------------------------------ Consignes de départ communes
  "Laisser les draps sur les lits (l'équipe de ménage s'en charge) et les serviettes utilisées dans la salle de bain": {
    en: "Leave the sheets on the beds (the cleaning team will take care of them) and the used towels in the bathroom",
    de: "Lassen Sie die Bettwäsche auf den Betten (das Reinigungsteam kümmert sich darum) und die benutzten Handtücher im Badezimmer",
    es: "Dejar las sábanas en las camas (el equipo de limpieza se encarga) y las toallas usadas en el baño",
    it: "Lasciare le lenzuola sui letti (se ne occupa il personale delle pulizie) e gli asciugamani usati in bagno",
  },
  "Fermer l'appartement à clé, puis remettre les clés dans la boîte à clés": {
    en: "Lock the apartment, then put the keys back in the key box",
    de: "Die Wohnung abschließen und die Schlüssel wieder in die Schlüsselbox legen",
    es: "Cerrar el apartamento con llave y volver a dejar las llaves en la caja de llaves",
    it: "Chiudere l'appartamento a chiave, poi rimettere le chiavi nella cassetta portachiavi",
  },

  // ------------------------------------------ Quartier Saint-Sauveur
  "Place Saint-Sauveur — cafés & marché du vendredi (~2 min)": {
    en: "Place Saint-Sauveur — cafés & Friday market (~2 min)",
    de: "Place Saint-Sauveur — Cafés & Freitagsmarkt (~2 Min.)",
    es: "Plaza Saint-Sauveur — cafés y mercado del viernes (~2 min)",
    it: "Place Saint-Sauveur — caffè e mercato del venerdì (~2 min)",
  },
  "Rue Écuyère — bars & restaurants (~2 min)": {
    en: "Rue Écuyère — bars & restaurants (~2 min)",
    de: "Rue Écuyère — Bars & Restaurants (~2 Min.)",
    es: "Rue Écuyère — bares y restaurantes (~2 min)",
    it: "Rue Écuyère — bar e ristoranti (~2 min)",
  },
  "Rue Saint-Pierre — commerces (~4 min)": {
    en: "Rue Saint-Pierre — shops (~4 min)",
    de: "Rue Saint-Pierre — Geschäfte (~4 Min.)",
    es: "Rue Saint-Pierre — tiendas (~4 min)",
    it: "Rue Saint-Pierre — negozi (~4 min)",
  },
  "Château de Caen (~6 min)": {
    en: "Caen Castle (~6 min)",
    de: "Burg von Caen (~6 Min.)",
    es: "Castillo de Caen (~6 min)",
    it: "Castello di Caen (~6 min)",
  },
  "Abbaye aux Hommes & hôtel de ville (~6 min)": {
    en: "Abbaye aux Hommes & town hall (~6 min)",
    de: "Abbaye aux Hommes & Rathaus (~6 Min.)",
    es: "Abbaye aux Hommes y ayuntamiento (~6 min)",
    it: "Abbaye aux Hommes e municipio (~6 min)",
  },
  "Vous êtes en plein centre historique, entre la place Saint-Sauveur et la rue Saint-Pierre. Cafés, restaurants, boulangeries et commerces sont à quelques pas, et le château comme l'Abbaye aux Hommes se rejoignent facilement à pied.": {
    en: "You're right in the historic centre, between Place Saint-Sauveur and rue Saint-Pierre. Cafés, restaurants, bakeries and shops are just a few steps away, and both the castle and the Abbaye aux Hommes are an easy walk.",
    de: "Sie wohnen mitten im historischen Zentrum, zwischen der Place Saint-Sauveur und der rue Saint-Pierre. Cafés, Restaurants, Bäckereien und Geschäfte sind nur wenige Schritte entfernt, und die Burg wie auch die Abbaye aux Hommes erreichen Sie bequem zu Fuß.",
    es: "Está en pleno centro histórico, entre la plaza Saint-Sauveur y la rue Saint-Pierre. Cafés, restaurantes, panaderías y tiendas están a pocos pasos, y tanto el castillo como la Abbaye aux Hommes se alcanzan fácilmente a pie.",
    it: "Siete in pieno centro storico, tra place Saint-Sauveur e rue Saint-Pierre. Caffè, ristoranti, panetterie e negozi sono a pochi passi, e sia il castello sia l'Abbaye aux Hommes si raggiungono facilmente a piedi.",
  },

  // ------------------------------------------ Autour de moi (Saint-Sauveur)
  "Restaurant, rue aux Namps.": {
    en: "Restaurant, rue aux Namps.",
    de: "Restaurant, rue aux Namps.",
    es: "Restaurante, rue aux Namps.",
    it: "Ristorante, rue aux Namps.",
  },
  "Restaurant, passage du Grand Turc.": {
    en: "Restaurant, passage du Grand Turc.",
    de: "Restaurant, passage du Grand Turc.",
    es: "Restaurante, passage du Grand Turc.",
    it: "Ristorante, passage du Grand Turc.",
  },
  "Restaurant, rue de Geôle.": {
    en: "Restaurant, rue de Geôle.",
    de: "Restaurant, rue de Geôle.",
    es: "Restaurante, rue de Geôle.",
    it: "Ristorante, rue de Geôle.",
  },
  "Coup de cœur d'Agathe, quai François Mitterrand.": {
    en: "One of Agathe's favourites, quai François Mitterrand.",
    de: "Agathes Lieblingsadresse, quai François Mitterrand.",
    es: "Uno de los favoritos de Agathe, quai François Mitterrand.",
    it: "Uno dei preferiti di Agathe, quai François Mitterrand.",
  },
  "Café, rue Montoir-Poissonnerie.": {
    en: "Café, rue Montoir-Poissonnerie.",
    de: "Café, rue Montoir-Poissonnerie.",
    es: "Cafetería, rue Montoir-Poissonnerie.",
    it: "Caffetteria, rue Montoir-Poissonnerie.",
  },
  "Coup de cœur d'Agathe : brunch, avenue du Six Juin.": {
    en: "One of Agathe's favourites: brunch, avenue du Six Juin.",
    de: "Agathes Lieblingsadresse: Brunch, avenue du Six Juin.",
    es: "Uno de los favoritos de Agathe: brunch, avenue du Six Juin.",
    it: "Uno dei preferiti di Agathe: brunch, avenue du Six Juin.",
  },
  "Supérette, rue Saint-Pierre.": {
    en: "Convenience store, rue Saint-Pierre.",
    de: "Kleiner Supermarkt, rue Saint-Pierre.",
    es: "Supermercado de proximidad, rue Saint-Pierre.",
    it: "Minimarket, rue Saint-Pierre.",
  },
  "Supérette, rue de Bayeux.": {
    en: "Convenience store, rue de Bayeux.",
    de: "Kleiner Supermarkt, rue de Bayeux.",
    es: "Supermercado de proximidad, rue de Bayeux.",
    it: "Minimarket, rue de Bayeux.",
  },
  "Chocolatier, boulevard Maréchal Leclerc.": {
    en: "Chocolate maker, boulevard Maréchal Leclerc.",
    de: "Chocolatier, boulevard Maréchal Leclerc.",
    es: "Chocolatería, boulevard Maréchal Leclerc.",
    it: "Cioccolateria, boulevard Maréchal Leclerc.",
  },
  "Boulangerie-pâtisserie, rue Saint-Jean.": {
    en: "Bakery and pastry shop, rue Saint-Jean.",
    de: "Bäckerei und Konditorei, rue Saint-Jean.",
    es: "Panadería y pastelería, rue Saint-Jean.",
    it: "Panetteria e pasticceria, rue Saint-Jean.",
  },
  "Poissonnerie, rue Guillaume le Conquérant.": {
    en: "Fishmonger, rue Guillaume le Conquérant.",
    de: "Fischgeschäft, rue Guillaume le Conquérant.",
    es: "Pescadería, rue Guillaume le Conquérant.",
    it: "Pescheria, rue Guillaume le Conquérant.",
  },
  "L'arrêt de tram et de bus le plus proche (~5 min à pied).": {
    en: "The nearest tram and bus stop (~5 min walk).",
    de: "Die nächste Straßenbahn- und Bushaltestelle (~5 Min. zu Fuß).",
    es: "La parada de tranvía y autobús más cercana (~5 min a pie).",
    it: "La fermata del tram e dell'autobus più vicina (~5 min a piedi).",
  },
  "Bar-tabac, rue Écuyère.": {
    en: "Bar and tobacconist, rue Écuyère.",
    de: "Bar mit Tabakladen, rue Écuyère.",
    es: "Bar-estanco, rue Écuyère.",
    it: "Bar-tabaccheria, rue Écuyère.",
  },
  "Bar-tabac, rue Froide.": {
    en: "Bar and tobacconist, rue Froide.",
    de: "Bar mit Tabakladen, rue Froide.",
    es: "Bar-estanco, rue Froide.",
    it: "Bar-tabaccheria, rue Froide.",
  },
  "Laverie automatique, rue des Teinturiers.": {
    en: "Self-service launderette, rue des Teinturiers.",
    de: "Waschsalon, rue des Teinturiers.",
    es: "Lavandería automática, rue des Teinturiers.",
    it: "Lavanderia self-service, rue des Teinturiers.",
  },
  "Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, juste à côté. Pour le pain, filez chez Tartines et Gourmandises, rue Froide. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon et A Contre Sens. Pour un verre : Nonna, juste en bas, ou Âmbar.": {
    en: "On Friday morning, don't miss the market on Place Saint-Sauveur, just next door. For bread, head to Tartines et Gourmandises on rue Froide. For eating out, Agathe's favourite spots: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon and A Contre Sens. For a drink: Nonna, right downstairs, or Âmbar.",
    de: "Verpassen Sie am Freitagmorgen nicht den Markt auf der Place Saint-Sauveur gleich nebenan. Brot gibt es bei Tartines et Gourmandises in der rue Froide. Zum Essen Agathes Lieblingsadressen: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon und A Contre Sens. Auf einen Drink: Nonna, direkt vor der Tür, oder Âmbar.",
    es: "El viernes por la mañana no se pierda el mercado de la plaza Saint-Sauveur, justo al lado. Para el pan, vaya a Tartines et Gourmandises, en la rue Froide. Para comer, los sitios preferidos de Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon y A Contre Sens. Para tomar algo: Nonna, justo abajo, o Âmbar.",
    it: "Il venerdì mattina non perdetevi il mercato di place Saint-Sauveur, proprio accanto. Per il pane, andate da Tartines et Gourmandises, in rue Froide. Per mangiare, gli indirizzi preferiti di Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon e A Contre Sens. Per un drink: Nonna, proprio sotto casa, o Âmbar.",
  },
};
