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
};
