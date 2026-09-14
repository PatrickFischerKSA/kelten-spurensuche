const SRF="https://www.srf.ch/play/tv/roemer-in-der-schweiz/video/die-kelten-und-die-roemer?urn=urn:srf:video:3da18acb-1a0a-4cab-97ce-0b0fb3f4f4e4";
const stations=[
  {
    "title": "Mythos oder Spur?",
    "tag": "Das erste Fundstück",
    "intro": "Im Museum steht: «Die Kelten waren nur wilde Barbaren.» Deine Mission: Prüfe dieses Bild. Sammle an jeder Station Belege für ein genaueres Urteil.",
    "note": "Die Präsentation startet mit Vorstellungen über Gallier: Dorf, Druide, Zaubertrank und Kampf gegen Rom. Das sind zunächst Bilder im Kopf. Ob sie historisch tragen, muss erst geprüft werden.",
    "source": "PPP_Kelten (1).pptx, Folien 3–4; Die Kelten.docx, Grundzüge und Religion.",
    "tasks": [
      {
        "type": "text",
        "q": "Entlarve den Comic: Was macht die Gallier bei Asterix unbesiegbar?",
        "fields": [
          {
            "label": "Der erfundene Gegenstand",
            "accept": [
              "Zaubertrank",
              "magischer Trank",
              "der Zaubertrank"
            ]
          }
        ],
        "why": "Der Zaubertrank ist eine Erfindung der Asterix-Comics. Druiden und befestigte Siedlungen sind dagegen historisch belegt."
      },
      {
        "type": "write",
        "q": "Lege drei Belege gegen das Bild der «nur wilden Krieger» in dein Fundprotokoll.",
        "prompts": [
          "Ein Beleg aus dem Handwerk",
          "Ein Beleg aus der Wirtschaft",
          "Was zeigen diese Belege über das Klischee?"
        ],
        "criteria": [
          "Ich nenne ein konkretes Handwerk, etwa Eisenverarbeitung.",
          "Ich nenne einen wirtschaftlichen Beleg, etwa Münzen oder Fernhandel.",
          "Ich erkläre, weshalb Krieg nicht die ganze Gesellschaft beschreibt."
        ],
        "why": "Handwerk, Münzen und Handel zeigen eine vielseitige Gesellschaft. Kriege gab es ebenfalls; sie beschreiben aber nicht das gesamte Leben."
      },
      {
        "type": "write",
        "q": "Repariere diesen Museumssatz: «Alle Kelten waren Helvetier.»",
        "prompts": [
          "Schreibe eine historisch genauere Fassung."
        ],
        "criteria": [
          "Ich beschreibe die Helvetier als eine keltische Gruppe.",
          "Ich mache deutlich, dass es weitere keltische Gruppen gab."
        ],
        "why": "Die Helvetier gehörten zu den keltischen Gruppen. Auf dem Gebiet der heutigen Schweiz lebten auch andere Gruppen, etwa Rauriker und Lepontier (SRF, 01:02–01:50)."
      }
    ]
  },
  {
    "title": "Zeitspuren",
    "tag": "Schicht für Schicht",
    "intro": "Ein Fund verrät mehr, wenn du seine Zeit kennst. Ordne die grossen Veränderungen der Eisenzeit.",
    "note": "In der Hallstattzeit wurde Eisen für Geräte und Waffen wichtiger. Ab dem 5. Jahrhundert v. Chr. breitete sich die Latènekultur aus. Später entstanden grosse befestigte Zentren, die Oppida. 58 v. Chr. besiegte Caesar die Helvetier.",
    "source": "Die Kelten.docx, frühe und späte Eisenzeit; HLS, Latènezeit.",
    "tasks": [
      {
        "type": "order",
        "q": "Bringe die Ereignisse in die Reihenfolge: vom ältesten zum jüngsten.",
        "items": [
          "Caesar besiegt die Helvetier (58 v. Chr.).",
          "Eisen gewinnt an Bedeutung (8. Jh. v. Chr.).",
          "Oppida sind weit verbreitet (spätes 2.–1. Jh. v. Chr.).",
          "Latènekultur breitet sich aus (ab 5. Jh. v. Chr.)."
        ],
        "answer": [
          1,
          3,
          2,
          0
        ],
        "why": "Bei Jahreszahlen vor Christus liegt die grössere Zahl weiter zurück. Die Reihenfolge lautet: frühe Eisenzeit → Latènekultur → Oppida → 58 v. Chr."
      },
      {
        "type": "sort",
        "q": "Ordne die Merkmale den beiden Kulturen zu.",
        "items": [
          "Salzbergbau am namengebenden Ort",
          "Geometrische Zierformen",
          "Pflanzliche Motive und verborgene Gesichter",
          "Benannt nach einem Fundort am Neuenburgersee"
        ],
        "categories": [
          "Hallstatt",
          "Latène"
        ],
        "answer": [
          0,
          0,
          1,
          1
        ],
        "why": "Hallstatt steht hier für Salzreichtum und geometrische Muster. La Tène gab der späteren Kultur mit oft mehrdeutigen, pflanzlichen und figürlichen Darstellungen ihren Namen."
      },
      {
        "type": "number",
        "q": "Setze den Zeitanker: In welchem Jahr vor Christus besiegte Caesar die Helvetier?",
        "label": "Jahr vor Christus",
        "answer": 58,
        "why": "58 v. Chr. besiegte Caesar die Helvetier bei Bibracte. Die spätere Eingliederung in die römische Welt war ein längerer Prozess."
      }
    ]
  },
  {
    "title": "Das weisse Gold",
    "tag": "Werkstatt und Handelsplatz",
    "intro": "Eine Stadt braucht Nahrung, Werkzeuge und Austausch. Verknüpfe die Gegenstände mit ihrer Wirkung.",
    "note": "Salz machte Lebensmittel haltbarer und war ein begehrtes Handelsgut. Eisenwerkzeuge erleichterten die Landwirtschaft. Drehmühlen halfen bei der Getreideverarbeitung. Münzen und importierte Gefässe weisen auf wirtschaftlichen Austausch hin.",
    "source": "Die Kelten.docx, Hallstatt-Kultur; Wirtschaft und Handel; Oppida.",
    "tasks": [
      {
        "type": "pairs",
        "q": "Was bewirkt welcher Gegenstand?",
        "items": [
          "Salz",
          "Eiserne Pflugschar",
          "Drehmühle",
          "Fibel"
        ],
        "categories": [
          "Kleidung zusammenhalten",
          "Getreide mahlen",
          "Lebensmittel konservieren",
          "Boden bearbeiten"
        ],
        "answer": [
          2,
          3,
          1,
          0
        ],
        "why": "Salz konserviert, die Pflugschar bearbeitet den Boden, die Drehmühle mahlt und die Fibel hält Kleidungsstücke zusammen."
      },
      {
        "type": "write",
        "q": "Du untersuchst eine importierte Weinamphore aus einem reichen Grab. Trenne Beleg und Überdehnung.",
        "prompts": [
          "Was lässt sich aus dem Fund vorsichtig erschliessen?",
          "Was lässt sich daraus NICHT über alle Menschen ableiten?"
        ],
        "criteria": [
          "Ich leite Kontakte oder Zugang zu Importgütern ab.",
          "Ich erkläre, dass ein reiches Grab nicht den Alltag aller Menschen belegt."
        ],
        "why": "Ein Importgegenstand belegt Kontakte. Ein einzelnes reiches Grab beweist weder die Herkunft einer Person noch den Alltag der gesamten Bevölkerung."
      },
      {
        "type": "order",
        "q": "Baue eine plausible Wirkungskette: Wie konnte bessere Landwirtschaft eine Stadt versorgen?",
        "instruction": "Ordne von der Voraussetzung zur möglichen Folge. Die Kette ist vereinfacht; eine Stadt entstand nicht automatisch.",
        "items": [
          "Mehr Menschen können ausserhalb der Landwirtschaft arbeiten.",
          "Eisenwerkzeuge erleichtern die Feldarbeit.",
          "Handwerk und Handel in einem Oppidum können wachsen.",
          "Landwirtschaftliche Überschüsse können andere Menschen versorgen."
        ],
        "answer": [
          1,
          3,
          0,
          2
        ],
        "why": "Werkzeuge können die Arbeit erleichtern. Überschüsse ermöglichen Arbeitsteilung und damit städtisches Handwerk. Das ist eine plausible Erklärung, kein zwangsläufiger Ablauf."
      }
    ]
  },
  {
    "title": "Tatort Bern",
    "tag": "Der SRF-Videoauftrag",
    "intro": "Begleite Angela Haas auf die Engehalbinsel und ins Museum. Sieh dir die Ausschnitte an und prüfe, was Funde wirklich verraten.",
    "video": true,
    "note": "Falls das Video nicht verfügbar ist: Fibeln halten Kleidung zusammen und werden im Film mit Sicherheitsnadeln verglichen. Im Heiligtum wurden unter anderem Tierknochen gefunden; ein gemeinsames Opfermahl ist eine Deutung. Nach der römischen Eroberung lebte die lokale Bevölkerung weiter. Keltische und römische Einflüsse verbanden sich.",
    "source": "SRF: Die Kelten und die Römer (2024), 02:08–02:31, 07:09–07:39 und 10:31–11:21. Fragen anhand der deutschen Untertitel geprüft.",
    "tasks": [
      {
        "type": "text",
        "q": "02:08–02:31 · Ergänze die beiden Begriffe aus der Kleiderwerkstatt.",
        "fields": [
          {
            "label": "Die keltische Gewandschliesse heisst …",
            "accept": [
              "Fibel",
              "Fibeln"
            ]
          },
          {
            "label": "Die Expertin vergleicht sie mit einer heutigen …",
            "accept": [
              "Sicherheitsnadel",
              "Sicherheitsnadeln"
            ]
          }
        ],
        "why": "Die Expertin vergleicht die Fibel mit einer Sicherheitsnadel. Sie hat eine praktische und eine schmückende Funktion."
      },
      {
        "type": "mark",
        "q": "07:09–07:39 · Markiere die Wörter, die eine Deutung als unsicher kennzeichnen.",
        "passage": [
          "Wir",
          "nehmen",
          "an,",
          "dass",
          "ein",
          "Bär",
          "geopfert",
          "wurde.",
          "Vielleicht",
          "wurde",
          "er",
          "gemeinsam",
          "verspeist."
        ],
        "answer": [
          1,
          2,
          8
        ],
        "why": "«nehmen an» und «Vielleicht» kennzeichnen eine Interpretation. Gefundene Bärenknochen sind der Befund; das Ritual muss daraus erst erschlossen werden."
      },
      {
        "type": "text",
        "q": "10:31–11:21 · Ergänze den Namen der Kultur, die aus keltischen und römischen Einflüssen entstand.",
        "fields": [
          {
            "label": "Es entstand die … Kultur.",
            "accept": [
              "gallorömische",
              "galloroemische",
              "gallo-römische",
              "gallorömisch",
              "gallorömische Kultur"
            ]
          }
        ],
        "why": "Politische Eroberung bedeutet nicht, dass eine Bevölkerung verschwindet. Der Film beschreibt Weiterleben und kulturellen Austausch."
      }
    ]
  },
  {
    "title": "Wer erzählt?",
    "tag": "Das Quellenlabor",
    "intro": "Caesar kämpfte gegen keltische Gruppen. Diodor schrieb aus griechischer Perspektive. Wie verändert ihr Blick die Geschichte?",
    "note": "Diodor schildert unter anderem Goldschmuck und religiöse Scheu, verbindet das aber mit pauschalen Urteilen über die Kelten. Caesar stellt Tapferkeit und kriegerische Bedrohung heraus. Felix Müller betont die Aussenperspektive antiker Texte und die Deutungsgrenzen archäologischer Funde.",
    "source": "Die Kelten.docx, ergänzende Texte von Diodor, Caesar und Felix Müller (2012). Zusammenfassungen, keine wörtlichen Zitate.",
    "tasks": [
      {
        "type": "write",
        "q": "Du interviewst Caesar. Stelle eine kritische Frage zu seiner Darstellung der besonders tapferen Gegner.",
        "prompts": [
          "Deine Frage an Caesar",
          "Warum ist diese Frage für die Bewertung seiner Darstellung wichtig?"
        ],
        "criteria": [
          "Meine Frage berücksichtigt Caesars Rolle als Feldherr oder Politiker.",
          "Ich erkläre sein mögliches Interesse, den eigenen Sieg aufzuwerten.",
          "Ich setze eine parteiliche Perspektive nicht mit vollständiger Unbrauchbarkeit gleich."
        ],
        "why": "Caesars politische und militärische Rolle ist relevant. Das mögliche Interesse an Selbstdarstellung macht eine kritische Prüfung nötig, aber nicht jede Einzelinformation falsch."
      },
      {
        "type": "pairs",
        "q": "Verbinde die Werkzeuge der Quellenkritik mit der passenden Untersuchungsfrage.",
        "items": [
          "Urheberschaft",
          "Sprache",
          "Gegenprüfung",
          "Absicht"
        ],
        "categories": [
          "Welche Wertungen fallen auf?",
          "Welches Interesse könnte der Text verfolgen?",
          "Wer schreibt in welcher Rolle?",
          "Welche unabhängigen Funde stützen die Aussage?"
        ],
        "answer": [
          2,
          0,
          3,
          1
        ],
        "why": "Quellenkritik verbindet Autor und Rolle, sprachliche Wertungen, mögliche Absichten und die Prüfung an weiteren Belegen."
      },
      {
        "type": "write",
        "q": "Gleicher Schmuck, gleicher Stamm? Entwirf zwei unterschiedliche Erklärungen für ähnliche Schmuckfunde.",
        "prompts": [
          "Erklärung 1",
          "Erklärung 2",
          "Welche zusätzliche Information würde dir beim Prüfen helfen?"
        ],
        "criteria": [
          "Ich unterscheide mindestens zwei Möglichkeiten, etwa Handel und gemeinsame Bräuche.",
          "Ich behaupte nicht, dass ähnliche Funde automatisch dieselbe Stammeszugehörigkeit beweisen.",
          "Ich nenne eine passende Zusatzinformation, etwa Datierung, Fundkontext oder Herstellungsort."
        ],
        "why": "Verbreitungsmuster sind wertvolle Hinweise. Sie lassen sich aber nicht automatisch mit Stammesgrenzen gleichsetzen."
      }
    ]
  },
  {
    "title": "Dein Museumsurteil",
    "tag": "Die letzte Vitrine",
    "intro": "Du hast die Spuren gesammelt. Jetzt entsteht aus dem Klischee ein begründetes Geschichtsbild.",
    "note": "Druiden waren unter anderem Priester, Richter und Lehrer. Keltische Kunst kann mehrdeutig sein. Der Begriff «Hochkultur» arbeitet mit Kriterien wie Städten, Arbeitsteilung und Schrift, ist aber umstritten, wenn daraus eine Rangordnung menschlicher Kulturen gemacht wird.",
    "source": "Die Kelten.docx, Religion und Mythen; Müller; Arbeitsaufträge 10–12. Einordnung des Hochkulturbegriffs: didaktische Ergänzung. HLS, Kelten (Schriftgebrauch).",
    "tasks": [
      {
        "type": "letters",
        "q": "Entschlüssle den Begriff: Wer leitete Kulte und wirkte auch als Richter und Lehrer?",
        "letters": [
          "D",
          "R",
          "N",
          "U",
          "E",
          "I",
          "D"
        ],
        "answer": "DRUIDEN",
        "why": "Druiden werden als Priester, Richter, Gelehrte und Lehrer beschrieben. Der Zaubertrank gehört zur Comicwelt."
      },
      {
        "type": "write",
        "q": "Widerspruch auflösen: Es gibt Inschriften, aber kaum eigene erhaltene Geschichtswerke. Erkläre den Unterschied.",
        "prompts": [
          "Was belegt eine Inschrift?",
          "Was wäre darüber hinaus eine eigene Geschichtsschreibung?"
        ],
        "criteria": [
          "Ich unterscheide Schreiben von zusammenhängenden Berichten über vergangene Ereignisse.",
          "Ich leite aus fehlenden Geschichtswerken weder völlige Schriftlosigkeit noch kulturelle Minderwertigkeit ab."
        ],
        "why": "Schriftgebrauch und Geschichtsschreibung sind verschiedene Dinge. Inschriften und Berichte über Schriftgebrauch sind bekannt. Das Fehlen eigener erhaltener Geschichtswerke ist kein Werturteil über eine Kultur."
      },
      {
        "type": "write",
        "q": "Schreibe das neue Schild für die Museumsvitrine: Waren die Kelten «nur wilde Barbaren»?",
        "prompts": [
          "Dein Ausstellungstext in 3–5 Sätzen"
        ],
        "criteria": [
          "Ich nenne zwei konkrete Belege, etwa Handwerk, Münzen, Handel oder Oppida.",
          "Ich erwähne eine Grenze unseres Wissens.",
          "Ich vermeide Verallgemeinerungen über alle keltischen Gruppen."
        ],
        "why": "Ein begründetes Urteil berücksichtigt Vielfalt, wirtschaftliche Leistungen und Konflikte ebenso wie die Grenzen unserer Quellen."
      }
    ]
  }
];
