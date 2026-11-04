import type { Logement } from "../types";

/**
 * Logement « La Maison du Passeur » — demeure historique en bord de Seine, 78840 Moisson.
 *
 * Grande propriété face au château de La Roche-Guyon, à 1h de Paris : maison
 * principale sur 3 niveaux, maison d'amis près de la piscine, chapelle
 * reconsacrée (2023), cave voûtée avec salle à manger d'été, ponton privatif
 * sur la Seine, billard & gym, pas de tir à l'arc, jardin à la française clos de
 * 0,5 ha et petit bois. Gardiens présents sur place (Danijela & Tomica).
 *
 * Standing : livret rédigé dans un registre soigné, entièrement traduit dans les
 * 5 langues (fr/en/de/es/it) directement dans les champs `Tx`. Les champs
 * `string[]` (checkinExpress, decouverte, electromenager, equipements,
 * quartier.aPied) sont traduits via data/i18n-content.ts (clé = texte FR exact).
 *
 * ⚠️ À COMPLÉTER quand disponible :
 *   - wifi : réseau + mot de passe réels (codes au dos des box) — pour l'instant
 *     une mention bilingue est affichée.
 *   - coords : affiner le point exact de la maison sur la carte si besoin.
 */
export const maisondupasseur: Logement = {
  id: "maisondupasseur",
  nom: "La Maison du Passeur",
  adresse: "La Vacherie, 78840 Moisson",
  ville: "Moisson",
  itineraire: "https://maps.google.com/?q=La+Vacherie+78840+Moisson",
  coords: [49.0825, 1.627],
  cover: "/logements/maisondupasseur/cover.jpg",

  motAccueil: {
    fr: "Bienvenue à La Maison du Passeur. Cette demeure historique de briques et de pierres, posée au bord de Seine face au château de La Roche-Guyon, vous ouvre son jardin à la française, son petit bois et ses dépendances — chapelle, piscine chauffée et ponton privatif. Jadis dépendance du château, la maison a traversé les siècles en gardant toute son âme. Danijela et Tomica, nos gardiens, veillent sur les lieux et se tiennent à votre disposition. Nous vous souhaitons un séjour hors du temps, à une heure de Paris. 🏰",
    en: "Welcome to La Maison du Passeur. This historic brick-and-stone residence, set on the banks of the Seine and facing the Château de La Roche-Guyon, opens onto its formal French garden, private woodland and outbuildings — a chapel, a heated pool and a private pontoon. Once a dependency of the château, the house has crossed the centuries with its soul intact. Our caretakers, Danijela and Tomica, watch over the estate and remain at your service throughout your stay. We wish you a timeless escape, just an hour from Paris. 🏰",
    de: "Willkommen in La Maison du Passeur. Dieses historische Anwesen aus Ziegel und Naturstein liegt am Ufer der Seine, gegenüber dem Schloss La Roche-Guyon, und öffnet Ihnen seinen französischen Garten, sein kleines Wäldchen und seine Nebengebäude – Kapelle, beheizter Pool und privater Bootssteg. Einst ein Nebengut des Schlosses, hat das Haus die Jahrhunderte mit unversehrter Seele überdauert. Unsere Hausmeister Danijela und Tomica kümmern sich um das Anwesen und stehen Ihnen jederzeit zur Verfügung. Wir wünschen Ihnen einen Aufenthalt außerhalb der Zeit, nur eine Stunde von Paris entfernt. 🏰",
    es: "Bienvenido a La Maison du Passeur. Esta residencia histórica de ladrillo y piedra, a orillas del Sena y frente al castillo de La Roche-Guyon, le abre su jardín a la francesa, su pequeño bosque y sus dependencias: capilla, piscina climatizada y embarcadero privado. Antigua dependencia del castillo, la casa ha atravesado los siglos conservando toda su alma. Nuestros guardeses, Danijela y Tomica, cuidan de la propiedad y están a su disposición durante toda su estancia. Le deseamos una escapada fuera del tiempo, a una hora de París. 🏰",
    it: "Benvenuti a La Maison du Passeur. Questa dimora storica in mattoni e pietra, affacciata sulle rive della Senna di fronte al castello di La Roche-Guyon, vi apre il suo giardino alla francese, il suo piccolo bosco e le sue dipendenze: cappella, piscina riscaldata e pontile privato. Un tempo dipendenza del castello, la casa ha attraversato i secoli conservando intatta la sua anima. I nostri custodi, Danijela e Tomica, vegliano sulla proprietà e restano a vostra disposizione per tutto il soggiorno. Vi auguriamo un soggiorno fuori dal tempo, a un'ora da Parigi. 🏰",
  },

  arrivee: {
    horaire: {
      fr: "Arrivée à partir de 14h — accueil par nos gardiens",
      en: "Check-in from 2 p.m. — welcomed by our caretakers",
      de: "Anreise ab 14 Uhr — Empfang durch unsere Hausmeister",
      es: "Llegada a partir de las 14 h — recibido por nuestros guardeses",
      it: "Arrivo dalle 14 — accoglienza dai nostri custodi",
    },
    checkinExpress: [
      "Par la route : A13, sortie Vernon, puis GPS « La Vacherie, 78840 Moisson »",
      "En cas de difficulté, visez le village de Moisson : la propriété est à 5 km, en bord de Seine vers l'aval",
      "Le chemin d'accès longe la Seine : la barrière rouge et blanche à main s'ouvre et se referme librement",
      "Nos gardiens, présents sur place, vous accueillent et vous remettent les clés",
      "En train : gare de Bonnières-sur-Seine (10 min), ou Mantes-la-Jolie / Vernon (20–25 min)",
    ],
    parking: {
      fr: "Vous pouvez vous garer librement devant la grille principale de la maison ou, si besoin, dans le garage. Les véhicules électriques peuvent y être rechargés — demandez au gardien de vous aider le cas échéant.",
      en: "You may park freely in front of the main gate of the house or, if needed, in the garage. Electric vehicles can be charged there — simply ask the caretaker for assistance.",
      de: "Sie können frei vor dem Haupttor des Hauses oder bei Bedarf in der Garage parken. Elektrofahrzeuge können dort geladen werden – bitten Sie den Hausmeister bei Bedarf um Hilfe.",
      es: "Puede aparcar libremente delante de la verja principal de la casa o, si lo necesita, en el garaje. Los vehículos eléctricos pueden cargarse allí; pida ayuda al guardés si es necesario.",
      it: "Potete parcheggiare liberamente davanti al cancello principale della casa o, all'occorrenza, nel garage. I veicoli elettrici possono essere ricaricati lì: chiedete aiuto al custode se necessario.",
    },
    bagages: {
      fr: "Nos gardiens étant présents sur place, le dépôt de bagages avant l'arrivée ou après le départ est possible : il vous suffit de leur en faire la demande.",
      en: "As our caretakers are on site, luggage drop-off before check-in or after check-out is possible — simply ask them.",
      de: "Da unsere Hausmeister vor Ort sind, ist eine Gepäckaufbewahrung vor der Anreise oder nach der Abreise möglich – sprechen Sie sie einfach an.",
      es: "Como nuestros guardeses están en la propiedad, es posible dejar el equipaje antes de la llegada o después de la salida: basta con pedírselo.",
      it: "Poiché i nostri custodi sono sul posto, è possibile lasciare i bagagli prima dell'arrivo o dopo la partenza: basta chiederlo a loro.",
    },
    decouverte: {
      rdc: [
        "Salon convivial",
        "Salle à manger",
        "Cuisine équipée",
        "Dégagement et chaufferie à la suite de la cuisine",
      ],
      etage: [
        "Suite parentale (Master Bedroom) avec salle de bain attenante et dressing",
        "Deux chambres supplémentaires",
        "Seconde salle de bain partagée",
      ],
      etage2: [
        "Grande salle de jeux faisant office de salle de cinéma",
        "Bibliothèque pour les enfants",
        "Lits d'appoint pour des couchages supplémentaires",
      ],
      exterieur: [
        "Jardin à la française clos de 0,5 ha",
        "Piscine chauffée, protégée par une barrière",
        "Maison d'amis près de la piscine (chambre, salle de bain, salon et cuisine)",
        "Chapelle reconsacrée en 2023",
        "Ponton privatif sur la Seine",
        "Billard et salle de gym",
        "Cave voûtée avec salle à manger d'été",
        "Barbecue, balançoires et trampoline",
        "Petit bois privé et pas de tir à l'arc",
        "Garage avec recharge pour véhicules électriques",
      ],
    },
  },

  wifi: {
    reseau: "Au dos de la box — on the back of the router",
    motDePasse: "Au dos de la box — on the back of the router",
  },

  pratique: {
    aSavoir: [],
    aSavoirSections: [
      {
        titre: {
          fr: "👥 Vos contacts sur place",
          en: "👥 Your contacts on site",
          de: "👥 Ihre Ansprechpartner vor Ort",
          es: "👥 Sus contactos in situ",
          it: "👥 I vostri contatti sul posto",
        },
        contenu: {
          fr: "Nos gardiens vivent sur la propriété et se tiennent à votre disposition :\n\n• Danijela Bosiokovic (gardienne) — +33 6 22 79 87 32\n• Tomica Bosiokovic (gardien) — +33 6 17 58 04 63\n• Agathe Langlois (gestionnaire) — +33 6 77 55 15 48\n• Grégory Declercq (propriétaire, en cas d'urgence) — +33 6 14 45 87 50",
          en: "Our caretakers live on the estate and are at your service:\n\n• Danijela Bosiokovic (caretaker) — +33 6 22 79 87 32\n• Tomica Bosiokovic (caretaker) — +33 6 17 58 04 63\n• Agathe Langlois (property manager) — +33 6 77 55 15 48\n• Grégory Declercq (owner, for emergencies) — +33 6 14 45 87 50",
          de: "Unsere Hausmeister wohnen auf dem Anwesen und stehen Ihnen zur Verfügung:\n\n• Danijela Bosiokovic (Hausmeisterin) — +33 6 22 79 87 32\n• Tomica Bosiokovic (Hausmeister) — +33 6 17 58 04 63\n• Agathe Langlois (Verwalterin) — +33 6 77 55 15 48\n• Grégory Declercq (Eigentümer, im Notfall) — +33 6 14 45 87 50",
          es: "Nuestros guardeses viven en la propiedad y están a su disposición:\n\n• Danijela Bosiokovic (guardesa) — +33 6 22 79 87 32\n• Tomica Bosiokovic (guardés) — +33 6 17 58 04 63\n• Agathe Langlois (gestora) — +33 6 77 55 15 48\n• Grégory Declercq (propietario, en caso de urgencia) — +33 6 14 45 87 50",
          it: "I nostri custodi vivono nella proprietà e sono a vostra disposizione:\n\n• Danijela Bosiokovic (custode) — +33 6 22 79 87 32\n• Tomica Bosiokovic (custode) — +33 6 17 58 04 63\n• Agathe Langlois (gestore) — +33 6 77 55 15 48\n• Grégory Declercq (proprietario, in caso di urgenza) — +33 6 14 45 87 50",
        },
      },
      {
        titre: {
          fr: "📶 WiFi",
          en: "📶 Wi-Fi",
          de: "📶 WLAN",
          es: "📶 WiFi",
          it: "📶 Wi-Fi",
        },
        contenu: {
          fr: "Les box internet se trouvent dans la Master Bedroom, au premier étage de la maison principale, et dans le salon de la maison d'amis. Le réseau et le mot de passe figurent au dos de chaque box.",
          en: "The internet routers are located in the Master Bedroom, on the first floor of the main house, and in the living room of the guest house. The network name and password are printed on the back of each router.",
          de: "Die Internet-Router befinden sich im Master Bedroom im ersten Stock des Haupthauses sowie im Wohnzimmer des Gästehauses. Netzwerkname und Passwort stehen auf der Rückseite jedes Routers.",
          es: "Los routers de internet se encuentran en la Master Bedroom, en la primera planta de la casa principal, y en el salón de la casa de invitados. El nombre de la red y la contraseña figuran en la parte trasera de cada router.",
          it: "I router internet si trovano nella Master Bedroom, al primo piano della casa principale, e nel salotto della casa degli ospiti. Il nome della rete e la password sono riportati sul retro di ogni router.",
        },
      },
      {
        titre: {
          fr: "💧 Eau potable",
          en: "💧 Drinking water",
          de: "💧 Trinkwasser",
          es: "💧 Agua potable",
          it: "💧 Acqua potabile",
        },
        contenu: {
          fr: "La nappe phréatique étant en bord de Seine, nous évitons de boire l'eau du robinet. Des bouteilles d'eau sont à votre disposition ; si vous en manquez, demandez au gardien ou achetez-en à l'Intermarché de Freneuse.",
          en: "As the water table lies along the Seine, we prefer not to drink the tap water. Bottled water is provided for you; should you run out, ask the caretaker or buy some at the Intermarché in Freneuse.",
          de: "Da der Grundwasserspiegel direkt an der Seine liegt, trinken wir das Leitungswasser nicht. Wasserflaschen stehen für Sie bereit; sollten sie zur Neige gehen, wenden Sie sich an den Hausmeister oder kaufen Sie welche im Intermarché in Freneuse.",
          es: "Como el nivel freático está junto al Sena, evitamos beber el agua del grifo. Hay botellas de agua a su disposición; si se le acaban, pídaselas al guardés o cómprelas en el Intermarché de Freneuse.",
          it: "Poiché la falda freatica si trova lungo la Senna, evitiamo di bere l'acqua del rubinetto. Sono a vostra disposizione bottiglie d'acqua; se finiscono, chiedete al custode o acquistatene all'Intermarché di Freneuse.",
        },
      },
      {
        titre: {
          fr: "🔥 Chaudière à gaz",
          en: "🔥 Gas boiler",
          de: "🔥 Gasheizung",
          es: "🔥 Caldera de gas",
          it: "🔥 Caldaia a gas",
        },
        contenu: {
          fr: "La chaudière à gaz est située dans le dégagement, à la suite de la cuisine de la maison principale. En cas de problème, appelez le gardien.",
          en: "The gas boiler is located in the passage leading off the kitchen of the main house. Should any issue arise, please call the caretaker.",
          de: "Die Gasheizung befindet sich im Durchgang hinter der Küche des Haupthauses. Bei Problemen rufen Sie bitte den Hausmeister an.",
          es: "La caldera de gas se encuentra en el pasillo contiguo a la cocina de la casa principal. En caso de problema, llame al guardés.",
          it: "La caldaia a gas si trova nel disimpegno accanto alla cucina della casa principale. In caso di problemi, chiamate il custode.",
        },
      },
      {
        titre: {
          fr: "🚽 Fosse septique",
          en: "🚽 Septic tank",
          de: "🚽 Klärgrube",
          es: "🚽 Fosa séptica",
          it: "🚽 Fossa settica",
        },
        contenu: {
          fr: "La maison est isolée et n'est pas raccordée au tout-à-l'égout : l'assainissement est assuré par une fosse septique sous le jardin, en bord de Seine. Pour éviter toute pollution, merci de ne rien jeter dans les toilettes d'autre que du papier-toilette.",
          en: "The house is isolated and not connected to mains drainage: wastewater is treated by a septic tank beneath the garden, along the Seine. To avoid any pollution, please flush nothing other than toilet paper.",
          de: "Das Haus liegt abgelegen und ist nicht an die Kanalisation angeschlossen: Die Abwasserentsorgung erfolgt über eine Klärgrube unter dem Garten an der Seine. Um jede Verschmutzung zu vermeiden, werfen Sie bitte nichts anderes als Toilettenpapier in die Toilette.",
          es: "La casa está aislada y no está conectada al alcantarillado: el saneamiento se realiza mediante una fosa séptica bajo el jardín, a orillas del Sena. Para evitar cualquier contaminación, no tire nada en el inodoro que no sea papel higiénico.",
          it: "La casa è isolata e non è collegata alla rete fognaria: la depurazione è assicurata da una fossa settica sotto il giardino, lungo la Senna. Per evitare qualsiasi inquinamento, vi preghiamo di non gettare nel water nulla che non sia carta igienica.",
        },
      },
      {
        titre: {
          fr: "🪟 Volets du XVIIᵉ siècle",
          en: "🪟 17th-century shutters",
          de: "🪟 Fensterläden aus dem 17. Jahrhundert",
          es: "🪟 Contraventanas del siglo XVII",
          it: "🪟 Persiane del XVII secolo",
        },
        contenu: {
          fr: "Les volets datent du XVIIᵉ siècle et leur fermeture demande un petit tour de main : ouvrez la fenêtre, tirez les volets au maximum vers vous, puis refermez la fenêtre d'un coup, sans forcer. Les volets viennent s'insérer dans la rigole du montant en bois prévu à cet effet : la pièce est alors parfaitement occultée. En cas de difficulté, demandez au gardien.",
          en: "The shutters date from the 17th century and closing them calls for a little knack: open the window, pull the shutters fully towards you, then close the window again in one smooth motion, without forcing. The shutters slot into the groove of the wooden frame made for them, leaving the room perfectly dark. If you have any trouble, ask the caretaker.",
          de: "Die Fensterläden stammen aus dem 17. Jahrhundert, und ihr Schließen erfordert etwas Geschick: Öffnen Sie das Fenster, ziehen Sie die Läden ganz zu sich heran und schließen Sie dann das Fenster in einer Bewegung, ohne Kraft. Die Läden gleiten in die dafür vorgesehene Rille des Holzrahmens, sodass der Raum vollständig abgedunkelt ist. Bei Schwierigkeiten wenden Sie sich an den Hausmeister.",
          es: "Las contraventanas datan del siglo XVII y cerrarlas requiere un poco de maña: abra la ventana, tire de las contraventanas totalmente hacia usted y vuelva a cerrar la ventana de un solo movimiento, sin forzar. Las contraventanas encajan en la ranura del marco de madera prevista para ello, dejando la habitación perfectamente a oscuras. Si tiene alguna dificultad, pregunte al guardés.",
          it: "Le persiane risalgono al XVII secolo e la loro chiusura richiede un piccolo accorgimento: aprite la finestra, tirate le persiane completamente verso di voi, poi richiudete la finestra con un solo movimento, senza forzare. Le persiane si inseriscono nella scanalatura del montante in legno predisposta, lasciando la stanza perfettamente al buio. In caso di difficoltà, chiedete al custode.",
        },
      },
      {
        titre: {
          fr: "🏊 Piscine chauffée",
          en: "🏊 Heated pool",
          de: "🏊 Beheizter Pool",
          es: "🏊 Piscina climatizada",
          it: "🏊 Piscina riscaldata",
        },
        contenu: {
          fr: "La piscine est à votre disposition : elle est chauffée et nettoyée chaque jour par le gardien. Elle est protégée par une barrière, à maintenir fermée pour la sécurité des enfants (il n'y a pas de sirène d'alarme).",
          en: "The pool is at your disposal: it is heated and cleaned daily by the caretaker. It is enclosed by a safety fence, which must be kept closed to protect children (there is no alarm siren).",
          de: "Der Pool steht Ihnen zur Verfügung: Er wird beheizt und täglich vom Hausmeister gereinigt. Er ist durch einen Zaun gesichert, der zum Schutz der Kinder geschlossen zu halten ist (es gibt keine Alarmsirene).",
          es: "La piscina está a su disposición: está climatizada y el guardés la limpia a diario. Está protegida por una valla que debe mantenerse cerrada por la seguridad de los niños (no hay sirena de alarma).",
          it: "La piscina è a vostra disposizione: è riscaldata e pulita ogni giorno dal custode. È protetta da una barriera, da tenere chiusa per la sicurezza dei bambini (non è presente una sirena d'allarme).",
        },
      },
      {
        titre: {
          fr: "🎱 Billard & salle de gym",
          en: "🎱 Billiards & gym",
          de: "🎱 Billard & Fitnessraum",
          es: "🎱 Billar y gimnasio",
          it: "🎱 Biliardo e palestra",
        },
        contenu: {
          fr: "Le billard et la salle de gym sont à votre disposition. Profitez pleinement de cet espace — vous pouvez même y faire du bruit sans déranger personne.",
          en: "The billiard room and the gym are at your disposal. Make the most of this space — you can even be as lively as you like without disturbing anyone.",
          de: "Billardzimmer und Fitnessraum stehen Ihnen zur Verfügung. Genießen Sie diesen Bereich in vollen Zügen – Sie dürfen hier sogar Lärm machen, ohne jemanden zu stören.",
          es: "El billar y el gimnasio están a su disposición. Disfrute plenamente de este espacio: incluso puede hacer ruido sin molestar a nadie.",
          it: "Il biliardo e la palestra sono a vostra disposizione. Approfittate appieno di questo spazio: potete anche fare rumore senza disturbare nessuno.",
        },
      },
      {
        titre: {
          fr: "🏹 Tir à l'arc",
          en: "🏹 Archery",
          de: "🏹 Bogenschießen",
          es: "🏹 Tiro con arco",
          it: "🏹 Tiro con l'arco",
        },
        contenu: {
          fr: "Nous pratiquons le tir à l'arc et la propriété dispose de plusieurs pas de tir : jusqu'à 17 m dans le bois et jusqu'à 40 m dans le jardin. Soyez prudents si vous souhaitez les utiliser ; le gardien est là pour vous accompagner en cas de besoin.",
          en: "We practise archery, and the estate has several shooting ranges: up to 17 m in the woods and up to 40 m in the garden. Please take care if you wish to use them; the caretaker is on hand to assist whenever needed.",
          de: "Wir betreiben Bogenschießen, und das Anwesen verfügt über mehrere Schießbahnen: bis zu 17 m im Wald und bis zu 40 m im Garten. Seien Sie vorsichtig, wenn Sie sie nutzen möchten; der Hausmeister hilft Ihnen bei Bedarf gern.",
          es: "Practicamos el tiro con arco y la propiedad cuenta con varias líneas de tiro: hasta 17 m en el bosque y hasta 40 m en el jardín. Tenga cuidado si desea utilizarlas; el guardés está a su disposición para ayudarle si lo necesita.",
          it: "Pratichiamo il tiro con l'arco e la proprietà dispone di diverse linee di tiro: fino a 17 m nel bosco e fino a 40 m nel giardino. Siate prudenti se desiderate utilizzarle; il custode è a disposizione per aiutarvi in caso di necessità.",
        },
      },
      {
        titre: {
          fr: "⛪ La chapelle",
          en: "⛪ The chapel",
          de: "⛪ Die Kapelle",
          es: "⛪ La capilla",
          it: "⛪ La cappella",
        },
        contenu: {
          fr: "La chapelle fut historiquement bâtie pour la visite d'une Reine de France au château de La Roche-Guyon, au temps où La Vacherie en était une dépendance, reliée au château par un grand pont de pierre. Reconsacrée en 2023, elle a depuis accueilli plusieurs baptêmes et mariages. Elle est à votre disposition.",
          en: "The chapel was originally built for the visit of a Queen of France to the Château de La Roche-Guyon, in the days when La Vacherie was one of its dependencies, linked to the château by a great stone bridge. Reconsecrated in 2023, it has since hosted several christenings and weddings. It is yours to enjoy.",
          de: "Die Kapelle wurde einst für den Besuch einer Königin von Frankreich auf Schloss La Roche-Guyon errichtet, zu einer Zeit, als La Vacherie ein Nebengut des Schlosses war, mit ihm durch eine große Steinbrücke verbunden. 2023 neu geweiht, war sie seither Schauplatz mehrerer Taufen und Hochzeiten. Sie steht Ihnen zur Verfügung.",
          es: "La capilla se construyó originalmente para la visita de una reina de Francia al castillo de La Roche-Guyon, en la época en que La Vacherie era una de sus dependencias, unida al castillo por un gran puente de piedra. Reconsagrada en 2023, ha acogido desde entonces varios bautizos y bodas. Está a su disposición.",
          it: "La cappella fu costruita in origine per la visita di una regina di Francia al castello di La Roche-Guyon, all'epoca in cui La Vacherie ne era una dipendenza, collegata al castello da un grande ponte di pietra. Riconsacrata nel 2023, da allora ha ospitato diversi battesimi e matrimoni. È a vostra disposizione.",
        },
      },
      {
        titre: {
          fr: "🚣 Le ponton",
          en: "🚣 The pontoon",
          de: "🚣 Der Bootssteg",
          es: "🚣 El embarcadero",
          it: "🚣 Il pontile",
        },
        contenu: {
          fr: "La propriété dispose d'un ponton privatif sur la Seine. Nous vous recommandons de maintenir la porte métallique close afin d'éviter tout accident.",
          en: "The estate has its own private pontoon on the Seine. We recommend keeping the metal gate closed at all times to prevent any accident.",
          de: "Das Anwesen verfügt über einen eigenen privaten Bootssteg an der Seine. Wir empfehlen, das Metalltor stets geschlossen zu halten, um Unfälle zu vermeiden.",
          es: "La propiedad dispone de un embarcadero privado sobre el Sena. Le recomendamos mantener la puerta metálica cerrada para evitar cualquier accidente.",
          it: "La proprietà dispone di un pontile privato sulla Senna. Vi raccomandiamo di tenere sempre chiuso il cancello metallico per evitare qualsiasi incidente.",
        },
      },
      {
        titre: {
          fr: "🍷 La cave",
          en: "🍷 The cellar",
          de: "🍷 Der Keller",
          es: "🍷 La bodega",
          it: "🍷 La cantina",
        },
        contenu: {
          fr: "La cave, sous la maison principale, comporte quatre espaces : une pièce principale avec accès par le jardin, un espace de rangement (première à gauche) où vous trouverez des jeux d'extérieur et des transats, une salle à manger d'été (deuxième à gauche), idéale pour un déjeuner les jours de pluie ou de grande chaleur, et une cave à vin (au fond à droite, fermée à clé). Quelques bouteilles sont entreposées sur un petit rack métallique contre le mur de gauche de la pièce principale : prenez-en librement une ou deux, nous sommes ravis de les partager avec vous.",
          en: "The cellar, beneath the main house, comprises four spaces: a main room with garden access; a storage room (first on the left), where you will find outdoor games and sun loungers; a summer dining room (second on the left), perfect for lunch on rainy or very hot days; and a wine cellar (at the far right, kept locked). A few bottles are stored on a small metal rack against the left-hand wall of the main room: do help yourself to one or two — we are delighted to share them with you.",
          de: "Der Keller unter dem Haupthaus umfasst vier Bereiche: einen Hauptraum mit Zugang zum Garten, einen Abstellraum (erste Tür links) mit Außenspielen und Liegestühlen, ein Sommer-Esszimmer (zweite Tür links), ideal für ein Mittagessen an Regentagen oder bei großer Hitze, sowie einen Weinkeller (hinten rechts, verschlossen). Einige Flaschen stehen auf einem kleinen Metallregal an der linken Wand des Hauptraums: Nehmen Sie ruhig ein oder zwei – wir teilen sie gern mit Ihnen.",
          es: "La bodega, bajo la casa principal, consta de cuatro espacios: una sala principal con acceso por el jardín; un trastero (primera a la izquierda) donde encontrará juegos de exterior y tumbonas; un comedor de verano (segunda a la izquierda), ideal para almorzar los días de lluvia o de mucho calor; y una bodega de vinos (al fondo a la derecha, cerrada con llave). Algunas botellas están guardadas en un pequeño botellero metálico contra la pared izquierda de la sala principal: coja libremente una o dos, estaremos encantados de compartirlas con usted.",
          it: "La cantina, sotto la casa principale, comprende quattro spazi: una sala principale con accesso dal giardino; un ripostiglio (prima a sinistra) dove troverete giochi da esterno e sdraio; una sala da pranzo estiva (seconda a sinistra), ideale per un pranzo nei giorni di pioggia o di gran caldo; e una cantina dei vini (in fondo a destra, chiusa a chiave). Alcune bottiglie sono riposte su una piccola rastrelliera metallica contro la parete sinistra della sala principale: prendetene pure una o due, siamo lieti di condividerle con voi.",
        },
      },
      {
        titre: {
          fr: "🌳 Barrières & portails",
          en: "🌳 Gates & barriers",
          de: "🌳 Tore & Schranken",
          es: "🌳 Barreras y portones",
          it: "🌳 Barriere e cancelli",
        },
        contenu: {
          fr: "Les champs et le bois sont clos par des portails en bois et des grilles en fer : tout est privatisé pour vous. Nous vous recommandons cependant de les maintenir fermés la nuit, afin d'éviter la venue d'animaux qui abîment le sous-bois et le jardin.",
          en: "The fields and woodland are enclosed by wooden gates and iron railings: the whole estate is yours alone. We do recommend, however, keeping them closed at night, to prevent animals from coming in and damaging the undergrowth and the garden.",
          de: "Die Felder und der Wald sind durch Holztore und Eisengitter eingefriedet: Das gesamte Anwesen steht Ihnen allein zur Verfügung. Wir empfehlen jedoch, sie nachts geschlossen zu halten, damit keine Tiere hereinkommen und das Unterholz und den Garten beschädigen.",
          es: "Los campos y el bosque están cerrados con portones de madera y rejas de hierro: todo está reservado para usted. No obstante, le recomendamos mantenerlos cerrados por la noche para evitar la entrada de animales que dañan el sotobosque y el jardín.",
          it: "I campi e il bosco sono recintati da cancelli in legno e inferriate: tutto è riservato a voi. Vi raccomandiamo tuttavia di tenerli chiusi di notte, per evitare l'ingresso di animali che danneggiano il sottobosco e il giardino.",
        },
      },
      {
        titre: {
          fr: "🧹 Ménage & personnel de maison",
          en: "🧹 Housekeeping & staff",
          de: "🧹 Reinigung & Hauspersonal",
          es: "🧹 Limpieza y personal",
          it: "🧹 Pulizie e personale",
        },
        contenu: {
          fr: "Un ménage de fin de séjour est inclus dans votre forfait. Il est aussi possible d'organiser, directement avec la gardienne, une prestation quotidienne ou à la demande de ménage, de baby-sitting ou de cuisine. Un ou deux personnels de maison logés chez le gardien peuvent également être mis à disposition de façon permanente — à demander par message avant votre séjour.",
          en: "An end-of-stay cleaning is included in your package. You may also arrange, directly with the caretaker, daily or on-request housekeeping, babysitting or cooking services. One or two members of household staff, lodged with the caretaker, can likewise be made available throughout your stay — please request this by message before you arrive.",
          de: "Eine Endreinigung ist in Ihrem Paket enthalten. Sie können zudem direkt mit der Hausmeisterin tägliche oder bedarfsweise Reinigungs-, Babysitting- oder Kochdienste vereinbaren. Ein oder zwei beim Hausmeister untergebrachte Hausangestellte können Ihnen ebenfalls dauerhaft zur Verfügung stehen – bitte fragen Sie dies vor Ihrer Ankunft per Nachricht an.",
          es: "La limpieza de fin de estancia está incluida en su paquete. También puede organizar, directamente con la guardesa, un servicio diario o a demanda de limpieza, canguro o cocina. Uno o dos miembros del personal de servicio, alojados en casa del guardés, pueden ponerse igualmente a su disposición de forma permanente; solicítelo por mensaje antes de su estancia.",
          it: "Una pulizia di fine soggiorno è inclusa nel vostro pacchetto. È inoltre possibile organizzare, direttamente con la custode, un servizio quotidiano o su richiesta di pulizie, baby-sitting o cucina. Uno o due membri del personale di casa, alloggiati presso il custode, possono essere messi a disposizione in modo permanente: fatene richiesta via messaggio prima del soggiorno.",
        },
      },
      {
        titre: {
          fr: "🐾 Animaux",
          en: "🐾 Pets",
          de: "🐾 Haustiere",
          es: "🐾 Mascotas",
          it: "🐾 Animali",
        },
        contenu: {
          fr: "Vos animaux de compagnie sont les bienvenus dans la propriété.",
          en: "Your pets are most welcome on the estate.",
          de: "Ihre Haustiere sind auf dem Anwesen herzlich willkommen.",
          es: "Sus mascotas son bienvenidas en la propiedad.",
          it: "I vostri animali domestici sono i benvenuti nella proprietà.",
        },
      },
    ],
    electromenager: [
      "Cuisinière à gaz",
      "Réfrigérateur",
      "Cafetière",
      "Lave-linge",
      "Sèche-cheveux",
      "Fer à repasser",
      "Télévision",
    ],
    reglementInterieur: {
      capaciteMax: 10,
      nonFumeur: false,
      animauxAcceptes: true,
      evenementsAutorises: false,
      horairesCalme: {
        fr: "La propriété est un havre de paix : merci de préserver la quiétude des lieux, en particulier la nuit, par égard pour le voisinage et nos gardiens qui résident sur place.",
        en: "The estate is a haven of peace: please help preserve its tranquillity, especially at night, out of consideration for the neighbourhood and for our caretakers, who live on site.",
        de: "Das Anwesen ist eine Oase der Ruhe: Bitte bewahren Sie seine Stille, besonders nachts, aus Rücksicht auf die Nachbarschaft und unsere vor Ort wohnenden Hausmeister.",
        es: "La propiedad es un remanso de paz: le rogamos que preserve la tranquilidad del lugar, sobre todo por la noche, por consideración hacia el vecindario y hacia nuestros guardeses, que residen en la propiedad.",
        it: "La proprietà è un'oasi di pace: vi preghiamo di preservarne la tranquillità, soprattutto di notte, per rispetto del vicinato e dei nostri custodi, che risiedono sul posto.",
      },
      texte: {
        fr: "Capacité maximale : 10 voyageurs, soit 6 adultes et 4 enfants de moins de 12 ans (les 4 places supplémentaires correspondent aux 2 lits superposés). Il s'agit d'une demeure ancienne qui a conservé son caractère d'origine : merci d'en prendre soin et de respecter son charme d'antan. Aucune fête ni événement n'est autorisé dans le cadre de la location (les cérémonies à la chapelle se préparent directement avec le propriétaire). Pour la sécurité de tous, veillez à maintenir fermées la barrière de la piscine, la porte du ponton et les portails. Vos animaux de compagnie sont les bienvenus.",
        en: "Maximum capacity: 10 guests — 6 adults and 4 children under 12 (the 4 extra places are the 2 bunk beds). This is an old residence that has kept its original character: please treat it with care and respect its timeless charm. No parties or events are permitted as part of the rental (ceremonies in the chapel are arranged directly with the owner). For everyone's safety, please keep the pool fence, the pontoon gate and the estate gates closed. Your pets are most welcome.",
        de: "Maximale Belegung: 10 Gäste – 6 Erwachsene und 4 Kinder unter 12 Jahren (die 4 zusätzlichen Plätze sind die 2 Etagenbetten). Es handelt sich um ein altes Anwesen, das seinen ursprünglichen Charakter bewahrt hat: Bitte behandeln Sie es mit Sorgfalt und achten Sie seinen Charme vergangener Zeiten. Feiern oder Veranstaltungen sind im Rahmen der Vermietung nicht gestattet (Zeremonien in der Kapelle werden direkt mit dem Eigentümer vereinbart). Halten Sie zur Sicherheit aller den Poolzaun, das Stegtor und die Tore geschlossen. Ihre Haustiere sind herzlich willkommen.",
        es: "Capacidad máxima: 10 huéspedes, es decir, 6 adultos y 4 niños menores de 12 años (las 4 plazas adicionales corresponden a las 2 literas). Se trata de una casa antigua que ha conservado su carácter original: le rogamos que la cuide y respete su encanto de antaño. No se permiten fiestas ni eventos en el marco del alquiler (las ceremonias en la capilla se organizan directamente con el propietario). Por la seguridad de todos, mantenga cerradas la valla de la piscina, la puerta del embarcadero y los portones. Sus mascotas son bienvenidas.",
        it: "Capacità massima: 10 ospiti, ovvero 6 adulti e 4 bambini sotto i 12 anni (i 4 posti supplementari corrispondono ai 2 letti a castello). Si tratta di una dimora antica che ha conservato il suo carattere originale: vi preghiamo di averne cura e di rispettarne il fascino d'altri tempi. Non sono ammesse feste né eventi nell'ambito del soggiorno (le cerimonie nella cappella si organizzano direttamente con il proprietario). Per la sicurezza di tutti, tenete chiusi la recinzione della piscina, il cancello del pontile e i cancelli. I vostri animali domestici sono i benvenuti.",
      },
    },
    poubelles: {
      fr: "Il n'y a pas de collecte des poubelles à la propriété. Déposez vos sacs dans la remorque située dans le garage : le gardien les apportera à la déchetterie. Il peut s'en charger chaque jour, ou vous pouvez les gérer vous-même si vous préférez.",
      en: "There is no waste collection at the property. Place your bags in the trailer in the garage: the caretaker will take them to the tip. He is happy to do this daily, or you may manage it yourself if you prefer.",
      de: "Auf dem Anwesen gibt es keine Müllabfuhr. Legen Sie Ihre Säcke in den Anhänger in der Garage: Der Hausmeister bringt sie zum Wertstoffhof. Er übernimmt dies gern täglich, oder Sie kümmern sich selbst darum, wenn Sie möchten.",
      es: "No hay recogida de basura en la propiedad. Deposite sus bolsas en el remolque situado en el garaje: el guardés las llevará al punto limpio. Puede encargarse de ello a diario, o puede gestionarlo usted mismo si lo prefiere.",
      it: "Non è prevista la raccolta dei rifiuti nella proprietà. Depositate i sacchi nel rimorchio situato nel garage: il custode li porterà all'isola ecologica. Può farlo ogni giorno, oppure potete gestirli voi stessi se preferite.",
    },
    animaux: {
      fr: "Vos animaux de compagnie sont les bienvenus dans la propriété.",
      en: "Your pets are most welcome on the estate.",
      de: "Ihre Haustiere sind auf dem Anwesen herzlich willkommen.",
      es: "Sus mascotas son bienvenidas en la propiedad.",
      it: "I vostri animali domestici sono i benvenuti nella proprietà.",
    },
  },

  equipements: [
    "WiFi",
    "Cuisine équipée",
    "Cuisinière à gaz",
    "Réfrigérateur",
    "Cafetière",
    "Cheminées",
    "Chauffage",
    "Eau chaude",
    "Lave-linge",
    "Fer à repasser",
    "Sèche-cheveux",
    "Télévision",
    "Lit pour bébé",
    "Piscine chauffée",
    "Ponton privatif sur la Seine",
    "Jardin à la française (0,5 ha)",
    "Petit bois privé",
    "Chapelle",
    "Billard & salle de gym",
    "Tir à l'arc",
    "Cave & salle à manger d'été",
    "Barbecue",
    "Balançoires & trampoline",
    "Maison d'amis",
    "Mobilier d'extérieur",
    "Au bord de l'eau",
    "Stationnement gratuit sur place",
    "Recharge véhicule électrique",
    "Linge de lit & serviettes",
    "Ménage de fin de séjour inclus",
    "Animaux acceptés",
  ],

  menageEnSejour: {
    fr: "Le ménage de fin de séjour est inclus. Besoin d'un ménage supplémentaire pendant votre séjour ? C'est possible : organisez-le directement avec la gardienne.",
    en: "End-of-stay cleaning is included. Would you like additional cleaning during your stay? It can be arranged directly with the caretaker.",
    de: "Die Endreinigung ist inbegriffen. Wünschen Sie während Ihres Aufenthalts eine zusätzliche Reinigung? Das lässt sich direkt mit der Hausmeisterin vereinbaren.",
    es: "La limpieza de fin de estancia está incluida. ¿Desea una limpieza adicional durante su estancia? Puede organizarla directamente con la guardesa.",
    it: "Le pulizie di fine soggiorno sono incluse. Desiderate una pulizia aggiuntiva durante il soggiorno? È possibile organizzarla direttamente con la custode.",
  },

  depart: {
    horaire: {
      fr: "Jusqu'à 12h",
      en: "By 12 noon",
      de: "Bis 12 Uhr",
      es: "Hasta las 12 h",
      it: "Entro le 12",
    },
    instructions: [
      {
        fr: "Rassembler le linge de toilette utilisé",
        en: "Gather the used towels",
        de: "Die benutzten Handtücher zusammenlegen",
        es: "Reunir las toallas usadas",
        it: "Raccogliere la biancheria da bagno usata",
      },
      {
        fr: "Déposer les poubelles dans la remorque du garage (ou les confier au gardien)",
        en: "Place the rubbish in the trailer in the garage (or hand it to the caretaker)",
        de: "Den Müll in den Anhänger in der Garage legen (oder dem Hausmeister übergeben)",
        es: "Dejar la basura en el remolque del garaje (o entregarla al guardés)",
        it: "Depositare i rifiuti nel rimorchio del garage (o consegnarli al custode)",
      },
      {
        fr: "Fermer les volets et les fenêtres ; refermer la barrière de la piscine et la porte du ponton",
        en: "Close the shutters and windows; shut the pool fence and the pontoon gate",
        de: "Fensterläden und Fenster schließen; Poolzaun und Stegtor schließen",
        es: "Cerrar las contraventanas y las ventanas; cerrar la valla de la piscina y la puerta del embarcadero",
        it: "Chiudere le persiane e le finestre; richiudere la recinzione della piscina e il cancello del pontile",
      },
      {
        fr: "Baisser le chauffage et éteindre les lumières",
        en: "Turn down the heating and switch off the lights",
        de: "Die Heizung herunterdrehen und das Licht ausschalten",
        es: "Bajar la calefacción y apagar las luces",
        it: "Abbassare il riscaldamento e spegnere le luci",
      },
      {
        fr: "Remettre les clés au gardien",
        en: "Return the keys to the caretaker",
        de: "Die Schlüssel dem Hausmeister zurückgeben",
        es: "Entregar las llaves al guardés",
        it: "Riconsegnare le chiavi al custode",
      },
    ],
  },

  quartier: {
    aPied: [
      "Le ponton privatif sur la Seine",
      "Le jardin à la française et le petit bois",
      "La Promenade des Roches, ancien chemin de halage en bord de Seine",
      "La boucle de Moisson, havre de calme",
    ],
    note: {
      fr: "Vous séjournez à l'intérieur de la boucle de Moisson, un lieu historique d'un calme rare, auquel on accède par la route intérieure de la boucle en traversant le village de Freneuse. La propriété est entourée de belles choses à 5–10 minutes de voiture, et les grands lieux culturels de la vallée de la Seine — Giverny, Vernon, La Roche-Guyon — sont à une vingtaine de minutes.",
      en: "You are staying within the Boucle de Moisson, a historic and rarely quiet spot reached by the loop's inner road through the village of Freneuse. The estate is surrounded by lovely places just 5–10 minutes away by car, while the great cultural landmarks of the Seine valley — Giverny, Vernon, La Roche-Guyon — are about twenty minutes away.",
      de: "Sie wohnen innerhalb der Boucle de Moisson, einem historischen Ort von seltener Ruhe, den man über die innere Schleifenstraße durch das Dorf Freneuse erreicht. Das Anwesen ist von schönen Zielen umgeben, nur 5–10 Autominuten entfernt, während die großen Kulturstätten des Seinetals – Giverny, Vernon, La Roche-Guyon – etwa zwanzig Minuten entfernt liegen.",
      es: "Se aloja dentro del Meandro de Moisson, un lugar histórico de una calma poco común, al que se accede por la carretera interior del meandro atravesando el pueblo de Freneuse. La propiedad está rodeada de hermosos lugares a 5–10 minutos en coche, mientras que los grandes enclaves culturales del valle del Sena —Giverny, Vernon, La Roche-Guyon— están a unos veinte minutos.",
      it: "Soggiornate all'interno dell'ansa di Moisson, un luogo storico di rara tranquillità, raggiungibile dalla strada interna dell'ansa attraversando il villaggio di Freneuse. La proprietà è circondata da luoghi incantevoli a 5–10 minuti d'auto, mentre i grandi siti culturali della valle della Senna — Giverny, Vernon, La Roche-Guyon — si trovano a una ventina di minuti.",
    },
  },

  autourDeMoi: {
    categories: [
      {
        key: "culture",
        lieux: [
          {
            nom: "Château de La Roche-Guyon",
            desc: {
              fr: "Juste en face, de l'autre côté de la Seine : l'unique château d'Île-de-France bâti au pied d'une falaise, avec son donjon médiéval, ses écuries et son potager en terrasses. Un lieu historique saisissant. Tél. 01 34 79 74 42.",
              en: "Right across the Seine: the only château in the Île-de-France built at the foot of a cliff, with its medieval keep, stables and terraced kitchen garden. A striking historic site. Tel. +33 1 34 79 74 42.",
              de: "Direkt gegenüber, auf der anderen Seite der Seine: das einzige Schloss der Île-de-France, das am Fuße einer Klippe erbaut wurde, mit mittelalterlichem Bergfried, Stallungen und terrassiertem Gemüsegarten. Ein eindrucksvoller historischer Ort. Tel. +33 1 34 79 74 42.",
              es: "Justo enfrente, al otro lado del Sena: el único castillo de la Isla de Francia construido al pie de un acantilado, con su torreón medieval, sus caballerizas y su huerto en terrazas. Un lugar histórico impresionante. Tel. +33 1 34 79 74 42.",
              it: "Proprio di fronte, dall'altra parte della Senna: l'unico castello dell'Île-de-France costruito ai piedi di una falesia, con il suo mastio medievale, le scuderie e l'orto a terrazze. Un luogo storico suggestivo. Tel. +33 1 34 79 74 42.",
            },
            coords: [49.0796, 1.6294],
          },
          {
            nom: "Giverny — Maison et jardins de Claude Monet",
            desc: {
              fr: "La maison du peintre, le jardin d'eau et le célèbre pont japonais, à ~20 min. L'un des plus beaux jardins de France, berceau de l'impressionnisme.",
              en: "The painter's house, the water garden and the famous Japanese bridge, about 20 minutes away. One of the loveliest gardens in France, the cradle of Impressionism.",
              de: "Das Haus des Malers, der Wassergarten und die berühmte japanische Brücke, etwa 20 Minuten entfernt. Einer der schönsten Gärten Frankreichs, die Wiege des Impressionismus.",
              es: "La casa del pintor, el jardín acuático y el famoso puente japonés, a unos 20 min. Uno de los jardines más bellos de Francia, cuna del impresionismo.",
              it: "La casa del pittore, il giardino d'acqua e il celebre ponte giapponese, a ~20 min. Uno dei più bei giardini di Francia, culla dell'impressionismo.",
            },
            coords: [49.0758, 1.5338],
          },
          {
            nom: "Musée des Impressionnismes Giverny",
            desc: {
              fr: "À deux pas de la maison de Monet : l'impressionnisme et ses paysages de la vallée de la Seine, dans un beau jardin contemporain.",
              en: "A stone's throw from Monet's house: Impressionism and its landscapes of the Seine valley, set in a beautiful contemporary garden.",
              de: "Nur wenige Schritte von Monets Haus: der Impressionismus und seine Landschaften des Seinetals, in einem schönen zeitgenössischen Garten.",
              es: "A dos pasos de la casa de Monet: el impresionismo y sus paisajes del valle del Sena, en un bello jardín contemporáneo.",
              it: "A due passi dalla casa di Monet: l'impressionismo e i suoi paesaggi della valle della Senna, in un bel giardino contemporaneo.",
            },
            coords: [49.0746, 1.5316],
          },
          {
            nom: "Vernon",
            desc: {
              fr: "Jolie ville au bord de la Seine : son vieux moulin sur le pont, la collégiale Notre-Dame et le musée Poulain, à ~20–25 min.",
              en: "A charming town on the Seine: its old mill astride the bridge, the Notre-Dame collegiate church and the Poulain museum, about 20–25 minutes away.",
              de: "Hübsche Stadt an der Seine: die alte Mühle auf der Brücke, die Stiftskirche Notre-Dame und das Poulain-Museum, etwa 20–25 Minuten entfernt.",
              es: "Bonita ciudad a orillas del Sena: su viejo molino sobre el puente, la colegiata de Notre-Dame y el museo Poulain, a ~20–25 min.",
              it: "Graziosa cittadina sulla Senna: il vecchio mulino sul ponte, la collegiata di Notre-Dame e il museo Poulain, a ~20–25 min.",
            },
            coords: [49.0937, 1.4853],
          },
          {
            nom: "Village de Vétheuil",
            desc: {
              fr: "De l'autre côté de la Seine, son église des XIIᵉ–XVIᵉ siècles immortalisée par Monet. Relié à Moisson-Lavacourt par un bac l'été.",
              en: "Across the Seine, its 12th–16th-century church immortalised by Monet. Linked to Moisson-Lavacourt by a ferry in summer.",
              de: "Auf der anderen Seite der Seine seine von Monet verewigte Kirche aus dem 12.–16. Jahrhundert. Im Sommer durch eine Fähre mit Moisson-Lavacourt verbunden.",
              es: "Al otro lado del Sena, su iglesia de los siglos XII–XVI inmortalizada por Monet. Conectado con Moisson-Lavacourt por una barcaza en verano.",
              it: "Dall'altra parte della Senna, la sua chiesa dei secoli XII–XVI immortalata da Monet. Collegato a Moisson-Lavacourt da un traghetto d'estate.",
            },
            coords: [49.03, 1.636],
          },
        ],
      },
      {
        key: "nature",
        lieux: [
          {
            nom: "La Promenade des Roches",
            desc: {
              fr: "L'ancien chemin de halage en bord de Seine, au pied des falaises : idéal pour une promenade en famille au fil de l'eau.",
              en: "The former towpath along the Seine, at the foot of the cliffs: perfect for a family stroll by the water.",
              de: "Der ehemalige Treidelpfad entlang der Seine am Fuße der Felsen: ideal für einen Familienspaziergang am Wasser.",
              es: "El antiguo camino de sirga a orillas del Sena, al pie de los acantilados: ideal para un paseo en familia junto al agua.",
              it: "L'antica strada alzaia lungo la Senna, ai piedi delle falesie: ideale per una passeggiata in famiglia lungo l'acqua.",
            },
            coords: [49.082, 1.644],
          },
          {
            nom: "Forêt domaniale de la boucle de Seine",
            desc: {
              fr: "Grande forêt domaniale au cœur de la boucle de Moisson : sentiers, calme et nature à perte de vue.",
              en: "A large state forest at the heart of the Boucle de Moisson: trails, quiet and nature as far as the eye can see.",
              de: "Großer Staatswald im Herzen der Boucle de Moisson: Wege, Ruhe und Natur, so weit das Auge reicht.",
              es: "Gran bosque estatal en el corazón del meandro de Moisson: senderos, calma y naturaleza hasta donde alcanza la vista.",
              it: "Grande foresta demaniale nel cuore dell'ansa di Moisson: sentieri, quiete e natura a perdita d'occhio.",
            },
            coords: [49.07, 1.68],
          },
        ],
      },
      {
        key: "loisirs",
        lieux: [
          {
            nom: "Base de loisirs de Moisson-Mousseaux",
            desc: {
              fr: "Au cœur de la boucle : plages, tennis, accrobranche, longue balade autour du lac, club de voile et un golf très agréable pour les amateurs.",
              en: "At the heart of the loop: beaches, tennis, treetop adventure, a long walk around the lake, a sailing club and a very pleasant golf course for enthusiasts.",
              de: "Im Herzen der Schleife: Strände, Tennis, Kletterwald, eine lange Runde um den See, ein Segelclub und ein sehr schöner Golfplatz für Liebhaber.",
              es: "En el corazón del meandro: playas, tenis, tirolina entre árboles, un largo paseo alrededor del lago, club de vela y un campo de golf muy agradable para los aficionados.",
              it: "Nel cuore dell'ansa: spiagge, tennis, percorso acrobatico tra gli alberi, una lunga passeggiata attorno al lago, un circolo velico e un golf molto piacevole per gli appassionati.",
            },
            coords: [49.0756, 1.7],
          },
          {
            nom: "Bac de Moisson-Lavacourt / Vétheuil",
            desc: {
              fr: "Le bac qui relie Moisson-Lavacourt à Vétheuil l'été : une traversée pittoresque de la Seine, d'une rive à l'autre.",
              en: "The ferry linking Moisson-Lavacourt to Vétheuil in summer: a picturesque crossing of the Seine from one bank to the other.",
              de: "Die Fähre, die im Sommer Moisson-Lavacourt mit Vétheuil verbindet: eine malerische Überquerung der Seine von einem Ufer zum anderen.",
              es: "La barcaza que une Moisson-Lavacourt con Vétheuil en verano: una pintoresca travesía del Sena de una orilla a otra.",
              it: "Il traghetto che collega Moisson-Lavacourt a Vétheuil d'estate: una pittoresca traversata della Senna da una riva all'altra.",
            },
            coords: [49.032, 1.63],
          },
          {
            nom: "Biotropica",
            desc: {
              fr: "Serre tropicale et parc animalier pour les enfants, vers Val-de-Reuil, dans la même direction que Vernon.",
              en: "A tropical greenhouse and wildlife park for children, towards Val-de-Reuil, in the same direction as Vernon.",
              de: "Tropisches Gewächshaus und Tierpark für Kinder, Richtung Val-de-Reuil, in derselben Richtung wie Vernon.",
              es: "Invernadero tropical y parque de animales para los niños, hacia Val-de-Reuil, en la misma dirección que Vernon.",
              it: "Serra tropicale e parco animali per bambini, verso Val-de-Reuil, nella stessa direzione di Vernon.",
            },
            coords: [49.2772, 1.2178],
          },
        ],
      },
      {
        key: "restaurants",
        lieux: [
          {
            nom: "Le Domaine de la Corniche — Rolleboise",
            desc: {
              fr: "Table étoilée (1 étoile Michelin) avec vue panoramique sur la Seine, à Rolleboise (~15 min). L'adresse d'exception de la vallée.",
              en: "A Michelin-starred restaurant with a panoramic view over the Seine, in Rolleboise (~15 min). The valley's address of distinction.",
              de: "Mit einem Michelin-Stern ausgezeichnetes Restaurant mit Panoramablick auf die Seine, in Rolleboise (~15 Min.). Die Spitzenadresse des Tals.",
              es: "Restaurante con estrella Michelin y vistas panorámicas al Sena, en Rolleboise (~15 min). La dirección de excepción del valle.",
              it: "Ristorante stellato Michelin con vista panoramica sulla Senna, a Rolleboise (~15 min). L'indirizzo d'eccezione della valle.",
            },
            coords: [49.0128, 1.638],
          },
          {
            nom: "Tables de Vernon & Giverny",
            desc: {
              fr: "Plusieurs bonnes tables vers Vernon et Giverny, à ~20 min, de la cuisine bistronomique aux terrasses au bord de l'eau.",
              en: "Several good restaurants towards Vernon and Giverny, about 20 minutes away, from bistronomy to waterside terraces.",
              de: "Mehrere gute Restaurants Richtung Vernon und Giverny, etwa 20 Minuten entfernt, von der Bistronomie bis zu Terrassen am Wasser.",
              es: "Varios buenos restaurantes hacia Vernon y Giverny, a unos 20 min, de la cocina bistronómica a las terrazas junto al agua.",
              it: "Diversi buoni ristoranti verso Vernon e Giverny, a ~20 min, dalla cucina bistronomica alle terrazze in riva all'acqua.",
            },
            coords: [49.0937, 1.4853],
          },
        ],
      },
      {
        key: "bouche",
        lieux: [
          {
            nom: "Le Boucher du Coin — Bonnières-sur-Seine",
            desc: {
              fr: "La boucherie que nous recommandons tout particulièrement pour vos barbecues de printemps et d'été, à Bonnières-sur-Seine.",
              en: "The butcher we especially recommend for your spring and summer barbecues, in Bonnières-sur-Seine.",
              de: "Die Metzgerei, die wir für Ihre Grillabende im Frühling und Sommer besonders empfehlen, in Bonnières-sur-Seine.",
              es: "La carnicería que recomendamos especialmente para sus barbacoas de primavera y verano, en Bonnières-sur-Seine.",
              it: "La macelleria che consigliamo in particolare per i vostri barbecue di primavera ed estate, a Bonnières-sur-Seine.",
            },
            coords: [49.0417, 1.576],
          },
          {
            nom: "Boulangeries de Bonnières",
            desc: {
              fr: "Plusieurs boulangeries à Bonnières-sur-Seine pour le pain frais et les viennoiseries du matin.",
              en: "Several bakeries in Bonnières-sur-Seine for fresh bread and morning pastries.",
              de: "Mehrere Bäckereien in Bonnières-sur-Seine für frisches Brot und Gebäck am Morgen.",
              es: "Varias panaderías en Bonnières-sur-Seine para pan fresco y bollería matinal.",
              it: "Diverse panetterie a Bonnières-sur-Seine per pane fresco e viennoiserie del mattino.",
            },
            coords: [49.0421, 1.5778],
          },
        ],
      },
      {
        key: "courses",
        lieux: [
          {
            nom: "Intermarché Freneuse",
            desc: {
              fr: "Le supermarché le plus pratique, à Freneuse (~10 min) : courses, bouteilles d'eau et dépannage.",
              en: "The most convenient supermarket, in Freneuse (~10 min): groceries, bottled water and essentials.",
              de: "Der praktischste Supermarkt, in Freneuse (~10 Min.): Einkäufe, Wasserflaschen und Notwendiges.",
              es: "El supermercado más práctico, en Freneuse (~10 min): compras, botellas de agua y lo necesario.",
              it: "Il supermercato più comodo, a Freneuse (~10 min): spesa, bottiglie d'acqua e necessità.",
            },
            coords: [49.0206, 1.586],
          },
          {
            nom: "Commerces de la Boucle de Seine",
            desc: {
              fr: "La Boucle de Seine dispose de nombreux commerces : Intermarché, boulangeries, tabac et autres, à quelques minutes.",
              en: "The Boucle de Seine has plenty of shops: supermarket, bakeries, tobacconist and more, just a few minutes away.",
              de: "Die Boucle de Seine bietet zahlreiche Geschäfte: Supermarkt, Bäckereien, Tabakladen und mehr, nur wenige Minuten entfernt.",
              es: "El Meandro del Sena cuenta con numerosos comercios: supermercado, panaderías, estanco y más, a pocos minutos.",
              it: "L'ansa della Senna dispone di numerosi negozi: supermercato, panetterie, tabaccheria e altro, a pochi minuti.",
            },
            coords: [49.0417, 1.5772],
          },
        ],
      },
      {
        key: "transports",
        lieux: [
          {
            nom: "Gare de Bonnières-sur-Seine",
            desc: {
              fr: "La gare la plus proche (~10 min en voiture) : liaisons vers Paris Saint-Lazare et Mantes.",
              en: "The nearest station (~10 min by car): services to Paris Saint-Lazare and Mantes.",
              de: "Der nächste Bahnhof (~10 Min. mit dem Auto): Verbindungen nach Paris Saint-Lazare und Mantes.",
              es: "La estación más cercana (~10 min en coche): enlaces con París Saint-Lazare y Mantes.",
              it: "La stazione più vicina (~10 min in auto): collegamenti con Paris Saint-Lazare e Mantes.",
            },
            coords: [49.0417, 1.5772],
          },
          {
            nom: "Gare de Vernon-Giverny",
            desc: {
              fr: "À ~20–25 min : trains directs vers Paris Saint-Lazare (~45 min) et navette pour Giverny.",
              en: "About 20–25 min away: direct trains to Paris Saint-Lazare (~45 min) and a shuttle to Giverny.",
              de: "Etwa 20–25 Min. entfernt: Direktzüge nach Paris Saint-Lazare (~45 Min.) und Shuttle nach Giverny.",
              es: "A ~20–25 min: trenes directos a París Saint-Lazare (~45 min) y lanzadera a Giverny.",
              it: "A ~20–25 min: treni diretti per Paris Saint-Lazare (~45 min) e navetta per Giverny.",
            },
            coords: [49.0931, 1.476],
          },
          {
            nom: "Gare de Mantes-la-Jolie",
            desc: {
              fr: "À ~20–25 min : nombreuses liaisons vers Paris Saint-Lazare et Paris Montparnasse.",
              en: "About 20–25 min away: frequent services to Paris Saint-Lazare and Paris Montparnasse.",
              de: "Etwa 20–25 Min. entfernt: zahlreiche Verbindungen nach Paris Saint-Lazare und Paris Montparnasse.",
              es: "A ~20–25 min: numerosos enlaces con París Saint-Lazare y París Montparnasse.",
              it: "A ~20–25 min: numerosi collegamenti con Paris Saint-Lazare e Paris Montparnasse.",
            },
            coords: [48.9896, 1.7033],
          },
          {
            nom: "Autoroute A13 — sortie Vernon",
            desc: {
              fr: "L'autoroute de Normandie relie la propriété à Paris en ~1h, par la sortie Vernon.",
              en: "The Normandy motorway connects the estate to Paris in about 1 hour, via the Vernon exit.",
              de: "Die Autobahn der Normandie verbindet das Anwesen in etwa 1 Stunde mit Paris, über die Ausfahrt Vernon.",
              es: "La autopista de Normandía conecta la propiedad con París en ~1 h, por la salida de Vernon.",
              it: "L'autostrada della Normandia collega la proprietà a Parigi in ~1 ora, dall'uscita di Vernon.",
            },
            coords: [49.0937, 1.4853],
          },
        ],
      },
      {
        key: "sante",
        lieux: [
          {
            nom: "Pharmacie de Bonnières-sur-Seine",
            desc: {
              fr: "La pharmacie la plus proche, à Bonnières-sur-Seine. Pharmacie de garde : composez le 3237.",
              en: "The nearest pharmacy, in Bonnières-sur-Seine. For the on-duty pharmacy, dial 3237.",
              de: "Die nächste Apotheke, in Bonnières-sur-Seine. Notdienst-Apotheke: wählen Sie 3237.",
              es: "La farmacia más cercana, en Bonnières-sur-Seine. Farmacia de guardia: marque el 3237.",
              it: "La farmacia più vicina, a Bonnières-sur-Seine. Farmacia di turno: componete il 3237.",
            },
            coords: [49.0417, 1.579],
          },
        ],
      },
      {
        key: "hopital",
        lieux: [
          {
            nom: "Urgences — Centre hospitalier de Vernon",
            desc: {
              fr: "Les urgences à privilégier, souvent moins encombrées que celles de Mantes-la-Jolie. Tél. 02 32 71 66 00.",
              en: "The A&E to favour, often less crowded than the one in Mantes-la-Jolie. Tel. +33 2 32 71 66 00.",
              de: "Die zu bevorzugende Notaufnahme, oft weniger überlastet als die in Mantes-la-Jolie. Tel. +33 2 32 71 66 00.",
              es: "Las urgencias preferibles, a menudo menos saturadas que las de Mantes-la-Jolie. Tel. +33 2 32 71 66 00.",
              it: "Il pronto soccorso da preferire, spesso meno affollato di quello di Mantes-la-Jolie. Tel. +33 2 32 71 66 00.",
            },
            coords: [49.0858, 1.4786],
          },
          {
            nom: "Centre hospitalier de Mantes-la-Jolie",
            desc: {
              fr: "Autre service d'urgences, à ~25 min, à Mantes-la-Jolie.",
              en: "Another A&E department, about 25 minutes away, in Mantes-la-Jolie.",
              de: "Eine weitere Notaufnahme, etwa 25 Minuten entfernt, in Mantes-la-Jolie.",
              es: "Otro servicio de urgencias, a ~25 min, en Mantes-la-Jolie.",
              it: "Un altro pronto soccorso, a ~25 min, a Mantes-la-Jolie.",
            },
            coords: [48.968, 1.716],
          },
        ],
      },
      {
        key: "police",
        lieux: [
          {
            nom: "Gendarmerie (Freneuse / Bonnières-sur-Seine)",
            desc: {
              fr: "À la limite entre Freneuse et Bonnières-sur-Seine, à côté de l'Intermarché et du McDonald's. En cas d'urgence, composez le 17.",
              en: "On the boundary between Freneuse and Bonnières-sur-Seine, next to the Intermarché and the McDonald's. In an emergency, dial 17.",
              de: "An der Grenze zwischen Freneuse und Bonnières-sur-Seine, neben dem Intermarché und dem McDonald's. Im Notfall wählen Sie 17.",
              es: "En el límite entre Freneuse y Bonnières-sur-Seine, junto al Intermarché y el McDonald's. En caso de urgencia, marque el 17.",
              it: "Al confine tra Freneuse e Bonnières-sur-Seine, accanto all'Intermarché e al McDonald's. In caso di urgenza, componete il 17.",
            },
            coords: [49.03, 1.58],
          },
        ],
      },
    ],
    coupDeCoeur: {
      fr: "Au coucher du soleil, installez-vous sur le ponton face au château de La Roche-Guyon, un verre de la cave à la main — c'est peut-être le plus beau moment de la journée. Et le dimanche, offrez-vous un déjeuner étoilé au Domaine de la Corniche, avant une promenade sur l'ancien chemin de halage au bord de la Seine.",
      en: "At sunset, settle on the pontoon facing the Château de La Roche-Guyon, a glass from the cellar in hand — perhaps the loveliest moment of the day. And on Sunday, treat yourselves to a Michelin-starred lunch at the Domaine de la Corniche, before a stroll along the old towpath by the Seine.",
      de: "Lassen Sie sich bei Sonnenuntergang auf dem Steg gegenüber dem Schloss La Roche-Guyon nieder, ein Glas aus dem Keller in der Hand – vielleicht der schönste Moment des Tages. Und sonntags gönnen Sie sich ein Sterne-Mittagessen im Domaine de la Corniche, bevor Sie auf dem alten Treidelpfad an der Seine spazieren gehen.",
      es: "Al atardecer, acomódese en el embarcadero frente al castillo de La Roche-Guyon, con una copa de la bodega en la mano: quizá el momento más bello del día. Y el domingo, regálese un almuerzo con estrella Michelin en el Domaine de la Corniche, antes de un paseo por el antiguo camino de sirga a orillas del Sena.",
      it: "Al tramonto, sistematevi sul pontile di fronte al castello di La Roche-Guyon, con un bicchiere della cantina in mano: forse il momento più bello della giornata. E la domenica, concedetevi un pranzo stellato al Domaine de la Corniche, prima di una passeggiata lungo l'antica strada alzaia in riva alla Senna.",
    },
  },

  numerosUtiles: {
    contact: { nom: "Agathe — Josie Conciergerie", tel: "+33677551548" },
    note: {
      fr: "Nos gardiens, Danijela (+33 6 22 79 87 32) et Tomica (+33 6 17 58 04 63), sont présents sur place pour toute demande. Agathe, votre gestionnaire, reste joignable sur la conversation Airbnb ou par téléphone. En cas d'urgence, le propriétaire Grégory peut être contacté au +33 6 14 45 87 50.",
      en: "Our caretakers, Danijela (+33 6 22 79 87 32) and Tomica (+33 6 17 58 04 63), are on site for any request. Agathe, your property manager, remains reachable via the Airbnb conversation or by phone. In an emergency, the owner, Grégory, can be reached on +33 6 14 45 87 50.",
      de: "Unsere Hausmeister Danijela (+33 6 22 79 87 32) und Tomica (+33 6 17 58 04 63) sind für jedes Anliegen vor Ort. Agathe, Ihre Verwalterin, ist über die Airbnb-Konversation oder telefonisch erreichbar. Im Notfall ist der Eigentümer Grégory unter +33 6 14 45 87 50 erreichbar.",
      es: "Nuestros guardeses, Danijela (+33 6 22 79 87 32) y Tomica (+33 6 17 58 04 63), están en la propiedad para cualquier petición. Agathe, su gestora, sigue localizable a través de la conversación de Airbnb o por teléfono. En caso de urgencia, puede contactar con el propietario, Grégory, en el +33 6 14 45 87 50.",
      it: "I nostri custodi, Danijela (+33 6 22 79 87 32) e Tomica (+33 6 17 58 04 63), sono sul posto per ogni richiesta. Agathe, la vostra gestore, resta raggiungibile tramite la conversazione Airbnb o per telefono. In caso di urgenza, il proprietario Grégory è contattabile al +33 6 14 45 87 50.",
    },
    urgences: { samu: "15", police: "17", pompiers: "18", europeen: "112" },
  },
};
