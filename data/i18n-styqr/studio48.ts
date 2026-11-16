import type { Tr } from "../i18n-content";
import { desmoueuxTr } from "./desmoueux";

/**
 * Traductions du livret « Studio 48 » (48 rue de Bayeux, Caen).
 * Reprend les textes partagés des livrets Chez Johan, Vauquelin, Chez Geo et
 * Desmoueux (`...desmoueuxTr`). L'anglais s'appuie sur la traduction déjà
 * présente dans StyQR. Clé = texte français EXACT.
 */
export const studio48Tr: Record<string, Tr> = {
  ...desmoueuxTr,

  "Bienvenue au Studio 48 ! Votre studio se trouve au rez-de-chaussée, rue de Bayeux, à deux pas de l'Abbaye aux Hommes. Cafés, restaurants et commerces sont tout proches, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰": {
    en: "Welcome to Studio 48! Your studio is on the ground floor on rue de Bayeux, a stone's throw from the Abbaye aux Hommes. Cafés, restaurants and shops are close by, and Caen's historic centre is easy to explore on foot. Enjoy your stay! 🏰",
    de: "Willkommen im Studio 48! Ihr Studio liegt im Erdgeschoss in der rue de Bayeux, nur wenige Schritte von der Abbaye aux Hommes entfernt. Cafés, Restaurants und Geschäfte sind ganz in der Nähe, und das historische Zentrum von Caen lässt sich bequem zu Fuß entdecken. Einen schönen Aufenthalt! 🏰",
    es: "¡Bienvenido al Studio 48! Su estudio está en la planta baja, en la rue de Bayeux, a dos pasos de la Abbaye aux Hommes. Cafés, restaurantes y tiendas están muy cerca, y el centro histórico de Caen se descubre a pie. ¡Que disfrute de su estancia! 🏰",
    it: "Benvenuti allo Studio 48! Il vostro monolocale si trova al piano terra, in rue de Bayeux, a due passi dall'Abbaye aux Hommes. Caffè, ristoranti e negozi sono vicinissimi, e il centro storico di Caen si scopre a piedi. Buon soggiorno! 🏰",
  },
  "Le studio se trouve au rez-de-chaussée du 48 rue de Bayeux, derrière la porte verte": {
    en: "The studio is on the ground floor of 48 rue de Bayeux, behind the green door",
    de: "Das Studio liegt im Erdgeschoss von 48 rue de Bayeux, hinter der grünen Tür",
    es: "El estudio está en la planta baja del 48 rue de Bayeux, detrás de la puerta verde",
    it: "Il monolocale si trova al piano terra del 48 rue de Bayeux, dietro la porta verde",
  },
  "Suivez les étapes ci-dessous pour accéder au studio": {
    en: "Follow the steps below to get into the studio",
    de: "Folgen Sie den Schritten unten, um ins Studio zu gelangen",
    es: "Siga los pasos que se indican a continuación para acceder al estudio",
    it: "Seguite i passaggi qui sotto per accedere al monolocale",
  },
  "Rendez-vous au 48 rue de Bayeux.": {
    en: "Go to 48 rue de Bayeux.",
    de: "Gehen Sie zu 48 rue de Bayeux.",
    es: "Diríjase al 48 rue de Bayeux.",
    it: "Recatevi al 48 rue de Bayeux.",
  },
  "La boîte à clés se trouve à côté de la porte verte. Composez le code reçu par message, puis baissez le loquet noir pour ouvrir la boîte.": {
    en: "The key box is next to the green door. Enter the code you received by message, then pull down the black latch to open the box.",
    de: "Die Schlüsselbox befindet sich neben der grünen Tür. Geben Sie den per Nachricht erhaltenen Code ein und ziehen Sie dann den schwarzen Riegel nach unten, um die Box zu öffnen.",
    es: "La caja de llaves está junto a la puerta verde. Marque el código recibido por mensaje y baje el pestillo negro para abrir la caja.",
    it: "La cassetta portachiavi si trova accanto alla porta verde. Digitate il codice ricevuto via messaggio, poi abbassate la levetta nera per aprire la cassetta.",
  },
  "Récupérez la clé, refermez la boîte et brouillez le code.": {
    en: "Take the key, close the box and scramble the code.",
    de: "Nehmen Sie den Schlüssel, schließen Sie die Box und verstellen Sie den Code.",
    es: "Recoja la llave, cierre la caja y desordene el código.",
    it: "Prendete la chiave, richiudete la cassetta e mescolate il codice.",
  },
  "Ouvrez la porte verte avec la clé : le studio est au rez-de-chaussée. Bienvenue chez vous ! 💐": {
    en: "Open the green door with the key: the studio is on the ground floor. Welcome home! 💐",
    de: "Öffnen Sie die grüne Tür mit dem Schlüssel: Das Studio liegt im Erdgeschoss. Willkommen zu Hause! 💐",
    es: "Abra la puerta verde con la llave: el estudio está en la planta baja. ¡Bienvenido a casa! 💐",
    it: "Aprite la porta verde con la chiave: il monolocale è al piano terra. Benvenuti a casa! 💐",
  },
  "Stationnement payant en journée (9h-12h30 et 14h-19h) rue de Bayeux (gratuit au-delà du Carrefour Express), rue Guillaume le Conquérant, rue Caponière et rue Saint-Martin.\nStationnement gratuit rue Bicoquet, rue Caponière (après le coiffeur Henriette), rue Neuve Bourg l'Abbé, rue de Bretagne, rue de l'Académie et rue d'Hastings.\nParkings souterrains payants : Mairie et Paul Doumer. Tarifs : indigoneo.fr": {
    en: "Paid street parking during the day (9am-12:30pm and 2pm-7pm) on rue de Bayeux (free beyond the Carrefour Express), rue Guillaume le Conquérant, rue Caponière and rue Saint-Martin.\nFree parking on rue Bicoquet, rue Caponière (after the Henriette hairdresser), rue Neuve Bourg l'Abbé, rue de Bretagne, rue de l'Académie and rue d'Hastings.\nPaid underground car parks: Mairie and Paul Doumer. Rates: indigoneo.fr",
    de: "Gebührenpflichtiges Parken tagsüber (9-12:30 Uhr und 14-19 Uhr) in der rue de Bayeux (kostenlos hinter dem Carrefour Express), rue Guillaume le Conquérant, rue Caponière und rue Saint-Martin.\nKostenloses Parken in der rue Bicoquet, rue Caponière (nach dem Friseur Henriette), rue Neuve Bourg l'Abbé, rue de Bretagne, rue de l'Académie und rue d'Hastings.\nGebührenpflichtige Tiefgaragen: Mairie und Paul Doumer. Tarife: indigoneo.fr",
    es: "Aparcamiento de pago durante el día (9h-12h30 y 14h-19h) en la rue de Bayeux (gratuito pasado el Carrefour Express), rue Guillaume le Conquérant, rue Caponière y rue Saint-Martin.\nAparcamiento gratuito en la rue Bicoquet, rue Caponière (después de la peluquería Henriette), rue Neuve Bourg l'Abbé, rue de Bretagne, rue de l'Académie y rue d'Hastings.\nAparcamientos subterráneos de pago: Mairie y Paul Doumer. Tarifas: indigoneo.fr",
    it: "Parcheggio a pagamento durante il giorno (9-12:30 e 14-19) in rue de Bayeux (gratuito oltre il Carrefour Express), rue Guillaume le Conquérant, rue Caponière e rue Saint-Martin.\nParcheggio gratuito in rue Bicoquet, rue Caponière (dopo il parrucchiere Henriette), rue Neuve Bourg l'Abbé, rue de Bretagne, rue de l'Académie e rue d'Hastings.\nParcheggi sotterranei a pagamento: Mairie e Paul Doumer. Tariffe: indigoneo.fr",
  },
  "Espace repas et cuisine": {
    en: "Dining area and kitchen",
    de: "Essbereich und Küche",
    es: "Comedor y cocina",
    it: "Zona pranzo e cucina",
  },
  "Salle de bain avec WC": {
    en: "Bathroom with toilet",
    de: "Badezimmer mit WC",
    es: "Baño con inodoro",
    it: "Bagno con WC",
  },
  "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, du café et du thé, du produit vaisselle et une éponge.": {
    en: "On arrival you'll find: toilet paper, a mini shower gel/shampoo per person, salt and pepper, coffee and tea, washing-up liquid and a sponge.",
    de: "Bei Ihrer Ankunft finden Sie: Toilettenpapier, ein Mini-Duschgel/Shampoo pro Person, Salz und Pfeffer, Kaffee und Tee, Spülmittel und einen Schwamm.",
    es: "A su llegada encontrará: papel higiénico, un gel de ducha/champú en miniatura por persona, sal y pimienta, café y té, lavavajillas y una esponja.",
    it: "Al vostro arrivo troverete: carta igienica, un mini bagnoschiuma/shampoo a persona, sale e pepe, caffè e tè, detersivo per i piatti e una spugna.",
  },
  "Les draps sont fournis pour le canapé-lit. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.": {
    en: "Bed linen is provided for the sofa bed. Each guest has a bath towel. A bath mat and a tea towel are also provided.",
    de: "Bettwäsche für das Schlafsofa wird gestellt. Jeder Gast erhält ein Handtuch. Eine Badematte und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
    es: "Se proporcionan sábanas para el sofá cama. Cada huésped dispone de una toalla. También hay una alfombrilla de baño y un paño de cocina.",
    it: "Le lenzuola sono fornite per il divano letto. Ogni ospite ha un asciugamano. Sono a disposizione anche un tappetino da bagno e uno strofinaccio da cucina.",
  },
  "La machine à café est une cafetière à filtre. Du café vous est offert à votre arrivée.": {
    en: "The coffee machine is a drip coffee maker. Some coffee is provided on arrival.",
    de: "Die Kaffeemaschine ist eine Filterkaffeemaschine. Bei Ihrer Ankunft liegt Kaffee für Sie bereit.",
    es: "La cafetera es de filtro. A su llegada le ofrecemos café.",
    it: "La macchina del caffè è una caffettiera a filtro. Al vostro arrivo troverete del caffè in omaggio.",
  },
  "1. Appuyez sur le bouton On/Off pour allumer le téléviseur.\n2. Avec la télécommande de la box, appuyez sur On/Off pour allumer le décodeur.\n3. Utilisez ensuite la télécommande de la box pour changer de chaîne et régler le volume.": {
    en: "1. Press the On/Off button to turn on the TV.\n2. With the box remote, press On/Off to turn on the set-top box.\n3. Then use the box remote to change channels and adjust the volume.",
    de: "1. Drücken Sie die Ein/Aus-Taste, um den Fernseher einzuschalten.\n2. Schalten Sie mit der Fernbedienung der Box den Decoder über Ein/Aus ein.\n3. Mit der Fernbedienung der Box wechseln Sie dann die Sender und regeln die Lautstärke.",
    es: "1. Pulse el botón On/Off para encender el televisor.\n2. Con el mando del decodificador, pulse On/Off para encenderlo.\n3. Use después el mando del decodificador para cambiar de canal y ajustar el volumen.",
    it: "1. Premete il tasto On/Off per accendere il televisore.\n2. Con il telecomando del decoder, premete On/Off per accenderlo.\n3. Usate poi il telecomando del decoder per cambiare canale e regolare il volume.",
  },
  "Les poubelles sont à déposer dans le local poubelles de la résidence voisine, au 50 rue de Bayeux : le badge de votre trousseau de clés vous permet d'y entrer. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 4 place de l'Ancienne Boucherie": {
    en: "Please take your rubbish to the bin room of the neighbouring residence, at 50 rue de Bayeux: the fob on your key ring lets you in. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 4 place de l'Ancienne Boucherie",
    de: "Bitte bringen Sie den Müll in den Müllraum der Nachbarresidenz in der 50 rue de Bayeux: Mit dem Chip an Ihrem Schlüsselbund kommen Sie hinein. Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container an der 4 place de l'Ancienne Boucherie",
    es: "Deposite la basura en el cuarto de basuras de la residencia vecina, en el 50 rue de Bayeux: la tarjeta de su llavero le permite entrar. Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 4 place de l'Ancienne Boucherie",
    it: "I rifiuti vanno gettati nel locale rifiuti della residenza accanto, al 50 rue de Bayeux: il badge del vostro portachiavi vi permette di entrare. Vi preghiamo di fare con cura la raccolta differenziata:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore al 4 place de l'Ancienne Boucherie",
  },
  "Place de l'Ancienne Boucherie — cafés & restaurants (~3 min)": {
    en: "Place de l'Ancienne Boucherie — cafés & restaurants (~3 min)",
    de: "Place de l'Ancienne Boucherie — Cafés & Restaurants (~3 Min.)",
    es: "Plaza de l'Ancienne Boucherie — cafés y restaurantes (~3 min)",
    it: "Place de l'Ancienne Boucherie — caffè e ristoranti (~3 min)",
  },
  "Abbaye aux Hommes & hôtel de ville (~4 min)": {
    en: "Abbaye aux Hommes & town hall (~4 min)",
    de: "Abbaye aux Hommes & Rathaus (~4 Min.)",
    es: "Abbaye aux Hommes y ayuntamiento (~4 min)",
    it: "Abbaye aux Hommes e municipio (~4 min)",
  },
  "Place Saint-Martin (~6 min)": {
    en: "Place Saint-Martin (~6 min)",
    de: "Place Saint-Martin (~6 Min.)",
    es: "Plaza Saint-Martin (~6 min)",
    it: "Place Saint-Martin (~6 min)",
  },
  "Rue Écuyère — bars & restaurants (~7 min)": {
    en: "Rue Écuyère — bars & restaurants (~7 min)",
    de: "Rue Écuyère — Bars & Restaurants (~7 Min.)",
    es: "Rue Écuyère — bares y restaurantes (~7 min)",
    it: "Rue Écuyère — bar e ristoranti (~7 min)",
  },
  "Place Saint-Sauveur — cafés & marché du vendredi (~7 min)": {
    en: "Place Saint-Sauveur — cafés & Friday market (~7 min)",
    de: "Place Saint-Sauveur — Cafés & Freitagsmarkt (~7 Min.)",
    es: "Plaza Saint-Sauveur — cafés y mercado del viernes (~7 min)",
    it: "Place Saint-Sauveur — caffè e mercato del venerdì (~7 min)",
  },
  "Château de Caen (~15 min)": {
    en: "Caen Castle (~15 min)",
    de: "Burg von Caen (~15 Min.)",
    es: "Castillo de Caen (~15 min)",
    it: "Castello di Caen (~15 min)",
  },
  "Vous êtes dans le quartier de l'Abbaye aux Hommes, à l'ouest du centre historique. Supérette, boulangerie et restaurants sont à quelques pas, et la rue Écuyère, la place Saint-Sauveur et le château se rejoignent facilement à pied.": {
    en: "You're in the Abbaye aux Hommes district, west of the historic centre. A convenience store, a bakery and restaurants are just a few steps away, and rue Écuyère, Place Saint-Sauveur and the castle are an easy walk.",
    de: "Sie wohnen im Viertel der Abbaye aux Hommes, westlich des historischen Zentrums. Supermarkt, Bäckerei und Restaurants sind nur wenige Schritte entfernt, und die rue Écuyère, die Place Saint-Sauveur und die Burg erreichen Sie bequem zu Fuß.",
    es: "Está en el barrio de la Abbaye aux Hommes, al oeste del centro histórico. Supermercado, panadería y restaurantes están a pocos pasos, y la rue Écuyère, la plaza Saint-Sauveur y el castillo se alcanzan fácilmente a pie.",
    it: "Siete nel quartiere dell'Abbaye aux Hommes, a ovest del centro storico. Minimarket, panetteria e ristoranti sono a pochi passi, e rue Écuyère, place Saint-Sauveur e il castello si raggiungono facilmente a piedi.",
  },
  "Café et pâtisseries, place de l'Ancienne Boucherie (on peut aussi y peindre sa céramique).": {
    en: "Café and pastries on Place de l'Ancienne Boucherie (you can also paint your own ceramics there).",
    de: "Café und Gebäck an der Place de l'Ancienne Boucherie (man kann dort auch Keramik bemalen).",
    es: "Café y pasteles en la plaza de l'Ancienne Boucherie (también se puede pintar cerámica).",
    it: "Caffè e pasticcini in place de l'Ancienne Boucherie (si può anche dipingere la propria ceramica).",
  },
  "Boulangerie, rue Guillaume le Conquérant.": {
    en: "Bakery, rue Guillaume le Conquérant.",
    de: "Bäckerei, rue Guillaume le Conquérant.",
    es: "Panadería, rue Guillaume le Conquérant.",
    it: "Panetteria, rue Guillaume le Conquérant.",
  },
  "L'arrêt de tram le plus proche (~12 min à pied).": {
    en: "The nearest tram stop (~12 min walk).",
    de: "Die nächste Straßenbahnhaltestelle (~12 Min. zu Fuß).",
    es: "La parada de tranvía más cercana (~12 min a pie).",
    it: "La fermata del tram più vicina (~12 min a piedi).",
  },
  "Tabac-presse, rue de Bayeux.": {
    en: "Tobacconist and newsagent, rue de Bayeux.",
    de: "Tabak- und Zeitschriftenladen, rue de Bayeux.",
    es: "Estanco y prensa, rue de Bayeux.",
    it: "Tabaccheria ed edicola, rue de Bayeux.",
  },
  "Commencez par un café place de l'Ancienne Boucherie, puis visitez l'Abbaye aux Hommes juste à côté. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna ou Âmbar.": {
    en: "Start with a coffee on Place de l'Ancienne Boucherie, then visit the Abbaye aux Hommes right next door. On Friday morning, don't miss the market on Place Saint-Sauveur. For eating out, Agathe's favourite spots: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque and A Contre Sens. For a drink: Nonna or Âmbar.",
    de: "Beginnen Sie mit einem Kaffee an der Place de l'Ancienne Boucherie und besuchen Sie dann die Abbaye aux Hommes gleich nebenan. Verpassen Sie am Freitagmorgen nicht den Markt auf der Place Saint-Sauveur. Zum Essen Agathes Lieblingsadressen: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque und A Contre Sens. Auf einen Drink: Nonna oder Âmbar.",
    es: "Empiece con un café en la plaza de l'Ancienne Boucherie y visite después la Abbaye aux Hommes, justo al lado. El viernes por la mañana, no se pierda el mercado de la plaza Saint-Sauveur. Para comer, los sitios preferidos de Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque y A Contre Sens. Para tomar algo: Nonna o Âmbar.",
    it: "Iniziate con un caffè in place de l'Ancienne Boucherie, poi visitate l'Abbaye aux Hommes proprio accanto. Il venerdì mattina non perdetevi il mercato di place Saint-Sauveur. Per mangiare, gli indirizzi preferiti di Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque e A Contre Sens. Per un drink: Nonna o Âmbar.",
  },
};
