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
  "Allumez l'écran avec le bouton Power de la télécommande, puis patientez quelques secondes que le menu d'accueil apparaisse. Sélectionnez ensuite l'application TV ou la chaîne souhaitée à l'aide des flèches de navigation, et validez avec OK.":
    {
      en: "Turn on the screen with the Power button on the remote, then wait a few seconds for the home menu to appear. Then select the TV app or the channel you want using the navigation arrows, and confirm with OK.",
      de: "Schalten Sie den Bildschirm mit der Power-Taste der Fernbedienung ein und warten Sie einige Sekunden, bis das Startmenü erscheint. Wählen Sie dann mit den Navigationspfeilen die TV-App oder den gewünschten Sender aus und bestätigen Sie mit OK.",
      es: "Encienda la pantalla con el botón Power del mando y espere unos segundos a que aparezca el menú de inicio. A continuación, seleccione la aplicación de TV o el canal deseado con las flechas de navegación y confirme con OK.",
      it: "Accendete lo schermo con il pulsante Power del telecomando, poi attendete qualche secondo che appaia il menu iniziale. Selezionate quindi l'app TV o il canale desiderato con le frecce di navigazione e confermate con OK.",
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
  "🛗 5ᵉ étage sans ascenseur": {
    en: "🛗 5th floor, no lift",
    de: "🛗 5. Stock ohne Aufzug",
    es: "🛗 5ª planta sin ascensor",
    it: "🛗 5º piano senza ascensore",
  },
  "L'appartement se situe au 5ᵉ étage et l'immeuble n'a pas d'ascenseur. Prévoyez-le pour vos bagages — mais l'effort est récompensé par le calme, l'absence de vis-à-vis et la vue sur les quais.":
    {
      en: "The apartment is on the 5th floor and the building has no lift. Bear it in mind for your luggage — but the effort is rewarded with quiet, no neighbours opposite and a view over the quays.",
      de: "Die Wohnung befindet sich im 5. Stock und das Gebäude hat keinen Aufzug. Denken Sie an Ihr Gepäck — die Mühe wird jedoch mit Ruhe, freiem Blick ohne Gegenüber und Aussicht auf die Kais belohnt.",
      es: "El apartamento está en la 5ª planta y el edificio no tiene ascensor. Téngalo en cuenta para su equipaje, pero el esfuerzo se ve recompensado con tranquilidad, sin vistas de enfrente y vistas a los muelles.",
      it: "L'appartamento si trova al 5º piano e l'edificio non ha ascensore. Tenetelo presente per i bagagli — ma lo sforzo è ricompensato dalla tranquillità, dall'assenza di dirimpettai e dalla vista sui moli.",
    },
  "🪟 Stores & occultation": {
    en: "🪟 Blinds & blackout",
    de: "🪟 Rollos & Verdunklung",
    es: "🪟 Estores y oscurecimiento",
    it: "🪟 Tende e oscuramento",
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
  "L'accès se fait en autonomie : la clé et le badge d'accès se trouvent dans une boîte à clés sécurisée. Son emplacement et son code vous sont communiqués par message avant votre arrivée.":
    {
      en: "Access is self check-in: the key and the access badge are in a secure key box. Its location and code are sent to you by message before your arrival.",
      de: "Der Zugang erfolgt selbstständig: Der Schlüssel und das Zugangs-Badge befinden sich in einem gesicherten Schlüsselkasten. Sein Standort und Code werden Ihnen vor Ihrer Ankunft per Nachricht mitgeteilt.",
      es: "El acceso es autónomo: la llave y el mando de acceso se encuentran en una caja de seguridad. Su ubicación y su código se le comunican por mensaje antes de su llegada.",
      it: "L'accesso è in autonomia: la chiave e il badge di accesso si trovano in una cassetta di sicurezza. La sua posizione e il codice vi vengono comunicati via messaggio prima del vostro arrivo.",
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
};
