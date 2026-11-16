import type { Tr } from "../i18n-content";
import { studio48Tr } from "./studio48";

/**
 * Traductions du livret « 10ABC » (10 rue de Maltot, Caen — logements 10A,
 * 10B et 10C). Reprend les textes partagés des autres livrets de cette série
 * (`...studio48Tr`). Clé = texte français EXACT.
 */
export const maltot10Tr: Record<string, Tr> = {
  ...studio48Tr,

  "Bienvenue au 10 rue de Maltot ! Votre logement se trouve dans une jolie maison en briques rouges, dans un quartier résidentiel calme où l'on se gare facilement. Le centre historique de Caen et l'Abbaye aux Hommes sont à un quart d'heure à pied. Très bon séjour ! 🧱": {
    en: "Welcome to 10 rue de Maltot! Your home is in a lovely red-brick house, in a quiet residential area where parking is easy. Caen's historic centre and the Abbaye aux Hommes are a quarter of an hour's walk away. Enjoy your stay! 🧱",
    de: "Willkommen in der 10 rue de Maltot! Ihre Unterkunft liegt in einem hübschen Backsteinhaus in einem ruhigen Wohnviertel, in dem man leicht parken kann. Das historische Zentrum von Caen und die Abbaye aux Hommes sind eine Viertelstunde zu Fuß entfernt. Einen schönen Aufenthalt! 🧱",
    es: "¡Bienvenido al 10 rue de Maltot! Su alojamiento está en una bonita casa de ladrillo rojo, en un barrio residencial tranquilo donde es fácil aparcar. El centro histórico de Caen y la Abbaye aux Hommes están a un cuarto de hora a pie. ¡Que disfrute de su estancia! 🧱",
    it: "Benvenuti al 10 rue de Maltot! Il vostro alloggio si trova in una graziosa casa di mattoni rossi, in un quartiere residenziale tranquillo dove è facile parcheggiare. Il centro storico di Caen e l'Abbaye aux Hommes sono a un quarto d'ora a piedi. Buon soggiorno! 🧱",
  },
  "Votre logement (10A, 10B ou 10C) se trouve au 10 rue de Maltot, dans une maison en briques rouges": {
    en: "Your home (10A, 10B or 10C) is at 10 rue de Maltot, in a red-brick house",
    de: "Ihre Unterkunft (10A, 10B oder 10C) befindet sich in der 10 rue de Maltot, in einem roten Backsteinhaus",
    es: "Su alojamiento (10A, 10B o 10C) está en el 10 rue de Maltot, en una casa de ladrillo rojo",
    it: "Il vostro alloggio (10A, 10B o 10C) si trova al 10 rue de Maltot, in una casa di mattoni rossi",
  },
  "Toutes les instructions d'arrivée (numéro du logement, accès et code de la boîte à clés) vous sont envoyées la veille de votre arrivée, dans la messagerie de votre plateforme de réservation (Airbnb, Booking…)": {
    en: "All the arrival instructions (unit number, access and key box code) are sent to you the day before you arrive, in the messaging of your booking platform (Airbnb, Booking…)",
    de: "Alle Anreiseinformationen (Nummer der Unterkunft, Zugang und Code der Schlüsselbox) erhalten Sie am Vortag Ihrer Ankunft über die Nachrichtenfunktion Ihrer Buchungsplattform (Airbnb, Booking…)",
    es: "Todas las instrucciones de llegada (número del alojamiento, acceso y código de la caja de llaves) se le envían la víspera de su llegada, en la mensajería de su plataforma de reserva (Airbnb, Booking…)",
    it: "Tutte le istruzioni di arrivo (numero dell'alloggio, accesso e codice della cassetta portachiavi) vi vengono inviate il giorno prima del vostro arrivo, nella messaggistica della vostra piattaforma di prenotazione (Airbnb, Booking…)",
  },
  "Rendez-vous au 10 rue de Maltot : c'est la maison en briques rouges.": {
    en: "Go to 10 rue de Maltot: it's the red-brick house.",
    de: "Gehen Sie zu 10 rue de Maltot: Es ist das rote Backsteinhaus.",
    es: "Diríjase al 10 rue de Maltot: es la casa de ladrillo rojo.",
    it: "Recatevi al 10 rue de Maltot: è la casa di mattoni rossi.",
  },
  "Suivez ensuite les instructions reçues la veille de votre arrivée dans la messagerie de votre plateforme de réservation. Bienvenue chez vous ! 🙂": {
    en: "Then follow the instructions you received the day before your arrival in the messaging of your booking platform. Welcome home! 🙂",
    de: "Folgen Sie dann den Anweisungen, die Sie am Vortag Ihrer Ankunft über die Nachrichtenfunktion Ihrer Buchungsplattform erhalten haben. Willkommen zu Hause! 🙂",
    es: "Siga después las instrucciones recibidas la víspera de su llegada en la mensajería de su plataforma de reserva. ¡Bienvenido a casa! 🙂",
    it: "Seguite poi le istruzioni ricevute il giorno prima del vostro arrivo nella messaggistica della vostra piattaforma di prenotazione. Benvenuti a casa! 🙂",
  },
  "Stationnement gratuit rue de Maltot, venelle aux Loups, rue Caponière (à partir du bar-tabac), rue du Mesnil et rue de Bretteville.\nParkings souterrains payants dans le centre : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr": {
    en: "Free street parking on rue de Maltot, venelle aux Loups, rue Caponière (from the bar-tobacconist onwards), rue du Mesnil and rue de Bretteville.\nPaid underground car parks in the centre: Mairie, Château, Paul Doumer and Place de la République. Rates: indigoneo.fr",
    de: "Kostenloses Parken in der rue de Maltot, venelle aux Loups, rue Caponière (ab der Bar mit Tabakladen), rue du Mesnil und rue de Bretteville.\nGebührenpflichtige Tiefgaragen im Zentrum: Mairie, Château, Paul Doumer und Place de la République. Tarife: indigoneo.fr",
    es: "Aparcamiento gratuito en la rue de Maltot, venelle aux Loups, rue Caponière (a partir del bar-estanco), rue du Mesnil y rue de Bretteville.\nAparcamientos subterráneos de pago en el centro: Mairie, Château, Paul Doumer y plaza de la République. Tarifas: indigoneo.fr",
    it: "Parcheggio gratuito in rue de Maltot, venelle aux Loups, rue Caponière (a partire dal bar-tabaccheria), rue du Mesnil e rue de Bretteville.\nParcheggi sotterranei a pagamento in centro: Mairie, Château, Paul Doumer e place de la République. Tariffe: indigoneo.fr",
  },
  "Espace de vie chaleureux avec salon et TV connectée": {
    en: "Cosy living area with lounge and smart TV",
    de: "Gemütlicher Wohnbereich mit Sitzecke und Smart-TV",
    es: "Acogedora sala de estar con salón y televisión inteligente",
    it: "Accogliente zona giorno con salotto e smart TV",
  },
  "Cuisine entièrement équipée (four, micro-ondes, plaques de cuisson, hotte, machine Nespresso et bouilloire)": {
    en: "Fully equipped kitchen (oven, microwave, hob, extractor hood, Nespresso machine and kettle)",
    de: "Voll ausgestattete Küche (Backofen, Mikrowelle, Kochfeld, Dunstabzug, Nespresso-Maschine und Wasserkocher)",
    es: "Cocina totalmente equipada (horno, microondas, placa de cocción, campana, cafetera Nespresso y hervidor)",
    it: "Cucina completamente attrezzata (forno, microonde, piano cottura, cappa, macchina Nespresso e bollitore)",
  },
  "Chambres, avec les couchages prévus pour le nombre de voyageurs indiqué à la réservation": {
    en: "Bedrooms, with the beds set up for the number of guests given when booking",
    de: "Schlafzimmer, mit den Betten für die bei der Buchung angegebene Anzahl an Gästen",
    es: "Dormitorios, con las camas previstas para el número de huéspedes indicado en la reserva",
    it: "Camere, con i posti letto previsti per il numero di ospiti indicato al momento della prenotazione",
  },
  "Salle de douche": {
    en: "Shower room",
    de: "Duschbad",
    es: "Cuarto de ducha",
    it: "Bagno con doccia",
  },
  "🏠 10A, 10B ou 10C": {
    en: "🏠 10A, 10B or 10C",
    de: "🏠 10A, 10B oder 10C",
    es: "🏠 10A, 10B o 10C",
    it: "🏠 10A, 10B o 10C",
  },
  "La maison du 10 rue de Maltot compte trois logements : 10A, 10B et 10C. Le numéro de votre logement vous est indiqué dans les instructions d'arrivée, envoyées la veille par la plateforme de réservation.": {
    en: "The house at 10 rue de Maltot has three units: 10A, 10B and 10C. Your unit number is given in the arrival instructions, sent the day before via the booking platform.",
    de: "Das Haus in der 10 rue de Maltot umfasst drei Unterkünfte: 10A, 10B und 10C. Die Nummer Ihrer Unterkunft steht in den Anreiseinformationen, die Sie am Vortag über die Buchungsplattform erhalten.",
    es: "La casa del 10 rue de Maltot tiene tres alojamientos: 10A, 10B y 10C. El número de su alojamiento se indica en las instrucciones de llegada, enviadas la víspera por la plataforma de reserva.",
    it: "La casa al 10 rue de Maltot comprende tre alloggi: 10A, 10B e 10C. Il numero del vostro alloggio è indicato nelle istruzioni di arrivo, inviate il giorno prima tramite la piattaforma di prenotazione.",
  },
  "Les draps sont fournis pour tous les lits. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.": {
    en: "Bed linen is provided for all the beds. Each guest has a bath towel. A bath mat and a tea towel are also provided.",
    de: "Bettwäsche wird für alle Betten gestellt. Jeder Gast erhält ein Handtuch. Eine Badematte und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
    es: "Se proporcionan sábanas para todas las camas. Cada huésped dispone de una toalla. También hay una alfombrilla de baño y un paño de cocina.",
    it: "Le lenzuola sono fornite per tutti i letti. Ogni ospite ha un asciugamano. Sono a disposizione anche un tappetino da bagno e uno strofinaccio da cucina.",
  },
  "1. Allumez la télévision avec sa télécommande (bouton Power rouge).\n2. Allumez ensuite le décodeur avec la télécommande de la box (bouton Power rouge), puis sélectionnez l'application « Orange TV » et validez avec le bouton central OK.\n3. Utilisez cette même télécommande pour régler le volume et changer de chaîne.": {
    en: "1. Turn on the TV with its remote (red Power button).\n2. Then turn on the set-top box with the box remote (red Power button), select the « Orange TV » app and confirm with the central OK button.\n3. Use this same remote to adjust the volume and change channels.",
    de: "1. Schalten Sie den Fernseher mit seiner Fernbedienung ein (rote Power-Taste).\n2. Schalten Sie dann den Decoder mit der Fernbedienung der Box ein (rote Power-Taste), wählen Sie die App « Orange TV » und bestätigen Sie mit der mittleren OK-Taste.\n3. Mit derselben Fernbedienung regeln Sie die Lautstärke und wechseln die Sender.",
    es: "1. Encienda el televisor con su mando (botón Power rojo).\n2. Encienda después el decodificador con el mando de la box (botón Power rojo), seleccione la aplicación « Orange TV » y confirme con el botón central OK.\n3. Use este mismo mando para ajustar el volumen y cambiar de canal.",
    it: "1. Accendete il televisore con il suo telecomando (tasto Power rosso).\n2. Accendete poi il decoder con il telecomando della box (tasto Power rosso), selezionate l'app « Orange TV » e confermate con il tasto centrale OK.\n3. Usate lo stesso telecomando per regolare il volume e cambiare canale.",
  },
  "Pour allumer les radiateurs, appuyez sur le bouton On/Off, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.\n💡 Les touches tactiles des radiateurs sont parfois capricieuses : effleurez ou appuyez deux fois de suite sur le bouton On/Off pour les allumer.": {
    en: "To turn on the radiators, press the On/Off button, then set the temperature with the arrows. Please be mindful of your energy use.\n💡 The radiators' touch buttons can be a little temperamental: tap or press the On/Off button twice in a row to switch them on.",
    de: "Um die Heizkörper einzuschalten, drücken Sie die Ein/Aus-Taste und stellen Sie die Temperatur mit den Pfeiltasten ein. Bitte achten Sie auf einen sparsamen Verbrauch.\n💡 Die Touch-Tasten der Heizkörper reagieren manchmal etwas launisch: Tippen Sie die Ein/Aus-Taste zweimal hintereinander an, um sie einzuschalten.",
    es: "Para encender los radiadores, pulse el botón On/Off y ajuste la temperatura con las flechas. Le rogamos que modere el consumo.\n💡 Los botones táctiles de los radiadores a veces son caprichosos: roce o pulse dos veces seguidas el botón On/Off para encenderlos.",
    it: "Per accendere i radiatori, premete il tasto On/Off, poi regolate la temperatura con le frecce. Vi preghiamo di limitare i consumi.\n💡 I tasti touch dei radiatori a volte sono un po' capricciosi: sfiorate o premete due volte di seguito il tasto On/Off per accenderli.",
  },
  "Un aspirateur se trouve dans le placard de la pièce de vie.": {
    en: "There's a vacuum cleaner in the cupboard in the living area.",
    de: "Ein Staubsauger befindet sich im Schrank im Wohnbereich.",
    es: "Hay una aspiradora en el armario de la sala de estar.",
    it: "C'è un aspirapolvere nell'armadio della zona giorno.",
  },
  "Les poubelles sont à déposer dans les bacs situés dehors, juste à côté du logement. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 160 rue Caponière": {
    en: "Please take your rubbish to the bins outside, right next to the house. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 160 rue Caponière",
    de: "Bitte bringen Sie den Müll zu den Tonnen draußen, direkt neben der Unterkunft. Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container in der 160 rue Caponière",
    es: "Deposite la basura en los contenedores de fuera, justo al lado del alojamiento. Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 160 rue Caponière",
    it: "I rifiuti vanno gettati nei bidoni all'esterno, proprio accanto all'alloggio. Vi preghiamo di fare con cura la raccolta differenziata:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore al 160 rue Caponière",
  },
  "Stationnement gratuit dans la rue": {
    en: "Free street parking",
    de: "Kostenloses Parken auf der Straße",
    es: "Aparcamiento gratuito en la calle",
    it: "Parcheggio gratuito in strada",
  },
  "Boulangeries et supérettes, rue Caponière et rue Saint-Ouen (~5 min)": {
    en: "Bakeries and convenience stores, rue Caponière and rue Saint-Ouen (~5 min)",
    de: "Bäckereien und kleine Supermärkte, rue Caponière und rue Saint-Ouen (~5 Min.)",
    es: "Panaderías y supermercados de proximidad, rue Caponière y rue Saint-Ouen (~5 min)",
    it: "Panetterie e minimarket, rue Caponière e rue Saint-Ouen (~5 min)",
  },
  "Zénith & Palais des Sports (~8 min)": {
    en: "Zénith concert hall & Palais des Sports (~8 min)",
    de: "Zénith (Konzerthalle) & Palais des Sports (~8 Min.)",
    es: "Zénith (sala de conciertos) y Palais des Sports (~8 min)",
    it: "Zénith (sala concerti) e Palais des Sports (~8 min)",
  },
  "Abbaye aux Hommes & hôtel de ville (~15 min)": {
    en: "Abbaye aux Hommes & town hall (~15 min)",
    de: "Abbaye aux Hommes & Rathaus (~15 Min.)",
    es: "Abbaye aux Hommes y ayuntamiento (~15 min)",
    it: "Abbaye aux Hommes e municipio (~15 min)",
  },
  "Rue Écuyère — bars & restaurants (~18 min)": {
    en: "Rue Écuyère — bars & restaurants (~18 min)",
    de: "Rue Écuyère — Bars & Restaurants (~18 Min.)",
    es: "Rue Écuyère — bares y restaurantes (~18 min)",
    it: "Rue Écuyère — bar e ristoranti (~18 min)",
  },
  "Place Saint-Sauveur — cafés & marché du vendredi (~18 min)": {
    en: "Place Saint-Sauveur — cafés & Friday market (~18 min)",
    de: "Place Saint-Sauveur — Cafés & Freitagsmarkt (~18 Min.)",
    es: "Plaza Saint-Sauveur — cafés y mercado del viernes (~18 min)",
    it: "Place Saint-Sauveur — caffè e mercato del venerdì (~18 min)",
  },
  "Vous êtes dans un quartier résidentiel calme, au sud-ouest du centre-ville, où l'on se gare facilement et gratuitement. Boulangeries et supérettes sont à quelques minutes à pied, et le centre historique se rejoint en un quart d'heure à pied ou en bus.": {
    en: "You're in a quiet residential area south-west of the town centre, where parking is easy and free. Bakeries and convenience stores are a few minutes' walk away, and the historic centre is a quarter of an hour on foot or a short bus ride.",
    de: "Sie wohnen in einem ruhigen Wohnviertel südwestlich der Innenstadt, wo man leicht und kostenlos parken kann. Bäckereien und kleine Supermärkte sind wenige Gehminuten entfernt, und das historische Zentrum erreichen Sie in einer Viertelstunde zu Fuß oder mit dem Bus.",
    es: "Está en un barrio residencial tranquilo, al suroeste del centro, donde se aparca fácilmente y gratis. Panaderías y supermercados de proximidad están a pocos minutos a pie, y al centro histórico se llega en un cuarto de hora a pie o en autobús.",
    it: "Siete in un quartiere residenziale tranquillo, a sud-ovest del centro, dove si parcheggia facilmente e gratuitamente. Panetterie e minimarket sono a pochi minuti a piedi, e il centro storico si raggiunge in un quarto d'ora a piedi o in autobus.",
  },
  "Supérette, rue Caponière.": {
    en: "Convenience store, rue Caponière.",
    de: "Kleiner Supermarkt, rue Caponière.",
    es: "Supermercado de proximidad, rue Caponière.",
    it: "Minimarket, rue Caponière.",
  },
  "Supérette, rue Saint-Ouen.": {
    en: "Convenience store, rue Saint-Ouen.",
    de: "Kleiner Supermarkt, rue Saint-Ouen.",
    es: "Supermercado de proximidad, rue Saint-Ouen.",
    it: "Minimarket, rue Saint-Ouen.",
  },
  "Boulangerie, rue Caponière.": {
    en: "Bakery, rue Caponière.",
    de: "Bäckerei, rue Caponière.",
    es: "Panadería, rue Caponière.",
    it: "Panetteria, rue Caponière.",
  },
  "Boulangerie-pâtisserie, rue Eugène Maës.": {
    en: "Bakery and pastry shop, rue Eugène Maës.",
    de: "Bäckerei und Konditorei, rue Eugène Maës.",
    es: "Panadería y pastelería, rue Eugène Maës.",
    it: "Panetteria e pasticceria, rue Eugène Maës.",
  },
  "Coup de cœur d'Agathe : pâtisserie et café gourmand, avenue Henry Chéron.": {
    en: "One of Agathe's favourites: pastries and café gourmand, avenue Henry Chéron.",
    de: "Agathes Lieblingsadresse: Konditorei und Café gourmand, avenue Henry Chéron.",
    es: "Uno de los favoritos de Agathe: pastelería y café gourmand, avenue Henry Chéron.",
    it: "Uno dei preferiti di Agathe: pasticceria e café gourmand, avenue Henry Chéron.",
  },
  "Boulangerie, boulevard Yves Guillou.": {
    en: "Bakery, boulevard Yves Guillou.",
    de: "Bäckerei, boulevard Yves Guillou.",
    es: "Panadería, boulevard Yves Guillou.",
    it: "Panetteria, boulevard Yves Guillou.",
  },
  "Primeur, boulevard Yves Guillou.": {
    en: "Greengrocer, boulevard Yves Guillou.",
    de: "Obst- und Gemüsehändler, boulevard Yves Guillou.",
    es: "Frutería, boulevard Yves Guillou.",
    it: "Fruttivendolo, boulevard Yves Guillou.",
  },
  "La pharmacie la plus proche, rue du Blanc. Pharmacie de garde : composez le 3237.": {
    en: "The nearest pharmacy, rue du Blanc. On-duty pharmacy: dial 3237.",
    de: "Die nächste Apotheke, rue du Blanc. Notdienstapotheke: Wählen Sie 3237.",
    es: "La farmacia más cercana, rue du Blanc. Farmacia de guardia: marque el 3237.",
    it: "La farmacia più vicina, rue du Blanc. Farmacia di turno: componete il 3237.",
  },
  "Tabac-presse, rue Saint-Ouen.": {
    en: "Tobacconist and newsagent, rue Saint-Ouen.",
    de: "Tabak- und Zeitschriftenladen, rue Saint-Ouen.",
    es: "Estanco y prensa, rue Saint-Ouen.",
    it: "Tabaccheria ed edicola, rue Saint-Ouen.",
  },
  "Bar-tabac, rue Caponière.": {
    en: "Bar and tobacconist, rue Caponière.",
    de: "Bar mit Tabakladen, rue Caponière.",
    es: "Bar-estanco, rue Caponière.",
    it: "Bar-tabaccheria, rue Caponière.",
  },
  "Pour un goûter gourmand, filez chez Bibiche, la pâtisserie coup de cœur d'Agathe, à 8 minutes à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur, dans le centre. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon et A Contre Sens. Pour un verre : Nonna ou Âmbar.": {
    en: "For a sweet treat, head to Bibiche, Agathe's favourite pastry shop, an 8-minute walk away. On Friday morning, don't miss the market on Place Saint-Sauveur in the centre. For eating out, Agathe's favourite spots: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon and A Contre Sens. For a drink: Nonna or Âmbar.",
    de: "Für eine süße Pause gehen Sie zu Bibiche, Agathes Lieblingskonditorei, 8 Gehminuten entfernt. Verpassen Sie am Freitagmorgen nicht den Markt auf der Place Saint-Sauveur im Zentrum. Zum Essen Agathes Lieblingsadressen: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon und A Contre Sens. Auf einen Drink: Nonna oder Âmbar.",
    es: "Para una merienda golosa, vaya a Bibiche, la pastelería favorita de Agathe, a 8 minutos a pie. El viernes por la mañana, no se pierda el mercado de la plaza Saint-Sauveur, en el centro. Para comer, los sitios preferidos de Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon y A Contre Sens. Para tomar algo: Nonna o Âmbar.",
    it: "Per una merenda golosa, andate da Bibiche, la pasticceria preferita di Agathe, a 8 minuti a piedi. Il venerdì mattina non perdetevi il mercato di place Saint-Sauveur, in centro. Per mangiare, gli indirizzi preferiti di Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, Koboon e A Contre Sens. Per un drink: Nonna o Âmbar.",
  },
};
