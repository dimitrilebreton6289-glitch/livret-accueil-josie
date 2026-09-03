/**
 * Traductions du CONTENU des logements (textes rédigés en français).
 *
 * Clé = le texte français EXACT tel qu'écrit dans data/logements/*.ts
 * Valeur = ses traductions. Si une langue manque, le français est affiché.
 *
 * Les noms propres (Edulis, Lidl, Le Sélect…) ne sont pas traduits :
 * il suffit de ne pas les lister ici.
 */
type Tr = { en?: string; de?: string; es?: string; it?: string };

export const CONTENT: Record<string, Tr> = {
  // ------------------------------------------ Houlgate 1 — étapes d'arrivée
  "Rendez-vous au 23 rue des Bains, à Houlgate.": {
    en: "Meet at 23 rue des Bains, in Houlgate.",
    de: "Treffpunkt: 23 rue des Bains, in Houlgate.",
    es: "Punto de encuentro: 23 rue des Bains, en Houlgate.",
    it: "Appuntamento al 23 rue des Bains, a Houlgate.",
  },
  "Poussez la porte bleue à côté du restaurant. Il n'y a ni clé ni badge pour cette porte : il suffit de la pousser pour entrer.": {
    en: "Push open the blue door next to the restaurant. There is no key or badge for this door — just push it to enter.",
    de: "Drücken Sie die blaue Tür neben dem Restaurant auf. Für diese Tür gibt es weder Schlüssel noch Chip — einfach aufdrücken und eintreten.",
    es: "Empuje la puerta azul junto al restaurante. No hay llave ni tarjeta para esta puerta: basta con empujarla para entrar.",
    it: "Spingete la porta blu accanto al ristorante. Non serve né chiave né badge per questa porta: basta spingerla per entrare.",
  },
  "Dirigez-vous au fond du couloir, puis montez au 2ᵉ étage.": {
    en: "Go to the end of the hallway, then up to the 2nd floor.",
    de: "Gehen Sie bis zum Ende des Flurs und dann hinauf in den 2. Stock.",
    es: "Diríjase al fondo del pasillo y suba a la 2.ª planta.",
    it: "Andate in fondo al corridoio, poi salite al 2° piano.",
  },
  "Dirigez-vous au fond du couloir, puis montez au 3ᵉ étage.": {
    en: "Go to the end of the hallway, then up to the 3rd floor.",
    de: "Gehen Sie bis zum Ende des Flurs und dann hinauf in den 3. Stock.",
    es: "Diríjase al fondo del pasillo y suba a la 3.ª planta.",
    it: "Andate in fondo al corridoio, poi salite al 3° piano.",
  },
  "Au 3ᵉ étage, dirigez-vous vers la porte numéro 3.": {
    en: "On the 3rd floor, head to door number 3.",
    de: "Gehen Sie im 3. Stock zur Tür Nummer 3.",
    es: "En la 3.ª planta, diríjase a la puerta número 3.",
    it: "Al 3° piano, dirigetevi verso la porta numero 3.",
  },
  "Au 3ᵉ étage, dirigez-vous vers la porte numéro 4.": {
    en: "On the 3rd floor, head to door number 4.",
    de: "Gehen Sie im 3. Stock zur Tür Nummer 4.",
    es: "En la 3.ª planta, diríjase a la puerta número 4.",
    it: "Al 3° piano, dirigetevi verso la porta numero 4.",
  },
  "Au 2ᵉ étage, dirigez-vous vers la porte numéro 1.": {
    en: "On the 2nd floor, head to door number 1.",
    de: "Gehen Sie im 2. Stock zur Tür Nummer 1.",
    es: "En la 2.ª planta, diríjase a la puerta número 1.",
    it: "Al 2° piano, dirigetevi verso la porta numero 1.",
  },
  "Au 2ᵉ étage, dirigez-vous vers la porte numéro 2.": {
    en: "On the 2nd floor, head to door number 2.",
    de: "Gehen Sie im 2. Stock zur Tür Nummer 2.",
    es: "En la 2.ª planta, diríjase a la puerta número 2.",
    it: "Al 2° piano, dirigetevi verso la porta numero 2.",
  },
  "Une boîte à clés se trouve à côté de cette porte. Composez le code reçu par message dans la conversation, puis ouvrez-la comme le montre la vidéo ci-dessous et prenez la clé.": {
    en: "A key box is next to this door. Enter the code sent to you by message in the conversation, then open it as shown in the video below and take the key.",
    de: "Neben dieser Tür befindet sich ein Schlüsselkasten. Geben Sie den Code ein, den Sie per Nachricht im Chat erhalten haben, öffnen Sie ihn wie im Video unten gezeigt und nehmen Sie den Schlüssel.",
    es: "Junto a esta puerta hay una caja de llaves. Introduzca el código recibido por mensaje en la conversación, ábrala como se muestra en el vídeo de abajo y coja la llave.",
    it: "Accanto a questa porta si trova una cassetta delle chiavi. Componete il codice ricevuto tramite messaggio nella conversazione, apritela come mostrato nel video qui sotto e prendete la chiave.",
  },
  "Ouvrez la porte avec la clé.": {
    en: "Open the door with the key.",
    de: "Öffnen Sie die Tür mit dem Schlüssel.",
    es: "Abra la puerta con la llave.",
    it: "Aprite la porta con la chiave.",
  },
  "Bienvenue et bon séjour ! 🌊": {
    en: "Welcome, and enjoy your stay! 🌊",
    de: "Willkommen und einen schönen Aufenthalt! 🌊",
    es: "¡Bienvenido y feliz estancia! 🌊",
    it: "Benvenuti e buon soggiorno! 🌊",
  },
  // ---------------------------------------------------- Houlgate (compléments)
  "Les conteneurs à déchets se trouvent au bord de la rue, devant le Square Claude Debussy, à environ 2 minutes à pied du logement (voir la photo ci-dessous). Merci d'y déposer vos déchets ménagers, en sac fermé, pendant et à la fin de votre séjour.\n🍷 Le verre ne se met pas dans ces conteneurs : déposez-le dans la borne à verre située rue d'Axbridge, à environ 2 minutes à pied (vers le haut de la rue des Bains, côté mer).": {
    en: "The waste containers are on the roadside, in front of Square Claude Debussy, about a 2-minute walk from the flat (see the photo below). Please dispose of your household waste there, in a closed bag, during and at the end of your stay.\n🍷 Glass does not go in these containers: drop it in the glass bank on Rue d'Axbridge, about a 2-minute walk away (toward the top of Rue des Bains, on the sea side).",
    de: "Die Abfallcontainer stehen am Straßenrand, vor dem Square Claude Debussy, etwa 2 Gehminuten von der Wohnung entfernt (siehe Foto unten). Bitte entsorgen Sie dort Ihren Hausmüll in einem geschlossenen Beutel, während und am Ende Ihres Aufenthalts.\n🍷 Glas gehört nicht in diese Container: Werfen Sie es in den Glascontainer in der Rue d'Axbridge, etwa 2 Gehminuten entfernt (Richtung oberes Ende der Rue des Bains, zur Meerseite).",
    es: "Los contenedores de residuos están al borde de la calle, frente al Square Claude Debussy, a unos 2 minutos a pie del alojamiento (vea la foto de abajo). Deposite allí sus residuos domésticos, en una bolsa cerrada, durante y al final de su estancia.\n🍷 El vidrio no va en estos contenedores: deposítelo en el contenedor de vidrio de la Rue d'Axbridge, a unos 2 minutos a pie (hacia la parte alta de la Rue des Bains, del lado del mar).",
    it: "I contenitori dei rifiuti si trovano a bordo strada, davanti allo Square Claude Debussy, a circa 2 minuti a piedi dall'alloggio (vedi la foto qui sotto). Depositate lì i vostri rifiuti domestici, in un sacchetto chiuso, durante e alla fine del soggiorno.\n🍷 Il vetro non va in questi contenitori: gettatelo nella campana del vetro in Rue d'Axbridge, a circa 2 minuti a piedi (verso la parte alta della Rue des Bains, lato mare).",
  },
  "Église Saint-Aubin (~4 min)": {
    en: "Saint-Aubin church (~4 min)",
    de: "Kirche Saint-Aubin (~4 Min.)",
    es: "Iglesia Saint-Aubin (~4 min)",
    it: "Chiesa Saint-Aubin (~4 min)",
  },
  "📶 WiFi": {
    en: "📶 Wi-Fi",
    de: "📶 WLAN",
    es: "📶 Wifi",
    it: "📶 Wi-Fi",
  },
  "🚶 2ᵉ étage sans ascenseur": {
    en: "🚶 2nd floor, no lift",
    de: "🚶 2. Stock ohne Aufzug",
    es: "🚶 2ª planta sin ascensor",
    it: "🚶 2º piano senza ascensore",
  },
  "🚶 3ᵉ étage sans ascenseur": {
    en: "🚶 3rd floor, no lift",
    de: "🚶 3. Stock ohne Aufzug",
    es: "🚶 3ª planta sin ascensor",
    it: "🚶 3º piano senza ascensore",
  },
  "🛁 Salle d'eau": {
    en: "🛁 Shower room",
    de: "🛁 Duschbad",
    es: "🛁 Cuarto de baño",
    it: "🛁 Bagno",
  },
  "Congélateur": {
    en: "Freezer",
    de: "Gefrierschrank",
    es: "Congelador",
    it: "Congelatore",
  },
  "Canapé-lit (140 × 190)": {
    en: "Sofa bed (140 × 190)",
    de: "Schlafsofa (140 × 190)",
    es: "Sofá cama (140 × 190)",
    it: "Divano letto (140 × 190)",
  },
  "Canapé-lit d'appoint (140 × 190)": {
    en: "Extra sofa bed (140 × 190)",
    de: "Zusätzliches Schlafsofa (140 × 190)",
    es: "Sofá cama de apoyo (140 × 190)",
    it: "Divano letto aggiuntivo (140 × 190)",
  },
  "Montez jusqu'au 2ᵉ étage, à la porte du logement « Houlgate 1 ».": {
    en: "Go up to the 2nd floor, to the door of the “Houlgate 1” apartment.",
    de: "Gehen Sie hinauf in den 2. Stock, zur Tür der Wohnung „Houlgate 1“.",
    es: "Suba a la 2.ª planta, hasta la puerta del alojamiento «Houlgate 1».",
    it: "Salite al 2º piano, alla porta dell'alloggio «Houlgate 1».",
  },
  "Montez jusqu'au 2ᵉ étage, à la porte du logement « Houlgate 2 ».": {
    en: "Go up to the 2nd floor, to the door of the “Houlgate 2” apartment.",
    de: "Gehen Sie hinauf in den 2. Stock, zur Tür der Wohnung „Houlgate 2“.",
    es: "Suba a la 2.ª planta, hasta la puerta del alojamiento «Houlgate 2».",
    it: "Salite al 2º piano, alla porta dell'alloggio «Houlgate 2».",
  },
  "Montez jusqu'au 3ᵉ étage, à la porte du logement « Houlgate 3 ».": {
    en: "Go up to the 3rd floor, to the door of the “Houlgate 3” apartment.",
    de: "Gehen Sie hinauf in den 3. Stock, zur Tür der Wohnung „Houlgate 3“.",
    es: "Suba a la 3.ª planta, hasta la puerta del alojamiento «Houlgate 3».",
    it: "Salite al 3º piano, alla porta dell'alloggio «Houlgate 3».",
  },
  "Montez jusqu'au 3ᵉ étage, à la porte du logement « Houlgate 4 ».": {
    en: "Go up to the 3rd floor, to the door of the “Houlgate 4” apartment.",
    de: "Gehen Sie hinauf in den 3. Stock, zur Tür der Wohnung „Houlgate 4“.",
    es: "Suba a la 3.ª planta, hasta la puerta del alojamiento «Houlgate 4».",
    it: "Salite al 3º piano, alla porta dell'alloggio «Houlgate 4».",
  },
  // ---------------------------------------------------------------- Arrivée
  "À partir de 16h": {
    en: "From 4 p.m.",
    de: "Ab 16 Uhr",
    es: "A partir de las 16 h",
    it: "Dalle 16",
  },
  "Entrée indépendante, depuis une rue calme à sens unique": {
    en: "Independent entrance, from a quiet one-way street",
    de: "Eigener Eingang, von einer ruhigen Einbahnstraße",
    es: "Entrada independiente, desde una calle tranquila de sentido único",
    it: "Ingresso indipendente, da una via tranquilla a senso unico",
  },
  "Clés dans une boîte à clé sécurisée à code, près de l'entrée": {
    en: "Keys in a secure code lockbox, near the entrance",
    de: "Schlüssel in einem gesicherten Code-Schlüsselkasten am Eingang",
    es: "Llaves en una caja de seguridad con código, junto a la entrada",
    it: "Chiavi in una cassetta di sicurezza con codice, vicino all'ingresso",
  },
  "Dirigez-vous vers le poteau rouge à gauche du portail : la boîte à clé s'y trouve. Composez le code, récupérez les clés, puis refermez la boîte et brouillez le code.":
    {
      en: "Head to the red post on the left of the gate: the key box is there. Enter the code, take the keys, then close the box and scramble the code.",
      de: "Gehen Sie zum roten Pfosten links vom Tor: dort befindet sich der Schlüsselkasten. Geben Sie den Code ein, nehmen Sie die Schlüssel, schließen Sie dann den Kasten und verstellen Sie den Code.",
      es: "Diríjase al poste rojo a la izquierda de la verja: allí está la caja de llaves. Introduzca el código, coja las llaves, luego cierre la caja y descomponga el código.",
      it: "Recatevi al pilastro rosso a sinistra del cancello: lì si trova la cassetta delle chiavi. Componete il codice, prendete le chiavi, poi richiudete la cassetta e azzerate il codice.",
    },
  "Au portail, ouvrez le cadenas avec la clé correspondante (celle de la photo), puis ouvrez le portail.":
    {
      en: "At the gate, open the padlock with the matching key (the one in the photo), then open the gate.",
      de: "Öffnen Sie am Tor das Vorhängeschloss mit dem passenden Schlüssel (dem auf dem Foto) und öffnen Sie dann das Tor.",
      es: "En la verja, abra el candado con la llave correspondiente (la de la foto) y luego abra la verja.",
      it: "Al cancello, aprite il lucchetto con la chiave corrispondente (quella della foto), poi aprite il cancello.",
    },
  "Ouvrez enfin la porte de la maison avec la grande clé.": {
    en: "Finally, open the front door of the house with the large key.",
    de: "Öffnen Sie schließlich die Haustür mit dem großen Schlüssel.",
    es: "Por último, abra la puerta de la casa con la llave grande.",
    it: "Infine, aprite la porta di casa con la chiave grande.",
  },
  "Stationnement gratuit et facile dans la rue, devant la maison ou à quelques mètres.":
    {
      en: "Free and easy street parking, in front of the house or a few metres away.",
      de: "Kostenloses und einfaches Parken auf der Straße, vor dem Haus oder wenige Meter entfernt.",
      es: "Aparcamiento gratuito y fácil en la calle, frente a la casa o a pocos metros.",
      it: "Parcheggio gratuito e facile in strada, davanti alla casa o a pochi metri.",
    },
  "Dépôt de bagages possible avant l'arrivée ou après le départ, sur demande.":
    {
      en: "Luggage drop-off possible before check-in or after check-out, on request.",
      de: "Gepäckaufbewahrung vor der Anreise oder nach der Abreise auf Anfrage möglich.",
      es: "Posibilidad de dejar el equipaje antes de la llegada o después de la salida, bajo petición.",
      it: "Possibilità di deposito bagagli prima dell'arrivo o dopo la partenza, su richiesta.",
    },
  "Cuisine entièrement équipée": {
    en: "Fully equipped kitchen",
    de: "Voll ausgestattete Küche",
    es: "Cocina totalmente equipada",
    it: "Cucina completamente attrezzata",
  },
  "Coin repas pour 4 personnes": {
    en: "Dining area for 4",
    de: "Essbereich für 4 Personen",
    es: "Zona de comedor para 4 personas",
    it: "Zona pranzo per 4 persone",
  },
  'Salon avec TV 55" 4K The Frame': {
    en: 'Living room with 55" 4K The Frame TV',
    de: 'Wohnzimmer mit 55" 4K The Frame TV',
    es: 'Salón con TV 55" 4K The Frame',
    it: 'Soggiorno con TV 55" 4K The Frame',
  },
  "WC indépendant": {
    en: "Separate toilet",
    de: "Separates WC",
    es: "Aseo independiente",
    it: "WC separato",
  },
  "Palier avec vestiaire": {
    en: "Landing with cloakroom",
    de: "Treppenabsatz mit Garderobe",
    es: "Rellano con guardarropa",
    it: "Pianerottolo con guardaroba",
  },
  "Chambre 1 — lit 160×200": {
    en: "Bedroom 1 — 160×200 bed",
    de: "Schlafzimmer 1 — Bett 160×200",
    es: "Dormitorio 1 — cama 160×200",
    it: "Camera 1 — letto 160×200",
  },
  "Chambre 2 — lit 160×200": {
    en: "Bedroom 2 — 160×200 bed",
    de: "Schlafzimmer 2 — Bett 160×200",
    es: "Dormitorio 2 — cama 160×200",
    it: "Camera 2 — letto 160×200",
  },
  "Salle de douche avec WC": {
    en: "Shower room with toilet",
    de: "Duschbad mit WC",
    es: "Cuarto de ducha con aseo",
    it: "Bagno con doccia e WC",
  },
  "Espace privatif sans vis-à-vis": {
    en: "Private outdoor space, not overlooked",
    de: "Privater Außenbereich ohne Einsicht",
    es: "Espacio exterior privado sin vistas de vecinos",
    it: "Spazio esterno privato senza dirimpettai",
  },
  "Table à manger": {
    en: "Dining table",
    de: "Esstisch",
    es: "Mesa de comedor",
    it: "Tavolo da pranzo",
  },
  "Barbecue au charbon de bois": {
    en: "Charcoal barbecue",
    de: "Holzkohlegrill",
    es: "Barbacoa de carbón",
    it: "Barbecue a carbone",
  },
  "Salon de jardin": {
    en: "Garden furniture set",
    de: "Gartenmöbel",
    es: "Mobiliario de jardín",
    it: "Salotto da giardino",
  },

  // ------------------------------------------------------------- Pratique
  "Draps fournis et lits faits": {
    en: "Linen provided and beds made",
    de: "Bettwäsche gestellt, Betten gemacht",
    es: "Ropa de cama incluida y camas hechas",
    it: "Lenzuola fornite e letti rifatti",
  },
  "Une serviette de toilette par personne": {
    en: "One towel per person",
    de: "Ein Handtuch pro Person",
    es: "Una toalla por persona",
    it: "Un asciugamano a persona",
  },
  "Lit parapluie à disposition": {
    en: "Travel cot available",
    de: "Reisebett verfügbar",
    es: "Cuna de viaje disponible",
    it: "Lettino da viaggio a disposizione",
  },
  "Lave-linge, fer à repasser et étendoir": {
    en: "Washing machine, iron and drying rack",
    de: "Waschmaschine, Bügeleisen und Wäscheständer",
    es: "Lavadora, plancha y tendedero",
    it: "Lavatrice, ferro da stiro e stendino",
  },
  "Le calme doit être respecté de 23h00 à 08h00.": {
    en: "Quiet hours from 11 p.m. to 8 a.m.",
    de: "Ruhezeit von 23:00 bis 08:00 Uhr.",
    es: "Se debe respetar el silencio de 23:00 a 8:00.",
    it: "Silenzio dalle 23:00 alle 08:00.",
  },
  "Tri sélectif. Merci de rassembler toutes les poubelles, salle de bain comprise, et de déposer le sac sur la terrasse au départ.":
    {
      en: "Waste sorting. Please gather all the rubbish, including the bathroom, and leave the bag on the terrace when you leave.",
      de: "Mülltrennung. Bitte sammeln Sie den gesamten Müll, auch aus dem Bad, und stellen Sie den Beutel bei der Abreise auf die Terrasse.",
      es: "Reciclaje selectivo. Por favor, reúna toda la basura, incluido el baño, y deje la bolsa en la terraza al salir.",
      it: "Raccolta differenziata. Si prega di raccogliere tutti i rifiuti, bagno compreso, e di lasciare il sacchetto sulla terrazza alla partenza.",
    },

  // -------------------------------------------------- Électroménager / équipements
  Four: { en: "Oven", de: "Backofen", es: "Horno", it: "Forno" },
  "Micro-ondes": {
    en: "Microwave",
    de: "Mikrowelle",
    es: "Microondas",
    it: "Microonde",
  },
  "Plaque vitrocéramique": {
    en: "Ceramic hob",
    de: "Ceran-Kochfeld",
    es: "Placa vitrocerámica",
    it: "Piano in vetroceramica",
  },
  "Réfrigérateur-congélateur": {
    en: "Fridge-freezer",
    de: "Kühl-Gefrierkombination",
    es: "Frigorífico-congelador",
    it: "Frigorifero-congelatore",
  },
  "Lave-vaisselle": {
    en: "Dishwasher",
    de: "Geschirrspüler",
    es: "Lavavajillas",
    it: "Lavastoviglie",
  },
  "Lave-linge": {
    en: "Washing machine",
    de: "Waschmaschine",
    es: "Lavadora",
    it: "Lavatrice",
  },
  Bouilloire: {
    en: "Kettle",
    de: "Wasserkocher",
    es: "Hervidor",
    it: "Bollitore",
  },
  "Grille-pain": {
    en: "Toaster",
    de: "Toaster",
    es: "Tostadora",
    it: "Tostapane",
  },
  "Machine Nespresso": {
    en: "Nespresso machine",
    de: "Nespresso-Maschine",
    es: "Cafetera Nespresso",
    it: "Macchina Nespresso",
  },
  "Appareil à raclette": {
    en: "Raclette grill",
    de: "Raclette-Gerät",
    es: "Aparato de raclette",
    it: "Apparecchio per raclette",
  },
  "Crêpe party": {
    en: "Crêpe maker",
    de: "Crêpe-Maker",
    es: "Crepera",
    it: "Crêpiera",
  },
  Chauffage: {
    en: "Heating",
    de: "Heizung",
    es: "Calefacción",
    it: "Riscaldamento",
  },
  "Eau chaude": {
    en: "Hot water",
    de: "Warmwasser",
    es: "Agua caliente",
    it: "Acqua calda",
  },
  "Sèche-cheveux": {
    en: "Hairdryer",
    de: "Haartrockner",
    es: "Secador de pelo",
    it: "Asciugacapelli",
  },
  "Fer à repasser": {
    en: "Iron",
    de: "Bügeleisen",
    es: "Plancha",
    it: "Ferro da stiro",
  },
  "TV 4K The Frame": {
    en: "4K The Frame TV",
    de: "4K The Frame TV",
    es: "TV 4K The Frame",
    it: "TV 4K The Frame",
  },
  WiFi: { en: "WiFi", de: "WLAN", es: "WiFi", it: "WiFi" },
  "Barbecue charbon": {
    en: "Charcoal barbecue",
    de: "Holzkohlegrill",
    es: "Barbacoa de carbón",
    it: "Barbecue a carbone",
  },
  "Mobilier de jardin": {
    en: "Garden furniture",
    de: "Gartenmöbel",
    es: "Mobiliario de jardín",
    it: "Mobili da giardino",
  },
  "Lit parapluie": {
    en: "Travel cot",
    de: "Reisebett",
    es: "Cuna de viaje",
    it: "Lettino da viaggio",
  },
  "Shampoing & gel douche": {
    en: "Shampoo & shower gel",
    de: "Shampoo & Duschgel",
    es: "Champú y gel de ducha",
    it: "Shampoo e bagnoschiuma",
  },
  "Linge de lit & serviettes": {
    en: "Bed linen & towels",
    de: "Bettwäsche & Handtücher",
    es: "Ropa de cama y toallas",
    it: "Biancheria da letto e asciugamani",
  },
  "Produits de base": {
    en: "Basic supplies",
    de: "Grundausstattung",
    es: "Productos básicos",
    it: "Prodotti di base",
  },
  "Stores occultants": {
    en: "Blackout blinds",
    de: "Verdunkelungsrollos",
    es: "Estores opacos",
    it: "Tende oscuranti",
  },
  "Cintres & rangement": {
    en: "Hangers & storage",
    de: "Kleiderbügel & Stauraum",
    es: "Perchas y almacenamiento",
    it: "Grucce e spazio per riporre",
  },
  "Entrée privée": {
    en: "Private entrance",
    de: "Privateingang",
    es: "Entrada privada",
    it: "Ingresso privato",
  },
  "Jardin clos privé": {
    en: "Private enclosed garden",
    de: "Privater umzäunter Garten",
    es: "Jardín privado vallado",
    it: "Giardino privato recintato",
  },

  // ------------------------------------------------------------- Départ
  "Besoin d'un ménage en cours de séjour ? Disponible en supplément, du lundi au jeudi de 8h à 15h. Contactez-nous.":
    {
      en: "Would you like cleaning during your stay? Available at extra cost, Monday to Thursday from 8 a.m. to 3 p.m. Contact us.",
      de: "Möchten Sie während Ihres Aufenthalts eine Reinigung? Gegen Aufpreis verfügbar, Montag bis Donnerstag von 8 bis 15 Uhr. Kontaktieren Sie uns.",
      es: "¿Desea una limpieza durante su estancia? Disponible con coste adicional, de lunes a jueves de 8 a 15 h. Contáctenos.",
      it: "Desidera una pulizia durante il soggiorno? Disponibile a pagamento, dal lunedì al giovedì dalle 8 alle 15. Contattateci.",
    },
  "Jusqu'à 10h": {
    en: "Until 10 a.m.",
    de: "Bis 10 Uhr",
    es: "Hasta las 10 h",
    it: "Fino alle 10",
  },
  "Rassembler les serviettes utilisées dans la salle de bain": {
    en: "Gather the used towels in the bathroom",
    de: "Benutzte Handtücher im Bad zusammenlegen",
    es: "Reunir las toallas usadas en el baño",
    it: "Raccogliere gli asciugamani usati in bagno",
  },
  "Rassembler toutes les poubelles (salle de bain comprise) et déposer le sac sur la terrasse":
    {
      en: "Gather all the rubbish (including the bathroom) and leave the bag on the terrace",
      de: "Den gesamten Müll (auch aus dem Bad) sammeln und den Beutel auf die Terrasse stellen",
      es: "Reunir toda la basura (incluido el baño) y dejar la bolsa en la terraza",
      it: "Raccogliere tutti i rifiuti (bagno compreso) e lasciare il sacchetto sulla terrazza",
    },
  "Éteindre les lumières et baisser les radiateurs": {
    en: "Turn off the lights and turn down the radiators",
    de: "Lichter ausschalten und Heizkörper herunterdrehen",
    es: "Apagar las luces y bajar los radiadores",
    it: "Spegnere le luci e abbassare i termosifoni",
  },
  "Bien verrouiller la porte d'entrée et le portillon": {
    en: "Lock the front door and the gate properly",
    de: "Haustür und Gartentür gut abschließen",
    es: "Cerrar bien la puerta de entrada y el portillo",
    it: "Chiudere bene la porta d'ingresso e il cancelletto",
  },
  "Remettre les clés dans la boîte à code": {
    en: "Put the keys back in the lockbox",
    de: "Schlüssel zurück in den Code-Kasten legen",
    es: "Devolver las llaves a la caja con código",
    it: "Rimettere le chiavi nella cassetta con codice",
  },

  // ------------------------------------------------------ Quartier (à pied)
  "Boulangerie": {
    en: "Bakery",
    de: "Bäckerei",
    es: "Panadería",
    it: "Panetteria",
  },
  "Pharmacie": {
    en: "Pharmacy",
    de: "Apotheke",
    es: "Farmacia",
    it: "Farmacia",
  },
  "Bureau de tabac": {
    en: "Tobacconist",
    de: "Tabakladen",
    es: "Estanco",
    it: "Tabaccheria",
  },
  "Supérette": {
    en: "Convenience store",
    de: "Mini-Supermarkt",
    es: "Tienda de barrio",
    it: "Minimarket",
  },
  "La plage et le centre-ville sont accessibles à pied en 15 à 20 minutes, ou en voiture.":
    {
      en: "The beach and town centre are a 15–20 minute walk away, or a short drive.",
      de: "Strand und Stadtzentrum sind in 15–20 Minuten zu Fuß oder mit dem Auto erreichbar.",
      es: "La playa y el centro están a 15–20 minutos a pie, o en coche.",
      it: "La spiaggia e il centro sono raggiungibili a piedi in 15–20 minuti, o in auto.",
    },

  // ------------------------------------------ Autour de moi — noms génériques
  "Grand marché du samedi matin": {
    en: "Saturday morning market",
    de: "Großer Samstagsmarkt",
    es: "Gran mercado del sábado",
    it: "Grande mercato del sabato mattina",
  },
  "Marché couvert (Les Halles)": {
    en: "Covered market (Les Halles)",
    de: "Markthalle (Les Halles)",
    es: "Mercado cubierto (Les Halles)",
    it: "Mercato coperto (Les Halles)",
  },
  "Arrêts de bus « Stade Dior »": {
    en: "“Stade Dior” bus stops",
    de: "Bushaltestellen „Stade Dior“",
    es: "Paradas de autobús «Stade Dior»",
    it: "Fermate dell'autobus «Stade Dior»",
  },
  "Gare SNCF de Granville": {
    en: "Granville train station",
    de: "Bahnhof Granville",
    es: "Estación de tren de Granville",
    it: "Stazione ferroviaria di Granville",
  },
  "Cars Nomad (bus régional)": {
    en: "Nomad coaches (regional bus)",
    de: "Nomad-Busse (Regionalbus)",
    es: "Autobuses Nomad (bus regional)",
    it: "Bus Nomad (autobus regionale)",
  },
  "Bureaux de tabac & presse": {
    en: "Tobacconists & newsagents",
    de: "Tabak- & Zeitungsläden",
    es: "Estancos y prensa",
    it: "Tabaccherie ed edicole",
  },
  "Station TotalEnergies": {
    en: "TotalEnergies station",
    de: "TotalEnergies-Tankstelle",
    es: "Estación TotalEnergies",
    it: "Stazione TotalEnergies",
  },
  "Station E.Leclerc": {
    en: "E.Leclerc station",
    de: "E.Leclerc-Tankstelle",
    es: "Estación E.Leclerc",
    it: "Stazione E.Leclerc",
  },
  "Croisière vers les îles Chausey": {
    en: "Cruise to the Chausey islands",
    de: "Bootsfahrt zu den Chausey-Inseln",
    es: "Crucero a las islas Chausey",
    it: "Crociera verso le isole Chausey",
  },

  // -------------------------------------- Autour de moi — descriptions
  "Cœur historique de la cité corsaire : remparts, ruelles pavées, église Notre-Dame et panoramas sur la mer.":
    {
      en: "Historic heart of the corsair city: ramparts, cobbled streets, Notre-Dame church and sea views.",
      de: "Historisches Herz der Korsarenstadt: Wälle, Kopfsteinpflastergassen, Notre-Dame-Kirche und Meerblick.",
      es: "Corazón histórico de la ciudad corsaria: murallas, callejuelas empedradas, iglesia Notre-Dame y vistas al mar.",
      it: "Cuore storico della città corsara: bastioni, vicoli acciottolati, chiesa di Notre-Dame e panorami sul mare.",
    },
  "Villa Les Rhumbs, maison d'enfance du couturier, face à la mer. Expositions haute-couture et jardins. Fermé le mardi.":
    {
      en: "Villa Les Rhumbs, the designer's childhood home, facing the sea. Haute-couture exhibitions and gardens. Closed on Tuesdays.",
      de: "Villa Les Rhumbs, das Elternhaus des Couturiers, mit Blick aufs Meer. Haute-Couture-Ausstellungen und Gärten. Dienstags geschlossen.",
      es: "Villa Les Rhumbs, casa de la infancia del modisto, frente al mar. Exposiciones de alta costura y jardines. Cerrado los martes.",
      it: "Villa Les Rhumbs, casa d'infanzia dello stilista, di fronte al mare. Mostre di alta moda e giardini. Chiuso il martedì.",
    },
  "Dans la Haute-Ville : peintures, livres et manuscrits du XXe siècle (Colette, Apollinaire…).":
    {
      en: "In the Upper Town: 20th-century paintings, books and manuscripts (Colette, Apollinaire…).",
      de: "In der Oberstadt: Gemälde, Bücher und Manuskripte des 20. Jahrhunderts (Colette, Apollinaire…).",
      es: "En la Ciudad Alta: pinturas, libros y manuscritos del siglo XX (Colette, Apollinaire…).",
      it: "Nella Città Alta: dipinti, libri e manoscritti del XX secolo (Colette, Apollinaire…).",
    },
  "Dans l'ancien corps de garde de la Haute-Ville : histoire maritime et patrimoine de la cité corsaire.":
    {
      en: "In the Upper Town's former guardhouse: maritime history and heritage of the corsair city.",
      de: "Im ehemaligen Wachhaus der Oberstadt: maritime Geschichte und Erbe der Korsarenstadt.",
      es: "En el antiguo cuerpo de guardia de la Ciudad Alta: historia marítima y patrimonio de la ciudad corsaria.",
      it: "Nell'antico corpo di guardia della Città Alta: storia marittima e patrimonio della città corsara.",
    },
  "Près du port : idéal pour planifier excursions, sorties guidées et croisières.":
    {
      en: "Near the port: ideal for planning trips, guided tours and cruises.",
      de: "In Hafennähe: ideal, um Ausflüge, Führungen und Bootstouren zu planen.",
      es: "Cerca del puerto: ideal para planificar excursiones, visitas guiadas y cruceros.",
      it: "Vicino al porto: ideale per organizzare escursioni, visite guidate e crociere.",
    },
  "L'incontournable « Monaco du Nord » : phare, sémaphore, bunkers et vue sur les îles Chausey. Magnifique au coucher du soleil.":
    {
      en: "The must-see “Monaco of the North”: lighthouse, signal station, bunkers and views of the Chausey islands. Stunning at sunset.",
      de: "Das unverzichtbare „Monaco des Nordens“: Leuchtturm, Signalstation, Bunker und Blick auf die Chausey-Inseln. Herrlich bei Sonnenuntergang.",
      es: "El imprescindible «Mónaco del Norte»: faro, semáforo, búnkeres y vistas a las islas Chausey. Magnífico al atardecer.",
      it: "L'immancabile «Monaco del Nord»: faro, semaforo, bunker e vista sulle isole Chausey. Splendido al tramonto.",
    },
  "Grand parc public verdoyant en plein cœur de Granville : balade nature, aires de jeux et petit parc animalier.":
    {
      en: "Large green public park in the heart of Granville: nature walks, playgrounds and a small animal park.",
      de: "Großer grüner öffentlicher Park im Herzen von Granville: Naturspaziergänge, Spielplätze und ein kleiner Tierpark.",
      es: "Gran parque público y verde en pleno centro de Granville: paseos por la naturaleza, zonas de juegos y un pequeño parque de animales.",
      it: "Grande parco pubblico verdeggiante nel cuore di Granville: passeggiate nella natura, aree giochi e un piccolo parco animali.",
    },
  "Archipel préservé à ~1h de bateau depuis la gare maritime. Plages de rêve, calme absolu, plus grand archipel d'Europe.":
    {
      en: "Unspoilt archipelago ~1h by boat from the ferry terminal. Dream beaches, total calm, the largest archipelago in Europe.",
      de: "Unberührtes Archipel, ~1 Std. mit dem Boot vom Fährterminal. Traumstrände, absolute Ruhe, größtes Archipel Europas.",
      es: "Archipiélago preservado a ~1 h en barco desde la estación marítima. Playas de ensueño, calma absoluta, el mayor archipiélago de Europa.",
      it: "Arcipelago incontaminato a ~1 h di barca dalla stazione marittima. Spiagge da sogno, calma assoluta, il più grande arcipelago d'Europa.",
    },
  "Chemin côtier le long des falaises : balades panoramiques entre la Pointe du Roc et Donville.":
    {
      en: "Coastal path along the cliffs: scenic walks between Pointe du Roc and Donville.",
      de: "Küstenweg entlang der Klippen: malerische Spaziergänge zwischen Pointe du Roc und Donville.",
      es: "Sendero costero por los acantilados: paseos panorámicos entre la Pointe du Roc y Donville.",
      it: "Sentiero costiero lungo le scogliere: passeggiate panoramiche tra la Pointe du Roc e Donville.",
    },
  "Jardin suspendu de la Villa Les Rhumbs, face à la mer. Roseraie et pergola fleurie, accès libre.":
    {
      en: "Hanging garden of Villa Les Rhumbs, facing the sea. Rose garden and flowery pergola, free entry.",
      de: "Hängender Garten der Villa Les Rhumbs mit Meerblick. Rosengarten und blühende Pergola, freier Eintritt.",
      es: "Jardín colgante de la Villa Les Rhumbs, frente al mar. Rosaleda y pérgola florida, acceso libre.",
      it: "Giardino pensile di Villa Les Rhumbs, di fronte al mare. Roseto e pergola fiorita, ingresso libero.",
    },
  "La plage centrale, au pied de la vieille ville : promenade Belle Époque et piscine d'eau de mer à marée basse.":
    {
      en: "The central beach, at the foot of the old town: Belle Époque promenade and seawater pool at low tide.",
      de: "Der zentrale Strand am Fuße der Altstadt: Belle-Époque-Promenade und Meerwasserbecken bei Ebbe.",
      es: "La playa central, al pie del casco antiguo: paseo Belle Époque y piscina de agua de mar con marea baja.",
      it: "La spiaggia centrale, ai piedi della città vecchia: passeggiata Belle Époque e piscina di acqua di mare con la bassa marea.",
    },
  "Juste à côté du port de plaisance, plus abritée. Pratique avant ou après une balade au port.":
    {
      en: "Right next to the marina, more sheltered. Handy before or after a stroll around the port.",
      de: "Direkt am Yachthafen, geschützter. Praktisch vor oder nach einem Spaziergang am Hafen.",
      es: "Junto al puerto deportivo, más resguardada. Práctica antes o después de un paseo por el puerto.",
      it: "Proprio accanto al porto turistico, più riparata. Comoda prima o dopo una passeggiata al porto.",
    },
  "Grande plage de sable familiale, juste au nord de Granville. Baignade surveillée l'été.":
    {
      en: "Large family-friendly sandy beach, just north of Granville. Supervised swimming in summer.",
      de: "Großer familienfreundlicher Sandstrand, nördlich von Granville. Bewachtes Baden im Sommer.",
      es: "Gran playa de arena familiar, justo al norte de Granville. Baño vigilado en verano.",
      it: "Ampia spiaggia di sabbia per famiglie, appena a nord di Granville. Balneazione sorvegliata in estate.",
    },
  "Charmante plage surveillée l'été, avec bassin de baignade à marée basse.": {
    en: "Charming beach, supervised in summer, with a tidal bathing pool.",
    de: "Reizender Strand, im Sommer bewacht, mit Gezeiten-Badebecken.",
    es: "Encantadora playa vigilada en verano, con piscina de baño en marea baja.",
    it: "Graziosa spiaggia sorvegliata in estate, con vasca balneare con la bassa marea.",
  },
  "Rue des Juifs — adresse intimiste très bien notée, cuisine moderne et soignée.":
    {
      en: "Rue des Juifs — intimate, highly rated spot, modern and refined cuisine.",
      de: "Rue des Juifs — intime, hoch bewertete Adresse, moderne und feine Küche.",
      es: "Rue des Juifs — local íntimo muy bien valorado, cocina moderna y cuidada.",
      it: "Rue des Juifs — locale intimo molto apprezzato, cucina moderna e curata.",
    },
  "Table bistronomique de référence, produits locaux et de la mer.": {
    en: "A benchmark bistronomic restaurant, local and seafood produce.",
    de: "Bistronomisches Spitzenrestaurant, regionale Produkte und Meeresfrüchte.",
    es: "Restaurante bistronómico de referencia, productos locales y del mar.",
    it: "Ristorante bistronomico di riferimento, prodotti locali e di mare.",
  },
  "Rue Lecampion — belle adresse, plats frais dans un cadre agréable.": {
    en: "Rue Lecampion — lovely spot, fresh dishes in a pleasant setting.",
    de: "Rue Lecampion — schöne Adresse, frische Gerichte in angenehmem Ambiente.",
    es: "Rue Lecampion — bonito local, platos frescos en un entorno agradable.",
    it: "Rue Lecampion — bell'indirizzo, piatti freschi in un ambiente piacevole.",
  },
  "Boulevard des Amiraux — huîtres et fruits de mer ultra-frais face au port.":
    {
      en: "Boulevard des Amiraux — ultra-fresh oysters and seafood facing the port.",
      de: "Boulevard des Amiraux — ultrafrische Austern und Meeresfrüchte mit Hafenblick.",
      es: "Boulevard des Amiraux — ostras y marisco ultrafrescos frente al puerto.",
      it: "Boulevard des Amiraux — ostriche e frutti di mare freschissimi di fronte al porto.",
    },
  "Rue des Juifs — sandwichs et encas haut de gamme faits maison, produits frais.":
    {
      en: "Rue des Juifs — premium homemade sandwiches and snacks, fresh produce.",
      de: "Rue des Juifs — hochwertige hausgemachte Sandwiches und Snacks, frische Zutaten.",
      es: "Rue des Juifs — bocadillos y aperitivos caseros de calidad, productos frescos.",
      it: "Rue des Juifs — panini e snack artigianali di qualità, prodotti freschi.",
    },
  "Impasse Alsace-Lorraine — burgers gourmands, tout près du centre.": {
    en: "Impasse Alsace-Lorraine — gourmet burgers, very close to the centre.",
    de: "Impasse Alsace-Lorraine — Gourmet-Burger, ganz nah am Zentrum.",
    es: "Impasse Alsace-Lorraine — hamburguesas gourmet, muy cerca del centro.",
    it: "Impasse Alsace-Lorraine — hamburger gourmet, vicinissimo al centro.",
  },
  "Rue du Conillot — réputé pour les meilleurs burgers artisanaux du coin.": {
    en: "Rue du Conillot — known for the best craft burgers around.",
    de: "Rue du Conillot — bekannt für die besten handwerklichen Burger der Gegend.",
    es: "Rue du Conillot — famoso por las mejores hamburguesas artesanales de la zona.",
    it: "Rue du Conillot — rinomato per i migliori hamburger artigianali della zona.",
  },
  "Rue du Port — excellentes pizzas artisanales, à emporter ou sur le pouce.": {
    en: "Rue du Port — excellent artisan pizzas, takeaway or on the go.",
    de: "Rue du Port — ausgezeichnete handwerkliche Pizzen, zum Mitnehmen oder für unterwegs.",
    es: "Rue du Port — excelentes pizzas artesanales, para llevar o sobre la marcha.",
    it: "Rue du Port — ottime pizze artigianali, da asporto o al volo.",
  },
  "Au coin de la rue, avenue des Matignon — café le matin, brasserie le midi, verre en fin de journée. Sans la voiture !":
    {
      en: "Around the corner on Avenue des Matignon — coffee in the morning, brasserie at lunch, a drink in the evening. No car needed!",
      de: "Um die Ecke an der Avenue des Matignon — Kaffee am Morgen, Brasserie mittags, ein Drink am Abend. Ohne Auto!",
      es: "A la vuelta de la esquina, en la Avenue des Matignon — café por la mañana, brasería al mediodía, una copa al final del día. ¡Sin coche!",
      it: "Dietro l'angolo, in Avenue des Matignon — caffè la mattina, brasserie a pranzo, un drink a fine giornata. Senza auto!",
    },
  "Rue Saint-Sauveur — bar à vins & tapas chaleureux, avec épicerie fine.": {
    en: "Rue Saint-Sauveur — cosy wine & tapas bar, with a deli.",
    de: "Rue Saint-Sauveur — gemütliche Wein- & Tapas-Bar mit Feinkostladen.",
    es: "Rue Saint-Sauveur — acogedor bar de vinos y tapas, con tienda gourmet.",
    it: "Rue Saint-Sauveur — accogliente wine bar & tapas, con gastronomia.",
  },
  "Café/bar sympa et bien placé pour se détendre en centre-ville.": {
    en: "Nice, well-located café/bar to relax in the town centre.",
    de: "Nettes, gut gelegenes Café/Bar zum Entspannen im Zentrum.",
    es: "Café/bar agradable y bien ubicado para relajarse en el centro.",
    it: "Simpatico caffè/bar ben posizionato per rilassarsi in centro.",
  },
  "Place Cambernon (Haute-Ville) — bar d'ambiance culturel : planches, concerts réguliers.":
    {
      en: "Place Cambernon (Upper Town) — lively cultural bar: sharing boards, regular concerts.",
      de: "Place Cambernon (Oberstadt) — stimmungsvolle Kulturbar: Platten, regelmäßige Konzerte.",
      es: "Place Cambernon (Ciudad Alta) — bar de ambiente cultural: tablas para compartir, conciertos habituales.",
      it: "Place Cambernon (Città Alta) — bar d'atmosfera culturale: taglieri, concerti regolari.",
    },
  "Face au port de plaisance — ambiance maritime décontractée, appréciée des locaux.":
    {
      en: "Facing the marina — relaxed maritime vibe, popular with locals.",
      de: "Mit Blick auf den Yachthafen — entspanntes maritimes Ambiente, bei Einheimischen beliebt.",
      es: "Frente al puerto deportivo — ambiente marinero relajado, apreciado por los locales.",
      it: "Di fronte al porto turistico — atmosfera marinara rilassata, apprezzata dalla gente del posto.",
    },
  "Place du Maréchal-Foch (complexe du Casino), face au Plat Gousset. Le club de la ville pour finir la nuit, généralement du jeudi au dimanche dès 22h30.":
    {
      en: "Place du Maréchal-Foch (Casino complex), facing Plat Gousset. The town's club to end the night, usually Thursday to Sunday from 10:30 p.m.",
      de: "Place du Maréchal-Foch (Casino-Komplex), gegenüber dem Plat Gousset. Der Club der Stadt zum Ausklang der Nacht, meist Donnerstag bis Sonntag ab 22:30 Uhr.",
      es: "Place du Maréchal-Foch (complejo del Casino), frente al Plat Gousset. La discoteca de la ciudad para terminar la noche, normalmente de jueves a domingo desde las 22:30.",
      it: "Place du Maréchal-Foch (complesso del Casinò), di fronte al Plat Gousset. Il club della città per finire la notte, di solito dal giovedì alla domenica dalle 22:30.",
    },
  "Cinéma de centre-ville (3 salles, 3D), boulevard d'Hauteserve. Films récents et art & essai.":
    {
      en: "Town-centre cinema (3 screens, 3D), Boulevard d'Hauteserve. Recent releases and arthouse films.",
      de: "Stadtkino (3 Säle, 3D), Boulevard d'Hauteserve. Aktuelle Filme und Arthouse.",
      es: "Cine del centro (3 salas, 3D), Boulevard d'Hauteserve. Estrenos recientes y cine de autor.",
      it: "Cinema del centro (3 sale, 3D), Boulevard d'Hauteserve. Film recenti e d'essai.",
    },
  "La scène culturelle majeure de Granville : concerts, théâtre et danse toute l'année.":
    {
      en: "Granville's major cultural venue: concerts, theatre and dance all year round.",
      de: "Granvilles wichtigste Kulturbühne: Konzerte, Theater und Tanz das ganze Jahr.",
      es: "El principal escenario cultural de Granville: conciertos, teatro y danza todo el año.",
      it: "Il principale palcoscenico culturale di Granville: concerti, teatro e danza tutto l'anno.",
    },
  "Face à la mer au Plat Gousset (place du Maréchal-Foch) : jeux, animations et restaurant avec vue.":
    {
      en: "Facing the sea at Plat Gousset (Place du Maréchal-Foch): games, entertainment and a restaurant with a view.",
      de: "Am Meer am Plat Gousset (Place du Maréchal-Foch): Spiele, Unterhaltung und Restaurant mit Aussicht.",
      es: "Frente al mar en Plat Gousset (Place du Maréchal-Foch): juegos, animación y restaurante con vistas.",
      it: "Di fronte al mare al Plat Gousset (Place du Maréchal-Foch): giochi, animazione e ristorante con vista.",
    },
  "Sur la Pointe du Roc (1 bd Vaufleury) : aquarium, féerie de coquillages et minéraux. Idéal en famille.":
    {
      en: "On Pointe du Roc (1 bd Vaufleury): aquarium, a wonderland of shells and minerals. Great for families.",
      de: "Auf der Pointe du Roc (1 bd Vaufleury): Aquarium, eine Märchenwelt aus Muscheln und Mineralien. Ideal für Familien.",
      es: "En la Pointe du Roc (1 bd Vaufleury): acuario, un mundo mágico de conchas y minerales. Ideal en familia.",
      it: "Sulla Pointe du Roc (1 bd Vaufleury): acquario, un mondo fiabesco di conchiglie e minerali. Ideale per le famiglie.",
    },
  "Départ de la gare maritime (port de Hérel) avec la Compagnie Jolie France. Réservez à l'avance en saison.":
    {
      en: "Departs from the ferry terminal (Hérel port) with Compagnie Jolie France. Book ahead in season.",
      de: "Abfahrt vom Fährterminal (Hafen Hérel) mit der Compagnie Jolie France. In der Saison im Voraus buchen.",
      es: "Salida desde la estación marítima (puerto de Hérel) con la Compagnie Jolie France. Reserve con antelación en temporada.",
      it: "Partenza dalla stazione marittima (porto di Hérel) con la Compagnie Jolie France. Prenotare in anticipo in alta stagione.",
    },
  "Au port de Hérel : char à voile, catamaran, paddle, kayak, longe-côte… Locations et stages.":
    {
      en: "At Hérel port: land sailing, catamaran, paddleboard, kayak, sea walking… Rentals and courses.",
      de: "Am Hafen Hérel: Strandsegeln, Katamaran, SUP, Kajak, Küstenwandern… Verleih und Kurse.",
      es: "En el puerto de Hérel: carro a vela, catamarán, paddle, kayak, marcha acuática… Alquileres y cursos.",
      it: "Al porto di Hérel: carro a vela, catamarano, paddle, kayak, longe-côte… Noleggi e corsi.",
    },
  "Avenue des Matignon, à 3 min à pied — pain frais, viennoiseries du matin et formules sandwichs le midi.":
    {
      en: "Avenue des Matignon, a 3-min walk — fresh bread, morning pastries and lunch sandwich deals.",
      de: "Avenue des Matignon, 3 Min. zu Fuß — frisches Brot, Frühstücksgebäck und Sandwich-Menüs mittags.",
      es: "Avenue des Matignon, a 3 min a pie — pan fresco, bollería por la mañana y menús de bocadillos al mediodía.",
      it: "Avenue des Matignon, a 3 min a piedi — pane fresco, viennoiserie al mattino e menù sandwich a pranzo.",
    },
  "Rue Couraye — l'artisan boucher de référence à Granville, réputé pour ses viandes et préparations.":
    {
      en: "Rue Couraye — Granville's go-to artisan butcher, renowned for its meats and prepared dishes.",
      de: "Rue Couraye — der renommierte Metzger in Granville, bekannt für Fleisch und Spezialitäten.",
      es: "Rue Couraye — el carnicero artesano de referencia en Granville, famoso por sus carnes y preparaciones.",
      it: "Rue Couraye — il macellaio artigiano di riferimento a Granville, rinomato per carni e preparazioni.",
    },
  "Rue Couraye — très bonne boucherie-charcuterie artisanale.": {
    en: "Rue Couraye — very good artisan butcher and deli.",
    de: "Rue Couraye — sehr gute handwerkliche Metzgerei und Feinkost.",
    es: "Rue Couraye — muy buena carnicería-charcutería artesanal.",
    it: "Rue Couraye — ottima macelleria-salumeria artigianale.",
  },
  "« La Flûte Gana » — boulangerie-pâtisserie traditionnelle, pain et viennoiseries.":
    {
      en: "“La Flûte Gana” — traditional bakery-patisserie, bread and pastries.",
      de: "„La Flûte Gana“ — traditionelle Bäckerei-Konditorei, Brot und Gebäck.",
      es: "«La Flûte Gana» — panadería-pastelería tradicional, pan y bollería.",
      it: "«La Flûte Gana» — panetteria-pasticceria tradizionale, pane e viennoiserie.",
    },
  "Pain, gâteaux et formules snacking le midi.": {
    en: "Bread, cakes and lunchtime snack deals.",
    de: "Brot, Kuchen und Snack-Menüs mittags.",
    es: "Pan, pasteles y menús de snack al mediodía.",
    it: "Pane, dolci e menù snack a pranzo.",
  },
  "Juste en face, rue du Vieux Moulin — supérette d'ultra-proximité pour les courses de dernière minute.":
    {
      en: "Right opposite, Rue du Vieux Moulin — ultra-local convenience store for last-minute shopping.",
      de: "Direkt gegenüber, Rue du Vieux Moulin — Mini-Supermarkt für Einkäufe in letzter Minute.",
      es: "Justo enfrente, Rue du Vieux Moulin — tienda de ultraproximidad para compras de última hora.",
      it: "Proprio di fronte, Rue du Vieux Moulin — minimarket di prossimità per la spesa dell'ultimo minuto.",
    },
  "Avenue Aristide Briand — le plus proche du logement, pratique et rapide.": {
    en: "Avenue Aristide Briand — the closest to the property, handy and quick.",
    de: "Avenue Aristide Briand — am nächsten zur Unterkunft, praktisch und schnell.",
    es: "Avenue Aristide Briand — el más cercano al alojamiento, práctico y rápido.",
    it: "Avenue Aristide Briand — il più vicino all'alloggio, pratico e veloce.",
  },
  "Courses d'appoint, ouvert tard et le dimanche matin.": {
    en: "Top-up shopping, open late and on Sunday mornings.",
    de: "Ergänzungseinkäufe, lange und sonntagvormittags geöffnet.",
    es: "Compras de complemento, abierto hasta tarde y los domingos por la mañana.",
    it: "Spesa veloce, aperto fino a tardi e la domenica mattina.",
  },
  "Autre supérette de proximité, près du port.": {
    en: "Another convenience store nearby, close to the port.",
    de: "Weiterer Mini-Supermarkt in der Nähe, beim Hafen.",
    es: "Otra tienda de proximidad, cerca del puerto.",
    it: "Altro minimarket di zona, vicino al porto.",
  },
  "Grand hypermarché de la zone commerciale (Yquelon), avec station-service. Pour les grosses courses.":
    {
      en: "Large hypermarket in the retail park (Yquelon), with a petrol station. For the big shop.",
      de: "Großer Hypermarkt im Gewerbegebiet (Yquelon), mit Tankstelle. Für den Großeinkauf.",
      es: "Gran hipermercado en la zona comercial (Yquelon), con gasolinera. Para la compra grande.",
      it: "Grande ipermercato nella zona commerciale (Yquelon), con stazione di servizio. Per la spesa grande.",
    },
  "Avenue des Matignon, à deux pas — bonne adresse de quartier pour de jolies bouteilles et des spécialités locales à offrir ou partager.":
    {
      en: "Avenue des Matignon, just steps away — a good local spot for nice bottles and local specialities to give or share.",
      de: "Avenue des Matignon, nur wenige Schritte entfernt — gute Adresse im Viertel für schöne Flaschen und lokale Spezialitäten zum Verschenken oder Teilen.",
      es: "Avenue des Matignon, a dos pasos — buena dirección de barrio para bonitas botellas y especialidades locales para regalar o compartir.",
      it: "Avenue des Matignon, a due passi — buon indirizzo di quartiere per belle bottiglie e specialità locali da regalare o condividere.",
    },
  "Le rendez-vous de la semaine, au Cours Jonville et sous les halles : produits de la mer, primeurs, fromages, circuits courts.":
    {
      en: "The week's highlight, on Cours Jonville and under the covered market: seafood, fresh produce, cheeses, local farmers.",
      de: "Der Wochenhöhepunkt, am Cours Jonville und in der Markthalle: Meeresfrüchte, Obst & Gemüse, Käse, regionale Erzeuger.",
      es: "La cita de la semana, en el Cours Jonville y bajo el mercado cubierto: productos del mar, frutas y verduras, quesos, circuitos cortos.",
      it: "L'appuntamento della settimana, al Cours Jonville e sotto il mercato coperto: prodotti del mare, frutta e verdura, formaggi, filiera corta.",
    },
  "Halle historique de 1936, en plein centre : commerçants de bouche et producteurs locaux.":
    {
      en: "Historic 1936 market hall, in the centre: food stalls and local producers.",
      de: "Historische Markthalle von 1936, im Zentrum: Lebensmittelhändler und lokale Erzeuger.",
      es: "Mercado cubierto histórico de 1936, en pleno centro: comerciantes de alimentación y productores locales.",
      it: "Mercato coperto storico del 1936, in pieno centro: negozi alimentari e produttori locali.",
    },
  "À moins de 50 m, avenue des Matignon (deux arrêts) — pour rejoindre le centre-ville, le port ou la gare sans voiture.":
    {
      en: "Less than 50 m away, Avenue des Matignon (two stops) — to reach the town centre, port or station without a car.",
      de: "Weniger als 50 m entfernt, Avenue des Matignon (zwei Haltestellen) — um ohne Auto ins Zentrum, zum Hafen oder Bahnhof zu kommen.",
      es: "A menos de 50 m, Avenue des Matignon (dos paradas) — para llegar al centro, el puerto o la estación sin coche.",
      it: "A meno di 50 m, Avenue des Matignon (due fermate) — per raggiungere il centro, il porto o la stazione senza auto.",
    },
  "Ligne directe Paris-Montparnasse (~3h) et réseaux régionaux. Place Pierre Sémard.":
    {
      en: "Direct line to Paris-Montparnasse (~3h) and regional networks. Place Pierre Sémard.",
      de: "Direktverbindung nach Paris-Montparnasse (~3 Std.) und Regionalnetze. Place Pierre Sémard.",
      es: "Línea directa a París-Montparnasse (~3 h) y redes regionales. Place Pierre Sémard.",
      it: "Linea diretta per Parigi-Montparnasse (~3h) e reti regionali. Place Pierre Sémard.",
    },
  "Réseau de bus Nomad pour rejoindre Avranches, Coutances et les villages alentour.":
    {
      en: "Nomad bus network to reach Avranches, Coutances and nearby villages.",
      de: "Nomad-Busnetz nach Avranches, Coutances und in die umliegenden Dörfer.",
      es: "Red de autobuses Nomad para llegar a Avranches, Coutances y los pueblos cercanos.",
      it: "Rete di autobus Nomad per raggiungere Avranches, Coutances e i paesi vicini.",
    },
  "La plus proche du logement. Pharmacie de garde : composez le 3237.": {
    en: "The closest to the property. On-call pharmacy: dial 3237.",
    de: "Am nächsten zur Unterkunft. Notdienst-Apotheke: 3237 wählen.",
    es: "La más cercana al alojamiento. Farmacia de guardia: marque el 3237.",
    it: "La più vicina all'alloggio. Farmacia di turno: comporre il 3237.",
  },
  "Avenue du Maréchal Leclerc, juste à côté de la gare.": {
    en: "Avenue du Maréchal Leclerc, right next to the station.",
    de: "Avenue du Maréchal Leclerc, direkt am Bahnhof.",
    es: "Avenue du Maréchal Leclerc, junto a la estación.",
    it: "Avenue du Maréchal Leclerc, proprio accanto alla stazione.",
  },
  "Cours Jonville, en plein centre-ville.": {
    en: "Cours Jonville, right in the town centre.",
    de: "Cours Jonville, mitten im Zentrum.",
    es: "Cours Jonville, en pleno centro.",
    it: "Cours Jonville, in pieno centro.",
  },
  "Avenue de la Libération, à l'est de la ville.": {
    en: "Avenue de la Libération, east of town.",
    de: "Avenue de la Libération, östlich der Stadt.",
    es: "Avenue de la Libération, al este de la ciudad.",
    it: "Avenue de la Libération, a est della città.",
  },
  "À l'hypermarché (Yquelon) : carburant souvent moins cher.": {
    en: "At the hypermarket (Yquelon): often cheaper fuel.",
    de: "Beim Hypermarkt (Yquelon): oft günstigerer Kraftstoff.",
    es: "En el hipermercado (Yquelon): combustible a menudo más barato.",
    it: "All'ipermercato (Yquelon): carburante spesso più economico.",
  },
  "Laverie automatique en libre-service, en centre-ville. D'autres laveries se trouvent aussi avenue Aristide Briand, près du logement.":
    {
      en: "Self-service launderette in the town centre. Other launderettes are also on Avenue Aristide Briand, near the property.",
      de: "SB-Waschsalon im Zentrum. Weitere Waschsalons gibt es an der Avenue Aristide Briand, nahe der Unterkunft.",
      es: "Lavandería autoservicio en el centro. Hay otras lavanderías en la Avenue Aristide Briand, cerca del alojamiento.",
      it: "Lavanderia self-service in centro. Altre lavanderie si trovano anche in Avenue Aristide Briand, vicino all'alloggio.",
    },
  "Plusieurs bureaux de tabac et de presse avenue Aristide Briand (près du logement) et rue Couraye.":
    {
      en: "Several tobacconists and newsagents on Avenue Aristide Briand (near the property) and Rue Couraye.",
      de: "Mehrere Tabak- und Zeitungsläden an der Avenue Aristide Briand (nahe der Unterkunft) und der Rue Couraye.",
      es: "Varios estancos y quioscos de prensa en la Avenue Aristide Briand (cerca del alojamiento) y la Rue Couraye.",
      it: "Diverse tabaccherie ed edicole in Avenue Aristide Briand (vicino all'alloggio) e in Rue Couraye.",
    },
  "Les fruits de mer et le homard des îles Chausey, LA spécialité de Granville : à déguster face au port, par exemple à la Cabane sur mer (voir Restaurants).":
    {
      en: "Seafood and lobster from the Chausey islands, THE Granville speciality: enjoy it facing the port, for example at Cabane sur mer (see Restaurants).",
      de: "Meeresfrüchte und Hummer von den Chausey-Inseln, DIE Spezialität von Granville: am besten mit Hafenblick genießen, zum Beispiel in der Cabane sur mer (siehe Restaurants).",
      es: "El marisco y la langosta de las islas Chausey, LA especialidad de Granville: a degustar frente al puerto, por ejemplo en Cabane sur mer (ver Restaurantes).",
      it: "Frutti di mare e aragosta delle isole Chausey, LA specialità di Granville: da gustare di fronte al porto, ad esempio alla Cabane sur mer (vedi Ristoranti).",
    },

  // ----------------------------------------------------------- Numéros utiles
  "Disponible sur la conversation Airbnb ou par téléphone en cas de besoin.": {
    en: "Available via the Airbnb chat or by phone if needed.",
    de: "Bei Bedarf über den Airbnb-Chat oder telefonisch erreichbar.",
    es: "Disponible en el chat de Airbnb o por teléfono si lo necesita.",
    it: "Disponibile nella chat di Airbnb o per telefono in caso di necessità.",
  },

  // =================================================================
  // Caen / Vaugueux 2 — Autour de moi
  // =================================================================
  "Forteresse fondée par Guillaume le Conquérant vers 1060, l'une des plus vastes enceintes médiévales d'Europe. Remparts, jardins et belle vue sur la ville. Accès libre à l'enceinte, à ~5 min à pied. Tél. 02 31 30 47 60.":
    {
      en: "Fortress founded by William the Conqueror around 1060, one of the largest medieval enclosures in Europe. Ramparts, gardens and lovely views over the town. Free access to the grounds, a ~5 min walk. Tel. 02 31 30 47 60.",
      de: "Festung, um 1060 von Wilhelm dem Eroberer gegründet – eine der größten mittelalterlichen Anlagen Europas. Mauern, Gärten und schöner Blick über die Stadt. Freier Zugang zum Gelände, ~5 Min. zu Fuß. Tel. 02 31 30 47 60.",
      es: "Fortaleza fundada por Guillermo el Conquistador hacia 1060, uno de los recintos medievales más grandes de Europa. Murallas, jardines y bonitas vistas de la ciudad. Acceso libre al recinto, a ~5 min a pie. Tel. 02 31 30 47 60.",
      it: "Fortezza fondata da Guglielmo il Conquistatore verso il 1060, una delle più vaste cinte medievali d'Europa. Mura, giardini e bella vista sulla città. Accesso libero al recinto, a ~5 min a piedi. Tel. 02 31 30 47 60.",
    },
  "Joyau du gothique flamboyant au cœur de la ville, face au château. Clocher remarquable et chevet richement sculpté.":
    {
      en: "A flamboyant Gothic gem in the heart of the city, facing the castle. Remarkable bell tower and richly carved chevet.",
      de: "Ein Juwel der Flamboyantgotik im Herzen der Stadt, gegenüber der Burg. Bemerkenswerter Glockenturm und reich verzierter Chor.",
      es: "Joya del gótico flamígero en el corazón de la ciudad, frente al castillo. Campanario notable y cabecera ricamente esculpida.",
      it: "Gioiello del gotico fiammeggiante nel cuore della città, di fronte al castello. Campanile notevole e abside riccamente scolpita.",
    },
  "Esplanade Jean-Marie Louvel. Fondée par Guillaume le Conquérant, qui y repose. Magnifique abbatiale ; le bâtiment abrite aujourd'hui l'hôtel de ville.":
    {
      en: "Esplanade Jean-Marie Louvel. Founded by William the Conqueror, who is buried here. A magnificent abbey church; the building now houses the town hall.",
      de: "Esplanade Jean-Marie Louvel. Gegründet von Wilhelm dem Eroberer, der hier ruht. Prächtige Abteikirche; das Gebäude beherbergt heute das Rathaus.",
      es: "Esplanade Jean-Marie Louvel. Fundada por Guillermo el Conquistador, que reposa aquí. Magnífica iglesia abacial; el edificio alberga hoy el ayuntamiento.",
      it: "Esplanade Jean-Marie Louvel. Fondata da Guglielmo il Conquistatore, che vi riposa. Magnifica abbaziale; l'edificio ospita oggi il municipio.",
    },
  "Place Reine Mathilde. Fondée par la reine Mathilde, qui y est inhumée. Belle église romane et jardins, siège du Conseil régional. Tél. 02 31 06 98 98.":
    {
      en: "Place Reine Mathilde. Founded by Queen Matilda, who is buried here. Beautiful Romanesque church and gardens, seat of the Regional Council. Tel. 02 31 06 98 98.",
      de: "Place Reine Mathilde. Gegründet von Königin Mathilde, die hier bestattet ist. Schöne romanische Kirche und Gärten, Sitz des Regionalrats. Tel. 02 31 06 98 98.",
      es: "Place Reine Mathilde. Fundada por la reina Matilde, que está enterrada aquí. Bella iglesia románica y jardines, sede del Consejo Regional. Tel. 02 31 06 98 98.",
      it: "Place Reine Mathilde. Fondata dalla regina Matilde, che vi è sepolta. Bella chiesa romanica e giardini, sede del Consiglio regionale. Tel. 02 31 06 98 98.",
    },
  "Dans l'enceinte du château : histoire et patrimoine de la Normandie, des origines à nos jours.":
    {
      en: "Within the castle grounds: the history and heritage of Normandy, from its origins to the present day.",
      de: "Innerhalb der Burganlage: Geschichte und Kulturerbe der Normandie von den Anfängen bis heute.",
      es: "En el recinto del castillo: historia y patrimonio de Normandía, desde los orígenes hasta hoy.",
      it: "All'interno del castello: storia e patrimonio della Normandia, dalle origini ai giorni nostri.",
    },
  "L'une des plus anciennes maisons à pans de bois de Caen (XVe s.), rue de Geôle, à deux pas du château.":
    {
      en: "One of the oldest half-timbered houses in Caen (15th c.), on rue de Geôle, just steps from the castle.",
      de: "Eines der ältesten Fachwerkhäuser von Caen (15. Jh.), in der Rue de Geôle, nur wenige Schritte von der Burg.",
      es: "Una de las casas con entramado de madera más antiguas de Caen (s. XV), en la rue de Geôle, a dos pasos del castillo.",
      it: "Una delle più antiche case a graticcio di Caen (XV sec.), in rue de Geôle, a due passi dal castello.",
    },
  "Esplanade Général Eisenhower. Le grand musée pour la Paix : Seconde Guerre mondiale, Débarquement et Bataille de Normandie. Incontournable, à ~10 min en voiture. Tél. 02 31 06 06 45.":
    {
      en: "Esplanade Général Eisenhower. The great museum for Peace: WWII, the D-Day Landings and the Battle of Normandy. A must-see, ~10 min by car. Tel. 02 31 06 06 45.",
      de: "Esplanade Général Eisenhower. Das große Friedensmuseum: Zweiter Weltkrieg, Landung und Schlacht um die Normandie. Ein Muss, ~10 Min. mit dem Auto. Tel. 02 31 06 06 45.",
      es: "Esplanade Général Eisenhower. El gran museo por la Paz: Segunda Guerra Mundial, Desembarco y Batalla de Normandía. Imprescindible, a ~10 min en coche. Tel. 02 31 06 06 45.",
      it: "Esplanade Général Eisenhower. Il grande museo per la Pace: Seconda guerra mondiale, Sbarco e Battaglia di Normandia. Imperdibile, a ~10 min in auto. Tel. 02 31 06 06 45.",
    },
  "Dans le château : riche collection de peintures (XVe–XXe s.) et beau parc de sculptures. Entrée des collections permanentes gratuite. Tél. 02 31 30 47 60.":
    {
      en: "In the castle: a rich collection of paintings (15th–20th c.) and a fine sculpture park. Free entry to the permanent collections. Tel. 02 31 30 47 60.",
      de: "In der Burg: reiche Gemäldesammlung (15.–20. Jh.) und schöner Skulpturenpark. Freier Eintritt in die Dauerausstellungen. Tel. 02 31 30 47 60.",
      es: "En el castillo: rica colección de pinturas (s. XV–XX) y bonito parque de esculturas. Entrada gratuita a las colecciones permanentes. Tel. 02 31 30 47 60.",
      it: "Nel castello: ricca collezione di dipinti (XV–XX sec.) e bel parco di sculture. Ingresso gratuito alle collezioni permanenti. Tel. 02 31 30 47 60.",
    },
  "Arromanches et ses musées : la Côte de Nacre et le D-Day à 30–45 min de route.":
    {
      en: "Arromanches and its museums: the Côte de Nacre and D-Day, 30–45 min away by road.",
      de: "Arromanches und seine Museen: die Côte de Nacre und der D-Day, 30–45 Min. mit dem Auto.",
      es: "Arromanches y sus museos: la Côte de Nacre y el Día D, a 30–45 min en coche.",
      it: "Arromanches e i suoi musei: la Côte de Nacre e il D-Day, a 30–45 min di strada.",
    },
  "Au-dessus d'Omaha Beach : le cimetière américain de Normandie, lieu de mémoire saisissant. À ~1h de route. Tél. 02 31 51 62 00.":
    {
      en: "Above Omaha Beach: the Normandy American Cemetery, a deeply moving memorial site. About 1h away by road. Tel. 02 31 51 62 00.",
      de: "Oberhalb von Omaha Beach: der amerikanische Friedhof der Normandie, ein ergreifender Gedenkort. Etwa 1 Std. mit dem Auto. Tel. 02 31 51 62 00.",
      es: "Sobre Omaha Beach: el cementerio americano de Normandía, un lugar de memoria conmovedor. A ~1 h en coche. Tel. 02 31 51 62 00.",
      it: "Sopra Omaha Beach: il cimitero americano della Normandia, luogo della memoria toccante. A ~1 ora di strada. Tel. 02 31 51 62 00.",
    },
  "La célèbre merveille de l'Occident, son abbaye et sa baie. Une excursion à la journée, à ~1h15 de route.":
    {
      en: "The famous Wonder of the West, its abbey and its bay. A full-day trip, ~1h15 away by road.",
      de: "Das berühmte Wunder des Abendlandes, seine Abtei und seine Bucht. Ein Tagesausflug, ~1 Std. 15 Min. mit dem Auto.",
      es: "La célebre maravilla de Occidente, su abadía y su bahía. Una excursión de un día, a ~1 h 15 en coche.",
      it: "La celebre meraviglia dell'Occidente, la sua abbazia e la sua baia. Una gita di un giorno, a ~1h15 di strada.",
    },
  "Charmant port pittoresque : galeries d'art, le Vieux Bassin, les bateaux et les boutiques. À ~1h de Caen.":
    {
      en: "A charming, picturesque port: art galleries, the Vieux Bassin, boats and shops. About 1h from Caen.",
      de: "Ein charmanter, malerischer Hafen: Kunstgalerien, das Vieux Bassin, Boote und Geschäfte. Etwa 1 Std. von Caen.",
      es: "Encantador puerto pintoresco: galerías de arte, el Vieux Bassin, los barcos y las tiendas. A ~1 h de Caen.",
      it: "Incantevole porto pittoresco: gallerie d'arte, il Vieux Bassin, le barche e le botteghe. A ~1 ora da Caen.",
    },
  "Le port de plaisance en plein centre, à deux pas du logement : terrasses, balades le long des quais et marché du dimanche matin.":
    {
      en: "The marina right in the centre, just steps from the flat: terraces, strolls along the quays and the Sunday morning market.",
      de: "Der Yachthafen mitten im Zentrum, nur wenige Schritte von der Wohnung: Terrassen, Spaziergänge entlang der Kais und Sonntagvormittagsmarkt.",
      es: "El puerto deportivo en pleno centro, a dos pasos del alojamiento: terrazas, paseos por los muelles y mercado del domingo por la mañana.",
      it: "Il porto turistico in pieno centro, a due passi dall'alloggio: terrazze, passeggiate lungo le banchine e mercato della domenica mattina.",
    },
  "Place Blot. Jardin botanique gratuit, serres et collections : un havre de verdure à deux pas du centre. Tél. 02 31 30 48 38.":
    {
      en: "Place Blot. Free botanical garden, greenhouses and collections: a green haven just steps from the centre. Tel. 02 31 30 48 38.",
      de: "Place Blot. Kostenloser botanischer Garten, Gewächshäuser und Sammlungen: eine grüne Oase nahe dem Zentrum. Tel. 02 31 30 48 38.",
      es: "Place Blot. Jardín botánico gratuito, invernaderos y colecciones: un remanso verde a dos pasos del centro. Tel. 02 31 30 48 38.",
      it: "Place Blot. Giardino botanico gratuito, serre e collezioni: un'oasi di verde a due passi dal centro. Tel. 02 31 30 48 38.",
    },
  "Avenue de l'Amiral Mountbatten. Grand parc paysager de 17 ha près du Mémorial : roseraie, labyrinthe et animaux. Idéal en famille. Tél. 02 31 30 41 00.":
    {
      en: "Avenue de l'Amiral Mountbatten. A large 17-ha landscaped park near the Mémorial: rose garden, maze and animals. Great for families. Tel. 02 31 30 41 00.",
      de: "Avenue de l'Amiral Mountbatten. Großer 17-ha-Landschaftspark beim Mémorial: Rosengarten, Labyrinth und Tiere. Ideal für Familien. Tel. 02 31 30 41 00.",
      es: "Avenue de l'Amiral Mountbatten. Gran parque paisajístico de 17 ha cerca del Mémorial: rosaleda, laberinto y animales. Ideal en familia. Tel. 02 31 30 41 00.",
      it: "Avenue de l'Amiral Mountbatten. Grande parco paesaggistico di 17 ha vicino al Mémorial: roseto, labirinto e animali. Ideale in famiglia. Tel. 02 31 30 41 00.",
    },
  "Vaste prairie naturelle en plein cœur de ville, le long de l'Orne, avec l'hippodrome. Parfaite pour les balades et le jogging.":
    {
      en: "A vast natural meadow in the heart of the city, along the Orne, with the racecourse. Perfect for walks and jogging.",
      de: "Weite natürliche Wiese mitten in der Stadt, entlang der Orne, mit der Pferderennbahn. Perfekt für Spaziergänge und Jogging.",
      es: "Amplia pradera natural en pleno corazón de la ciudad, a lo largo del Orne, con el hipódromo. Perfecta para paseos y footing.",
      it: "Vasta prateria naturale nel cuore della città, lungo l'Orne, con l'ippodromo. Perfetta per passeggiate e jogging.",
    },
  "La plage la plus proche (~20 min) : grande plage de sable, casino et front de mer animé. Embarcadère des ferries vers l'Angleterre.":
    {
      en: "The closest beach (~20 min): a large sandy beach, casino and lively seafront. Ferry terminal to England.",
      de: "Der nächste Strand (~20 Min.): großer Sandstrand, Casino und lebhafte Strandpromenade. Fährhafen nach England.",
      es: "La playa más cercana (~20 min): gran playa de arena, casino y paseo marítimo animado. Embarcadero de ferris a Inglaterra.",
      it: "La spiaggia più vicina (~20 min): grande spiaggia di sabbia, casinò e lungomare animato. Imbarco dei traghetti per l'Inghilterra.",
    },
  "Promenade des Planches. La plage chic et ses parasols, à ~40 min : planches, villas et glamour. Tél. 02 31 14 40 00.":
    {
      en: "Promenade des Planches. The chic beach and its parasols, ~40 min away: boardwalk, villas and glamour. Tel. 02 31 14 40 00.",
      de: "Promenade des Planches. Der schicke Strand und seine Sonnenschirme, ~40 Min.: Holzpromenade, Villen und Glamour. Tel. 02 31 14 40 00.",
      es: "Promenade des Planches. La playa chic y sus sombrillas, a ~40 min: paseo de tablas, villas y glamur. Tel. 02 31 14 40 00.",
      it: "Promenade des Planches. La spiaggia chic e i suoi ombrelloni, a ~40 min: passerella, ville e glamour. Tel. 02 31 14 40 00.",
    },
  "Station balnéaire familiale de la Côte de Nacre, jolies villas Belle Époque.":
    {
      en: "A family seaside resort on the Côte de Nacre, with pretty Belle Époque villas.",
      de: "Familienfreundlicher Badeort an der Côte de Nacre mit hübschen Belle-Époque-Villen.",
      es: "Estación balnearia familiar de la Côte de Nacre, con bonitas villas Belle Époque.",
      it: "Località balneare per famiglie della Côte de Nacre, con graziose ville Belle Époque.",
    },
  "Plage agréable avec parc en bord de mer et centre de thalasso, à ~25 min.":
    {
      en: "A pleasant beach with a seafront park and a thalassotherapy centre, ~25 min away.",
      de: "Angenehmer Strand mit Park am Meer und Thalasso-Zentrum, ~25 Min. entfernt.",
      es: "Playa agradable con parque junto al mar y centro de talasoterapia, a ~25 min.",
      it: "Piacevole spiaggia con parco sul mare e centro talasso, a ~25 min.",
    },
  "Plage du Débarquement réputée pour ses huîtres et le Centre Juno Beach, à ~30 min.":
    {
      en: "A D-Day beach famous for its oysters and the Juno Beach Centre, ~30 min away.",
      de: "Landungsstrand, bekannt für seine Austern und das Juno Beach Centre, ~30 Min. entfernt.",
      es: "Playa del Desembarco famosa por sus ostras y el Centro Juno Beach, a ~30 min.",
      it: "Spiaggia dello Sbarco rinomata per le ostriche e il Juno Beach Centre, a ~30 min.",
    },
  "Bistrot de référence du quartier, au 12 rue Graindorge (juste à côté !). Cuisine du marché soignée, référencé au Guide Michelin. Réservation conseillée. Tél. 02 31 44 26 26.":
    {
      en: "The neighbourhood's standout bistro, at 12 rue Graindorge (right next door!). Refined market cuisine, listed in the Michelin Guide. Booking recommended. Tel. 02 31 44 26 26.",
      de: "Das Vorzeige-Bistro des Viertels, in der Rue Graindorge 12 (gleich nebenan!). Feine Marktküche, im Guide Michelin gelistet. Reservierung empfohlen. Tel. 02 31 44 26 26.",
      es: "El bistró de referencia del barrio, en 12 rue Graindorge (¡justo al lado!). Cuidada cocina de mercado, recomendado en la Guía Michelin. Se aconseja reservar. Tel. 02 31 44 26 26.",
      it: "Il bistrot di riferimento del quartiere, al 12 di rue Graindorge (proprio accanto!). Cucina di mercato curata, segnalato dalla Guida Michelin. Prenotazione consigliata. Tel. 02 31 44 26 26.",
    },
  "Table gastronomique étoilée, 37 quai François Mitterrand, face au port. L'adresse d'exception de Caen. Tél. 02 31 97 44 48.":
    {
      en: "A Michelin-starred gourmet restaurant, 37 quai François Mitterrand, facing the harbour. Caen's exceptional address. Tel. 02 31 97 44 48.",
      de: "Sterneprämiertes Gourmetrestaurant, 37 quai François Mitterrand, am Hafen. Die Ausnahmeadresse von Caen. Tel. 02 31 97 44 48.",
      es: "Restaurante gastronómico con estrella, 37 quai François Mitterrand, frente al puerto. La dirección de excepción de Caen. Tel. 02 31 97 44 48.",
      it: "Ristorante gastronomico stellato, 37 quai François Mitterrand, di fronte al porto. L'indirizzo d'eccezione di Caen. Tel. 02 31 97 44 48.",
    },
  "Cuisine italienne conviviale, 15 rue du Vaugueux, à deux pas du logement. Tél. 02 31 47 97 01.":
    {
      en: "Friendly Italian cuisine, 15 rue du Vaugueux, just steps from the flat. Tel. 02 31 47 97 01.",
      de: "Gemütliche italienische Küche, 15 rue du Vaugueux, nur wenige Schritte von der Wohnung. Tel. 02 31 47 97 01.",
      es: "Cocina italiana acogedora, 15 rue du Vaugueux, a dos pasos del alojamiento. Tel. 02 31 47 97 01.",
      it: "Cucina italiana conviviale, 15 rue du Vaugueux, a due passi dall'alloggio. Tel. 02 31 47 97 01.",
    },
  "Saveurs du Pays basque, 26 quai Vendeuvre, face au port de plaisance. Tél. 02 31 38 21 26.":
    {
      en: "Basque Country flavours, 26 quai Vendeuvre, facing the marina. Tel. 02 31 38 21 26.",
      de: "Aromen des Baskenlands, 26 quai Vendeuvre, gegenüber dem Yachthafen. Tel. 02 31 38 21 26.",
      es: "Sabores del País Vasco, 26 quai Vendeuvre, frente al puerto deportivo. Tel. 02 31 38 21 26.",
      it: "Sapori dei Paesi Baschi, 26 quai Vendeuvre, di fronte al porto turistico. Tel. 02 31 38 21 26.",
    },
  "Restaurant gastronomique réputé, 14 rue de Courtonne, près du port.": {
    en: "A renowned gourmet restaurant, 14 rue de Courtonne, near the harbour.",
    de: "Renommiertes Gourmetrestaurant, 14 rue de Courtonne, in Hafennähe.",
    es: "Reconocido restaurante gastronómico, 14 rue de Courtonne, cerca del puerto.",
    it: "Rinomato ristorante gastronomico, 14 rue de Courtonne, vicino al porto.",
  },
  "Cuisine maison dans une ambiance chaleureuse, 90 rue de Geôle. Tél. 02 31 15 28 79.":
    {
      en: "Homemade cooking in a warm setting, 90 rue de Geôle. Tel. 02 31 15 28 79.",
      de: "Hausgemachte Küche in gemütlicher Atmosphäre, 90 rue de Geôle. Tel. 02 31 15 28 79.",
      es: "Cocina casera en un ambiente acogedor, 90 rue de Geôle. Tel. 02 31 15 28 79.",
      it: "Cucina casalinga in un'atmosfera accogliente, 90 rue de Geôle. Tel. 02 31 15 28 79.",
    },
  "Bonne table de centre-ville, 3-5 rue Saint-Sauveur. Tél. 02 31 38 53 40.": {
    en: "A good city-centre restaurant, 3-5 rue Saint-Sauveur. Tel. 02 31 38 53 40.",
    de: "Gute Adresse im Stadtzentrum, 3-5 rue Saint-Sauveur. Tel. 02 31 38 53 40.",
    es: "Buena mesa en el centro, 3-5 rue Saint-Sauveur. Tel. 02 31 38 53 40.",
    it: "Buona tavola in centro, 3-5 rue Saint-Sauveur. Tel. 02 31 38 53 40.",
  },
  "Cuisine soignée, 11 place Saint-Sauveur, sur une jolie place du centre. Tél. 02 61 53 60 50.":
    {
      en: "Refined cuisine, 11 place Saint-Sauveur, on a pretty square in the centre. Tel. 02 61 53 60 50.",
      de: "Gepflegte Küche, 11 place Saint-Sauveur, an einem hübschen Platz im Zentrum. Tel. 02 61 53 60 50.",
      es: "Cocina cuidada, 11 place Saint-Sauveur, en una bonita plaza del centro. Tel. 02 61 53 60 50.",
      it: "Cucina curata, 11 place Saint-Sauveur, in una graziosa piazza del centro. Tel. 02 61 53 60 50.",
    },
  "Adresse gourmande, 15 rue Pemagnie, dans le centre historique. Tél. 02 31 93 39 43.":
    {
      en: "A gourmet address, 15 rue Pemagnie, in the historic centre. Tel. 02 31 93 39 43.",
      de: "Feinschmeckeradresse, 15 rue Pemagnie, in der historischen Altstadt. Tel. 02 31 93 39 43.",
      es: "Dirección gourmet, 15 rue Pemagnie, en el centro histórico. Tel. 02 31 93 39 43.",
      it: "Indirizzo goloso, 15 rue Pemagnie, nel centro storico. Tel. 02 31 93 39 43.",
    },
  "Cuisine italienne, 47 rue Saint-Sauveur. Tél. 02 31 50 35 35.": {
    en: "Italian cuisine, 47 rue Saint-Sauveur. Tel. 02 31 50 35 35.",
    de: "Italienische Küche, 47 rue Saint-Sauveur. Tel. 02 31 50 35 35.",
    es: "Cocina italiana, 47 rue Saint-Sauveur. Tel. 02 31 50 35 35.",
    it: "Cucina italiana, 47 rue Saint-Sauveur. Tel. 02 31 50 35 35.",
  },
  "Trattoria italienne conviviale, 45 rue Saint-Sauveur.": {
    en: "A friendly Italian trattoria, 45 rue Saint-Sauveur.",
    de: "Gemütliche italienische Trattoria, 45 rue Saint-Sauveur.",
    es: "Acogedora trattoria italiana, 45 rue Saint-Sauveur.",
    it: "Trattoria italiana conviviale, 45 rue Saint-Sauveur.",
  },
  "Sushis et cuisine japonaise, 36 rue des Jacobins. Tél. 02 31 74 26 64.": {
    en: "Sushi and Japanese cuisine, 36 rue des Jacobins. Tel. 02 31 74 26 64.",
    de: "Sushi und japanische Küche, 36 rue des Jacobins. Tel. 02 31 74 26 64.",
    es: "Sushi y cocina japonesa, 36 rue des Jacobins. Tel. 02 31 74 26 64.",
    it: "Sushi e cucina giapponese, 36 rue des Jacobins. Tel. 02 31 74 26 64.",
  },
  "Restaurant asiatique thaï, 12 rue du 11 Novembre. Tél. 06 86 20 96 40.": {
    en: "Thai Asian restaurant, 12 rue du 11 Novembre. Tel. 06 86 20 96 40.",
    de: "Asiatisch-thailändisches Restaurant, 12 rue du 11 Novembre. Tel. 06 86 20 96 40.",
    es: "Restaurante asiático tailandés, 12 rue du 11 Novembre. Tel. 06 86 20 96 40.",
    it: "Ristorante asiatico thailandese, 12 rue du 11 Novembre. Tel. 06 86 20 96 40.",
  },
  "Pizzas à l'italienne, 5 rue Écuyère, en plein centre. Tél. 02 31 79 90 83.": {
    en: "Italian-style pizzas, 5 rue Écuyère, right in the centre. Tel. 02 31 79 90 83.",
    de: "Pizzen auf italienische Art, 5 rue Écuyère, mitten im Zentrum. Tel. 02 31 79 90 83.",
    es: "Pizzas a la italiana, 5 rue Écuyère, en pleno centro. Tel. 02 31 79 90 83.",
    it: "Pizze all'italiana, 5 rue Écuyère, in pieno centro. Tel. 02 31 79 90 83.",
  },
  "Belle table à Mathieu, 4 rue Augustin Fresnel, à ~10 min en voiture au nord de Caen. Tél. 02 31 44 10 17.":
    {
      en: "A lovely restaurant in Mathieu, 4 rue Augustin Fresnel, ~10 min by car north of Caen. Tel. 02 31 44 10 17.",
      de: "Schönes Restaurant in Mathieu, 4 rue Augustin Fresnel, ~10 Min. mit dem Auto nördlich von Caen. Tel. 02 31 44 10 17.",
      es: "Bonita mesa en Mathieu, 4 rue Augustin Fresnel, a ~10 min en coche al norte de Caen. Tel. 02 31 44 10 17.",
      it: "Bella tavola a Mathieu, 4 rue Augustin Fresnel, a ~10 min in auto a nord di Caen. Tel. 02 31 44 10 17.",
    },
  "Restaurant vietnamien juste à côté du logement (c'est près de ses bacs que sont déposées les poubelles) : bo bun, nems et plats à emporter.":
    {
      en: "A Vietnamese restaurant right next to the flat (the bins are left by its containers): bo bun, spring rolls and takeaway dishes.",
      de: "Vietnamesisches Restaurant direkt neben der Wohnung (bei seinen Tonnen wird der Müll abgestellt): Bo Bun, Frühlingsrollen und Gerichte zum Mitnehmen.",
      es: "Restaurante vietnamita justo al lado del alojamiento (la basura se deja junto a sus contenedores): bo bun, rollitos y platos para llevar.",
      it: "Ristorante vietnamita proprio accanto all'alloggio (i rifiuti si lasciano vicino ai suoi bidoni): bo bun, involtini e piatti da asporto.",
    },
  "Burgers maison, 6 rue Buquet, tout près du logement. Tél. 02 31 39 55 03.": {
    en: "Homemade burgers, 6 rue Buquet, very close to the flat. Tel. 02 31 39 55 03.",
    de: "Hausgemachte Burger, 6 rue Buquet, ganz nah an der Wohnung. Tel. 02 31 39 55 03.",
    es: "Hamburguesas caseras, 6 rue Buquet, muy cerca del alojamiento. Tel. 02 31 39 55 03.",
    it: "Hamburger fatti in casa, 6 rue Buquet, vicinissimo all'alloggio. Tel. 02 31 39 55 03.",
  },
  "Burgers maison, 27 rue Écuyère, en centre-ville. Tél. 02 31 50 13 44.": {
    en: "Homemade burgers, 27 rue Écuyère, in the city centre. Tel. 02 31 50 13 44.",
    de: "Hausgemachte Burger, 27 rue Écuyère, im Stadtzentrum. Tel. 02 31 50 13 44.",
    es: "Hamburguesas caseras, 27 rue Écuyère, en el centro. Tel. 02 31 50 13 44.",
    it: "Hamburger fatti in casa, 27 rue Écuyère, in centro. Tel. 02 31 50 13 44.",
  },
  "Poké bowls frais et colorés, 9 rue Écuyère. Tél. 02 31 26 98 73.": {
    en: "Fresh, colourful poke bowls, 9 rue Écuyère. Tel. 02 31 26 98 73.",
    de: "Frische, bunte Poke Bowls, 9 rue Écuyère. Tel. 02 31 26 98 73.",
    es: "Poke bowls frescos y coloridos, 9 rue Écuyère. Tel. 02 31 26 98 73.",
    it: "Poke bowl freschi e colorati, 9 rue Écuyère. Tel. 02 31 26 98 73.",
  },
  "Tartines, salades et douceurs faites maison, 20 rue Froide. Tél. 02 31 50 24 32.":
    {
      en: "Homemade open sandwiches, salads and treats, 20 rue Froide. Tel. 02 31 50 24 32.",
      de: "Hausgemachte Stullen, Salate und Süßes, 20 rue Froide. Tel. 02 31 50 24 32.",
      es: "Tostas, ensaladas y dulces caseros, 20 rue Froide. Tel. 02 31 50 24 32.",
      it: "Tartine, insalate e dolci fatti in casa, 20 rue Froide. Tel. 02 31 50 24 32.",
    },
  "Le long du port, plusieurs brasseries et terrasses pour un repas rapide face au bassin Saint-Pierre.":
    {
      en: "Along the harbour, several brasseries and terraces for a quick meal facing the Bassin Saint-Pierre.",
      de: "Entlang des Hafens mehrere Brasserien und Terrassen für eine schnelle Mahlzeit am Bassin Saint-Pierre.",
      es: "A lo largo del puerto, varias brasseries y terrazas para una comida rápida frente al Bassin Saint-Pierre.",
      it: "Lungo il porto, diverse brasserie e terrazze per un pasto veloce di fronte al Bassin Saint-Pierre.",
    },
  "Café-restaurant dans l'enceinte du château, jolie terrasse avec vue. Idéal en journée.":
    {
      en: "A café-restaurant within the castle grounds, with a pretty terrace and a view. Ideal during the day.",
      de: "Café-Restaurant innerhalb der Burganlage, hübsche Terrasse mit Aussicht. Tagsüber ideal.",
      es: "Café-restaurante en el recinto del castillo, bonita terraza con vistas. Ideal de día.",
      it: "Caffè-ristorante all'interno del castello, graziosa terrazza con vista. Ideale di giorno.",
    },
  "L'épicentre de la vie nocturne caennaise : bars et pubs à la suite, à ~8 min à pied.":
    {
      en: "The epicentre of Caen's nightlife: bars and pubs one after another, ~8 min walk.",
      de: "Das Epizentrum des Nachtlebens von Caen: Bars und Pubs in Folge, ~8 Min. zu Fuß.",
      es: "El epicentro de la vida nocturna de Caen: bares y pubs uno tras otro, a ~8 min a pie.",
      it: "L'epicentro della vita notturna di Caen: bar e pub uno dopo l'altro, a ~8 min a piedi.",
    },
  "Bar à bières incontournable de Caen, rue Écuyère : très large choix de bières.":
    {
      en: "A must-visit beer bar in Caen, on rue Écuyère: a very wide choice of beers.",
      de: "Unverzichtbare Bierbar in Caen, rue Écuyère: sehr große Bierauswahl.",
      es: "Bar de cervezas imprescindible de Caen, rue Écuyère: amplísima selección de cervezas.",
      it: "Imperdibile birreria di Caen, rue Écuyère: vastissima scelta di birre.",
    },
  "Bars et terrasses face au bassin Saint-Pierre, très agréables aux beaux jours.":
    {
      en: "Bars and terraces facing the Bassin Saint-Pierre, lovely in fine weather.",
      de: "Bars und Terrassen am Bassin Saint-Pierre, sehr angenehm bei schönem Wetter.",
      es: "Bares y terrazas frente al Bassin Saint-Pierre, muy agradables con buen tiempo.",
      it: "Bar e terrazze di fronte al Bassin Saint-Pierre, piacevolissimi nelle belle giornate.",
    },
  "Cinéma art & essai emblématique de Caen, 6 avenue Sainte-Thérèse (tram Lux-Lépine), à l'est de la ville (~1,5 km).":
    {
      en: "Caen's iconic arthouse cinema, 6 avenue Sainte-Thérèse (Lux-Lépine tram stop), east of the city (~1.5 km).",
      de: "Das ikonische Programmkino von Caen, 6 avenue Sainte-Thérèse (Tramhaltestelle Lux-Lépine), östlich der Stadt (~1,5 km).",
      es: "Emblemático cine de autor de Caen, 6 avenue Sainte-Thérèse (tranvía Lux-Lépine), al este de la ciudad (~1,5 km).",
      it: "Storico cinema d'essai di Caen, 6 avenue Sainte-Thérèse (tram Lux-Lépine), a est della città (~1,5 km).",
    },
  "Multiplexe au centre commercial Les Rives de l'Orne, près du port et de la gare, films récents.":
    {
      en: "A multiplex at the Les Rives de l'Orne mall, near the harbour and station, showing recent films.",
      de: "Multiplexkino im Einkaufszentrum Les Rives de l'Orne, nahe Hafen und Bahnhof, aktuelle Filme.",
      es: "Multicine en el centro comercial Les Rives de l'Orne, cerca del puerto y la estación, películas recientes.",
      it: "Multisala nel centro commerciale Les Rives de l'Orne, vicino al porto e alla stazione, film recenti.",
    },
  "Belle programmation lyrique, danse et théâtre, boulevard du Maréchal Leclerc.":
    {
      en: "A fine programme of opera, dance and theatre, on boulevard du Maréchal Leclerc.",
      de: "Schönes Programm aus Oper, Tanz und Theater, am boulevard du Maréchal Leclerc.",
      es: "Bonita programación de ópera, danza y teatro, en el boulevard du Maréchal Leclerc.",
      it: "Bella programmazione di lirica, danza e teatro, sul boulevard du Maréchal Leclerc.",
    },
  "Scène de musiques actuelles : concerts toute l'année, 9 cours Caffarelli, sur la presqu'île.":
    {
      en: "A contemporary-music venue: concerts all year round, 9 cours Caffarelli, on the peninsula.",
      de: "Bühne für aktuelle Musik: Konzerte das ganze Jahr über, 9 cours Caffarelli, auf der Halbinsel.",
      es: "Sala de músicas actuales: conciertos todo el año, 9 cours Caffarelli, en la península.",
      it: "Spazio per la musica contemporanea: concerti tutto l'anno, 9 cours Caffarelli, sulla penisola.",
    },
  "Le grand marché dominical le long du bassin Saint-Pierre (Quai Vendeuvre) : produits frais, primeurs, poissons. C'est pour lui qu'il ne faut pas se garer sur le port le samedi soir !":
    {
      en: "The big Sunday market along the Bassin Saint-Pierre (Quai Vendeuvre): fresh produce, fruit and veg, fish. It's the reason not to park at the harbour on Saturday evening!",
      de: "Der große Sonntagsmarkt entlang des Bassin Saint-Pierre (Quai Vendeuvre): frische Produkte, Obst und Gemüse, Fisch. Seinetwegen sollte man am Samstagabend nicht am Hafen parken!",
      es: "El gran mercado dominical a lo largo del Bassin Saint-Pierre (Quai Vendeuvre): productos frescos, frutas y verduras, pescado. ¡Es la razón para no aparcar en el puerto el sábado por la noche!",
      it: "Il grande mercato domenicale lungo il Bassin Saint-Pierre (Quai Vendeuvre): prodotti freschi, frutta e verdura, pesce. È per questo che non bisogna parcheggiare al porto il sabato sera!",
    },
  "Cave à vins et spiritueux, 2 rue des Chanoines, tout près du logement : de jolies bouteilles à offrir ou partager. Tél. 06 18 39 31 97.":
    {
      en: "A wine and spirits shop, 2 rue des Chanoines, very close to the flat: lovely bottles to give or share. Tel. 06 18 39 31 97.",
      de: "Wein- und Spirituosenhandlung, 2 rue des Chanoines, ganz nah an der Wohnung: schöne Flaschen zum Verschenken oder Teilen. Tel. 06 18 39 31 97.",
      es: "Tienda de vinos y licores, 2 rue des Chanoines, muy cerca del alojamiento: bonitas botellas para regalar o compartir. Tel. 06 18 39 31 97.",
      it: "Enoteca e distillati, 2 rue des Chanoines, vicinissima all'alloggio: belle bottiglie da regalare o condividere. Tel. 06 18 39 31 97.",
    },
  "L'artère commerçante de Caen : boutiques, enseignes et grands magasins, à ~7 min à pied.":
    {
      en: "Caen's main shopping street: boutiques, brands and department stores, ~7 min walk.",
      de: "Die Einkaufsstraße von Caen: Boutiquen, Marken und Kaufhäuser, ~7 Min. zu Fuß.",
      es: "La arteria comercial de Caen: tiendas, marcas y grandes almacenes, a ~7 min a pie.",
      it: "L'arteria commerciale di Caen: negozi, marchi e grandi magazzini, a ~7 min a piedi.",
    },
  "Galerie marchande moderne entre le port et la gare : boutiques, restaurants et cinéma.":
    {
      en: "A modern shopping mall between the harbour and the station: shops, restaurants and a cinema.",
      de: "Modernes Einkaufszentrum zwischen Hafen und Bahnhof: Geschäfte, Restaurants und Kino.",
      es: "Galería comercial moderna entre el puerto y la estación: tiendas, restaurantes y cine.",
      it: "Galleria commerciale moderna tra il porto e la stazione: negozi, ristoranti e cinema.",
    },
  "La supérette la plus proche, 1 rue Basse, juste à côté du logement : dépannage et courses de dernière minute. Tél. 06 59 27 12 90.":
    {
      en: "The nearest convenience store, 1 rue Basse, right next to the flat: handy for last-minute shopping. Tel. 06 59 27 12 90.",
      de: "Der nächste Mini-Supermarkt, 1 rue Basse, direkt neben der Wohnung: praktisch für Einkäufe in letzter Minute. Tel. 06 59 27 12 90.",
      es: "La tienda de proximidad más cercana, 1 rue Basse, justo al lado del alojamiento: ideal para compras de última hora. Tel. 06 59 27 12 90.",
      it: "Il minimarket più vicino, 1 rue Basse, proprio accanto all'alloggio: comodo per la spesa dell'ultimo minuto. Tel. 06 59 27 12 90.",
    },
  "45 boulevard du Maréchal Leclerc — le plus pratique du centre : courses et produits du quotidien, ouvert tard. Parking souterrain.":
    {
      en: "45 boulevard du Maréchal Leclerc — the most convenient in the centre: groceries and everyday products, open late. Underground car park.",
      de: "45 boulevard du Maréchal Leclerc — am praktischsten im Zentrum: Lebensmittel und Alltagsprodukte, lange geöffnet. Tiefgarage.",
      es: "45 boulevard du Maréchal Leclerc — el más práctico del centro: compra y productos de diario, abierto hasta tarde. Aparcamiento subterráneo.",
      it: "45 boulevard du Maréchal Leclerc — il più comodo del centro: spesa e prodotti quotidiani, aperto fino a tardi. Parcheggio sotterraneo.",
    },
  "Primeur de quartier (fruits, légumes, produits frais), 124 rue Saint-Jean. Tél. 02 31 86 00 19.":
    {
      en: "A local greengrocer (fruit, vegetables, fresh produce), 124 rue Saint-Jean. Tel. 02 31 86 00 19.",
      de: "Gemüsehändler im Viertel (Obst, Gemüse, frische Produkte), 124 rue Saint-Jean. Tel. 02 31 86 00 19.",
      es: "Frutería de barrio (frutas, verduras, productos frescos), 124 rue Saint-Jean. Tel. 02 31 86 00 19.",
      it: "Fruttivendolo di quartiere (frutta, verdura, prodotti freschi), 124 rue Saint-Jean. Tel. 02 31 86 00 19.",
    },
  "Supermarché de centre-ville, rue de Bernières, pour les courses complètes.": {
    en: "A city-centre supermarket, rue de Bernières, for a full shop.",
    de: "Supermarkt im Stadtzentrum, rue de Bernières, für den großen Einkauf.",
    es: "Supermercado de centro, rue de Bernières, para la compra completa.",
    it: "Supermercato in centro, rue de Bernières, per la spesa completa.",
  },
  "52 rue du Vaugueux, tout près — boulangerie-pâtisserie pour le pain frais et les viennoiseries du matin.":
    {
      en: "52 rue du Vaugueux, very close — a bakery-pâtisserie for fresh bread and morning pastries.",
      de: "52 rue du Vaugueux, ganz nah — Bäckerei-Konditorei für frisches Brot und Frühstücksgebäck.",
      es: "52 rue du Vaugueux, muy cerca — panadería-pastelería para pan fresco y bollería de la mañana.",
      it: "52 rue du Vaugueux, vicinissima — panetteria-pasticceria per pane fresco e dolci del mattino.",
    },
  "Boucherie-charcuterie artisanale, 19 rue de l'Engannerie. Tél. 02 31 86 16 25.":
    {
      en: "Artisan butcher and deli, 19 rue de l'Engannerie. Tel. 02 31 86 16 25.",
      de: "Handwerkliche Metzgerei-Feinkost, 19 rue de l'Engannerie. Tel. 02 31 86 16 25.",
      es: "Carnicería-charcutería artesanal, 19 rue de l'Engannerie. Tel. 02 31 86 16 25.",
      it: "Macelleria-salumeria artigianale, 19 rue de l'Engannerie. Tel. 02 31 86 16 25.",
    },
  "Plusieurs boulangeries-pâtisseries le long de la rue Saint-Pierre, en allant vers le centre.":
    {
      en: "Several bakeries-pâtisseries along rue Saint-Pierre, heading towards the centre.",
      de: "Mehrere Bäckereien-Konditoreien entlang der rue Saint-Pierre, Richtung Zentrum.",
      es: "Varias panaderías-pastelerías a lo largo de la rue Saint-Pierre, hacia el centro.",
      it: "Diverse panetterie-pasticcerie lungo la rue Saint-Pierre, andando verso il centro.",
    },
  "L'arrêt de tram le plus proche du logement, rue de Geôle (~5 min à pied) : rejoignez le centre, la gare et les campus universitaires.":
    {
      en: "The nearest tram stop to the flat, on rue de Geôle (~5 min walk): reach the centre, the station and the university campuses.",
      de: "Die nächste Tramhaltestelle zur Wohnung, rue de Geôle (~5 Min. zu Fuß): erreichen Sie Zentrum, Bahnhof und Universitätscampus.",
      es: "La parada de tranvía más cercana al alojamiento, rue de Geôle (~5 min a pie): llegue al centro, la estación y los campus universitarios.",
      it: "La fermata del tram più vicina all'alloggio, rue de Geôle (~5 min a piedi): raggiungete il centro, la stazione e i campus universitari.",
    },
  "Autre arrêt de tram tout proche, en direction du centre-ville et de la gare.": {
    en: "Another tram stop very close by, towards the city centre and the station.",
    de: "Weitere Tramhaltestelle ganz in der Nähe, Richtung Stadtzentrum und Bahnhof.",
    es: "Otra parada de tranvía muy cerca, en dirección al centro y la estación.",
    it: "Altra fermata del tram molto vicina, in direzione del centro e della stazione.",
  },
  "Le réseau de l'agglomération : 3 lignes de tram (T1, T2, T3) et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs des arrêts.":
    {
      en: "The metropolitan network: 3 tram lines (T1, T2, T3) and many buses. Timetables, maps and tickets on the Twisto app or at the stop machines.",
      de: "Das Nahverkehrsnetz: 3 Tramlinien (T1, T2, T3) und zahlreiche Busse. Fahrpläne, Plan und Tickets in der Twisto-App oder an den Automaten der Haltestellen.",
      es: "La red de la aglomeración: 3 líneas de tranvía (T1, T2, T3) y numerosos autobuses. Horarios, plano y billetes en la app Twisto o en las máquinas de las paradas.",
      it: "La rete dell'agglomerato: 3 linee di tram (T1, T2, T3) e numerosi bus. Orari, mappa e biglietti sull'app Twisto o ai distributori delle fermate.",
    },
  "Liaisons directes vers Paris Saint-Lazare (~2h). À ~15 min à pied ou en tram.": {
    en: "Direct trains to Paris Saint-Lazare (~2h). About 15 min on foot or by tram.",
    de: "Direktverbindungen nach Paris Saint-Lazare (~2 Std.). Etwa 15 Min. zu Fuß oder mit der Tram.",
    es: "Conexiones directas con París Saint-Lazare (~2h). A ~15 min a pie o en tranvía.",
    it: "Collegamenti diretti con Parigi Saint-Lazare (~2h). A ~15 min a piedi o in tram.",
  },
  "Ferries vers Portsmouth (Angleterre), à ~20 min en voiture.": {
    en: "Ferries to Portsmouth (England), ~20 min by car.",
    de: "Fähren nach Portsmouth (England), ~20 Min. mit dem Auto.",
    es: "Ferris a Portsmouth (Inglaterra), a ~20 min en coche.",
    it: "Traghetti per Portsmouth (Inghilterra), a ~20 min in auto.",
  },
  "À l'ouest de la ville : vols intérieurs et saisonniers.": {
    en: "West of the city: domestic and seasonal flights.",
    de: "Westlich der Stadt: Inlands- und Saisonflüge.",
    es: "Al oeste de la ciudad: vuelos nacionales y de temporada.",
    it: "A ovest della città: voli nazionali e stagionali.",
  },
  "Réservation de taxi à Caen et alentours. Tél. 02 31 52 17 89.": {
    en: "Taxi booking in Caen and the surrounding area. Tel. 02 31 52 17 89.",
    de: "Taxibestellung in Caen und Umgebung. Tel. 02 31 52 17 89.",
    es: "Reserva de taxi en Caen y alrededores. Tel. 02 31 52 17 89.",
    it: "Prenotazione taxi a Caen e dintorni. Tel. 02 31 52 17 89.",
  },
  "Rue Montoir-Poissonnerie, la plus proche du logement. Pharmacie de garde : composez le 3237.":
    {
      en: "Rue Montoir-Poissonnerie, the closest to the flat. For the on-duty pharmacy, dial 3237.",
      de: "Rue Montoir-Poissonnerie, die nächste zur Wohnung. Notdienst-Apotheke: Wählen Sie 3237.",
      es: "Rue Montoir-Poissonnerie, la más cercana al alojamiento. Farmacia de guardia: marque el 3237.",
      it: "Rue Montoir-Poissonnerie, la più vicina all'alloggio. Farmacia di turno: componete il 3237.",
    },
  "Pharmacie proche du port et de la presqu'île. Tél. 02 31 95 57 30.": {
    en: "A pharmacy near the harbour and the peninsula. Tel. 02 31 95 57 30.",
    de: "Apotheke nahe Hafen und Halbinsel. Tel. 02 31 95 57 30.",
    es: "Farmacia cerca del puerto y la península. Tel. 02 31 95 57 30.",
    it: "Farmacia vicino al porto e alla penisola. Tel. 02 31 95 57 30.",
  },
  "Centre hospitalier universitaire (urgences), au nord de la ville, secteur Côte de Nacre. Tél. 02 31 06 31 06.":
    {
      en: "University hospital (A&E), north of the city, Côte de Nacre area. Tel. 02 31 06 31 06.",
      de: "Universitätsklinikum (Notaufnahme), nördlich der Stadt, Bereich Côte de Nacre. Tel. 02 31 06 31 06.",
      es: "Hospital universitario (urgencias), al norte de la ciudad, zona Côte de Nacre. Tel. 02 31 06 31 06.",
      it: "Ospedale universitario (pronto soccorso), a nord della città, zona Côte de Nacre. Tel. 02 31 06 31 06.",
    },
  "Consultations et visites à domicile, jour et nuit. Tél. 02 33 01 58 51.": {
    en: "Consultations and home visits, day and night. Tel. 02 33 01 58 51.",
    de: "Sprechstunden und Hausbesuche, Tag und Nacht. Tel. 02 33 01 58 51.",
    es: "Consultas y visitas a domicilio, día y noche. Tel. 02 33 01 58 51.",
    it: "Consulti e visite a domicilio, giorno e notte. Tel. 02 33 01 58 51.",
  },
  "Police (appel non urgent) : 02 31 29 22 22. En cas d'urgence, composez le 17.": {
    en: "Police (non-urgent calls): 02 31 29 22 22. In an emergency, dial 17.",
    de: "Polizei (nicht dringende Anrufe): 02 31 29 22 22. Im Notfall wählen Sie 17.",
    es: "Policía (llamada no urgente): 02 31 29 22 22. En caso de urgencia, marque el 17.",
    it: "Polizia (chiamata non urgente): 02 31 29 22 22. In caso di emergenza, componete il 17.",
  },
  "77 rue du Vaugueux, à deux pas : tabac, presse et dépannage.": {
    en: "77 rue du Vaugueux, just steps away: tobacco, press and essentials.",
    de: "77 rue du Vaugueux, nur wenige Schritte entfernt: Tabak, Presse und Notbedarf.",
    es: "77 rue du Vaugueux, a dos pasos: tabaco, prensa y artículos de emergencia.",
    it: "77 rue du Vaugueux, a due passi: tabacchi, giornali e necessità.",
  },
  "Flânez le soir dans les ruelles pavées du Vaugueux, le quartier le plus pittoresque de Caen, juste en bas de chez vous : c'est là que se concentrent les meilleures tables. Notre adresse coup de cœur : Le Bouchon du Vaugueux, 12 rue Graindorge (à deux pas) — et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !":
    {
      en: "In the evening, wander the cobbled lanes of the Vaugueux, Caen's most picturesque district, right below your door: this is where the best tables are. Our favourite spot: Le Bouchon du Vaugueux, 12 rue Graindorge (just steps away) — and for food lovers, try the tripes à la mode de Caen, the local speciality!",
      de: "Schlendern Sie abends durch die kopfsteingepflasterten Gassen des Vaugueux, des malerischsten Viertels von Caen, direkt vor Ihrer Tür: Hier finden sich die besten Restaurants. Unser Lieblingstipp: Le Bouchon du Vaugueux, 12 rue Graindorge (nur wenige Schritte entfernt) — und für Genießer: Probieren Sie die Tripes à la mode de Caen, die lokale Spezialität!",
      es: "Pasee al anochecer por las callejuelas empedradas del Vaugueux, el barrio más pintoresco de Caen, justo debajo de su casa: aquí se concentran las mejores mesas. Nuestra dirección favorita: Le Bouchon du Vaugueux, 12 rue Graindorge (a dos pasos) — y para los golosos, pruebe los tripes à la mode de Caen, la especialidad local.",
      it: "La sera, passeggiate tra i vicoli acciottolati del Vaugueux, il quartiere più pittoresco di Caen, proprio sotto casa: è qui che si concentrano le tavole migliori. Il nostro indirizzo del cuore: Le Bouchon du Vaugueux, 12 rue Graindorge (a due passi) — e per i golosi, assaggiate le tripes à la mode de Caen, la specialità locale!",
    },
  "Discothèque sur le port (32 quai Vendeuvre, anciennement Le Carré) : la boîte de nuit du centre, généralement ouverte du jeudi au samedi.":
    {
      en: "A nightclub on the harbour (32 quai Vendeuvre, formerly Le Carré): the city-centre club, usually open Thursday to Saturday.",
      de: "Diskothek am Hafen (32 quai Vendeuvre, früher Le Carré): der Club im Zentrum, meist von Donnerstag bis Samstag geöffnet.",
      es: "Discoteca en el puerto (32 quai Vendeuvre, antes Le Carré): la discoteca del centro, abierta normalmente de jueves a sábado.",
      it: "Discoteca sul porto (32 quai Vendeuvre, ex Le Carré): il locale notturno del centro, di solito aperto dal giovedì al sabato.",
    },
  "Discothèque conviviale, 46 rue des Chanoines, à deux pas du logement.": {
    en: "A friendly nightclub, 46 rue des Chanoines, just steps from the flat.",
    de: "Gemütliche Diskothek, 46 rue des Chanoines, nur wenige Schritte von der Wohnung.",
    es: "Discoteca acogedora, 46 rue des Chanoines, a dos pasos del alojamiento.",
    it: "Discoteca accogliente, 46 rue des Chanoines, a due passi dall'alloggio.",
  },
  "Bar-club mythique de la nuit caennaise, 6 rue du Tour de Terre, près du château : ambiance rhum et danse, du jeudi au samedi.":
    {
      en: "A legendary bar-club of Caen nightlife, 6 rue du Tour de Terre, near the castle: rum and dancing, Thursday to Saturday.",
      de: "Legendäre Bar-Club des Nachtlebens von Caen, 6 rue du Tour de Terre, beim Schloss: Rum-Atmosphäre und Tanz, Donnerstag bis Samstag.",
      es: "Bar-club mítico de la noche de Caen, 6 rue du Tour de Terre, cerca del castillo: ambiente de ron y baile, de jueves a sábado.",
      it: "Bar-club leggendario della notte di Caen, 6 rue du Tour de Terre, vicino al castello: atmosfera rum e ballo, dal giovedì al sabato.",
    },
  "Bar dansant et billard, 24 rue du 11 Novembre : une institution de la nuit caennaise depuis les années 80.":
    {
      en: "A dancing bar with billiards, 24 rue du 11 Novembre: a Caen nightlife institution since the 1980s.",
      de: "Tanzbar mit Billard, 24 rue du 11 Novembre: eine Institution des Nachtlebens von Caen seit den 1980er-Jahren.",
      es: "Bar bailable con billar, 24 rue du 11 Novembre: una institución de la noche de Caen desde los años 80.",
      it: "Bar danzante con biliardo, 24 rue du 11 Novembre: un'istituzione della notte di Caen dagli anni '80.",
    },
  "Pub irlandais sur le port, 20 quai Vendeuvre : bières, concerts et retransmissions sportives. Tél. 02 31 85 51 50.":
    {
      en: "An Irish pub on the harbour, 20 quai Vendeuvre: beers, live music and sports screenings. Tel. 02 31 85 51 50.",
      de: "Irish Pub am Hafen, 20 quai Vendeuvre: Biere, Konzerte und Sportübertragungen. Tel. 02 31 85 51 50.",
      es: "Pub irlandés en el puerto, 20 quai Vendeuvre: cervezas, conciertos y retransmisiones deportivas. Tel. 02 31 85 51 50.",
      it: "Pub irlandese sul porto, 20 quai Vendeuvre: birre, concerti e dirette sportive. Tel. 02 31 85 51 50.",
    },
  "Bar animé et abordable, 30 quai Vendeuvre : tapas, cocktails et terrasse face au port.":
    {
      en: "A lively, affordable bar, 30 quai Vendeuvre: tapas, cocktails and a terrace facing the harbour.",
      de: "Lebhafte, günstige Bar, 30 quai Vendeuvre: Tapas, Cocktails und Terrasse am Hafen.",
      es: "Bar animado y asequible, 30 quai Vendeuvre: tapas, cócteles y terraza frente al puerto.",
      it: "Bar vivace ed economico, 30 quai Vendeuvre: tapas, cocktail e terrazza di fronte al porto.",
    },
  "Bar festif sur le port, 32 quai Vendeuvre.": {
    en: "A lively bar on the harbour, 32 quai Vendeuvre.",
    de: "Lebhafte Bar am Hafen, 32 quai Vendeuvre.",
    es: "Bar animado en el puerto, 32 quai Vendeuvre.",
    it: "Bar vivace sul porto, 32 quai Vendeuvre.",
  },
  "Bar dansant, 33 rue Basse, à deux pas du logement.": {
    en: "A dancing bar, 33 rue Basse, just steps from the flat.",
    de: "Tanzbar, 33 rue Basse, nur wenige Schritte von der Wohnung.",
    es: "Bar bailable, 33 rue Basse, a dos pasos del alojamiento.",
    it: "Bar danzante, 33 rue Basse, a due passi dall'alloggio.",
  },

  // ============================================================ Fleur & Mer
  "À partir de 17h": {
    en: "From 5 p.m.",
    de: "Ab 17 Uhr",
    es: "A partir de las 17 h",
    it: "Dalle 17",
  },
  "Le code de la boîte à clés vous sera communiqué le jour de votre arrivée.": {
    en: "The lockbox code will be sent to you on the day of your arrival.",
    de: "Der Code des Schlüsselkastens wird Ihnen am Tag Ihrer Anreise mitgeteilt.",
    es: "El código de la caja de llaves se le facilitará el día de su llegada.",
    it: "Il codice della cassetta delle chiavi vi sarà comunicato il giorno del vostro arrivo.",
  },
  "Vous recevrez toutes les informations d'accès à l'appartement par message, avec un lien vidéo, dans la conversation de la plateforme avec laquelle vous avez réservé.":
    {
      en: "You will receive all the access information for the flat by message, with a video link, in the conversation on the platform you booked with.",
      de: "Sie erhalten alle Zugangsinformationen zur Wohnung per Nachricht, mit einem Video-Link, im Chat der Plattform, über die Sie gebucht haben.",
      es: "Recibirá toda la información de acceso al apartamento por mensaje, con un enlace de vídeo, en la conversación de la plataforma con la que reservó.",
      it: "Riceverete tutte le informazioni di accesso all'appartamento via messaggio, con un link video, nella conversazione della piattaforma con cui avete prenotato.",
    },
  "Une arrivée anticipée est possible, sous réserve de disponibilité et sur demande préalable.":
    {
      en: "An early arrival is possible, subject to availability and on prior request.",
      de: "Eine frühere Anreise ist möglich, nach Verfügbarkeit und auf vorherige Anfrage.",
      es: "Es posible una llegada anticipada, según disponibilidad y bajo petición previa.",
      it: "È possibile un arrivo anticipato, secondo disponibilità e su richiesta preventiva.",
    },
  "Une place de parking gratuite vous est réservée, juste devant l'entrée de l'immeuble — place non sécurisée (ni barrière, ni portail, ni code).\nPour un second véhicule, stationnement gratuit dans les rues voisines : rue Desmoueux, avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie.\nStationnement payant (9h–12h30 et 14h–19h) : Place de la Mare, Les Fossés Saint-Julien.\nParking souterrain de la Mairie (payant), tout proche.":
    {
      en: "A free parking space is reserved for you, right in front of the building entrance — unsecured space (no barrier, gate or code).\nFor a second vehicle, free parking in the neighbouring streets: rue Desmoueux, avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie.\nPaid parking (9 a.m.–12.30 p.m. and 2–7 p.m.): Place de la Mare, Les Fossés Saint-Julien.\nUnderground car park at the Town Hall (paid), very close by.",
      de: "Ein kostenloser Parkplatz ist direkt vor dem Eingang des Gebäudes für Sie reserviert — ungesicherter Platz (keine Schranke, kein Tor, kein Code).\nFür ein zweites Fahrzeug: kostenloses Parken in den Nachbarstraßen: rue Desmoueux, avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie.\nGebührenpflichtiges Parken (9–12:30 und 14–19 Uhr): Place de la Mare, Les Fossés Saint-Julien.\nTiefgarage am Rathaus (kostenpflichtig), ganz in der Nähe.",
      es: "Tiene reservada una plaza de aparcamiento gratuita, justo delante de la entrada del edificio — plaza no vigilada (sin barrera, verja ni código).\nPara un segundo vehículo, aparcamiento gratuito en las calles vecinas: rue Desmoueux, avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie.\nAparcamiento de pago (9:00–12:30 y 14:00–19:00): Place de la Mare, Les Fossés Saint-Julien.\nAparcamiento subterráneo del Ayuntamiento (de pago), muy cerca.",
      it: "Un posto auto gratuito è riservato per voi, proprio davanti all'ingresso dell'edificio — posto non custodito (senza barriera, cancello o codice).\nPer un secondo veicolo, parcheggio gratuito nelle vie vicine: rue Desmoueux, avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie.\nParcheggio a pagamento (9–12:30 e 14–19): Place de la Mare, Les Fossés Saint-Julien.\nParcheggio sotterraneo del Municipio (a pagamento), molto vicino.",
    },
  "Stationnement gratuit dans la rue de l'appartement (rue Desmoueux) et les rues voisines : avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie. Selon l'heure d'arrivée, il n'est pas toujours évident de trouver une place.\nStationnement payant (9h–12h30 et 14h–19h, gratuit les dimanches et jours fériés) : rue des Fossés Saint-Julien, Place de la Mare.\nParking souterrain de la Mairie (payant), tout proche.":
    {
      en: "Free parking on the apartment's street (rue Desmoueux) and neighbouring streets: avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie. Depending on your arrival time, finding a space isn't always easy.\nPaid parking (9 a.m.–12.30 p.m. and 2–7 p.m., free on Sundays and public holidays): rue des Fossés Saint-Julien, Place de la Mare.\nUnderground car park at the Town Hall (paid), very close by.",
      de: "Kostenloses Parken in der Straße der Wohnung (rue Desmoueux) und den Nachbarstraßen: avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie. Je nach Ankunftszeit ist ein Platz nicht immer leicht zu finden.\nGebührenpflichtiges Parken (9–12:30 und 14–19 Uhr, sonn- und feiertags kostenlos): rue des Fossés Saint-Julien, Place de la Mare.\nTiefgarage am Rathaus (kostenpflichtig), ganz in der Nähe.",
      es: "Aparcamiento gratuito en la calle del apartamento (rue Desmoueux) y calles vecinas: avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie. Según la hora de llegada, no siempre es fácil encontrar sitio.\nAparcamiento de pago (9:00–12:30 y 14:00–19:00, gratis domingos y festivos): rue des Fossés Saint-Julien, Place de la Mare.\nAparcamiento subterráneo del Ayuntamiento (de pago), muy cerca.",
      it: "Parcheggio gratuito nella via dell'appartamento (rue Desmoueux) e nelle vie vicine: avenue Bagatelle, rue du Docteur Leverrier, rue du XXᵉ Siècle, rue du Dr Reyer, rue de l'Académie. A seconda dell'orario di arrivo, non è sempre facile trovare posto.\nParcheggio a pagamento (9–12:30 e 14–19, gratuito la domenica e nei giorni festivi): rue des Fossés Saint-Julien, Place de la Mare.\nParcheggio sotterraneo del Municipio (a pagamento), molto vicino.",
    },
  "Le dépôt de bagages est possible, sous réserve de disponibilité du logement. Merci d'en faire la demande en amont afin que nous puissions vous confirmer la faisabilité.":
    {
      en: "Luggage drop-off is possible, subject to the flat's availability. Please request it in advance so we can confirm whether it's feasible.",
      de: "Eine Gepäckaufbewahrung ist möglich, je nach Verfügbarkeit der Wohnung. Bitte fragen Sie im Voraus an, damit wir die Machbarkeit bestätigen können.",
      es: "Es posible dejar el equipaje, según la disponibilidad del alojamiento. Solicítelo con antelación para que podamos confirmar la viabilidad.",
      it: "È possibile il deposito bagagli, secondo la disponibilità dell'alloggio. Vi preghiamo di farne richiesta in anticipo affinché possiamo confermarne la fattibilità.",
    },
  "Salon avec canapé, pour se détendre": {
    en: "Living room with sofa, to relax",
    de: "Wohnzimmer mit Sofa zum Entspannen",
    es: "Salón con sofá, para relajarse",
    it: "Soggiorno con divano, per rilassarsi",
  },
  "Coin nuit avec lit double (140 × 200 cm)": {
    en: "Sleeping area with double bed (140 × 200 cm)",
    de: "Schlafbereich mit Doppelbett (140 × 200 cm)",
    es: "Zona de noche con cama de matrimonio (140 × 200 cm)",
    it: "Zona notte con letto matrimoniale (140 × 200 cm)",
  },
  "Salle de douche privative avec WC": {
    en: "Private shower room with WC",
    de: "Eigenes Duschbad mit WC",
    es: "Baño privado con ducha y WC",
    it: "Bagno privato con doccia e WC",
  },
  "Séjour-salon lumineux avec canapé et fenêtre (le canapé-lit n'est pas utilisable)":
    {
      en: "Bright living room with sofa and window (the sofa bed is not usable)",
      de: "Helles Wohnzimmer mit Sofa und Fenster (das Schlafsofa ist nicht nutzbar)",
      es: "Salón luminoso con sofá y ventana (el sofá cama no se puede usar)",
      it: "Luminoso soggiorno con divano e finestra (il divano letto non è utilizzabile)",
    },
  "Chambre séparée (velux avec store électrique pour occulter)": {
    en: "Separate bedroom (skylight with electric blind to black out)",
    de: "Separates Schlafzimmer (Dachfenster mit elektrischem Rollo zum Abdunkeln)",
    es: "Dormitorio separado (tragaluz con estor eléctrico para oscurecer)",
    it: "Camera separata (lucernario con tenda elettrica oscurante)",
  },
  "Cuisine équipée et coin repas": {
    en: "Equipped kitchen and dining area",
    de: "Ausgestattete Küche und Essbereich",
    es: "Cocina equipada y zona de comedor",
    it: "Cucina attrezzata e angolo pranzo",
  },
  "🎁 Produits d'accueil": {
    en: "🎁 Welcome amenities",
    de: "🎁 Willkommensartikel",
    es: "🎁 Productos de acogida",
    it: "🎁 Prodotti di benvenuto",
  },
  "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, sel et poivre, quelques capsules de café ainsi que du thé, du produit vaisselle et une éponge.":
    {
      en: "On arrival, you'll find provided: toilet paper, a mini shower gel/shampoo per person, salt and pepper, a few coffee capsules as well as tea, washing-up liquid and a sponge.",
      de: "Bei Ihrer Ankunft finden Sie bereitgestellt: Toilettenpapier, ein Mini-Duschgel/Shampoo pro Person, Salz und Pfeffer, einige Kaffeekapseln sowie Tee, Spülmittel und einen Schwamm.",
      es: "A su llegada, encontrará a su disposición: papel higiénico, una miniatura de gel de ducha/champú por persona, sal y pimienta, algunas cápsulas de café y té, lavavajillas y una esponja.",
      it: "Al vostro arrivo troverete a disposizione: carta igienica, un mini gel doccia/shampoo a persona, sale e pepe, alcune capsule di caffè e tè, detersivo per piatti e una spugna.",
    },
  // Houlgate : produits d'accueil sans sel et poivre
  "À votre arrivée, vous trouverez à disposition : papier toilette, une miniature de gel douche/shampooing par personne, quelques capsules de café ainsi que du thé, du produit vaisselle et une éponge.":
    {
      en: "On arrival, you'll find provided: toilet paper, a mini shower gel/shampoo per person, a few coffee capsules as well as tea, washing-up liquid and a sponge.",
      de: "Bei Ihrer Ankunft finden Sie bereitgestellt: Toilettenpapier, ein Mini-Duschgel/Shampoo pro Person, einige Kaffeekapseln sowie Tee, Spülmittel und einen Schwamm.",
      es: "A su llegada, encontrará a su disposición: papel higiénico, una miniatura de gel de ducha/champú por persona, algunas cápsulas de café y té, lavavajillas y una esponja.",
      it: "Al vostro arrivo troverete a disposizione: carta igienica, un mini gel doccia/shampoo a persona, alcune capsule di caffè e tè, detersivo per piatti e una spugna.",
    },
  "🛏️ Linge de maison": {
    en: "🛏️ Bed & bath linen",
    de: "🛏️ Bett- und Haushaltswäsche",
    es: "🛏️ Ropa de cama y baño",
    it: "🛏️ Biancheria",
  },
  "Les draps sont fournis et le lit (140 × 200 cm) est fait. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.":
    {
      en: "Bed linen is provided and the bed (140 × 200 cm) is made. Each guest has a bath towel; a bath mat and a kitchen towel are also provided.",
      de: "Bettwäsche wird gestellt und das Bett (140 × 200 cm) ist gemacht. Jedem Gast steht ein Handtuch zur Verfügung; eine Badematte und ein Geschirrtuch sind ebenfalls vorhanden.",
      es: "La ropa de cama está incluida y la cama (140 × 200 cm) está hecha. Cada huésped dispone de una toalla; también hay una alfombrilla de baño y un paño de cocina.",
      it: "Le lenzuola sono fornite e il letto (140 × 200 cm) è rifatto. Ogni ospite dispone di un asciugamano; sono inoltre forniti un tappetino da bagno e uno strofinaccio.",
    },
  "Les draps sont fournis et le lit est fait. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.":
    {
      en: "Bed linen is provided and the bed is made. Each guest has a bath towel; a bath mat and a kitchen towel are also provided.",
      de: "Bettwäsche wird gestellt und das Bett ist gemacht. Jedem Gast steht ein Handtuch zur Verfügung; eine Badematte und ein Geschirrtuch sind ebenfalls vorhanden.",
      es: "La ropa de cama está incluida y la cama está hecha. Cada huésped dispone de una toalla; también hay una alfombrilla de baño y un paño de cocina.",
      it: "Le lenzuola sono fornite e il letto è rifatto. Ogni ospite dispone di un asciugamano; sono inoltre forniti un tappetino da bagno e uno strofinaccio.",
    },
  "📺 Télévision": {
    en: "📺 Television",
    de: "📺 Fernseher",
    es: "📺 Televisión",
    it: "📺 Televisione",
  },
  "Étape 1 — Appuyez sur le bouton Power (rouge, tout en haut de la télécommande blanche) pour allumer l'écran.\nÉtape 2 — Patientez quelques secondes que le menu d'accueil apparaisse ; au besoin, allumez aussi la télécommande du décodeur.\nÉtape 3 — Avec les flèches de navigation, sélectionnez l'application « Molotov TV » et validez avec OK, ou passez par la TV d'Orange via le décodeur.\nÉtape 4 — Naviguez et choisissez vos chaînes avec cette télécommande (ou servez-vous de la télécommande du décodeur pour changer de chaîne).\n\nPour les TV avec décodeur, mettez la source sur le bon emplacement HDMI (1 ou 2). Si cela ne fonctionne pas, débranchez puis rebranchez le décodeur.":
    {
      en: "Step 1 — Press the Power button (red, at the top of the white remote) to switch on the screen.\nStep 2 — Wait a few seconds for the home menu to appear; if needed, also switch on the set-top box remote.\nStep 3 — Using the navigation arrows, select the “Molotov TV” app and confirm with OK, or use Orange TV via the set-top box.\nStep 4 — Browse and choose your channels with this remote (or use the set-top box remote to change channels).\n\nFor TVs with a set-top box, set the source to the correct HDMI input (1 or 2). If it doesn't work, unplug and plug the box back in.",
      de: "Schritt 1 — Drücken Sie die Power-Taste (rot, ganz oben auf der weißen Fernbedienung), um den Bildschirm einzuschalten.\nSchritt 2 — Warten Sie einige Sekunden, bis das Startmenü erscheint; schalten Sie bei Bedarf auch die Fernbedienung des Decoders ein.\nSchritt 3 — Wählen Sie mit den Navigationspfeilen die App „Molotov TV“ und bestätigen Sie mit OK, oder nutzen Sie Orange TV über den Decoder.\nSchritt 4 — Navigieren und wählen Sie Ihre Sender mit dieser Fernbedienung (oder verwenden Sie die Fernbedienung des Decoders, um die Sender zu wechseln).\n\nStellen Sie bei Fernsehern mit Decoder die Quelle auf den richtigen HDMI-Eingang (1 oder 2). Falls es nicht funktioniert, ziehen Sie den Decoder aus der Steckdose und stecken Sie ihn wieder ein.",
      es: "Paso 1 — Pulse el botón Power (rojo, en la parte superior del mando blanco) para encender la pantalla.\nPaso 2 — Espere unos segundos a que aparezca el menú de inicio; si es necesario, encienda también el mando del decodificador.\nPaso 3 — Con las flechas de navegación, seleccione la aplicación «Molotov TV» y confirme con OK, o use la TV de Orange mediante el decodificador.\nPaso 4 — Navegue y elija sus canales con este mando (o use el mando del decodificador para cambiar de canal).\n\nPara los televisores con decodificador, ponga la fuente en la entrada HDMI correcta (1 o 2). Si no funciona, desenchufe y vuelva a enchufar el decodificador.",
      it: "Passo 1 — Premete il tasto Power (rosso, in alto sul telecomando bianco) per accendere lo schermo.\nPasso 2 — Attendete qualche secondo che appaia il menu iniziale; se necessario, accendete anche il telecomando del decoder.\nPasso 3 — Con le frecce di navigazione, selezionate l'app «Molotov TV» e confermate con OK, oppure usate la TV di Orange tramite il decoder.\nPasso 4 — Navigate e scegliete i canali con questo telecomando (o usate il telecomando del decoder per cambiare canale).\n\nPer i TV con decoder, impostate la sorgente sull'ingresso HDMI corretto (1 o 2). Se non funziona, scollegate e ricollegate il decoder.",
    },
  "🔥 Chauffage": {
    en: "🔥 Heating",
    de: "🔥 Heizung",
    es: "🔥 Calefacción",
    it: "🔥 Riscaldamento",
  },
  "Pour allumer les radiateurs, appuyez sur le bouton on/off et réglez la température avec les flèches. Merci de limiter votre consommation.":
    {
      en: "To turn on the radiators, press the on/off button and adjust the temperature with the arrows. Please keep your consumption reasonable.",
      de: "Um die Heizkörper einzuschalten, drücken Sie die On/Off-Taste und stellen Sie die Temperatur mit den Pfeilen ein. Bitte achten Sie auf einen sparsamen Verbrauch.",
      es: "Para encender los radiadores, pulse el botón on/off y ajuste la temperatura con las flechas. Le rogamos que limite el consumo.",
      it: "Per accendere i radiatori, premete il tasto on/off e regolate la temperatura con le frecce. Vi preghiamo di limitare i consumi.",
    },
  "🍳 Plaque de cuisson": {
    en: "🍳 Hob",
    de: "🍳 Kochfeld",
    es: "🍳 Placa de cocción",
    it: "🍳 Piano cottura",
  },
  "Les boutons sont tactiles. Si la plaque se verrouille, restez appuyé longuement sur le cadenas afin de la déverrouiller.":
    {
      en: "The controls are touch-sensitive. If the hob locks, press and hold the padlock symbol to unlock it.",
      de: "Die Bedienelemente sind berührungsempfindlich. Wenn das Kochfeld sperrt, halten Sie das Schloss-Symbol gedrückt, um es zu entsperren.",
      es: "Los mandos son táctiles. Si la placa se bloquea, mantenga pulsado el candado para desbloquearla.",
      it: "I comandi sono touch. Se il piano cottura si blocca, tenete premuto a lungo il lucchetto per sbloccarlo.",
    },
  "☕ Machine à café": {
    en: "☕ Coffee machine",
    de: "☕ Kaffeemaschine",
    es: "☕ Cafetera",
    it: "☕ Macchina del caffè",
  },
  "La machine à café est une Nespresso (à capsules).": {
    en: "The coffee machine is a Nespresso (capsules).",
    de: "Die Kaffeemaschine ist eine Nespresso (Kapseln).",
    es: "La cafetera es una Nespresso (cápsulas).",
    it: "La macchina del caffè è una Nespresso (capsule).",
  },
  "🪟 Fenêtres de toit (velux)": {
    en: "🪟 Roof windows (skylights)",
    de: "🪟 Dachfenster (Velux)",
    es: "🪟 Ventanas de techo (tragaluces)",
    it: "🪟 Finestre da tetto (lucernari)",
  },
  "Les fenêtres de toit (velux) ne s'ouvrent pas. Le store est électrique : une télécommande accrochée au mur permet de le fermer pour occulter la pièce et profiter de nuits dans le noir.":
    {
      en: "The roof windows (skylights) do not open. The blind is electric: a remote control on the wall lets you close it to black out the room and enjoy nights in the dark.",
      de: "Die Dachfenster (Velux) lassen sich nicht öffnen. Das Rollo ist elektrisch: Mit einer Fernbedienung an der Wand können Sie es schließen, um den Raum abzudunkeln und im Dunkeln zu schlafen.",
      es: "Las ventanas de techo (tragaluces) no se abren. El estor es eléctrico: un mando en la pared permite cerrarlo para oscurecer la habitación y disfrutar de noches a oscuras.",
      it: "Le finestre da tetto (lucernari) non si aprono. La tenda è elettrica: un telecomando a parete permette di chiuderla per oscurare la stanza e dormire al buio.",
    },
  "🪟 Fenêtre de toit (velux) de la chambre": {
    en: "🪟 Bedroom roof window (skylight)",
    de: "🪟 Dachfenster (Velux) im Schlafzimmer",
    es: "🪟 Ventana de techo (tragaluz) del dormitorio",
    it: "🪟 Finestra da tetto (lucernario) della camera",
  },
  "Le velux de la chambre ne s'ouvre pas. Son store est électrique : une télécommande permet de le fermer pour occulter la chambre et profiter de nuits dans le noir. Le séjour-salon dispose, lui, d'une fenêtre classique.":
    {
      en: "The bedroom roof window (skylight) does not open. Its blind is electric: a remote lets you close it to black out the bedroom and enjoy nights in the dark. The living room has a regular window.",
      de: "Das Dachfenster (Velux) im Schlafzimmer lässt sich nicht öffnen. Sein Rollo ist elektrisch: Mit einer Fernbedienung können Sie es schließen, um das Schlafzimmer abzudunkeln und im Dunkeln zu schlafen. Das Wohnzimmer verfügt über ein normales Fenster.",
      es: "La ventana de techo (tragaluz) del dormitorio no se abre. Su estor es eléctrico: un mando permite cerrarlo para oscurecer el dormitorio y dormir a oscuras. El salón dispone de una ventana normal.",
      it: "Il lucernario della camera non si apre. La sua tenda è elettrica: un telecomando permette di chiuderla per oscurare la camera e dormire al buio. Il soggiorno dispone di una finestra normale.",
    },
  "🧹 Aspirateur & ménage": {
    en: "🧹 Vacuum cleaner & cleaning",
    de: "🧹 Staubsauger & Reinigung",
    es: "🧹 Aspiradora y limpieza",
    it: "🧹 Aspirapolvere e pulizie",
  },
  "L'aspirateur se trouve dans le placard près de la salle de douche. Merci de rendre l'appartement propre et rangé à votre départ.":
    {
      en: "The vacuum cleaner is in the cupboard near the shower room. Please leave the flat clean and tidy on departure.",
      de: "Der Staubsauger befindet sich im Schrank neben dem Duschbad. Bitte hinterlassen Sie die Wohnung bei der Abreise sauber und ordentlich.",
      es: "La aspiradora está en el armario junto al baño con ducha. Por favor, deje el apartamento limpio y ordenado a su salida.",
      it: "L'aspirapolvere si trova nell'armadio vicino al bagno con doccia. Vi preghiamo di lasciare l'appartamento pulito e in ordine alla partenza.",
    },
  "🍽️ Casse de vaisselle": {
    en: "🍽️ Broken dishes",
    de: "🍽️ Zerbrochenes Geschirr",
    es: "🍽️ Vajilla rota",
    it: "🍽️ Stoviglie rotte",
  },
  "En cas de casse de vaisselle durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.":
    {
      en: "If any dishes break during your stay, please let us know so we can replace the missing items. Depending on the damaged items, a refund may be requested.",
      de: "Sollte während Ihres Aufenthalts Geschirr zu Bruch gehen, informieren Sie uns bitte, damit wir die fehlenden Teile ersetzen können. Je nach beschädigten Artikeln kann eine Erstattung verlangt werden.",
      es: "Si se rompe alguna vajilla durante su estancia, infórmenos para que podamos reponer los elementos que falten. Según los artículos dañados, podrá solicitarse un reembolso.",
      it: "In caso di rottura di stoviglie durante il soggiorno, vi preghiamo di informarci affinché possiamo sostituire gli elementi mancanti. A seconda degli articoli danneggiati, potrà essere richiesto un rimborso.",
    },
  "Machine à café Nespresso": {
    en: "Nespresso coffee machine",
    de: "Nespresso-Kaffeemaschine",
    es: "Cafetera Nespresso",
    it: "Macchina del caffè Nespresso",
  },
  "Plaques de cuisson tactiles": {
    en: "Touch-control hob",
    de: "Touch-Kochfeld",
    es: "Placa de cocción táctil",
    it: "Piano cottura touch",
  },
  Réfrigérateur: {
    en: "Fridge",
    de: "Kühlschrank",
    es: "Frigorífico",
    it: "Frigorifero",
  },
  "Poêles & casseroles": {
    en: "Pans & pots",
    de: "Pfannen & Töpfe",
    es: "Sartenes y ollas",
    it: "Pentole e padelle",
  },
  "TV (décodeur Orange)": {
    en: "TV (Orange box)",
    de: "TV (Orange-Box)",
    es: "TV (decodificador Orange)",
    it: "TV (decoder Orange)",
  },
  "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans le logement comme dans les parties communes (couloirs, escaliers).":
    {
      en: "Please be especially mindful between 10 p.m. and 8 a.m. to respect everyone's sleep, both in the flat and in the common areas (hallways, stairs).",
      de: "Bitte nehmen Sie besonders zwischen 22:00 und 8:00 Uhr Rücksicht auf die Nachtruhe – sowohl in der Wohnung als auch in den Gemeinschaftsbereichen (Flure, Treppen).",
      es: "Le rogamos especial cuidado entre las 22:00 y las 8:00 para respetar el descanso de todos, tanto en el apartamento como en las zonas comunes (pasillos, escaleras).",
      it: "Vi preghiamo di prestare particolare attenzione tra le 22:00 e le 8:00 per rispettare il riposo di tutti, sia nell'appartamento sia nelle parti comuni (corridoi, scale).",
    },
  "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du supplément correspondant. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores.":
    {
      en: "Non-smoking flat: please go down to the street to smoke or vape. Parties and gatherings are strictly forbidden in the flat. Pets are allowed (1 animal maximum), subject to the applicable surcharge. Please respect the quiet of the neighbourhood by limiting noise.",
      de: "Nichtraucherwohnung: Bitte gehen Sie zum Rauchen oder Dampfen auf die Straße. Partys und Feiern sind in der Wohnung streng verboten. Haustiere sind erlaubt (max. 1 Tier), gegen den entsprechenden Aufpreis. Bitte nehmen Sie Rücksicht auf die Nachbarschaft und vermeiden Sie Lärm.",
      es: "Alojamiento de no fumadores: salga a la calle para fumar o vapear. Las fiestas y celebraciones están estrictamente prohibidas en el apartamento. Se admiten mascotas (1 animal máximo), con el suplemento correspondiente. Respete la tranquilidad del vecindario limitando el ruido.",
      it: "Alloggio per non fumatori: vi preghiamo di scendere in strada per fumare o svapare. Feste e serate sono severamente vietate nell'appartamento. Gli animali domestici sono ammessi (massimo 1), con il relativo supplemento. Vi preghiamo di rispettare la quiete del vicinato limitando i rumori.",
    },
  "Les déchets doivent être déposés dans les bacs situés à l'extérieur, dans la cour.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur situé au 8 Place de la Mare":
    {
      en: "Waste must be put in the bins located outside, in the courtyard.\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 8 Place de la Mare",
      de: "Der Müll muss in die Tonnen draußen im Hof gestellt werden.\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container bei 8 Place de la Mare",
      es: "Los residuos deben depositarse en los contenedores situados fuera, en el patio.\n🟡 Contenedor amarillo: envases y reciclables\n⚫ Contenedor gris: basura doméstica\n🍷 Vidrio: contenedor en el 8 de Place de la Mare",
      it: "I rifiuti devono essere depositati nei bidoni situati all'esterno, nel cortile.\n🟡 Bidone giallo: imballaggi e riciclabili\n⚫ Bidone grigio: rifiuti domestici\n🍷 Vetro: contenitore all'8 di Place de la Mare",
    },
  "Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du règlement et du supplément correspondant.":
    {
      en: "Pets are allowed (1 animal maximum), subject to the house rules and the applicable surcharge.",
      de: "Haustiere sind erlaubt (max. 1 Tier), vorbehaltlich der Hausordnung und des entsprechenden Aufpreises.",
      es: "Se admiten mascotas (1 animal máximo), según las normas y el suplemento correspondiente.",
      it: "Gli animali domestici sono ammessi (massimo 1), nel rispetto del regolamento e del relativo supplemento.",
    },
  "Parking privé gratuit": {
    en: "Free private parking",
    de: "Kostenloser Privatparkplatz",
    es: "Aparcamiento privado gratuito",
    it: "Parcheggio privato gratuito",
  },
  "Lit double (140 × 200)": {
    en: "Double bed (140 × 200)",
    de: "Doppelbett (140 × 200)",
    es: "Cama de matrimonio (140 × 200)",
    it: "Letto matrimoniale (140 × 200)",
  },
  Aspirateur: {
    en: "Vacuum cleaner",
    de: "Staubsauger",
    es: "Aspiradora",
    it: "Aspirapolvere",
  },
  "Salle de douche privative": {
    en: "Private shower room",
    de: "Eigenes Duschbad",
    es: "Baño privado con ducha",
    it: "Bagno privato con doccia",
  },
  "Animaux acceptés (supplément)": {
    en: "Pets allowed (surcharge)",
    de: "Haustiere erlaubt (Aufpreis)",
    es: "Se admiten mascotas (suplemento)",
    it: "Animali ammessi (supplemento)",
  },
  "Chambre séparée": {
    en: "Separate bedroom",
    de: "Separates Schlafzimmer",
    es: "Dormitorio separado",
    it: "Camera separata",
  },
  "Coin repas": {
    en: "Dining area",
    de: "Essbereich",
    es: "Zona de comedor",
    it: "Angolo pranzo",
  },
  "Besoin d'un ménage en cours de séjour ? Disponible en supplément, sur demande. Contactez-nous.":
    {
      en: "Need a mid-stay clean? Available at extra cost, on request. Contact us.",
      de: "Brauchen Sie eine Zwischenreinigung? Gegen Aufpreis auf Anfrage verfügbar. Kontaktieren Sie uns.",
      es: "¿Necesita una limpieza durante la estancia? Disponible con suplemento, bajo petición. Contáctenos.",
      it: "Avete bisogno di una pulizia durante il soggiorno? Disponibile con supplemento, su richiesta. Contattateci.",
    },
  "Faire la vaisselle, la ranger et vider les poubelles dans les bacs de la cour": {
    en: "Wash and put away the dishes, and empty the bins into the courtyard containers",
    de: "Geschirr spülen und wegräumen sowie den Müll in die Tonnen im Hof leeren",
    es: "Lavar y guardar la vajilla, y vaciar la basura en los contenedores del patio",
    it: "Lavare e riporre le stoviglie e svuotare i rifiuti nei bidoni del cortile",
  },
  "Rendre l'appartement propre et rangé (aspirateur dans le placard près de la salle de douche)":
    {
      en: "Leave the flat clean and tidy (vacuum cleaner in the cupboard near the shower room)",
      de: "Die Wohnung sauber und ordentlich hinterlassen (Staubsauger im Schrank neben dem Duschbad)",
      es: "Dejar el apartamento limpio y ordenado (aspiradora en el armario junto al baño con ducha)",
      it: "Lasciare l'appartamento pulito e in ordine (aspirapolvere nell'armadio vicino al bagno con doccia)",
    },
  "Fermer les fenêtres et velux s'ils ont été ouverts, éteindre les lumières et baisser la température des radiateurs":
    {
      en: "Close the windows and skylights if they were opened, turn off the lights and lower the radiator temperature",
      de: "Fenster und Dachfenster schließen, falls geöffnet, das Licht ausschalten und die Heizkörper herunterregeln",
      es: "Cerrar las ventanas y los tragaluces si se abrieron, apagar las luces y bajar la temperatura de los radiadores",
      it: "Chiudere le finestre e i lucernari se sono stati aperti, spegnere le luci e abbassare la temperatura dei radiatori",
    },
  "Penser à vous déconnecter des plateformes utilisées avec vos identifiants (Netflix, Amazon Prime, etc.)":
    {
      en: "Remember to log out of any platforms you used with your accounts (Netflix, Amazon Prime, etc.)",
      de: "Denken Sie daran, sich von allen mit Ihren Konten genutzten Plattformen abzumelden (Netflix, Amazon Prime usw.)",
      es: "Acuérdese de cerrar sesión en las plataformas que haya usado con sus cuentas (Netflix, Amazon Prime, etc.)",
      it: "Ricordatevi di disconnettervi dalle piattaforme usate con i vostri account (Netflix, Amazon Prime, ecc.)",
    },
  "Fermer l'appartement à clé et remettre les clés dans la boîte à code": {
    en: "Lock the flat and put the keys back in the code lockbox",
    de: "Die Wohnung abschließen und die Schlüssel zurück in den Code-Schlüsselkasten legen",
    es: "Cerrar el apartamento con llave y devolver las llaves a la caja con código",
    it: "Chiudere a chiave l'appartamento e rimettere le chiavi nella cassetta con codice",
  },
  "Le départ est prévu au plus tard à 10h. Si vous souhaitez prolonger votre séjour avec un départ tardif, merci d'en faire la demande en amont. Cette option entraîne un supplément, à régler directement via le lien correspondant ci-dessous. Merci de me communiquer votre heure de départ une fois le paiement effectué.":
    {
      en: "Departure is by 10 a.m. at the latest. If you'd like to extend your stay with a late check-out, please request it in advance. This option incurs a surcharge, payable directly via the corresponding link below. Please let me know your departure time once payment is made.",
      de: "Die Abreise ist spätestens um 10 Uhr. Wenn Sie Ihren Aufenthalt mit einem späten Check-out verlängern möchten, fragen Sie bitte im Voraus an. Diese Option ist mit einem Aufpreis verbunden, der direkt über den entsprechenden Link unten zu zahlen ist. Bitte teilen Sie mir Ihre Abreisezeit mit, sobald die Zahlung erfolgt ist.",
      es: "La salida es a las 10 h como muy tarde. Si desea prolongar su estancia con una salida tardía, solicítelo con antelación. Esta opción conlleva un suplemento, que se abona directamente mediante el enlace correspondiente más abajo. Comuníqueme su hora de salida una vez realizado el pago.",
      it: "La partenza è entro le 10. Se desiderate prolungare il soggiorno con una partenza posticipata, fatene richiesta in anticipo. Questa opzione comporta un supplemento, da pagare direttamente tramite il link corrispondente qui sotto. Vi prego di comunicarmi l'orario di partenza una volta effettuato il pagamento.",
    },
  "Place Saint-Sauveur — bars & restaurants (3 min)": {
    en: "Place Saint-Sauveur — bars & restaurants (3 min)",
    de: "Place Saint-Sauveur — Bars & Restaurants (3 Min.)",
    es: "Plaza Saint-Sauveur — bares y restaurantes (3 min)",
    it: "Place Saint-Sauveur — bar e ristoranti (3 min)",
  },
  "Hyper-centre — shopping, bars, restaurants (3–4 min)": {
    en: "City centre — shopping, bars, restaurants (3–4 min)",
    de: "Stadtzentrum — Shopping, Bars, Restaurants (3–4 Min.)",
    es: "Centro — compras, bares, restaurantes (3–4 min)",
    it: "Centro città — shopping, bar, ristoranti (3–4 min)",
  },
  "Mairie & Abbaye aux Hommes (3–4 min)": {
    en: "Town hall & Abbaye aux Hommes (3–4 min)",
    de: "Rathaus & Abbaye aux Hommes (3–4 Min.)",
    es: "Ayuntamiento y Abbaye aux Hommes (3–4 min)",
    it: "Municipio e Abbaye aux Hommes (3–4 min)",
  },
  "Château de Caen (5 min)": {
    en: "Caen Castle (5 min)",
    de: "Schloss von Caen (5 Min.)",
    es: "Castillo de Caen (5 min)",
    it: "Castello di Caen (5 min)",
  },
  "Quartier du Vaugueux — restaurants (10 min)": {
    en: "Vaugueux district — restaurants (10 min)",
    de: "Viertel Vaugueux — Restaurants (10 Min.)",
    es: "Barrio del Vaugueux — restaurantes (10 min)",
    it: "Quartiere del Vaugueux — ristoranti (10 min)",
  },
  "Port de Caen — bars & restaurants (10–12 min)": {
    en: "Caen marina — bars & restaurants (10–12 min)",
    de: "Hafen von Caen — Bars & Restaurants (10–12 Min.)",
    es: "Puerto de Caen — bares y restaurantes (10–12 min)",
    it: "Porto di Caen — bar e ristoranti (10–12 min)",
  },
  "Vous êtes en plein centre-ville de Caen, à deux pas des restaurants, des commerces et des principaux monuments. Le Mémorial de Caen est à moins de 10 minutes en voiture.":
    {
      en: "You're right in the centre of Caen, steps from the restaurants, shops and main monuments. The Caen Memorial is less than 10 minutes away by car.",
      de: "Sie wohnen mitten im Zentrum von Caen, wenige Schritte von Restaurants, Geschäften und den wichtigsten Sehenswürdigkeiten. Das Mémorial de Caen ist weniger als 10 Autominuten entfernt.",
      es: "Está en pleno centro de Caen, a dos pasos de los restaurantes, las tiendas y los principales monumentos. El Memorial de Caen está a menos de 10 minutos en coche.",
      it: "Siete in pieno centro a Caen, a due passi da ristoranti, negozi e principali monumenti. Il Mémorial de Caen è a meno di 10 minuti in auto.",
    },
  "Cuisine du marché conviviale, à ~300 m (côté université).": {
    en: "Friendly market-fresh cuisine, ~300 m away (university side).",
    de: "Gemütliche Marktküche, ~300 m entfernt (Uni-Seite).",
    es: "Cocina de mercado agradable, a ~300 m (lado universidad).",
    it: "Cucina di mercato conviviale, a ~300 m (lato università).",
  },
  "Cuisine maison dans une ambiance chaleureuse, crêpes et plats du jour.": {
    en: "Home cooking in a warm setting, crêpes and daily specials.",
    de: "Hausmannskost in gemütlicher Atmosphäre, Crêpes und Tagesgerichte.",
    es: "Cocina casera en un ambiente acogedor, crepes y platos del día.",
    it: "Cucina casalinga in un ambiente accogliente, crêpes e piatti del giorno.",
  },
  "Spécialités libanaises : mezze et grillades.": {
    en: "Lebanese specialities: mezze and grills.",
    de: "Libanesische Spezialitäten: Mezze und Gegrilltes.",
    es: "Especialidades libanesas: mezze y parrilladas.",
    it: "Specialità libanesi: mezze e grigliate.",
  },
  "Table conviviale à deux pas du centre.": {
    en: "Friendly spot just steps from the centre.",
    de: "Geselliges Lokal wenige Schritte vom Zentrum.",
    es: "Mesa agradable a dos pasos del centro.",
    it: "Locale conviviale a due passi dal centro.",
  },
  "Bouillon à la parisienne : cuisine française généreuse à petit prix.": {
    en: "Parisian-style bouillon: hearty French food at low prices.",
    de: "Bouillon im Pariser Stil: großzügige französische Küche zu kleinen Preisen.",
    es: "Bouillon a la parisina: cocina francesa generosa a precios económicos.",
    it: "Bouillon alla parigina: generosa cucina francese a piccoli prezzi.",
  },
  "Crêperie-galetterie au cœur du centre.": {
    en: "Crêperie-galetterie in the heart of the centre.",
    de: "Crêperie-Galetterie im Herzen des Zentrums.",
    es: "Crepería-galetería en pleno centro.",
    it: "Crêperie-galetterie nel cuore del centro.",
  },
  "Cuisine vietnamienne familiale.": {
    en: "Family-run Vietnamese cuisine.",
    de: "Familiäre vietnamesische Küche.",
    es: "Cocina vietnamita familiar.",
    it: "Cucina vietnamita familiare.",
  },
  "Kebab et plats à emporter, le plus proche (~280 m).": {
    en: "Kebab and takeaway, the closest (~280 m).",
    de: "Kebab und Speisen zum Mitnehmen, am nächsten (~280 m).",
    es: "Kebab y comida para llevar, el más cercano (~280 m).",
    it: "Kebab e piatti da asporto, il più vicino (~280 m).",
  },
  "Kebab et grillades à emporter.": {
    en: "Kebab and grills to take away.",
    de: "Kebab und Gegrilltes zum Mitnehmen.",
    es: "Kebab y parrilladas para llevar.",
    it: "Kebab e grigliate da asporto.",
  },
  "Café-sandwicherie : formules, donuts et boissons.": {
    en: "Café-sandwich shop: meal deals, donuts and drinks.",
    de: "Café-Sandwicherie: Menüs, Donuts und Getränke.",
    es: "Café-bocatería: menús, donuts y bebidas.",
    it: "Caffè-paninoteca: menù, donut e bevande.",
  },
  "Sandwichs, salades et cafés à emporter.": {
    en: "Sandwiches, salads and coffee to go.",
    de: "Sandwiches, Salate und Kaffee zum Mitnehmen.",
    es: "Bocadillos, ensaladas y cafés para llevar.",
    it: "Panini, insalate e caffè da asporto.",
  },
  "Sandwichs et salades faits maison.": {
    en: "Homemade sandwiches and salads.",
    de: "Hausgemachte Sandwiches und Salate.",
    es: "Bocadillos y ensaladas caseros.",
    it: "Panini e insalate fatti in casa.",
  },
  "Burgers maison.": {
    en: "Homemade burgers.",
    de: "Hausgemachte Burger.",
    es: "Hamburguesas caseras.",
    it: "Hamburger fatti in casa.",
  },
  "Café-bar le plus proche, à ~170 m.": {
    en: "Closest café-bar, ~170 m away.",
    de: "Nächstes Café-Bar, ~170 m entfernt.",
    es: "Café-bar más cercano, a ~170 m.",
    it: "Caffè-bar più vicino, a ~170 m.",
  },
  "Bar étudiant animé, côté université.": {
    en: "Lively student bar, university side.",
    de: "Lebhafte Studentenbar, Uni-Seite.",
    es: "Bar estudiantil animado, lado universidad.",
    it: "Bar studentesco vivace, lato università.",
  },
  "Bar convivial face à la faculté.": {
    en: "Friendly bar opposite the university.",
    de: "Geselliges Lokal gegenüber der Uni.",
    es: "Bar agradable frente a la facultad.",
    it: "Bar conviviale di fronte all'università.",
  },
  "Bar de quartier sympathique.": {
    en: "Nice neighbourhood bar.",
    de: "Sympathische Kneipe im Viertel.",
    es: "Bar de barrio simpático.",
    it: "Simpatico bar di quartiere.",
  },
  "Bar à l'ambiance décontractée.": {
    en: "Bar with a laid-back vibe.",
    de: "Bar mit entspannter Atmosphäre.",
    es: "Bar de ambiente relajado.",
    it: "Bar dall'atmosfera rilassata.",
  },
  "Bar à bières et tapas.": {
    en: "Beer and tapas bar.",
    de: "Bier- und Tapas-Bar.",
    es: "Bar de cervezas y tapas.",
    it: "Bar di birre e tapas.",
  },
  "Bar à cocktails du centre.": {
    en: "Cocktail bar in the centre.",
    de: "Cocktailbar im Zentrum.",
    es: "Coctelería del centro.",
    it: "Cocktail bar del centro.",
  },
  "La supérette la plus proche, pour le dépannage du quotidien.": {
    en: "The nearest mini-market, for everyday essentials.",
    de: "Der nächste Mini-Markt für den täglichen Bedarf.",
    es: "El supermercado más cercano, para lo del día a día.",
    it: "Il minimarket più vicino, per le necessità quotidiane.",
  },
  "Épicerie (produits du monde) à deux pas.": {
    en: "Grocery (world foods) just steps away.",
    de: "Lebensmittelladen (Produkte aus aller Welt) wenige Schritte entfernt.",
    es: "Tienda de comestibles (productos del mundo) a dos pasos.",
    it: "Alimentari (prodotti dal mondo) a due passi.",
  },
  "Épicerie bio et vrac.": {
    en: "Organic and bulk grocery.",
    de: "Bio- und Unverpackt-Laden.",
    es: "Tienda ecológica y a granel.",
    it: "Negozio bio e sfuso.",
  },
  "Dépannage en soirée, près du château.": {
    en: "Late-evening convenience store, near the castle.",
    de: "Spätkauf am Abend, nahe der Burg.",
    es: "Tienda de conveniencia por la noche, cerca del castillo.",
    it: "Negozio di prossimità serale, vicino al castello.",
  },
  "Supermarché du centre (45 bd Maréchal Leclerc), ouvert tard.": {
    en: "City-centre supermarket (45 bd Maréchal Leclerc), open late.",
    de: "Supermarkt im Zentrum (45 bd Maréchal Leclerc), lange geöffnet.",
    es: "Supermercado del centro (45 bd Maréchal Leclerc), abierto hasta tarde.",
    it: "Supermercato del centro (45 bd Maréchal Leclerc), aperto fino a tardi.",
  },
  "Boulangerie-pâtisserie la plus proche : pain frais et viennoiseries.": {
    en: "Nearest bakery-pâtisserie: fresh bread and pastries.",
    de: "Nächste Bäckerei-Konditorei: frisches Brot und Gebäck.",
    es: "Panadería-pastelería más cercana: pan fresco y bollería.",
    it: "Panetteria-pasticceria più vicina: pane fresco e dolci.",
  },
  "Boulangerie réputée : pains et pâtisseries.": {
    en: "Well-known bakery: breads and pastries.",
    de: "Bekannte Bäckerei: Brote und Gebäck.",
    es: "Panadería de renombre: panes y pastelería.",
    it: "Panetteria rinomata: pani e dolci.",
  },
  "Tartines, salades et douceurs maison.": {
    en: "Open sandwiches, salads and homemade treats.",
    de: "Stullen, Salate und hausgemachte Leckereien.",
    es: "Tostas, ensaladas y dulces caseros.",
    it: "Tartine, insalate e dolci fatti in casa.",
  },
  "Boucherie-charcuterie artisanale, près de la place Saint-Sauveur.": {
    en: "Artisan butcher-deli, near Place Saint-Sauveur.",
    de: "Handwerkliche Metzgerei, nahe Place Saint-Sauveur.",
    es: "Carnicería-charcutería artesanal, cerca de la plaza Saint-Sauveur.",
    it: "Macelleria-salumeria artigianale, vicino a place Saint-Sauveur.",
  },
  "L'arrêt de tram le plus proche (~330 m) — réseau Twisto, vers le centre, la gare et les campus.":
    {
      en: "The nearest tram stop (~330 m) — Twisto network, towards the centre, the station and the campuses.",
      de: "Die nächste Straßenbahnhaltestelle (~330 m) — Twisto-Netz, Richtung Zentrum, Bahnhof und Campus.",
      es: "La parada de tranvía más cercana (~330 m) — red Twisto, hacia el centro, la estación y los campus.",
      it: "La fermata del tram più vicina (~330 m) — rete Twisto, verso il centro, la stazione e i campus.",
    },
  "L'arrêt de bus au pied du logement (~90 m).": {
    en: "The bus stop right by the flat (~90 m).",
    de: "Die Bushaltestelle direkt an der Wohnung (~90 m).",
    es: "La parada de autobús al pie del alojamiento (~90 m).",
    it: "La fermata dell'autobus ai piedi dell'alloggio (~90 m).",
  },
  "Arrêt de tram desservant le campus 1 et le centre.": {
    en: "Tram stop serving Campus 1 and the centre.",
    de: "Straßenbahnhaltestelle für Campus 1 und das Zentrum.",
    es: "Parada de tranvía que da servicio al campus 1 y al centro.",
    it: "Fermata del tram che serve il campus 1 e il centro.",
  },
  "Arrêt de tram près du château.": {
    en: "Tram stop near the castle.",
    de: "Straßenbahnhaltestelle nahe der Burg.",
    es: "Parada de tranvía cerca del castillo.",
    it: "Fermata del tram vicino al castello.",
  },
  "3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs.":
    {
      en: "3 tram lines and many buses. Timetables, map and tickets on the Twisto app or at the machines.",
      de: "3 Straßenbahnlinien und zahlreiche Busse. Fahrpläne, Plan und Tickets in der Twisto-App oder an den Automaten.",
      es: "3 líneas de tranvía y numerosos autobuses. Horarios, plano y billetes en la app Twisto o en las máquinas.",
      it: "3 linee di tram e numerosi bus. Orari, mappa e biglietti sull'app Twisto o ai distributori.",
    },
  "Pharmacie à ~750 m. Pharmacie de garde : composez le 3237.": {
    en: "Pharmacy ~750 m away. On-call pharmacy: dial 3237.",
    de: "Apotheke ~750 m entfernt. Notdienstapotheke: wählen Sie 3237.",
    es: "Farmacia a ~750 m. Farmacia de guardia: marque el 3237.",
    it: "Farmacia a ~750 m. Farmacia di turno: componete il 3237.",
  },
  "Pharmacie proche du centre.": {
    en: "Pharmacy near the centre.",
    de: "Apotheke nahe dem Zentrum.",
    es: "Farmacia cerca del centro.",
    it: "Farmacia vicino al centro.",
  },
  "Grande pharmacie du centre-ville.": {
    en: "Large city-centre pharmacy.",
    de: "Große Apotheke im Stadtzentrum.",
    es: "Gran farmacia del centro.",
    it: "Grande farmacia del centro.",
  },
  "À deux pas de chez vous : le Jardin des Plantes (gratuit, ~2 min) pour une pause au vert, et la place Saint-Sauveur avec ses terrasses. L'Abbaye aux Hommes et le château se rejoignent à pied. Le soir, le quartier du Vaugueux concentre les meilleures tables — et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !":
    {
      en: "Right on your doorstep: the Botanical Garden (free, ~2 min) for a green break, and Place Saint-Sauveur with its terraces. The Abbaye aux Hommes and the castle are within walking distance. In the evening, the Vaugueux district has the best tables — and for foodies, try the tripes à la mode de Caen, the local speciality!",
      de: "Direkt vor Ihrer Tür: der Botanische Garten (kostenlos, ~2 Min.) für eine Pause im Grünen und der Place Saint-Sauveur mit seinen Terrassen. Die Abbaye aux Hommes und die Burg sind zu Fuß erreichbar. Am Abend bietet das Viertel Vaugueux die besten Lokale — und für Feinschmecker: probieren Sie die Tripes à la mode de Caen, die lokale Spezialität!",
      es: "A dos pasos: el Jardín Botánico (gratis, ~2 min) para una pausa verde, y la plaza Saint-Sauveur con sus terrazas. La Abbaye aux Hommes y el castillo se llegan a pie. Por la noche, el barrio del Vaugueux reúne las mejores mesas — y para los golosos, ¡pruebe las tripes à la mode de Caen, la especialidad local!",
      it: "A due passi: il Giardino Botanico (gratuito, ~2 min) per una pausa nel verde e place Saint-Sauveur con i suoi dehors. L'Abbaye aux Hommes e il castello sono raggiungibili a piedi. La sera, il quartiere del Vaugueux riunisce le tavole migliori — e per i golosi, assaggiate le tripes à la mode de Caen, la specialità locale!",
    },
  "Disponible sur la conversation de la plateforme de réservation ou par téléphone en cas de besoin.":
    {
      en: "Available via the booking platform's chat or by phone if needed.",
      de: "Erreichbar über den Chat der Buchungsplattform oder telefonisch bei Bedarf.",
      es: "Disponible en el chat de la plataforma de reserva o por teléfono si lo necesita.",
      it: "Disponibile nella chat della piattaforma di prenotazione o per telefono in caso di necessità.",
    },

  // ==================================================================== Bohème
  "Séjour lumineux avec coin salon et espace nuit": {
    en: "Bright living room with a lounge area and a sleeping area",
    de: "Heller Wohnraum mit Sitzecke und Schlafbereich",
    es: "Salón luminoso con zona de estar y zona de noche",
    it: "Soggiorno luminoso con angolo salotto e zona notte",
  },
  "Mezzanine aménagée pour un couchage supplémentaire (hauteur réduite : 68–90 cm, recommandée aux enfants dès 8 ans)":
    {
      en: "Mezzanine fitted out for extra sleeping (low headroom: 68–90 cm, recommended for children aged 8+)",
      de: "Galerie (Mezzanin) als zusätzliche Schlafmöglichkeit (geringe Höhe: 68–90 cm, empfohlen für Kinder ab 8 Jahren)",
      es: "Altillo (mezzanine) acondicionado como cama adicional (altura reducida: 68–90 cm, recomendado para niños a partir de 8 años)",
      it: "Soppalco attrezzato per un posto letto aggiuntivo (altezza ridotta: 68–90 cm, consigliato per bambini dagli 8 anni)",
    },
  "🪜 Mezzanine (couchage d'appoint)": {
    en: "🪜 Mezzanine (extra bed)",
    de: "🪜 Galerie/Mezzanin (Zusatzbett)",
    es: "🪜 Altillo (cama adicional)",
    it: "🪜 Soppalco (letto aggiuntivo)",
  },
  "L'espace nuit en mezzanine offre un couchage supplémentaire. ⚠️ La hauteur sous plafond y est réduite (68 cm au plus bas, 90 cm au plus haut) : cet espace est recommandé pour des enfants à partir de 8 ans. Accédez-y avec prudence.":
    {
      en: "The mezzanine sleeping area provides an extra bed. ⚠️ Headroom there is low (68 cm at the lowest, 90 cm at the highest): this space is recommended for children aged 8 and over. Please access it with care.",
      de: "Der Schlafbereich auf der Galerie bietet eine zusätzliche Schlafmöglichkeit. ⚠️ Die Höhe ist dort gering (68 cm an der niedrigsten, 90 cm an der höchsten Stelle): Dieser Bereich wird für Kinder ab 8 Jahren empfohlen. Bitte vorsichtig hinaufsteigen.",
      es: "La zona de noche del altillo ofrece una cama adicional. ⚠️ La altura es reducida (68 cm en el punto más bajo, 90 cm en el más alto): este espacio se recomienda para niños a partir de 8 años. Acceda con precaución.",
      it: "La zona notte sul soppalco offre un posto letto aggiuntivo. ⚠️ L'altezza è ridotta (68 cm nel punto più basso, 90 cm in quello più alto): questo spazio è consigliato per bambini dagli 8 anni. Accedetevi con prudenza.",
    },
  "Mezzanine (couchage d'appoint)": {
    en: "Mezzanine (extra bed)",
    de: "Galerie/Mezzanin (Zusatzbett)",
    es: "Altillo (cama adicional)",
    it: "Soppalco (letto aggiuntivo)",
  },

  // ============================ Retouches Mer (aspirateur retiré, vaisselle, animaux)
  "🍽️ Vaisselle": { en: "🍽️ Dishes", de: "🍽️ Geschirr", es: "🍽️ Vajilla", it: "🍽️ Stoviglie" },
  "🐾 Animaux": { en: "🐾 Pets", de: "🐾 Haustiere", es: "🐾 Mascotas", it: "🐾 Animali" },
  "Les fenêtres de toit (velux) ne s'ouvrent pas. Le store est électrique : une télécommande, accrochée au mur entre le lit et la table de nuit, permet de le fermer pour occulter la pièce et profiter de nuits dans le noir.":
    {
      en: "The roof windows (skylights) do not open. The blind is electric: a remote control — on the wall between the bed and the bedside table — lets you close it to black out the room and enjoy nights in the dark.",
      de: "Die Dachfenster (Velux) lassen sich nicht öffnen. Das Rollo ist elektrisch: Mit einer Fernbedienung – an der Wand zwischen Bett und Nachttisch – können Sie es schließen, um den Raum abzudunkeln und im Dunkeln zu schlafen.",
      es: "Las ventanas de techo (tragaluces) no se abren. El estor es eléctrico: un mando, en la pared entre la cama y la mesita de noche, permite cerrarlo para oscurecer la habitación y disfrutar de noches a oscuras.",
      it: "Le finestre da tetto (lucernari) non si aprono. La tenda è elettrica: un telecomando, a parete tra il letto e il comodino, permette di chiuderla per oscurare la stanza e dormire al buio.",
    },
  "Le velux de la chambre ne s'ouvre pas. Son store est électrique : une télécommande, accrochée au mur à l'entrée de la chambre sur la droite, permet de le fermer pour occulter la chambre et profiter de nuits dans le noir. Le séjour-salon dispose, lui, d'une fenêtre classique.":
    {
      en: "The bedroom roof window (skylight) does not open. Its blind is electric: a remote control — mounted on the wall to the right as you enter the bedroom — lets you close it to black out the bedroom and enjoy nights in the dark. The living room has a regular window.",
      de: "Das Dachfenster (Velux) im Schlafzimmer lässt sich nicht öffnen. Sein Rollo ist elektrisch: Mit einer Fernbedienung – an der Wand rechts am Eingang des Schlafzimmers – können Sie es schließen, um das Schlafzimmer abzudunkeln und im Dunkeln zu schlafen. Das Wohnzimmer verfügt über ein normales Fenster.",
      es: "La ventana de techo (tragaluz) del dormitorio no se abre. Su estor es eléctrico: un mando, en la pared a la derecha al entrar en el dormitorio, permite cerrarlo para oscurecer el dormitorio y dormir a oscuras. El salón dispone de una ventana normal.",
      it: "Il lucernario della camera non si apre. La sua tenda è elettrica: un telecomando, a parete a destra all'ingresso della camera, permette di chiuderla per oscurare la camera e dormire al buio. Il soggiorno dispone di una finestra normale.",
    },
  "Les fenêtres de toit (velux) ne s'ouvrent pas. Le store est électrique : une télécommande, accrochée au mur à côté du placard sur la droite, permet de le fermer pour occulter la pièce et profiter de nuits dans le noir.":
    {
      en: "The roof windows (skylights) do not open. The blind is electric: a remote control — on the wall next to the wardrobe on the right — lets you close it to black out the room and enjoy nights in the dark.",
      de: "Die Dachfenster (Velux) lassen sich nicht öffnen. Das Rollo ist elektrisch: Mit einer Fernbedienung – an der Wand neben dem Schrank rechts – können Sie es schließen, um den Raum abzudunkeln und im Dunkeln zu schlafen.",
      es: "Las ventanas de techo (tragaluces) no se abren. El estor es eléctrico: un mando, en la pared junto al armario a la derecha, permite cerrarlo para oscurecer la habitación y disfrutar de noches a oscuras.",
      it: "Le finestre da tetto (lucernari) non si aprono. La tenda è elettrica: un telecomando, a parete accanto all'armadio sulla destra, permette di chiuderla per oscurare la stanza e dormire al buio.",
    },
  "Allumez la télévision avec l'unique télécommande (bouton Power). Il n'y a pas de décodeur : le téléviseur est directement connecté à l'application TV d'Orange. Utilisez les flèches et le bouton OK pour naviguer et choisir vos chaînes.":
    {
      en: "Turn on the TV with the single remote (Power button). There is no set-top box: the television is connected directly to the Orange TV app. Use the arrows and the OK button to browse and choose your channels.",
      de: "Schalten Sie den Fernseher mit der einzigen Fernbedienung ein (Power-Taste). Es gibt keinen Decoder: Das Fernsehgerät ist direkt mit der Orange-TV-App verbunden. Navigieren und wählen Sie Ihre Sender mit den Pfeiltasten und der OK-Taste.",
      es: "Encienda el televisor con el único mando (botón Power). No hay decodificador: el televisor está conectado directamente a la aplicación TV de Orange. Use las flechas y el botón OK para navegar y elegir sus canales.",
      it: "Accendete il televisore con l'unico telecomando (tasto Power). Non c'è alcun decoder: il televisore è collegato direttamente all'app TV di Orange. Usate le frecce e il tasto OK per navigare e scegliere i canali.",
    },
  "Rendre l'appartement propre et rangé": {
    en: "Leave the flat clean and tidy",
    de: "Die Wohnung sauber und ordentlich hinterlassen",
    es: "Dejar el apartamento limpio y ordenado",
    it: "Lasciare l'appartamento pulito e in ordine",
  },
  "Les animaux de compagnie sont acceptés (1 animal maximum). Le supplément correspondant est à régler directement sur la plateforme de réservation.":
    {
      en: "Pets are allowed (1 animal maximum). The corresponding surcharge is payable directly on the booking platform.",
      de: "Haustiere sind erlaubt (max. 1 Tier). Der entsprechende Aufpreis ist direkt über die Buchungsplattform zu zahlen.",
      es: "Se admiten mascotas (1 animal máximo). El suplemento correspondiente se abona directamente en la plataforma de reserva.",
      it: "Gli animali domestici sono ammessi (massimo 1). Il relativo supplemento va pagato direttamente sulla piattaforma di prenotazione.",
    },
  "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. Les animaux de compagnie sont acceptés (1 animal maximum), le supplément correspondant étant à régler directement sur la plateforme de réservation. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores.":
    {
      en: "Non-smoking flat: please go down to the street to smoke or vape. Parties and gatherings are strictly forbidden in the flat. Pets are allowed (1 animal maximum); the corresponding surcharge is payable directly on the booking platform. Please respect the quiet of the neighbourhood by limiting noise.",
      de: "Nichtraucherwohnung: Bitte gehen Sie zum Rauchen oder Dampfen auf die Straße. Partys und Feiern sind in der Wohnung streng verboten. Haustiere sind erlaubt (max. 1 Tier); der entsprechende Aufpreis ist direkt über die Buchungsplattform zu zahlen. Bitte nehmen Sie Rücksicht auf die Nachbarschaft und vermeiden Sie Lärm.",
      es: "Alojamiento de no fumadores: salga a la calle para fumar o vapear. Las fiestas y celebraciones están estrictamente prohibidas en el apartamento. Se admiten mascotas (1 animal máximo); el suplemento correspondiente se abona directamente en la plataforma de reserva. Respete la tranquilidad del vecindario limitando el ruido.",
      it: "Alloggio per non fumatori: vi preghiamo di scendere in strada per fumare o svapare. Feste e serate sono severamente vietate nell'appartamento. Gli animali domestici sono ammessi (massimo 1); il relativo supplemento va pagato direttamente sulla piattaforma di prenotazione. Vi preghiamo di rispettare la quiete del vicinato limitando i rumori.",
    },

  // ==================== Noms de lieux « Autour de moi » (descripteurs traduits)
  "Château de Caen": { en: "Caen Castle", de: "Schloss von Caen", es: "Castillo de Caen", it: "Castello di Caen" },
  "Église Saint-Pierre": { en: "Saint-Pierre Church", de: "Kirche Saint-Pierre", es: "Iglesia Saint-Pierre", it: "Chiesa Saint-Pierre" },
  "Abbaye aux Hommes (Saint-Étienne)": {
    en: "Abbaye aux Hommes (Saint-Étienne abbey)",
    de: "Abbaye aux Hommes (Abtei Saint-Étienne)",
    es: "Abbaye aux Hommes (abadía Saint-Étienne)",
    it: "Abbaye aux Hommes (abbazia Saint-Étienne)",
  },
  "Abbaye aux Dames (la Trinité)": {
    en: "Abbaye aux Dames (la Trinité abbey)",
    de: "Abbaye aux Dames (Abtei la Trinité)",
    es: "Abbaye aux Dames (abadía la Trinité)",
    it: "Abbaye aux Dames (abbazia la Trinité)",
  },
  "Musée de Normandie": { en: "Normandy Museum", de: "Museum der Normandie", es: "Museo de Normandía", it: "Museo della Normandia" },
  "Le Mémorial de Caen": { en: "The Caen Memorial", de: "Das Mémorial de Caen", es: "El Memorial de Caen", it: "Il Mémorial de Caen" },
  "Musée des Beaux-Arts de Caen": {
    en: "Caen Fine Arts Museum",
    de: "Museum der Schönen Künste Caen",
    es: "Museo de Bellas Artes de Caen",
    it: "Museo delle Belle Arti di Caen",
  },
  "Plages du Débarquement": {
    en: "D-Day Landing Beaches",
    de: "Landungsstrände (D-Day)",
    es: "Playas del Desembarco",
    it: "Spiagge dello Sbarco",
  },
  "Cimetière américain de Colleville-sur-Mer": {
    en: "Colleville-sur-Mer American Cemetery",
    de: "Amerikanischer Friedhof Colleville-sur-Mer",
    es: "Cementerio americano de Colleville-sur-Mer",
    it: "Cimitero americano di Colleville-sur-Mer",
  },
  "Le Bassin Saint-Pierre (port de plaisance)": {
    en: "The Bassin Saint-Pierre (marina)",
    de: "Das Bassin Saint-Pierre (Yachthafen)",
    es: "El Bassin Saint-Pierre (puerto deportivo)",
    it: "Il Bassin Saint-Pierre (porto turistico)",
  },
  "Le Jardin des Plantes": {
    en: "The Botanical Garden (Jardin des Plantes)",
    de: "Der Botanische Garten (Jardin des Plantes)",
    es: "El Jardín Botánico (Jardin des Plantes)",
    it: "Il Giardino Botanico (Jardin des Plantes)",
  },
  "Parc de la Colline aux Oiseaux": {
    en: "Colline aux Oiseaux Park",
    de: "Park Colline aux Oiseaux",
    es: "Parque de la Colline aux Oiseaux",
    it: "Parco della Colline aux Oiseaux",
  },
  "Plage de Deauville": { en: "Deauville Beach", de: "Strand von Deauville", es: "Playa de Deauville", it: "Spiaggia di Deauville" },
  "Théâtre de Caen": { en: "Caen Theatre", de: "Theater von Caen", es: "Teatro de Caen", it: "Teatro di Caen" },
  "Marché du dimanche matin sur le port": {
    en: "Sunday morning market at the harbour",
    de: "Sonntagvormittagsmarkt am Hafen",
    es: "Mercado del domingo por la mañana en el puerto",
    it: "Mercato della domenica mattina al porto",
  },
  "Centre commercial Les Rives de l'Orne": {
    en: "Les Rives de l'Orne shopping centre",
    de: "Einkaufszentrum Les Rives de l'Orne",
    es: "Centro comercial Les Rives de l'Orne",
    it: "Centro commerciale Les Rives de l'Orne",
  },
  "Épicerie de nuit les Quatrans": {
    en: "Les Quatrans night grocery",
    de: "Nachtladen Les Quatrans",
    es: "Tienda nocturna Les Quatrans",
    it: "Alimentari notturno Les Quatrans",
  },
  "Boucherie Saint-Sauveur": {
    en: "Saint-Sauveur butcher's",
    de: "Metzgerei Saint-Sauveur",
    es: "Carnicería Saint-Sauveur",
    it: "Macelleria Saint-Sauveur",
  },
  "Arrêt de tram « Place de la Mare »": {
    en: "Tram stop “Place de la Mare”",
    de: "Straßenbahnhaltestelle „Place de la Mare“",
    es: "Parada de tranvía «Place de la Mare»",
    it: "Fermata del tram «Place de la Mare»",
  },
  "Arrêt de bus « Jardin des Plantes »": {
    en: "Bus stop “Jardin des Plantes”",
    de: "Bushaltestelle „Jardin des Plantes“",
    es: "Parada de autobús «Jardin des Plantes»",
    it: "Fermata dell'autobus «Jardin des Plantes»",
  },
  "Arrêt de tram « Université »": {
    en: "Tram stop “Université”",
    de: "Straßenbahnhaltestelle „Université“",
    es: "Parada de tranvía «Université»",
    it: "Fermata del tram «Université»",
  },
  "Arrêt de tram « Château Quatrans »": {
    en: "Tram stop “Château Quatrans”",
    de: "Straßenbahnhaltestelle „Château Quatrans“",
    es: "Parada de tranvía «Château Quatrans»",
    it: "Fermata del tram «Château Quatrans»",
  },
  "Réseau Twisto (tram & bus)": {
    en: "Twisto network (tram & bus)",
    de: "Twisto-Netz (Tram & Bus)",
    es: "Red Twisto (tranvía y autobús)",
    it: "Rete Twisto (tram e bus)",
  },
  "Gare SNCF de Caen": {
    en: "Caen railway station",
    de: "Bahnhof Caen",
    es: "Estación de tren de Caen",
    it: "Stazione di Caen",
  },
  "Gare maritime de Ouistreham (Brittany Ferries)": {
    en: "Ouistreham ferry terminal (Brittany Ferries)",
    de: "Fährterminal Ouistreham (Brittany Ferries)",
    es: "Terminal de ferris de Ouistreham (Brittany Ferries)",
    it: "Terminal dei traghetti di Ouistreham (Brittany Ferries)",
  },
  "Aéroport de Caen-Carpiquet": {
    en: "Caen-Carpiquet Airport",
    de: "Flughafen Caen-Carpiquet",
    es: "Aeropuerto de Caen-Carpiquet",
    it: "Aeroporto di Caen-Carpiquet",
  },
  "Pharmacie Schiebold-Derouet": {
    en: "Schiebold-Derouet pharmacy",
    de: "Apotheke Schiebold-Derouet",
    es: "Farmacia Schiebold-Derouet",
    it: "Farmacia Schiebold-Derouet",
  },
  "Pharmacie Danjou-Rousselot": {
    en: "Danjou-Rousselot pharmacy",
    de: "Apotheke Danjou-Rousselot",
    es: "Farmacia Danjou-Rousselot",
    it: "Farmacia Danjou-Rousselot",
  },
  "Grande Pharmacie de Caen": {
    en: "Grande Pharmacie de Caen (large pharmacy)",
    de: "Grande Pharmacie de Caen (große Apotheke)",
    es: "Grande Pharmacie de Caen (gran farmacia)",
    it: "Grande Pharmacie de Caen (grande farmacia)",
  },
  "CHU Caen Normandie": {
    en: "Caen Normandie University Hospital",
    de: "Universitätsklinikum Caen Normandie",
    es: "Hospital Universitario Caen Normandie",
    it: "Ospedale universitario Caen Normandie",
  },
  "SOS Médecins Caen": {
    en: "SOS Médecins Caen (on-call doctors)",
    de: "SOS Médecins Caen (ärztlicher Notdienst)",
    es: "SOS Médecins Caen (médicos de urgencia)",
    it: "SOS Médecins Caen (medici a domicilio)",
  },
  "Commissariat de police de Caen": {
    en: "Caen police station",
    de: "Polizeiwache Caen",
    es: "Comisaría de policía de Caen",
    it: "Commissariato di polizia di Caen",
  },
  "Le Flore — Bar Tabac Presse": {
    en: "Le Flore — tobacconist & newsagent",
    de: "Le Flore — Tabak- und Zeitungsladen",
    es: "Le Flore — estanco y prensa",
    it: "Le Flore — tabaccheria e giornali",
  },

  // ============================================================ Saint-Jean
  "Bienvenue dans l'appartement Saint-Jean, en plein cœur de Caen ! Vous êtes rue Saint-Jean, à deux pas des restaurants, des commerces et du port — tout se fait à pied. Son petit plus : un balcon avec vue sur les toits de Caen, parfait pour un café le matin ou un verre le soir. Très bon séjour ! ☕":
    {
      en: "Welcome to the Saint-Jean apartment, right in the heart of Caen! You're on Rue Saint-Jean, just steps from restaurants, shops and the harbour — everything is within walking distance. Its little extra: a balcony overlooking the rooftops of Caen, perfect for a morning coffee or an evening drink. Enjoy your stay! ☕",
      de: "Willkommen in der Wohnung Saint-Jean, mitten im Herzen von Caen! Sie wohnen in der Rue Saint-Jean, nur wenige Schritte von Restaurants, Geschäften und dem Hafen entfernt – alles ist zu Fuß erreichbar. Das kleine Extra: ein Balkon mit Blick über die Dächer von Caen, perfekt für einen Kaffee am Morgen oder einen Drink am Abend. Einen schönen Aufenthalt! ☕",
      es: "¡Bienvenido al apartamento Saint-Jean, en pleno corazón de Caen! Está en la rue Saint-Jean, a dos pasos de restaurantes, comercios y del puerto: todo se hace a pie. Su pequeño plus: un balcón con vistas a los tejados de Caen, perfecto para un café por la mañana o una copa por la noche. ¡Feliz estancia! ☕",
      it: "Benvenuti nell'appartamento Saint-Jean, nel pieno cuore di Caen! Vi trovate in rue Saint-Jean, a due passi da ristoranti, negozi e dal porto: tutto è raggiungibile a piedi. Il suo piccolo plus: un balcone con vista sui tetti di Caen, perfetto per un caffè al mattino o un aperitivo la sera. Buon soggiorno! ☕",
    },
  "Arrivée autonome jusqu'à 22h": {
    en: "Self check-in until 10 p.m.",
    de: "Selbstständige Anreise bis 22 Uhr",
    es: "Llegada autónoma hasta las 22 h",
    it: "Arrivo autonomo fino alle 22",
  },
  "L'accès à l'appartement se fait en autonomie ; vous pouvez arriver jusqu'à 22h.":
    {
      en: "Access to the apartment is self-service; you can arrive up until 10 p.m.",
      de: "Der Zugang zur Wohnung erfolgt selbstständig; Sie können bis 22 Uhr anreisen.",
      es: "El acceso al apartamento es autónomo; puede llegar hasta las 22 h.",
      it: "L'accesso all'appartamento è autonomo; potete arrivare fino alle 22.",
    },
  "Les clés se trouvent dans la boîte à clés. Composez le code indiqué ci-dessus pour l'ouvrir.":
    {
      en: "The keys are in the key box. Enter the code shown above to open it.",
      de: "Die Schlüssel befinden sich im Schlüsselkasten. Geben Sie den oben angegebenen Code ein, um ihn zu öffnen.",
      es: "Las llaves se encuentran en la caja de llaves. Introduzca el código indicado arriba para abrirla.",
      it: "Le chiavi si trovano nella cassetta delle chiavi. Componete il codice indicato sopra per aprirla.",
    },
  "L'appartement est au 3ᵉ étage à droite — porte de droite.": {
    en: "The apartment is on the 3rd floor on the right — the right-hand door.",
    de: "Die Wohnung befindet sich im 3. Stock rechts — die rechte Tür.",
    es: "El apartamento está en la 3.ª planta a la derecha — la puerta de la derecha.",
    it: "L'appartamento è al 3º piano a destra — la porta di destra.",
  },
  "Pensez à bien remettre les clés dans la boîte à clés à votre départ et à refermer celle-ci.":
    {
      en: "Remember to put the keys back in the key box when you leave and to close it.",
      de: "Denken Sie daran, die Schlüssel bei Ihrer Abreise wieder in den Schlüsselkasten zu legen und diesen zu schließen.",
      es: "Recuerde volver a dejar las llaves en la caja de llaves al marcharse y cerrarla.",
      it: "Ricordatevi di rimettere le chiavi nella cassetta delle chiavi alla partenza e di richiuderla.",
    },
  "Le logement se situe en plein centre-ville : il n'y a pas de place de parking privée.\nStationnement payant en voirie dans le secteur (horodateurs) et plusieurs parkings publics à proximité (Parking de la République, Parking du Théâtre, Parking de la gare). Pensez à l'appli de stationnement de la ville pour payer à distance.":
    {
      en: "The property is right in the city centre: there is no private parking space.\nPaid on-street parking in the area (ticket machines) and several public car parks nearby (Parking de la République, Parking du Théâtre, Parking de la gare). Consider the city's parking app to pay remotely.",
      de: "Die Unterkunft liegt mitten im Stadtzentrum: Es gibt keinen privaten Parkplatz.\nKostenpflichtiges Parken am Straßenrand im Viertel (Parkautomaten) und mehrere öffentliche Parkhäuser in der Nähe (Parking de la République, Parking du Théâtre, Parking de la gare). Nutzen Sie die Park-App der Stadt, um aus der Ferne zu bezahlen.",
      es: "El alojamiento se encuentra en pleno centro: no hay plaza de aparcamiento privada.\nAparcamiento de pago en la vía pública en la zona (parquímetros) y varios aparcamientos públicos cercanos (Parking de la République, Parking du Théâtre, Parking de la gare). Utilice la aplicación de aparcamiento de la ciudad para pagar a distancia.",
      it: "L'alloggio si trova in pieno centro città: non c'è un posto auto privato.\nParcheggio a pagamento su strada nella zona (parchimetri) e diversi parcheggi pubblici nelle vicinanze (Parking de la République, Parking du Théâtre, Parking de la gare). Potete usare l'app di parcheggio della città per pagare a distanza.",
    },
  "Chambre avec lit double (140 × 200 cm), rangements et dressing": {
    en: "Bedroom with a double bed (140 × 200 cm), storage and a dressing area",
    de: "Schlafzimmer mit Doppelbett (140 × 200 cm), Stauraum und Ankleidebereich",
    es: "Dormitorio con cama doble (140 × 200 cm), armarios y vestidor",
    it: "Camera con letto matrimoniale (140 × 200 cm), armadi e cabina armadio",
  },
  "Salon lumineux avec canapé et TV": {
    en: "Bright living room with sofa and TV",
    de: "Helles Wohnzimmer mit Sofa und Fernseher",
    es: "Salón luminoso con sofá y TV",
    it: "Soggiorno luminoso con divano e TV",
  },
  "Cuisine séparée entièrement équipée": {
    en: "Separate, fully equipped kitchen",
    de: "Separate, voll ausgestattete Küche",
    es: "Cocina independiente totalmente equipada",
    it: "Cucina separata completamente attrezzata",
  },
  "Salle de bain avec baignoire/douche": {
    en: "Bathroom with bathtub/shower",
    de: "Badezimmer mit Badewanne/Dusche",
    es: "Baño con bañera/ducha",
    it: "Bagno con vasca/doccia",
  },
  "WC séparés": {
    en: "Separate toilet",
    de: "Separates WC",
    es: "Aseo independiente",
    it: "WC separato",
  },
  "Balcon avec vue sur la rue Saint-Jean et les toits de Caen": {
    en: "Balcony overlooking Rue Saint-Jean and the rooftops of Caen",
    de: "Balkon mit Blick auf die Rue Saint-Jean und die Dächer von Caen",
    es: "Balcón con vistas a la rue Saint-Jean y a los tejados de Caen",
    it: "Balcone con vista sulla rue Saint-Jean e sui tetti di Caen",
  },
  "Deux télécommandes sont nécessaires : la télécommande Sony (marquée « TV », avec pavé de chiffres) pour l'écran, et la télécommande Orange (noire et fine) pour le décodeur.\n\n1. Allumez la télévision avec la télécommande Sony — bouton de mise en marche en haut à droite.\n2. Allumez le décodeur Orange avec sa télécommande — bouton de mise en marche en haut.\n3. Avec la télécommande Sony, appuyez sur le bouton Source/Entrée (en haut à gauche) et sélectionnez « HDMI3 ».\n4. Les chaînes s'affichent : utilisez ensuite la télécommande Orange pour changer de chaîne, régler le volume et naviguer.\n\nSi l'écran reste noir, vérifiez que le décodeur est allumé (petit voyant rouge sous la TV) et que la source est bien sur HDMI3.":
    {
      en: "Two remotes are needed: the Sony remote (labelled “TV”, with the number pad) for the screen, and the Orange remote (slim and black) for the set-top box.\n\n1. Turn on the television with the Sony remote — power button, top right.\n2. Turn on the Orange set-top box with its remote — power button, at the top.\n3. With the Sony remote, press the Source/Input button (top left) and select “HDMI3”.\n4. The channels appear: then use the Orange remote to change channels, adjust the volume and navigate.\n\nIf the screen stays black, check that the set-top box is on (small red light under the TV) and that the source is set to HDMI3.",
      de: "Sie benötigen zwei Fernbedienungen: die Sony-Fernbedienung (mit „TV“ beschriftet, mit Zifferntasten) für den Bildschirm und die Orange-Fernbedienung (schmal und schwarz) für den Receiver.\n\n1. Schalten Sie den Fernseher mit der Sony-Fernbedienung ein – Ein-/Aus-Taste oben rechts.\n2. Schalten Sie den Orange-Receiver mit seiner Fernbedienung ein – Ein-/Aus-Taste oben.\n3. Drücken Sie mit der Sony-Fernbedienung die Quelle-/Eingangstaste (oben links) und wählen Sie „HDMI3“.\n4. Die Sender erscheinen: Verwenden Sie dann die Orange-Fernbedienung, um umzuschalten, die Lautstärke zu regeln und zu navigieren.\n\nWenn der Bildschirm schwarz bleibt, prüfen Sie, ob der Receiver eingeschaltet ist (kleines rotes Licht unter dem Fernseher) und ob die Quelle auf HDMI3 steht.",
      es: "Se necesitan dos mandos: el mando Sony (con la etiqueta «TV» y teclado numérico) para la pantalla, y el mando Orange (fino y negro) para el descodificador.\n\n1. Encienda el televisor con el mando Sony — botón de encendido, arriba a la derecha.\n2. Encienda el descodificador Orange con su mando — botón de encendido, en la parte superior.\n3. Con el mando Sony, pulse el botón de Fuente/Entrada (arriba a la izquierda) y seleccione «HDMI3».\n4. Aparecen los canales: use después el mando Orange para cambiar de canal, ajustar el volumen y navegar.\n\nSi la pantalla permanece en negro, compruebe que el descodificador está encendido (pequeña luz roja debajo del televisor) y que la fuente está en HDMI3.",
      it: "Servono due telecomandi: il telecomando Sony (con la scritta «TV» e il tastierino numerico) per lo schermo, e il telecomando Orange (sottile e nero) per il decoder.\n\n1. Accendete il televisore con il telecomando Sony — tasto di accensione in alto a destra.\n2. Accendete il decoder Orange con il suo telecomando — tasto di accensione in alto.\n3. Con il telecomando Sony, premete il tasto Sorgente/Ingresso (in alto a sinistra) e selezionate «HDMI3».\n4. Compaiono i canali: usate poi il telecomando Orange per cambiare canale, regolare il volume e navigare.\n\nSe lo schermo resta nero, verificate che il decoder sia acceso (piccola spia rossa sotto la TV) e che la sorgente sia impostata su HDMI3.",
    },
  "🛁 Salle de bain": {
    en: "🛁 Bathroom",
    de: "🛁 Badezimmer",
    es: "🛁 Baño",
    it: "🛁 Bagno",
  },
  "La salle de bain dispose d'une baignoire avec douche. Les WC sont séparés. Merci de bien refermer le rideau / la paroi pour éviter les éclaboussures.":
    {
      en: "The bathroom has a bathtub with a shower. The toilet is separate. Please close the curtain / screen properly to avoid splashes.",
      de: "Das Badezimmer verfügt über eine Badewanne mit Dusche. Das WC ist separat. Bitte schließen Sie den Vorhang / die Trennwand richtig, um Spritzer zu vermeiden.",
      es: "El baño dispone de bañera con ducha. El aseo es independiente. Por favor, cierre bien la cortina / mampara para evitar salpicaduras.",
      it: "Il bagno dispone di una vasca con doccia. Il WC è separato. Vi preghiamo di chiudere bene la tenda / il pannello per evitare schizzi.",
    },
  "🧺 Lave-linge": {
    en: "🧺 Washing machine",
    de: "🧺 Waschmaschine",
    es: "🧺 Lavadora",
    it: "🧺 Lavatrice",
  },
  "Un lave-linge est à votre disposition. Utilisez une petite dose de lessive et lancez un programme court. Merci d'étendre le linge plutôt que de le laisser dans le tambour.":
    {
      en: "A washing machine is available. Use a small amount of detergent and run a short cycle. Please hang the laundry up rather than leaving it in the drum.",
      de: "Eine Waschmaschine steht zur Verfügung. Verwenden Sie wenig Waschmittel und wählen Sie ein kurzes Programm. Bitte hängen Sie die Wäsche auf, anstatt sie in der Trommel zu lassen.",
      es: "Hay una lavadora a su disposición. Use poca cantidad de detergente y ponga un programa corto. Por favor, tienda la ropa en lugar de dejarla en el tambor.",
      it: "È a vostra disposizione una lavatrice. Usate una piccola dose di detersivo e avviate un programma breve. Vi preghiamo di stendere il bucato anziché lasciarlo nel cestello.",
    },
  "🍳 Cuisine": {
    en: "🍳 Kitchen",
    de: "🍳 Küche",
    es: "🍳 Cocina",
    it: "🍳 Cucina",
  },
  "La cuisine, séparée du séjour, est entièrement équipée : four, micro-ondes, plaques de cuisson, lave-vaisselle, réfrigérateur et machine à café Nespresso (à capsules), ainsi que tout le nécessaire de cuisine.":
    {
      en: "The kitchen, separate from the living room, is fully equipped: oven, microwave, hob, dishwasher, fridge and a Nespresso coffee machine (capsules), along with everything you need to cook.",
      de: "Die vom Wohnzimmer getrennte Küche ist voll ausgestattet: Backofen, Mikrowelle, Kochfeld, Geschirrspüler, Kühlschrank und eine Nespresso-Kaffeemaschine (Kapseln) sowie alles, was Sie zum Kochen brauchen.",
      es: "La cocina, separada del salón, está totalmente equipada: horno, microondas, placa de cocción, lavavajillas, frigorífico y cafetera Nespresso (de cápsulas), además de todo lo necesario para cocinar.",
      it: "La cucina, separata dal soggiorno, è completamente attrezzata: forno, microonde, piano cottura, lavastoviglie, frigorifero e macchina da caffè Nespresso (a capsule), oltre a tutto il necessario per cucinare.",
    },
  "Plaques de cuisson": {
    en: "Hob",
    de: "Kochfeld",
    es: "Placa de cocción",
    it: "Piano cottura",
  },
  TV: {
    en: "TV",
    de: "Fernseher",
    es: "TV",
    it: "TV",
  },
  "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. Les animaux de compagnie sont acceptés (1 animal maximum), sous réserve du supplément correspondant. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, notamment sur le balcon.":
    {
      en: "Non-smoking property: please go down to the street to smoke or vape. Parties and gatherings are strictly forbidden inside the apartment. Pets are allowed (1 pet maximum), subject to the corresponding surcharge. Please respect the neighbours' peace and quiet by keeping noise down, especially on the balcony.",
      de: "Nichtraucher-Unterkunft: Bitte gehen Sie zum Rauchen oder Dampfen auf die Straße. Partys und Feiern sind in der Wohnung strengstens untersagt. Haustiere sind erlaubt (maximal 1 Tier), vorbehaltlich des entsprechenden Aufpreises. Bitte achten Sie auf die Ruhe der Nachbarn und vermeiden Sie Lärm, insbesondere auf dem Balkon.",
      es: "Alojamiento para no fumadores: por favor, baje a la calle para fumar o vapear. Las fiestas y reuniones están estrictamente prohibidas en el apartamento. Se admiten animales (máximo 1), sujeto al suplemento correspondiente. Por favor, respete la tranquilidad del vecindario limitando el ruido, especialmente en el balcón.",
      it: "Alloggio per non fumatori: vi preghiamo di scendere in strada per fumare o svapare. Le feste e i ricevimenti sono severamente vietati all'interno dell'appartamento. Gli animali domestici sono ammessi (massimo 1), previo supplemento corrispondente. Vi preghiamo di rispettare la tranquillità del vicinato limitando i rumori, in particolare sul balcone.",
    },
  "Les déchets doivent être triés et déposés dans les conteneurs prévus à cet effet.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur situé au 88 rue Saint-Jean":
    {
      en: "Waste must be sorted and placed in the bins provided.\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: container at 88 Rue Saint-Jean",
      de: "Der Abfall muss getrennt und in die dafür vorgesehenen Behälter geworfen werden.\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: Container in der Rue Saint-Jean 88",
      es: "Los residuos deben separarse y depositarse en los contenedores previstos.\n🟡 Contenedor amarillo: envases y reciclables\n⚫ Contenedor gris: residuos domésticos\n🍷 Vidrio: contenedor en el 88 de la rue Saint-Jean",
      it: "I rifiuti devono essere differenziati e depositati negli appositi contenitori.\n🟡 Bidone giallo: imballaggi e riciclabili\n⚫ Bidone grigio: rifiuti domestici\n🍷 Vetro: contenitore al civico 88 di rue Saint-Jean",
    },
  "Balcon avec vue": {
    en: "Balcony with a view",
    de: "Balkon mit Aussicht",
    es: "Balcón con vistas",
    it: "Balcone con vista",
  },
  "Chambre séparée (lit double 140 × 200)": {
    en: "Separate bedroom (double bed 140 × 200)",
    de: "Separates Schlafzimmer (Doppelbett 140 × 200)",
    es: "Dormitorio independiente (cama doble 140 × 200)",
    it: "Camera separata (letto matrimoniale 140 × 200)",
  },
  "Cuisine séparée équipée": {
    en: "Separate equipped kitchen",
    de: "Separate ausgestattete Küche",
    es: "Cocina independiente equipada",
    it: "Cucina separata attrezzata",
  },
  "Salle de bain avec baignoire": {
    en: "Bathroom with a bathtub",
    de: "Badezimmer mit Badewanne",
    es: "Baño con bañera",
    it: "Bagno con vasca",
  },
  "Faire la vaisselle, la ranger et vider les poubelles": {
    en: "Wash the dishes, put them away and empty the bins",
    de: "Geschirr spülen, wegräumen und Mülleimer leeren",
    es: "Lavar los platos, guardarlos y vaciar la basura",
    it: "Lavare i piatti, riporli e svuotare la spazzatura",
  },
  "Fermer les fenêtres et la porte du balcon, éteindre les lumières et baisser la température des radiateurs":
    {
      en: "Close the windows and the balcony door, turn off the lights and turn down the radiators",
      de: "Fenster und Balkontür schließen, Licht ausschalten und Heizkörper herunterdrehen",
      es: "Cerrar las ventanas y la puerta del balcón, apagar las luces y bajar la temperatura de los radiadores",
      it: "Chiudere le finestre e la porta del balcone, spegnere le luci e abbassare la temperatura dei termosifoni",
    },
  "Rue Saint-Jean — restaurants, cafés & commerces (sur place)": {
    en: "Rue Saint-Jean — restaurants, cafés & shops (right outside)",
    de: "Rue Saint-Jean — Restaurants, Cafés & Geschäfte (direkt vor Ort)",
    es: "Rue Saint-Jean — restaurantes, cafeterías y comercios (en la misma calle)",
    it: "Rue Saint-Jean — ristoranti, caffè e negozi (sul posto)",
  },
  "Port de plaisance — bars & restaurants (3 min)": {
    en: "Marina — bars & restaurants (3 min)",
    de: "Yachthafen — Bars & Restaurants (3 Min.)",
    es: "Puerto deportivo — bares y restaurantes (3 min)",
    it: "Porto turistico — bar e ristoranti (3 min)",
  },
  "Église Saint-Jean (5 min)": {
    en: "Saint-Jean church (5 min)",
    de: "Kirche Saint-Jean (5 Min.)",
    es: "Iglesia de Saint-Jean (5 min)",
    it: "Chiesa di Saint-Jean (5 min)",
  },
  "Théâtre de Caen (6–7 min)": {
    en: "Caen Theatre (6–7 min)",
    de: "Theater von Caen (6–7 Min.)",
    es: "Teatro de Caen (6–7 min)",
    it: "Teatro di Caen (6–7 min)",
  },
  "Hyper-centre — shopping, bars, restaurants (7–8 min)": {
    en: "City centre — shopping, bars, restaurants (7–8 min)",
    de: "Stadtzentrum — Shopping, Bars, Restaurants (7–8 Min.)",
    es: "Centro — tiendas, bares, restaurantes (7–8 min)",
    it: "Centro città — shopping, bar, ristoranti (7–8 min)",
  },
  "Quartier du Vaugueux — restaurants (8–10 min)": {
    en: "Vaugueux district — restaurants (8–10 min)",
    de: "Viertel Vaugueux — Restaurants (8–10 Min.)",
    es: "Barrio del Vaugueux — restaurantes (8–10 min)",
    it: "Quartiere du Vaugueux — ristoranti (8–10 min)",
  },
  "Château de Caen (10–12 min)": {
    en: "Caen Castle (10–12 min)",
    de: "Schloss von Caen (10–12 Min.)",
    es: "Castillo de Caen (10–12 min)",
    it: "Castello di Caen (10–12 min)",
  },
  "Vous êtes en plein centre-ville de Caen, sur l'une des rues les plus commerçantes, à deux pas du port de plaisance. Tout se fait à pied : restaurants, commerces, monuments. Le Mémorial de Caen est à moins de 10 minutes en voiture.":
    {
      en: "You're right in the centre of Caen, on one of its busiest shopping streets, just steps from the marina. Everything is within walking distance: restaurants, shops, landmarks. The Caen Memorial is less than 10 minutes away by car.",
      de: "Sie wohnen mitten im Zentrum von Caen, in einer der belebtesten Einkaufsstraßen, nur wenige Schritte vom Yachthafen entfernt. Alles ist zu Fuß erreichbar: Restaurants, Geschäfte, Sehenswürdigkeiten. Das Mémorial de Caen ist weniger als 10 Autominuten entfernt.",
      es: "Está en pleno centro de Caen, en una de sus calles más comerciales, a dos pasos del puerto deportivo. Todo se hace a pie: restaurantes, comercios, monumentos. El Memorial de Caen está a menos de 10 minutos en coche.",
      it: "Vi trovate in pieno centro di Caen, in una delle vie più commerciali, a due passi dal porto turistico. Tutto è raggiungibile a piedi: ristoranti, negozi, monumenti. Il Mémorial de Caen è a meno di 10 minuti in auto.",
    },
  "Vous êtes idéalement placé pour découvrir Caen à pied : flânez sur la rue Saint-Jean et ses commerces, rejoignez le château et l'Abbaye aux Hommes, puis offrez-vous une soirée dans le quartier du Vaugueux, qui concentre les meilleures tables. Pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !":
    {
      en: "You're perfectly placed to explore Caen on foot: stroll along Rue Saint-Jean and its shops, head up to the castle and the Abbaye aux Hommes, then treat yourself to an evening in the Vaugueux district, home to the best tables. For food lovers, try the tripes à la mode de Caen, the local speciality!",
      de: "Sie sind perfekt gelegen, um Caen zu Fuß zu erkunden: Schlendern Sie über die Rue Saint-Jean und ihre Geschäfte, gehen Sie hinauf zum Schloss und zur Abbaye aux Hommes und gönnen Sie sich dann einen Abend im Viertel Vaugueux, wo die besten Lokale zu finden sind. Für Feinschmecker: Probieren Sie die Tripes à la mode de Caen, die lokale Spezialität!",
      es: "Está perfectamente situado para descubrir Caen a pie: pasee por la rue Saint-Jean y sus comercios, suba hasta el castillo y la Abbaye aux Hommes, y luego regálese una velada en el barrio del Vaugueux, que reúne las mejores mesas. Para los golosos, ¡pruebe los tripes à la mode de Caen, la especialidad local!",
      it: "Siete perfettamente posizionati per scoprire Caen a piedi: passeggiate lungo la rue Saint-Jean e i suoi negozi, salite al castello e all'Abbaye aux Hommes, poi concedetevi una serata nel quartiere du Vaugueux, che raccoglie le tavole migliori. Per i golosi, assaggiate le tripes à la mode de Caen, la specialità locale!",
    },

  // ------------------------------------------- Saint-Jean · Autour de moi
  "Cuisine vietnamienne, le restaurant le plus proche (~20 m).": {
    en: "Vietnamese cuisine, the nearest restaurant (~20 m).",
    de: "Vietnamesische Küche, das nächstgelegene Restaurant (~20 m).",
    es: "Cocina vietnamita, el restaurante más cercano (~20 m).",
    it: "Cucina vietnamita, il ristorante più vicino (~20 m).",
  },
  "Sushis et cuisine japonaise, à deux pas.": {
    en: "Sushi and Japanese cuisine, just around the corner.",
    de: "Sushi und japanische Küche, ganz in der Nähe.",
    es: "Sushi y cocina japonesa, a dos pasos.",
    it: "Sushi e cucina giapponese, a due passi.",
  },
  "Cuisine asiatique.": {
    en: "Asian cuisine.",
    de: "Asiatische Küche.",
    es: "Cocina asiática.",
    it: "Cucina asiatica.",
  },
  "Bistrot de cuisine française.": {
    en: "French bistro.",
    de: "Französisches Bistro.",
    es: "Bistró de cocina francesa.",
    it: "Bistrot di cucina francese.",
  },
  "Spécialités indiennes.": {
    en: "Indian specialities.",
    de: "Indische Spezialitäten.",
    es: "Especialidades indias.",
    it: "Specialità indiane.",
  },
  "Crêperie-galetterie.": {
    en: "Crêperie (sweet & savoury pancakes).",
    de: "Crêperie (süße & herzhafte Galettes).",
    es: "Crepería (crepes y galettes).",
    it: "Crêperie (crêpes dolci e salate).",
  },
  "Pizzeria italienne.": {
    en: "Italian pizzeria.",
    de: "Italienische Pizzeria.",
    es: "Pizzería italiana.",
    it: "Pizzeria italiana.",
  },
  "Table française réputée du quartier.": {
    en: "A well-known French restaurant in the area.",
    de: "Bekanntes französisches Restaurant im Viertel.",
    es: "Reconocido restaurante francés del barrio.",
    it: "Rinomato ristorante francese del quartiere.",
  },
  "Burgers et plats à emporter, tout proche.": {
    en: "Burgers and takeaway dishes, very close by.",
    de: "Burger und Gerichte zum Mitnehmen, ganz in der Nähe.",
    es: "Hamburguesas y platos para llevar, muy cerca.",
    it: "Burger e piatti da asporto, molto vicino.",
  },
  "Sandwichs et snacks à emporter.": {
    en: "Sandwiches and snacks to take away.",
    de: "Sandwiches und Snacks zum Mitnehmen.",
    es: "Bocadillos y snacks para llevar.",
    it: "Panini e snack da asporto.",
  },
  "Café-bar le plus proche, à ~30 m.": {
    en: "The nearest café-bar, ~30 m away.",
    de: "Das nächstgelegene Café-Bar, ~30 m entfernt.",
    es: "El café-bar más cercano, a ~30 m.",
    it: "Il caffè-bar più vicino, a ~30 m.",
  },
  "Bar de quartier.": {
    en: "Local neighbourhood bar.",
    de: "Bar im Viertel.",
    es: "Bar de barrio.",
    it: "Bar di quartiere.",
  },
  "Pub convivial.": {
    en: "Friendly pub.",
    de: "Gemütlicher Pub.",
    es: "Pub acogedor.",
    it: "Pub accogliente.",
  },
  "Bar animé du côté du port.": {
    en: "Lively bar near the harbour.",
    de: "Lebhafte Bar in Hafennähe.",
    es: "Bar animado cerca del puerto.",
    it: "Bar vivace vicino al porto.",
  },
  "Bar-brasserie, le long des quais.": {
    en: "Bar-brasserie along the quays.",
    de: "Bar-Brasserie entlang der Kais.",
    es: "Bar-brasería junto a los muelles.",
    it: "Bar-brasserie lungo le banchine.",
  },
  "Supérette de dépannage.": {
    en: "Convenience store for essentials.",
    de: "Nahversorger für den Notfall.",
    es: "Tienda de conveniencia para imprevistos.",
    it: "Minimarket di prima necessità.",
  },
  "Supermarché de centre-ville, ouvert tard.": {
    en: "City-centre supermarket, open late.",
    de: "Supermarkt im Stadtzentrum, lange geöffnet.",
    es: "Supermercado del centro, abierto hasta tarde.",
    it: "Supermercato in centro, aperto fino a tardi.",
  },
  "Supermarché bio et vrac.": {
    en: "Organic and bulk supermarket.",
    de: "Bio- und Unverpackt-Supermarkt.",
    es: "Supermercado ecológico y a granel.",
    it: "Supermercato biologico e sfuso.",
  },
  "Supérette ouverte tard.": {
    en: "Convenience store open late.",
    de: "Nahversorger, lange geöffnet.",
    es: "Tienda de conveniencia abierta hasta tarde.",
    it: "Minimarket aperto fino a tardi.",
  },
  "Boulangerie artisanale.": {
    en: "Artisan bakery.",
    de: "Handwerksbäckerei.",
    es: "Panadería artesanal.",
    it: "Panificio artigianale.",
  },
  "Boulangerie-pâtisserie.": {
    en: "Bakery and pastry shop.",
    de: "Bäckerei und Konditorei.",
    es: "Panadería y pastelería.",
    it: "Panetteria e pasticceria.",
  },
  "Boulangerie-pâtisserie réputée.": {
    en: "Well-known bakery and pastry shop.",
    de: "Bekannte Bäckerei und Konditorei.",
    es: "Reconocida panadería y pastelería.",
    it: "Rinomata panetteria e pasticceria.",
  },
  "Arrêt de tram « Résistance Saint-Jean »": {
    en: "Tram stop “Résistance Saint-Jean”",
    de: "Straßenbahnhaltestelle „Résistance Saint-Jean“",
    es: "Parada de tranvía «Résistance Saint-Jean»",
    it: "Fermata del tram «Résistance Saint-Jean»",
  },
  "L'arrêt de tram le plus proche (~200 m) — réseau Twisto, vers le centre, la gare et les campus.":
    {
      en: "The nearest tram stop (~200 m) — Twisto network, towards the centre, the station and the campuses.",
      de: "Die nächstgelegene Straßenbahnhaltestelle (~200 m) – Twisto-Netz, Richtung Zentrum, Bahnhof und Campus.",
      es: "La parada de tranvía más cercana (~200 m) — red Twisto, hacia el centro, la estación y los campus.",
      it: "La fermata del tram più vicina (~200 m) — rete Twisto, verso il centro, la stazione e i campus.",
    },
  "Arrêt de bus « Saint-Jean Église »": {
    en: "Bus stop “Saint-Jean Église”",
    de: "Bushaltestelle „Saint-Jean Église“",
    es: "Parada de autobús «Saint-Jean Église»",
    it: "Fermata dell'autobus «Saint-Jean Église»",
  },
  "L'arrêt de bus le plus proche (~170 m).": {
    en: "The nearest bus stop (~170 m).",
    de: "Die nächstgelegene Bushaltestelle (~170 m).",
    es: "La parada de autobús más cercana (~170 m).",
    it: "La fermata dell'autobus più vicina (~170 m).",
  },
  "Arrêt de tram « Quai de Juillet »": {
    en: "Tram stop “Quai de Juillet”",
    de: "Straßenbahnhaltestelle „Quai de Juillet“",
    es: "Parada de tranvía «Quai de Juillet»",
    it: "Fermata del tram «Quai de Juillet»",
  },
  "Arrêt de tram, le long des quais.": {
    en: "Tram stop, along the quays.",
    de: "Straßenbahnhaltestelle, entlang der Kais.",
    es: "Parada de tranvía, junto a los muelles.",
    it: "Fermata del tram, lungo le banchine.",
  },
  "Pharmacie Saint-Jean": {
    en: "Saint-Jean pharmacy",
    de: "Apotheke Saint-Jean",
    es: "Farmacia Saint-Jean",
    it: "Farmacia Saint-Jean",
  },
  "La pharmacie la plus proche (~50 m). Pharmacie de garde : composez le 3237.": {
    en: "The nearest pharmacy (~50 m). For the on-duty pharmacy: dial 3237.",
    de: "Die nächstgelegene Apotheke (~50 m). Notdienst-Apotheke: Wählen Sie 3237.",
    es: "La farmacia más cercana (~50 m). Farmacia de guardia: marque el 3237.",
    it: "La farmacia più vicina (~50 m). Farmacia di turno: componete il 3237.",
  },
  "Pharmacie de la République": {
    en: "République pharmacy",
    de: "Apotheke République",
    es: "Farmacia République",
    it: "Farmacia République",
  },
  "Pharmacie proche du théâtre.": {
    en: "Pharmacy near the theatre.",
    de: "Apotheke in der Nähe des Theaters.",
    es: "Farmacia cerca del teatro.",
    it: "Farmacia vicino al teatro.",
  },
  "Pharmacie Saint-Michel": {
    en: "Saint-Michel pharmacy",
    de: "Apotheke Saint-Michel",
    es: "Farmacia Saint-Michel",
    it: "Farmacia Saint-Michel",
  },
  "Pharmacie côté sud, près de la rue de Bayeux.": {
    en: "Pharmacy on the south side, near Rue de Bayeux.",
    de: "Apotheke auf der Südseite, nahe der Rue de Bayeux.",
    es: "Farmacia en la zona sur, cerca de la rue de Bayeux.",
    it: "Farmacia lato sud, vicino a rue de Bayeux.",
  },

  // ---------------------------------------------------------------- Sur les quais
  "Bienvenue à Caen ! Vous êtes en plein centre, à deux pas de la rue Saint-Jean et de ses commerces, avec une jolie vue sur les quais. Ici, tout se fait à pied. Très bon séjour ! ⛵":
    {
      en: "Welcome to Caen! You are right in the centre, a stone's throw from Rue Saint-Jean and its shops, with a lovely view over the quays. Here, everything is within walking distance. Have a wonderful stay! ⛵",
      de: "Willkommen in Caen! Sie wohnen mitten im Zentrum, nur wenige Schritte von der Rue Saint-Jean und ihren Geschäften entfernt, mit einem schönen Blick auf die Kais. Hier ist alles zu Fuß erreichbar. Einen schönen Aufenthalt! ⛵",
      es: "¡Bienvenido a Caen! Está en pleno centro, a dos pasos de la rue Saint-Jean y sus comercios, con una bonita vista a los muelles. Aquí todo se hace a pie. ¡Que tenga una estancia estupenda! ⛵",
      it: "Benvenuti a Caen! Siete in pieno centro, a due passi da rue Saint-Jean e dai suoi negozi, con una bella vista sui moli. Qui tutto si fa a piedi. Buon soggiorno! ⛵",
    },
  "Arrivée autonome à partir de 17h": {
    en: "Self check-in from 5 p.m.",
    de: "Selbstständige Anreise ab 17 Uhr",
    es: "Llegada autónoma a partir de las 17 h",
    it: "Arrivo in autonomia dalle 17",
  },
  "Arrivée entre 17h et 21h": {
    en: "Check-in between 5 p.m. and 9 p.m.",
    de: "Anreise zwischen 17 und 21 Uhr",
    es: "Llegada entre las 17 h y las 21 h",
    it: "Arrivo tra le 17 e le 21",
  },
  "L'accès au logement se fait en autonomie. Les clés se trouvent dans une boîte à clés sécurisée, à l'entrée de l'immeuble.":
    {
      en: "Access to the property is self check-in. The keys are in a secure key box at the entrance to the building.",
      de: "Der Zugang zur Wohnung erfolgt selbstständig. Die Schlüssel befinden sich in einem gesicherten Schlüsselkasten am Eingang des Gebäudes.",
      es: "El acceso a la vivienda se realiza de forma autónoma. Las llaves se encuentran en una caja de seguridad con llave, en la entrada del edificio.",
      it: "L'accesso all'alloggio avviene in autonomia. Le chiavi si trovano in una cassetta di sicurezza all'ingresso dell'edificio.",
    },
  "Le code de la boîte à clés et les instructions précises vous sont communiqués par message avant votre arrivée.":
    {
      en: "The key box code and the detailed instructions are sent to you by message before your arrival.",
      de: "Der Code des Schlüsselkastens und die genauen Anweisungen werden Ihnen vor Ihrer Ankunft per Nachricht mitgeteilt.",
      es: "El código de la caja de llaves y las instrucciones detalladas se le comunican por mensaje antes de su llegada.",
      it: "Il codice della cassetta delle chiavi e le istruzioni dettagliate vi vengono comunicati via messaggio prima del vostro arrivo.",
    },
  "L'appartement se situe au 5ᵉ étage, sans ascenseur — l'escalier en vaut la peine pour le calme et la vue !":
    {
      en: "The apartment is on the 5th floor, with no lift — the stairs are well worth it for the quiet and the view!",
      de: "Die Wohnung befindet sich im 5. Stock ohne Aufzug — die Treppe lohnt sich für die Ruhe und die Aussicht!",
      es: "El apartamento está en la 5ª planta, sin ascensor: ¡las escaleras merecen la pena por la tranquilidad y las vistas!",
      it: "L'appartamento si trova al 5º piano, senza ascensore — le scale valgono la pena per la tranquillità e la vista!",
    },
  "À votre départ, merci de remettre les clés dans la boîte à clés et de bien la refermer.":
    {
      en: "On departure, please put the keys back in the key box and close it securely.",
      de: "Legen Sie die Schlüssel bei Ihrer Abreise bitte zurück in den Schlüsselkasten und schließen Sie ihn gut.",
      es: "A su salida, vuelva a colocar las llaves en la caja y ciérrela bien.",
      it: "Alla partenza, riponete le chiavi nella cassetta e richiudetela bene.",
    },
  "Il n'y a pas de place de parking attitrée. Le stationnement est possible dans la rue (payant en journée, de 9h à 12h30 et de 14h à 19h). Pensez à l'appli de stationnement de la ville pour payer à distance.":
    {
      en: "There is no dedicated parking space. Street parking is possible (paid during the day, from 9 a.m. to 12:30 p.m. and from 2 p.m. to 7 p.m.). Consider the city's parking app to pay remotely.",
      de: "Es gibt keinen reservierten Parkplatz. Parken auf der Straße ist möglich (tagsüber kostenpflichtig, von 9 bis 12:30 Uhr und von 14 bis 19 Uhr). Nutzen Sie die Park-App der Stadt, um aus der Ferne zu bezahlen.",
      es: "No hay plaza de aparcamiento reservada. Es posible aparcar en la calle (de pago durante el día, de 9 h a 12:30 h y de 14 h a 19 h). Utilice la app de aparcamiento de la ciudad para pagar a distancia.",
      it: "Non c'è un posto auto riservato. È possibile parcheggiare in strada (a pagamento di giorno, dalle 9 alle 12:30 e dalle 14 alle 19). Usate l'app di parcheggio della città per pagare a distanza.",
    },
  "Chambre avec lit double (140 × 190 cm), grand dressing, store et rideau occultant": {
    en: "Bedroom with a double bed (140 × 190 cm), large dressing room, blind and blackout curtain",
    de: "Schlafzimmer mit Doppelbett (140 × 190 cm), großem Ankleidezimmer, Rollo und Verdunklungsvorhang",
    es: "Dormitorio con cama doble (140 × 190 cm), gran vestidor, estor y cortina opaca",
    it: "Camera con letto matrimoniale (140 × 190 cm), ampia cabina armadio, tenda a rullo e tenda oscurante",
  },
  "Salon cosy avec canapé-lit d'appoint et TV connectée": {
    en: "Cosy living room with an extra sofa bed and a smart TV",
    de: "Gemütliches Wohnzimmer mit zusätzlichem Schlafsofa und Smart-TV",
    es: "Salón acogedor con sofá cama de apoyo y televisión inteligente",
    it: "Soggiorno accogliente con divano letto aggiuntivo e smart TV",
  },
  "Cuisine entièrement équipée (lave-vaisselle, four, micro-ondes, Nespresso)": {
    en: "Fully equipped kitchen (dishwasher, oven, microwave, Nespresso)",
    de: "Voll ausgestattete Küche (Geschirrspüler, Backofen, Mikrowelle, Nespresso)",
    es: "Cocina totalmente equipada (lavavajillas, horno, microondas, Nespresso)",
    it: "Cucina completamente attrezzata (lavastoviglie, forno, microonde, Nespresso)",
  },
  "Salle de bain moderne avec douche et lave-linge": {
    en: "Modern bathroom with a shower and a washing machine",
    de: "Modernes Badezimmer mit Dusche und Waschmaschine",
    es: "Baño moderno con ducha y lavadora",
    it: "Bagno moderno con doccia e lavatrice",
  },
  "Les draps sont fournis et le lit (140 × 190 cm) est fait. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.":
    {
      en: "Bed linen is provided and the bed (140 × 190 cm) is made up. Each guest has a bath towel; a bath mat and a kitchen towel are also provided.",
      de: "Bettwäsche wird gestellt und das Bett (140 × 190 cm) ist bezogen. Jeder Gast erhält ein Handtuch; eine Badematte und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
      es: "Las sábanas están incluidas y la cama (140 × 190 cm) está hecha. Cada viajero dispone de una toalla; también se ponen a su disposición una alfombrilla de baño y un paño de cocina.",
      it: "Le lenzuola sono fornite e il letto (140 × 190 cm) è rifatto. Ogni ospite dispone di un asciugamano; sono inoltre a disposizione un tappetino da bagno e uno strofinaccio da cucina.",
    },
  "🚶 5ᵉ étage sans ascenseur": {
    en: "🚶 5th floor, no lift",
    de: "🚶 5. Stock ohne Aufzug",
    es: "🚶 5ª planta sin ascensor",
    it: "🚶 5º piano senza ascensore",
  },
  "L'appartement se situe au 5ᵉ étage et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages — mais l'effort est récompensé par le calme, l'absence de vis-à-vis et la vue sur les quais.":
    {
      en: "The apartment is on the 5th floor and the building has no lift. Bear it in mind for your luggage — but the effort is rewarded with quiet, no neighbours opposite and a view over the quays.",
      de: "Die Wohnung befindet sich im 5. Stock und das Gebäude hat keinen Aufzug. Denken Sie an Ihr Gepäck — die Mühe wird jedoch mit Ruhe, freiem Blick ohne Gegenüber und Aussicht auf die Kais belohnt.",
      es: "El apartamento está en la 5ª planta y el edificio no tiene ascensor. Téngalo en cuenta para su equipaje, pero el esfuerzo se ve recompensado con tranquilidad, sin vistas de enfrente y vistas a los muelles.",
      it: "L'appartamento si trova al 5º piano e l'edificio non ha ascensore. Tenetelo presente per i bagagli — ma lo sforzo è ricompensato dalla tranquillità, dall'assenza di dirimpettai e dalla vista sui moli.",
    },
  "🌙 Stores & occultation": {
    en: "🌙 Blinds & blackout",
    de: "🌙 Rollos & Verdunklung",
    es: "🌙 Estores y oscurecimiento",
    it: "🌙 Tende e oscuramento",
  },
  "La chambre est équipée d'un store et d'un rideau occultant pour un sommeil au calme, à l'abri de la lumière du jour. À noter : si vous utilisez le canapé-lit du salon, les fenêtres du séjour ne disposent ni de rideaux ni de volets.":
    {
      en: "The bedroom has a blind and a blackout curtain for a quiet sleep, shielded from daylight. Please note: if you use the sofa bed in the living room, the living-room windows have neither curtains nor shutters.",
      de: "Das Schlafzimmer ist mit einem Rollo und einem Verdunklungsvorhang für einen ruhigen Schlaf, geschützt vor Tageslicht, ausgestattet. Hinweis: Wenn Sie das Schlafsofa im Wohnzimmer nutzen, haben die Wohnzimmerfenster weder Vorhänge noch Fensterläden.",
      es: "El dormitorio dispone de un estor y una cortina opaca para dormir tranquilo, resguardado de la luz del día. Nota: si utiliza el sofá cama del salón, las ventanas del salón no tienen ni cortinas ni persianas.",
      it: "La camera è dotata di una tenda a rullo e di una tenda oscurante per un sonno tranquillo, al riparo dalla luce del giorno. Nota: se utilizzate il divano letto del soggiorno, le finestre del soggiorno non hanno né tende né persiane.",
    },
  "Le salon dispose d'une TV connectée. Allumez l'écran avec le bouton Power de la télécommande, puis lancez l'application souhaitée (Netflix et les autres plateformes sont accessibles avec VOS identifiants personnels). Pensez à vous déconnecter de vos comptes avant votre départ.":
    {
      en: "The living room has a smart TV. Turn on the screen with the Power button on the remote, then launch the app you want (Netflix and other platforms are accessible with YOUR own login details). Remember to log out of your accounts before you leave.",
      de: "Das Wohnzimmer verfügt über einen Smart-TV. Schalten Sie den Bildschirm mit der Power-Taste der Fernbedienung ein und starten Sie dann die gewünschte App (Netflix und andere Plattformen sind mit IHREN eigenen Zugangsdaten zugänglich). Denken Sie daran, sich vor Ihrer Abreise von Ihren Konten abzumelden.",
      es: "El salón dispone de una televisión inteligente. Encienda la pantalla con el botón Power del mando y abra la aplicación que desee (Netflix y otras plataformas son accesibles con SUS propios datos de acceso). Recuerde cerrar sesión en sus cuentas antes de marcharse.",
      it: "Il soggiorno dispone di una smart TV. Accendete lo schermo con il tasto Power del telecomando, poi avviate l'app desiderata (Netflix e le altre piattaforme sono accessibili con i VOSTRI dati personali). Ricordatevi di disconnettervi dai vostri account prima della partenza.",
    },
  "La salle de bain, moderne, dispose d'une douche. Merci de bien refermer le rideau / la paroi pour éviter les éclaboussures.":
    {
      en: "The bathroom is modern and has a shower. Please close the curtain / screen properly to avoid splashing.",
      de: "Das Badezimmer ist modern und verfügt über eine Dusche. Bitte schließen Sie den Vorhang / die Trennwand richtig, um Spritzer zu vermeiden.",
      es: "El baño es moderno y dispone de ducha. Cierre bien la cortina / mampara para evitar salpicaduras.",
      it: "Il bagno è moderno e dispone di doccia. Chiudete bene la tenda / il box per evitare schizzi.",
    },
  "La cuisine est entièrement équipée : four, micro-ondes, plaques de cuisson avec hotte, lave-vaisselle, réfrigérateur, machine à café Nespresso (à capsules), bouilloire et grille-pain, ainsi que tout le nécessaire de cuisine.":
    {
      en: "The kitchen is fully equipped: oven, microwave, hob with extractor hood, dishwasher, fridge, Nespresso coffee machine (capsules), kettle and toaster, as well as all the cookware you need.",
      de: "Die Küche ist voll ausgestattet: Backofen, Mikrowelle, Kochfeld mit Dunstabzugshaube, Geschirrspüler, Kühlschrank, Nespresso-Kaffeemaschine (Kapseln), Wasserkocher und Toaster sowie alles nötige Küchenzubehör.",
      es: "La cocina está totalmente equipada: horno, microondas, placa con campana extractora, lavavajillas, frigorífico, cafetera Nespresso (de cápsulas), hervidor y tostadora, así como todo el menaje necesario.",
      it: "La cucina è completamente attrezzata: forno, microonde, piano cottura con cappa, lavastoviglie, frigorifero, macchina del caffè Nespresso (a capsule), bollitore e tostapane, oltre a tutto il necessario per cucinare.",
    },
  "Le local à poubelles se situe en sortant de l'immeuble, sur la droite, au fond de la cour (les bacs sont à l'intérieur). Merci de trier vos déchets.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur à verre au 2 Promenade de Sévigné (~2 min à pied)":
    {
      en: "The bin room is to the right as you leave the building, at the back of the courtyard (the bins are inside). Please sort your waste.\n🟡 Yellow bin: packaging and recyclable waste\n⚫ Grey bin: household waste\n🍷 Glass: glass bank at 2 Promenade de Sévigné (~2 min walk)",
      de: "Der Müllraum befindet sich rechts, wenn Sie das Gebäude verlassen, am Ende des Innenhofs (die Tonnen stehen darin). Bitte trennen Sie Ihren Abfall.\n🟡 Gelbe Tonne: Verpackungen und recycelbarer Abfall\n⚫ Graue Tonne: Hausmüll\n🍷 Glas: Glascontainer in der Promenade de Sévigné 2 (~2 Gehminuten)",
      es: "El cuarto de basuras se encuentra a la derecha al salir del edificio, al fondo del patio (los contenedores están dentro). Separe sus residuos, por favor.\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: residuos domésticos\n🍷 Vidrio: contenedor de vidrio en 2 Promenade de Sévigné (~2 min a pie)",
      it: "Il locale rifiuti si trova sulla destra uscendo dall'edificio, in fondo al cortile (i bidoni sono all'interno). Si prega di differenziare i rifiuti.\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti domestici\n🍷 Vetro: contenitore del vetro al 2 Promenade de Sévigné (~2 min a piedi)",
    },
  "Vue sur les quais": {
    en: "Quayside view",
    de: "Blick auf die Kais",
    es: "Vista a los muelles",
    it: "Vista sui moli",
  },
  "Chambre séparée (lit double 140 × 190)": {
    en: "Separate bedroom (double bed 140 × 190)",
    de: "Separates Schlafzimmer (Doppelbett 140 × 190)",
    es: "Dormitorio independiente (cama doble 140 × 190)",
    it: "Camera separata (letto matrimoniale 140 × 190)",
  },
  "Canapé-lit d'appoint": {
    en: "Extra sofa bed",
    de: "Zusätzliches Schlafsofa",
    es: "Sofá cama de apoyo",
    it: "Divano letto aggiuntivo",
  },
  "TV connectée": {
    en: "Smart TV",
    de: "Smart-TV",
    es: "Televisión inteligente",
    it: "Smart TV",
  },
  "Cuisine équipée": {
    en: "Equipped kitchen",
    de: "Ausgestattete Küche",
    es: "Cocina equipada",
    it: "Cucina attrezzata",
  },
  "Salle de bain avec douche": {
    en: "Bathroom with shower",
    de: "Badezimmer mit Dusche",
    es: "Baño con ducha",
    it: "Bagno con doccia",
  },
  "Hotte": {
    en: "Extractor hood",
    de: "Dunstabzugshaube",
    es: "Campana extractora",
    it: "Cappa aspirante",
  },
  "Cuisine vietnamienne, à deux pas.": {
    en: "Vietnamese cuisine, just steps away.",
    de: "Vietnamesische Küche, nur wenige Schritte entfernt.",
    es: "Cocina vietnamita, a dos pasos.",
    it: "Cucina vietnamita, a due passi.",
  },
  "Café-bar de quartier.": {
    en: "Local café-bar.",
    de: "Café-Bar im Viertel.",
    es: "Café-bar de barrio.",
    it: "Caffè-bar di quartiere.",
  },
  "La pharmacie la plus proche. Pharmacie de garde : composez le 3237.": {
    en: "The nearest pharmacy. For the on-duty pharmacy, dial 3237.",
    de: "Die nächstgelegene Apotheke. Notdienst-Apotheke: wählen Sie die 3237.",
    es: "La farmacia más cercana. Farmacia de guardia: marque el 3237.",
    it: "La farmacia più vicina. Farmacia di turno: componete il 3237.",
  },
  "Boulangerie-pâtisserie : pain frais et viennoiseries.": {
    en: "Bakery-patisserie: fresh bread and pastries.",
    de: "Bäckerei-Konditorei: frisches Brot und Gebäck.",
    es: "Panadería-pastelería: pan fresco y bollería.",
    it: "Panetteria-pasticceria: pane fresco e dolci.",
  },
  "Supérette pour le dépannage du quotidien.": {
    en: "Convenience store for everyday essentials.",
    de: "Mini-Markt für den täglichen Bedarf.",
    es: "Tienda de conveniencia para el día a día.",
    it: "Minimarket per le necessità quotidiane.",
  },

  // ----------------------------------------------- Sur les quais — guide d'arrivée
  "L'accès se fait en autonomie : suivez le guide pas à pas ci-dessous, de la récupération des clés jusqu'à la porte de l'appartement.":
    {
      en: "Access is self check-in: follow the step-by-step guide below, from picking up the keys to the apartment door.",
      de: "Der Zugang erfolgt selbstständig: Folgen Sie der Schritt-für-Schritt-Anleitung unten, von der Schlüsselabholung bis zur Wohnungstür.",
      es: "El acceso es autónomo: siga la guía paso a paso de abajo, desde la recogida de las llaves hasta la puerta del apartamento.",
      it: "L'accesso è in autonomia: seguite la guida passo passo qui sotto, dal ritiro delle chiavi fino alla porta dell'appartamento.",
    },
  "⚠️ L'appartement est au 5ᵉ et dernier étage, sans ascenseur — pensez-y pour vos bagages.":
    {
      en: "⚠️ The apartment is on the 5th and top floor, with no lift — bear it in mind for your luggage.",
      de: "⚠️ Die Wohnung liegt im 5. und obersten Stock ohne Aufzug — denken Sie an Ihr Gepäck.",
      es: "⚠️ El apartamento está en la 5ª y última planta, sin ascensor: téngalo en cuenta para su equipaje.",
      it: "⚠️ L'appartamento è al 5º e ultimo piano, senza ascensore — tenetelo presente per i bagagli.",
    },
  "L'accès se fait en autonomie : la clé et le badge d'accès se trouvent dans une boîte à clés sécurisée. Composez le code indiqué ci-dessus pour l'ouvrir ; son emplacement exact vous est communiqué par message avant votre arrivée.":
    {
      en: "Access is self check-in: the key and the access badge are in a secure key box. Enter the code shown above to open it; its exact location is sent to you by message before your arrival.",
      de: "Der Zugang erfolgt selbstständig: Der Schlüssel und das Zugangs-Badge befinden sich in einem gesicherten Schlüsselkasten. Geben Sie den oben angezeigten Code ein, um ihn zu öffnen; sein genauer Standort wird Ihnen vor Ihrer Ankunft per Nachricht mitgeteilt.",
      es: "El acceso es autónomo: la llave y el mando de acceso se encuentran en una caja de seguridad. Introduzca el código indicado arriba para abrirla; su ubicación exacta se le comunica por mensaje antes de su llegada.",
      it: "L'accesso è in autonomia: la chiave e il badge di accesso si trovano in una cassetta di sicurezza. Componete il codice indicato sopra per aprirla; la sua posizione esatta vi viene comunicata via messaggio prima del vostro arrivo.",
    },
  "Une fois les clés en main, rendez-vous devant l'immeuble, à côté de l'armurerie, au 9 place du 36ème Régiment d'Infanterie. Si le portail n'est pas ouvert, passez le badge sur le bouton noir de l'interphone à droite, puis empruntez la porte piétonne qui s'ouvre automatiquement.":
    {
      en: "Once you have the keys, go to the building, next to the gun shop, at 9 place du 36ème Régiment d'Infanterie. If the gate is not open, hold the badge against the black button of the intercom on the right, then go through the pedestrian door that opens automatically.",
      de: "Sobald Sie die Schlüssel haben, gehen Sie zum Gebäude neben dem Waffengeschäft, in der Place du 36ème Régiment d'Infanterie 9. Wenn das Tor nicht offen ist, halten Sie das Badge an den schwarzen Knopf der Gegensprechanlage rechts und gehen Sie durch die Fußgängertür, die sich automatisch öffnet.",
      es: "Una vez con las llaves, diríjase al edificio, junto a la armería, en 9 place du 36ème Régiment d'Infanterie. Si la verja no está abierta, pase el mando por el botón negro del portero automático a la derecha y entre por la puerta peatonal que se abre automáticamente.",
      it: "Una volta prese le chiavi, recatevi davanti all'edificio, accanto all'armeria, al 9 place du 36ème Régiment d'Infanterie. Se il cancello non è aperto, passate il badge sul pulsante nero del citofono a destra, poi entrate dalla porta pedonale che si apre automaticamente.",
    },
  "Entrez par ici et dirigez-vous vers la droite, après les boîtes aux lettres.": {
    en: "Come in here and head to the right, past the letterboxes.",
    de: "Treten Sie hier ein und gehen Sie nach rechts, hinter den Briefkästen.",
    es: "Entre por aquí y diríjase a la derecha, pasados los buzones.",
    it: "Entrate da qui e dirigetevi a destra, dopo le cassette delle lettere.",
  },
  "Dirigez-vous ensuite vers la porte noire.": {
    en: "Then head towards the black door.",
    de: "Gehen Sie dann zur schwarzen Tür.",
    es: "Después diríjase hacia la puerta negra.",
    it: "Poi dirigetevi verso la porta nera.",
  },
  "Passez le badge devant le bouton noir de l'interphone : une fois le voyant vert, poussez la porte pour l'ouvrir.":
    {
      en: "Hold the badge in front of the black button of the intercom: once the light turns green, push the door to open it.",
      de: "Halten Sie das Badge vor den schwarzen Knopf der Gegensprechanlage: sobald das Licht grün wird, drücken Sie die Tür auf.",
      es: "Pase el mando por delante del botón negro del portero automático: cuando la luz se ponga verde, empuje la puerta para abrirla.",
      it: "Passate il badge davanti al pulsante nero del citofono: quando la spia diventa verde, spingete la porta per aprirla.",
    },
  "Une fois dans les parties communes, montez les 5 étages : c'est tout en haut !": {
    en: "Once in the common areas, climb the 5 floors: it's right at the top!",
    de: "In den Gemeinschaftsbereichen angekommen, steigen Sie die 5 Etagen hinauf: ganz oben!",
    es: "Una vez en las zonas comunes, suba las 5 plantas: ¡está arriba del todo!",
    it: "Una volta nelle parti comuni, salite i 5 piani: è proprio in cima!",
  },
  "Arrivé en haut, dirigez-vous vers la porte de droite et ouvrez-la avec la clé. Bienvenue !": {
    en: "At the top, head to the door on the right and open it with the key. Welcome!",
    de: "Oben angekommen, gehen Sie zur rechten Tür und öffnen Sie sie mit dem Schlüssel. Willkommen!",
    es: "Al llegar arriba, diríjase a la puerta de la derecha y ábrala con la llave. ¡Bienvenido!",
    it: "Arrivati in cima, dirigetevi verso la porta a destra e apritela con la chiave. Benvenuti!",
  },
  "À votre départ, merci de remettre la clé et le badge dans la boîte à clés et de bien la refermer.":
    {
      en: "On departure, please put the key and the badge back in the key box and close it securely.",
      de: "Legen Sie den Schlüssel und das Badge bei Ihrer Abreise bitte zurück in den Schlüsselkasten und schließen Sie ihn gut.",
      es: "A su salida, vuelva a colocar la llave y el mando en la caja y ciérrela bien.",
      it: "Alla partenza, riponete la chiave e il badge nella cassetta e richiudetela bene.",
    },
  "Fermer l'appartement à clé, puis remettre la clé et le badge dans la boîte à clés":
    {
      en: "Lock the apartment, then put the key and the badge back in the key box",
      de: "Die Wohnung abschließen und dann den Schlüssel und das Badge zurück in den Schlüsselkasten legen",
      es: "Cierre el apartamento con llave y luego vuelva a colocar la llave y el mando en la caja",
      it: "Chiudete a chiave l'appartamento, poi riponete la chiave e il badge nella cassetta",
    },
  "🍞 Four": {
    en: "🍞 Oven",
    de: "🍞 Backofen",
    es: "🍞 Horno",
    it: "🍞 Forno",
  },
  "🧼 Lave-vaisselle": {
    en: "🧼 Dishwasher",
    de: "🧼 Geschirrspüler",
    es: "🧼 Lavavajillas",
    it: "🧼 Lavastoviglie",
  },
  "Suivez la courte vidéo ci-dessous pour allumer le four et régler la température.": {
    en: "Watch the short video below to turn on the oven and set the temperature.",
    de: "Sehen Sie sich das kurze Video unten an, um den Backofen einzuschalten und die Temperatur einzustellen.",
    es: "Vea el breve vídeo de abajo para encender el horno y ajustar la temperatura.",
    it: "Guardate il breve video qui sotto per accendere il forno e regolare la temperatura.",
  },
  "Suivez la courte vidéo ci-dessous pour charger et mettre en route le lave-vaisselle.": {
    en: "Watch the short video below to load and start the dishwasher.",
    de: "Sehen Sie sich das kurze Video unten an, um den Geschirrspüler zu beladen und zu starten.",
    es: "Vea el breve vídeo de abajo para cargar y poner en marcha el lavavajillas.",
    it: "Guardate il breve video qui sotto per caricare e avviare la lavastoviglie.",
  },
  "L'immeuble se trouve au 9 place du 36ème Régiment d'Infanterie, juste à côté de l'armurerie.":
    {
      en: "The building is at 9 place du 36ème Régiment d'Infanterie, right next to the gun shop.",
      de: "Das Gebäude befindet sich in der Place du 36ème Régiment d'Infanterie 9, direkt neben dem Waffengeschäft.",
      es: "El edificio está en 9 place du 36ème Régiment d'Infanterie, justo al lado de la armería.",
      it: "L'edificio si trova al 9 place du 36ème Régiment d'Infanterie, proprio accanto all'armeria.",
    },
  "La boîte à clés se trouve juste sous l'interphone, tout en bas des autres boîtes à clés. Ouvrez-la avec le code que nous vous communiquons par message, puis prenez la clé et le badge.":
    {
      en: "The key box is just below the intercom, at the very bottom of the other key boxes. Open it with the code we send you by message, then take the key and the badge.",
      de: "Der Schlüsselkasten befindet sich direkt unter der Gegensprechanlage, ganz unten bei den anderen Schlüsselkästen. Öffnen Sie ihn mit dem Code, den wir Ihnen per Nachricht senden, und nehmen Sie dann den Schlüssel und das Badge.",
      es: "La caja de llaves está justo debajo del portero automático, en la parte más baja de las demás cajas de llaves. Ábrala con el código que le enviamos por mensaje y coja la llave y el mando.",
      it: "La cassetta delle chiavi si trova proprio sotto il citofono, in fondo alle altre cassette. Apritela con il codice che vi inviamo via messaggio, poi prendete la chiave e il badge.",
    },
  "Badgez sur l'interphone : la porte piétonne s'ouvre (et non le portail).": {
    en: "Tap the badge on the intercom: the pedestrian door opens (not the gate).",
    de: "Halten Sie das Badge an die Gegensprechanlage: Die Fußgängertür öffnet sich (nicht das Tor).",
    es: "Pase el mando por el portero automático: se abre la puerta peatonal (no la verja).",
    it: "Passate il badge sul citofono: si apre la porta pedonale (non il cancello).",
  },
  "Traversez la cour jusqu'à la porte grise, puis badgez à nouveau pour l'ouvrir.": {
    en: "Cross the courtyard to the grey door, then tap the badge again to open it.",
    de: "Überqueren Sie den Innenhof bis zur grauen Tür und halten Sie das Badge erneut daran, um sie zu öffnen.",
    es: "Cruce el patio hasta la puerta gris y vuelva a pasar el mando para abrirla.",
    it: "Attraversate il cortile fino alla porta grigia, poi passate di nuovo il badge per aprirla.",
  },
  "Montez jusqu'au 5ᵉ et dernier étage (sans ascenseur).": {
    en: "Go up to the 5th and top floor (no lift).",
    de: "Gehen Sie hinauf in den 5. und obersten Stock (ohne Aufzug).",
    es: "Suba hasta la 5ª y última planta (sin ascensor).",
    it: "Salite fino al 5º e ultimo piano (senza ascensore).",
  },
  "Au 5ᵉ étage, c'est la porte à droite (celle avec le paillasson).": {
    en: "On the 5th floor, it's the door on the right (the one with the doormat).",
    de: "Im 5. Stock ist es die Tür rechts (die mit der Fußmatte).",
    es: "En la 5ª planta, es la puerta de la derecha (la del felpudo).",
    it: "Al 5º piano è la porta a destra (quella con lo zerbino).",
  },
  "Ouvrez avec la clé. Bienvenue !": {
    en: "Open it with the key. Welcome!",
    de: "Öffnen Sie sie mit dem Schlüssel. Willkommen!",
    es: "Ábrala con la llave. ¡Bienvenido!",
    it: "Apritela con la chiave. Benvenuti!",
  },
  "En partant, remettre le badge d'accès à l'immeuble dans la petite trappe métallique à l'extérieur (à droite de la porte, comme à votre arrivée)":
    {
      en: "When you leave, put the building access badge back in the small metal hatch outside (to the right of the door, as when you arrived)",
      de: "Legen Sie beim Verlassen den Gebäude-Zugangsbadge wieder in die kleine Metallklappe draußen (rechts neben der Tür, wie bei Ihrer Ankunft)",
      es: "Al marcharse, vuelva a dejar el mando de acceso al edificio en la pequeña trampilla metálica del exterior (a la derecha de la puerta, como a su llegada)",
      it: "Alla partenza, rimettete il badge di accesso al palazzo nel piccolo sportello metallico all'esterno (a destra della porta, come al vostro arrivo)",
    },
  "Dirigez-vous vers le poteau rouge à gauche du portail : la boîte à clé s'y trouve. Composez le code, appuyez simultanément sur les boutons latéraux afin d'ouvrir la boîte, récupérez les clés, puis refermez la boîte et brouillez le code.":
    {
      en: "Head to the red post to the left of the gate: the key box is there. Enter the code, press the two side buttons at the same time to open the box, take the keys, then close the box and scramble the code.",
      de: "Gehen Sie zum roten Pfosten links vom Tor: dort befindet sich der Schlüsselkasten. Geben Sie den Code ein, drücken Sie gleichzeitig die seitlichen Tasten, um den Kasten zu öffnen, nehmen Sie die Schlüssel, schließen Sie dann den Kasten und verstellen Sie den Code.",
      es: "Diríjase al poste rojo a la izquierda de la verja: allí está la caja de llaves. Introduzca el código, pulse a la vez los botones laterales para abrir la caja, coja las llaves, luego cierre la caja y descomponga el código.",
      it: "Dirigetevi verso il pilastro rosso a sinistra del cancello: lì si trova la cassetta delle chiavi. Componete il codice, premete contemporaneamente i pulsanti laterali per aprire la cassetta, prendete le chiavi, poi richiudete la cassetta e azzerate il codice.",
    },
  "• Draps fournis et lits faits\n• Une serviette de toilette par personne\n• Lit parapluie à disposition\n• Lave-linge, fer à repasser et étendoir":
    {
      en: "• Sheets provided and beds made\n• One towel per guest\n• Travel cot available\n• Washing machine, iron and drying rack",
      de: "• Bettwäsche gestellt und Betten gemacht\n• Ein Handtuch pro Gast\n• Reisebett vorhanden\n• Waschmaschine, Bügeleisen und Wäscheständer",
      es: "• Sábanas incluidas y camas hechas\n• Una toalla por huésped\n• Cuna de viaje disponible\n• Lavadora, plancha y tendedero",
      it: "• Lenzuola fornite e letti pronti\n• Un asciugamano per ospite\n• Lettino da viaggio disponibile\n• Lavatrice, ferro da stiro e stendino",
    },
  "Le parasol déporté du jardin s'ouvre et se ferme en quelques gestes. Voici la marche à suivre en vidéo :":
    {
      en: "The garden's cantilever parasol opens and closes in a few steps. Here's how, in video:",
      de: "Der Ampelschirm im Garten lässt sich mit wenigen Handgriffen öffnen und schließen. So geht's, im Video:",
      es: "La sombrilla excéntrica del jardín se abre y se cierra en unos pocos gestos. Aquí tiene el procedimiento en vídeo:",
      it: "L'ombrellone decentrato del giardino si apre e si chiude in pochi gesti. Ecco come fare, in video:",
    },
  "Capacité maximale : 4 voyageurs. Logement non-fumeur (ni vapotage). Animaux non acceptés. Aucune fête ni événement autorisé. Photographie commerciale et tournages autorisés. Merci de respecter le calme entre 23h00 et 08h00, dans cette rue paisible.":
    {
      en: "Maximum capacity: 4 guests. Non-smoking property (no vaping). No pets. No parties or events allowed. Commercial photography and filming allowed. Please keep quiet between 11 p.m. and 8 a.m., on this peaceful street.",
      de: "Maximale Belegung: 4 Gäste. Nichtraucher-Unterkunft (auch kein Dampfen). Keine Haustiere. Keine Partys oder Veranstaltungen erlaubt. Werbefotografie und Dreharbeiten erlaubt. Bitte halten Sie zwischen 23:00 und 08:00 Uhr Ruhe, in dieser friedlichen Straße.",
      es: "Capacidad máxima: 4 huéspedes. Alojamiento para no fumadores (tampoco vapear). No se admiten animales. No se permiten fiestas ni eventos. Se permite la fotografía comercial y los rodajes. Por favor, respete el silencio entre las 23:00 y las 08:00, en esta calle tranquila.",
      it: "Capacità massima: 4 ospiti. Alloggio per non fumatori (né svapo). Animali non ammessi. Nessuna festa o evento consentito. Fotografia commerciale e riprese consentite. Vi preghiamo di rispettare il silenzio tra le 23:00 e le 08:00, in questa via tranquilla.",
    },
  "Les animaux ne sont pas acceptés dans ce logement.":
    {
      en: "Pets are not allowed in this property.",
      de: "Haustiere sind in dieser Unterkunft nicht erlaubt.",
      es: "No se admiten animales en este alojamiento.",
      it: "Gli animali non sono ammessi in questo alloggio.",
    },
  "Avenue Aristide Briand, le bureau de tabac et presse le plus proche du logement : cigarettes, journaux, jeux et dépannage.":
    {
      en: "On Avenue Aristide Briand, the nearest tobacconist and newsagent to the property: cigarettes, newspapers, lottery and essentials.",
      de: "In der Avenue Aristide Briand, der nächste Tabak- und Zeitungsladen zur Unterkunft: Zigaretten, Zeitungen, Lotto und Notwendiges.",
      es: "En la Avenue Aristide Briand, el estanco y quiosco de prensa más cercano al alojamiento: tabaco, periódicos, lotería y artículos de primera necesidad.",
      it: "In Avenue Aristide Briand, la tabaccheria ed edicola più vicina all'alloggio: sigarette, giornali, lotterie e prima necessità.",
    },
  "En allant vers le centre-ville, rue Couraye : tabac, presse et confiserie.":
    {
      en: "Towards the town centre, on Rue Couraye: tobacco, newspapers and sweets.",
      de: "Richtung Stadtzentrum, in der Rue Couraye: Tabak, Zeitungen und Süßwaren.",
      es: "Hacia el centro, en la rue Couraye: tabaco, prensa y golosinas.",
      it: "Verso il centro, in rue Couraye: tabacchi, giornali e dolciumi.",
    },
  "Appartement en rez-de-chaussée surélevé : quelques marches extérieures à monter":
    {
      en: "Apartment on a raised ground floor: a few outdoor steps to climb",
      de: "Wohnung im Hochparterre: einige Stufen im Freien hinaufzusteigen",
      es: "Apartamento en planta baja elevada: unos escalones exteriores que subir",
      it: "Appartamento al piano rialzato: qualche gradino esterno da salire",
    },
  "Le code de la boîte à clé vous est envoyé par message une fois le logement prêt":
    {
      en: "The key box code is sent to you by message once the property is ready",
      de: "Der Code des Schlüsselkastens wird Ihnen per Nachricht geschickt, sobald die Unterkunft bereit ist",
      es: "El código de la caja de llaves se le envía por mensaje una vez que el alojamiento está listo",
      it: "Il codice della cassetta delle chiavi vi viene inviato tramite messaggio una volta che l'alloggio è pronto",
    },
  "Suivez la vidéo d'accès ci-dessous pour trouver le logement":
    {
      en: "Follow the access video below to find the property",
      de: "Folgen Sie dem Zugangsvideo unten, um die Unterkunft zu finden",
      es: "Siga el vídeo de acceso a continuación para encontrar el alojamiento",
      it: "Seguite il video di accesso qui sotto per trovare l'alloggio",
    },
  "Le code de la boîte à clé vous est envoyé par message une fois le logement prêt. La vidéo ci-dessous vous montre le chemin jusqu'au logement.":
    {
      en: "The key box code is sent to you by message once the property is ready. The video below shows you the way to the property.",
      de: "Der Code des Schlüsselkastens wird Ihnen per Nachricht geschickt, sobald die Unterkunft bereit ist. Das Video unten zeigt Ihnen den Weg zur Unterkunft.",
      es: "El código de la caja de llaves se le envía por mensaje una vez que el alojamiento está listo. El vídeo a continuación le muestra el camino hasta el alojamiento.",
      it: "Il codice della cassetta delle chiavi vi viene inviato tramite messaggio una volta che l'alloggio è pronto. Il video qui sotto vi mostra il percorso fino all'alloggio.",
    },
  "Repérez la boîte à clé sécurisée près de l'entrée, composez le code et récupérez les clés. Pensez à refermer la boîte et à brouiller le code.":
    {
      en: "Find the secure key box near the entrance, enter the code and take the keys. Remember to close the box and scramble the code.",
      de: "Suchen Sie den gesicherten Schlüsselkasten am Eingang, geben Sie den Code ein und nehmen Sie die Schlüssel. Denken Sie daran, den Kasten zu schließen und den Code zu verstellen.",
      es: "Localice la caja de llaves segura junto a la entrada, introduzca el código y coja las llaves. Recuerde cerrar la caja y descomponer el código.",
      it: "Individuate la cassetta di sicurezza vicino all'ingresso, componete il codice e prendete le chiavi. Ricordatevi di richiudere la cassetta e di azzerare il codice.",
    },
  "Montez les quelques marches extérieures : l'appartement se situe en rez-de-chaussée surélevé. Bienvenue chez vous !":
    {
      en: "Climb the few outdoor steps: the apartment is on a raised ground floor. Welcome home!",
      de: "Steigen Sie die wenigen Stufen im Freien hinauf: die Wohnung liegt im Hochparterre. Willkommen zu Hause!",
      es: "Suba los pocos escalones exteriores: el apartamento está en una planta baja elevada. ¡Bienvenido a casa!",
      it: "Salite i pochi gradini esterni: l'appartamento si trova al piano rialzato. Benvenuti a casa!",
    },
  "Aspirateur dans le placard sous pente, à côté de la commode":
    {
      en: "Vacuum cleaner in the sloped-ceiling cupboard, next to the chest of drawers",
      de: "Staubsauger im Schrank unter der Dachschräge, neben der Kommode",
      es: "Aspiradora en el armario bajo el techo inclinado, junto a la cómoda",
      it: "Aspirapolvere nell'armadio sottotetto, accanto al cassettone",
    },
  "Draps du canapé-lit dans le coffre en osier à l'entrée (une vidéo explique comment le déplier)":
    {
      en: "Sofa-bed sheets in the wicker chest by the entrance (a video shows how to unfold it)",
      de: "Bettwäsche für das Schlafsofa in der Korbtruhe am Eingang (ein Video zeigt, wie man es ausklappt)",
      es: "Sábanas del sofá cama en el baúl de mimbre de la entrada (un vídeo explica cómo desplegarlo)",
      it: "Lenzuola del divano letto nella cesta di vimini all'ingresso (un video spiega come aprirlo)",
    },
  "Aspirateur dans le placard sous pente, à l'étage dans la chambre":
    {
      en: "Vacuum cleaner in the sloped-ceiling cupboard, upstairs in the bedroom",
      de: "Staubsauger im Schrank unter der Dachschräge, oben im Schlafzimmer",
      es: "Aspiradora en el armario bajo el techo inclinado, arriba en el dormitorio",
      it: "Aspirapolvere nell'armadio sottotetto, al piano di sopra in camera",
    },
  "Chauffage : merci de le baisser ou de l'éteindre à votre départ":
    {
      en: "Heating: please turn it down or off when you leave",
      de: "Heizung: Bitte drehen Sie sie bei Ihrer Abreise herunter oder aus",
      es: "Calefacción: por favor, bájela o apáguela al marcharse",
      it: "Riscaldamento: vi preghiamo di abbassarlo o spegnerlo alla partenza",
    },
  "Merci de respecter le calme, en particulier entre 22h00 et 08h00, par égard pour le voisinage.":
    {
      en: "Please keep noise down, especially between 10 p.m. and 8 a.m., out of consideration for the neighbours.",
      de: "Bitte halten Sie Ruhe, besonders zwischen 22:00 und 08:00 Uhr, aus Rücksicht auf die Nachbarn.",
      es: "Por favor, respete el silencio, especialmente entre las 22:00 y las 08:00, por consideración al vecindario.",
      it: "Vi preghiamo di rispettare il silenzio, in particolare tra le 22:00 e le 08:00, per riguardo verso il vicinato.",
    },
  "Logement non-fumeur : merci de sortir à l'extérieur pour fumer ou vapoter. Les animaux de compagnie sont acceptés (1 animal maximum) sous réserve du supplément correspondant. Aucune fête ni événement autorisé. Merci de respecter le calme et le voisinage, dans ce quartier résidentiel.":
    {
      en: "Non-smoking property: please go outside to smoke or vape. Pets are allowed (1 pet maximum), subject to the corresponding surcharge. No parties or events allowed. Please respect the quiet and the neighbours, in this residential area.",
      de: "Nichtraucher-Unterkunft: Bitte gehen Sie zum Rauchen oder Dampfen nach draußen. Haustiere sind erlaubt (maximal 1 Tier), vorbehaltlich des entsprechenden Aufpreises. Keine Partys oder Veranstaltungen erlaubt. Bitte achten Sie auf Ruhe und die Nachbarn in diesem Wohnviertel.",
      es: "Alojamiento para no fumadores: por favor, salga al exterior para fumar o vapear. Se admiten animales (máximo 1), sujeto al suplemento correspondiente. No se permiten fiestas ni eventos. Por favor, respete la tranquilidad y al vecindario, en esta zona residencial.",
      it: "Alloggio per non fumatori: vi preghiamo di uscire all'esterno per fumare o svapare. Gli animali domestici sono ammessi (massimo 1), previo supplemento corrispondente. Nessuna festa o evento consentito. Vi preghiamo di rispettare la tranquillità e il vicinato, in questo quartiere residenziale.",
    },
  "Les poubelles sont à déposer dans la rue, dans les bacs situés à côté du restaurant « Bobun ».":
    {
      en: "Bins should be taken out to the street, in the containers next to the “Bobun” restaurant.",
      de: "Der Müll ist auf die Straße zu bringen, in die Behälter neben dem Restaurant „Bobun“.",
      es: "La basura debe dejarse en la calle, en los contenedores situados junto al restaurante «Bobun».",
      it: "I rifiuti vanno depositati in strada, nei bidoni situati accanto al ristorante «Bobun».",
    },
  "Déposer les poubelles dans les bacs de la rue (à côté du « Bobun »)":
    {
      en: "Take the bins out to the street containers (next to “Bobun”)",
      de: "Den Müll in die Behälter auf der Straße bringen (neben „Bobun“)",
      es: "Dejar la basura en los contenedores de la calle (junto a «Bobun»)",
      it: "Depositare i rifiuti nei bidoni della strada (accanto al «Bobun»)",
    },
  "Éteindre les lumières et bien fermer les fenêtres":
    {
      en: "Turn off the lights and close the windows properly",
      de: "Das Licht ausschalten und die Fenster gut schließen",
      es: "Apagar las luces y cerrar bien las ventanas",
      it: "Spegnere le luci e chiudere bene le finestre",
    },
  "Verrouiller la porte et remettre les clés dans la boîte à clé":
    {
      en: "Lock the door and put the keys back in the key box",
      de: "Die Tür abschließen und die Schlüssel wieder in den Schlüsselkasten legen",
      es: "Cerrar la puerta con llave y devolver las llaves a la caja",
      it: "Chiudere a chiave la porta e rimettere le chiavi nella cassetta",
    },
  "Vous êtes au cœur du Vaugueux, le quartier historique et gourmand de Caen, entre le château et le port de plaisance. Tout le centre-ville se fait à pied.":
    {
      en: "You're in the heart of Le Vaugueux, Caen's historic foodie district, between the castle and the marina. The whole town centre is walkable.",
      de: "Sie wohnen im Herzen von Le Vaugueux, dem historischen Feinschmeckerviertel von Caen, zwischen der Burg und dem Yachthafen. Die gesamte Innenstadt ist zu Fuß erreichbar.",
      es: "Está en el corazón del Vaugueux, el barrio histórico y gastronómico de Caen, entre el castillo y el puerto deportivo. Todo el centro se recorre a pie.",
      it: "Vi trovate nel cuore del Vaugueux, il quartiere storico e goloso di Caen, tra il castello e il porto turistico. Tutto il centro è raggiungibile a piedi.",
    },
  "Présentez-vous au 144 rue Saint-Jean, devant cette porte.":
    {
      en: "Go to 144 Rue Saint-Jean, in front of this door.",
      de: "Gehen Sie zur Rue Saint-Jean 144, vor diese Tür.",
      es: "Diríjase al 144 de la rue Saint-Jean, frente a esta puerta.",
      it: "Recatevi al 144 di rue Saint-Jean, davanti a questa porta.",
    },
  "Le badge d'accès à l'immeuble se trouve dans la petite trappe métallique, à droite de la porte (sous la fenêtre). Ouvrez cette trappe.":
    {
      en: "The building access badge is in the small metal hatch, to the right of the door (under the window). Open this hatch.",
      de: "Der Gebäude-Zugangsbadge befindet sich in der kleinen Metallklappe rechts neben der Tür (unter dem Fenster). Öffnen Sie diese Klappe.",
      es: "El mando de acceso al edificio está en la pequeña trampilla metálica, a la derecha de la puerta (bajo la ventana). Abra esta trampilla.",
      it: "Il badge di accesso al palazzo si trova nel piccolo sportello metallico, a destra della porta (sotto la finestra). Aprite questo sportello.",
    },
  "Le badge est caché à l'intérieur, derrière le boîtier du compteur. Récupérez-le.":
    {
      en: "The badge is hidden inside, behind the meter box. Take it out.",
      de: "Der Badge ist innen versteckt, hinter dem Zählerkasten. Nehmen Sie ihn heraus.",
      es: "El mando está escondido dentro, detrás de la caja del contador. Cójalo.",
      it: "Il badge è nascosto all'interno, dietro la scatola del contatore. Prendetelo.",
    },
  "Badgez sur l'interphone pour ouvrir la porte de l'immeuble.":
    {
      en: "Tap the badge on the intercom to open the building door.",
      de: "Halten Sie den Badge an die Gegensprechanlage, um die Gebäudetür zu öffnen.",
      es: "Pase el mando por el portero automático para abrir la puerta del edificio.",
      it: "Avvicinate il badge al citofono per aprire la porta del palazzo.",
    },
  "Empruntez les escaliers et montez jusqu'au 3ᵉ étage.":
    {
      en: "Take the stairs and go up to the 3rd floor.",
      de: "Nehmen Sie die Treppe und gehen Sie hinauf in den 3. Stock.",
      es: "Suba por las escaleras hasta la 3.ª planta.",
      it: "Prendete le scale e salite fino al 3º piano.",
    },
  "Au 3ᵉ étage, allez à droite : c'est la porte rouge, numéro 6.":
    {
      en: "On the 3rd floor, go right: it's the red door, number 6.",
      de: "Im 3. Stock gehen Sie nach rechts: es ist die rote Tür, Nummer 6.",
      es: "En la 3.ª planta, gire a la derecha: es la puerta roja, número 6.",
      it: "Al 3º piano, andate a destra: è la porta rossa, numero 6.",
    },
  "Récupérez la clé de l'appartement dans la boîte à code (code indiqué ci-dessus).":
    {
      en: "Take the apartment key from the code box (code shown above).",
      de: "Nehmen Sie den Wohnungsschlüssel aus dem Codekasten (Code oben angegeben).",
      es: "Coja la llave del apartamento de la caja con código (código indicado arriba).",
      it: "Prendete la chiave dell'appartamento dalla cassetta a codice (codice indicato sopra).",
    },
  "Ouvrez la porte avec la clé : faites un à deux tours, puis un quart de tour pour déverrouiller. ⚠️ Ne laissez jamais les clés à l'intérieur : la porte se verrouille automatiquement dès qu'elle se referme (elle claque).":
    {
      en: "Open the door with the key: turn once or twice, then a quarter-turn to unlock. ⚠️ Never leave the keys inside: the door locks automatically as soon as it closes (it slams shut).",
      de: "Öffnen Sie die Tür mit dem Schlüssel: ein bis zwei Umdrehungen, dann eine Vierteldrehung zum Entriegeln. ⚠️ Lassen Sie die Schlüssel niemals drinnen: die Tür verriegelt automatisch, sobald sie zufällt (sie schnappt zu).",
      es: "Abra la puerta con la llave: dé una o dos vueltas, luego un cuarto de vuelta para desbloquear. ⚠️ No deje nunca las llaves dentro: la puerta se cierra con llave automáticamente al cerrarse (se cierra de golpe).",
      it: "Aprite la porta con la chiave: fate uno o due giri, poi un quarto di giro per sbloccare. ⚠️ Non lasciate mai le chiavi all'interno: la porta si blocca automaticamente non appena si chiude (sbatte).",
    },
  "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites au sein de l'appartement. L'appartement se trouve au 5ᵉ étage sans ascenseur. Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, dans le logement comme dans les parties communes (couloirs, escaliers).":
    {
      en: "Non-smoking property: please go down to the street to smoke or vape. Parties and gatherings are strictly forbidden inside the apartment. The apartment is on the 5th floor with no lift. Please respect the neighbours' peace and quiet by keeping noise down, both inside the apartment and in the common areas (hallways, stairs).",
      de: "Nichtraucher-Unterkunft: Bitte gehen Sie zum Rauchen oder Dampfen auf die Straße. Partys und Feiern sind in der Wohnung strengstens untersagt. Die Wohnung liegt im 5. Stock ohne Aufzug. Bitte achten Sie auf die Ruhe der Nachbarn und vermeiden Sie Lärm, sowohl in der Wohnung als auch in den Gemeinschaftsbereichen (Flure, Treppen).",
      es: "Alojamiento para no fumadores: por favor, baje a la calle para fumar o vapear. Las fiestas y reuniones están estrictamente prohibidas en el apartamento. El apartamento está en la 5.ª planta sin ascensor. Por favor, respete la tranquilidad del vecindario limitando el ruido, tanto en el apartamento como en las zonas comunes (pasillos, escaleras).",
      it: "Alloggio per non fumatori: vi preghiamo di scendere in strada per fumare o svapare. Le feste e i ricevimenti sono severamente vietati nell'appartamento. L'appartamento si trova al 5º piano senza ascensore. Vi preghiamo di rispettare la tranquillità del vicinato limitando i rumori, sia nell'appartamento sia nelle parti comuni (corridoi, scale).",
    },
  "Les animaux de compagnie ne sont pas acceptés dans ce logement.":
    {
      en: "Pets are not allowed in this property.",
      de: "Haustiere sind in dieser Unterkunft nicht erlaubt.",
      es: "No se admiten mascotas en este alojamiento.",
      it: "Gli animali domestici non sono ammessi in questo alloggio.",
    },
  "Maison indépendante dans une rue piétonne, en plein centre historique":
    {
      en: "Detached house on a pedestrian street, right in the historic centre",
      de: "Freistehendes Haus in einer Fußgängerzone, mitten im historischen Zentrum",
      es: "Casa independiente en una calle peatonal, en pleno centro histórico",
      it: "Casa indipendente in una via pedonale, in pieno centro storico",
    },
  "Arrivée autonome : clés dans une boîte à clé sécurisée à code, près de l'entrée":
    {
      en: "Self check-in: keys in a secure code lockbox, near the entrance",
      de: "Selbstständige Anreise: Schlüssel in einem gesicherten Code-Schlüsselkasten am Eingang",
      es: "Llegada autónoma: llaves en una caja de seguridad con código, junto a la entrada",
      it: "Arrivo autonomo: chiavi in una cassetta di sicurezza con codice, vicino all'ingresso",
    },
  "Vous souhaitez arriver avant 17h ? Une arrivée anticipée est possible sur demande (supplément), selon disponibilité. Réservez-la ci-dessous, puis indiquez-moi votre heure d'arrivée une fois le paiement effectué.":
    {
      en: "Would you like to arrive before 5 p.m.? An early check-in is possible on request (surcharge), subject to availability. Book it below, then let me know your arrival time once payment is made.",
      de: "Möchten Sie vor 17 Uhr anreisen? Eine frühe Anreise ist auf Anfrage möglich (Aufpreis), je nach Verfügbarkeit. Buchen Sie sie unten und teilen Sie mir nach der Zahlung Ihre Ankunftszeit mit.",
      es: "¿Desea llegar antes de las 17 h? Es posible una entrada anticipada bajo petición (suplemento), según disponibilidad. Resérvela a continuación e indíqueme su hora de llegada una vez realizado el pago.",
      it: "Desiderate arrivare prima delle 17? Un arrivo anticipato è possibile su richiesta (supplemento), secondo disponibilità. Prenotatelo qui sotto, poi comunicatemi l'orario di arrivo una volta effettuato il pagamento.",
    },
  "Rue piétonne : pas de stationnement devant la maison.\nStationnement possible Place Pierre Bouchard, Rue de Gémare et Rue des Teinturiers, à quelques minutes à pied.\nPlusieurs parkings souterrains dans le centre (Château, Les Rives de l'Orne, Paul Doumer et République).":
    {
      en: "Pedestrian street: no parking in front of the house.\nParking is possible on Place Pierre Bouchard, Rue de Gémare and Rue des Teinturiers, a few minutes' walk away.\nSeveral underground car parks in the centre (Château, Les Rives de l'Orne, Paul Doumer and République).",
      de: "Fußgängerzone: kein Parken vor dem Haus.\nParken möglich am Place Pierre Bouchard, in der Rue de Gémare und der Rue des Teinturiers, wenige Gehminuten entfernt.\nMehrere Tiefgaragen im Zentrum (Château, Les Rives de l'Orne, Paul Doumer und République).",
      es: "Calle peatonal: no hay aparcamiento delante de la casa.\nSe puede aparcar en Place Pierre Bouchard, Rue de Gémare y Rue des Teinturiers, a unos minutos a pie.\nVarios aparcamientos subterráneos en el centro (Château, Les Rives de l'Orne, Paul Doumer y République).",
      it: "Via pedonale: nessun parcheggio davanti alla casa.\nParcheggio possibile in Place Pierre Bouchard, Rue de Gémare e Rue des Teinturiers, a pochi minuti a piedi.\nDiversi parcheggi sotterranei in centro (Château, Les Rives de l'Orne, Paul Doumer e République).",
    },
  "Salon avec TV et accès à la terrasse":
    {
      en: "Living room with TV and access to the terrace",
      de: "Wohnzimmer mit Fernseher und Zugang zur Terrasse",
      es: "Salón con TV y acceso a la terraza",
      it: "Soggiorno con TV e accesso alla terrazza",
    },
  "Douche sous les toits, accès par une échelle de meunier":
    {
      en: "Shower under the eaves, reached by a steep ladder-stair",
      de: "Dusche unter dem Dach, erreichbar über eine steile Leitertreppe",
      es: "Ducha bajo el tejado, con acceso por una escalera de molinero",
      it: "Doccia sottotetto, accessibile tramite una scala a pioli ripida",
    },
  "⚠️ La porte se verrouille en se refermant : elle ne peut plus s'ouvrir de l'extérieur sans les clés. Pensez à toujours les prendre avec vous en sortant du logement.":
    {
      en: "⚠️ The door locks when it closes: it can no longer be opened from outside without the keys. Always remember to take them with you when leaving.",
      de: "⚠️ Die Tür verriegelt sich beim Zufallen: Sie lässt sich von außen ohne Schlüssel nicht mehr öffnen. Denken Sie daran, sie beim Verlassen immer mitzunehmen.",
      es: "⚠️ La puerta se bloquea al cerrarse: ya no puede abrirse desde fuera sin las llaves. Recuerde llevarlas siempre consigo al salir.",
      it: "⚠️ La porta si blocca chiudendosi: non può più essere aperta dall'esterno senza le chiavi. Ricordatevi di portarle sempre con voi quando uscite.",
    },
  "La douche du 2e étage, sous les toits, est accessible par une échelle de meunier":
    {
      en: "The second-floor shower, under the eaves, is reached by a steep ladder-stair",
      de: "Die Dusche im zweiten Stock, unter dem Dach, ist über eine steile Leitertreppe erreichbar",
      es: "La ducha de la 2.ª planta, bajo el tejado, tiene acceso por una escalera de molinero",
      it: "La doccia al secondo piano, sottotetto, è accessibile tramite una scala a pioli ripida",
    },
  "Capacité maximale : 4 voyageurs. Logement non-fumeur : merci de sortir sur la terrasse pour fumer ou vapoter. Les animaux de compagnie sont acceptés (1 animal maximum) sous réserve du supplément correspondant. Aucune fête ni événement autorisé. Merci de respecter le calme et le voisinage, dans ce quartier résidentiel et cette rue piétonne.":
    {
      en: "Maximum capacity: 4 guests. Non-smoking property: please step out onto the terrace to smoke or vape. Pets are allowed (1 pet maximum), subject to the corresponding surcharge. No parties or events allowed. Please respect the quiet and the neighbours, in this residential area and pedestrian street.",
      de: "Maximale Belegung: 4 Gäste. Nichtraucher-Unterkunft: Bitte gehen Sie zum Rauchen oder Dampfen auf die Terrasse. Haustiere sind erlaubt (maximal 1 Tier), vorbehaltlich des entsprechenden Aufpreises. Keine Partys oder Veranstaltungen erlaubt. Bitte achten Sie auf Ruhe und die Nachbarn, in diesem Wohnviertel und dieser Fußgängerzone.",
      es: "Capacidad máxima: 4 huéspedes. Alojamiento para no fumadores: por favor, salga a la terraza para fumar o vapear. Se admiten animales (máximo 1), sujeto al suplemento correspondiente. No se permiten fiestas ni eventos. Por favor, respete la tranquilidad y al vecindario, en esta zona residencial y calle peatonal.",
      it: "Capacità massima: 4 ospiti. Alloggio per non fumatori: vi preghiamo di uscire in terrazza per fumare o svapare. Gli animali domestici sono ammessi (massimo 1), previo supplemento corrispondente. Nessuna festa o evento consentito. Vi preghiamo di rispettare la tranquillità e il vicinato, in questo quartiere residenziale e in questa via pedonale.",
    },
  "Les poubelles sont à déposer dans la rue, tous les soirs.":
    {
      en: "Bins should be taken out to the street every evening.",
      de: "Der Müll ist jeden Abend auf die Straße zu bringen.",
      es: "La basura debe sacarse a la calle todas las noches.",
      it: "I rifiuti vanno depositati in strada ogni sera.",
    },
  "Éteindre les lumières et bien fermer les fenêtres et la porte de la terrasse":
    {
      en: "Turn off the lights and close the windows and terrace door properly",
      de: "Das Licht ausschalten und die Fenster sowie die Terrassentür gut schließen",
      es: "Apagar las luces y cerrar bien las ventanas y la puerta de la terraza",
      it: "Spegnere le luci e chiudere bene le finestre e la porta della terrazza",
    },
  "Verrouiller la porte d'entrée et remettre les clés dans la boîte à clé":
    {
      en: "Lock the front door and put the keys back in the key box",
      de: "Die Eingangstür abschließen und die Schlüssel wieder in den Schlüsselkasten legen",
      es: "Cerrar con llave la puerta de entrada y devolver las llaves a la caja",
      it: "Chiudere a chiave la porta d'ingresso e rimettere le chiavi nella cassetta",
    },
  "Vous êtes en plein cœur historique de Caen, dans une rue piétonne à deux pas de la rue Froide et de l'église Saint-Pierre. Tout le centre-ville, le château et le port se font à pied.":
    {
      en: "You're right in the historic heart of Caen, on a pedestrian street steps from Rue Froide and Saint-Pierre church. The whole town centre, the castle and the harbour are all walkable.",
      de: "Sie wohnen mitten im historischen Herzen von Caen, in einer Fußgängerzone nur wenige Schritte von der Rue Froide und der Kirche Saint-Pierre entfernt. Die gesamte Innenstadt, die Burg und der Hafen sind zu Fuß erreichbar.",
      es: "Está en pleno corazón histórico de Caen, en una calle peatonal a dos pasos de la rue Froide y de la iglesia de Saint-Pierre. Todo el centro, el castillo y el puerto se recorren a pie.",
      it: "Vi trovate nel cuore storico di Caen, in una via pedonale a due passi da rue Froide e dalla chiesa di Saint-Pierre. Tutto il centro, il castello e il porto sono raggiungibili a piedi.",
    },
  "Joyau du gothique flamboyant au cœur de la ville, à quelques pas du logement. Clocher remarquable et chevet richement sculpté.":
    {
      en: "A gem of flamboyant Gothic in the heart of the city, a few steps from the property. Remarkable bell tower and richly carved chevet.",
      de: "Ein Juwel der Spätgotik im Herzen der Stadt, wenige Schritte von der Unterkunft entfernt. Bemerkenswerter Glockenturm und reich verzierter Chor.",
      es: "Joya del gótico flamígero en el corazón de la ciudad, a pocos pasos del alojamiento. Campanario notable y cabecera ricamente esculpida.",
      it: "Gioiello del gotico fiammeggiante nel cuore della città, a pochi passi dall'alloggio. Campanile notevole e abside riccamente scolpita.",
    },
  "Le port de plaisance en plein centre, à quelques minutes à pied : terrasses, balades le long des quais et marché du dimanche matin.":
    {
      en: "The marina right in the centre, a few minutes' walk away: terraces, strolls along the quays and the Sunday-morning market.",
      de: "Der Yachthafen mitten im Zentrum, wenige Gehminuten entfernt: Terrassen, Spaziergänge entlang der Kais und der Sonntagvormittagsmarkt.",
      es: "El puerto deportivo en pleno centro, a unos minutos a pie: terrazas, paseos por los muelles y mercado del domingo por la mañana.",
      it: "Il porto turistico in pieno centro, a pochi minuti a piedi: terrazze, passeggiate lungo le banchine e mercato della domenica mattina.",
    },
  "Cuisine soignée, 11 place Saint-Sauveur, sur une jolie place à deux pas du logement. Tél. 02 61 53 60 50.":
    {
      en: "Refined cuisine, 11 Place Saint-Sauveur, on a pretty square steps from the property. Tel. 02 61 53 60 50.",
      de: "Gepflegte Küche, 11 Place Saint-Sauveur, an einem hübschen Platz wenige Schritte von der Unterkunft. Tel. 02 61 53 60 50.",
      es: "Cocina cuidada, 11 place Saint-Sauveur, en una bonita plaza a dos pasos del alojamiento. Tel. 02 61 53 60 50.",
      it: "Cucina curata, 11 place Saint-Sauveur, in una graziosa piazza a due passi dall'alloggio. Tel. 02 61 53 60 50.",
    },
  "Adresse gourmande, 15 rue Pemagnie, dans le centre historique tout proche. Tél. 02 31 93 39 43.":
    {
      en: "A foodie address, 15 Rue Pemagnie, in the nearby historic centre. Tel. 02 31 93 39 43.",
      de: "Feinschmeckeradresse, 15 Rue Pemagnie, im nahen historischen Zentrum. Tel. 02 31 93 39 43.",
      es: "Dirección gastronómica, 15 rue Pemagnie, en el cercano centro histórico. Tel. 02 31 93 39 43.",
      it: "Indirizzo goloso, 15 rue Pemagnie, nel vicino centro storico. Tel. 02 31 93 39 43.",
    },
  "Bistrot de référence, 12 rue Graindorge, dans le Vaugueux (~5 min à pied). Cuisine du marché soignée, référencé au Guide Michelin. Réservation conseillée. Tél. 02 31 44 26 26.":
    {
      en: "A benchmark bistro, 12 Rue Graindorge, in Le Vaugueux (~5 min walk). Refined market cuisine, listed in the Michelin Guide. Booking recommended. Tel. 02 31 44 26 26.",
      de: "Referenz-Bistro, 12 Rue Graindorge, im Vaugueux (~5 Gehminuten). Gepflegte Marktküche, im Guide Michelin geführt. Reservierung empfohlen. Tel. 02 31 44 26 26.",
      es: "Bistró de referencia, 12 rue Graindorge, en el Vaugueux (~5 min a pie). Cocina de mercado cuidada, en la Guía Michelin. Se recomienda reservar. Tel. 02 31 44 26 26.",
      it: "Bistrot di riferimento, 12 rue Graindorge, nel Vaugueux (~5 min a piedi). Cucina di mercato curata, segnalato dalla Guida Michelin. Prenotazione consigliata. Tel. 02 31 44 26 26.",
    },
  "Cuisine italienne conviviale, 15 rue du Vaugueux, dans le quartier historique. Tél. 02 31 47 97 01.":
    {
      en: "Convivial Italian cuisine, 15 Rue du Vaugueux, in the historic district. Tel. 02 31 47 97 01.",
      de: "Gesellige italienische Küche, 15 Rue du Vaugueux, im historischen Viertel. Tel. 02 31 47 97 01.",
      es: "Cocina italiana acogedora, 15 rue du Vaugueux, en el barrio histórico. Tel. 02 31 47 97 01.",
      it: "Cucina italiana conviviale, 15 rue du Vaugueux, nel quartiere storico. Tel. 02 31 47 97 01.",
    },
  "Cuisine italienne, 47 rue Saint-Sauveur, tout près. Tél. 02 31 50 35 35.":
    {
      en: "Italian cuisine, 47 Rue Saint-Sauveur, very close by. Tel. 02 31 50 35 35.",
      de: "Italienische Küche, 47 Rue Saint-Sauveur, ganz in der Nähe. Tel. 02 31 50 35 35.",
      es: "Cocina italiana, 47 rue Saint-Sauveur, muy cerca. Tel. 02 31 50 35 35.",
      it: "Cucina italiana, 47 rue Saint-Sauveur, molto vicino. Tel. 02 31 50 35 35.",
    },
  "Tartines, salades et douceurs faites maison, 20 rue Froide, tout près du logement. Tél. 02 31 50 24 32.":
    {
      en: "Homemade open sandwiches, salads and treats, 20 Rue Froide, very close to the property. Tel. 02 31 50 24 32.",
      de: "Hausgemachte Tartines, Salate und Süßes, 20 Rue Froide, ganz in der Nähe der Unterkunft. Tel. 02 31 50 24 32.",
      es: "Tostas, ensaladas y dulces caseros, 20 rue Froide, muy cerca del alojamiento. Tel. 02 31 50 24 32.",
      it: "Tartine, insalate e dolci fatti in casa, 20 rue Froide, vicinissimo all'alloggio. Tel. 02 31 50 24 32.",
    },
  "Poké bowls frais et colorés, 9 rue Écuyère, à deux pas. Tél. 02 31 26 98 73.":
    {
      en: "Fresh, colourful poke bowls, 9 Rue Écuyère, just around the corner. Tel. 02 31 26 98 73.",
      de: "Frische, bunte Poke Bowls, 9 Rue Écuyère, ganz in der Nähe. Tel. 02 31 26 98 73.",
      es: "Poke bowls frescos y coloridos, 9 rue Écuyère, a dos pasos. Tel. 02 31 26 98 73.",
      it: "Poke bowl freschi e colorati, 9 rue Écuyère, a due passi. Tel. 02 31 26 98 73.",
    },
  "Restaurant vietnamien du Vaugueux : bo bun, nems et plats à emporter.":
    {
      en: "Vietnamese restaurant in Le Vaugueux: bo bun, spring rolls and takeaway dishes.",
      de: "Vietnamesisches Restaurant im Vaugueux: Bo Bun, Frühlingsrollen und Gerichte zum Mitnehmen.",
      es: "Restaurante vietnamita del Vaugueux: bo bun, rollitos y platos para llevar.",
      it: "Ristorante vietnamita del Vaugueux: bo bun, involtini e piatti da asporto.",
    },
  "L'épicentre de la vie nocturne caennaise : bars et pubs à la suite, à ~5 min à pied.":
    {
      en: "The epicentre of Caen nightlife: bars and pubs one after another, ~5 min walk away.",
      de: "Das Epizentrum des Caener Nachtlebens: Bars und Pubs in Folge, ~5 Gehminuten entfernt.",
      es: "El epicentro de la vida nocturna de Caen: bares y pubs uno tras otro, a ~5 min a pie.",
      it: "L'epicentro della vita notturna di Caen: bar e pub in fila, a ~5 min a piedi.",
    },
  "Charmante rue pavée juste à côté du logement : libraires, artisans et boutiques indépendantes dans un cadre médiéval.":
    {
      en: "Charming cobbled street right next to the property: bookshops, craftspeople and independent boutiques in a medieval setting.",
      de: "Charmante Kopfsteinpflasterstraße direkt neben der Unterkunft: Buchhandlungen, Handwerker und unabhängige Boutiquen in mittelalterlichem Rahmen.",
      es: "Encantadora calle adoquinada junto al alojamiento: librerías, artesanos y tiendas independientes en un entorno medieval.",
      it: "Incantevole via acciottolata proprio accanto all'alloggio: librerie, artigiani e botteghe indipendenti in un contesto medievale.",
    },
  "L'artère commerçante de Caen : boutiques, enseignes et grands magasins, à ~5 min à pied.":
    {
      en: "Caen's main shopping street: boutiques, brands and department stores, ~5 min walk away.",
      de: "Die Einkaufsstraße von Caen: Boutiquen, Marken und Kaufhäuser, ~5 Gehminuten entfernt.",
      es: "La calle comercial de Caen: tiendas, marcas y grandes almacenes, a ~5 min a pie.",
      it: "La via commerciale di Caen: negozi, marchi e grandi magazzini, a ~5 min a piedi.",
    },
  "Le grand marché dominical le long du bassin Saint-Pierre (Quai Vendeuvre) : produits frais, primeurs, poissons.":
    {
      en: "The big Sunday market along the Saint-Pierre basin (Quai Vendeuvre): fresh produce, fruit and veg, fish.",
      de: "Der große Sonntagsmarkt entlang des Saint-Pierre-Beckens (Quai Vendeuvre): frische Produkte, Obst und Gemüse, Fisch.",
      es: "El gran mercado dominical junto a la dársena Saint-Pierre (Quai Vendeuvre): productos frescos, frutas y verduras, pescado.",
      it: "Il grande mercato domenicale lungo il bacino Saint-Pierre (Quai Vendeuvre): prodotti freschi, frutta e verdura, pesce.",
    },
  "45 boulevard du Maréchal Leclerc — le plus pratique du centre, à ~5 min : courses et produits du quotidien, ouvert tard. Parking souterrain.":
    {
      en: "45 Boulevard du Maréchal Leclerc — the handiest in the centre, ~5 min away: groceries and everyday essentials, open late. Underground car park.",
      de: "45 Boulevard du Maréchal Leclerc — der praktischste im Zentrum, ~5 Min. entfernt: Einkäufe und Produkte des täglichen Bedarfs, lange geöffnet. Tiefgarage.",
      es: "45 boulevard du Maréchal Leclerc — el más práctico del centro, a ~5 min: compras y productos del día a día, abierto hasta tarde. Aparcamiento subterráneo.",
      it: "45 boulevard du Maréchal Leclerc — il più comodo del centro, a ~5 min: spesa e prodotti quotidiani, aperto fino a tardi. Parcheggio sotterraneo.",
    },
  "Supérette de dépannage vers le Vaugueux, 1 rue Basse : courses de dernière minute. Tél. 06 59 27 12 90.":
    {
      en: "Handy convenience store towards Le Vaugueux, 1 Rue Basse: last-minute shopping. Tel. 06 59 27 12 90.",
      de: "Nahversorger Richtung Vaugueux, 1 Rue Basse: Einkäufe in letzter Minute. Tel. 06 59 27 12 90.",
      es: "Tienda de conveniencia hacia el Vaugueux, 1 rue Basse: compras de última hora. Tel. 06 59 27 12 90.",
      it: "Minimarket verso il Vaugueux, 1 rue Basse: spesa dell'ultimo minuto. Tel. 06 59 27 12 90.",
    },
  "52 rue du Vaugueux — boulangerie-pâtisserie pour le pain frais et les viennoiseries du matin.":
    {
      en: "52 Rue du Vaugueux — bakery and pastry shop for fresh bread and morning pastries.",
      de: "52 Rue du Vaugueux — Bäckerei und Konditorei für frisches Brot und Frühstücksgebäck.",
      es: "52 rue du Vaugueux — panadería y pastelería para pan fresco y bollería de la mañana.",
      it: "52 rue du Vaugueux — panetteria e pasticceria per pane fresco e brioche del mattino.",
    },
  "Plusieurs boulangeries-pâtisseries le long de la rue Saint-Pierre, tout près.":
    {
      en: "Several bakeries and pastry shops along Rue Saint-Pierre, very close by.",
      de: "Mehrere Bäckereien und Konditoreien entlang der Rue Saint-Pierre, ganz in der Nähe.",
      es: "Varias panaderías-pastelerías a lo largo de la rue Saint-Pierre, muy cerca.",
      it: "Diverse panetterie-pasticcerie lungo la rue Saint-Pierre, molto vicino.",
    },
  "Arrêt de tram proche du logement, vers l'église Saint-Pierre : rejoignez le centre, la gare et les campus universitaires.":
    {
      en: "Tram stop near the property, towards Saint-Pierre church: reach the centre, the station and the university campuses.",
      de: "Straßenbahnhaltestelle nahe der Unterkunft, Richtung Kirche Saint-Pierre: erreichen Sie das Zentrum, den Bahnhof und die Universitätscampus.",
      es: "Parada de tranvía cerca del alojamiento, hacia la iglesia de Saint-Pierre: llegue al centro, la estación y los campus universitarios.",
      it: "Fermata del tram vicino all'alloggio, verso la chiesa di Saint-Pierre: raggiungete il centro, la stazione e i campus universitari.",
    },
  "Autre arrêt de tram tout proche, rue de Geôle, en direction du centre et de la gare.":
    {
      en: "Another tram stop very close by, on Rue de Geôle, towards the centre and the station.",
      de: "Weitere Straßenbahnhaltestelle ganz in der Nähe, in der Rue de Geôle, Richtung Zentrum und Bahnhof.",
      es: "Otra parada de tranvía muy cerca, en la rue de Geôle, en dirección al centro y la estación.",
      it: "Altra fermata del tram molto vicina, in rue de Geôle, in direzione del centro e della stazione.",
    },
  "Pharmacie de centre-ville, proche de l'église Saint-Pierre. Pharmacie de garde : composez le 3237.":
    {
      en: "Town-centre pharmacy, near Saint-Pierre church. For the on-duty pharmacy, dial 3237.",
      de: "Apotheke im Stadtzentrum, nahe der Kirche Saint-Pierre. Notdienst-Apotheke: Wählen Sie 3237.",
      es: "Farmacia del centro, cerca de la iglesia de Saint-Pierre. Farmacia de guardia: marque el 3237.",
      it: "Farmacia in centro, vicino alla chiesa di Saint-Pierre. Farmacia di turno: componete il 3237.",
    },
  "Rue Montoir-Poissonnerie, vers le Vaugueux. Pharmacie de garde : composez le 3237.":
    {
      en: "On Rue Montoir-Poissonnerie, towards Le Vaugueux. For the on-duty pharmacy, dial 3237.",
      de: "In der Rue Montoir-Poissonnerie, Richtung Vaugueux. Notdienst-Apotheke: Wählen Sie 3237.",
      es: "En la rue Montoir-Poissonnerie, hacia el Vaugueux. Farmacia de guardia: marque el 3237.",
      it: "In rue Montoir-Poissonnerie, verso il Vaugueux. Farmacia di turno: componete il 3237.",
    },
  "77 rue du Vaugueux : tabac, presse et dépannage.":
    {
      en: "77 Rue du Vaugueux: tobacco, newspapers and essentials.",
      de: "77 Rue du Vaugueux: Tabak, Zeitungen und Notwendiges.",
      es: "77 rue du Vaugueux: tabaco, prensa y artículos de primera necesidad.",
      it: "77 rue du Vaugueux: tabacchi, giornali e prima necessità.",
    },
  "Flânez dans la rue Froide et les ruelles pavées du vieux Caen, juste au pied de la maison, puis rejoignez le Vaugueux pour dîner. Et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !":
    {
      en: "Stroll along Rue Froide and the cobbled lanes of old Caen, right at the foot of the house, then head to Le Vaugueux for dinner. And for food lovers, try the tripes à la mode de Caen, the local speciality!",
      de: "Schlendern Sie durch die Rue Froide und die kopfsteingepflasterten Gassen der Altstadt von Caen, direkt vor dem Haus, und gehen Sie dann zum Abendessen ins Vaugueux. Und für Feinschmecker: Probieren Sie die Tripes à la mode de Caen, die lokale Spezialität!",
      es: "Pasee por la rue Froide y las callejuelas empedradas del viejo Caen, justo al pie de la casa, y luego vaya al Vaugueux a cenar. Y para los golosos, ¡pruebe los tripes à la mode de Caen, la especialidad local!",
      it: "Passeggiate per rue Froide e i vicoli acciottolati della vecchia Caen, proprio ai piedi della casa, poi raggiungete il Vaugueux per cena. E per i golosi, assaggiate le tripes à la mode de Caen, la specialità locale!",
    },
  "Disponible sur la conversation Airbnb ou Booking en cas de besoin.":
    {
      en: "Available via the Airbnb or Booking chat if you need anything.",
      de: "Bei Bedarf über den Airbnb- oder Booking-Chat erreichbar.",
      es: "Disponible en el chat de Airbnb o Booking si lo necesita.",
      it: "Disponibile sulla chat di Airbnb o Booking in caso di necessità.",
    },
  "Bienvenue à Houlgate ! Vous êtes à deux pas de la plage, dans une charmante station balnéaire de la Côte Fleurie. La rue des Bains vous mène droit à la mer. Très bon séjour ! 🌊":
    {
      en: "Welcome to Houlgate! You're steps from the beach, in a charming seaside resort on the Côte Fleurie. Rue des Bains leads you straight to the sea. Enjoy your stay! 🌊",
      de: "Willkommen in Houlgate! Sie wohnen nur wenige Schritte vom Strand entfernt, in einem charmanten Seebad an der Côte Fleurie. Die Rue des Bains führt Sie direkt ans Meer. Einen schönen Aufenthalt! 🌊",
      es: "¡Bienvenido a Houlgate! Está a dos pasos de la playa, en un encantador balneario de la Côte Fleurie. La rue des Bains le lleva directo al mar. ¡Feliz estancia! 🌊",
      it: "Benvenuti a Houlgate! Siete a due passi dalla spiaggia, in un'incantevole località balneare della Côte Fleurie. La rue des Bains vi porta dritti al mare. Buon soggiorno! 🌊",
    },
  "Fermer les fenêtres, éteindre les lumières et baisser le chauffage":
    {
      en: "Close the windows, turn off the lights and turn down the heating",
      de: "Die Fenster schließen, das Licht ausschalten und die Heizung herunterdrehen",
      es: "Cerrar las ventanas, apagar las luces y bajar la calefacción",
      it: "Chiudere le finestre, spegnere le luci e abbassare il riscaldamento",
    },
  "Fermer l'appartement à clé, puis remettre la clé dans la boîte à clés fixée sur la porte":
    {
      en: "Lock the apartment, then put the key back in the key box fixed to the door",
      de: "Die Wohnung abschließen und den Schlüssel wieder in den an der Tür befestigten Schlüsselkasten legen",
      es: "Cerrar el apartamento con llave y devolver la llave a la caja fijada en la puerta",
      it: "Chiudere a chiave l'appartamento, poi rimettere la chiave nella cassetta fissata alla porta",
    },
  "Plage de Houlgate & la digue-promenade (front de mer, ~2–3 min)":
    {
      en: "Houlgate beach & the seafront promenade (~2–3 min)",
      de: "Strand von Houlgate & die Strandpromenade (~2–3 Min.)",
      es: "Playa de Houlgate y el paseo marítimo (~2–3 min)",
      it: "Spiaggia di Houlgate e la passeggiata sul lungomare (~2–3 min)",
    },
  "Rue des Bains — commerces, cafés & restaurants (sur place)":
    {
      en: "Rue des Bains — shops, cafés & restaurants (right outside)",
      de: "Rue des Bains — Geschäfte, Cafés & Restaurants (direkt vor Ort)",
      es: "Rue des Bains — comercios, cafeterías y restaurantes (en la misma calle)",
      it: "Rue des Bains — negozi, caffè e ristoranti (sul posto)",
    },
  "Vous êtes à Houlgate, station balnéaire Belle Époque de la Côte Fleurie, à quelques pas de la plage. La rue des Bains descend droit vers la mer et concentre les commerces. Tout se fait à pied. Cabourg, Dives-sur-Mer et Deauville sont à quelques minutes en voiture.":
    {
      en: "You're in Houlgate, a Belle Époque seaside resort on the Côte Fleurie, steps from the beach. Rue des Bains runs straight down to the sea and gathers the shops. Everything is walkable. Cabourg, Dives-sur-Mer and Deauville are a few minutes away by car.",
      de: "Sie wohnen in Houlgate, einem Belle-Époque-Seebad an der Côte Fleurie, nur wenige Schritte vom Strand entfernt. Die Rue des Bains führt direkt hinunter zum Meer und bündelt die Geschäfte. Alles ist zu Fuß erreichbar. Cabourg, Dives-sur-Mer und Deauville sind wenige Autominuten entfernt.",
      es: "Está en Houlgate, un balneario de la Belle Époque en la Côte Fleurie, a pocos pasos de la playa. La rue des Bains baja recta hacia el mar y reúne los comercios. Todo se hace a pie. Cabourg, Dives-sur-Mer y Deauville están a unos minutos en coche.",
      it: "Vi trovate a Houlgate, località balneare Belle Époque della Côte Fleurie, a pochi passi dalla spiaggia. La rue des Bains scende dritta verso il mare e concentra i negozi. Tutto è raggiungibile a piedi. Cabourg, Dives-sur-Mer e Deauville sono a pochi minuti in auto.",
    },
  "Grande plage de sable au pied de la digue-promenade, à quelques minutes à pied.":
    {
      en: "Large sandy beach at the foot of the seafront promenade, a few minutes' walk away.",
      de: "Großer Sandstrand am Fuß der Strandpromenade, wenige Gehminuten entfernt.",
      es: "Gran playa de arena al pie del paseo marítimo, a unos minutos a pie.",
      it: "Grande spiaggia di sabbia ai piedi della passeggiata sul lungomare, a pochi minuti a piedi.",
    },
  "Falaises célèbres pour leurs fossiles, entre Houlgate et Villers-sur-Mer (accessibles à marée basse).":
    {
      en: "Cliffs famous for their fossils, between Houlgate and Villers-sur-Mer (accessible at low tide).",
      de: "Für ihre Fossilien berühmte Klippen, zwischen Houlgate und Villers-sur-Mer (bei Ebbe zugänglich).",
      es: "Acantilados famosos por sus fósiles, entre Houlgate y Villers-sur-Mer (accesibles con marea baja).",
      it: "Scogliere famose per i loro fossili, tra Houlgate e Villers-sur-Mer (accessibili con la bassa marea).",
    },
  "La promenade en bord de mer, idéale au coucher du soleil.":
    {
      en: "The seafront promenade, perfect at sunset.",
      de: "Die Strandpromenade, ideal bei Sonnenuntergang.",
      es: "El paseo junto al mar, ideal al atardecer.",
      it: "La passeggiata sul lungomare, ideale al tramonto.",
    },
  "Casino face à la mer, avec restaurant (Entre Terre et Mer).":
    {
      en: "Casino facing the sea, with a restaurant (Entre Terre et Mer).",
      de: "Casino mit Meerblick, mit Restaurant (Entre Terre et Mer).",
      es: "Casino frente al mar, con restaurante (Entre Terre et Mer).",
      it: "Casinò fronte mare, con ristorante (Entre Terre et Mer).",
    },
  "Brasserie-glacier en haut de la rue des Bains (n° 2).":
    {
      en: "Brasserie and ice-cream parlour at the top of Rue des Bains (no. 2).",
      de: "Brasserie und Eisdiele am oberen Ende der Rue des Bains (Nr. 2).",
      es: "Brasería-heladería en lo alto de la rue des Bains (n.º 2).",
      it: "Brasserie-gelateria in cima alla rue des Bains (n. 2).",
    },
  "Cuisine traditionnelle, 3 rue des Bains.":
    {
      en: "Traditional cuisine, 3 Rue des Bains.",
      de: "Traditionelle Küche, 3 Rue des Bains.",
      es: "Cocina tradicional, 3 rue des Bains.",
      it: "Cucina tradizionale, 3 rue des Bains.",
    },
  "Restaurant italien & pizzeria, 7 rue des Bains.":
    {
      en: "Italian restaurant & pizzeria, 7 Rue des Bains.",
      de: "Italienisches Restaurant & Pizzeria, 7 Rue des Bains.",
      es: "Restaurante italiano y pizzería, 7 rue des Bains.",
      it: "Ristorante italiano e pizzeria, 7 rue des Bains.",
    },
  "Cuisine française, 23 rue des Bains (au pied de l'immeuble).":
    {
      en: "French cuisine, 23 Rue des Bains (at the foot of the building).",
      de: "Französische Küche, 23 Rue des Bains (am Fuß des Gebäudes).",
      es: "Cocina francesa, 23 rue des Bains (al pie del edificio).",
      it: "Cucina francese, 23 rue des Bains (ai piedi dell'edificio).",
    },
  "Fruits de mer et cuisine régionale, 37 rue des Bains.":
    {
      en: "Seafood and regional cuisine, 37 Rue des Bains.",
      de: "Meeresfrüchte und regionale Küche, 37 Rue des Bains.",
      es: "Marisco y cocina regional, 37 rue des Bains.",
      it: "Frutti di mare e cucina regionale, 37 rue des Bains.",
    },
  "Cuisine de saison et produits frais (cité au guide Michelin), 41 rue des Bains.":
    {
      en: "Seasonal cuisine and fresh produce (listed in the Michelin Guide), 41 Rue des Bains.",
      de: "Saisonale Küche und frische Produkte (im Guide Michelin geführt), 41 Rue des Bains.",
      es: "Cocina de temporada y productos frescos (citado en la Guía Michelin), 41 rue des Bains.",
      it: "Cucina di stagione e prodotti freschi (citato nella Guida Michelin), 41 rue des Bains.",
    },
  "Cuisine saine & bar à jus frais, 49 rue des Bains.":
    {
      en: "Healthy food & fresh juice bar, 49 Rue des Bains.",
      de: "Gesunde Küche & frische Saftbar, 49 Rue des Bains.",
      es: "Cocina saludable y bar de zumos frescos, 49 rue des Bains.",
      it: "Cucina sana & bar di succhi freschi, 49 rue des Bains.",
    },
  "Boulangerie-pâtisserie artisanale (spécialité : la falue), 55 rue des Bains.":
    {
      en: "Artisan bakery and pastry shop (speciality: the falue), 55 Rue des Bains.",
      de: "Handwerkliche Bäckerei und Konditorei (Spezialität: die Falue), 55 Rue des Bains.",
      es: "Panadería-pastelería artesanal (especialidad: la falue), 55 rue des Bains.",
      it: "Panetteria-pasticceria artigianale (specialità: la falue), 55 rue des Bains.",
    },
  "Glacier, crêpes, gaufres et beignets, 25 rue des Bains.":
    {
      en: "Ice cream, crêpes, waffles and doughnuts, 25 Rue des Bains.",
      de: "Eisdiele, Crêpes, Waffeln und Krapfen, 25 Rue des Bains.",
      es: "Heladería, crepes, gofres y buñuelos, 25 rue des Bains.",
      it: "Gelateria, crêpe, waffle e frittelle, 25 rue des Bains.",
    },
  "La supérette la plus proche, 57 rue des Bains, pour le dépannage du quotidien.":
    {
      en: "The nearest convenience store, 57 Rue des Bains, for everyday essentials.",
      de: "Der nächste Nahversorger, 57 Rue des Bains, für den täglichen Bedarf.",
      es: "La tienda de conveniencia más cercana, 57 rue des Bains, para imprevistos del día a día.",
      it: "Il minimarket più vicino, 57 rue des Bains, per le necessità quotidiane.",
    },
  "Commerçants de bouche et producteurs locaux, au cœur du bourg. Les matins du jeudi au dimanche (tous les jours pendant les vacances scolaires).":
    {
      en: "Food traders and local producers, in the heart of the town. Mornings from Thursday to Sunday (daily during school holidays).",
      de: "Lebensmittelhändler und lokale Erzeuger, im Herzen des Ortes. Vormittags von Donnerstag bis Sonntag (täglich in den Schulferien).",
      es: "Comerciantes de alimentación y productores locales, en el corazón del pueblo. Por las mañanas de jueves a domingo (todos los días durante las vacaciones escolares).",
      it: "Commercianti alimentari e produttori locali, nel cuore del paese. Le mattine dal giovedì alla domenica (tutti i giorni durante le vacanze scolastiche).",
    },
  "La pharmacie la plus proche, 42 rue des Bains (tél. 02 31 28 70 52). Pharmacie de garde : composez le 3237.":
    {
      en: "The nearest pharmacy, 42 Rue des Bains (tel. 02 31 28 70 52). For the on-duty pharmacy, dial 3237.",
      de: "Die nächste Apotheke, 42 Rue des Bains (Tel. 02 31 28 70 52). Notdienst-Apotheke: Wählen Sie 3237.",
      es: "La farmacia más cercana, 42 rue des Bains (tel. 02 31 28 70 52). Farmacia de guardia: marque el 3237.",
      it: "La farmacia più vicina, 42 rue des Bains (tel. 02 31 28 70 52). Farmacia di turno: componete il 3237.",
    },
  "Station Belle Époque voisine, sa digue Marcel-Proust et le Grand Hôtel (~10 min en voiture).":
    {
      en: "Neighbouring Belle Époque resort, with its Marcel-Proust promenade and the Grand Hôtel (~10 min by car).",
      de: "Benachbartes Belle-Époque-Seebad mit seiner Marcel-Proust-Promenade und dem Grand Hôtel (~10 Min. mit dem Auto).",
      es: "Balneario Belle Époque vecino, con su paseo Marcel-Proust y el Grand Hôtel (~10 min en coche).",
      it: "Vicina località Belle Époque, con la sua passeggiata Marcel-Proust e il Grand Hôtel (~10 min in auto).",
    },
  "Village d'artisans et halles médiévales (~8 min en voiture).":
    {
      en: "Craftspeople's village and medieval covered market (~8 min by car).",
      de: "Handwerkerdorf und mittelalterliche Markthalle (~8 Min. mit dem Auto).",
      es: "Pueblo de artesanos y mercado cubierto medieval (~8 min en coche).",
      it: "Villaggio di artigiani e mercato coperto medievale (~8 min in auto).",
    },
  "Planches, villas et boutiques (~20 min en voiture).":
    {
      en: "Boardwalk, villas and boutiques (~20 min by car).",
      de: "Strandpromenade, Villen und Boutiquen (~20 Min. mit dem Auto).",
      es: "Paseo entablado, villas y tiendas (~20 min en coche).",
      it: "Passerella, ville e negozi (~20 min in auto).",
    },
  "Descendez la rue des Bains jusqu'à la plage et flânez sur la digue-promenade au coucher du soleil. Faites un tour au marché couvert, offrez-vous des fruits de mer à La Maison du Coquillage, puis, à marée basse, partez à la découverte des Falaises des Vaches Noires et de leurs fossiles. Et prenez le temps d'une escapade jusqu'à Cabourg et sa digue Marcel-Proust, à quelques minutes.":
    {
      en: "Head down Rue des Bains to the beach and stroll along the promenade at sunset. Wander through the covered market, treat yourself to seafood at La Maison du Coquillage, then, at low tide, set off to explore the Vaches Noires cliffs and their fossils. And take time for a getaway to Cabourg and its Marcel-Proust promenade, just minutes away.",
      de: "Gehen Sie die Rue des Bains hinunter zum Strand und schlendern Sie bei Sonnenuntergang über die Promenade. Bummeln Sie durch die Markthalle, gönnen Sie sich Meeresfrüchte bei La Maison du Coquillage, und machen Sie sich dann bei Ebbe auf, um die Klippen der Vaches Noires und ihre Fossilien zu entdecken. Und nehmen Sie sich Zeit für einen Ausflug nach Cabourg und seine Marcel-Proust-Promenade, nur wenige Minuten entfernt.",
      es: "Baje la rue des Bains hasta la playa y pasee por el paseo marítimo al atardecer. Dé una vuelta por el mercado cubierto, disfrute de marisco en La Maison du Coquillage y, con marea baja, salga a descubrir los acantilados de las Vaches Noires y sus fósiles. Y tómese tiempo para una escapada a Cabourg y su paseo Marcel-Proust, a unos minutos.",
      it: "Scendete lungo la rue des Bains fino alla spiaggia e passeggiate sul lungomare al tramonto. Fate un giro al mercato coperto, concedetevi dei frutti di mare a La Maison du Coquillage, poi, con la bassa marea, partite alla scoperta delle scogliere delle Vaches Noires e dei loro fossili. E prendetevi il tempo per una gita a Cabourg e alla sua passeggiata Marcel-Proust, a pochi minuti.",
    },
  "Boîte à clés fixée sur la porte de l'appartement":
    {
      en: "Key box fixed to the apartment door",
      de: "An der Wohnungstür befestigter Schlüsselkasten",
      es: "Caja de llaves fijada en la puerta del apartamento",
      it: "Cassetta delle chiavi fissata alla porta dell'appartamento",
    },
  "L'immeuble se trouve au 23 rue des Bains, à Houlgate. L'entrée de l'immeuble est libre : poussez la porte et entrez.":
    {
      en: "The building is at 23 Rue des Bains, in Houlgate. The building entrance is open: push the door and go in.",
      de: "Das Gebäude befindet sich in der Rue des Bains 23 in Houlgate. Der Eingang ist frei zugänglich: Drücken Sie die Tür auf und treten Sie ein.",
      es: "El edificio está en el 23 de la rue des Bains, en Houlgate. La entrada del edificio es libre: empuje la puerta y entre.",
      it: "L'edificio si trova al 23 di rue des Bains, a Houlgate. L'ingresso del palazzo è libero: spingete la porta ed entrate.",
    },
  "Montez jusqu'au 2ᵉ étage, à la porte du logement « Écume ».":
    {
      en: "Go up to the 2nd floor, to the door of the “Écume” apartment.",
      de: "Gehen Sie hinauf in den 2. Stock, zur Tür der Wohnung „Écume“.",
      es: "Suba a la 2.ª planta, hasta la puerta del alojamiento «Écume».",
      it: "Salite al 2º piano, alla porta dell'alloggio «Écume».",
    },
  "Une boîte à clés est fixée sur la porte de l'appartement. Ouvrez-la avec le code que nous vous communiquons par message, puis prenez la clé.":
    {
      en: "A key box is fixed to the apartment door. Open it with the code we send you by message, then take the key.",
      de: "An der Wohnungstür ist ein Schlüsselkasten befestigt. Öffnen Sie ihn mit dem Code, den wir Ihnen per Nachricht mitteilen, und nehmen Sie den Schlüssel.",
      es: "Hay una caja de llaves fijada en la puerta del apartamento. Ábrala con el código que le comunicamos por mensaje y coja la llave.",
      it: "Una cassetta delle chiavi è fissata alla porta dell'appartamento. Apritela con il codice che vi comunichiamo tramite messaggio, poi prendete la chiave.",
    },
  "Ouvrez la porte avec la clé. Bienvenue !":
    {
      en: "Open the door with the key. Welcome!",
      de: "Öffnen Sie die Tür mit dem Schlüssel. Willkommen!",
      es: "Abra la puerta con la llave. ¡Bienvenido!",
      it: "Aprite la porta con la chiave. Benvenuti!",
    },
  "Devant le logement, rue des Bains, vous trouverez des places en zone bleue (stationnement gratuit à durée limitée — pensez au disque).\nPour un stationnement gratuit et sans limite de durée, privilégiez les rues voisines : rue Henri Dobert, rue Émilie Deschanel ou rue du 11 Novembre 1918.":
    {
      en: "In front of the property, on Rue des Bains, you'll find blue-zone spaces (free, time-limited parking — remember your parking disc).\nFor free parking with no time limit, use the nearby streets: Rue Henri Dobert, Rue Émilie Deschanel or Rue du 11 Novembre 1918.",
      de: "Vor der Unterkunft, in der Rue des Bains, finden Sie Plätze in der blauen Zone (kostenloses, zeitlich begrenztes Parken — denken Sie an die Parkscheibe).\nFür kostenloses Parken ohne Zeitbegrenzung nutzen Sie die benachbarten Straßen: Rue Henri Dobert, Rue Émilie Deschanel oder Rue du 11 Novembre 1918.",
      es: "Delante del alojamiento, en la rue des Bains, encontrará plazas en zona azul (aparcamiento gratuito de duración limitada — no olvide el disco).\nPara aparcar gratis y sin límite de tiempo, use las calles cercanas: rue Henri Dobert, rue Émilie Deschanel o rue du 11 Novembre 1918.",
      it: "Davanti all'alloggio, in rue des Bains, troverete posti in zona blu (parcheggio gratuito a tempo limitato — ricordate il disco orario).\nPer un parcheggio gratuito e senza limiti di tempo, preferite le vie vicine: rue Henri Dobert, rue Émilie Deschanel o rue du 11 Novembre 1918.",
    },
  "Pièce à vivre avec canapé-lit (140 × 190)":
    {
      en: "Living area with sofa bed (140 × 190)",
      de: "Wohnbereich mit Schlafsofa (140 × 190)",
      es: "Sala de estar con sofá cama (140 × 190)",
      it: "Zona giorno con divano letto (140 × 190)",
    },
  "Coin cuisine équipé (plaques de cuisson, four, micro-ondes, réfrigérateur/congélateur, Nespresso, bouilloire, grille-pain)":
    {
      en: "Fitted kitchenette (hob, oven, microwave, fridge/freezer, Nespresso, kettle, toaster)",
      de: "Ausgestattete Küchenzeile (Kochfeld, Backofen, Mikrowelle, Kühl-/Gefrierschrank, Nespresso, Wasserkocher, Toaster)",
      es: "Cocina americana equipada (placa, horno, microondas, frigorífico/congelador, Nespresso, hervidor, tostadora)",
      it: "Angolo cottura attrezzato (piano cottura, forno, microonde, frigo/congelatore, Nespresso, bollitore, tostapane)",
    },
  "Salle d'eau : douche, lavabo et WC dans la même pièce":
    {
      en: "Shower room: shower, washbasin and toilet in the same room",
      de: "Duschbad: Dusche, Waschbecken und WC im selben Raum",
      es: "Aseo con ducha: ducha, lavabo y WC en la misma habitación",
      it: "Bagno con doccia: doccia, lavabo e WC nella stessa stanza",
    },
  "Les draps sont fournis et les lits sont faits à votre arrivée. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition.":
    {
      en: "Sheets are provided and the beds are made on arrival. Each guest has a towel; a bath mat and a kitchen towel are also provided.",
      de: "Die Bettwäsche wird gestellt und die Betten sind bei Ihrer Ankunft gemacht. Jeder Gast erhält ein Handtuch; ein Badvorleger und ein Geschirrtuch stehen ebenfalls zur Verfügung.",
      es: "Las sábanas están incluidas y las camas hechas a su llegada. Cada huésped dispone de una toalla; también se ponen a su disposición una alfombrilla de baño y un paño de cocina.",
      it: "Le lenzuola sono fornite e i letti sono pronti al vostro arrivo. Ogni ospite dispone di un asciugamano; sono inoltre a disposizione un tappetino da bagno e uno strofinaccio da cucina.",
    },
  "Le logement n'est pas encore équipé du WiFi. Prévoyez votre connexion mobile (4G/5G) pour vos usages internet. Merci de votre compréhension — l'installation est prévue.":
    {
      en: "The property isn't equipped with WiFi yet. Please plan to use your mobile data (4G/5G) for internet. Thank you for your understanding — installation is planned.",
      de: "Die Unterkunft ist noch nicht mit WLAN ausgestattet. Planen Sie Ihre mobile Verbindung (4G/5G) für die Internetnutzung ein. Vielen Dank für Ihr Verständnis — die Installation ist geplant.",
      es: "El alojamiento aún no dispone de WiFi. Prevea usar su conexión móvil (4G/5G) para internet. Gracias por su comprensión — la instalación está prevista.",
      it: "L'alloggio non è ancora dotato di WiFi. Prevedete la vostra connessione mobile (4G/5G) per l'uso di internet. Grazie per la comprensione — l'installazione è prevista.",
    },
  "L'appartement se situe au 2ᵉ étage et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages.":
    {
      en: "The apartment is on the 2nd floor and the building has no lift. Bear this in mind for your luggage.",
      de: "Die Wohnung liegt im 2. Stock und das Gebäude hat keinen Aufzug. Bedenken Sie dies für Ihr Gepäck.",
      es: "El apartamento está en la 2.ª planta y el edificio no tiene ascensor. Téngalo en cuenta para su equipaje.",
      it: "L'appartamento si trova al 2º piano e l'edificio non ha ascensore. Tenetene conto per i bagagli.",
    },
  "La salle d'eau réunit douche, lavabo et WC. Merci de bien refermer le rideau / la paroi de douche pour éviter les éclaboussures.":
    {
      en: "The shower room combines shower, washbasin and toilet. Please close the shower curtain / screen properly to avoid splashes.",
      de: "Das Duschbad vereint Dusche, Waschbecken und WC. Bitte schließen Sie den Duschvorhang / die Duschwand richtig, um Spritzer zu vermeiden.",
      es: "El aseo reúne ducha, lavabo y WC. Por favor, cierre bien la cortina / mampara de ducha para evitar salpicaduras.",
      it: "Il bagno riunisce doccia, lavabo e WC. Vi preghiamo di chiudere bene la tenda / il pannello della doccia per evitare schizzi.",
    },
  "Le coin cuisine est équipé : plaques de cuisson, four, micro-ondes, réfrigérateur avec congélateur, machine à café Nespresso (à capsules), bouilloire et grille-pain, ainsi que le nécessaire de cuisine (vaisselle, casseroles, couverts).":
    {
      en: "The kitchenette is equipped: hob, oven, microwave, fridge with freezer, Nespresso coffee machine (capsules), kettle and toaster, plus the kitchen essentials (crockery, pots, cutlery).",
      de: "Die Küchenzeile ist ausgestattet: Kochfeld, Backofen, Mikrowelle, Kühlschrank mit Gefrierfach, Nespresso-Kaffeemaschine (Kapseln), Wasserkocher und Toaster sowie die Küchenausstattung (Geschirr, Töpfe, Besteck).",
      es: "La cocina americana está equipada: placa, horno, microondas, frigorífico con congelador, cafetera Nespresso (de cápsulas), hervidor y tostadora, además del menaje de cocina (vajilla, ollas, cubiertos).",
      it: "L'angolo cottura è attrezzato: piano cottura, forno, microonde, frigorifero con congelatore, macchina da caffè Nespresso (a capsule), bollitore e tostapane, oltre al necessario da cucina (stoviglie, pentole, posate).",
    },
  "La machine fonctionne avec des capsules Nespresso. Remplissez le réservoir d'eau, insérez une capsule, placez votre tasse et lancez. Quelques capsules vous sont offertes pour démarrer.":
    {
      en: "The machine uses Nespresso capsules. Fill the water tank, insert a capsule, place your cup and start. A few capsules are provided to get you going.",
      de: "Die Maschine arbeitet mit Nespresso-Kapseln. Füllen Sie den Wassertank, legen Sie eine Kapsel ein, stellen Sie Ihre Tasse darunter und starten Sie. Einige Kapseln erhalten Sie zum Start.",
      es: "La máquina funciona con cápsulas Nespresso. Llene el depósito de agua, inserte una cápsula, coloque su taza y póngala en marcha. Se le ofrecen algunas cápsulas para empezar.",
      it: "La macchina funziona con capsule Nespresso. Riempite il serbatoio dell'acqua, inserite una capsula, mettete la tazza e avviate. Alcune capsule vi sono offerte per iniziare.",
    },
  "Pour allumer les radiateurs, appuyez sur le bouton on/off et réglez la température. Merci de limiter votre consommation et de baisser le chauffage à votre départ.":
    {
      en: "To switch on the radiators, press the on/off button and set the temperature. Please limit your consumption and turn the heating down when you leave.",
      de: "Zum Einschalten der Heizkörper drücken Sie die On/Off-Taste und stellen Sie die Temperatur ein. Bitte begrenzen Sie Ihren Verbrauch und drehen Sie die Heizung bei Ihrer Abreise herunter.",
      es: "Para encender los radiadores, pulse el botón on/off y ajuste la temperatura. Por favor, limite su consumo y baje la calefacción al marcharse.",
      it: "Per accendere i termosifoni, premete il pulsante on/off e regolate la temperatura. Vi preghiamo di limitare il consumo e di abbassare il riscaldamento alla partenza.",
    },
  "En cas de casse durant votre séjour, merci de nous en informer afin que nous puissions remplacer les éléments manquants. Selon la nature des articles endommagés, un remboursement pourra être demandé.":
    {
      en: "In case of breakage during your stay, please let us know so we can replace the missing items. Depending on the nature of the damaged items, a refund may be requested.",
      de: "Bei Bruch während Ihres Aufenthalts informieren Sie uns bitte, damit wir die fehlenden Teile ersetzen können. Je nach Art der beschädigten Gegenstände kann eine Erstattung verlangt werden.",
      es: "En caso de rotura durante su estancia, infórmenos para que podamos reponer los elementos que falten. Según la naturaleza de los artículos dañados, se podrá solicitar un reembolso.",
      it: "In caso di rottura durante il soggiorno, vi preghiamo di informarci affinché possiamo sostituire gli elementi mancanti. A seconda della natura degli articoli danneggiati, potrà essere richiesto un rimborso.",
    },
  "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites. L'appartement se situe au 2ᵉ étage (sans ascenseur). Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, dans le logement comme dans les parties communes (couloirs, escaliers).":
    {
      en: "Non-smoking property: please go down to the street to smoke or vape. Parties and gatherings are strictly forbidden. The apartment is on the 2nd floor (no lift). Please respect the neighbours' peace and quiet by keeping noise down, both inside the apartment and in the common areas (hallways, stairs).",
      de: "Nichtraucher-Unterkunft: Bitte gehen Sie zum Rauchen oder Dampfen auf die Straße. Partys und Feiern sind strengstens untersagt. Die Wohnung liegt im 2. Stock (kein Aufzug). Bitte achten Sie auf die Ruhe der Nachbarn und vermeiden Sie Lärm, sowohl in der Wohnung als auch in den Gemeinschaftsbereichen (Flure, Treppen).",
      es: "Alojamiento para no fumadores: por favor, baje a la calle para fumar o vapear. Las fiestas y reuniones están estrictamente prohibidas. El apartamento está en la 2.ª planta (sin ascensor). Por favor, respete la tranquilidad del vecindario limitando el ruido, tanto en el apartamento como en las zonas comunes (pasillos, escaleras).",
      it: "Alloggio per non fumatori: vi preghiamo di scendere in strada per fumare o svapare. Le feste e i ricevimenti sono severamente vietati. L'appartamento si trova al 2º piano (senza ascensore). Vi preghiamo di rispettare la tranquillità del vicinato limitando i rumori, sia nell'appartamento sia nelle parti comuni (corridoi, scale).",
    },
  "Un local à poubelles se trouve au rez-de-chaussée de l'immeuble. Merci d'y déposer et de trier vos déchets pendant et à la fin de votre séjour.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\n🍷 Verre : conteneur à verre le plus proche":
    {
      en: "A bin room is located on the ground floor of the building. Please dispose of and sort your waste there during and at the end of your stay.\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\n🍷 Glass: nearest glass container",
      de: "Im Erdgeschoss des Gebäudes befindet sich ein Müllraum. Bitte entsorgen und trennen Sie dort Ihren Abfall während und am Ende Ihres Aufenthalts.\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\n🍷 Glas: nächstgelegener Glascontainer",
      es: "Hay un cuarto de basuras en la planta baja del edificio. Deposite y separe allí sus residuos durante y al final de su estancia.\n🟡 Contenedor amarillo: envases y reciclables\n⚫ Contenedor gris: residuos domésticos\n🍷 Vidrio: contenedor de vidrio más cercano",
      it: "Un locale rifiuti si trova al piano terra dell'edificio. Vi preghiamo di depositare e differenziare i rifiuti lì durante e alla fine del soggiorno.\n🟡 Bidone giallo: imballaggi e riciclabili\n⚫ Bidone grigio: rifiuti domestici\n🍷 Vetro: contenitore del vetro più vicino",
    },
  "Les animaux de compagnie sont les bienvenus ! Merci simplement de veiller à leur propreté, d'éviter qu'ils ne montent sur les lits et canapés, et de ne pas les laisser seuls dans le logement.":
    {
      en: "Pets are welcome! Please just keep them clean, keep them off the beds and sofas, and don't leave them alone in the property.",
      de: "Haustiere sind willkommen! Bitte achten Sie lediglich auf ihre Sauberkeit, halten Sie sie von Betten und Sofas fern und lassen Sie sie nicht allein in der Unterkunft.",
      es: "¡Las mascotas son bienvenidas! Solo le pedimos que cuide su limpieza, evite que suban a las camas y sofás, y no las deje solas en el alojamiento.",
      it: "Gli animali domestici sono i benvenuti! Vi chiediamo solo di curarne la pulizia, di evitare che salgano su letti e divani e di non lasciarli soli nell'alloggio.",
    },
  "Montez jusqu'au 2ᵉ étage, à la porte du logement « Beau Rivage ».":
    {
      en: "Go up to the 2nd floor, to the door of the “Beau Rivage” apartment.",
      de: "Gehen Sie hinauf in den 2. Stock, zur Tür der Wohnung „Beau Rivage“.",
      es: "Suba a la 2.ª planta, hasta la puerta del alojamiento «Beau Rivage».",
      it: "Salite al 2º piano, alla porta dell'alloggio «Beau Rivage».",
    },
  "Cuisine équipée (plaques de cuisson, four, micro-ondes, réfrigérateur/congélateur, Nespresso, bouilloire, grille-pain)":
    {
      en: "Fitted kitchen (hob, oven, microwave, fridge/freezer, Nespresso, kettle, toaster)",
      de: "Ausgestattete Küche (Kochfeld, Backofen, Mikrowelle, Kühl-/Gefrierschrank, Nespresso, Wasserkocher, Toaster)",
      es: "Cocina equipada (placa, horno, microondas, frigorífico/congelador, Nespresso, hervidor, tostadora)",
      it: "Cucina attrezzata (piano cottura, forno, microonde, frigo/congelatore, Nespresso, bollitore, tostapane)",
    },
  "Montez jusqu'au 3ᵉ étage, à la porte du logement « Embruns ».":
    {
      en: "Go up to the 3rd floor, to the door of the “Embruns” apartment.",
      de: "Gehen Sie hinauf in den 3. Stock, zur Tür der Wohnung „Embruns“.",
      es: "Suba a la 3.ª planta, hasta la puerta del alojamiento «Embruns».",
      it: "Salite al 3º piano, alla porta dell'alloggio «Embruns».",
    },
  "L'appartement se situe au 3ᵉ étage et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages.":
    {
      en: "The apartment is on the 3rd floor and the building has no lift. Bear this in mind for your luggage.",
      de: "Die Wohnung liegt im 3. Stock und das Gebäude hat keinen Aufzug. Bedenken Sie dies für Ihr Gepäck.",
      es: "El apartamento está en la 3.ª planta y el edificio no tiene ascensor. Téngalo en cuenta para su equipaje.",
      it: "L'appartamento si trova al 3º piano e l'edificio non ha ascensore. Tenetene conto per i bagagli.",
    },
  "Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites. L'appartement se situe au 3ᵉ étage (sans ascenseur). Merci de veiller à la tranquillité du voisinage en limitant les nuisances sonores, dans le logement comme dans les parties communes (couloirs, escaliers).":
    {
      en: "Non-smoking property: please go down to the street to smoke or vape. Parties and gatherings are strictly forbidden. The apartment is on the 3rd floor (no lift). Please respect the neighbours' peace and quiet by keeping noise down, both inside the apartment and in the common areas (hallways, stairs).",
      de: "Nichtraucher-Unterkunft: Bitte gehen Sie zum Rauchen oder Dampfen auf die Straße. Partys und Feiern sind strengstens untersagt. Die Wohnung liegt im 3. Stock (kein Aufzug). Bitte achten Sie auf die Ruhe der Nachbarn und vermeiden Sie Lärm, sowohl in der Wohnung als auch in den Gemeinschaftsbereichen (Flure, Treppen).",
      es: "Alojamiento para no fumadores: por favor, baje a la calle para fumar o vapear. Las fiestas y reuniones están estrictamente prohibidas. El apartamento está en la 3.ª planta (sin ascensor). Por favor, respete la tranquilidad del vecindario limitando el ruido, tanto en el apartamento como en las zonas comunes (pasillos, escaleras).",
      it: "Alloggio per non fumatori: vi preghiamo di scendere in strada per fumare o svapare. Le feste e i ricevimenti sono severamente vietati. L'appartamento si trova al 3º piano (senza ascensore). Vi preghiamo di rispettare la tranquillità del vicinato limitando i rumori, sia nell'appartamento sia nelle parti comuni (corridoi, scale).",
    },
  "Montez jusqu'au 3ᵉ étage, à la porte du logement « Belle Époque ».":
    {
      en: "Go up to the 3rd floor, to the door of the “Belle Époque” apartment.",
      de: "Gehen Sie hinauf in den 3. Stock, zur Tür der Wohnung „Belle Époque“.",
      es: "Suba a la 3.ª planta, hasta la puerta del alojamiento «Belle Époque».",
      it: "Salite al 3º piano, alla porta dell'alloggio «Belle Époque».",
    },
  "🛏️ Le nécessaire":
    {
      en: "🛏️ Essentials",
      de: "🛏️ Das Nötige",
      es: "🛏️ Lo esencial",
      it: "🛏️ L'essenziale",
    },
  "☂️ Utilisation du parasol":
    {
      en: "☂️ Using the parasol",
      de: "☂️ Sonnenschirm bedienen",
      es: "☂️ Uso de la sombrilla",
      it: "☂️ Uso dell'ombrellone",
    },
  "☕ Machine à café Nespresso":
    {
      en: "☕ Nespresso coffee machine",
      de: "☕ Nespresso-Kaffeemaschine",
      es: "☕ Cafetera Nespresso",
      it: "☕ Macchina da caffè Nespresso",
    },
  "Cuisine équipée (plaques tactiles, micro-ondes, machine Nespresso)":
    {
      en: "Equipped kitchen (touch hob, microwave, Nespresso machine)",
      de: "Ausgestattete Küche (Touch-Kochfeld, Mikrowelle, Nespresso-Maschine)",
      es: "Cocina equipada (placa táctil, microondas, cafetera Nespresso)",
      it: "Cucina attrezzata (piano cottura touch, microonde, macchina Nespresso)",
    },
  "Salon avec canapé-lit et TV":
    {
      en: "Living room with sofa bed and TV",
      de: "Wohnzimmer mit Schlafsofa und Fernseher",
      es: "Salón con sofá cama y TV",
      it: "Soggiorno con divano letto e TV",
    },
  "Salle d'eau avec WC":
    {
      en: "Shower room with toilet",
      de: "Duschbad mit WC",
      es: "Aseo con ducha y WC",
      it: "Bagno con doccia e WC",
    },
  "Chambre sous pente avec lit":
    {
      en: "Sloped-ceiling bedroom with bed",
      de: "Schlafzimmer unter der Dachschräge mit Bett",
      es: "Dormitorio abuhardillado con cama",
      it: "Camera mansardata con letto",
    },
  "Commode et rangements":
    {
      en: "Chest of drawers and storage",
      de: "Kommode und Stauraum",
      es: "Cómoda y almacenamiento",
      it: "Cassettone e ripostigli",
    },
  "Draps fournis et lit fait":
    {
      en: "Sheets provided and bed made",
      de: "Bettwäsche gestellt und Bett gemacht",
      es: "Sábanas incluidas y cama hecha",
      it: "Lenzuola fornite e letto pronto",
    },
  "TV avec décodeur Bouygues":
    {
      en: "TV with Bouygues set-top box",
      de: "Fernseher mit Bouygues-Receiver",
      es: "TV con descodificador Bouygues",
      it: "TV con decoder Bouygues",
    },
  "TV (décodeur Bouygues)":
    {
      en: "TV (Bouygues set-top box)",
      de: "Fernseher (Bouygues-Receiver)",
      es: "TV (descodificador Bouygues)",
      it: "TV (decoder Bouygues)",
    },
  "TV (Orange)":
    {
      en: "TV (Orange)",
      de: "Fernseher (Orange)",
      es: "TV (Orange)",
      it: "TV (Orange)",
    },
  "TV (salon et chambre double)":
    {
      en: "TV (living room and double bedroom)",
      de: "Fernseher (Wohnzimmer und Doppelzimmer)",
      es: "TV (salón y dormitorio doble)",
      it: "TV (soggiorno e camera matrimoniale)",
    },
  "TV (x2)":
    {
      en: "TV (x2)",
      de: "Fernseher (x2)",
      es: "TV (x2)",
      it: "TV (x2)",
    },
  "Entrée indépendante":
    {
      en: "Independent entrance",
      de: "Separater Eingang",
      es: "Entrada independiente",
      it: "Ingresso indipendente",
    },
  "Entrée":
    {
      en: "Entrance",
      de: "Eingang",
      es: "Entrada",
      it: "Ingresso",
    },
  "Rassembler les serviettes de toilette utilisées":
    {
      en: "Gather up the used towels",
      de: "Die benutzten Handtücher zusammenlegen",
      es: "Reunir las toallas usadas",
      it: "Raccogliere gli asciugamani usati",
    },
  "Baisser ou éteindre le chauffage":
    {
      en: "Turn the heating down or off",
      de: "Die Heizung herunterdrehen oder ausschalten",
      es: "Bajar o apagar la calefacción",
      it: "Abbassare o spegnere il riscaldamento",
    },
  "Sortir les poubelles dans la rue":
    {
      en: "Take the bins out to the street",
      de: "Den Müll auf die Straße bringen",
      es: "Sacar la basura a la calle",
      it: "Portare i rifiuti in strada",
    },
  "Cuisine équipée avec accès à la terrasse":
    {
      en: "Equipped kitchen with access to the terrace",
      de: "Ausgestattete Küche mit Zugang zur Terrasse",
      es: "Cocina equipada con acceso a la terraza",
      it: "Cucina attrezzata con accesso alla terrazza",
    },
  "Chambre avec lit simple":
    {
      en: "Bedroom with a single bed",
      de: "Schlafzimmer mit Einzelbett",
      es: "Dormitorio con cama individual",
      it: "Camera con letto singolo",
    },
  "Salle de douche avec lavabo":
    {
      en: "Shower room with washbasin",
      de: "Duschbad mit Waschbecken",
      es: "Cuarto de ducha con lavabo",
      it: "Sala doccia con lavabo",
    },
  "Chambre avec lit double et lavabo":
    {
      en: "Bedroom with a double bed and washbasin",
      de: "Schlafzimmer mit Doppelbett und Waschbecken",
      es: "Dormitorio con cama doble y lavabo",
      it: "Camera con letto matrimoniale e lavabo",
    },
  "Table et 4 chaises":
    {
      en: "Table and 4 chairs",
      de: "Tisch und 4 Stühle",
      es: "Mesa y 4 sillas",
      it: "Tavolo e 4 sedie",
    },
  "Entrée de l'immeuble libre (on entre directement)":
    {
      en: "Building entrance open (you go straight in)",
      de: "Gebäudeeingang frei zugänglich (man geht direkt hinein)",
      es: "Entrada del edificio libre (se entra directamente)",
      it: "Ingresso del palazzo libero (si entra direttamente)",
    },
  "Code de la boîte communiqué par message":
    {
      en: "Key box code sent by message",
      de: "Code des Schlüsselkastens per Nachricht mitgeteilt",
      es: "Código de la caja comunicado por mensaje",
      it: "Codice della cassetta comunicato tramite messaggio",
    },
  "Salle d'eau avec douche":
    {
      en: "Shower room with shower",
      de: "Duschbad mit Dusche",
      es: "Aseo con ducha",
      it: "Bagno con doccia",
    },
  "Chambre avec lit double (140 × 190)":
    {
      en: "Bedroom with a double bed (140 × 190)",
      de: "Schlafzimmer mit Doppelbett (140 × 190)",
      es: "Dormitorio con cama doble (140 × 190)",
      it: "Camera con letto matrimoniale (140 × 190)",
    },
  "Salon avec canapé-lit d'appoint (140 × 190)":
    {
      en: "Living room with an extra sofa bed (140 × 190)",
      de: "Wohnzimmer mit zusätzlichem Schlafsofa (140 × 190)",
      es: "Salón con sofá cama supletorio (140 × 190)",
      it: "Soggiorno con divano letto aggiuntivo (140 × 190)",
    },
  "Salle d'eau avec douche, lavabo et WC":
    {
      en: "Shower room with shower, washbasin and toilet",
      de: "Duschbad mit Dusche, Waschbecken und WC",
      es: "Aseo con ducha, lavabo y WC",
      it: "Bagno con doccia, lavabo e WC",
    },
  "Marché couvert (La Halle)":
    {
      en: "Covered market (La Halle)",
      de: "Markthalle (La Halle)",
      es: "Mercado cubierto (La Halle)",
      it: "Mercato coperto (La Halle)",
    },
  "La Haute-Ville":
    {
      en: "The Upper Town",
      de: "Die Oberstadt",
      es: "La Ciudad Alta",
      it: "La Città Alta",
    },
  "Musée Christian Dior":
    {
      en: "Christian Dior Museum",
      de: "Christian-Dior-Museum",
      es: "Museo Christian Dior",
      it: "Museo Christian Dior",
    },
  "Musée d'Art moderne Richard Anacréon":
    {
      en: "Richard Anacréon Museum of Modern Art",
      de: "Richard-Anacréon-Museum für moderne Kunst",
      es: "Museo de Arte Moderno Richard Anacréon",
      it: "Museo d'Arte Moderna Richard Anacréon",
    },
  "Musée d'Art et d'Histoire de Granville":
    {
      en: "Granville Museum of Art and History",
      de: "Museum für Kunst und Geschichte von Granville",
      es: "Museo de Arte e Historia de Granville",
      it: "Museo d'Arte e Storia di Granville",
    },
  "Office de Tourisme Granville Terre et Mer":
    {
      en: "Granville Terre et Mer Tourist Office",
      de: "Touristeninformation Granville Terre et Mer",
      es: "Oficina de Turismo Granville Terre et Mer",
      it: "Ufficio del Turismo Granville Terre et Mer",
    },
  "Le sentier des douaniers (GR223)":
    {
      en: "The coastal customs path (GR223)",
      de: "Der Zöllnerpfad (GR223)",
      es: "El sendero de los aduaneros (GR223)",
      it: "Il sentiero dei doganieri (GR223)",
    },
  "Plage du Plat Gousset":
    {
      en: "Plat Gousset beach",
      de: "Strand Plat Gousset",
      es: "Playa del Plat Gousset",
      it: "Spiaggia del Plat Gousset",
    },
  "Plage de Hérel":
    {
      en: "Hérel beach",
      de: "Strand von Hérel",
      es: "Playa de Hérel",
      it: "Spiaggia di Hérel",
    },
  "Plage de Donville-les-Bains":
    {
      en: "Donville-les-Bains beach",
      de: "Strand von Donville-les-Bains",
      es: "Playa de Donville-les-Bains",
      it: "Spiaggia di Donville-les-Bains",
    },
  "Plage de Saint-Pair-sur-Mer":
    {
      en: "Saint-Pair-sur-Mer beach",
      de: "Strand von Saint-Pair-sur-Mer",
      es: "Playa de Saint-Pair-sur-Mer",
      it: "Spiaggia di Saint-Pair-sur-Mer",
    },
  "Cinéma Le Sélect":
    {
      en: "Le Sélect cinema",
      de: "Kino Le Sélect",
      es: "Cine Le Sélect",
      it: "Cinema Le Sélect",
    },
  "Casino de Granville":
    {
      en: "Granville Casino",
      de: "Casino von Granville",
      es: "Casino de Granville",
      it: "Casinò di Granville",
    },
  "Roc des Curiosités — Musée & Aquarium":
    {
      en: "Roc des Curiosités — Museum & Aquarium",
      de: "Roc des Curiosités — Museum & Aquarium",
      es: "Roc des Curiosités — Museo y Acuario",
      it: "Roc des Curiosités — Museo e Acquario",
    },
  "Centre Régional de Nautisme (CRNG)":
    {
      en: "Regional Sailing Centre (CRNG)",
      de: "Regionales Wassersportzentrum (CRNG)",
      es: "Centro Regional de Náutica (CRNG)",
      it: "Centro Regionale di Nautica (CRNG)",
    },
  "Restaurants du Vaugueux":
    {
      en: "Le Vaugueux restaurants",
      de: "Restaurants im Vaugueux",
      es: "Restaurantes del Vaugueux",
      it: "Ristoranti del Vaugueux",
    },
  "Château de Caen (~5 min)":
    {
      en: "Caen Castle (~5 min)",
      de: "Schloss von Caen (~5 Min.)",
      es: "Castillo de Caen (~5 min)",
      it: "Castello di Caen (~5 min)",
    },
  "Port de plaisance & marché du dimanche":
    {
      en: "Marina & Sunday market",
      de: "Yachthafen & Sonntagsmarkt",
      es: "Puerto deportivo y mercado del domingo",
      it: "Porto turistico & mercato della domenica",
    },
  "Boulangerie & tabac rue du Vaugueux":
    {
      en: "Bakery & tobacconist on Rue du Vaugueux",
      de: "Bäckerei & Tabakladen in der Rue du Vaugueux",
      es: "Panadería y estanco en la rue du Vaugueux",
      it: "Panetteria & tabacchi in rue du Vaugueux",
    },
  "Cinéma LUX":
    {
      en: "LUX cinema",
      de: "Kino LUX",
      es: "Cine LUX",
      it: "Cinema LUX",
    },
  "Boulangeries rue Saint-Pierre":
    {
      en: "Bakeries on Rue Saint-Pierre",
      de: "Bäckereien in der Rue Saint-Pierre",
      es: "Panaderías en la rue Saint-Pierre",
      it: "Panetterie in rue Saint-Pierre",
    },
  "Pharmacie du Vaugueux":
    {
      en: "Vaugueux pharmacy",
      de: "Apotheke Vaugueux",
      es: "Farmacia del Vaugueux",
      it: "Farmacia del Vaugueux",
    },
  "Pharmacie de la presqu'île":
    {
      en: "Peninsula pharmacy",
      de: "Apotheke der Halbinsel",
      es: "Farmacia de la península",
      it: "Farmacia della penisola",
    },
  "Rue Froide & ses commerces":
    {
      en: "Rue Froide & its shops",
      de: "Rue Froide & ihre Geschäfte",
      es: "Rue Froide y sus comercios",
      it: "Rue Froide e i suoi negozi",
    },
  "Rue Saint-Pierre (artère commerçante)":
    {
      en: "Rue Saint-Pierre (shopping street)",
      de: "Rue Saint-Pierre (Einkaufsstraße)",
      es: "Rue Saint-Pierre (calle comercial)",
      it: "Rue Saint-Pierre (via commerciale)",
    },
  "Pharmacie Saint-Pierre":
    {
      en: "Saint-Pierre pharmacy",
      de: "Apotheke Saint-Pierre",
      es: "Farmacia Saint-Pierre",
      it: "Farmacia Saint-Pierre",
    },
  "Casino de Houlgate (~3 min)":
    {
      en: "Houlgate Casino (~3 min)",
      de: "Casino von Houlgate (~3 Min.)",
      es: "Casino de Houlgate (~3 min)",
      it: "Casinò di Houlgate (~3 min)",
    },
  "Marché de Houlgate (centre, ~3–4 min)":
    {
      en: "Houlgate market (centre, ~3–4 min)",
      de: "Markt von Houlgate (Zentrum, ~3–4 Min.)",
      es: "Mercado de Houlgate (centro, ~3–4 min)",
      it: "Mercato di Houlgate (centro, ~3–4 min)",
    },
  "Office de tourisme (~4 min)":
    {
      en: "Tourist office (~4 min)",
      de: "Touristeninformation (~4 Min.)",
      es: "Oficina de turismo (~4 min)",
      it: "Ufficio del turismo (~4 min)",
    },
  "Plage de Houlgate":
    {
      en: "Houlgate beach",
      de: "Strand von Houlgate",
      es: "Playa de Houlgate",
      it: "Spiaggia di Houlgate",
    },
  "Falaises des Vaches Noires":
    {
      en: "Vaches Noires cliffs",
      de: "Klippen der Vaches Noires",
      es: "Acantilados de las Vaches Noires",
      it: "Scogliere delle Vaches Noires",
    },
  "Casino de Houlgate":
    {
      en: "Houlgate Casino",
      de: "Casino von Houlgate",
      es: "Casino de Houlgate",
      it: "Casinò di Houlgate",
    },
  "Pharmacie des Bains":
    {
      en: "Les Bains pharmacy",
      de: "Apotheke des Bains",
      es: "Farmacia des Bains",
      it: "Farmacia des Bains",
    },
  "Pharmacie de la Gare":
    {
      en: "Station pharmacy",
      de: "Bahnhofsapotheke",
      es: "Farmacia de la Estación",
      it: "Farmacia della Stazione",
    },
  "Pharmacie Le Saint":
    {
      en: "Le Saint pharmacy",
      de: "Apotheke Le Saint",
      es: "Farmacia Le Saint",
      it: "Farmacia Le Saint",
    },
  "Pharmacie Centrale":
    {
      en: "Central pharmacy",
      de: "Zentralapotheke",
      es: "Farmacia Central",
      it: "Farmacia Centrale",
    },
  "Stationnement payant autour de l'appartement.\nPlace Courtonne et sur le port (parking avec barrière).\nEn voirie : rues Basse, Buquet, des Prairies Saint-Gilles, du Vaugueux et Graindorge (payant de 9h à 12h30 et de 14h à 19h).\nParking souterrain du Château, tout proche.\n⚠️ Évitez le port le samedi soir : le marché s'y tient le dimanche matin.":
    {
      en: "Paid parking around the apartment.\nPlace Courtonne and at the harbour (car park with barrier).\nOn-street: Rues Basse, Buquet, des Prairies Saint-Gilles, du Vaugueux and Graindorge (paid 9 a.m.–12:30 p.m. and 2 p.m.–7 p.m.).\nChâteau underground car park, very close.\n⚠️ Avoid the harbour on Saturday evening: the market is held there on Sunday morning.",
      de: "Kostenpflichtiges Parken rund um die Wohnung.\nPlace Courtonne und am Hafen (Parkplatz mit Schranke).\nAm Straßenrand: Rues Basse, Buquet, des Prairies Saint-Gilles, du Vaugueux und Graindorge (kostenpflichtig 9–12:30 Uhr und 14–19 Uhr).\nTiefgarage Château, ganz in der Nähe.\n⚠️ Meiden Sie den Hafen am Samstagabend: Sonntagvormittag findet dort der Markt statt.",
      es: "Aparcamiento de pago alrededor del apartamento.\nPlace Courtonne y en el puerto (aparcamiento con barrera).\nEn la vía pública: rues Basse, Buquet, des Prairies Saint-Gilles, du Vaugueux y Graindorge (de pago de 9:00 a 12:30 y de 14:00 a 19:00).\nAparcamiento subterráneo del Château, muy cerca.\n⚠️ Evite el puerto el sábado por la noche: el mercado se celebra allí el domingo por la mañana.",
      it: "Parcheggio a pagamento intorno all'appartamento.\nPlace Courtonne e sul porto (parcheggio con sbarra).\nSu strada: rues Basse, Buquet, des Prairies Saint-Gilles, du Vaugueux e Graindorge (a pagamento dalle 9 alle 12:30 e dalle 14 alle 19).\nParcheggio sotterraneo del Château, molto vicino.\n⚠️ Evitate il porto il sabato sera: la domenica mattina vi si tiene il mercato.",
    },

  // ---------------------------------------------------------- Chez Malo (Caen)
  "Immeuble à la porte bleue, 8 bis rue Vauquelin": {
    en: "Building with the blue door, 8 bis rue Vauquelin",
    de: "Gebäude mit der blauen Tür, 8 bis rue Vauquelin",
    es: "Edificio de la puerta azul, 8 bis rue Vauquelin",
    it: "Edificio con la porta blu, 8 bis rue Vauquelin",
  },
  "Boîte à clés grise fixée sur la façade, juste à droite de la porte bleue": {
    en: "Grey key box fixed to the wall, just to the right of the blue door",
    de: "Grauer Schlüsseltresor an der Fassade, direkt rechts neben der blauen Tür",
    es: "Caja de llaves gris fijada en la fachada, justo a la derecha de la puerta azul",
    it: "Cassetta portachiavi grigia fissata sulla facciata, subito a destra della porta blu",
  },
  "La clé de la boîte ouvre la porte bleue de l'immeuble": {
    en: "The key from the box opens the building's blue door",
    de: "Der Schlüssel aus dem Tresor öffnet die blaue Haustür",
    es: "La llave de la caja abre la puerta azul del edificio",
    it: "La chiave della cassetta apre la porta blu dell'edificio",
  },
  "Le code de la boîte à clés vous est envoyé le jour de votre arrivée, vers 12h, sur la conversation": {
    en: "The key box code is sent to you in the conversation on the day of your arrival, around midday",
    de: "Den Code des Schlüsseltresors erhalten Sie am Anreisetag gegen 12 Uhr im Chat",
    es: "El código de la caja de llaves se le envía el día de su llegada, hacia las 12:00, en la conversación",
    it: "Il codice della cassetta portachiavi vi viene inviato il giorno del vostro arrivo, verso le 12, nella conversazione",
  },
  "Appartement au 2ᵉ étage, sans ascenseur": {
    en: "Flat on the 2nd floor, no lift",
    de: "Wohnung im 2. Stock, ohne Aufzug",
    es: "Apartamento en la 2.ª planta, sin ascensor",
    it: "Appartamento al 2° piano, senza ascensore",
  },
  "Rendez-vous au 8 bis rue Vauquelin, à Caen. L'immeuble se reconnaît à sa porte bleue et au numéro « 8 bis » sur la pierre.": {
    en: "Make your way to 8 bis rue Vauquelin, in Caen. You'll recognise the building by its blue door and the number “8 bis” on the stone.",
    de: "Begeben Sie sich zur 8 bis rue Vauquelin in Caen. Sie erkennen das Gebäude an seiner blauen Tür und der Nummer „8 bis“ auf dem Stein.",
    es: "Diríjase al 8 bis rue Vauquelin, en Caen. Reconocerá el edificio por su puerta azul y el número «8 bis» en la piedra.",
    it: "Recatevi all'8 bis rue Vauquelin, a Caen. Riconoscerete l'edificio dalla porta blu e dal numero « 8 bis » sulla pietra.",
  },
  "Une boîte à clés grise est fixée sur la façade, juste à droite de la porte bleue.": {
    en: "A grey key box is fixed to the wall, just to the right of the blue door.",
    de: "Ein grauer Schlüsseltresor ist an der Fassade angebracht, direkt rechts neben der blauen Tür.",
    es: "Hay una caja de llaves gris fijada en la fachada, justo a la derecha de la puerta azul.",
    it: "Una cassetta portachiavi grigia è fissata sulla facciata, subito a destra della porta blu.",
  },
  "Composez le code reçu sur la conversation le jour de votre arrivée, ouvrez la boîte comme le montre la vidéo ci-dessous, puis prenez la clé.": {
    en: "Enter the code sent to you in the conversation on the day of your arrival, open the box as shown in the video below, then take the key.",
    de: "Geben Sie den Code ein, den Sie am Anreisetag im Chat erhalten haben, öffnen Sie den Tresor wie im Video unten gezeigt und nehmen Sie den Schlüssel.",
    es: "Introduzca el código recibido en la conversación el día de su llegada, abra la caja como se muestra en el vídeo de abajo y coja la llave.",
    it: "Digitate il codice ricevuto nella conversazione il giorno del vostro arrivo, aprite la cassetta come mostrato nel video qui sotto e prendete la chiave.",
  },
  "Ouvrez la porte bleue de l'immeuble avec la clé.": {
    en: "Open the building's blue door with the key.",
    de: "Öffnen Sie die blaue Haustür mit dem Schlüssel.",
    es: "Abra la puerta azul del edificio con la llave.",
    it: "Aprite la porta blu dell'edificio con la chiave.",
  },
  "Montez au 2ᵉ étage (il n'y a pas d'ascenseur), jusqu'à la porte du logement.": {
    en: "Go up to the 2nd floor (there is no lift), to the door of the flat.",
    de: "Gehen Sie in den 2. Stock (es gibt keinen Aufzug), bis zur Wohnungstür.",
    es: "Suba a la 2.ª planta (no hay ascensor), hasta la puerta del alojamiento.",
    it: "Salite al 2° piano (non c'è ascensore), fino alla porta dell'alloggio.",
  },
  "Bienvenue et bon séjour ! ⚓": {
    en: "Welcome, and enjoy your stay! ⚓",
    de: "Willkommen und einen schönen Aufenthalt! ⚓",
    es: "¡Bienvenido y feliz estancia! ⚓",
    it: "Benvenuti e buon soggiorno! ⚓",
  },
  "Rue piétonne : pas de stationnement possible devant l'immeuble.\nStationnement dans les rues voisines : rue Quincampoix, Fossés Saint-Julien et rue Demolombe.\nParkings souterrains les plus pratiques : République et Paul Doumer, à quelques minutes à pied.": {
    en: "Pedestrian street: no parking in front of the building.\nParking in the neighbouring streets: rue Quincampoix, Fossés Saint-Julien and rue Demolombe.\nMost convenient underground car parks: République and Paul Doumer, a few minutes' walk away.",
    de: "Fußgängerstraße: Vor dem Gebäude ist kein Parken möglich.\nParken in den Nachbarstraßen: rue Quincampoix, Fossés Saint-Julien und rue Demolombe.\nPraktischste Tiefgaragen: République und Paul Doumer, wenige Gehminuten entfernt.",
    es: "Calle peatonal: no se puede aparcar delante del edificio.\nAparcamiento en las calles vecinas: rue Quincampoix, Fossés Saint-Julien y rue Demolombe.\nAparcamientos subterráneos más prácticos: République y Paul Doumer, a unos minutos a pie.",
    it: "Via pedonale: non è possibile parcheggiare davanti all'edificio.\nParcheggio nelle vie vicine: rue Quincampoix, Fossés Saint-Julien e rue Demolombe.\nParcheggi sotterranei più comodi: République e Paul Doumer, a pochi minuti a piedi.",
  },
  "Salon lumineux avec canapé, TV et table à manger (poutres apparentes, parquet en chevrons)": {
    en: "Bright living room with sofa, TV and dining table (exposed beams, herringbone parquet)",
    de: "Helles Wohnzimmer mit Sofa, TV und Esstisch (Sichtbalken, Fischgrätparkett)",
    es: "Salón luminoso con sofá, TV y mesa de comedor (vigas vistas, parqué en espiga)",
    it: "Soggiorno luminoso con divano, TV e tavolo da pranzo (travi a vista, parquet a spina di pesce)",
  },
  "Chambre avec lit Queen Size": {
    en: "Bedroom with queen-size bed",
    de: "Schlafzimmer mit Queensize-Bett",
    es: "Dormitorio con cama Queen Size",
    it: "Camera con letto queen size",
  },
  "Coin cuisine équipé (plaques de cuisson, hotte, micro-ondes, réfrigérateur avec congélateur)": {
    en: "Fitted kitchen area (hob, extractor hood, microwave, fridge with freezer)",
    de: "Ausgestattete Küchenzeile (Kochfeld, Dunstabzugshaube, Mikrowelle, Kühlschrank mit Gefrierfach)",
    es: "Rincón de cocina equipado (placa de cocción, campana extractora, microondas, nevera con congelador)",
    it: "Angolo cottura attrezzato (piano cottura, cappa, microonde, frigorifero con congelatore)",
  },
  "Salle de bain avec douche et WC": {
    en: "Bathroom with shower and toilet",
    de: "Badezimmer mit Dusche und WC",
    es: "Baño con ducha y WC",
    it: "Bagno con doccia e WC",
  },
  "Rideaux occultants dans toutes les pièces": {
    en: "Blackout curtains in every room",
    de: "Verdunkelungsvorhänge in allen Räumen",
    es: "Cortinas opacas en todas las habitaciones",
    it: "Tende oscuranti in tutte le stanze",
  },
  "À votre arrivée, vous trouverez à disposition : papier toilette, savon, gel douche et shampooing, une capsule de café par personne ainsi que du thé.": {
    en: "On arrival you will find: toilet paper, soap, shower gel and shampoo, one coffee capsule per person and some tea.",
    de: "Bei Ihrer Ankunft finden Sie vor: Toilettenpapier, Seife, Duschgel und Shampoo, eine Kaffeekapsel pro Person sowie Tee.",
    es: "A su llegada encontrará a su disposición: papel higiénico, jabón, gel de ducha y champú, una cápsula de café por persona y té.",
    it: "Al vostro arrivo troverete a disposizione: carta igienica, sapone, gel doccia e shampoo, una capsula di caffè a persona e del tè.",
  },
  "Les draps sont fournis et les lits sont faits à votre arrivée. Chaque voyageur dispose d'une serviette de toilette. Le linge est de qualité hôtelière, traité par une blanchisserie professionnelle.": {
    en: "Bed linen is provided and the beds are made on arrival. Each guest has a bath towel. The linen is hotel quality, laundered by a professional service.",
    de: "Bettwäsche wird gestellt und die Betten sind bei Ihrer Ankunft bezogen. Jeder Gast erhält ein Handtuch. Die Wäsche hat Hotelqualität und wird von einer professionellen Wäscherei aufbereitet.",
    es: "Las sábanas están incluidas y las camas están hechas a su llegada. Cada viajero dispone de una toalla de baño. La ropa de cama es de calidad hotelera, tratada por una lavandería profesional.",
    it: "Le lenzuola sono fornite e i letti sono rifatti al vostro arrivo. Ogni ospite dispone di un asciugamano. La biancheria è di qualità alberghiera, trattata da una lavanderia professionale.",
  },
  "Le logement est équipé du WiFi. Le nom du réseau et le mot de passe sont indiqués sur l'étiquette collée sous la box, dans le logement.": {
    en: "The flat has Wi-Fi. The network name and password are on the label stuck under the router, inside the flat.",
    de: "Die Wohnung verfügt über WLAN. Netzwerkname und Passwort stehen auf dem Aufkleber unter der Box in der Wohnung.",
    es: "El alojamiento dispone de wifi. El nombre de la red y la contraseña figuran en la etiqueta pegada debajo del router, en el alojamiento.",
    it: "L'alloggio è dotato di WiFi. Il nome della rete e la password sono indicati sull'etichetta applicata sotto il router, nell'alloggio.",
  },
  "🧺 Pas de lave-linge": {
    en: "🧺 No washing machine",
    de: "🧺 Keine Waschmaschine",
    es: "🧺 Sin lavadora",
    it: "🧺 Niente lavatrice",
  },
  "Le logement ne dispose pas de lave-linge. La laverie automatique la plus proche est le Lavomatique du coin de la rue Écuyère, en libre-service, à moins d'une minute à pied (sortez de l'immeuble, la rue Écuyère est juste au bout de la rue Vauquelin). Une autre laverie, Urban Wash, se trouve allée des Quatrans, au pied du château. Les deux sont dans « Autour de moi », rubrique Laverie.": {
    en: "The flat does not have a washing machine. The nearest launderette is the Lavomatique on the corner of rue Écuyère, self-service, less than a minute's walk away (leave the building — rue Écuyère is just at the end of rue Vauquelin). Another launderette, Urban Wash, is on allée des Quatrans, at the foot of the castle. Both are listed under “Around me”, in the Launderette section.",
    de: "Die Wohnung verfügt über keine Waschmaschine. Der nächstgelegene Waschsalon ist der Lavomatique an der Ecke zur Rue Écuyère, SB-Betrieb, weniger als eine Gehminute entfernt (aus dem Haus treten – die Rue Écuyère liegt direkt am Ende der Rue Vauquelin). Ein weiterer Waschsalon, Urban Wash, befindet sich in der Allée des Quatrans am Fuß der Burg. Beide finden Sie unter „In meiner Umgebung“, Rubrik Waschsalon.",
    es: "El alojamiento no dispone de lavadora. La lavandería más cercana es el Lavomatique de la esquina de la rue Écuyère, de autoservicio, a menos de un minuto a pie (al salir del edificio, la rue Écuyère está justo al final de la rue Vauquelin). Otra lavandería, Urban Wash, se encuentra en la allée des Quatrans, al pie del castillo. Las dos están en «A mi alrededor», sección Lavandería.",
    it: "L'alloggio non dispone di lavatrice. La lavanderia più vicina è il Lavomatique all'angolo di rue Écuyère, self-service, a meno di un minuto a piedi (uscite dall'edificio: rue Écuyère è proprio in fondo a rue Vauquelin). Un'altra lavanderia, Urban Wash, si trova in allée des Quatrans, ai piedi del castello. Entrambe sono in « Intorno a me », sezione Lavanderia.",
  },
  "Le coin cuisine est équipé de plaques de cuisson avec hotte, d'un four à micro-ondes et d'un réfrigérateur avec congélateur, ainsi que du nécessaire de cuisine (casseroles et poêles, vaisselle, couverts, verres à vin, huile, sel et poivre). Il n'y a ni four traditionnel ni lave-vaisselle : merci de laver et de ranger la vaisselle après usage.": {
    en: "The kitchen area has a hob with extractor hood, a microwave and a fridge with freezer, plus everything you need to cook (pots and pans, crockery, cutlery, wine glasses, oil, salt and pepper). There is no conventional oven and no dishwasher — please wash and put away the dishes after use.",
    de: "Die Küchenzeile ist mit Kochfeld und Dunstabzugshaube, Mikrowelle und Kühlschrank mit Gefrierfach ausgestattet sowie mit allem Nötigen zum Kochen (Töpfe und Pfannen, Geschirr, Besteck, Weingläser, Öl, Salz und Pfeffer). Es gibt weder Backofen noch Geschirrspüler – bitte spülen Sie das Geschirr nach Gebrauch ab und räumen Sie es weg.",
    es: "El rincón de cocina cuenta con placa de cocción y campana extractora, microondas y nevera con congelador, además de todo lo necesario para cocinar (ollas y sartenes, vajilla, cubiertos, copas de vino, aceite, sal y pimienta). No hay horno tradicional ni lavavajillas: le rogamos que lave y guarde la vajilla después de usarla.",
    it: "L'angolo cottura è dotato di piano cottura con cappa, forno a microonde e frigorifero con congelatore, oltre a tutto l'occorrente per cucinare (pentole e padelle, stoviglie, posate, calici da vino, olio, sale e pepe). Non ci sono né forno tradizionale né lavastoviglie: vi preghiamo di lavare e riporre le stoviglie dopo l'uso.",
  },
  "☕ Petit-déjeuner": {
    en: "☕ Breakfast",
    de: "☕ Frühstück",
    es: "☕ Desayuno",
    it: "☕ Colazione",
  },
  "Une cafetière, une bouilloire et un grille-pain sont à votre disposition. Une capsule de café par personne et du thé vous sont offerts pour démarrer.": {
    en: "A coffee maker, a kettle and a toaster are at your disposal. One coffee capsule per person and some tea are offered to get you started.",
    de: "Eine Kaffeemaschine, ein Wasserkocher und ein Toaster stehen Ihnen zur Verfügung. Eine Kaffeekapsel pro Person und Tee sind für den Anfang inklusive.",
    es: "Dispone de cafetera, hervidor de agua y tostadora. Le ofrecemos una cápsula de café por persona y té para empezar.",
    it: "Sono a vostra disposizione una macchina del caffè, un bollitore e un tostapane. Una capsula di caffè a persona e del tè vi sono offerti per iniziare.",
  },
  "🌙 Rideaux occultants": {
    en: "🌙 Blackout curtains",
    de: "🌙 Verdunkelungsvorhänge",
    es: "🌙 Cortinas opacas",
    it: "🌙 Tende oscuranti",
  },
  "Toutes les pièces sont équipées de rideaux occultants, pour des nuits reposantes et des matinées au calme.": {
    en: "Every room has blackout curtains, for restful nights and quiet mornings.",
    de: "Alle Räume sind mit Verdunkelungsvorhängen ausgestattet – für erholsame Nächte und ruhige Morgen.",
    es: "Todas las habitaciones cuentan con cortinas opacas, para noches reparadoras y mañanas tranquilas.",
    it: "Tutte le stanze sono dotate di tende oscuranti, per notti riposanti e mattine tranquille.",
  },
  "👶 Lit parapluie": {
    en: "👶 Travel cot",
    de: "👶 Reisebett",
    es: "👶 Cuna de viaje",
    it: "👶 Lettino da viaggio",
  },
  "Un lit parapluie est disponible dans le logement, si vous voyagez avec un bébé. Merci de nous le signaler à la réservation.": {
    en: "A travel cot is available in the flat if you are travelling with a baby. Please let us know when booking.",
    de: "In der Wohnung steht ein Reisebett zur Verfügung, falls Sie mit einem Baby reisen. Bitte teilen Sie uns das bei der Buchung mit.",
    es: "Hay una cuna de viaje disponible en el alojamiento si viaja con un bebé. Le rogamos que nos lo indique al reservar.",
    it: "Nell'alloggio è disponibile un lettino da viaggio, se viaggiate con un bambino piccolo. Vi preghiamo di segnalarcelo al momento della prenotazione.",
  },
  "🤫 Rue piétonne & voisinage": {
    en: "🤫 Pedestrian street & neighbours",
    de: "🤫 Fußgängerstraße & Nachbarschaft",
    es: "🤫 Calle peatonal y vecindario",
    it: "🤫 Via pedonale e vicinato",
  },
  "L'immeuble est une petite copropriété calme. Merci de veiller à la tranquillité du voisinage, dans le logement comme dans les parties communes (couloirs, escaliers), en particulier entre 22h00 et 8h00.": {
    en: "The building is a small, quiet residence. Please respect the neighbours' peace and quiet, both inside the flat and in the common areas (hallways, stairs), especially between 10 p.m. and 8 a.m.",
    de: "Das Gebäude ist eine kleine, ruhige Wohnanlage. Bitte achten Sie auf die Ruhe der Nachbarn, sowohl in der Wohnung als auch in den Gemeinschaftsbereichen (Flure, Treppenhaus), insbesondere zwischen 22 und 8 Uhr.",
    es: "El edificio es una pequeña comunidad tranquila. Le rogamos que respete la tranquilidad del vecindario, tanto en el alojamiento como en las zonas comunes (pasillos, escaleras), especialmente entre las 22:00 y las 8:00.",
    it: "L'edificio è un piccolo condominio tranquillo. Vi preghiamo di rispettare la quiete del vicinato, sia nell'alloggio sia nelle parti comuni (corridoi, scale), in particolare tra le 22:00 e le 8:00.",
  },
  "Cafetière": {
    en: "Coffee maker",
    de: "Kaffeemaschine",
    es: "Cafetera",
    it: "Macchina del caffè",
  },
  "Capacité maximale : 2 voyageurs. Logement non-fumeur : merci de descendre dans la rue pour fumer ou vapoter. Les animaux ne sont pas acceptés. Les fêtes et les soirées sont strictement interdites. L'appartement se situe au 2ᵉ étage (sans ascenseur), dans une petite copropriété calme : merci de veiller à la tranquillité du voisinage, dans le logement comme dans les parties communes.": {
    en: "Maximum capacity: 2 guests. Non-smoking accommodation: please go down to the street to smoke or vape. Pets are not allowed. Parties and gatherings are strictly forbidden. The flat is on the 2nd floor (no lift), in a small quiet residence: please respect the neighbours' peace and quiet, both inside the flat and in the common areas.",
    de: "Maximale Belegung: 2 Gäste. Nichtraucherunterkunft: Zum Rauchen oder Dampfen gehen Sie bitte auf die Straße. Haustiere sind nicht erlaubt. Partys und Feiern sind strengstens untersagt. Die Wohnung liegt im 2. Stock (ohne Aufzug) in einer kleinen, ruhigen Wohnanlage: Bitte achten Sie auf die Ruhe der Nachbarn, sowohl in der Wohnung als auch in den Gemeinschaftsbereichen.",
    es: "Capacidad máxima: 2 viajeros. Alojamiento para no fumadores: le rogamos que baje a la calle para fumar o vapear. No se admiten animales. Las fiestas y reuniones están estrictamente prohibidas. El apartamento se encuentra en la 2.ª planta (sin ascensor), en una pequeña comunidad tranquila: le rogamos que respete la tranquilidad del vecindario, tanto en el alojamiento como en las zonas comunes.",
    it: "Capienza massima: 2 ospiti. Alloggio per non fumatori: vi preghiamo di scendere in strada per fumare o svapare. Gli animali non sono ammessi. Feste e serate sono severamente vietate. L'appartamento si trova al 2° piano (senza ascensore), in un piccolo condominio tranquillo: vi preghiamo di rispettare la quiete del vicinato, sia nell'alloggio sia nelle parti comuni.",
  },
  "⚠️ Le camion poubelle ne passe pas rue Vauquelin : merci de ne jamais laisser vos sacs devant l'immeuble.\nDeux possibilités pour vos déchets ménagers, en sac fermé :\n• À tout moment : les bacs gris situés à côté des terrasses du restaurant La Médicis et du bar Le Chat Noir, juste à côté de l'immeuble.\n• Ou, après 18h uniquement : rue Saint-Pierre, rue Quincampoix ou rue Saint-Sauveur, toutes à une ou deux minutes à pied.\n🍷 Le verre ne se met pas avec les ordures ménagères : déposez-le dans le conteneur à verre du 28 rue Saint-Sauveur, à environ 2 minutes à pied.": {
    en: "⚠️ The bin lorry does not come down rue Vauquelin: please never leave your bags in front of the building.\nTwo options for your household waste, in a closed bag:\n• Any time: the grey bins next to the terraces of the restaurant La Médicis and the bar Le Chat Noir, right beside the building.\n• Or, after 6 p.m. only: on rue Saint-Pierre, rue Quincampoix or rue Saint-Sauveur, all one or two minutes' walk away.\n🍷 Glass does not go with household waste: take it to the glass container at 28 rue Saint-Sauveur, about a 2-minute walk away.",
    de: "⚠️ Die Müllabfuhr fährt nicht durch die Rue Vauquelin: Bitte stellen Sie Ihre Säcke niemals vor dem Gebäude ab.\nZwei Möglichkeiten für Ihren Hausmüll im verschlossenen Beutel:\n• Jederzeit: die grauen Tonnen neben den Terrassen des Restaurants La Médicis und der Bar Le Chat Noir, direkt neben dem Gebäude.\n• Oder, nur nach 18 Uhr: in der Rue Saint-Pierre, Rue Quincampoix oder Rue Saint-Sauveur, alle ein bis zwei Gehminuten entfernt.\n🍷 Glas gehört nicht in den Hausmüll: Bringen Sie es zum Glascontainer in der Rue Saint-Sauveur 28, etwa 2 Gehminuten entfernt.",
    es: "⚠️ El camión de la basura no pasa por la rue Vauquelin: le rogamos que nunca deje sus bolsas delante del edificio.\nDos opciones para sus residuos domésticos, en una bolsa cerrada:\n• En cualquier momento: los contenedores grises situados junto a las terrazas del restaurante La Médicis y del bar Le Chat Noir, justo al lado del edificio.\n• O, solo después de las 18:00: en la rue Saint-Pierre, la rue Quincampoix o la rue Saint-Sauveur, todas a uno o dos minutos a pie.\n🍷 El vidrio no va con la basura doméstica: deposítelo en el contenedor de vidrio del 28 rue Saint-Sauveur, a unos 2 minutos a pie.",
    it: "⚠️ Il camion della spazzatura non passa in rue Vauquelin: vi preghiamo di non lasciare mai i vostri sacchi davanti all'edificio.\nDue possibilità per i vostri rifiuti domestici, in un sacchetto chiuso:\n• In qualsiasi momento: i bidoni grigi accanto alle terrazze del ristorante La Médicis e del bar Le Chat Noir, proprio accanto all'edificio.\n• Oppure, solo dopo le 18: in rue Saint-Pierre, rue Quincampoix o rue Saint-Sauveur, tutte a uno o due minuti a piedi.\n🍷 Il vetro non va con i rifiuti domestici: portatelo al contenitore del vetro al 28 rue Saint-Sauveur, a circa 2 minuti a piedi.",
  },
  "Faire la vaisselle et la ranger": {
    en: "Wash the dishes and put them away",
    de: "Das Geschirr abspülen und wegräumen",
    es: "Lavar la vajilla y guardarla",
    it: "Lavare le stoviglie e riporle",
  },
  "Rassembler vos déchets dans un sac fermé et le déposer en suivant les consignes « Poubelles » ci-dessous": {
    en: "Gather your waste in a closed bag and put it out following the “Bins” instructions below",
    de: "Ihren Abfall in einem verschlossenen Beutel sammeln und ihn gemäß den Hinweisen „Müll“ unten entsorgen",
    es: "Reunir sus residuos en una bolsa cerrada y depositarla siguiendo las indicaciones «Basura» de abajo",
    it: "Raccogliere i rifiuti in un sacchetto chiuso e depositarlo seguendo le indicazioni « Rifiuti » qui sotto",
  },
  "Chambre séparée (lit Queen Size)": {
    en: "Separate bedroom (queen-size bed)",
    de: "Separates Schlafzimmer (Queensize-Bett)",
    es: "Dormitorio independiente (cama Queen Size)",
    it: "Camera separata (letto queen size)",
  },
  "Rideaux occultants": {
    en: "Blackout curtains",
    de: "Verdunkelungsvorhänge",
    es: "Cortinas opacas",
    it: "Tende oscuranti",
  },
  "Dépôt de bagages": {
    en: "Luggage drop-off",
    de: "Gepäckaufbewahrung",
    es: "Consigna de equipaje",
    it: "Deposito bagagli",
  },
  "Fermer l'appartement à clé, puis remettre la clé dans la boîte à clés": {
    en: "Lock the flat, then put the key back in the key box",
    de: "Die Wohnung abschließen und den Schlüssel wieder in den Schlüsseltresor legen",
    es: "Cerrar el apartamento con llave y devolver la llave a la caja de llaves",
    it: "Chiudere a chiave l'appartamento e rimettere la chiave nella cassetta portachiavi",
  },
  "Rue Écuyère & rue de Bras — bars et restaurants (~1 min)": {
    en: "Rue Écuyère & rue de Bras — bars and restaurants (~1 min)",
    de: "Rue Écuyère & Rue de Bras – Bars und Restaurants (~1 Min.)",
    es: "Rue Écuyère y rue de Bras — bares y restaurantes (~1 min)",
    it: "Rue Écuyère e rue de Bras — bar e ristoranti (~1 min)",
  },
  "Place Saint-Sauveur et ses terrasses (~2 min)": {
    en: "Place Saint-Sauveur and its terraces (~2 min)",
    de: "Place Saint-Sauveur und seine Terrassen (~2 Min.)",
    es: "Place Saint-Sauveur y sus terrazas (~2 min)",
    it: "Place Saint-Sauveur e le sue terrazze (~2 min)",
  },
  "Rue Froide & ses commerces (~3 min)": {
    en: "Rue Froide & its shops (~3 min)",
    de: "Rue Froide & ihre Geschäfte (~3 Min.)",
    es: "Rue Froide y sus comercios (~3 min)",
    it: "Rue Froide e i suoi negozi (~3 min)",
  },
  "Église Saint-Pierre (~6 min)": {
    en: "Saint-Pierre church (~6 min)",
    de: "Kirche Saint-Pierre (~6 Min.)",
    es: "Iglesia Saint-Pierre (~6 min)",
    it: "Chiesa di Saint-Pierre (~6 min)",
  },
  "Château de Caen (~8 min)": {
    en: "Caen Castle (~8 min)",
    de: "Burg von Caen (~8 Min.)",
    es: "Castillo de Caen (~8 min)",
    it: "Castello di Caen (~8 min)",
  },
  "Le port de plaisance & le quai Vendeuvre (~10 min)": {
    en: "The marina & quai Vendeuvre (~10 min)",
    de: "Der Yachthafen & Quai Vendeuvre (~10 Min.)",
    es: "El puerto deportivo y el quai Vendeuvre (~10 min)",
    it: "Il porto turistico e il quai Vendeuvre (~10 min)",
  },
  "Vous êtes en plein cœur historique de Caen, dans une petite rue piétonne juste à côté de la rue Écuyère et de la place Saint-Sauveur — le quartier des terrasses, des bars et des restaurants. Tout le centre-ville, le château, le port et les rues commerçantes se font à pied, et le tram vous emmène à la gare en quelques minutes.": {
    en: "You are right in the historic heart of Caen, on a small pedestrian street just off rue Écuyère and place Saint-Sauveur — the district of terraces, bars and restaurants. The whole town centre, the castle, the harbour and the shopping streets are all within walking distance, and the tram takes you to the station in a few minutes.",
    de: "Sie befinden sich mitten im historischen Zentrum von Caen, in einer kleinen Fußgängerstraße direkt neben der Rue Écuyère und dem Place Saint-Sauveur – dem Viertel der Terrassen, Bars und Restaurants. Die gesamte Innenstadt, die Burg, der Hafen und die Einkaufsstraßen sind zu Fuß erreichbar, und die Straßenbahn bringt Sie in wenigen Minuten zum Bahnhof.",
    es: "Se encuentra en pleno corazón histórico de Caen, en una pequeña calle peatonal justo al lado de la rue Écuyère y de la place Saint-Sauveur, el barrio de las terrazas, los bares y los restaurantes. Todo el centro, el castillo, el puerto y las calles comerciales están a pie, y el tranvía le lleva a la estación en pocos minutos.",
    it: "Vi trovate nel cuore storico di Caen, in una piccola via pedonale proprio accanto a rue Écuyère e place Saint-Sauveur, il quartiere delle terrazze, dei bar e dei ristoranti. Tutto il centro, il castello, il porto e le vie dello shopping sono raggiungibili a piedi, e il tram vi porta alla stazione in pochi minuti.",
  },
  "La laverie automatique la plus proche, en libre-service, au coin de la rue Écuyère — à moins d'une minute à pied. Utile : le logement n'a pas de lave-linge.": {
    en: "The nearest self-service launderette, on the corner of rue Écuyère — less than a minute's walk away. Handy, as the flat has no washing machine.",
    de: "Der nächstgelegene SB-Waschsalon, an der Ecke zur Rue Écuyère – weniger als eine Gehminute entfernt. Praktisch, da die Wohnung keine Waschmaschine hat.",
    es: "La lavandería de autoservicio más cercana, en la esquina de la rue Écuyère, a menos de un minuto a pie. Útil: el alojamiento no tiene lavadora.",
    it: "La lavanderia automatica più vicina, self-service, all'angolo di rue Écuyère — a meno di un minuto a piedi. Utile: l'alloggio non ha la lavatrice.",
  },
  "Autre laverie automatique en libre-service, allée des Quatrans, au pied du château.": {
    en: "Another self-service launderette, on allée des Quatrans, at the foot of the castle.",
    de: "Ein weiterer SB-Waschsalon in der Allée des Quatrans, am Fuß der Burg.",
    es: "Otra lavandería de autoservicio, en la allée des Quatrans, al pie del castillo.",
    it: "Un'altra lavanderia automatica self-service, in allée des Quatrans, ai piedi del castello.",
  },
  "Commencez par flâner dans la rue Froide et les ruelles pavées du vieux Caen, juste à côté, puis montez au château pour la vue et le Musée des Beaux-Arts. Le soir, le quartier du Vaugueux et les terrasses du port sont les meilleures adresses pour dîner. Et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !": {
    en: "Start by strolling along rue Froide and the cobbled lanes of old Caen, right next door, then head up to the castle for the view and the Fine Arts Museum. In the evening, the Vaugueux quarter and the harbour terraces are the best places to dine. And for the food lovers, try tripes à la mode de Caen, the local speciality!",
    de: "Schlendern Sie zunächst durch die Rue Froide und die gepflasterten Gassen der Altstadt von Caen, gleich nebenan, und steigen Sie dann hinauf zur Burg – wegen der Aussicht und des Museums der Schönen Künste. Abends sind das Viertel Vaugueux und die Terrassen am Hafen die besten Adressen zum Essen. Und für Feinschmecker: Probieren Sie die Tripes à la mode de Caen, die lokale Spezialität!",
    es: "Empiece paseando por la rue Froide y las callejuelas empedradas del viejo Caen, justo al lado, y suba luego al castillo por las vistas y el Museo de Bellas Artes. Por la noche, el barrio del Vaugueux y las terrazas del puerto son las mejores direcciones para cenar. Y para los golosos, ¡pruebe los tripes à la mode de Caen, la especialidad local!",
    it: "Iniziate passeggiando in rue Froide e nei vicoli acciottolati della vecchia Caen, proprio accanto, poi salite al castello per la vista e il Museo delle Belle Arti. La sera, il quartiere del Vaugueux e le terrazze del porto sono gli indirizzi migliori per cenare. E per i golosi, assaggiate le tripes à la mode de Caen, la specialità locale!",
  },

  // ------------------------------------------------- Mémorial (Caen)
  "Bienvenue dans l'appartement Mémorial ! Vous êtes juste en face du Mémorial de Caen et du parc de la Colline aux Oiseaux, dans un quartier calme et verdoyant, à 10 minutes du centre-ville et de la mer. L'appartement est lumineux, exposé sud-est, avec un balcon parfait pour le café du matin. Très bon séjour à Caen ! 🕊️": {
    en: "Welcome to the Mémorial apartment! You're right opposite the Caen Memorial and the Colline aux Oiseaux park, in a quiet, leafy neighbourhood, 10 minutes from the city centre and the sea. The apartment is bright, facing south-east, with a balcony that's perfect for your morning coffee. Enjoy your stay in Caen! 🕊️",
    de: "Willkommen in der Wohnung Mémorial! Sie wohnen direkt gegenüber dem Mémorial de Caen und dem Park Colline aux Oiseaux, in einem ruhigen, grünen Viertel, 10 Minuten vom Stadtzentrum und vom Meer entfernt. Die Wohnung ist hell, nach Südosten ausgerichtet, mit einem Balkon, der sich perfekt für den Morgenkaffee eignet. Einen schönen Aufenthalt in Caen! 🕊️",
    es: "¡Bienvenido al apartamento Mémorial! Está justo enfrente del Memorial de Caen y del parque de la Colline aux Oiseaux, en un barrio tranquilo y verde, a 10 minutos del centro y del mar. El apartamento es luminoso, orientado al sureste, con un balcón perfecto para el café de la mañana. ¡Feliz estancia en Caen! 🕊️",
    it: "Benvenuti nell'appartamento Mémorial! Vi trovate proprio di fronte al Mémorial de Caen e al parco della Colline aux Oiseaux, in un quartiere tranquillo e verde, a 10 minuti dal centro città e dal mare. L'appartamento è luminoso, esposto a sud-est, con un balcone perfetto per il caffè del mattino. Buon soggiorno a Caen! 🕊️",
  },
  "⚠️ Deux étapes : la boîte à clés se trouve au 46 rue Caponière, puis vous rejoignez le logement au 18 avenue Maréchal Montgomery (~2,2 km, ~8 min en voiture)": {
    en: "⚠️ Two stops: the key box is at 46 rue Caponière, then you head to the apartment at 18 avenue Maréchal Montgomery (~2.2 km, ~8 min by car)",
    de: "⚠️ Zwei Etappen: Der Schlüsselkasten befindet sich in der 46 rue Caponière, danach fahren Sie zur Wohnung in der 18 avenue Maréchal Montgomery (~2,2 km, ~8 Min. mit dem Auto)",
    es: "⚠️ Dos etapas: la caja de llaves está en el 46 rue Caponière y después se dirige al alojamiento, en el 18 avenue Maréchal Montgomery (~2,2 km, ~8 min en coche)",
    it: "⚠️ Due tappe: la cassetta delle chiavi si trova al 46 rue Caponière, poi raggiungete l'alloggio al 18 avenue Maréchal Montgomery (~2,2 km, ~8 min in auto)",
  },
  "La boîte à clés contient le badge de la résidence, la clé de l'appartement et la clé du local poubelles": {
    en: "The key box contains the building access badge, the apartment key and the bin room key",
    de: "Im Schlüsselkasten finden Sie den Zugangsbadge für die Wohnanlage, den Wohnungsschlüssel und den Schlüssel für den Müllraum",
    es: "La caja de llaves contiene el mando de acceso a la residencia, la llave del apartamento y la llave del cuarto de basuras",
    it: "La cassetta delle chiavi contiene il badge di accesso al residence, la chiave dell'appartamento e la chiave del locale rifiuti",
  },
  "Le code de la boîte à clés vous est envoyé par message une fois le logement prêt": {
    en: "The key box code is sent to you by message once the apartment is ready",
    de: "Den Code des Schlüsselkastens erhalten Sie per Nachricht, sobald die Wohnung bereit ist",
    es: "El código de la caja de llaves se le envía por mensaje una vez que el alojamiento está listo",
    it: "Il codice della cassetta delle chiavi vi viene inviato per messaggio una volta che l'alloggio è pronto",
  },
  "Résidence sécurisée avec ascenseur : le badge ouvre la porte de l'immeuble, puis montez au 3ᵉ étage": {
    en: "Secure residence with a lift: the badge opens the building door, then go up to the 3rd floor",
    de: "Gesicherte Wohnanlage mit Aufzug: Der Badge öffnet die Haustür, danach geht es in den 3. Stock",
    es: "Residencia segura con ascensor: el mando abre la puerta del edificio y después suba a la 3.ª planta",
    it: "Residence sicuro con ascensore: il badge apre il portone dell'edificio, poi salite al 3° piano",
  },
  "Première étape : rendez-vous au 46 rue Caponière, à Caen. C'est là que se trouve la boîte à clés — pas à l'adresse du logement. Comptez ce détour dans votre trajet.": {
    en: "First stop: go to 46 rue Caponière in Caen. That's where the key box is — not at the apartment address. Do factor this detour into your journey.",
    de: "Erste Etappe: Fahren Sie zur 46 rue Caponière in Caen. Dort befindet sich der Schlüsselkasten – nicht an der Adresse der Wohnung. Planen Sie diesen Umweg ein.",
    es: "Primera etapa: diríjase al 46 rue Caponière, en Caen. Allí está la caja de llaves, no en la dirección del alojamiento. Tenga en cuenta este desvío en su trayecto.",
    it: "Prima tappa: recatevi al 46 rue Caponière, a Caen. È lì che si trova la cassetta delle chiavi, non all'indirizzo dell'alloggio. Tenete conto di questa deviazione nel vostro tragitto.",
  },
  "Composez le code de la boîte à clés (il vous est envoyé par message une fois le logement prêt) et récupérez son contenu : le badge d'accès à la résidence, la clé de l'appartement et la petite clé du local poubelles. Pensez à refermer la boîte et à brouiller le code.": {
    en: "Enter the key box code (sent to you by message once the apartment is ready) and take out its contents: the residence access badge, the apartment key and the small bin room key. Remember to close the box and scramble the code.",
    de: "Geben Sie den Code des Schlüsselkastens ein (Sie erhalten ihn per Nachricht, sobald die Wohnung bereit ist) und nehmen Sie den Inhalt heraus: den Zugangsbadge für die Wohnanlage, den Wohnungsschlüssel und den kleinen Schlüssel für den Müllraum. Denken Sie daran, den Kasten wieder zu schließen und den Code zu verstellen.",
    es: "Introduzca el código de la caja de llaves (se le envía por mensaje una vez que el alojamiento está listo) y recoja su contenido: el mando de acceso a la residencia, la llave del apartamento y la pequeña llave del cuarto de basuras. No olvide cerrar la caja y descomponer el código.",
    it: "Componete il codice della cassetta delle chiavi (vi viene inviato per messaggio una volta che l'alloggio è pronto) e prelevatene il contenuto: il badge di accesso al residence, la chiave dell'appartamento e la piccola chiave del locale rifiuti. Ricordatevi di richiudere la cassetta e di azzerare il codice.",
  },
  "Deuxième étape : rejoignez le logement au 18 avenue Maréchal Montgomery, 14000 Caen — environ 2,2 km, soit 8 minutes en voiture. Le bâtiment est situé juste en face du Mémorial de Caen.": {
    en: "Second stop: head to the apartment at 18 avenue Maréchal Montgomery, 14000 Caen — about 2.2 km, roughly 8 minutes by car. The building is right opposite the Caen Memorial.",
    de: "Zweite Etappe: Fahren Sie zur Wohnung in der 18 avenue Maréchal Montgomery, 14000 Caen – etwa 2,2 km, rund 8 Minuten mit dem Auto. Das Gebäude liegt direkt gegenüber dem Mémorial de Caen.",
    es: "Segunda etapa: diríjase al alojamiento, en el 18 avenue Maréchal Montgomery, 14000 Caen — unos 2,2 km, es decir, 8 minutos en coche. El edificio está justo enfrente del Memorial de Caen.",
    it: "Seconda tappa: raggiungete l'alloggio al 18 avenue Maréchal Montgomery, 14000 Caen — circa 2,2 km, ossia 8 minuti in auto. L'edificio si trova proprio di fronte al Mémorial de Caen.",
  },
  "Garez-vous dans l'une des rues adjacentes : le stationnement y est gratuit et il y a presque toujours de la place. La résidence ne dispose pas de place attribuée.": {
    en: "Park in one of the nearby streets: parking is free there and there is almost always space. The residence has no allocated parking space.",
    de: "Parken Sie in einer der angrenzenden Straßen: Das Parken ist dort kostenlos und es ist fast immer ein Platz frei. Die Wohnanlage verfügt über keinen zugewiesenen Stellplatz.",
    es: "Aparque en una de las calles adyacentes: el estacionamiento es gratuito y casi siempre hay sitio. La residencia no dispone de plaza asignada.",
    it: "Parcheggiate in una delle vie adiacenti: la sosta è gratuita e c'è quasi sempre posto. Il residence non dispone di un posto auto assegnato.",
  },
  "Présentez le badge devant la porte de la résidence pour l'ouvrir, puis prenez l'ascenseur jusqu'au 3ᵉ étage.": {
    en: "Hold the badge up to the residence door to open it, then take the lift up to the 3rd floor.",
    de: "Halten Sie den Badge vor die Tür der Wohnanlage, um sie zu öffnen, und nehmen Sie dann den Aufzug in den 3. Stock.",
    es: "Acerque el mando a la puerta de la residencia para abrirla y suba en ascensor hasta la 3.ª planta.",
    it: "Avvicinate il badge alla porta del residence per aprirla, poi prendete l'ascensore fino al 3° piano.",
  },
  "Ouvrez la porte de l'appartement avec la clé. Bienvenue chez vous ! ⚠️ Ne laissez jamais les clés à l'intérieur.": {
    en: "Open the apartment door with the key. Welcome home! ⚠️ Never leave the keys inside.",
    de: "Öffnen Sie die Wohnungstür mit dem Schlüssel. Herzlich willkommen! ⚠️ Lassen Sie die Schlüssel niemals drinnen liegen.",
    es: "Abra la puerta del apartamento con la llave. ¡Bienvenido a su casa! ⚠️ No deje nunca las llaves dentro.",
    it: "Aprite la porta dell'appartamento con la chiave. Benvenuti a casa! ⚠️ Non lasciate mai le chiavi all'interno.",
  },
  "La résidence ne dispose pas de place de stationnement attribuée.\nLe stationnement est gratuit dans les rues adjacentes (avenue Maréchal Montgomery et alentours) et il est généralement très facile de se garer, y compris en pleine saison.\nUne borne de recharge pour véhicule électrique est disponible sur place.": {
    en: "The residence has no allocated parking space.\nParking is free in the surrounding streets (avenue Maréchal Montgomery and nearby) and it is usually very easy to find a spot, even in high season.\nAn electric vehicle charging point is available on site.",
    de: "Die Wohnanlage verfügt über keinen zugewiesenen Stellplatz.\nIn den angrenzenden Straßen (avenue Maréchal Montgomery und Umgebung) ist das Parken kostenlos, und man findet in der Regel sehr leicht einen Platz, auch in der Hochsaison.\nEine Ladestation für Elektrofahrzeuge ist vor Ort vorhanden.",
    es: "La residencia no dispone de plaza de aparcamiento asignada.\nEl estacionamiento es gratuito en las calles adyacentes (avenue Maréchal Montgomery y alrededores) y suele ser muy fácil aparcar, incluso en plena temporada.\nHay un punto de recarga para vehículos eléctricos en el edificio.",
    it: "Il residence non dispone di un posto auto assegnato.\nLa sosta è gratuita nelle vie adiacenti (avenue Maréchal Montgomery e dintorni) ed è generalmente molto facile parcheggiare, anche in piena stagione.\nUna colonnina di ricarica per veicoli elettrici è disponibile in loco.",
  },
  "Entrée avec placard": {
    en: "Entrance hall with a closet",
    de: "Diele mit Einbauschrank",
    es: "Entrada con armario",
    it: "Ingresso con armadio",
  },
  "Grand séjour avec deux canapés, dont un canapé-lit 1 place, et TV": {
    en: "Large living room with two sofas, one of them a single sofa bed, and a TV",
    de: "Großes Wohnzimmer mit zwei Sofas, davon ein Schlafsofa für eine Person, und TV",
    es: "Amplio salón con dos sofás, uno de ellos sofá cama individual, y televisión",
    it: "Ampio soggiorno con due divani, di cui un divano letto singolo, e TV",
  },
  "Chambre avec lit double et parquet flottant": {
    en: "Bedroom with a double bed and laminate flooring",
    de: "Schlafzimmer mit Doppelbett und Laminatboden",
    es: "Dormitorio con cama de matrimonio y suelo laminado",
    it: "Camera con letto matrimoniale e pavimento in laminato",
  },
  "Salle de bains avec baignoire et lave-linge": {
    en: "Bathroom with a bathtub and a washing machine",
    de: "Badezimmer mit Badewanne und Waschmaschine",
    es: "Cuarto de baño con bañera y lavadora",
    it: "Bagno con vasca e lavatrice",
  },
  "Balcon privatif exposé sud-est, avec mobilier d'extérieur": {
    en: "Private south-east facing balcony with outdoor furniture",
    de: "Privater, nach Südosten ausgerichteter Balkon mit Gartenmöbeln",
    es: "Balcón privado orientado al sureste, con mobiliario de exterior",
    it: "Balcone privato esposto a sud-est, con mobili da esterno",
  },
  "À votre arrivée, vous trouverez à disposition : papier toilette, savon, une miniature de gel douche/shampooing par personne, sel, poivre et huile, ainsi que du produit vaisselle et une éponge.": {
    en: "On arrival you'll find: toilet paper, soap, a travel-size shower gel/shampoo per guest, salt, pepper and oil, plus washing-up liquid and a sponge.",
    de: "Bei Ihrer Ankunft finden Sie vor: Toilettenpapier, Seife, ein Reisefläschchen Duschgel/Shampoo pro Person, Salz, Pfeffer und Öl sowie Spülmittel und einen Schwamm.",
    es: "A su llegada encontrará a su disposición: papel higiénico, jabón, una miniatura de gel de ducha/champú por persona, sal, pimienta y aceite, además de lavavajillas y una esponja.",
    it: "Al vostro arrivo troverete a disposizione: carta igienica, sapone, una confezione mignon di bagnoschiuma/shampoo a persona, sale, pepe e olio, oltre a detersivo per piatti e una spugna.",
  },
  "🛌 Couchages": {
    en: "🛌 Sleeping arrangements",
    de: "🛌 Schlafplätze",
    es: "🛌 Camas",
    it: "🛌 Posti letto",
  },
  "L'appartement accueille 3 personnes :\n• la chambre dispose d'un lit double ;\n• le séjour dispose d'un canapé-lit 1 place.\n\nLes draps sont fournis pour ces deux couchages. Un matelas d'appoint 1 place est également rangé sous le lit de la chambre : il peut dépanner, mais les draps ne sont pas fournis pour celui-ci — pensez à apporter les vôtres si vous souhaitez l'utiliser.": {
    en: "The apartment sleeps 3:\n• the bedroom has a double bed;\n• the living room has a single sofa bed.\n\nBed linen is provided for both. A spare single mattress is also stored under the bedroom bed: it can help out in a pinch, but no bed linen is provided for it — do bring your own if you'd like to use it.",
    de: "Die Wohnung bietet Platz für 3 Personen:\n• das Schlafzimmer verfügt über ein Doppelbett;\n• das Wohnzimmer verfügt über ein Schlafsofa für eine Person.\n\nFür beide Schlafplätze wird Bettwäsche gestellt. Unter dem Bett im Schlafzimmer liegt außerdem eine zusätzliche Einzelmatratze: Sie kann im Notfall aushelfen, allerdings wird dafür keine Bettwäsche gestellt – bringen Sie bitte Ihre eigene mit, wenn Sie sie nutzen möchten.",
    es: "El apartamento acoge a 3 personas:\n• el dormitorio dispone de una cama de matrimonio;\n• el salón dispone de un sofá cama individual.\n\nLas sábanas están incluidas para ambas camas. Bajo la cama del dormitorio hay además un colchón supletorio individual: puede sacar de un apuro, pero no se facilitan sábanas para él; traiga las suyas si desea utilizarlo.",
    it: "L'appartamento ospita 3 persone:\n• la camera dispone di un letto matrimoniale;\n• il soggiorno dispone di un divano letto singolo.\n\nLa biancheria è fornita per entrambi i posti letto. Sotto il letto della camera è riposto anche un materasso singolo supplementare: può tornare utile, ma per questo non viene fornita la biancheria — portate la vostra se desiderate utilizzarlo.",
  },
  "Les draps sont fournis et le lit de la chambre est fait ; les draps du canapé-lit sont eux aussi fournis. Chaque voyageur dispose d'une serviette de toilette ; un tapis de bain et un torchon de cuisine sont également mis à votre disposition. Des cintres et un étendoir à linge sont à votre disposition.": {
    en: "Bed linen is provided and the bedroom bed is made up; linen for the sofa bed is provided too. Each guest has a bath towel; a bath mat and a tea towel are also provided. Hangers and a clothes airer are available.",
    de: "Bettwäsche wird gestellt und das Bett im Schlafzimmer ist bezogen; auch für das Schlafsofa liegt Bettwäsche bereit. Jeder Gast erhält ein Handtuch; ein Badvorleger und ein Geschirrtuch stehen ebenfalls bereit. Kleiderbügel und ein Wäscheständer sind vorhanden.",
    es: "Las sábanas están incluidas y la cama del dormitorio está hecha; las sábanas del sofá cama también se facilitan. Cada viajero dispone de una toalla; también se facilitan una alfombrilla de baño y un paño de cocina. Hay perchas y un tendedero a su disposición.",
    it: "Le lenzuola sono fornite e il letto della camera è già rifatto; anche le lenzuola del divano letto sono fornite. Ogni ospite dispone di un asciugamano; sono inoltre a disposizione un tappetino da bagno e uno strofinaccio da cucina. Sono disponibili grucce e uno stendibiancheria.",
  },
  "La salle de bains dispose d'une baignoire avec douche et d'un sèche-cheveux. Les WC sont séparés. Merci de bien refermer le rideau pour éviter les éclaboussures.": {
    en: "The bathroom has a bathtub with a shower and a hairdryer. The toilet is separate. Please close the shower curtain properly to avoid splashes.",
    de: "Das Badezimmer verfügt über eine Badewanne mit Dusche und einen Haartrockner. Das WC ist separat. Bitte ziehen Sie den Duschvorhang richtig zu, um Spritzer zu vermeiden.",
    es: "El cuarto de baño dispone de bañera con ducha y secador de pelo. El WC está separado. Cierre bien la cortina para evitar salpicaduras.",
    it: "Il bagno dispone di vasca con doccia e di un asciugacapelli. Il WC è separato. Vi preghiamo di chiudere bene la tenda per evitare schizzi.",
  },
  "Un lave-linge se trouve dans la salle de bains. Utilisez une petite dose de lessive et lancez un programme court. Il n'y a pas de sèche-linge : merci d'étendre le linge sur l'étendoir plutôt que de le laisser dans le tambour.": {
    en: "There is a washing machine in the bathroom. Use a small dose of detergent and run a short cycle. There is no tumble dryer: please hang your laundry on the airer rather than leaving it in the drum.",
    de: "Im Badezimmer befindet sich eine Waschmaschine. Verwenden Sie eine kleine Menge Waschmittel und wählen Sie ein Kurzprogramm. Es gibt keinen Trockner: Bitte hängen Sie die Wäsche auf den Wäscheständer, statt sie in der Trommel zu lassen.",
    es: "En el cuarto de baño hay una lavadora. Utilice una dosis pequeña de detergente y ponga un programa corto. No hay secadora: tienda la ropa en el tendedero en lugar de dejarla en el tambor.",
    it: "In bagno si trova una lavatrice. Usate una piccola dose di detersivo e avviate un programma breve. Non c'è l'asciugatrice: vi preghiamo di stendere il bucato sullo stendibiancheria invece di lasciarlo nel cestello.",
  },
  "La cuisine, séparée du séjour, est entièrement équipée : réfrigérateur, congélateur, micro-ondes, bouilloire, cafetière et grille-pain, ainsi que la vaisselle, les couverts, les verres à vin et tout le nécessaire de cuisine (casseroles, poêles, huile, sel et poivre). Une table à manger vous attend pour les repas.": {
    en: "The kitchen, separate from the living room, is fully equipped: fridge, freezer, microwave, kettle, coffee maker and toaster, along with crockery, cutlery, wine glasses and everything you need to cook (pots, pans, oil, salt and pepper). A dining table awaits you for meals.",
    de: "Die vom Wohnzimmer getrennte Küche ist voll ausgestattet: Kühlschrank, Gefrierschrank, Mikrowelle, Wasserkocher, Kaffeemaschine und Toaster sowie Geschirr, Besteck, Weingläser und alles Nötige zum Kochen (Töpfe, Pfannen, Öl, Salz und Pfeffer). Ein Esstisch steht für die Mahlzeiten bereit.",
    es: "La cocina, separada del salón, está totalmente equipada: nevera, congelador, microondas, hervidor, cafetera y tostadora, además de vajilla, cubiertos, copas de vino y todo lo necesario para cocinar (cazuelas, sartenes, aceite, sal y pimienta). Una mesa de comedor le espera para las comidas.",
    it: "La cucina, separata dal soggiorno, è completamente attrezzata: frigorifero, congelatore, microonde, bollitore, macchina del caffè e tostapane, oltre a stoviglie, posate, bicchieri da vino e tutto il necessario per cucinare (pentole, padelle, olio, sale e pepe). Un tavolo da pranzo vi attende per i pasti.",
  },
  "L'appartement est chauffé par des radiateurs. Merci de limiter votre consommation et de baisser le chauffage avant de partir ou lorsque vous aérez.": {
    en: "The apartment is heated by radiators. Please keep consumption reasonable and turn the heating down before you go out or when airing the rooms.",
    de: "Die Wohnung wird über Heizkörper beheizt. Bitte gehen Sie sparsam damit um und drehen Sie die Heizung herunter, bevor Sie gehen oder wenn Sie lüften.",
    es: "El apartamento se calienta mediante radiadores. Le rogamos que limite su consumo y baje la calefacción antes de salir o cuando ventile.",
    it: "L'appartamento è riscaldato da termosifoni. Vi preghiamo di limitare i consumi e di abbassare il riscaldamento prima di uscire o quando arieggiate.",
  },
  "🌿 Balcon": {
    en: "🌿 Balcony",
    de: "🌿 Balkon",
    es: "🌿 Balcón",
    it: "🌿 Balcone",
  },
  "Le balcon est exposé sud-est : c'est le meilleur endroit de l'appartement le matin. Du mobilier d'extérieur est à votre disposition. Merci de veiller à la tranquillité du voisinage, notamment en soirée, et de ne rien jeter par-dessus la rambarde.": {
    en: "The balcony faces south-east, making it the best spot in the apartment in the morning. Outdoor furniture is provided. Please respect the neighbours' peace and quiet, especially in the evening, and never throw anything over the railing.",
    de: "Der Balkon ist nach Südosten ausgerichtet und damit morgens der schönste Platz der Wohnung. Gartenmöbel stehen zur Verfügung. Bitte achten Sie auf die Ruhe der Nachbarschaft, besonders am Abend, und werfen Sie nichts über die Brüstung.",
    es: "El balcón está orientado al sureste: es el mejor rincón del apartamento por la mañana. Dispone de mobiliario de exterior. Le rogamos que respete la tranquilidad del vecindario, sobre todo por la noche, y que no tire nada por encima de la barandilla.",
    it: "Il balcone è esposto a sud-est: è il posto migliore dell'appartamento al mattino. Sono a disposizione mobili da esterno. Vi preghiamo di rispettare la tranquillità del vicinato, soprattutto la sera, e di non gettare nulla oltre la ringhiera.",
  },
  "Les animaux de compagnie ne sont malheureusement pas acceptés dans ce logement.": {
    en: "Unfortunately, pets are not allowed in this apartment.",
    de: "Haustiere sind in dieser Wohnung leider nicht erlaubt.",
    es: "Lamentablemente, no se admiten mascotas en este alojamiento.",
    it: "Purtroppo gli animali domestici non sono ammessi in questo alloggio.",
  },
  "Bouilloire électrique": {
    en: "Electric kettle",
    de: "Wasserkocher",
    es: "Hervidor eléctrico",
    it: "Bollitore elettrico",
  },
  "Merci d'être particulièrement vigilants entre 22h00 et 8h00 afin de respecter le sommeil de chacun, dans l'appartement comme sur le balcon et dans les parties communes de la résidence.": {
    en: "Please be especially considerate between 10 p.m. and 8 a.m. so everyone can sleep — inside the apartment as well as on the balcony and in the building's communal areas.",
    de: "Bitte nehmen Sie zwischen 22:00 und 8:00 Uhr besonders Rücksicht, damit alle schlafen können – in der Wohnung ebenso wie auf dem Balkon und in den Gemeinschaftsbereichen der Wohnanlage.",
    es: "Le rogamos que sea especialmente cuidadoso entre las 22:00 y las 8:00 para respetar el sueño de todos, tanto en el apartamento como en el balcón y en las zonas comunes de la residencia.",
    it: "Vi preghiamo di prestare particolare attenzione tra le 22:00 e le 8:00 per rispettare il sonno di tutti, sia nell'appartamento sia sul balcone e nelle parti comuni del residence.",
  },
  "Logement non-fumeur : merci de descendre à l'extérieur pour fumer ou vapoter. Les fêtes et les soirées sont strictement interdites. Les animaux de compagnie ne sont pas acceptés. Vous séjournez dans une résidence habitée à l'année : merci de veiller à la tranquillité du voisinage, en particulier sur le balcon et dans les parties communes.": {
    en: "Non-smoking accommodation: please go outside to smoke or vape. Parties and gatherings are strictly forbidden. Pets are not allowed. You are staying in a residence lived in all year round: please respect the neighbours' peace and quiet, particularly on the balcony and in the communal areas.",
    de: "Nichtraucherwohnung: Bitte gehen Sie zum Rauchen oder Dampfen nach draußen. Partys und Feiern sind strengstens untersagt. Haustiere sind nicht erlaubt. Sie wohnen in einer ganzjährig bewohnten Wohnanlage: Bitte achten Sie auf die Ruhe der Nachbarschaft, insbesondere auf dem Balkon und in den Gemeinschaftsbereichen.",
    es: "Alojamiento para no fumadores: le rogamos que salga al exterior para fumar o vapear. Las fiestas y reuniones están estrictamente prohibidas. No se admiten mascotas. Se aloja en una residencia habitada todo el año: respete la tranquilidad del vecindario, especialmente en el balcón y en las zonas comunes.",
    it: "Alloggio per non fumatori: vi preghiamo di uscire all'esterno per fumare o svapare. Feste e serate sono severamente vietate. Gli animali domestici non sono ammessi. Soggiornate in un residence abitato tutto l'anno: vi preghiamo di rispettare la tranquillità del vicinato, in particolare sul balcone e nelle parti comuni.",
  },
  "Le local poubelles se trouve au sous-sol de la résidence. La petite clé qui l'ouvre se trouve dans la boîte à clés, avec le badge et la clé de l'appartement.\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\nMerci de trier vos déchets et de refermer le local derrière vous.": {
    en: "The bin room is in the basement of the residence. The small key that opens it is in the key box, together with the badge and the apartment key.\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: general household waste\nPlease sort your waste and lock the room behind you.",
    de: "Der Müllraum befindet sich im Untergeschoss der Wohnanlage. Der kleine Schlüssel dafür liegt im Schlüsselkasten, zusammen mit dem Badge und dem Wohnungsschlüssel.\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\nBitte trennen Sie Ihren Abfall und schließen Sie den Raum hinter sich wieder ab.",
    es: "El cuarto de basuras se encuentra en el sótano de la residencia. La pequeña llave que lo abre está en la caja de llaves, junto con el mando y la llave del apartamento.\n🟡 Contenedor amarillo: envases y residuos reciclables\n⚫ Contenedor gris: residuos domésticos\nLe rogamos que separe sus residuos y cierre el local al salir.",
    it: "Il locale rifiuti si trova nel seminterrato del residence. La piccola chiave che lo apre è nella cassetta delle chiavi, insieme al badge e alla chiave dell'appartamento.\n🟡 Bidone giallo: imballaggi e rifiuti riciclabili\n⚫ Bidone grigio: rifiuti indifferenziati\nVi preghiamo di differenziare i rifiuti e di richiudere il locale dietro di voi.",
  },
  "Balcon exposé sud-est": {
    en: "South-east facing balcony",
    de: "Nach Südosten ausgerichteter Balkon",
    es: "Balcón orientado al sureste",
    it: "Balcone esposto a sud-est",
  },
  "Chambre séparée (lit double)": {
    en: "Separate bedroom (double bed)",
    de: "Separates Schlafzimmer (Doppelbett)",
    es: "Dormitorio independiente (cama de matrimonio)",
    it: "Camera separata (letto matrimoniale)",
  },
  "Canapé-lit 1 place": {
    en: "Single sofa bed",
    de: "Schlafsofa für eine Person",
    es: "Sofá cama individual",
    it: "Divano letto singolo",
  },
  "Réfrigérateur & congélateur": {
    en: "Fridge & freezer",
    de: "Kühl- und Gefrierschrank",
    es: "Nevera y congelador",
    it: "Frigorifero e congelatore",
  },
  "Cafetière & bouilloire": {
    en: "Coffee maker & kettle",
    de: "Kaffeemaschine & Wasserkocher",
    es: "Cafetera y hervidor",
    it: "Macchina del caffè e bollitore",
  },
  "Salle de bains avec baignoire": {
    en: "Bathroom with bathtub",
    de: "Badezimmer mit Badewanne",
    es: "Cuarto de baño con bañera",
    it: "Bagno con vasca",
  },
  "Ascenseur": {
    en: "Lift",
    de: "Aufzug",
    es: "Ascensor",
    it: "Ascensore",
  },
  "Stationnement gratuit dans les rues adjacentes": {
    en: "Free parking in the nearby streets",
    de: "Kostenloses Parken in den angrenzenden Straßen",
    es: "Aparcamiento gratuito en las calles adyacentes",
    it: "Parcheggio gratuito nelle vie adiacenti",
  },
  "Borne de recharge véhicule électrique": {
    en: "Electric vehicle charging point",
    de: "Ladestation für Elektrofahrzeuge",
    es: "Punto de recarga para vehículos eléctricos",
    it: "Colonnina di ricarica per veicoli elettrici",
  },
  "Lit bébé sur demande": {
    en: "Cot available on request",
    de: "Babybett auf Anfrage",
    es: "Cuna bajo petición",
    it: "Lettino per neonati su richiesta",
  },
  "Faire la vaisselle, la ranger et vider les poubelles dans le local du sous-sol": {
    en: "Wash and put away the dishes, and empty the bins into the basement bin room",
    de: "Geschirr spülen und wegräumen, den Müll im Müllraum im Untergeschoss entsorgen",
    es: "Fregar y guardar la vajilla y vaciar las basuras en el cuarto del sótano",
    it: "Lavare e riporre le stoviglie e svuotare i rifiuti nel locale del seminterrato",
  },
  "Fermer les fenêtres et la porte du balcon, éteindre les lumières et baisser le chauffage": {
    en: "Close the windows and the balcony door, switch off the lights and turn the heating down",
    de: "Fenster und Balkontür schließen, Licht ausschalten und Heizung herunterdrehen",
    es: "Cerrar las ventanas y la puerta del balcón, apagar las luces y bajar la calefacción",
    it: "Chiudere le finestre e la porta del balcone, spegnere le luci e abbassare il riscaldamento",
  },
  "Fermer l'appartement à clé": {
    en: "Lock the apartment",
    de: "Die Wohnung abschließen",
    es: "Cerrar el apartamento con llave",
    it: "Chiudere a chiave l'appartamento",
  },
  "Rapporter le badge de la résidence, la clé de l'appartement et la clé du local poubelles dans la boîte à clés du 46 rue Caponière, puis brouiller le code": {
    en: "Return the residence badge, the apartment key and the bin room key to the key box at 46 rue Caponière, then scramble the code",
    de: "Den Badge der Wohnanlage, den Wohnungsschlüssel und den Schlüssel des Müllraums in den Schlüsselkasten in der 46 rue Caponière zurücklegen und den Code verstellen",
    es: "Devolver el mando de la residencia, la llave del apartamento y la llave del cuarto de basuras a la caja de llaves del 46 rue Caponière y descomponer el código",
    it: "Riportare il badge del residence, la chiave dell'appartamento e la chiave del locale rifiuti nella cassetta delle chiavi al 46 rue Caponière, poi azzerare il codice",
  },
  "Le Mémorial de Caen (~4 min)": {
    en: "The Caen Memorial (~4 min)",
    de: "Das Mémorial de Caen (~4 Min.)",
    es: "El Memorial de Caen (~4 min)",
    it: "Il Mémorial de Caen (~4 min)",
  },
  "Supérette Panier Sympa (~3 min)": {
    en: "Panier Sympa mini-market (~3 min)",
    de: "Mini-Supermarkt Panier Sympa (~3 Min.)",
    es: "Minimercado Panier Sympa (~3 min)",
    it: "Minimarket Panier Sympa (~3 min)",
  },
  "Square de Nashville (~2 min)": {
    en: "Square de Nashville garden (~2 min)",
    de: "Grünanlage Square de Nashville (~2 Min.)",
    es: "Jardín Square de Nashville (~2 min)",
    it: "Giardino Square de Nashville (~2 min)",
  },
  "Boulangerie La Folie's (~4 min)": {
    en: "La Folie's bakery (~4 min)",
    de: "Bäckerei La Folie's (~4 Min.)",
    es: "Panadería La Folie's (~4 min)",
    it: "Panetteria La Folie's (~4 min)",
  },
  "Arrêt de bus « Nashville » (~2 min)": {
    en: "\"Nashville\" bus stop (~2 min)",
    de: "Bushaltestelle „Nashville\" (~2 Min.)",
    es: "Parada de autobús «Nashville» (~2 min)",
    it: "Fermata dell'autobus «Nashville» (~2 min)",
  },
  "Parc de la Colline aux Oiseaux (~6 min)": {
    en: "Colline aux Oiseaux park (~6 min)",
    de: "Park Colline aux Oiseaux (~6 Min.)",
    es: "Parque de la Colline aux Oiseaux (~6 min)",
    it: "Parco della Colline aux Oiseaux (~6 min)",
  },
  "Hôpital privé Saint-Martin (~6 min)": {
    en: "Saint-Martin private hospital (~6 min)",
    de: "Privatklinik Saint-Martin (~6 Min.)",
    es: "Hospital privado Saint-Martin (~6 min)",
    it: "Ospedale privato Saint-Martin (~6 min)",
  },
  "Vous êtes dans le quartier de la Folie-Couvrechef, au nord-ouest de Caen : calme, résidentiel et très vert. Le Mémorial et le parc de la Colline aux Oiseaux sont juste en face. Le centre-ville, la gare, l'aéroport et la mer sont à une dizaine de minutes en voiture, et le périphérique est tout proche pour rayonner vers les plages du Débarquement.": {
    en: "You're in the Folie-Couvrechef district, north-west of Caen: quiet, residential and very green. The Memorial and the Colline aux Oiseaux park are right opposite. The city centre, the station, the airport and the sea are all around ten minutes away by car, and the ring road is close by for exploring the D-Day landing beaches.",
    de: "Sie wohnen im Viertel Folie-Couvrechef im Nordwesten von Caen: ruhig, von Wohnhäusern geprägt und sehr grün. Das Mémorial und der Park Colline aux Oiseaux liegen direkt gegenüber. Innenstadt, Bahnhof, Flughafen und Meer sind jeweils rund zehn Autominuten entfernt, und die Umgehungsstraße ist ganz in der Nähe, um die Landungsstrände zu erkunden.",
    es: "Se encuentra en el barrio de la Folie-Couvrechef, al noroeste de Caen: tranquilo, residencial y muy verde. El Memorial y el parque de la Colline aux Oiseaux están justo enfrente. El centro, la estación, el aeropuerto y el mar están a una decena de minutos en coche, y la circunvalación queda muy cerca para recorrer las playas del Desembarco.",
    it: "Vi trovate nel quartiere della Folie-Couvrechef, a nord-ovest di Caen: tranquillo, residenziale e molto verde. Il Mémorial e il parco della Colline aux Oiseaux sono proprio di fronte. Il centro città, la stazione, l'aeroporto e il mare distano una decina di minuti in auto, e la tangenziale è vicinissima per raggiungere le spiagge dello Sbarco.",
  },
  "Esplanade Général Eisenhower, juste en face du logement (~4 min à pied). Le grand musée pour la Paix : Seconde Guerre mondiale, Débarquement et Bataille de Normandie. L'incontournable de Caen. Tél. 02 31 06 06 45.": {
    en: "Esplanade Général Eisenhower, right opposite the apartment (~4 min on foot). The great museum for Peace: the Second World War, the D-Day landings and the Battle of Normandy. Caen's must-see. Tel. +33 2 31 06 06 45.",
    de: "Esplanade Général Eisenhower, direkt gegenüber der Wohnung (~4 Min. zu Fuß). Das große Museum für den Frieden: Zweiter Weltkrieg, Landung und Schlacht um die Normandie. Das Highlight von Caen. Tel. +33 2 31 06 06 45.",
    es: "Esplanade Général Eisenhower, justo enfrente del alojamiento (~4 min a pie). El gran museo por la Paz: Segunda Guerra Mundial, Desembarco y Batalla de Normandía. Imprescindible en Caen. Tel. +33 2 31 06 06 45.",
    it: "Esplanade Général Eisenhower, proprio di fronte all'alloggio (~4 min a piedi). Il grande museo per la Pace: Seconda guerra mondiale, Sbarco e Battaglia di Normandia. L'imperdibile di Caen. Tel. +33 2 31 06 06 45.",
  },
  "Arromanches et ses musées, sur la Côte de Nacre : le D-Day à 30–45 min de route. Le périphérique tout proche facilite le trajet.": {
    en: "Arromanches and its museums, on the Côte de Nacre: D-Day history 30–45 min away by road. The nearby ring road makes the trip easy.",
    de: "Arromanches und seine Museen an der Côte de Nacre: der D-Day 30–45 Autominuten entfernt. Die nahe Umgehungsstraße erleichtert die Fahrt.",
    es: "Arromanches y sus museos, en la Côte de Nacre: el Día D a 30–45 min en coche. La circunvalación, muy cerca, facilita el trayecto.",
    it: "Arromanches e i suoi musei, sulla Côte de Nacre: il D-Day a 30–45 min di strada. La tangenziale vicinissima rende il tragitto più semplice.",
  },
  "Dans l'enceinte du château : riche collection de peintures (XVᵉ–XXᵉ s.) et beau parc de sculptures. Entrée des collections permanentes gratuite. Tél. 02 31 30 47 60.": {
    en: "Inside the castle walls: a rich collection of paintings (15th–20th c.) and a lovely sculpture park. Free entry to the permanent collections. Tel. +33 2 31 30 47 60.",
    de: "Innerhalb der Burgmauern: eine reiche Gemäldesammlung (15.–20. Jh.) und ein schöner Skulpturenpark. Eintritt in die Dauerausstellung frei. Tel. +33 2 31 30 47 60.",
    es: "En el recinto del castillo: una rica colección de pintura (siglos XV–XX) y un bonito parque de esculturas. Entrada gratuita a las colecciones permanentes. Tel. +33 2 31 30 47 60.",
    it: "All'interno delle mura del castello: una ricca collezione di dipinti (XV–XX sec.) e un bel parco di sculture. Ingresso gratuito alle collezioni permanenti. Tel. +33 2 31 30 47 60.",
  },
  "Avenue de l'Amiral Mountbatten, à ~6 min à pied. Grand parc paysager de 17 ha : roseraie, labyrinthe, animaux de la ferme et grandes pelouses. Le voisin idéal, parfait en famille. Tél. 02 31 30 41 00.": {
    en: "Avenue de l'Amiral Mountbatten, ~6 min on foot. A 17-hectare landscaped park: rose garden, maze, farm animals and wide lawns. The perfect neighbour, ideal with children. Tel. +33 2 31 30 41 00.",
    de: "Avenue de l'Amiral Mountbatten, ~6 Min. zu Fuß. Ein 17 Hektar großer Landschaftspark: Rosengarten, Labyrinth, Bauernhoftiere und weite Rasenflächen. Der ideale Nachbar, perfekt für Familien. Tel. +33 2 31 30 41 00.",
    es: "Avenue de l'Amiral Mountbatten, a ~6 min a pie. Gran parque paisajístico de 17 ha: rosaleda, laberinto, animales de granja y amplias praderas. El vecino ideal, perfecto en familia. Tel. +33 2 31 30 41 00.",
    it: "Avenue de l'Amiral Mountbatten, a ~6 min a piedi. Grande parco paesaggistico di 17 ettari: roseto, labirinto, animali della fattoria e ampi prati. Il vicino ideale, perfetto in famiglia. Tel. +33 2 31 30 41 00.",
  },
  "Square de Nashville": {
    en: "Square de Nashville garden",
    de: "Grünanlage Square de Nashville",
    es: "Jardín Square de Nashville",
    it: "Giardino Square de Nashville",
  },
  "Le petit square du quartier, à deux pas de la résidence : quelques bancs et de la verdure pour souffler.": {
    en: "The little neighbourhood garden, a stone's throw from the building: a few benches and some greenery to catch your breath.",
    de: "Die kleine Grünanlage des Viertels, nur wenige Schritte entfernt: ein paar Bänke und etwas Grün zum Durchatmen.",
    es: "El pequeño jardín del barrio, a dos pasos de la residencia: algunos bancos y verde para respirar.",
    it: "Il piccolo giardino del quartiere, a due passi dal residence: qualche panchina e un po' di verde per riprendere fiato.",
  },
  "Jardin des Pétales": {
    en: "Jardin des Pétales garden",
    de: "Garten Jardin des Pétales",
    es: "Jardín des Pétales",
    it: "Giardino des Pétales",
  },
  "Jardin de quartier aux abords de la Colline aux Oiseaux, agréable pour une balade courte.": {
    en: "A neighbourhood garden on the edge of the Colline aux Oiseaux, pleasant for a short stroll.",
    de: "Ein Viertelgarten am Rand der Colline aux Oiseaux, angenehm für einen kurzen Spaziergang.",
    es: "Jardín de barrio junto a la Colline aux Oiseaux, agradable para un paseo corto.",
    it: "Giardino di quartiere ai margini della Colline aux Oiseaux, piacevole per una breve passeggiata.",
  },
  "Jardins des Bruyères": {
    en: "Jardins des Bruyères gardens",
    de: "Gärten Jardins des Bruyères",
    es: "Jardines des Bruyères",
    it: "Giardini des Bruyères",
  },
  "Espace vert calme au sud-ouest du parc de la Colline aux Oiseaux.": {
    en: "A quiet green space south-west of the Colline aux Oiseaux park.",
    de: "Eine ruhige Grünfläche südwestlich des Parks Colline aux Oiseaux.",
    es: "Zona verde tranquila al suroeste del parque de la Colline aux Oiseaux.",
    it: "Spazio verde tranquillo a sud-ovest del parco della Colline aux Oiseaux.",
  },
  "Jardin des Poètes": {
    en: "Jardin des Poètes garden",
    de: "Garten Jardin des Poètes",
    es: "Jardín des Poètes",
    it: "Giardino des Poètes",
  },
  "Petit jardin de quartier de la Folie-Couvrechef, au nord de la résidence.": {
    en: "A small neighbourhood garden in Folie-Couvrechef, north of the building.",
    de: "Ein kleiner Viertelgarten in Folie-Couvrechef, nördlich der Wohnanlage.",
    es: "Pequeño jardín de barrio de la Folie-Couvrechef, al norte de la residencia.",
    it: "Piccolo giardino di quartiere della Folie-Couvrechef, a nord del residence.",
  },
  "Vallée des Jardins": {
    en: "Vallée des Jardins park",
    de: "Park Vallée des Jardins",
    es: "Parque Vallée des Jardins",
    it: "Parco Vallée des Jardins",
  },
  "Vaste parc paysager de Caen, entre le quartier et le centre : rivière, ponts et grands arbres.": {
    en: "A vast landscaped park in Caen, between the neighbourhood and the centre: a stream, bridges and tall trees.",
    de: "Ein weitläufiger Landschaftspark in Caen, zwischen Viertel und Zentrum: Bach, Brücken und hohe Bäume.",
    es: "Amplio parque paisajístico de Caen, entre el barrio y el centro: arroyo, puentes y grandes árboles.",
    it: "Ampio parco paesaggistico di Caen, tra il quartiere e il centro: ruscello, ponti e grandi alberi.",
  },
  "Forteresse fondée par Guillaume le Conquérant vers 1060, l'une des plus vastes enceintes médiévales d'Europe. Remparts, jardins et belle vue sur la ville. Accès libre à l'enceinte, à ~10 min en voiture ou en bus. Tél. 02 31 30 47 60.": {
    en: "A fortress founded by William the Conqueror around 1060, one of the largest medieval enclosures in Europe. Ramparts, gardens and a fine view over the city. Free access to the grounds, ~10 min by car or bus. Tel. +33 2 31 30 47 60.",
    de: "Eine um 1060 von Wilhelm dem Eroberer gegründete Festung, eine der größten mittelalterlichen Anlagen Europas. Wehrmauern, Gärten und ein schöner Blick über die Stadt. Freier Zugang zum Gelände, ~10 Min. mit Auto oder Bus. Tel. +33 2 31 30 47 60.",
    es: "Fortaleza fundada por Guillermo el Conquistador hacia 1060, uno de los mayores recintos medievales de Europa. Murallas, jardines y bonitas vistas de la ciudad. Acceso libre al recinto, a ~10 min en coche o autobús. Tel. +33 2 31 30 47 60.",
    it: "Fortezza fondata da Guglielmo il Conquistatore intorno al 1060, una delle più vaste cinte medievali d'Europa. Bastioni, giardini e bella vista sulla città. Accesso libero alla cinta, a ~10 min in auto o autobus. Tel. +33 2 31 30 47 60.",
  },
  "Restaurant Linette": {
    en: "Linette restaurant",
    de: "Restaurant Linette",
    es: "Restaurante Linette",
    it: "Ristorante Linette",
  },
  "Rue Karl Probst — le restaurant le plus proche du logement (~3 min à pied).": {
    en: "Rue Karl Probst — the closest restaurant to the apartment (~3 min on foot).",
    de: "Rue Karl Probst – das nächstgelegene Restaurant (~3 Min. zu Fuß).",
    es: "Rue Karl Probst — el restaurante más cercano al alojamiento (~3 min a pie).",
    it: "Rue Karl Probst — il ristorante più vicino all'alloggio (~3 min a piedi).",
  },
  "Crêperie du quartier, à deux pas de la résidence : galettes et crêpes.": {
    en: "The neighbourhood crêperie, a stone's throw away: savoury galettes and sweet crêpes.",
    de: "Die Crêperie des Viertels, nur wenige Schritte entfernt: herzhafte Galettes und süße Crêpes.",
    es: "Crepería del barrio, a dos pasos de la residencia: galettes saladas y crepes dulces.",
    it: "Crêperie del quartiere, a due passi dal residence: galette salate e crêpe dolci.",
  },
  "Table de quartier, à quelques minutes à pied côté Colline aux Oiseaux.": {
    en: "A neighbourhood eatery, a few minutes' walk on the Colline aux Oiseaux side.",
    de: "Ein Lokal im Viertel, wenige Gehminuten Richtung Colline aux Oiseaux.",
    es: "Restaurante de barrio, a unos minutos a pie del lado de la Colline aux Oiseaux.",
    it: "Locale di quartiere, a pochi minuti a piedi verso la Colline aux Oiseaux.",
  },
  "Rue Alfred Kastler — restaurant du secteur, un peu plus à l'ouest.": {
    en: "Rue Alfred Kastler — a local restaurant, a little further west.",
    de: "Rue Alfred Kastler – ein Restaurant im Viertel, etwas weiter westlich.",
    es: "Rue Alfred Kastler — restaurante de la zona, un poco más al oeste.",
    it: "Rue Alfred Kastler — ristorante della zona, un po' più a ovest.",
  },
  "Brasserie Laurent": {
    en: "Brasserie Laurent",
    de: "Brasserie Laurent",
    es: "Brasserie Laurent",
    it: "Brasserie Laurent",
  },
  "Brasserie de cuisine française, vers la rue d'Authie.": {
    en: "A French brasserie, over towards rue d'Authie.",
    de: "Eine französische Brasserie, Richtung Rue d'Authie.",
    es: "Brasserie de cocina francesa, hacia la rue d'Authie.",
    it: "Brasserie di cucina francese, verso la rue d'Authie.",
  },
  "Rue du Chemin Vert — restaurant du quartier voisin, près de la Halle Molière.": {
    en: "Rue du Chemin Vert — a restaurant in the neighbouring district, near the Halle Molière.",
    de: "Rue du Chemin Vert – ein Restaurant im Nachbarviertel, nahe der Halle Molière.",
    es: "Rue du Chemin Vert — restaurante del barrio vecino, cerca de la Halle Molière.",
    it: "Rue du Chemin Vert — ristorante del quartiere vicino, vicino alla Halle Molière.",
  },
  "Kebabs et tacos à emporter, du côté de la Porte de l'Europe.": {
    en: "Kebabs and French tacos to take away, over by the Porte de l'Europe.",
    de: "Kebab und French Tacos zum Mitnehmen, in der Nähe der Porte de l'Europe.",
    es: "Kebabs y tacos para llevar, por la zona de la Porte de l'Europe.",
    it: "Kebab e tacos da asporto, dalle parti della Porte de l'Europe.",
  },
  "Porte de l'Europe — pizzas, pâtes, sandwichs et salades, sur place ou à emporter.": {
    en: "Porte de l'Europe — pizzas, pasta, sandwiches and salads, to eat in or take away.",
    de: "Porte de l'Europe – Pizza, Pasta, Sandwiches und Salate, zum Hieressen oder Mitnehmen.",
    es: "Porte de l'Europe — pizzas, pasta, bocadillos y ensaladas, para tomar allí o llevar.",
    it: "Porte de l'Europe — pizze, pasta, panini e insalate, sul posto o da asporto.",
  },
  "Kebab et grillades à emporter, quartier du Chemin Vert.": {
    en: "Kebabs and grills to take away, in the Chemin Vert district.",
    de: "Kebab und Gegrilltes zum Mitnehmen, im Viertel Chemin Vert.",
    es: "Kebab y parrilladas para llevar, barrio del Chemin Vert.",
    it: "Kebab e grigliate da asporto, quartiere del Chemin Vert.",
  },
  "Pizzeria du Chemin Vert, à côté de la Halle Molière.": {
    en: "A Chemin Vert pizzeria, next to the Halle Molière.",
    de: "Pizzeria im Chemin Vert, neben der Halle Molière.",
    es: "Pizzería del Chemin Vert, junto a la Halle Molière.",
    it: "Pizzeria del Chemin Vert, accanto alla Halle Molière.",
  },
  "Café de quartier, secteur Porte de l'Europe.": {
    en: "A neighbourhood café, in the Porte de l'Europe area.",
    de: "Ein Café im Viertel, Bereich Porte de l'Europe.",
    es: "Café de barrio, zona Porte de l'Europe.",
    it: "Caffè di quartiere, zona Porte de l'Europe.",
  },
  "Bar convivial, à côté du Carrefour Express de la Porte de l'Europe.": {
    en: "A friendly bar, next to the Carrefour Express at Porte de l'Europe.",
    de: "Eine gemütliche Bar, neben dem Carrefour Express an der Porte de l'Europe.",
    es: "Bar acogedor, junto al Carrefour Express de la Porte de l'Europe.",
    it: "Bar accogliente, accanto al Carrefour Express della Porte de l'Europe.",
  },
  "Café-restaurant dans l'enceinte du château, en centre-ville : jolie terrasse avec vue. Idéal en journée.": {
    en: "A café-restaurant within the castle walls, in the city centre: a lovely terrace with a view. Great during the day.",
    de: "Ein Café-Restaurant innerhalb der Burgmauern in der Innenstadt: schöne Terrasse mit Aussicht. Tagsüber ideal.",
    es: "Café-restaurante en el recinto del castillo, en el centro: bonita terraza con vistas. Ideal de día.",
    it: "Caffè-ristorante all'interno delle mura del castello, in centro città: bella terrazza panoramica. Ideale di giorno.",
  },
  "La boulangerie la plus proche (~4 min à pied) : pain frais et viennoiseries du matin.": {
    en: "The closest bakery (~4 min on foot): fresh bread and morning pastries.",
    de: "Die nächstgelegene Bäckerei (~4 Min. zu Fuß): frisches Brot und Gebäck am Morgen.",
    es: "La panadería más cercana (~4 min a pie): pan fresco y bollería por la mañana.",
    it: "La panetteria più vicina (~4 min a piedi): pane fresco e brioche del mattino.",
  },
  "Boulangerie-pâtisserie du quartier, au nord-ouest de la résidence.": {
    en: "A neighbourhood bakery and patisserie, north-west of the building.",
    de: "Bäckerei und Konditorei im Viertel, nordwestlich der Wohnanlage.",
    es: "Panadería-pastelería del barrio, al noroeste de la residencia.",
    it: "Panetteria-pasticceria del quartiere, a nord-ovest del residence.",
  },
  "Boulangerie du Chemin Vert": {
    en: "Chemin Vert bakery",
    de: "Bäckerei Chemin Vert",
    es: "Panadería del Chemin Vert",
    it: "Panetteria del Chemin Vert",
  },
  "Boulangerie du quartier voisin, près de la Halle Molière.": {
    en: "A bakery in the neighbouring district, near the Halle Molière.",
    de: "Bäckerei im Nachbarviertel, nahe der Halle Molière.",
    es: "Panadería del barrio vecino, cerca de la Halle Molière.",
    it: "Panetteria del quartiere vicino, vicino alla Halle Molière.",
  },
  "La Boucherie du Centre": {
    en: "La Boucherie du Centre butcher's",
    de: "Metzgerei La Boucherie du Centre",
    es: "Carnicería La Boucherie du Centre",
    it: "Macelleria La Boucherie du Centre",
  },
  "Boucherie-charcuterie, secteur Chemin Vert.": {
    en: "Butcher's and delicatessen, in the Chemin Vert area.",
    de: "Metzgerei und Feinkost, Bereich Chemin Vert.",
    es: "Carnicería y charcutería, zona Chemin Vert.",
    it: "Macelleria e salumeria, zona Chemin Vert.",
  },
  "La supérette la plus proche (~3 min à pied) : dépannage et courses de dernière minute.": {
    en: "The closest mini-market (~3 min on foot): for last-minute shopping and essentials.",
    de: "Der nächstgelegene Mini-Supermarkt (~3 Min. zu Fuß): für Notfälle und Last-Minute-Einkäufe.",
    es: "El minimercado más cercano (~3 min a pie): para imprevistos y compras de última hora.",
    it: "Il minimarket più vicino (~3 min a piedi): per imprevisti e spesa dell'ultimo minuto.",
  },
  "Supérette de la Porte de l'Europe, ouverte tard.": {
    en: "The Porte de l'Europe mini-market, open late.",
    de: "Mini-Supermarkt an der Porte de l'Europe, lange geöffnet.",
    es: "Minimercado de la Porte de l'Europe, abierto hasta tarde.",
    it: "Minimarket della Porte de l'Europe, aperto fino a tardi.",
  },
  "Primeur de la Porte de l'Europe : fruits, légumes et produits frais.": {
    en: "The greengrocer at Porte de l'Europe: fruit, vegetables and fresh produce.",
    de: "Obst- und Gemüsehändler an der Porte de l'Europe: Obst, Gemüse und frische Produkte.",
    es: "Frutería de la Porte de l'Europe: fruta, verdura y productos frescos.",
    it: "Fruttivendolo della Porte de l'Europe: frutta, verdura e prodotti freschi.",
  },
  "Supermarché pour les courses complètes, vers la rue d'Authie (~10 min à pied).": {
    en: "A supermarket for a full shop, over towards rue d'Authie (~10 min on foot).",
    de: "Supermarkt für den Großeinkauf, Richtung Rue d'Authie (~10 Min. zu Fuß).",
    es: "Supermercado para la compra completa, hacia la rue d'Authie (~10 min a pie).",
    it: "Supermercato per la spesa completa, verso la rue d'Authie (~10 min a piedi).",
  },
  "Supermarché discount, juste à côté du Super U.": {
    en: "A discount supermarket, right next to the Super U.",
    de: "Discount-Supermarkt, direkt neben dem Super U.",
    es: "Supermercado de descuento, justo al lado del Super U.",
    it: "Supermercato discount, proprio accanto al Super U.",
  },
  "Le petit pôle commerçant du quartier, à ~7 min à pied : supérette, primeur, café, restauration rapide et bureau de poste.": {
    en: "The neighbourhood's small shopping hub, ~7 min on foot: mini-market, greengrocer, café, fast food and post office.",
    de: "Das kleine Einkaufszentrum des Viertels, ~7 Min. zu Fuß: Mini-Supermarkt, Obsthändler, Café, Schnellrestaurant und Postamt.",
    es: "El pequeño polo comercial del barrio, a ~7 min a pie: minimercado, frutería, café, comida rápida y oficina de correos.",
    it: "Il piccolo polo commerciale del quartiere, a ~7 min a piedi: minimarket, fruttivendolo, caffè, fast food e ufficio postale.",
  },
  "Centre commercial du Chemin Vert : commerces de proximité, pharmacie et boucherie.": {
    en: "The Chemin Vert shopping centre: local shops, a pharmacy and a butcher's.",
    de: "Einkaufszentrum Chemin Vert: Nahversorger, Apotheke und Metzgerei.",
    es: "Centro comercial del Chemin Vert: comercios de proximidad, farmacia y carnicería.",
    it: "Centro commerciale del Chemin Vert: negozi di prossimità, farmacia e macelleria.",
  },
  "Bureau de poste Caen La Folie-Couvrechef": {
    en: "Caen La Folie-Couvrechef post office",
    de: "Postamt Caen La Folie-Couvrechef",
    es: "Oficina de correos Caen La Folie-Couvrechef",
    it: "Ufficio postale Caen La Folie-Couvrechef",
  },
  "Le bureau de poste du quartier, secteur Porte de l'Europe.": {
    en: "The neighbourhood post office, in the Porte de l'Europe area.",
    de: "Das Postamt des Viertels, Bereich Porte de l'Europe.",
    es: "La oficina de correos del barrio, zona Porte de l'Europe.",
    it: "L'ufficio postale del quartiere, zona Porte de l'Europe.",
  },
  "Galerie marchande moderne entre le port et la gare : boutiques, restaurants et cinéma. À ~12 min en voiture.": {
    en: "A modern shopping mall between the marina and the station: shops, restaurants and a cinema. ~12 min by car.",
    de: "Moderne Einkaufsgalerie zwischen Hafen und Bahnhof: Geschäfte, Restaurants und Kino. ~12 Min. mit dem Auto.",
    es: "Galería comercial moderna entre el puerto y la estación: tiendas, restaurantes y cine. A ~12 min en coche.",
    it: "Galleria commerciale moderna tra il porto e la stazione: negozi, ristoranti e cinema. A ~12 min in auto.",
  },
  "Arrêt de bus « Nashville »": {
    en: "\"Nashville\" bus stop",
    de: "Bushaltestelle „Nashville\"",
    es: "Parada de autobús «Nashville»",
    it: "Fermata dell'autobus «Nashville»",
  },
  "L'arrêt le plus proche du logement (~2 min à pied) — réseau Twisto, vers le centre-ville et la gare.": {
    en: "The closest stop to the apartment (~2 min on foot) — Twisto network, towards the city centre and the station.",
    de: "Die nächstgelegene Haltestelle (~2 Min. zu Fuß) – Twisto-Netz, Richtung Innenstadt und Bahnhof.",
    es: "La parada más cercana al alojamiento (~2 min a pie) — red Twisto, hacia el centro y la estación.",
    it: "La fermata più vicina all'alloggio (~2 min a piedi) — rete Twisto, verso il centro città e la stazione.",
  },
  "Arrêt de bus « Mémorial »": {
    en: "\"Mémorial\" bus stop",
    de: "Bushaltestelle „Mémorial\"",
    es: "Parada de autobús «Mémorial»",
    it: "Fermata dell'autobus «Mémorial»",
  },
  "Arrêt desservant le Mémorial de Caen, à ~4 min à pied.": {
    en: "The stop serving the Caen Memorial, ~4 min on foot.",
    de: "Haltestelle am Mémorial de Caen, ~4 Min. zu Fuß.",
    es: "Parada que da servicio al Memorial de Caen, a ~4 min a pie.",
    it: "Fermata che serve il Mémorial de Caen, a ~4 min a piedi.",
  },
  "Arrêt de bus « Colline aux Oiseaux »": {
    en: "\"Colline aux Oiseaux\" bus stop",
    de: "Bushaltestelle „Colline aux Oiseaux\"",
    es: "Parada de autobús «Colline aux Oiseaux»",
    it: "Fermata dell'autobus «Colline aux Oiseaux»",
  },
  "Arrêt côté parc, à ~4 min à pied.": {
    en: "The stop on the park side, ~4 min on foot.",
    de: "Haltestelle auf der Parkseite, ~4 Min. zu Fuß.",
    es: "Parada del lado del parque, a ~4 min a pie.",
    it: "Fermata sul lato del parco, a ~4 min a piedi.",
  },
  "Arrêt de tram « Calvaire Saint-Pierre »": {
    en: "\"Calvaire Saint-Pierre\" tram stop",
    de: "Straßenbahnhaltestelle „Calvaire Saint-Pierre\"",
    es: "Parada de tranvía «Calvaire Saint-Pierre»",
    it: "Fermata del tram «Calvaire Saint-Pierre»",
  },
  "L'arrêt de tram le plus proche (~1,6 km) : la ligne file vers le centre, la gare et les campus. Le bus reste le plus pratique depuis le logement.": {
    en: "The closest tram stop (~1.6 km): the line runs to the centre, the station and the campuses. The bus is still the handiest option from the apartment.",
    de: "Die nächstgelegene Straßenbahnhaltestelle (~1,6 km): Die Linie führt ins Zentrum, zum Bahnhof und zu den Universitäten. Von der Wohnung aus ist der Bus jedoch praktischer.",
    es: "La parada de tranvía más cercana (~1,6 km): la línea va al centro, a la estación y a los campus. Desde el alojamiento, el autobús sigue siendo lo más práctico.",
    it: "La fermata del tram più vicina (~1,6 km): la linea porta al centro, alla stazione e ai campus. Dall'alloggio l'autobus resta la soluzione più pratica.",
  },
  "Le réseau de l'agglomération : 3 lignes de tram et de nombreux bus. Horaires, plan et tickets sur l'appli Twisto ou aux distributeurs des arrêts.": {
    en: "The metropolitan network: 3 tram lines and many bus routes. Timetables, maps and tickets on the Twisto app or from the machines at the stops.",
    de: "Das Netz der Agglomeration: 3 Straßenbahnlinien und zahlreiche Buslinien. Fahrpläne, Netzplan und Tickets über die Twisto-App oder an den Automaten der Haltestellen.",
    es: "La red de la aglomeración: 3 líneas de tranvía y numerosos autobuses. Horarios, plano y billetes en la app Twisto o en las máquinas de las paradas.",
    it: "La rete dell'area urbana: 3 linee di tram e numerosi autobus. Orari, mappa e biglietti sull'app Twisto o ai distributori delle fermate.",
  },
  "Liaisons directes vers Paris Saint-Lazare (~2h). À ~10 min en voiture.": {
    en: "Direct services to Paris Saint-Lazare (~2 hrs). ~10 min by car.",
    de: "Direktverbindungen nach Paris Saint-Lazare (~2 Std.). ~10 Min. mit dem Auto.",
    es: "Enlaces directos con París Saint-Lazare (~2 h). A ~10 min en coche.",
    it: "Collegamenti diretti per Parigi Saint-Lazare (~2 ore). A ~10 min in auto.",
  },
  "À l'ouest de la ville, tout proche par le périphérique : vols intérieurs et saisonniers.": {
    en: "West of the city, very close via the ring road: domestic and seasonal flights.",
    de: "Westlich der Stadt, über die Umgehungsstraße ganz nah: Inlands- und Saisonflüge.",
    es: "Al oeste de la ciudad, muy cerca por la circunvalación: vuelos nacionales y estacionales.",
    it: "A ovest della città, vicinissimo tramite la tangenziale: voli nazionali e stagionali.",
  },
  "Multiplexe au centre commercial Les Rives de l'Orne, près du port et de la gare : films récents.": {
    en: "A multiplex at the Les Rives de l'Orne shopping centre, near the marina and the station: latest releases.",
    de: "Multiplex im Einkaufszentrum Les Rives de l'Orne, nahe Hafen und Bahnhof: aktuelle Filme.",
    es: "Multicine en el centro comercial Les Rives de l'Orne, cerca del puerto y de la estación: estrenos.",
    it: "Multisala al centro commerciale Les Rives de l'Orne, vicino al porto e alla stazione: film recenti.",
  },
  "Cinéma art & essai emblématique de Caen, 6 avenue Sainte-Thérèse, à l'est de la ville.": {
    en: "Caen's iconic arthouse cinema, 6 avenue Sainte-Thérèse, east of the city.",
    de: "Das legendäre Programmkino von Caen, 6 avenue Sainte-Thérèse, im Osten der Stadt.",
    es: "Emblemático cine de arte y ensayo de Caen, 6 avenue Sainte-Thérèse, al este de la ciudad.",
    it: "Lo storico cinema d'essai di Caen, 6 avenue Sainte-Thérèse, a est della città.",
  },
  "L'épicentre de la vie nocturne caennaise : bars et pubs à la suite, en centre-ville (~10 min en voiture).": {
    en: "The epicentre of Caen's nightlife: bar after bar and pub after pub, in the city centre (~10 min by car).",
    de: "Das Zentrum des Nachtlebens von Caen: Bars und Pubs in Reihe, in der Innenstadt (~10 Min. mit dem Auto).",
    es: "El epicentro de la vida nocturna de Caen: bares y pubs uno tras otro, en el centro (~10 min en coche).",
    it: "L'epicentro della vita notturna di Caen: bar e pub uno dopo l'altro, in centro città (~10 min in auto).",
  },
  "Les terrasses du port (Quai Vendeuvre)": {
    en: "The marina terraces (Quai Vendeuvre)",
    de: "Die Terrassen am Hafen (Quai Vendeuvre)",
    es: "Las terrazas del puerto (Quai Vendeuvre)",
    it: "Le terrazze del porto (Quai Vendeuvre)",
  },
  "Discothèque sur le port, 32 quai Vendeuvre : la boîte de nuit du centre, généralement ouverte du jeudi au samedi.": {
    en: "A nightclub on the marina, 32 quai Vendeuvre: the city centre club, usually open Thursday to Saturday.",
    de: "Diskothek am Hafen, 32 quai Vendeuvre: der Club der Innenstadt, meist von Donnerstag bis Samstag geöffnet.",
    es: "Discoteca en el puerto, 32 quai Vendeuvre: la sala del centro, generalmente abierta de jueves a sábado.",
    it: "Discoteca sul porto, 32 quai Vendeuvre: il locale notturno del centro, di solito aperto dal giovedì al sabato.",
  },
  "Pharmacie de La Folie-Couvrechef": {
    en: "La Folie-Couvrechef pharmacy",
    de: "Apotheke La Folie-Couvrechef",
    es: "Farmacia de La Folie-Couvrechef",
    it: "Farmacia di La Folie-Couvrechef",
  },
  "La pharmacie la plus proche du logement (~7 min à pied), secteur Porte de l'Europe. Pharmacie de garde : composez le 3237.": {
    en: "The closest pharmacy to the apartment (~7 min on foot), in the Porte de l'Europe area. For the on-duty pharmacy, dial 3237.",
    de: "Die nächstgelegene Apotheke (~7 Min. zu Fuß), Bereich Porte de l'Europe. Notdienstapotheke: Wählen Sie 3237.",
    es: "La farmacia más cercana al alojamiento (~7 min a pie), zona Porte de l'Europe. Farmacia de guardia: marque el 3237.",
    it: "La farmacia più vicina all'alloggio (~7 min a piedi), zona Porte de l'Europe. Farmacia di turno: componete il 3237.",
  },
  "Pharmacie de la Halle Molière, quartier du Chemin Vert.": {
    en: "The Halle Molière pharmacy, in the Chemin Vert district.",
    de: "Apotheke in der Halle Molière, Viertel Chemin Vert.",
    es: "Farmacia de la Halle Molière, barrio del Chemin Vert.",
    it: "Farmacia della Halle Molière, quartiere del Chemin Vert.",
  },
  "Pharmacie du Chemin Vert": {
    en: "Chemin Vert pharmacy",
    de: "Apotheke Chemin Vert",
    es: "Farmacia del Chemin Vert",
    it: "Farmacia del Chemin Vert",
  },
  "Autre pharmacie du quartier voisin, rue du Chemin Vert.": {
    en: "Another pharmacy in the neighbouring district, rue du Chemin Vert.",
    de: "Eine weitere Apotheke im Nachbarviertel, Rue du Chemin Vert.",
    es: "Otra farmacia del barrio vecino, rue du Chemin Vert.",
    it: "Un'altra farmacia del quartiere vicino, rue du Chemin Vert.",
  },
  "Hôpital privé Saint-Martin": {
    en: "Saint-Martin private hospital",
    de: "Privatklinik Saint-Martin",
    es: "Hospital privado Saint-Martin",
    it: "Ospedale privato Saint-Martin",
  },
  "L'établissement de santé le plus proche, à ~6 min à pied du logement (urgences privées). Tél. 02 31 15 51 51.": {
    en: "The closest healthcare facility, ~6 min on foot from the apartment (private emergency department). Tel. +33 2 31 15 51 51.",
    de: "Die nächstgelegene Gesundheitseinrichtung, ~6 Min. zu Fuß von der Wohnung (private Notaufnahme). Tel. +33 2 31 15 51 51.",
    es: "El centro sanitario más cercano, a ~6 min a pie del alojamiento (urgencias privadas). Tel. +33 2 31 15 51 51.",
    it: "La struttura sanitaria più vicina, a ~6 min a piedi dall'alloggio (pronto soccorso privato). Tel. +33 2 31 15 51 51.",
  },
  "Centre hospitalier universitaire (urgences), secteur Côte de Nacre, à ~10 min en voiture. Tél. 02 31 06 31 06.": {
    en: "University hospital (A&E), Côte de Nacre area, ~10 min by car. Tel. +33 2 31 06 31 06.",
    de: "Universitätsklinikum (Notaufnahme), Bereich Côte de Nacre, ~10 Min. mit dem Auto. Tel. +33 2 31 06 31 06.",
    es: "Hospital universitario (urgencias), zona Côte de Nacre, a ~10 min en coche. Tel. +33 2 31 06 31 06.",
    it: "Ospedale universitario (pronto soccorso), zona Côte de Nacre, a ~10 min in auto. Tel. +33 2 31 06 31 06.",
  },
  "Cabinet médical de la Folie-Couvrechef": {
    en: "Folie-Couvrechef doctors' surgery",
    de: "Arztpraxis Folie-Couvrechef",
    es: "Consultorio médico de la Folie-Couvrechef",
    it: "Ambulatorio medico della Folie-Couvrechef",
  },
  "Médecins généralistes du quartier (Dr Fromager, Dr Schaeffer), à ~5 min à pied.": {
    en: "Local GPs (Dr Fromager, Dr Schaeffer), ~5 min on foot.",
    de: "Hausärzte im Viertel (Dr. Fromager, Dr. Schaeffer), ~5 Min. zu Fuß.",
    es: "Médicos de familia del barrio (Dr. Fromager, Dr. Schaeffer), a ~5 min a pie.",
    it: "Medici di base del quartiere (Dr. Fromager, Dr. Schaeffer), a ~5 min a piedi.",
  },
  "Laverie du Chemin Vert": {
    en: "Chemin Vert launderette",
    de: "Waschsalon Chemin Vert",
    es: "Lavandería del Chemin Vert",
    it: "Lavanderia del Chemin Vert",
  },
  "Laverie automatique du quartier voisin, rue du Chemin Vert.": {
    en: "A self-service launderette in the neighbouring district, rue du Chemin Vert.",
    de: "Waschsalon im Nachbarviertel, Rue du Chemin Vert.",
    es: "Lavandería automática del barrio vecino, rue du Chemin Vert.",
    it: "Lavanderia automatica del quartiere vicino, rue du Chemin Vert.",
  },
  "Avenue de la 1ʳᵉ Armée Française — laverie automatique, à ~5 min en voiture.": {
    en: "Avenue de la 1ʳᵉ Armée Française — a self-service launderette, ~5 min by car.",
    de: "Avenue de la 1ʳᵉ Armée Française – Waschsalon, ~5 Min. mit dem Auto.",
    es: "Avenue de la 1ʳᵉ Armée Française — lavandería automática, a ~5 min en coche.",
    it: "Avenue de la 1ʳᵉ Armée Française — lavanderia automatica, a ~5 min in auto.",
  },
  "Vous avez la chance d'avoir le Mémorial de Caen juste en face : réservez-y votre matinée, c'est l'un des plus beaux musées d'histoire de France. Prolongez ensuite par le parc de la Colline aux Oiseaux, à deux pas — sa roseraie et son labyrinthe sont magnifiques aux beaux jours, et l'entrée est gratuite. Et pour les gourmands, goûtez les tripes à la mode de Caen, la spécialité locale !": {
    en: "You're lucky enough to have the Caen Memorial right opposite: set aside a morning for it, it's one of the finest history museums in France. Then carry on to the Colline aux Oiseaux park just next door — its rose garden and maze are glorious in fine weather, and entry is free. And if you like your food, try tripes à la mode de Caen, the local speciality!",
    de: "Sie haben das Glück, das Mémorial de Caen direkt gegenüber zu haben: Nehmen Sie sich einen Vormittag dafür Zeit, es ist eines der schönsten Geschichtsmuseen Frankreichs. Anschließend geht es weiter in den Park Colline aux Oiseaux gleich nebenan – Rosengarten und Labyrinth sind bei schönem Wetter herrlich, und der Eintritt ist frei. Und für Feinschmecker: Probieren Sie die Tripes à la mode de Caen, die lokale Spezialität!",
    es: "Tiene la suerte de tener el Memorial de Caen justo enfrente: resérvele una mañana, es uno de los mejores museos de historia de Francia. Continúe después por el parque de la Colline aux Oiseaux, a dos pasos: su rosaleda y su laberinto son magníficos con buen tiempo, y la entrada es gratuita. Y para los golosos, ¡pruebe los tripes à la mode de Caen, la especialidad local!",
    it: "Avete la fortuna di avere il Mémorial de Caen proprio di fronte: dedicategli una mattinata, è uno dei più bei musei di storia di Francia. Proseguite poi con il parco della Colline aux Oiseaux, a due passi: il roseto e il labirinto sono magnifici con il bel tempo, e l'ingresso è gratuito. E per i golosi, assaggiate le tripes à la mode de Caen, la specialità locale!",
  },
  "Nous restons disponibles à tout moment via la conversation de votre plateforme de réservation (Airbnb ou Booking) : n'hésitez pas à nous écrire pour la moindre question.": {
    en: "We're available at any time through the message thread on your booking platform (Airbnb or Booking): don't hesitate to write to us with the smallest question.",
    de: "Wir sind jederzeit über den Chat Ihrer Buchungsplattform (Airbnb oder Booking) erreichbar: Schreiben Sie uns gern bei der kleinsten Frage.",
    es: "Estamos disponibles en todo momento a través del chat de su plataforma de reserva (Airbnb o Booking): no dude en escribirnos ante la menor duda.",
    it: "Siamo sempre disponibili tramite la conversazione della vostra piattaforma di prenotazione (Airbnb o Booking): non esitate a scriverci per qualsiasi domanda.",
  },
  "Plaques tactiles":
    {
      en: "Touch-control hob",
      de: "Touch-Kochfeld",
      es: "Placa táctil",
      it: "Piano cottura touch",
    },
  "Canapé-lit":
    {
      en: "Sofa bed",
      de: "Schlafsofa",
      es: "Sofá cama",
      it: "Divano letto",
    },
  "Machine Nespresso (capsules fournies)":
    {
      en: "Nespresso machine (capsules provided)",
      de: "Nespresso-Maschine (Kapseln inklusive)",
      es: "Cafetera Nespresso (cápsulas incluidas)",
      it: "Macchina Nespresso (capsule fornite)",
    },
  "Sur demande, vous pouvez laisser vos bagages dans le logement (avant l'arrivée ou après le départ) — pensez simplement à bien remettre la clé dans la boîte à clé en repartant.":
    {
      en: "On request, you can leave your luggage in the property (before check-in or after check-out) — just remember to put the key back in the key box when you leave.",
      de: "Auf Anfrage können Sie Ihr Gepäck in der Unterkunft lassen (vor der Anreise oder nach der Abreise) — denken Sie nur daran, den Schlüssel beim Verlassen wieder in den Schlüsselkasten zu legen.",
      es: "Bajo petición, puede dejar su equipaje en el alojamiento (antes de la llegada o después de la salida) — solo recuerde volver a dejar la llave en la caja al marcharse.",
      it: "Su richiesta, potete lasciare i bagagli nell'alloggio (prima dell'arrivo o dopo la partenza) — ricordatevi solo di rimettere la chiave nella cassetta quando partite.",
    },
  "Les poubelles sont à déposer rue Froide (le camion passe tous les jours) et non dans la rue de la Monnaie.\nBorne à verre la plus proche : 9 rue du Tour de Terre.":
    {
      en: "Bins should be taken out on Rue Froide (the truck comes every day), not on Rue de la Monnaie.\nNearest glass container: 9 Rue du Tour de Terre.",
      de: "Der Müll ist in der Rue Froide bereitzustellen (die Müllabfuhr kommt täglich), nicht in der Rue de la Monnaie.\nNächster Glascontainer: 9 Rue du Tour de Terre.",
      es: "La basura debe dejarse en la rue Froide (el camión pasa todos los días), no en la rue de la Monnaie.\nContenedor de vidrio más cercano: 9 rue du Tour de Terre.",
      it: "I rifiuti vanno depositati in rue Froide (il camion passa tutti i giorni) e non in rue de la Monnaie.\nContenitore del vetro più vicino: 9 rue du Tour de Terre.",
    },
  "Sortir les poubelles rue Froide (pas dans la rue de la Monnaie)":
    {
      en: "Take the bins out on Rue Froide (not on Rue de la Monnaie)",
      de: "Den Müll in der Rue Froide bereitstellen (nicht in der Rue de la Monnaie)",
      es: "Sacar la basura en la rue Froide (no en la rue de la Monnaie)",
      it: "Portare i rifiuti in rue Froide (non in rue de la Monnaie)",
    },
  "L'appartement accueille 3 personnes :\n• la chambre dispose d'un lit double ;\n• le séjour dispose d'un canapé-lit 1 place.\n\nLes draps sont fournis pour ces deux couchages. Un matelas d'appoint 1 place est également rangé sous le lit de la chambre : il peut dépanner, mais les draps ne sont pas fournis pour celui-ci — pensez à apporter les vôtres si vous souhaitez l'utiliser.\n\nLa vidéo ci-dessous montre comment déplier et replier le canapé-lit du séjour.":
    {
      en: "The apartment sleeps 3:\n• the bedroom has a double bed;\n• the living room has a single sofa bed.\n\nSheets are provided for both of these. A spare single mattress is also stored under the bedroom bed: it can help in a pinch, but sheets are not provided for it — bring your own if you'd like to use it.\n\nThe video below shows how to unfold and fold the living-room sofa bed.",
      de: "Die Wohnung bietet Platz für 3 Personen:\n• das Schlafzimmer hat ein Doppelbett;\n• das Wohnzimmer hat ein Einzel-Schlafsofa.\n\nFür beide wird Bettwäsche gestellt. Unter dem Bett im Schlafzimmer liegt zudem eine zusätzliche Einzelmatratze: sie hilft im Notfall, doch dafür wird keine Bettwäsche gestellt — bringen Sie Ihre eigene mit, wenn Sie sie nutzen möchten.\n\nDas Video unten zeigt, wie man das Schlafsofa im Wohnzimmer aus- und wieder einklappt.",
      es: "El apartamento aloja a 3 personas:\n• el dormitorio dispone de una cama doble;\n• el salón dispone de un sofá cama individual.\n\nLas sábanas están incluidas para ambos. Bajo la cama del dormitorio hay también un colchón supletorio individual: puede sacar de un apuro, pero no se incluyen sábanas para este — traiga las suyas si desea usarlo.\n\nEl vídeo a continuación muestra cómo desplegar y plegar el sofá cama del salón.",
      it: "L'appartamento ospita 3 persone:\n• la camera dispone di un letto matrimoniale;\n• il soggiorno dispone di un divano letto singolo.\n\nLe lenzuola sono fornite per entrambi. Sotto il letto della camera è riposto anche un materasso singolo aggiuntivo: può tornare utile, ma per questo le lenzuola non sono fornite — portate le vostre se desiderate usarlo.\n\nIl video qui sotto mostra come aprire e richiudere il divano letto del soggiorno.",
    },
  "La cuisine, séparée du séjour, est entièrement équipée : un four, une plaque de cuisson vitrocéramique, un réfrigérateur, un congélateur, un micro-ondes, une bouilloire, une cafetière et un grille-pain, ainsi que la vaisselle, les couverts, les verres à vin et tout le nécessaire de cuisine (casseroles, poêles, huile, sel et poivre). Une table à manger vous attend pour les repas.":
    {
      en: "The kitchen, separate from the living room, is fully equipped: an oven, a ceramic hob, a fridge, a freezer, a microwave, a kettle, a coffee maker and a toaster, plus crockery, cutlery, wine glasses and all the kitchen essentials (pots, pans, oil, salt and pepper). A dining table awaits you for meals.",
      de: "Die vom Wohnzimmer getrennte Küche ist voll ausgestattet: ein Backofen, ein Glaskeramik-Kochfeld, ein Kühlschrank, ein Gefrierschrank, eine Mikrowelle, ein Wasserkocher, eine Kaffeemaschine und ein Toaster, dazu Geschirr, Besteck, Weingläser und die gesamte Küchenausstattung (Töpfe, Pfannen, Öl, Salz und Pfeffer). Ein Esstisch erwartet Sie für die Mahlzeiten.",
      es: "La cocina, separada del salón, está totalmente equipada: un horno, una placa vitrocerámica, un frigorífico, un congelador, un microondas, un hervidor, una cafetera y una tostadora, además de la vajilla, los cubiertos, las copas de vino y todo lo necesario de cocina (ollas, sartenes, aceite, sal y pimienta). Una mesa de comedor le espera para las comidas.",
      it: "La cucina, separata dal soggiorno, è completamente attrezzata: un forno, un piano cottura in vetroceramica, un frigorifero, un congelatore, un microonde, un bollitore, una caffettiera e un tostapane, oltre a stoviglie, posate, calici da vino e tutto il necessario da cucina (pentole, padelle, olio, sale e pepe). Un tavolo da pranzo vi attende per i pasti.",
    },
  "🔥 Four":
    {
      en: "🔥 Oven",
      de: "🔥 Backofen",
      es: "🔥 Horno",
      it: "🔥 Forno",
    },
  "Le four est électrique et se pilote avec deux boutons et un afficheur central.\n\n1. Réglez le THERMOSTAT (bouton de gauche) sur la température souhaitée (de 50° à 250°) : le voyant rouge « marche » s'allume.\n2. Réglez le SÉLECTEUR (bouton de droite) sur le mode de cuisson voulu : « pâtisseries / poissons », « flans / tartes aux fruits », « grillades / tournebroche » ou « maintien au chaud ». Sur « 0 », le four est éteint.\n3. L'afficheur central sert de minuteur et d'horloge : avec la touche « sélection » et les touches + / −, vous pouvez régler un minuteur (facultatif).\n\nPensez à bien remettre les deux boutons sur « 0 » après utilisation.":
    {
      en: "The oven is electric and is controlled with two knobs and a central display.\n\n1. Set the THERMOSTAT (left knob) to the temperature you want (from 50° to 250°): the red “on” light comes on.\n2. Set the SELECTOR (right knob) to the cooking mode you want: “pastries / fish”, “flans / fruit tarts”, “grilling / rotisserie” or “keep warm”. On “0”, the oven is off.\n3. The central display works as a timer and clock: with the “select” button and the + / − keys, you can set a timer (optional).\n\nRemember to turn both knobs back to “0” after use.",
      de: "Der Backofen ist elektrisch und wird mit zwei Drehknöpfen und einer zentralen Anzeige bedient.\n\n1. Stellen Sie den THERMOSTAT (linker Knopf) auf die gewünschte Temperatur (von 50° bis 250°): die rote „marche“-Leuchte geht an.\n2. Stellen Sie den WÄHLER (rechter Knopf) auf die gewünschte Garart: „Gebäck / Fisch“, „Flan / Obstkuchen“, „Grillen / Drehspieß“ oder „Warmhalten“. Auf „0“ ist der Ofen aus.\n3. Die zentrale Anzeige dient als Timer und Uhr: mit der Taste „sélection“ und den Tasten + / − können Sie einen Timer stellen (optional).\n\nDenken Sie daran, beide Knöpfe nach Gebrauch wieder auf „0“ zu stellen.",
      es: "El horno es eléctrico y se maneja con dos mandos y una pantalla central.\n\n1. Ponga el TERMOSTATO (mando izquierdo) en la temperatura deseada (de 50° a 250°): se enciende el piloto rojo “marche”.\n2. Ponga el SELECTOR (mando derecho) en el modo de cocción deseado: “pastelería / pescado”, “flanes / tartas de fruta”, “parrilla / asador” o “mantener caliente”. En “0”, el horno está apagado.\n3. La pantalla central funciona como temporizador y reloj: con el botón “sélection” y las teclas + / − puede programar un temporizador (opcional).\n\nRecuerde volver a poner ambos mandos en “0” después de usarlo.",
      it: "Il forno è elettrico e si comanda con due manopole e un display centrale.\n\n1. Regolate il TERMOSTATO (manopola di sinistra) sulla temperatura desiderata (da 50° a 250°): la spia rossa “marche” si accende.\n2. Regolate il SELETTORE (manopola di destra) sulla modalità di cottura desiderata: “pasticceria / pesce”, “flan / crostate di frutta”, “griglia / girarrosto” o “mantenimento in caldo”. Su “0”, il forno è spento.\n3. Il display centrale funge da timer e orologio: con il tasto “sélection” e i tasti + / − potete impostare un timer (facoltativo).\n\nRicordatevi di riportare entrambe le manopole su “0” dopo l'uso.",
    },
  "La plaque est vitrocéramique, à commandes tactiles (pas de bouton à tourner).\n\n1. Effleurez la touche marche/arrêt pour activer la plaque.\n2. Sélectionnez la zone de cuisson, puis réglez la puissance avec les touches + et −.\n3. Pour éteindre, ramenez la puissance à « 0 » ou appuyez sur la touche marche/arrêt.\n\nUne sécurité enfant (cadenas) peut verrouiller les commandes : maintenez la touche cadenas appuyée pour déverrouiller. La vidéo ci-dessous montre le fonctionnement.":
    {
      en: "The hob is ceramic, with touch controls (no knobs to turn).\n\n1. Tap the on/off key to switch the hob on.\n2. Select the cooking zone, then set the power with the + and − keys.\n3. To switch off, bring the power back to “0” or press the on/off key.\n\nA child lock (padlock) can lock the controls: hold the padlock key down to unlock. The video below shows how it works.",
      de: "Das Kochfeld ist aus Glaskeramik, mit Sensortasten (keine Drehknöpfe).\n\n1. Berühren Sie die Ein/Aus-Taste, um das Kochfeld einzuschalten.\n2. Wählen Sie die Kochzone und stellen Sie die Leistung mit den Tasten + und − ein.\n3. Zum Ausschalten die Leistung wieder auf „0“ bringen oder die Ein/Aus-Taste drücken.\n\nEine Kindersicherung (Schloss) kann die Bedienung sperren: Halten Sie die Schloss-Taste gedrückt, um zu entsperren. Das Video unten zeigt die Bedienung.",
      es: "La placa es vitrocerámica, con mandos táctiles (sin mandos que girar).\n\n1. Toque la tecla de encendido/apagado para activar la placa.\n2. Seleccione la zona de cocción y ajuste la potencia con las teclas + y −.\n3. Para apagar, baje la potencia a “0” o pulse la tecla de encendido/apagado.\n\nUn bloqueo infantil (candado) puede bloquear los mandos: mantenga pulsada la tecla del candado para desbloquear. El vídeo a continuación muestra el funcionamiento.",
      it: "Il piano cottura è in vetroceramica, con comandi touch (nessuna manopola da girare).\n\n1. Sfiorate il tasto on/off per attivare il piano.\n2. Selezionate la zona di cottura, poi regolate la potenza con i tasti + e −.\n3. Per spegnere, riportate la potenza a “0” o premete il tasto on/off.\n\nUna sicurezza bambini (lucchetto) può bloccare i comandi: tenete premuto il tasto del lucchetto per sbloccare. Il video qui sotto mostra il funzionamento.",
    },
  "Deux télécommandes sont nécessaires : la télécommande Samsung (noire, marquée « SAMSUNG ») pour l'écran, et la télécommande Free (grise, logo « free ») pour la Freebox.\n\n1. Allumez le téléviseur avec le bouton rouge, en haut à gauche de la télécommande Samsung.\n2. Appuyez sur le bouton « SOURCE » (en haut à droite de la télécommande Samsung) et sélectionnez « HDMI2/DVI ».\n3. Allumez la Freebox avec la télécommande grise « free » (bouton de mise en marche en haut à droite).\n4. Utilisez ensuite la télécommande « free » pour changer de chaîne, régler le volume et naviguer dans Freebox TV.\n\nSi l'écran affiche « Pas de signal », vérifiez que la source est bien sur « HDMI2/DVI » et que la Freebox est allumée.":
    {
      en: "Two remotes are needed: the Samsung remote (black, marked “SAMSUNG”) for the screen, and the Free remote (grey, “free” logo) for the Freebox.\n\n1. Turn on the TV with the red button, top left of the Samsung remote.\n2. Press the “SOURCE” button (top right of the Samsung remote) and select “HDMI2/DVI”.\n3. Turn on the Freebox with the grey “free” remote (power button, top right).\n4. Then use the “free” remote to change channels, adjust the volume and navigate Freebox TV.\n\nIf the screen shows “No signal”, check that the source is set to “HDMI2/DVI” and that the Freebox is on.",
      de: "Sie benötigen zwei Fernbedienungen: die Samsung-Fernbedienung (schwarz, mit „SAMSUNG“ beschriftet) für den Bildschirm und die Free-Fernbedienung (grau, „free“-Logo) für die Freebox.\n\n1. Schalten Sie den Fernseher mit der roten Taste oben links auf der Samsung-Fernbedienung ein.\n2. Drücken Sie die Taste „SOURCE“ (oben rechts auf der Samsung-Fernbedienung) und wählen Sie „HDMI2/DVI“.\n3. Schalten Sie die Freebox mit der grauen „free“-Fernbedienung ein (Ein/Aus-Taste oben rechts).\n4. Verwenden Sie dann die „free“-Fernbedienung, um Sender zu wechseln, die Lautstärke zu regeln und durch Freebox TV zu navigieren.\n\nWenn der Bildschirm „Kein Signal“ anzeigt, prüfen Sie, ob die Quelle auf „HDMI2/DVI“ steht und die Freebox eingeschaltet ist.",
      es: "Se necesitan dos mandos: el mando Samsung (negro, con la marca “SAMSUNG”) para la pantalla, y el mando Free (gris, logo “free”) para la Freebox.\n\n1. Encienda el televisor con el botón rojo, arriba a la izquierda del mando Samsung.\n2. Pulse el botón “SOURCE” (arriba a la derecha del mando Samsung) y seleccione “HDMI2/DVI”.\n3. Encienda la Freebox con el mando gris “free” (botón de encendido, arriba a la derecha).\n4. Después use el mando “free” para cambiar de canal, ajustar el volumen y navegar por Freebox TV.\n\nSi la pantalla muestra “Sin señal”, compruebe que la fuente está en “HDMI2/DVI” y que la Freebox está encendida.",
      it: "Servono due telecomandi: il telecomando Samsung (nero, con la scritta “SAMSUNG”) per lo schermo, e il telecomando Free (grigio, logo “free”) per la Freebox.\n\n1. Accendete il televisore con il pulsante rosso, in alto a sinistra sul telecomando Samsung.\n2. Premete il pulsante “SOURCE” (in alto a destra sul telecomando Samsung) e selezionate “HDMI2/DVI”.\n3. Accendete la Freebox con il telecomando grigio “free” (tasto di accensione in alto a destra).\n4. Usate poi il telecomando “free” per cambiare canale, regolare il volume e navigare in Freebox TV.\n\nSe lo schermo mostra “Nessun segnale”, verificate che la sorgente sia su “HDMI2/DVI” e che la Freebox sia accesa.",
    },
  "🗑️ Local poubelles":
    {
      en: "🗑️ Bin room",
      de: "🗑️ Müllraum",
      es: "🗑️ Cuarto de basuras",
      it: "🗑️ Locale rifiuti",
    },
  "Le local poubelles se trouve au sous-sol de la résidence (niveau -1). Prenez l'ascenseur jusqu'au niveau -1, puis ouvrez le local avec la petite clé fournie dans la boîte à clés (celle qui contient aussi le badge et la clé de l'appartement).\n🟡 Bac jaune : emballages et déchets recyclables\n⚫ Bac gris : ordures ménagères\nMerci de trier vos déchets et de bien refermer le local derrière vous. La vidéo ci-dessous vous montre le chemin depuis l'ascenseur.":
    {
      en: "The bin room is in the basement of the residence (level -1). Take the lift down to level -1, then open the room with the small key provided in the key box (the one that also holds the badge and the apartment key).\n🟡 Yellow bin: packaging and recyclables\n⚫ Grey bin: household waste\nPlease sort your waste and close the room properly behind you. The video below shows you the way from the lift.",
      de: "Der Müllraum befindet sich im Untergeschoss der Residenz (Ebene -1). Fahren Sie mit dem Aufzug hinunter auf Ebene -1 und öffnen Sie den Raum mit dem kleinen Schlüssel aus dem Schlüsselkasten (dem, in dem auch der Badge und der Wohnungsschlüssel liegen).\n🟡 Gelbe Tonne: Verpackungen und Wertstoffe\n⚫ Graue Tonne: Restmüll\nBitte trennen Sie Ihren Abfall und schließen Sie den Raum hinter sich gut. Das Video unten zeigt Ihnen den Weg vom Aufzug aus.",
      es: "El cuarto de basuras está en el sótano de la residencia (nivel -1). Baje en ascensor hasta el nivel -1 y abra el cuarto con la llave pequeña incluida en la caja de llaves (la que contiene también el mando y la llave del apartamento).\n🟡 Contenedor amarillo: envases y reciclables\n⚫ Contenedor gris: residuos domésticos\nPor favor, separe sus residuos y cierre bien el cuarto al salir. El vídeo a continuación le muestra el camino desde el ascensor.",
      it: "Il locale rifiuti si trova nel seminterrato della residenza (livello -1). Scendete con l'ascensore al livello -1, poi aprite il locale con la piccola chiave fornita nella cassetta delle chiavi (quella che contiene anche il badge e la chiave dell'appartamento).\n🟡 Bidone giallo: imballaggi e riciclabili\n⚫ Bidone grigio: rifiuti domestici\nVi preghiamo di differenziare i rifiuti e di richiudere bene il locale dietro di voi. Il video qui sotto vi mostra il percorso dall'ascensore.",
    },
  "🔑 Dépôt des clés au départ":
    {
      en: "🔑 Returning the keys on departure",
      de: "🔑 Schlüsselrückgabe bei der Abreise",
      es: "🔑 Devolución de las llaves a la salida",
      it: "🔑 Riconsegna delle chiavi alla partenza",
    },
  "À votre départ, déposez le badge de la résidence, la clé de l'appartement et la petite clé du local poubelles dans la boîte aux lettres de l'appartement (boîte n°89), dans le hall de la résidence, au 18 avenue Maréchal Montgomery. Vous la reconnaîtrez à l'autocollant « CAEN & MER IMMO / STOP PUB » (voir photo).\n\n(Pour rappel, la récupération des clés se fait à votre arrivée au 46 rue Caponière — pas à la même adresse.)":
    {
      en: "When you leave, drop the residence badge, the apartment key and the small bin-room key into the apartment's mailbox (box no. 89), in the lobby of the residence, at 18 Avenue Maréchal Montgomery. You'll recognise it by the “CAEN & MER IMMO / STOP PUB” sticker (see photo).\n\n(As a reminder, the keys are picked up on arrival at 46 Rue Caponière — a different address.)",
      de: "Werfen Sie bei Ihrer Abreise den Residenz-Badge, den Wohnungsschlüssel und den kleinen Schlüssel des Müllraums in den Briefkasten der Wohnung (Fach Nr. 89) im Eingangsbereich der Residenz, 18 Avenue Maréchal Montgomery. Sie erkennen ihn am Aufkleber „CAEN & MER IMMO / STOP PUB“ (siehe Foto).\n\n(Zur Erinnerung: Die Schlüssel werden bei der Anreise am 46 Rue Caponière abgeholt — eine andere Adresse.)",
      es: "Al marcharse, deposite el mando de la residencia, la llave del apartamento y la llave pequeña del cuarto de basuras en el buzón del apartamento (buzón n.º 89), en el vestíbulo de la residencia, en el 18 Avenue Maréchal Montgomery. Lo reconocerá por la pegatina “CAEN & MER IMMO / STOP PUB” (ver foto).\n\n(Recuerde que las llaves se recogen a la llegada en el 46 Rue Caponière — una dirección distinta.)",
      it: "Alla partenza, deponete il badge della residenza, la chiave dell'appartamento e la piccola chiave del locale rifiuti nella cassetta delle lettere dell'appartamento (cassetta n. 89), nell'atrio della residenza, al 18 Avenue Maréchal Montgomery. La riconoscerete dall'adesivo “CAEN & MER IMMO / STOP PUB” (vedi foto).\n\n(Per ricordo, le chiavi si ritirano all'arrivo al 46 Rue Caponière — un indirizzo diverso.)",
    },
  "Déposer le badge de la résidence, la clé de l'appartement et la clé du local poubelles dans la boîte aux lettres de l'appartement (boîte n°89, dans le hall de la résidence — autocollant « CAEN & MER IMMO / STOP PUB »), au 18 avenue Maréchal Montgomery":
    {
      en: "Drop the residence badge, the apartment key and the bin-room key into the apartment's mailbox (box no. 89, in the lobby of the residence — “CAEN & MER IMMO / STOP PUB” sticker), at 18 Avenue Maréchal Montgomery",
      de: "Den Residenz-Badge, den Wohnungsschlüssel und den Schlüssel des Müllraums in den Briefkasten der Wohnung werfen (Fach Nr. 89, im Eingangsbereich der Residenz — Aufkleber „CAEN & MER IMMO / STOP PUB“), 18 Avenue Maréchal Montgomery",
      es: "Depositar el mando de la residencia, la llave del apartamento y la llave del cuarto de basuras en el buzón del apartamento (buzón n.º 89, en el vestíbulo de la residencia — pegatina “CAEN & MER IMMO / STOP PUB”), en el 18 Avenue Maréchal Montgomery",
      it: "Deporre il badge della residenza, la chiave dell'appartamento e la chiave del locale rifiuti nella cassetta delle lettere dell'appartamento (cassetta n. 89, nell'atrio della residenza — adesivo “CAEN & MER IMMO / STOP PUB”), al 18 Avenue Maréchal Montgomery",
    },
  "Visite du logement": {
    en: "Tour of the apartment",
    de: "Rundgang durch die Wohnung",
    es: "Visita del alojamiento",
    it: "Visita dell'alloggio",
  },
};
