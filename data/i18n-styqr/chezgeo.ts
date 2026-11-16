import type { Tr } from "../i18n-content";
import { vauquelinTr } from "./vauquelin";

/**
 * Traductions du livret « Chez Geo » (20 rue de Bras, Caen).
 * Reprend les textes partagés de Chez Johan et Vauquelin (`...vauquelinTr`,
 * qui contient déjà `chezjohanTr`). Clé = texte français EXACT.
 */
export const chezgeoTr: Record<string, Tr> = {
  ...vauquelinTr,

  "Bienvenue Chez Geo ! Votre studio se trouve dans une rue piétonne en plein cœur de Caen, entre la place Saint-Sauveur et la rue Saint-Pierre. Commerces, cafés, bars et restaurants sont au pied de l'immeuble : l'endroit idéal pour découvrir la ville à pied. Très bon séjour ! 🌷": {
    en: "Welcome to Chez Geo! Your studio is on a pedestrian street in the very heart of Caen, between Place Saint-Sauveur and rue Saint-Pierre. Shops, cafés, bars and restaurants are right at the foot of the building: the ideal base for exploring the city on foot. Enjoy your stay! 🌷",
    de: "Willkommen bei Chez Geo! Ihr Studio liegt in einer Fußgängerzone mitten im Herzen von Caen, zwischen der Place Saint-Sauveur und der rue Saint-Pierre. Geschäfte, Cafés, Bars und Restaurants finden Sie direkt vor dem Haus: der ideale Ausgangspunkt, um die Stadt zu Fuß zu entdecken. Einen schönen Aufenthalt! 🌷",
    es: "¡Bienvenido a Chez Geo! Su estudio está en una calle peatonal en pleno corazón de Caen, entre la plaza Saint-Sauveur y la rue Saint-Pierre. Tiendas, cafés, bares y restaurantes están al pie del edificio: el lugar ideal para descubrir la ciudad a pie. ¡Que disfrute de su estancia! 🌷",
    it: "Benvenuti Chez Geo! Il vostro monolocale si trova in una via pedonale nel cuore di Caen, tra place Saint-Sauveur e rue Saint-Pierre. Negozi, caffè, bar e ristoranti sono ai piedi dell'edificio: il posto ideale per scoprire la città a piedi. Buon soggiorno! 🌷",
  },
  "Le studio se trouve au 1er étage du 20 rue de Bras (porte verte, immeuble sans ascenseur)": {
    en: "The studio is on the 1st floor of 20 rue de Bras (green door, no lift in the building)",
    de: "Das Studio liegt im 1. Stock von 20 rue de Bras (grüne Tür, Gebäude ohne Aufzug)",
    es: "El estudio está en la 1.ª planta del 20 rue de Bras (puerta verde, edificio sin ascensor)",
    it: "Il monolocale si trova al 1° piano del 20 rue de Bras (porta verde, edificio senza ascensore)",
  },
  "⚠️ Dans la vidéo, on vous demande d'appeler un numéro : ce n'est plus nécessaire. Appuyez simplement sur le bouton « GEO » de l'interphone et la porte s'ouvre": {
    en: "⚠️ The video asks you to call a number: this is no longer needed. Just press the « GEO » button on the intercom and the door opens",
    de: "⚠️ Im Video werden Sie gebeten, eine Nummer anzurufen: Das ist nicht mehr nötig. Drücken Sie einfach den Knopf « GEO » an der Sprechanlage, und die Tür öffnet sich",
    es: "⚠️ En el vídeo se le pide que llame a un número: ya no es necesario. Basta con pulsar el botón « GEO » del portero automático y la puerta se abre",
    it: "⚠️ Nel video vi viene chiesto di chiamare un numero: non è più necessario. Basta premere il pulsante « GEO » del citofono e la porta si apre",
  },
  "Rendez-vous au 20 rue de Bras, entre le fleuriste et le café : c'est la porte verte.": {
    en: "Go to 20 rue de Bras, between the florist and the café: it's the green door.",
    de: "Gehen Sie zu 20 rue de Bras, zwischen dem Blumenladen und dem Café: Es ist die grüne Tür.",
    es: "Diríjase al 20 rue de Bras, entre la floristería y el café: es la puerta verde.",
    it: "Recatevi al 20 rue de Bras, tra il fioraio e il caffè: è la porta verde.",
  },
  "Appuyez sur le bouton « GEO » de l'interphone (juste à droite de l'étiquette GEO, en haut à gauche) : la porte s'ouvre, il suffit de la pousser.": {
    en: "Press the « GEO » button on the intercom (just to the right of the GEO label, top left): the door unlocks, just push it open.",
    de: "Drücken Sie den Knopf « GEO » an der Sprechanlage (direkt rechts neben dem Schild GEO, oben links): Die Tür öffnet sich, Sie müssen sie nur aufdrücken.",
    es: "Pulse el botón « GEO » del portero automático (justo a la derecha de la etiqueta GEO, arriba a la izquierda): la puerta se abre, solo tiene que empujarla.",
    it: "Premete il pulsante « GEO » del citofono (subito a destra dell'etichetta GEO, in alto a sinistra): la porta si apre, basta spingerla.",
  },
  "Dans le couloir, prenez la première porte à gauche et montez au 1er étage : votre porte est juste en face, avec la boîte à clés au-dessus de la poignée.": {
    en: "In the hallway, take the first door on the left and go up to the 1st floor: your door is straight ahead, with the key box above the handle.",
    de: "Nehmen Sie im Flur die erste Tür links und gehen Sie hinauf in den 1. Stock: Ihre Tür ist direkt gegenüber, mit der Schlüsselbox über der Klinke.",
    es: "En el pasillo, tome la primera puerta a la izquierda y suba a la 1.ª planta: su puerta está justo enfrente, con la caja de llaves encima de la manilla.",
    it: "Nel corridoio prendete la prima porta a sinistra e salite al 1° piano: la vostra porta è proprio di fronte, con la cassetta portachiavi sopra la maniglia.",
  },
  "Composez le code reçu par message et appuyez en même temps sur les boutons latéraux pour ouvrir la boîte. Récupérez les clés, refermez la boîte et brouillez le code.": {
    en: "Enter the code you received by message and press both side buttons at the same time to open the box. Take the keys, close the box and scramble the code.",
    de: "Geben Sie den per Nachricht erhaltenen Code ein und drücken Sie gleichzeitig die seitlichen Knöpfe, um die Box zu öffnen. Nehmen Sie die Schlüssel, schließen Sie die Box und verstellen Sie den Code.",
    es: "Marque el código recibido por mensaje y pulse a la vez los botones laterales para abrir la caja. Recoja las llaves, cierre la caja y desordene el código.",
    it: "Digitate il codice ricevuto via messaggio e premete contemporaneamente i pulsanti laterali per aprire la cassetta. Prendete le chiavi, richiudete la cassetta e mescolate il codice.",
  },
  "Ouvrez la porte avec la clé. Bienvenue chez vous ! 🙂 Pour vos allers-retours, le badge du trousseau ouvre la porte de l'immeuble : passez-le sur le bouton noir de l'interphone.": {
    en: "Open the door with the key. Welcome home! 🙂 For coming and going, the fob on the key ring opens the building door: hold it against the black button on the intercom.",
    de: "Öffnen Sie die Tür mit dem Schlüssel. Willkommen zu Hause! 🙂 Für das Kommen und Gehen öffnet der Chip am Schlüsselbund die Haustür: Halten Sie ihn an den schwarzen Knopf der Sprechanlage.",
    es: "Abra la puerta con la llave. ¡Bienvenido a casa! 🙂 Para entrar y salir, la tarjeta del llavero abre la puerta del edificio: pásela por el botón negro del portero automático.",
    it: "Aprite la porta con la chiave. Benvenuti a casa! 🙂 Per entrare e uscire, il badge del portachiavi apre il portone: avvicinatelo al pulsante nero del citofono.",
  },
  "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Quincampoix, rue Demolombe, rue Pasteur et rue Froide.\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr": {
    en: "Paid street parking during the day (9am-12:30pm and 2pm-7pm) on rue Quincampoix, rue Demolombe, rue Pasteur and rue Froide.\nPaid underground car parks: Mairie, Château, Paul Doumer and Place de la République. Rates: indigoneo.fr",
    de: "Gebührenpflichtiges Parken tagsüber (9-12:30 Uhr und 14-19 Uhr) in der rue Quincampoix, rue Demolombe, rue Pasteur und rue Froide.\nGebührenpflichtige Tiefgaragen: Mairie, Château, Paul Doumer und Place de la République. Tarife: indigoneo.fr",
    es: "Aparcamiento de pago durante el día (9h-12h30 y 14h-19h) en la rue Quincampoix, rue Demolombe, rue Pasteur y rue Froide.\nAparcamientos subterráneos de pago: Mairie, Château, Paul Doumer y plaza de la République. Tarifas: indigoneo.fr",
    it: "Parcheggio a pagamento durante il giorno (9-12:30 e 14-19) in rue Quincampoix, rue Demolombe, rue Pasteur e rue Froide.\nParcheggi sotterranei a pagamento: Mairie, Château, Paul Doumer e place de la République. Tariffe: indigoneo.fr",
  },
  "Pièce principale avec lit double, coin dressing et TV connectée": {
    en: "Main room with double bed, dressing area and smart TV",
    de: "Hauptraum mit Doppelbett, Ankleidebereich und Smart-TV",
    es: "Estancia principal con cama doble, zona de vestidor y televisión inteligente",
    it: "Stanza principale con letto matrimoniale, angolo guardaroba e smart TV",
  },
  "Kitchenette équipée (plaque de cuisson, micro-ondes, bouilloire, grille-pain et machine Nespresso)": {
    en: "Equipped kitchenette (hob, microwave, kettle, toaster and Nespresso machine)",
    de: "Ausgestattete Küchenzeile (Kochfeld, Mikrowelle, Wasserkocher, Toaster und Nespresso-Maschine)",
    es: "Cocina americana equipada (placa de cocción, microondas, hervidor, tostadora y cafetera Nespresso)",
    it: "Angolo cottura attrezzato (piano cottura, microonde, bollitore, tostapane e macchina Nespresso)",
  },
  "Dans une rue piétonne : commerces, bars et restaurants au pied de l'immeuble": {
    en: "On a pedestrian street: shops, bars and restaurants right at the foot of the building",
    de: "In einer Fußgängerzone: Geschäfte, Bars und Restaurants direkt vor dem Haus",
    es: "En una calle peatonal: tiendas, bares y restaurantes al pie del edificio",
    it: "In una via pedonale: negozi, bar e ristoranti ai piedi dell'edificio",
  },
  "1. Appuyez sur le bouton On/Off pour allumer le téléviseur.\n2. Avec la même télécommande, sélectionnez l'application « Molotov TV », puis appuyez sur OK.\n3. Utilisez cette télécommande pour changer de chaîne et régler le volume.\n4. Si l'interface ne s'affiche pas, appuyez sur le bouton en forme de maison (Home) pour revenir à l'écran d'accueil.": {
    en: "1. Press the On/Off button to turn on the TV.\n2. With the same remote, select the « Molotov TV » app and press OK.\n3. Use this remote to change channels and adjust the volume.\n4. If the interface doesn't appear, press the house-shaped (Home) button to go back to the home screen.",
    de: "1. Drücken Sie die Ein/Aus-Taste, um den Fernseher einzuschalten.\n2. Wählen Sie mit derselben Fernbedienung die App « Molotov TV » und drücken Sie OK.\n3. Mit dieser Fernbedienung wechseln Sie die Sender und regeln die Lautstärke.\n4. Wenn die Oberfläche nicht erscheint, drücken Sie die Taste mit dem Haus-Symbol (Home), um zum Startbildschirm zurückzukehren.",
    es: "1. Pulse el botón On/Off para encender el televisor.\n2. Con el mismo mando, seleccione la aplicación « Molotov TV » y pulse OK.\n3. Use este mando para cambiar de canal y ajustar el volumen.\n4. Si la interfaz no aparece, pulse el botón con forma de casa (Home) para volver a la pantalla de inicio.",
    it: "1. Premete il tasto On/Off per accendere il televisore.\n2. Con lo stesso telecomando selezionate l'app « Molotov TV », poi premete OK.\n3. Usate questo telecomando per cambiare canale e regolare il volume.\n4. Se l'interfaccia non compare, premete il tasto a forma di casetta (Home) per tornare alla schermata iniziale.",
  },
  "Un aspirateur et une serpillière sont à votre disposition dans le dressing.": {
    en: "A vacuum cleaner and a floor cloth are available in the dressing area.",
    de: "Ein Staubsauger und ein Wischtuch stehen Ihnen in der Ankleide zur Verfügung.",
    es: "Tiene a su disposición una aspiradora y una fregona en el vestidor.",
    it: "Un aspirapolvere e uno straccio per pavimenti sono a vostra disposizione nel guardaroba.",
  },
  "Les poubelles sont à déposer dans les bacs situés dans le couloir des parties communes. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 12 rue Pierre Aimé Lair": {
    en: "Please take your rubbish to the bins in the shared hallway of the building. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 12 rue Pierre Aimé Lair",
    de: "Bitte bringen Sie den Müll zu den Tonnen im Flur des Gemeinschaftsbereichs. Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container in der 12 rue Pierre Aimé Lair",
    es: "Deposite la basura en los contenedores situados en el pasillo de las zonas comunes. Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 12 rue Pierre Aimé Lair",
    it: "I rifiuti vanno gettati nei bidoni situati nel corridoio delle parti comuni. Vi preghiamo di fare con cura la raccolta differenziata:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore al 12 rue Pierre Aimé Lair",
  },
};
