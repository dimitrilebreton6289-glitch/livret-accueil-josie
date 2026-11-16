import type { Tr } from "../i18n-content";
import { chezgeoTr } from "./chezgeo";

/**
 * Traductions du livret « Desmoueux » (14 ter rue Desmoueux, Caen).
 * Reprend les textes partagés de Chez Johan, Vauquelin et Chez Geo
 * (`...chezgeoTr`). Clé = texte français EXACT.
 */
export const desmoueuxTr: Record<string, Tr> = {
  ...chezgeoTr,

  "Bienvenue rue Desmoueux ! Votre appartement se trouve dans un coin calme, entre la place de la Mare et le Jardin des Plantes, à quelques minutes à pied du centre historique de Caen. Le tram passe juste à côté. Très bon séjour ! 💙": {
    en: "Welcome to rue Desmoueux! Your apartment is in a quiet spot between Place de la Mare and the Jardin des Plantes, just a few minutes' walk from Caen's historic centre. The tram stops right nearby. Enjoy your stay! 💙",
    de: "Willkommen in der rue Desmoueux! Ihre Wohnung liegt in einer ruhigen Ecke zwischen der Place de la Mare und dem Jardin des Plantes, nur wenige Gehminuten vom historischen Zentrum von Caen entfernt. Die Straßenbahn hält ganz in der Nähe. Einen schönen Aufenthalt! 💙",
    es: "¡Bienvenido a la rue Desmoueux! Su apartamento está en un rincón tranquilo, entre la plaza de la Mare y el Jardin des Plantes, a pocos minutos a pie del centro histórico de Caen. El tranvía pasa justo al lado. ¡Que disfrute de su estancia! 💙",
    it: "Benvenuti in rue Desmoueux! Il vostro appartamento si trova in un angolo tranquillo, tra place de la Mare e il Jardin des Plantes, a pochi minuti a piedi dal centro storico di Caen. Il tram passa proprio qui vicino. Buon soggiorno! 💙",
  },
  "Le logement se trouve au 14 ter rue Desmoueux, au fond d'une impasse de garages (porte n° 2, à l'étage)": {
    en: "The apartment is at 14 ter rue Desmoueux, at the end of a cul-de-sac lined with garages (door no. 2, upstairs)",
    de: "Die Unterkunft befindet sich in der 14 ter rue Desmoueux, am Ende einer Sackgasse mit Garagen (Tür Nr. 2, im Obergeschoss)",
    es: "El alojamiento está en el 14 ter rue Desmoueux, al fondo de un callejón de garajes (puerta n.º 2, en el piso de arriba)",
    it: "L'alloggio si trova al 14 ter rue Desmoueux, in fondo a un vicolo cieco di garage (porta n. 2, al piano superiore)",
  },
  "Suivez la vidéo et les étapes ci-dessous pour accéder au logement": {
    en: "Follow the video and the steps below to get into the apartment",
    de: "Folgen Sie dem Video und den Schritten unten, um in die Unterkunft zu gelangen",
    es: "Siga el vídeo y los pasos que se indican a continuación para acceder al alojamiento",
    it: "Seguite il video e i passaggi qui sotto per accedere all'alloggio",
  },
  "Rendez-vous au 14 ter rue Desmoueux et entrez dans l'impasse de garages.": {
    en: "Go to 14 ter rue Desmoueux and walk into the cul-de-sac lined with garages.",
    de: "Gehen Sie zu 14 ter rue Desmoueux und betreten Sie die Sackgasse mit den Garagen.",
    es: "Diríjase al 14 ter rue Desmoueux y entre en el callejón de garajes.",
    it: "Recatevi al 14 ter rue Desmoueux ed entrate nel vicolo cieco dei garage.",
  },
  "Votre logement se trouve dans le renfoncement, devant des escaliers verts. La boîte à clés est celle de droite.": {
    en: "Your apartment is in the recess, in front of some green stairs. The key box is the one on the right.",
    de: "Ihre Unterkunft befindet sich in der Nische, vor einer grünen Treppe. Die Schlüsselbox ist die rechte.",
    es: "Su alojamiento está en el entrante, frente a unas escaleras verdes. La caja de llaves es la de la derecha.",
    it: "Il vostro alloggio si trova nella rientranza, davanti a delle scale verdi. La cassetta portachiavi è quella a destra.",
  },
  "Composez le code reçu par message pour ouvrir la boîte. Récupérez les clés, refermez la boîte et brouillez le code.": {
    en: "Enter the code you received by message to open the box. Take the keys, close the box and scramble the code.",
    de: "Geben Sie den per Nachricht erhaltenen Code ein, um die Box zu öffnen. Nehmen Sie die Schlüssel, schließen Sie die Box und verstellen Sie den Code.",
    es: "Marque el código recibido por mensaje para abrir la caja. Recoja las llaves, cierre la caja y desordene el código.",
    it: "Digitate il codice ricevuto via messaggio per aprire la cassetta. Prendete le chiavi, richiudete la cassetta e mescolate il codice.",
  },
  "Ouvrez la porte marron avec la première clé.": {
    en: "Open the brown door with the first key.",
    de: "Öffnen Sie die braune Tür mit dem ersten Schlüssel.",
    es: "Abra la puerta marrón con la primera llave.",
    it: "Aprite la porta marrone con la prima chiave.",
  },
  "Montez les escaliers et ouvrez la porte n° 2 avec l'autre clé (utilisez le verrou de la poignée). Bienvenue chez vous ! 🙂": {
    en: "Go up the stairs and open door no. 2 with the other key (use the lock on the handle). Welcome home! 🙂",
    de: "Gehen Sie die Treppe hinauf und öffnen Sie die Tür Nr. 2 mit dem anderen Schlüssel (benutzen Sie das Schloss an der Klinke). Willkommen zu Hause! 🙂",
    es: "Suba las escaleras y abra la puerta n.º 2 con la otra llave (utilice la cerradura de la manilla). ¡Bienvenido a casa! 🙂",
    it: "Salite le scale e aprite la porta n. 2 con l'altra chiave (usate la serratura della maniglia). Benvenuti a casa! 🙂",
  },
  "Stationnement gratuit rue Desmoueux, avenue de Bagatelle, rue du Docteur Leverrier, rue du XXe Siècle, rue du Docteur Rayer et rue de l'Académie.\nStationnement payant (9h-12h30 et 14h-19h) place de la Mare et fossés Saint-Julien.\nParking souterrain payant : Mairie. Tarifs : indigoneo.fr": {
    en: "Free street parking on rue Desmoueux, avenue de Bagatelle, rue du Docteur Leverrier, rue du XXe Siècle, rue du Docteur Rayer and rue de l'Académie.\nPaid parking (9am-12:30pm and 2pm-7pm) on Place de la Mare and fossés Saint-Julien.\nPaid underground car park: Mairie. Rates: indigoneo.fr",
    de: "Kostenloses Parken in der rue Desmoueux, avenue de Bagatelle, rue du Docteur Leverrier, rue du XXe Siècle, rue du Docteur Rayer und rue de l'Académie.\nGebührenpflichtiges Parken (9-12:30 Uhr und 14-19 Uhr) an der Place de la Mare und den fossés Saint-Julien.\nGebührenpflichtige Tiefgarage: Mairie. Tarife: indigoneo.fr",
    es: "Aparcamiento gratuito en la rue Desmoueux, avenue de Bagatelle, rue du Docteur Leverrier, rue du XXe Siècle, rue du Docteur Rayer y rue de l'Académie.\nAparcamiento de pago (9h-12h30 y 14h-19h) en la plaza de la Mare y los fossés Saint-Julien.\nAparcamiento subterráneo de pago: Mairie. Tarifas: indigoneo.fr",
    it: "Parcheggio gratuito in rue Desmoueux, avenue de Bagatelle, rue du Docteur Leverrier, rue du XXe Siècle, rue du Docteur Rayer e rue de l'Académie.\nParcheggio a pagamento (9-12:30 e 14-19) in place de la Mare e fossés Saint-Julien.\nParcheggio sotterraneo a pagamento: Mairie. Tariffe: indigoneo.fr",
  },
  "Séjour-salon avec table à manger et canapé-lit": {
    en: "Living room with dining table and sofa bed",
    de: "Wohnzimmer mit Esstisch und Schlafsofa",
    es: "Salón-comedor con mesa y sofá cama",
    it: "Soggiorno con tavolo da pranzo e divano letto",
  },
  "Couchage en mezzanine, accessible par une échelle": {
    en: "Sleeping area on a mezzanine, reached by a ladder",
    de: "Schlafplatz auf einer Galerie, über eine Leiter erreichbar",
    es: "Cama en altillo, con acceso por una escalera de mano",
    it: "Posto letto su soppalco, accessibile tramite una scala a pioli",
  },
  "Cuisine entièrement équipée (plaque de cuisson, micro-ondes, réfrigérateur et machine Nespresso)": {
    en: "Fully equipped kitchen (hob, microwave, fridge and Nespresso machine)",
    de: "Voll ausgestattete Küche (Kochfeld, Mikrowelle, Kühlschrank und Nespresso-Maschine)",
    es: "Cocina totalmente equipada (placa de cocción, microondas, frigorífico y cafetera Nespresso)",
    it: "Cucina completamente attrezzata (piano cottura, microonde, frigorifero e macchina Nespresso)",
  },
  "Salle de bain privative avec WC": {
    en: "Private bathroom with toilet",
    de: "Eigenes Badezimmer mit WC",
    es: "Baño privado con inodoro",
    it: "Bagno privato con WC",
  },
  "Fenêtres de toit (velux) avec store occultant": {
    en: "Roof windows (Velux) with blackout blind",
    de: "Dachfenster (Velux) mit Verdunkelungsrollo",
    es: "Ventanas de techo (Velux) con estor opaco",
    it: "Finestre a tetto (Velux) con tenda oscurante",
  },
  "Les fenêtres de toit (velux) ne s'ouvrent pas. Pour faire le noir dans la pièce, utilisez la télécommande accrochée au mur : elle ferme le store du velux.": {
    en: "The roof windows (Velux) don't open. To darken the room, use the remote control hanging on the wall: it closes the Velux blind.",
    de: "Die Dachfenster (Velux) lassen sich nicht öffnen. Um den Raum abzudunkeln, benutzen Sie die Fernbedienung an der Wand: Sie schließt das Rollo des Velux-Fensters.",
    es: "Las ventanas de techo (Velux) no se abren. Para oscurecer la estancia, utilice el mando colgado en la pared: cierra el estor del Velux.",
    it: "Le finestre a tetto (Velux) non si aprono. Per oscurare la stanza, usate il telecomando appeso al muro: chiude la tenda del Velux.",
  },
  "1. Appuyez sur le bouton Power (rouge, tout en haut de la télécommande blanche) pour allumer l'écran.\n2. Patientez quelques secondes jusqu'à l'apparition du menu d'accueil (ou allumez le décodeur avec sa propre télécommande, s'il y en a une deuxième).\n3. Avec les flèches, sélectionnez l'application « Molotov TV » et validez avec OK, ou allez sur la TV d'Orange pour regarder les chaînes.\n4. Utilisez ensuite la même télécommande pour choisir vos chaînes (ou celle du décodeur, uniquement pour changer de chaîne).\n💡 Avec le décodeur, appuyez sur SOURCE pour choisir la bonne entrée (HDMI 1 ou 2). Si cela ne fonctionne pas, débranchez puis rebranchez le décodeur.": {
    en: "1. Press the Power button (red, at the very top of the white remote) to turn on the screen.\n2. Wait a few seconds for the home menu to appear (or turn on the set-top box with its own remote, if there is a second one).\n3. Use the arrows to select the « Molotov TV » app and confirm with OK, or go to Orange TV to watch the channels.\n4. Then use the same remote to choose your channels (or the set-top box remote, only to change channels).\n💡 With the set-top box, press SOURCE to choose the right input (HDMI 1 or 2). If that doesn't work, unplug the set-top box and plug it back in.",
    de: "1. Drücken Sie die Power-Taste (rot, ganz oben auf der weißen Fernbedienung), um den Bildschirm einzuschalten.\n2. Warten Sie einige Sekunden, bis das Startmenü erscheint (oder schalten Sie den Decoder mit seiner eigenen Fernbedienung ein, falls es eine zweite gibt).\n3. Wählen Sie mit den Pfeiltasten die App « Molotov TV » und bestätigen Sie mit OK, oder gehen Sie zu Orange TV, um die Sender zu sehen.\n4. Wählen Sie dann mit derselben Fernbedienung Ihre Sender (oder mit der des Decoders, nur zum Umschalten).\n💡 Mit Decoder drücken Sie SOURCE, um den richtigen Eingang zu wählen (HDMI 1 oder 2). Wenn das nicht funktioniert, ziehen Sie den Stecker des Decoders und stecken Sie ihn wieder ein.",
    es: "1. Pulse el botón Power (rojo, en la parte superior del mando blanco) para encender la pantalla.\n2. Espere unos segundos a que aparezca el menú de inicio (o encienda el decodificador con su propio mando, si hay un segundo).\n3. Con las flechas, seleccione la aplicación « Molotov TV » y confirme con OK, o vaya a la TV de Orange para ver los canales.\n4. Use después el mismo mando para elegir sus canales (o el del decodificador, solo para cambiar de canal).\n💡 Con el decodificador, pulse SOURCE para elegir la entrada correcta (HDMI 1 o 2). Si no funciona, desenchufe y vuelva a enchufar el decodificador.",
    it: "1. Premete il tasto Power (rosso, in cima al telecomando bianco) per accendere lo schermo.\n2. Attendete qualche secondo che compaia il menu iniziale (oppure accendete il decoder con il suo telecomando, se ce n'è un secondo).\n3. Con le frecce selezionate l'app « Molotov TV » e confermate con OK, oppure andate sulla TV di Orange per guardare i canali.\n4. Usate poi lo stesso telecomando per scegliere i canali (o quello del decoder, solo per cambiare canale).\n💡 Con il decoder, premete SOURCE per scegliere l'ingresso giusto (HDMI 1 o 2). Se non funziona, scollegate e ricollegate il decoder.",
  },
  "Les poubelles sont à déposer dans les bacs situés dehors, dans la cour. Merci de bien trier vos déchets :\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur au 8 place de la Mare": {
    en: "Please take your rubbish to the bins outside, in the courtyard. Please sort your waste carefully:\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 8 place de la Mare",
    de: "Bitte bringen Sie den Müll zu den Tonnen draußen im Hof. Bitte trennen Sie Ihren Müll sorgfältig:\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container an der 8 place de la Mare",
    es: "Deposite la basura en los contenedores de fuera, en el patio. Por favor, separe bien sus residuos:\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 8 place de la Mare",
    it: "I rifiuti vanno gettati nei bidoni all'esterno, nel cortile. Vi preghiamo di fare con cura la raccolta differenziata:\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\n🍷 Vetro: contenitore all'8 place de la Mare",
  },
  "Lit en mezzanine": {
    en: "Mezzanine bed",
    de: "Bett auf der Galerie",
    es: "Cama en altillo",
    it: "Letto su soppalco",
  },
  "Place de la Mare — arrêt de tram (~2 min)": {
    en: "Place de la Mare — tram stop (~2 min)",
    de: "Place de la Mare — Straßenbahnhaltestelle (~2 Min.)",
    es: "Plaza de la Mare — parada de tranvía (~2 min)",
    it: "Place de la Mare — fermata del tram (~2 min)",
  },
  "Jardin des Plantes (~5 min)": {
    en: "Jardin des Plantes botanical garden (~5 min)",
    de: "Jardin des Plantes, botanischer Garten (~5 Min.)",
    es: "Jardin des Plantes, jardín botánico (~5 min)",
    it: "Jardin des Plantes, orto botanico (~5 min)",
  },
  "Place Saint-Martin & rue Écuyère — bars & restaurants (~6 min)": {
    en: "Place Saint-Martin & rue Écuyère — bars & restaurants (~6 min)",
    de: "Place Saint-Martin & rue Écuyère — Bars & Restaurants (~6 Min.)",
    es: "Plaza Saint-Martin y rue Écuyère — bares y restaurantes (~6 min)",
    it: "Place Saint-Martin e rue Écuyère — bar e ristoranti (~6 min)",
  },
  "Place Saint-Sauveur — cafés & marché du vendredi (~8 min)": {
    en: "Place Saint-Sauveur — cafés & Friday market (~8 min)",
    de: "Place Saint-Sauveur — Cafés & Freitagsmarkt (~8 Min.)",
    es: "Plaza Saint-Sauveur — cafés y mercado del viernes (~8 min)",
    it: "Place Saint-Sauveur — caffè e mercato del venerdì (~8 min)",
  },
  "Abbaye aux Hommes & hôtel de ville (~10 min)": {
    en: "Abbaye aux Hommes & town hall (~10 min)",
    de: "Abbaye aux Hommes & Rathaus (~10 Min.)",
    es: "Abbaye aux Hommes y ayuntamiento (~10 min)",
    it: "Abbaye aux Hommes e municipio (~10 min)",
  },
  "Vous êtes dans un coin résidentiel calme, entre la place de la Mare et le Jardin des Plantes. Le centre historique, ses restaurants et ses commerces sont à quelques minutes à pied, et le tram, tout proche, vous emmène à la gare et partout en ville.": {
    en: "You're in a quiet residential area between Place de la Mare and the Jardin des Plantes. The historic centre, with its restaurants and shops, is a few minutes' walk away, and the nearby tram takes you to the station and all over town.",
    de: "Sie wohnen in einer ruhigen Wohngegend zwischen der Place de la Mare und dem Jardin des Plantes. Das historische Zentrum mit seinen Restaurants und Geschäften ist nur wenige Gehminuten entfernt, und die nahe Straßenbahn bringt Sie zum Bahnhof und überallhin in der Stadt.",
    es: "Está en una zona residencial tranquila, entre la plaza de la Mare y el Jardin des Plantes. El centro histórico, con sus restaurantes y tiendas, está a pocos minutos a pie, y el tranvía, muy cerca, le lleva a la estación y a toda la ciudad.",
    it: "Siete in una zona residenziale tranquilla, tra place de la Mare e il Jardin des Plantes. Il centro storico, con i suoi ristoranti e negozi, è a pochi minuti a piedi, e il tram, vicinissimo, vi porta alla stazione e ovunque in città.",
  },
  "Restaurant, place de l'Ancienne Boucherie.": {
    en: "Restaurant, place de l'Ancienne Boucherie.",
    de: "Restaurant, place de l'Ancienne Boucherie.",
    es: "Restaurante, place de l'Ancienne Boucherie.",
    it: "Ristorante, place de l'Ancienne Boucherie.",
  },
  "L'arrêt de tram le plus proche (~2 min à pied).": {
    en: "The nearest tram stop (~2 min walk).",
    de: "Die nächste Straßenbahnhaltestelle (~2 Min. zu Fuß).",
    es: "La parada de tranvía más cercana (~2 min a pie).",
    it: "La fermata del tram più vicina (~2 min a piedi).",
  },
  "Tabac-presse, rue Pémagnie.": {
    en: "Tobacconist and newsagent, rue Pémagnie.",
    de: "Tabak- und Zeitschriftenladen, rue Pémagnie.",
    es: "Estanco y prensa, rue Pémagnie.",
    it: "Tabaccheria ed edicola, rue Pémagnie.",
  },
  "Pour une balade au calme, le Jardin des Plantes est à 5 minutes à pied. Le vendredi matin, ne manquez pas le marché de la place Saint-Sauveur. Côté table, les adresses préférées d'Agathe : Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque et A Contre Sens. Pour un verre : Nonna ou Âmbar.": {
    en: "For a peaceful stroll, the Jardin des Plantes is a 5-minute walk away. On Friday morning, don't miss the market on Place Saint-Sauveur. For eating out, Agathe's favourite spots: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque and A Contre Sens. For a drink: Nonna or Âmbar.",
    de: "Für einen ruhigen Spaziergang liegt der Jardin des Plantes 5 Gehminuten entfernt. Verpassen Sie am Freitagmorgen nicht den Markt auf der Place Saint-Sauveur. Zum Essen Agathes Lieblingsadressen: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque und A Contre Sens. Auf einen Drink: Nonna oder Âmbar.",
    es: "Para un paseo tranquilo, el Jardin des Plantes está a 5 minutos a pie. El viernes por la mañana, no se pierda el mercado de la plaza Saint-Sauveur. Para comer, los sitios preferidos de Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque y A Contre Sens. Para tomar algo: Nonna o Âmbar.",
    it: "Per una passeggiata tranquilla, il Jardin des Plantes è a 5 minuti a piedi. Il venerdì mattina non perdetevi il mercato di place Saint-Sauveur. Per mangiare, gli indirizzi preferiti di Agathe: Les Burgers de Colette, Le Mug, Bœuf & Cow, Le Bistrot Basque e A Contre Sens. Per un drink: Nonna o Âmbar.",
  },
};
