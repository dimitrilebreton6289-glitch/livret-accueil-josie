import type { Tr } from "../i18n-content";
import { chezjohanTr } from "./chezjohan";

/**
 * Traductions du livret « Vauquelin » (20 rue Vauquelin, Caen).
 * Reprend les textes partagés de Chez Johan (`...chezjohanTr`).
 * Clé = texte français EXACT.
 */
export const vauquelinTr: Record<string, Tr> = {
  ...chezjohanTr,

  "Bienvenue au studio Vauquelin ! Vous êtes en plein centre historique, à deux pas de la place Saint-Sauveur. Cafés, restaurants et petits commerces sont en bas de chez vous, et le château comme l'Abbaye aux Hommes se rejoignent à pied. Très bon séjour ! 🏰": {
    en: "Welcome to the Vauquelin studio! You're right in the historic centre, a stone's throw from Place Saint-Sauveur. Cafés, restaurants and small shops are right downstairs, and both the castle and the Abbaye aux Hommes are within walking distance. Enjoy your stay! 🏰",
    de: "Willkommen im Studio Vauquelin! Sie wohnen mitten im historischen Zentrum, nur wenige Schritte von der Place Saint-Sauveur entfernt. Cafés, Restaurants und kleine Geschäfte finden Sie direkt vor der Haustür, und die Burg sowie die Abbaye aux Hommes erreichen Sie zu Fuß. Einen schönen Aufenthalt! 🏰",
    es: "¡Bienvenido al estudio Vauquelin! Está en pleno centro histórico, a dos pasos de la plaza Saint-Sauveur. Cafés, restaurantes y pequeñas tiendas están justo abajo, y tanto el castillo como la Abbaye aux Hommes se alcanzan a pie. ¡Que disfrute de su estancia! 🏰",
    it: "Benvenuti nel monolocale Vauquelin! Siete in pieno centro storico, a due passi da place Saint-Sauveur. Caffè, ristoranti e piccoli negozi sono proprio sotto casa, e sia il castello sia l'Abbaye aux Hommes si raggiungono a piedi. Buon soggiorno! 🏰",
  },
  "Le studio se trouve au 1er étage, porte n° 42. La boîte à clés est rue Quincampoix": {
    en: "The studio is on the 1st floor, door no. 42. The key box is on rue Quincampoix",
    de: "Das Studio liegt im 1. Stock, Tür Nr. 42. Die Schlüsselbox befindet sich in der rue Quincampoix",
    es: "El estudio está en la 1.ª planta, puerta n.º 42. La caja de llaves está en la rue Quincampoix",
    it: "Il monolocale si trova al 1° piano, porta n. 42. La cassetta portachiavi è in rue Quincampoix",
  },
  "Suivez la vidéo et les étapes ci-dessous pour accéder au studio": {
    en: "Follow the video and the steps below to get into the studio",
    de: "Folgen Sie dem Video und den Schritten unten, um ins Studio zu gelangen",
    es: "Siga el vídeo y los pasos que se indican a continuación para acceder al estudio",
    it: "Seguite il video e i passaggi qui sotto per accedere al monolocale",
  },
  "Rendez-vous rue Quincampoix : c'est dans cette rue que se trouve la boîte à clés.": {
    en: "Go to rue Quincampoix: the key box is on this street.",
    de: "Gehen Sie in die rue Quincampoix: In dieser Straße befindet sich die Schlüsselbox.",
    es: "Diríjase a la rue Quincampoix: la caja de llaves está en esta calle.",
    it: "Recatevi in rue Quincampoix: la cassetta portachiavi si trova in questa via.",
  },
  "La boîte à clés est à côté d'une porte en bois : c'est celle du dessus, marquée « GRIFEMA ».": {
    en: "The key box is next to a wooden door: it's the upper one, marked « GRIFEMA ».",
    de: "Die Schlüsselbox befindet sich neben einer Holztür: Es ist die obere, beschriftet mit « GRIFEMA ».",
    es: "La caja de llaves está junto a una puerta de madera: es la de arriba, marcada « GRIFEMA ».",
    it: "La cassetta portachiavi è accanto a una porta di legno: è quella in alto, con la scritta « GRIFEMA ».",
  },
  "Composez le code reçu par message, puis appuyez sur les boutons latéraux pour ouvrir la boîte. Récupérez les clés et le badge, refermez la boîte et brouillez le code.": {
    en: "Enter the code you received by message, then press the side buttons to open the box. Take the keys and the fob, close the box and scramble the code.",
    de: "Geben Sie den per Nachricht erhaltenen Code ein und drücken Sie dann die seitlichen Knöpfe, um die Box zu öffnen. Nehmen Sie die Schlüssel und den Chip, schließen Sie die Box und verstellen Sie den Code.",
    es: "Marque el código recibido por mensaje y pulse los botones laterales para abrir la caja. Recoja las llaves y la tarjeta, cierre la caja y desordene el código.",
    it: "Digitate il codice ricevuto via messaggio, poi premete i pulsanti laterali per aprire la cassetta. Prendete le chiavi e il badge, richiudete la cassetta e mescolate il codice.",
  },
  "Passez le badge devant l'interphone pour entrer. Allez ensuite jusqu'à la porte de l'immeuble et passez de nouveau le badge devant l'interphone.": {
    en: "Hold the fob in front of the intercom to get in. Then go to the building door and hold the fob in front of the intercom again.",
    de: "Halten Sie den Chip vor die Sprechanlage, um hineinzukommen. Gehen Sie dann zur Haustür und halten Sie den Chip erneut vor die Sprechanlage.",
    es: "Pase la tarjeta por delante del portero automático para entrar. Luego vaya hasta la puerta del edificio y vuelva a pasar la tarjeta por delante del portero automático.",
    it: "Avvicinate il badge al citofono per entrare. Raggiungete poi il portone dell'edificio e avvicinate di nuovo il badge al citofono.",
  },
  "Montez les escaliers jusqu'au 1er étage et allez au fond du couloir : votre porte est la n° 42. Bienvenue chez vous ! 🙂": {
    en: "Take the stairs up to the 1st floor and go to the end of the corridor: your door is no. 42. Welcome home! 🙂",
    de: "Gehen Sie die Treppe hinauf in den 1. Stock und bis zum Ende des Flurs: Ihre Tür ist Nr. 42. Willkommen zu Hause! 🙂",
    es: "Suba las escaleras hasta la 1.ª planta y vaya al fondo del pasillo: su puerta es la n.º 42. ¡Bienvenido a casa! 🙂",
    it: "Salite le scale fino al 1° piano e andate in fondo al corridoio: la vostra porta è la n. 42. Benvenuti a casa! 🙂",
  },
  "Pièce de vie avec coin salon, table haute et 2 tabourets": {
    en: "Living area with seating corner, high table and 2 stools",
    de: "Wohnbereich mit Sitzecke, Stehtisch und 2 Barhockern",
    es: "Sala de estar con rincón de salón, mesa alta y 2 taburetes",
    it: "Zona giorno con angolo salotto, tavolo alto e 2 sgabelli",
  },
  "Cuisine équipée (plaques de cuisson, four combiné micro-ondes, machine Dolce Gusto)": {
    en: "Equipped kitchen (hob, combination microwave oven, Dolce Gusto machine)",
    de: "Ausgestattete Küche (Kochfeld, Kombi-Mikrowelle mit Backofen, Dolce-Gusto-Maschine)",
    es: "Cocina equipada (placa de cocción, horno microondas combinado, cafetera Dolce Gusto)",
    it: "Cucina attrezzata (piano cottura, forno combinato a microonde, macchina Dolce Gusto)",
  },
  "Lit double escamotable, qui se replie sous la télévision pour gagner de la place": {
    en: "Fold-away double bed, which folds up under the TV to save space",
    de: "Doppel-Klappbett, das sich platzsparend unter dem Fernseher hochklappen lässt",
    es: "Cama doble abatible, que se pliega bajo el televisor para ganar espacio",
    it: "Letto matrimoniale a scomparsa, che si ripiega sotto il televisore per guadagnare spazio",
  },
  "Salle de bain avec douche, lavabo, WC et lave-linge": {
    en: "Bathroom with shower, washbasin, toilet and washing machine",
    de: "Badezimmer mit Dusche, Waschbecken, WC und Waschmaschine",
    es: "Baño con ducha, lavabo, inodoro y lavadora",
    it: "Bagno con doccia, lavabo, WC e lavatrice",
  },
  "Les draps sont fournis pour le lit double. Chaque voyageur dispose d'une serviette de toilette. Un tapis de bain et un torchon de cuisine sont également à votre disposition.": {
    en: "Bed linen is provided for the double bed. Each guest has a bath towel. A bath mat and a tea towel are also provided.",
    de: "Bettwäsche für das Doppelbett wird gestellt. Jeder Gast erhält ein Handtuch. Eine Badematte und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
    es: "Se proporcionan sábanas para la cama doble. Cada huésped dispone de una toalla. También hay una alfombrilla de baño y un paño de cocina.",
    it: "Le lenzuola sono fornite per il letto matrimoniale. Ogni ospite ha un asciugamano. Sono a disposizione anche un tappetino da bagno e uno strofinaccio da cucina.",
  },
  "🛏️ Lit escamotable": {
    en: "🛏️ Fold-away bed",
    de: "🛏️ Klappbett",
    es: "🛏️ Cama abatible",
    it: "🛏️ Letto a scomparsa",
  },
  "Pour gagner de la place, le lit double se replie contre le mur, sous la télévision. Pour le déplier ou le replier, regardez cette courte vidéo.": {
    en: "To save space, the double bed folds up against the wall, under the TV. To fold it down or up, watch this short video.",
    de: "Um Platz zu sparen, lässt sich das Doppelbett an der Wand unter dem Fernseher hochklappen. Wie man es aus- und einklappt, zeigt dieses kurze Video.",
    es: "Para ganar espacio, la cama doble se pliega contra la pared, bajo el televisor. Para abrirla o plegarla, vea este breve vídeo.",
    it: "Per guadagnare spazio, il letto matrimoniale si ripiega contro il muro, sotto il televisore. Per aprirlo o richiuderlo, guardate questo breve video.",
  },
  "La machine à café est une Dolce Gusto. Deux capsules vous sont offertes à votre arrivée.": {
    en: "The coffee machine is a Dolce Gusto. Two capsules are provided on arrival.",
    de: "Die Kaffeemaschine ist eine Dolce Gusto. Bei Ihrer Ankunft liegen zwei Kapseln für Sie bereit.",
    es: "La cafetera es una Dolce Gusto. A su llegada le ofrecemos dos cápsulas.",
    it: "La macchina del caffè è una Dolce Gusto. Al vostro arrivo troverete due capsule in omaggio.",
  },
  "1. Appuyez sur le bouton On/Off de la télécommande pour allumer la télévision.\n2. Avec les flèches, sélectionnez « Live TV », puis validez avec OK.\n3. Utilisez la même télécommande pour changer de chaîne et régler le volume.": {
    en: "1. Press the On/Off button on the remote to turn on the TV.\n2. Use the arrows to select « Live TV », then confirm with OK.\n3. Use the same remote to change channels and adjust the volume.",
    de: "1. Drücken Sie die Ein/Aus-Taste der Fernbedienung, um den Fernseher einzuschalten.\n2. Wählen Sie mit den Pfeiltasten « Live TV » und bestätigen Sie mit OK.\n3. Mit derselben Fernbedienung wechseln Sie die Sender und regeln die Lautstärke.",
    es: "1. Pulse el botón On/Off del mando para encender el televisor.\n2. Con las flechas, seleccione « Live TV » y confirme con OK.\n3. Use el mismo mando para cambiar de canal y ajustar el volumen.",
    it: "1. Premete il tasto On/Off del telecomando per accendere il televisore.\n2. Con le frecce selezionate « Live TV », poi confermate con OK.\n3. Usate lo stesso telecomando per cambiare canale e regolare il volume.",
  },
  "Le lave-linge (ouverture par le dessus) se trouve dans la salle de bain. Merci de laisser le couvercle ouvert lorsqu'il est vide.": {
    en: "The top-loading washing machine is in the bathroom. Please leave the lid open when it's empty.",
    de: "Die Waschmaschine (Toplader) befindet sich im Badezimmer. Bitte lassen Sie den Deckel offen, wenn sie leer ist.",
    es: "La lavadora (de carga superior) está en el baño. Por favor, deje la tapa abierta cuando esté vacía.",
    it: "La lavatrice (a carica dall'alto) si trova in bagno. Vi preghiamo di lasciare il coperchio aperto quando è vuota.",
  },
  "L'aspirateur et la serpillière se trouvent dans la salle de bain.": {
    en: "The vacuum cleaner and the floor cloth are in the bathroom.",
    de: "Staubsauger und Wischtuch befinden sich im Badezimmer.",
    es: "La aspiradora y la fregona están en el baño.",
    it: "L'aspirapolvere e lo straccio per pavimenti si trovano in bagno.",
  },
  "Four combiné micro-ondes": {
    en: "Combination microwave oven",
    de: "Kombi-Mikrowelle mit Backofen",
    es: "Horno microondas combinado",
    it: "Forno combinato a microonde",
  },
  "Machine Dolce Gusto": {
    en: "Dolce Gusto machine",
    de: "Dolce-Gusto-Maschine",
    es: "Cafetera Dolce Gusto",
    it: "Macchina Dolce Gusto",
  },
  "Les poubelles sont à déposer dans les bacs situés dehors, à droite de la porte de sortie de l'immeuble. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 28 rue Saint-Sauveur": {
    en: "Please take your rubbish to the bins outside, to the right of the building's exit door. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 28 rue Saint-Sauveur",
    de: "Bitte bringen Sie den Müll zu den Tonnen draußen, rechts neben der Ausgangstür des Gebäudes. Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container in der 28 rue Saint-Sauveur",
    es: "Deposite la basura en los contenedores de fuera, a la derecha de la puerta de salida del edificio. Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 28 rue Saint-Sauveur",
    it: "I rifiuti vanno gettati nei bidoni all'esterno, a destra della porta d'uscita dell'edificio. Vi preghiamo di fare con cura la raccolta differenziata:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore al 28 rue Saint-Sauveur",
  },
  "Lit double escamotable": {
    en: "Fold-away double bed",
    de: "Doppel-Klappbett",
    es: "Cama doble abatible",
    it: "Letto matrimoniale a scomparsa",
  },
};
