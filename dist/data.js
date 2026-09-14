const SRF="https://www.srf.ch/play/tv/roemer-in-der-schweiz/video/die-kelten-und-die-roemer?urn=urn:srf:video:3da18acb-1a0a-4cab-97ce-0b0fb3f4f4e4";
const stations=[
  {
    "title": "Wer waren die Helvetier?",
    "tag": "Eine Spur bis in die Gegenwart",
    "intro": "Helvetia, helvetisch, Helvetier: Warum begegnet uns dieser Name bis heute? Reise ins Jahr 58 v. Chr. und finde heraus, wer die Helvetier waren, warum sie aufbrachen und wie wir ihre Geschichte erzählen.",
    "note": "Die Helvetier waren eine keltische Gruppe. Caesar beschreibt ihr Gebiet mit Rhein, Jura, Genfersee und Rhone als Grenzen. Seine Beschreibung ist eine antike Perspektive, keine Karte der heutigen Schweiz. Auf deren Gebiet lebten weitere Gruppen. Die Präsentation zeigt, wie Comics unser Keltenbild prägen; bei den Helvetiern prüfen wir solche Vorstellungen an Quellen.",
    "source": "Die Kelten.docx, Grundzüge und Caesar-Auszug; PPP_Kelten (1).pptx, Folien 3–4; HLS, Helvetier (Erinnerungskultur).",
    "tasks": [
      {
        "type": "text",
        "q": "Der erste Hinweis lautet «Helvetia». Welche keltische Gruppe steckt hinter diesem Namen?",
        "fields": [
          {
            "label": "Gesucht ist der Name der Gruppe im Plural.",
            "accept": [
              "Helvetier",
              "die Helvetier",
              "Helvetierinnen und Helvetier"
            ]
          }
        ],
        "why": "Der Name Helvetia greift auf die Helvetier zurück. Die spätere Verwendung des Namens für die Schweiz ist Erinnerungskultur; ein antiker Stamm und die heutige Bevölkerung sind nicht gleichzusetzen."
      },
      {
        "type": "write",
        "q": "Erstelle einen geografischen Steckbrief der Helvetier aus Caesars Beschreibung.",
        "prompts": [
          "Nenne zwei natürliche Grenzen, die Caesar beschreibt.",
          "Warum ergibt seine Beschreibung noch keine Karte der heutigen Schweiz?"
        ],
        "criteria": [
          "Ich nenne zwei passende Grenzen: Rhein, Jura, Genfersee oder Rhone.",
          "Ich unterscheide ein antikes Siedlungsgebiet von einem heutigen Staat."
        ],
        "why": "Caesar nennt Rhein, Jura, Genfersee und Rhone. Seine Angaben stammen aus einer antiken Darstellung; heutige Staatsgrenzen und andere damalige Gruppen müssen davon unterschieden werden."
      },
      {
        "type": "write",
        "q": "Korrigiere das Etikett: «Alle Menschen auf dem Gebiet der heutigen Schweiz waren Helvetier.»",
        "prompts": [
          "Schreibe eine historisch genauere Fassung."
        ],
        "criteria": [
          "Ich benenne die Helvetier als eine keltische Gruppe.",
          "Ich erwähne mindestens eine weitere damalige Gruppe, etwa Rauriker oder Lepontier."
        ],
        "why": "Die Helvetier gehörten zu den keltischen Gruppen. Auf dem Gebiet der heutigen Schweiz lebten auch andere Gruppen, etwa Rauriker und Lepontier (SRF, 01:02–01:50)."
      }
    ]
  },
  {
    "title": "Aufbruch 58 v. Chr.",
    "tag": "Auswandern, kämpfen, zurückkehren",
    "intro": "Die Helvetier verlassen ihr Gebiet. Caesar versperrt den Weg durch die römische Provinz. Rekonstruiere den Verlauf und unterscheide ihn von den umstrittenen Motiven.",
    "note": "58 v. Chr.: Aufbruch der Helvetier, blockierter Durchzug bei Genf, Umweg durch das Gebiet der Sequaner, Niederlage bei Bibracte und von Caesar verlangte Rückkehr. Caesar verbindet die Vorbereitung mit Orgetorix und schildert das Gebiet als eingeengt. Die tatsächlichen Auswanderungsgründe sind nicht abschliessend geklärt. Hallstatt und Latène bilden den älteren keltischen Hintergrund, erklären diesen Aufbruch aber nicht allein.",
    "source": "Die Kelten.docx, Caesar-Auszug und Niedergang; HLS, Helvetier, Abschnitte zu 58 v. Chr. und Rückkehr.",
    "tasks": [
      {
        "type": "order",
        "q": "Rekonstruiere den Weg der Helvetier im Jahr 58 v. Chr.",
        "instruction": "Ordne vom Aufbruch bis zur Rückkehr. Die Schritte fassen den Verlauf vereinfacht zusammen.",
        "items": [
          "Niederlage gegen Caesar bei Bibracte.",
          "Die Helvetier brechen aus ihrem Siedlungsgebiet auf.",
          "Caesar verlangt die Rückkehr der Besiegten.",
          "Der Durchzug bei Genf wird blockiert; der Zug nimmt einen anderen Weg."
        ],
        "answer": [
          1,
          3,
          0,
          2
        ],
        "why": "Auf den Aufbruch folgt der blockierte Durchzug. Nach dem weiteren Zug und der Niederlage bei Bibracte müssen die überlebenden Helvetier auf Caesars Anordnung zurückkehren."
      },
      {
        "type": "sort",
        "q": "Ordne die Notizen: Was steht in Caesars Darstellung, was bleibt eine offene Frage?",
        "items": [
          "Orgetorix überredet die Helvetier zum Auszug.",
          "Welche wirtschaftlichen Motive waren entscheidend?",
          "Natürliche Grenzen engen das Gebiet ein.",
          "Wie gewichteten die Beteiligten ihre unterschiedlichen Gründe?"
        ],
        "categories": [
          "Caesars Darstellung",
          "Offene Frage"
        ],
        "answer": [
          0,
          1,
          0,
          1
        ],
        "why": "Der bereitgestellte Caesar-Auszug nennt Orgetorix und natürliche Grenzen. Das macht Caesars Erklärung noch nicht vollständig oder neutral. Die tatsächlichen Motive bleiben Gegenstand der Forschung."
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
    "title": "Alltag im Oppidum",
    "tag": "Mehr als Caesars Gegner",
    "intro": "Bevor die Helvetier in Caesars Kriegsbericht auftauchen, leben sie in Siedlungen, arbeiten und handeln. Erschliesse ihren Alltag aus dem keltischen Umfeld – und prüfe, was du wirklich einer bestimmten Gruppe zuordnen kannst.",
    "note": "Salz machte Lebensmittel haltbarer und war ein begehrtes Handelsgut. Eisenwerkzeuge erleichterten die Landwirtschaft. Drehmühlen halfen bei der Getreideverarbeitung. Münzen und importierte Gefässe weisen auf wirtschaftlichen Austausch hin. Diese Beispiele stammen aus dem allgemeinen Keltentext. Sie erklären den kulturellen Zusammenhang der Helvetier; nicht jeder Gegenstand ist allein an seiner Form als helvetisch erkennbar. Ein Oppidum verband etwa Handwerk, Handel und religiöse Funktionen.",
    "source": "Die Kelten.docx, Hallstatt-Kultur; Wirtschaft und Handel; Oppida.",
    "tasks": [
      {
        "type": "pairs",
        "q": "Packe die Alltagskiste: Verbinde Gegenstände aus dem keltischen Umfeld der Helvetier mit ihrer Funktion.",
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
        "q": "Ein Museum möchte eine Weinamphore als «typisch helvetisch» beschriften. Prüfe diese Deutung anhand eines gedachten Grabfundes.",
        "prompts": [
          "Was könnte eine importierte Amphore über Kontakte verraten?",
          "Warum beweist die Amphore allein nicht, dass die bestattete Person helvetisch war?"
        ],
        "criteria": [
          "Ich leite Kontakte oder Zugang zu Importgütern ab.",
          "Ich unterscheide die Verbreitung eines Gegenstands von der Zugehörigkeit zu einer Gruppe."
        ],
        "why": "Importgüter weisen auf Austausch hin. Ähnliche Gegenstände können von mehreren Gruppen benutzt werden; die Zuschreibung «helvetisch» benötigt zusätzlichen Kontext."
      },
      {
        "type": "order",
        "q": "Wie liess sich ein Oppidum der Helvetier versorgen? Baue eine plausible Wirkungskette.",
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
    "title": "Helvetier in Bern",
    "tag": "Spurensuche auf der Engehalbinsel",
    "intro": "Unter dem heutigen Wald bei Bern lag eine bedeutende Siedlung. Der SRF-Beitrag führt dich an einen Ort, den er den Helvetiern zuordnet. Entdecke seinen Namen, untersuche die Funde und verfolge das Weiterleben unter Rom.",
    "video": true,
    "note": "Ohne Video: Der Beitrag bezeichnet die Siedlung auf der Engehalbinsel als Brenodurum und ihre Bewohner als Helvetier. Eine befestigte keltische Siedlung heisst Oppidum. Im Heiligtum wurden Bärenknochen gefunden; das vermutete Ritual ist eine Deutung. Unter römischer Herrschaft lebte die Bevölkerung weiter; es entwickelte sich eine gallorömische Kultur.",
    "source": "SRF: Die Kelten und die Römer (2024), 04:01–04:40, 07:09–07:39 und 10:31–11:21; geprüft anhand der deutschen Untertitel.",
    "tasks": [
      {
        "type": "text",
        "q": "04:01–04:40 · Entschlüssle den Fundort auf der Engehalbinsel bei Bern.",
        "fields": [
          {
            "label": "Wie nennt der Film diese Siedlung?",
            "accept": [
              "Brenodurum",
              "Brenodor"
            ]
          },
          {
            "label": "Wie heisst der Fachbegriff für eine befestigte keltische Siedlung?",
            "accept": [
              "Oppidum",
              "ein Oppidum"
            ]
          }
        ],
        "why": "Der Film nennt Brenodurum eine bedeutende Siedlung der Helvetier. Oppidum ist der lateinische Begriff für eine solche befestigte keltische Siedlung."
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
        "q": "10:31–11:21 · Die Bevölkerung lebt unter Rom weiter: Wie heisst die Kultur aus keltischen und römischen Einflüssen?",
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
    "title": "Caesars Helvetierbild",
    "tag": "Den Sieger befragen",
    "intro": "Über den Auszug der Helvetier berichtet ausgerechnet ihr Gegner Caesar. Untersuche seinen Blick: Welche Informationen liefert er, welche Interessen könnten mitsprechen und welche Belege brauchst du zusätzlich?",
    "note": "Im bereitgestellten Auszug beschreibt Caesar die Helvetier als besonders tapfer und Orgetorix als ehrgeizigen Anführer. Er ist zugleich römischer Feldherr und Autor. Diodors allgemeine Keltenbeschreibung bietet einen Vergleich, keine eigenständige Bestätigung jedes Details über Helvetier. Müller warnt davor, archäologische Verbreitungsmuster direkt mit Stammesgrenzen gleichzusetzen.",
    "source": "Die Kelten.docx, ergänzende Texte von Diodor, Caesar und Felix Müller (2012). Zusammenfassungen, keine wörtlichen Zitate.",
    "tasks": [
      {
        "type": "write",
        "q": "Du interviewst Caesar über die Helvetier. Hinterfrage seine Darstellung der besonders tapferen Gegner.",
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
        "q": "Prüfe Caesars Helvetierbericht: Verbinde jedes Werkzeug mit seiner Untersuchungsfrage.",
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
        "q": "Helvetier oder Nachbarn? Entwickle zwei Erklärungen dafür, dass ähnlicher Schmuck in mehreren Gebieten gefunden wird.",
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
    "title": "Von Helvetiern zu Helvetia",
    "tag": "Geschichte wird Erinnerung",
    "intro": "Aus dem Namen der Helvetier wurde später ein Symbol für die Schweiz. Was verbindet die beiden – und wo darf man Vergangenheit und Gegenwart nicht gleichsetzen? Gestalte das Schlussstück der Ausstellung.",
    "note": "Helvetia ist eine spätere Symbolfigur der Schweiz. Der Bezug auf die Helvetier stiftete Zugehörigkeit, bildet aber nicht die gesamte antike Bevölkerung ab. Die Helvetier waren weder die einzigen damaligen Bewohner noch Bürger eines heutigen Schweizer Staates. Schriftgebrauch ist ebenfalls differenziert zu betrachten: Inschriften und Caesars Bericht über beschriftete Verzeichnisse sind nicht dasselbe wie erhaltene eigene Geschichtswerke.",
    "source": "HLS, Helvetier, Erinnerungskultur und Schriftzeugnisse; Die Kelten.docx, Müller-Auszug; SRF, Museumsteil.",
    "tasks": [
      {
        "type": "letters",
        "q": "Setze den Namen der späteren Symbolfigur der Schweiz zusammen, der an die Helvetier erinnert.",
        "letters": [
          "V",
          "E",
          "H",
          "A",
          "L",
          "I",
          "T",
          "E"
        ],
        "answer": "HELVETIA",
        "why": "Helvetia greift den Namen der Helvetier auf. Sie ist eine spätere Symbolfigur, keine historisch belegte Anführerin des Auszugs von 58 v. Chr."
      },
      {
        "type": "write",
        "q": "Caesar berichtet von beschrifteten Verzeichnissen der Auswanderer. Was zeigt das – und was fehlt für eine eigene Geschichtsschreibung der Helvetier?",
        "prompts": [
          "Was würde ein solches Verzeichnis über Schriftgebrauch aussagen?",
          "Warum ersetzt es keinen eigenen Bericht der Helvetier über den Auszug?"
        ],
        "criteria": [
          "Ich unterscheide eine Liste von einer zusammenhängenden Geschichtserzählung.",
          "Ich beachte, dass wir hier Caesars Bericht über Verzeichnisse lesen."
        ],
        "why": "Eine Liste ist ein Hinweis auf praktischen Schriftgebrauch. Sie erzählt nicht automatisch die Geschichte des Auszugs aus helvetischer Sicht; zudem prüfen wir hier eine Aussage Caesars."
      },
      {
        "type": "write",
        "q": "Schreibe das neue Museumsschild: «Die Helvetier – mehr als Caesars Gegner». Was sollten Besucherinnen und Besucher mitnehmen?",
        "prompts": [
          "Dein Ausstellungstext in 3–5 Sätzen"
        ],
        "criteria": [
          "Ich nenne zwei konkrete Aspekte: etwa Bern-Enge, Alltag, Auszug, Bibracte oder Rückkehr.",
          "Ich benenne die Perspektive Caesars oder eine andere Grenze unseres Wissens.",
          "Ich setze Helvetier nicht mit allen Kelten oder der gesamten heutigen Schweizer Bevölkerung gleich."
        ],
        "why": "Ein differenziertes Helvetierbild verbindet Lebenswelt, Auszug und Begegnung mit Rom. Es prüft Caesars Sicht und unterscheidet antike Gruppen von späterer nationaler Erinnerung."
      }
    ]
  }
];
