import type { Tr } from "../i18n-content";

/**
 * Traductions du livret « Numéro 4 » ET des textes communs aux 4 logements du
 * 46 rue Caponière (Numéro 4, Numéro 7, Duplex, Vert). Les fichiers
 * numero7.ts, duplex.ts et vert.ts réutilisent ce dictionnaire (spread), ainsi
 * que simone.ts et perruche.ts pour les phrases identiques (adresses autour,
 * consignes de départ…).
 */
export const numero4Tr: Record<string, Tr> = {
  // ───────────────────────────────────── Numéro 4 (propre)
  "Bienvenue au Numéro 4 ! Votre studio se trouve au 1er étage d'un immeuble de la rue Caponière, à deux pas de l'Abbaye aux Hommes et de la place Saint-Sauveur. Cafés, restaurants et commerces sont tout proches, et le centre historique de Caen se découvre à pied. Très bon séjour ! 🏰": {
    en: "Welcome to Numéro 4! Your studio is on the 1st floor of a building on rue Caponière, just steps from the Abbaye aux Hommes and place Saint-Sauveur. Cafés, restaurants and shops are close by, and Caen's historic centre is easy to explore on foot. Enjoy your stay! 🏰",
    de: "Willkommen im Numéro 4! Ihr Studio befindet sich im 1. Stock eines Hauses in der Rue Caponière, nur wenige Schritte von der Abbaye aux Hommes und der Place Saint-Sauveur entfernt. Cafés, Restaurants und Geschäfte sind ganz in der Nähe, und die Altstadt von Caen lässt sich bequem zu Fuß erkunden. Einen schönen Aufenthalt! 🏰",
    es: "¡Bienvenido al Numéro 4! Su estudio se encuentra en la 1.ª planta de un edificio de la rue Caponière, a dos pasos de la Abbaye aux Hommes y de la place Saint-Sauveur. Cafés, restaurantes y tiendas están muy cerca, y el centro histórico de Caen se recorre a pie. ¡Feliz estancia! 🏰",
    it: "Benvenuti al Numéro 4! Il vostro monolocale si trova al 1° piano di un edificio di rue Caponière, a due passi dall'Abbaye aux Hommes e da place Saint-Sauveur. Caffè, ristoranti e negozi sono vicinissimi e il centro storico di Caen si scopre a piedi. Buon soggiorno! 🏰",
  },
  "Le studio se trouve au 1er étage (sans ascenseur) du 46 rue Caponière, porte n° 4": {
    en: "The studio is on the 1st floor (no lift) of 46 rue Caponière, door no. 4",
    de: "Das Studio befindet sich im 1. Stock (ohne Aufzug) der Rue Caponière 46, Tür Nr. 4",
    es: "El estudio está en la 1.ª planta (sin ascensor) del 46 rue Caponière, puerta n.º 4",
    it: "Il monolocale si trova al 1° piano (senza ascensore) del 46 rue Caponière, porta n. 4",
  },
  "Montez au 1er étage, puis tournez à gauche : votre porte est la numéro 4.": {
    en: "Go up to the 1st floor, then turn left: your door is number 4.",
    de: "Gehen Sie in den 1. Stock und dann nach links: Ihre Tür ist die Nummer 4.",
    es: "Suba a la 1.ª planta y gire a la izquierda: su puerta es la número 4.",
    it: "Salite al 1° piano, poi girate a sinistra: la vostra porta è la numero 4.",
  },
  "Un balai, une pelle et une balayette se trouvent dans le placard de la salle de bain.": {
    en: "A broom, a dustpan and a hand brush are in the bathroom cupboard.",
    de: "Ein Besen, eine Kehrschaufel und ein Handfeger befinden sich im Schrank im Badezimmer.",
    es: "En el armario del baño encontrará una escoba, un recogedor y un cepillo.",
    it: "Una scopa, una paletta e uno scopino si trovano nell'armadio del bagno.",
  },

  // ───────────────────────────────────── Studios Numéro 4 & Numéro 7
  "Le code de la porte de l'immeuble et celui de la serrure de votre porte vous sont communiqués par message le jour de votre arrivée": {
    en: "The building door code and the code for your door lock are sent to you by message on the day of your arrival",
    de: "Der Code für die Haustür und der Code für das Schloss Ihrer Wohnungstür werden Ihnen am Anreisetag per Nachricht mitgeteilt",
    es: "El código de la puerta del edificio y el de la cerradura de su puerta se le envían por mensaje el día de su llegada",
    it: "Il codice del portone e quello della serratura della vostra porta vi vengono comunicati via messaggio il giorno dell'arrivo",
  },
  "Rendez-vous au 46 rue Caponière.": {
    en: "Go to 46 rue Caponière.",
    de: "Gehen Sie zur Rue Caponière 46.",
    es: "Diríjase al 46 rue Caponière.",
    it: "Recatevi al 46 rue Caponière.",
  },
  "Passez sous le porche : l'entrée de l'immeuble se trouve sur votre gauche.": {
    en: "Go through the archway: the building entrance is on your left.",
    de: "Gehen Sie durch die Toreinfahrt: Der Hauseingang befindet sich links.",
    es: "Pase bajo el porche: la entrada del edificio está a su izquierda.",
    it: "Passate sotto il portico: l'ingresso dell'edificio è sulla vostra sinistra.",
  },
  "Pour ouvrir votre porte, composez sur la serrure le code reçu par message. Pour la refermer, levez la poignée puis appuyez sur le bouton central de la serrure.": {
    en: "To open your door, enter the code you received by message on the lock. To lock it again, lift the handle and then press the central button on the lock.",
    de: "Um Ihre Tür zu öffnen, geben Sie den per Nachricht erhaltenen Code am Schloss ein. Zum Abschließen heben Sie den Türgriff an und drücken dann die mittlere Taste des Schlosses.",
    es: "Para abrir su puerta, marque en la cerradura el código recibido por mensaje. Para cerrarla, levante la manilla y pulse el botón central de la cerradura.",
    it: "Per aprire la porta, digitate sulla serratura il codice ricevuto via messaggio. Per richiuderla, alzate la maniglia e premete il pulsante centrale della serratura.",
  },
  "En partant, verrouillez la porte : levez la poignée puis appuyez sur le bouton central de la serrure": {
    en: "When you leave, lock the door: lift the handle and then press the central button on the lock",
    de: "Beim Verlassen die Tür abschließen: Türgriff anheben und dann die mittlere Taste des Schlosses drücken",
    es: "Al salir, cerrar la puerta con llave: levante la manilla y pulse el botón central de la cerradura",
    it: "Uscendo, chiudere la porta: alzate la maniglia e premete il pulsante centrale della serratura",
  },
  "Pièce de vie avec lit double (queen size 160 × 200 cm)": {
    en: "Living area with a double bed (queen size 160 × 200 cm)",
    de: "Wohnraum mit Doppelbett (Queen-Size 160 × 200 cm)",
    es: "Sala de estar con cama doble (queen size 160 × 200 cm)",
    it: "Zona giorno con letto matrimoniale (queen size 160 × 200 cm)",
  },
  "Cuisine entièrement équipée et bar pour les repas": {
    en: "Fully equipped kitchen and breakfast bar for meals",
    de: "Voll ausgestattete Küche und Bartheke für die Mahlzeiten",
    es: "Cocina totalmente equipada y barra para comer",
    it: "Cucina completamente attrezzata e bancone per i pasti",
  },
  "Salle de douche moderne avec WC": {
    en: "Modern shower room with toilet",
    de: "Modernes Duschbad mit WC",
    es: "Baño moderno con ducha y WC",
    it: "Bagno moderno con doccia e WC",
  },
  "Les draps sont fournis pour le lit queen size (160 × 200 cm). Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.": {
    en: "Bed linen is provided for the queen-size bed (160 × 200 cm). Each guest has a bath towel. A bath mat and a tea towel are also provided.",
    de: "Bettwäsche für das Queen-Size-Bett (160 × 200 cm) wird gestellt. Jeder Gast erhält ein Handtuch. Eine Badematte und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
    es: "Se proporcionan sábanas para la cama queen size (160 × 200 cm). Cada huésped dispone de una toalla. También tiene a su disposición una alfombrilla de baño y un paño de cocina.",
    it: "Le lenzuola sono fornite per il letto queen size (160 × 200 cm). Ogni ospite dispone di un asciugamano. Sono a vostra disposizione anche un tappetino da bagno e uno strofinaccio da cucina.",
  },
  "Allumez la télévision avec la télécommande Samsung (bouton Power rouge, en haut à gauche). Avec le bouton central, sélectionnez l'application Orange TV pour accéder aux chaînes en direct, puis validez avec OK. Cette même télécommande permet de régler le volume et de changer de chaîne.": {
    en: "Turn on the TV with the Samsung remote (red Power button, top left). Use the central button to select the Orange TV app for live channels, then confirm with OK. The same remote controls the volume and changes channels.",
    de: "Schalten Sie den Fernseher mit der Samsung-Fernbedienung ein (rote Power-Taste oben links). Wählen Sie mit der mittleren Taste die App Orange TV für das Live-Programm und bestätigen Sie mit OK. Mit derselben Fernbedienung regeln Sie die Lautstärke und wechseln die Sender.",
    es: "Encienda el televisor con el mando Samsung (botón Power rojo, arriba a la izquierda). Con el botón central, seleccione la aplicación Orange TV para ver los canales en directo y confirme con OK. Con el mismo mando puede ajustar el volumen y cambiar de canal.",
    it: "Accendete il televisore con il telecomando Samsung (tasto Power rosso, in alto a sinistra). Con il tasto centrale selezionate l'app Orange TV per i canali in diretta, poi confermate con OK. Con lo stesso telecomando si regola il volume e si cambia canale.",
  },

  // ───────────────────────────────────── Duplex & Vert (accès par la porte 46A)
  "Le code de la boîte à clés et celui de la porte d'entrée vous sont communiqués par message le jour de votre arrivée": {
    en: "The key box code and the entrance door code are sent to you by message on the day of your arrival",
    de: "Der Code des Schlüsselkastens und der Code der Eingangstür werden Ihnen am Anreisetag per Nachricht mitgeteilt",
    es: "El código de la caja de llaves y el de la puerta de entrada se le envían por mensaje el día de su llegada",
    it: "Il codice della cassetta delle chiavi e quello del portone vi vengono comunicati via messaggio il giorno dell'arrivo",
  },
  "Rendez-vous au 46 rue Caponière et passez sous le porche.": {
    en: "Go to 46 rue Caponière and walk through the archway.",
    de: "Gehen Sie zur Rue Caponière 46 und durch die Toreinfahrt.",
    es: "Diríjase al 46 rue Caponière y pase bajo el porche.",
    it: "Recatevi al 46 rue Caponière e passate sotto il portico.",
  },
  "Revenez sur vos pas jusqu'à la porte 46A, composez le code de la porte d'entrée reçu par message, puis tirez la porte pour l'ouvrir.": {
    en: "Retrace your steps to door 46A, enter the entrance door code you received by message, then pull the door to open it.",
    de: "Gehen Sie zurück bis zur Tür 46A, geben Sie den per Nachricht erhaltenen Code der Eingangstür ein und ziehen Sie die Tür auf.",
    es: "Vuelva sobre sus pasos hasta la puerta 46A, marque el código de la puerta de entrada recibido por mensaje y tire de la puerta para abrirla.",
    it: "Tornate indietro fino alla porta 46A, digitate il codice del portone ricevuto via messaggio, poi tirate la porta per aprirla.",
  },
  "Pour allumer les radiateurs, appuyez sur le bouton Power, puis réglez la température avec les flèches. Merci de veiller à limiter votre consommation.": {
    en: "To turn on the radiators, press the Power button, then set the temperature with the arrows. Please be mindful of your energy use.",
    de: "Um die Heizkörper einzuschalten, drücken Sie die Power-Taste und stellen Sie die Temperatur mit den Pfeiltasten ein. Bitte achten Sie auf einen sparsamen Verbrauch.",
    es: "Para encender los radiadores, pulse el botón Power y ajuste la temperatura con las flechas. Le rogamos que modere su consumo.",
    it: "Per accendere i termosifoni, premete il tasto Power, poi regolate la temperatura con le frecce. Vi preghiamo di limitare i consumi.",
  },

  // ───────────────────────────────────── Communs aux 4 logements du 46 rue Caponière
  "Stationnement payant en journée (9h-12h30 et 14h-19h) rue Caponière, rue de l'Abbatiale, rue de Bayeux, place de l'Ancienne Boucherie et rue Guillaume le Conquérant.\nStationnement gratuit rue Neuve Bourg l'Abbé, rue de Bretagne et rue Caponière (à partir du bar-tabac).\nParkings souterrains payants : Mairie, Château, Paul Doumer et place de la République. Tarifs : indigoneo.fr": {
    en: "Paid parking during the day (9 am–12:30 pm and 2–7 pm) on rue Caponière, rue de l'Abbatiale, rue de Bayeux, place de l'Ancienne Boucherie and rue Guillaume le Conquérant.\nFree parking on rue Neuve Bourg l'Abbé, rue de Bretagne and rue Caponière (from the bar-tabac onwards).\nPaid underground car parks: Mairie, Château, Paul Doumer and place de la République. Prices: indigoneo.fr",
    de: "Gebührenpflichtiges Parken tagsüber (9–12:30 Uhr und 14–19 Uhr) in der Rue Caponière, Rue de l'Abbatiale, Rue de Bayeux, auf der Place de l'Ancienne Boucherie und in der Rue Guillaume le Conquérant.\nKostenloses Parken in der Rue Neuve Bourg l'Abbé, der Rue de Bretagne und der Rue Caponière (ab der Bar-Tabac).\nGebührenpflichtige Tiefgaragen: Mairie, Château, Paul Doumer und Place de la République. Preise: indigoneo.fr",
    es: "Aparcamiento de pago durante el día (de 9 h a 12:30 h y de 14 h a 19 h) en la rue Caponière, rue de l'Abbatiale, rue de Bayeux, place de l'Ancienne Boucherie y rue Guillaume le Conquérant.\nAparcamiento gratuito en la rue Neuve Bourg l'Abbé, la rue de Bretagne y la rue Caponière (a partir del bar-estanco).\nAparcamientos subterráneos de pago: Mairie, Château, Paul Doumer y place de la République. Tarifas: indigoneo.fr",
    it: "Parcheggio a pagamento durante il giorno (9-12:30 e 14-19) in rue Caponière, rue de l'Abbatiale, rue de Bayeux, place de l'Ancienne Boucherie e rue Guillaume le Conquérant.\nParcheggio gratuito in rue Neuve Bourg l'Abbé, rue de Bretagne e rue Caponière (a partire dal bar-tabacchi).\nParcheggi sotterranei a pagamento: Mairie, Château, Paul Doumer e place de la République. Tariffe: indigoneo.fr",
  },
  "À votre arrivée, vous trouverez : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café et du thé, une capsule de lessive, du produit vaisselle et une éponge.": {
    en: "On arrival you'll find: toilet paper, a miniature shower gel/shampoo per person, salt and pepper, a few coffee capsules and some tea, a laundry detergent pod, washing-up liquid and a sponge.",
    de: "Bei Ihrer Ankunft finden Sie: Toilettenpapier, eine Miniatur Duschgel/Shampoo pro Person, Salz und Pfeffer, einige Kaffeekapseln und Tee, eine Waschmittelkapsel, Spülmittel und einen Schwamm.",
    es: "A su llegada encontrará: papel higiénico, un gel de ducha/champú en miniatura por persona, sal y pimienta, algunas cápsulas de café y té, una cápsula de detergente para la ropa, lavavajillas y una esponja.",
    it: "Al vostro arrivo troverete: carta igienica, un bagnoschiuma/shampoo in formato mini a persona, sale e pepe, qualche capsula di caffè e del tè, una capsula di detersivo per il bucato, detersivo per i piatti e una spugna.",
  },
  "Un balai, une pelle et une balayette se trouvent dans le placard de la pièce de vie.": {
    en: "A broom, a dustpan and a hand brush are in the living-room cupboard.",
    de: "Ein Besen, eine Kehrschaufel und ein Handfeger befinden sich im Schrank im Wohnraum.",
    es: "En el armario de la sala de estar encontrará una escoba, un recogedor y un cepillo.",
    it: "Una scopa, una paletta e uno scopino si trovano nell'armadio della zona giorno.",
  },
  "Les poubelles se trouvent dans les bacs à l'extérieur, juste à côté du salon de coiffure « Henriette ». Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 4 place de l'Ancienne Boucherie": {
    en: "The bins are outside, right next to the « Henriette » hair salon. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 4 place de l'Ancienne Boucherie",
    de: "Die Mülltonnen stehen draußen, direkt neben dem Friseursalon « Henriette ». Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container an der Place de l'Ancienne Boucherie 4",
    es: "Los contenedores están fuera, justo al lado de la peluquería « Henriette ». Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 4 place de l'Ancienne Boucherie",
    it: "I bidoni si trovano all'esterno, proprio accanto al parrucchiere « Henriette ». Vi preghiamo di differenziare bene i rifiuti:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore al 4 place de l'Ancienne Boucherie",
  },
  "Laisser les draps sur les lits (l'équipe de ménage s'en charge) ; vous pouvez laisser les serviettes utilisées dans la salle de bain": {
    en: "Leave the sheets on the beds (the cleaning team will take care of them); you can leave used towels in the bathroom",
    de: "Die Bettwäsche auf den Betten lassen (das Reinigungsteam kümmert sich darum); benutzte Handtücher können im Bad bleiben",
    es: "Dejar las sábanas en las camas (el equipo de limpieza se encarga de ellas); puede dejar las toallas usadas en el baño",
    it: "Lasciare le lenzuola sui letti (se ne occupa il team delle pulizie); potete lasciare gli asciugamani usati in bagno",
  },
  "FRAC Normandie (~2 min)": {
    en: "FRAC Normandie (~2 min)",
    de: "FRAC Normandie (~2 Min.)",
    es: "FRAC Normandie (~2 min)",
    it: "FRAC Normandie (~2 min)",
  },
  "Abbaye aux Hommes & hôtel de ville (~4 min)": {
    en: "Abbaye aux Hommes & town hall (~4 min)",
    de: "Abbaye aux Hommes & Rathaus (~4 Min.)",
    es: "Abbaye aux Hommes y ayuntamiento (~4 min)",
    it: "Abbaye aux Hommes e municipio (~4 min)",
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
    es: "Place Saint-Sauveur — cafés y mercado del viernes (~7 min)",
    it: "Place Saint-Sauveur — caffè e mercato del venerdì (~7 min)",
  },
  "Jardin des Plantes (~13 min)": {
    en: "Jardin des Plantes botanical garden (~13 min)",
    de: "Jardin des Plantes, botanischer Garten (~13 Min.)",
    es: "Jardin des Plantes, jardín botánico (~13 min)",
    it: "Jardin des Plantes, orto botanico (~13 min)",
  },
  "Château de Caen (~15 min)": {
    en: "Caen Castle (~15 min)",
    de: "Burg von Caen (~15 Min.)",
    es: "Castillo de Caen (~15 min)",
    it: "Castello di Caen (~15 min)",
  },
  "Vous êtes rue Caponière, dans le quartier de l'Abbaye aux Hommes, à l'ouest du centre historique. Boulangerie, supérette, laverie et petits restaurants sont dans la rue, et la place Saint-Sauveur, la rue Écuyère et le château se rejoignent facilement à pied.": {
    en: "You're on rue Caponière, in the Abbaye aux Hommes district, west of the historic centre. A bakery, a mini-market, a launderette and small restaurants are right in the street, and place Saint-Sauveur, rue Écuyère and the castle are an easy walk away.",
    de: "Sie wohnen in der Rue Caponière, im Viertel der Abbaye aux Hommes, westlich der Altstadt. Bäckerei, kleiner Supermarkt, Waschsalon und kleine Restaurants liegen direkt in der Straße, und die Place Saint-Sauveur, die Rue Écuyère und die Burg erreichen Sie bequem zu Fuß.",
    es: "Está en la rue Caponière, en el barrio de la Abbaye aux Hommes, al oeste del centro histórico. Panadería, supermercado, lavandería y pequeños restaurantes están en la misma calle, y la place Saint-Sauveur, la rue Écuyère y el castillo se alcanzan fácilmente a pie.",
    it: "Siete in rue Caponière, nel quartiere dell'Abbaye aux Hommes, a ovest del centro storico. Panetteria, minimarket, lavanderia e piccoli ristoranti sono nella via, e place Saint-Sauveur, rue Écuyère e il castello si raggiungono facilmente a piedi.",
  },
  "Commencez par un café rue Caponière ou sur la place de l'Ancienne Boucherie, puis visitez l'Abbaye aux Hommes, à quelques minutes à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens et Koboon. Pour un verre : Nonna ou Âmbar.": {
    en: "Start with a coffee on rue Caponière or place de l'Ancienne Boucherie, then visit the Abbaye aux Hommes, a few minutes' walk away. On Friday morning, don't miss the market on place Saint-Sauveur. For food, Agathe's favourite spots: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens and Koboon. For a drink: Nonna or Âmbar.",
    de: "Beginnen Sie mit einem Kaffee in der Rue Caponière oder auf der Place de l'Ancienne Boucherie und besuchen Sie dann die Abbaye aux Hommes, nur wenige Gehminuten entfernt. Verpassen Sie freitagvormittags nicht den Markt auf der Place Saint-Sauveur. Zum Essen Agathes Lieblingsadressen: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens und Koboon. Für einen Drink: Nonna oder Âmbar.",
    es: "Empiece con un café en la rue Caponière o en la place de l'Ancienne Boucherie y luego visite la Abbaye aux Hommes, a pocos minutos a pie. El viernes por la mañana, no se pierda el mercado de la place Saint-Sauveur. Para comer, las direcciones favoritas de Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens y Koboon. Para tomar algo: Nonna o Âmbar.",
    it: "Iniziate con un caffè in rue Caponière o in place de l'Ancienne Boucherie, poi visitate l'Abbaye aux Hommes, a pochi minuti a piedi. Il venerdì mattina non perdete il mercato di place Saint-Sauveur. A tavola, gli indirizzi preferiti di Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque, A Contre Sens e Koboon. Per un drink: Nonna o Âmbar.",
  },

  // ───────────────────────────────────── Autour de moi (aussi utilisés par Simone et Perruche)
  "Restaurant, place de l'Ancienne Boucherie.": {
    en: "Restaurant, place de l'Ancienne Boucherie.",
    de: "Restaurant, Place de l'Ancienne Boucherie.",
    es: "Restaurante, place de l'Ancienne Boucherie.",
    it: "Ristorante, place de l'Ancienne Boucherie.",
  },
  "Coup de cœur d'Agathe, quai François Mitterrand.": {
    en: "One of Agathe's favourites, quai François Mitterrand.",
    de: "Agathes Lieblingsadresse, quai François Mitterrand.",
    es: "Uno de los favoritos de Agathe, quai François Mitterrand.",
    it: "Uno dei preferiti di Agathe, quai François Mitterrand.",
  },
  "Café et pâtisseries, place de l'Ancienne Boucherie (on peut aussi y peindre sa céramique).": {
    en: "Coffee and pastries, place de l'Ancienne Boucherie (you can also paint your own ceramics there).",
    de: "Kaffee und Gebäck, Place de l'Ancienne Boucherie (hier kann man auch Keramik bemalen).",
    es: "Café y pasteles, place de l'Ancienne Boucherie (también puede pintar su propia cerámica).",
    it: "Caffè e dolci, place de l'Ancienne Boucherie (si può anche dipingere la propria ceramica).",
  },
  "Coup de cœur d'Agathe : brunch, avenue du Six Juin.": {
    en: "One of Agathe's favourites: brunch, avenue du Six Juin.",
    de: "Agathes Lieblingsadresse: Brunch, avenue du Six Juin.",
    es: "Uno de los favoritos de Agathe: brunch, avenue du Six Juin.",
    it: "Uno dei preferiti di Agathe: brunch, avenue du Six Juin.",
  },
  "Coup de cœur d'Agathe : pâtisserie et salon de thé, avenue Henry Chéron.": {
    en: "One of Agathe's favourites: pastry shop and tea room, avenue Henry Chéron.",
    de: "Agathes Lieblingsadresse: Konditorei und Teesalon, avenue Henry Chéron.",
    es: "Uno de los favoritos de Agathe: pastelería y salón de té, avenue Henry Chéron.",
    it: "Uno dei preferiti di Agathe: pasticceria e sala da tè, avenue Henry Chéron.",
  },
  "Coup de cœur d'Agathe : poissonnerie à Biéville-Beuville (~15 min en voiture).": {
    en: "One of Agathe's favourites: fishmonger in Biéville-Beuville (~15 min by car).",
    de: "Agathes Lieblingsadresse: Fischhändler in Biéville-Beuville (~15 Min. mit dem Auto).",
    es: "Uno de los favoritos de Agathe: pescadería en Biéville-Beuville (~15 min en coche).",
    it: "Uno dei preferiti di Agathe: pescheria a Biéville-Beuville (~15 min in auto).",
  },
  "Tabac-presse, rue de Bayeux, à deux pas du logement.": {
    en: "Tobacconist and newsagent, rue de Bayeux, a short walk from the apartment.",
    de: "Tabakladen mit Zeitschriften, Rue de Bayeux, nur wenige Schritte von der Wohnung.",
    es: "Estanco y prensa, rue de Bayeux, a dos pasos del alojamiento.",
    it: "Tabaccheria ed edicola, rue de Bayeux, a due passi dall'alloggio.",
  },
};
