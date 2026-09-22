const SRF="https://www.srf.ch/play/tv/roemer-in-der-schweiz/video/die-kelten-und-die-roemer?urn=urn:srf:video:3da18acb-1a0a-4cab-97ce-0b0fb3f4f4e4";
let stations=[
  {
    "title": "Etwas steckt im Schlamm",
    "tag": "AKT I · BERGEN",
    "intro": "La Tène, am Neuenburgersee. Waffen, Werkzeuge, Schmuck – warum landeten all diese Dinge im Wasser? Ihr übernehmt eine offene Fundakte. Sichert zuerst die Spuren. Jede spätere Entdeckung kann eure erste Vermutung verändern.",
    "knowledge": [
      {
        "title": "Warum lagen diese Dinge im Wasser?",
        "text": "Viele Funde von La Tène stammen aus einem ehemaligen Arm der Thielle/Zihl. Dazu gehören Waffen, Werkzeuge und Schmuck. Der nasse Boden konnte auch organische Materialien erhalten. Religiöse Niederlegungen sind eine wichtige Deutung des Fundplatzes; seine Funktion wurde und wird diskutiert. Ein einzelnes Fundstück beweist noch keinen genauen Ritualablauf und benennt nicht automatisch eine helvetische Person."
      },
      {
        "title": "Vom Fundort ins Museum",
        "text": "Neuchâtel ist eure Reisestadt am Neuenburgersee. Das Laténium liegt in Hauterive und verbindet Museum und archäologischen Park. Der Fundort La Tène liegt weiter östlich bei Marin-Epagnier an der Thielle/Zihl. Museum und Fundort sind nicht derselbe Ort. Diese Stationen sind Vorschläge für eure Klassenreise, keine bereits festgelegte Route."
      },
      {
        "title": "Ein Fundort wird zum Namen",
        "text": "1857 wurden bei La Tène bedeutende Funde entdeckt. La Tène bezeichnet zunächst diesen Ort, Latènezeit beziehungsweise Latènekultur auch einen archäologischen Zeit- und Kulturzusammenhang der jüngeren Eisenzeit. Daraus folgt nicht, dass jedes Objekt der Latènekultur den Helvetiern gehörte. Der ältere Keltentext bietet dazu den Vergleich mit der Hallstattkultur."
      },
      {
        "title": "Euer Weg durch die Spuren",
        "text": "La Tène bleibt euer Ausgangspunkt: Ihr untersucht Gegenstände, fragt nach Menschen und vergleicht Funde mit Texten und Bildern. Ausblicke nach Zürich, Bern und Avenches helfen beim Einordnen. Am Ende kehrt ihr mit einem eigenen Urteil zu La Tène zurück. Wissen, Bilder und Quellen stehen jederzeit offen; Schreibaufgaben werden anhand von Kriterien selbst geprüft."
      }
    ],
    "note": "Viele Funde von La Tène stammen aus einem ehemaligen Arm der Thielle/Zihl. Dazu gehören Waffen, Werkzeuge und Schmuck. Der nasse Boden konnte auch organische Materialien erhalten. Religiöse Niederlegungen sind eine wichtige Deutung des Fundplatzes; seine Funktion wurde und wird diskutiert. Ein einzelnes Fundstück beweist noch keinen genauen Ritualablauf und benennt nicht automatisch eine helvetische Person. Neuchâtel ist eure Reisestadt am Neuenburgersee. Das Laténium liegt in Hauterive und verbindet Museum und archäologischen Park. Der Fundort La Tène liegt weiter östlich bei Marin-Epagnier an der Thielle/Zihl. Museum und Fundort sind nicht derselbe Ort. Diese Stationen sind Vorschläge für eure Klassenreise, keine bereits festgelegte Route. 1857 wurden bei La Tène bedeutende Funde entdeckt. La Tène bezeichnet zunächst diesen Ort, Latènezeit beziehungsweise Latènekultur auch einen archäologischen Zeit- und Kulturzusammenhang der jüngeren Eisenzeit. Daraus folgt nicht, dass jedes Objekt der Latènekultur den Helvetiern gehörte. Der ältere Keltentext bietet dazu den Vergleich mit der Hallstattkultur. La Tène bleibt euer Ausgangspunkt: Ihr untersucht Gegenstände, fragt nach Menschen und vergleicht Funde mit Texten und Bildern. Ausblicke nach Zürich, Bern und Avenches helfen beim Einordnen. Am Ende kehrt ihr mit einem eigenen Urteil zu La Tène zurück. Wissen, Bilder und Quellen stehen jederzeit offen; Schreibaufgaben werden anhand von Kriterien selbst geprüft.",
    "tasks": [
      {
        "type": "dig",
        "q": "Findet und sichert drei Fundstellen, bevor ihr etwas deutet.",
        "why": "Die drei Fundstellen sind dokumentiert. Erst der Fundzusammenhang macht aus einem Gegenstand eine archäologische Spur. Das Raster ist eine Spielsimulation, kein historischer Grabungsplan.",
        "finds": [
          {
            "cell": 2,
            "name": "Waffe",
            "shape": "sword",
            "detail": "Eine lange Klinge mit Griff. Waffen gehören zum Fundspektrum von La Tène."
          },
          {
            "cell": 5,
            "name": "Werkzeug",
            "shape": "tool",
            "detail": "Ein Werkzeug mit gebogenem Arbeitsende. Auch Arbeitsgeräte gehören zum Fundspektrum."
          },
          {
            "cell": 9,
            "name": "Schmuck",
            "shape": "ring",
            "detail": "Ein ringförmiges Schmuckstück. Schmuck ergänzt das Fundspektrum."
          }
        ]
      },
      {
        "type": "number",
        "q": "Der erste Eintrag im Archiv ist verblasst. In welchem Jahr begann die moderne Entdeckung von La Tène?",
        "label": "Jahr nach Christus",
        "answer": 1857,
        "why": "1857 bezeichnet die moderne Entdeckung. Die dort gefundenen Objekte sind wesentlich älter. Entdeckungsjahr und Alter eines Fundes dürfen nicht verwechselt werden."
      },
      {
        "type": "write",
        "q": "Eure erste Vermutung: Warum kamen die Dinge ins Wasser?",
        "prompts": [
          "Ich vermute, die Dinge gelangten ins Wasser, weil …",
          "Diese Spur müsste ich finden, um meine Vermutung zu prüfen …"
        ],
        "criteria": [
          "Meine Vermutung erklärt die Dinge im Wasser.",
          "Ich nenne eine Spur, an der sie scheitern oder sich bewähren könnte."
        ],
        "why": "Eure erste Vermutung muss noch nicht stimmen. Notiert, welche Entdeckung dafür oder dagegen sprechen würde. In der Fundakte könnt ihr sie später verändern."
      }
    ],
    "source": "Ergänzung zur PDF: HLS, La Tène (Fundort); Laténium, Museum und Park.",
    "pdf": [],
    "images": [
      "la-tene",
      "latenium",
      "neuchatel"
    ],
    "reward": {
      "title": "Fundkontext",
      "text": "Waffen, Werkzeuge und Schmuck im Wasser: Der Zusammenhang zählt, nicht nur das einzelne Stück."
    }
  },
  {
    "title": "Die Namenlosen",
    "tag": "AKT I · BERGEN",
    "intro": "In der Fundakte fehlt das Wichtigste: die Namen der Menschen. Ein Schmuckstück verrät sie euch nicht. Folgt den Vergleichsspuren ins Gebiet der Helvetier und ihrer Nachbarn. Passt auf: Eine Ähnlichkeit kann euch auf eine falsche Fährte führen.",
    "knowledge": [
      {
        "title": "Verwandt, aber nicht ein Staat",
        "text": "Die Helvetier waren eine keltische Bevölkerungsgruppe der späten Eisenzeit im heutigen Schweizer Mittelland. Andere keltische Gruppen waren durch verwandte Sprachen und kulturelle Gemeinsamkeiten verbunden. Rauriker lebten im Raum Basel, Allobroger bei Genf und südlich des Genfersees. Seduner, Veragrer, Nantuaten und Uberer werden verschiedenen Teilen des Wallis zugeordnet. Lepontier lebten im Tessin und benachbarten südalpinen Gebieten. Die Räter in Teilen der Alpen werden sprachlich und kulturell davon unterschieden."
      },
      {
        "title": "Die Herkunft bleibt offen",
        "text": "Antike Texte bringen die Helvetier auch mit dem heutigen Süddeutschland in Verbindung. Eine klar datierbare Einwanderung ins Mittelland ist archäologisch aber nicht eindeutig belegt. Ähnliche Gegenstände beweisen weder ein gemeinsames Volk noch eine Wanderung. Das Schwerpunktheft arCHaeo 2023.3 diskutiert Texte, Münzen und Siedlungsfunde zusammen."
      },
      {
        "title": "Antike Räume lesen",
        "text": "Caesar nennt Rhein, Jura, Genfersee und Rhone als natürliche Begrenzungen. Das ist seine Beschreibung, keine Karte eines heutigen Staates. Die Bezeichnung «Helvetier» umfasst nicht automatisch alle Menschen, die damals auf dem Gebiet der heutigen Schweiz lebten."
      }
    ],
    "note": "Die Helvetier waren eine keltische Bevölkerungsgruppe der späten Eisenzeit im heutigen Schweizer Mittelland. Andere keltische Gruppen waren durch verwandte Sprachen und kulturelle Gemeinsamkeiten verbunden. Rauriker lebten im Raum Basel, Allobroger bei Genf und südlich des Genfersees. Seduner, Veragrer, Nantuaten und Uberer werden verschiedenen Teilen des Wallis zugeordnet. Lepontier lebten im Tessin und benachbarten südalpinen Gebieten. Die Räter in Teilen der Alpen werden sprachlich und kulturell davon unterschieden. Antike Texte bringen die Helvetier auch mit dem heutigen Süddeutschland in Verbindung. Eine klar datierbare Einwanderung ins Mittelland ist archäologisch aber nicht eindeutig belegt. Ähnliche Gegenstände beweisen weder ein gemeinsames Volk noch eine Wanderung. Das Schwerpunktheft arCHaeo 2023.3 diskutiert Texte, Münzen und Siedlungsfunde zusammen. Caesar nennt Rhein, Jura, Genfersee und Rhone als natürliche Begrenzungen. Das ist seine Beschreibung, keine Karte eines heutigen Staates. Die Bezeichnung «Helvetier» umfasst nicht automatisch alle Menschen, die damals auf dem Gebiet der heutigen Schweiz lebten.",
    "tasks": [
      {
        "type": "pairs",
        "q": "Legt die Namen auf die Gebietskarten. Wo sucht ihr nach Helvetiern – und wo nach ihren Nachbarn?",
        "items": [
          "Helvetier",
          "Rauriker",
          "Allobroger",
          "Seduner, Veragrer, Nantuaten, Uberer",
          "Lepontier"
        ],
        "categories": [
          "Wallis",
          "Mittelland",
          "Tessin und angrenzende Südalpen",
          "Raum Basel",
          "Genf und südlich des Genfersees"
        ],
        "answer": [
          1,
          3,
          4,
          0,
          2
        ],
        "why": "Diese Zuordnung ist eine räumliche Orientierung. Antike Siedlungsräume sind keine unveränderlichen modernen Staatsgrenzen."
      },
      {
        "type": "sort",
        "q": "Gedankenexperiment: Zwei Schmuckstücke haben eine ähnliche Form. Prüft die folgenden Erklärungen und trennt das Denkbare vom vorschnellen Schluss.",
        "items": [
          "Die Form könnte durch Handel verbreitet worden sein.",
          "Menschen könnten gewandert sein.",
          "Ähnliche Bräuche könnten ähnliche Dinge hervorbringen.",
          "Die Ähnlichkeit beweist eine Einwanderung aus Süddeutschland."
        ],
        "categories": [
          "Möglichkeit, die weitere Belege braucht",
          "Behauptet mehr, als die Funde beweisen"
        ],
        "answer": [
          0,
          0,
          0,
          1
        ],
        "why": "Handel, Wanderung und gemeinsame Bräuche können Ähnlichkeiten erklären. Keine dieser Erklärungen wird allein durch die ähnliche Form bewiesen."
      },
      {
        "type": "pairs",
        "q": "In der Akte steht: «Hier lebten nur Helvetier.» Repariert die falsche Zuordnung.",
        "items": [
          "Helvetier",
          "Rauriker",
          "Lepontier"
        ],
        "categories": [
          "Tessin und benachbarte Südalpen",
          "Mittelland",
          "Raum Basel"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "why": "Die Helvetier waren eine von mehreren Gruppen. Das Gebiet der heutigen Schweiz hatte keine einheitliche helvetische Bevölkerung."
      }
    ],
    "source": "Informationen zu den Helvetiern.pdf, S. 1–2, Abschnitte 1–2; Caesar-Auszug im DOCX; HLS; arCHaeo 2023.3.",
    "pdf": [
      1,
      2
    ],
    "images": [
      "lindenhof",
      "helvetii-coin"
    ],
    "reward": {
      "title": "Keine Namensschilder",
      "text": "Ähnliche Dinge belegen nicht automatisch dieselbe Bevölkerungsgruppe oder eine Wanderung."
    }
  },
  {
    "title": "Was die Dinge können",
    "tag": "AKT I · BERGEN",
    "intro": "Eine Waffe erzählt von mehr als einem Kampf. Jemand musste sie herstellen, versorgen und transportieren. Öffnet die Werkstattakte: Könnte hinter euren Funden ein ganzes Netz aus Arbeit und Handel stecken?",
    "knowledge": [
      {
        "title": "Höfe, Dörfer, Oppida",
        "text": "Die Gesellschaft war landwirtschaftlich geprägt. Menschen lebten in Einzelhöfen, Dörfern und grösseren befestigten Siedlungen: Oppida, einzeln Oppidum. Hügel und Flussschlaufen konnten Verteidigung und Zugang zu Verkehrswegen erleichtern. Auf dem Zürcher Lindenhof bestand ein keltisches Oppidum vor dem römischen Turicum."
      },
      {
        "title": "Was Menschen herstellten",
        "text": "Landwirtschaft und Viehhaltung waren die Grundlage. Daneben standen Eisenverarbeitung für Werkzeuge und Waffen, Keramik, Textilien, Schmuck und weitere Metallarbeiten. Münzen, Eisenbarren und importierte Waren weisen auf überregionalen Handel über Land und Gewässer hin. Antike Autoren erwähnen Goldreichtum; das ist zunächst eine Aussage dieser Quellen."
      },
      {
        "title": "Was der Keltentext ergänzt",
        "text": "Salz, das «weisse Gold», diente unter anderem zur Konservierung. Eisenpflugscharen erleichterten Feldarbeit; Drehmühlen die Verarbeitung von Getreide. Überschüsse konnten Arbeitsteilung fördern. Solche Zusammenhänge helfen beim Verständnis der Helvetier, sind aber nicht exklusiv helvetische Erfindungen."
      }
    ],
    "note": "Die Gesellschaft war landwirtschaftlich geprägt. Menschen lebten in Einzelhöfen, Dörfern und grösseren befestigten Siedlungen: Oppida, einzeln Oppidum. Hügel und Flussschlaufen konnten Verteidigung und Zugang zu Verkehrswegen erleichtern. Auf dem Zürcher Lindenhof bestand ein keltisches Oppidum vor dem römischen Turicum. Landwirtschaft und Viehhaltung waren die Grundlage. Daneben standen Eisenverarbeitung für Werkzeuge und Waffen, Keramik, Textilien, Schmuck und weitere Metallarbeiten. Münzen, Eisenbarren und importierte Waren weisen auf überregionalen Handel über Land und Gewässer hin. Antike Autoren erwähnen Goldreichtum; das ist zunächst eine Aussage dieser Quellen. Salz, das «weisse Gold», diente unter anderem zur Konservierung. Eisenpflugscharen erleichterten Feldarbeit; Drehmühlen die Verarbeitung von Getreide. Überschüsse konnten Arbeitsteilung fördern. Solche Zusammenhänge helfen beim Verständnis der Helvetier, sind aber nicht exklusiv helvetische Erfindungen.",
    "tasks": [
      {
        "type": "pairs",
        "q": "Auf dem Labortisch liegen Alltagsgegenstände. Findet für jeden seine Funktion.",
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
        "type": "order",
        "q": "Eine Siedlung braucht Nachschub. Bringt die Versorgungskette wieder in Gang.",
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
      },
      {
        "type": "write",
        "q": "Sucht auf dem Uferbild einen möglichen Verkehrsweg. Was würde er für eure Funde erklären?",
        "image": "neuchatel",
        "prompts": [
          "Zwei mögliche Vorteile des Wassers oder der Lage",
          "Eine Grenze deiner Deutung aus dem heutigen Bild"
        ],
        "criteria": [
          "Ich verbinde die Landschaft mit Verkehrswegen, Versorgung oder Schutz.",
          "Ich behaupte nicht, dass ein heutiges Foto den antiken Uferverlauf exakt zeigt."
        ],
        "why": "Gewässer konnten Verkehr und Versorgung erleichtern. Wasserstände, Ufer und Siedlungen veränderten sich; ein heutiges Bild ersetzt keinen archäologischen Lageplan."
      }
    ],
    "source": "PDF S. 2, Abschnitt 3; Die Kelten.docx, Wirtschaft und Oppida; Stadt Zürich, Lindenhof.",
    "pdf": [
      3
    ],
    "images": [
      "helvetii-coin",
      "fibula",
      "neuchatel"
    ],
    "reward": {
      "title": "Werkstattnetz",
      "text": "Herstellung, Versorgung und Austausch verbinden Gegenstände mit Menschen."
    }
  },
  {
    "title": "Eine Frau ohne Namen",
    "tag": "AKT I · BERGEN",
    "intro": "Eine Vergleichsakte aus Zürich: Ein Grab bewahrt Spuren einer Frau, aber keine Lebensgeschichte. Könnt ihr ihr näherkommen, ohne ihr eine Identität zu erfinden? Alte Ortsnamen und eine Inschrift führen euch weiter.",
    "knowledge": [
      {
        "title": "Die Frau beim Schulhaus Kern",
        "text": "2017 wurde beim Schulhaus Kern in Zürich ein keltisches Frauengrab entdeckt. Die Frau lebte ungefähr um 200 v. Chr. Wertvolle Beigaben sowie Untersuchungen von Skelett, Kleidungsspuren und Schmuck geben Einblicke in Lebensumstände und soziale Stellung. «Keltisch» ist besser abgesichert als die konkrete Zuordnung «helvetisch». Das Bildmaterial der Lernreise wird entsprechend seinem tatsächlichen Fundort beschriftet."
      },
      {
        "title": "Eine keltische Sprache",
        "text": "Die Helvetier sprachen eine keltische Sprache des gallischen Sprachraums, der zur indogermanischen Sprachfamilie gehört. Überliefert sind vor allem Personen-, Orts- und Götternamen sowie kurze Inschriften, keine umfangreiche helvetische Literatur. Eburodunum bezeichnet Yverdon-les-Bains, Salodurum Solothurn und Vitudurum Oberwinterthur."
      },
      {
        "title": "Ein Hinweis aus Mantua",
        "text": "Ein ungefähr um 300 v. Chr. datiertes Gefäss aus Mantua trägt in etruskischen Buchstaben eine Bezeichnung, die als Hinweis auf einen Helvetier verstanden wird. Schriftzeichen, Sprache, Fundort und die Herkunft eines Menschen sind verschiedene Fragen. Ein kurzer Name ersetzt kein eigenes Geschichtswerk."
      }
    ],
    "note": "2017 wurde beim Schulhaus Kern in Zürich ein keltisches Frauengrab entdeckt. Die Frau lebte ungefähr um 200 v. Chr. Wertvolle Beigaben sowie Untersuchungen von Skelett, Kleidungsspuren und Schmuck geben Einblicke in Lebensumstände und soziale Stellung. «Keltisch» ist besser abgesichert als die konkrete Zuordnung «helvetisch». Das Bildmaterial der Lernreise wird entsprechend seinem tatsächlichen Fundort beschriftet. Die Helvetier sprachen eine keltische Sprache des gallischen Sprachraums, der zur indogermanischen Sprachfamilie gehört. Überliefert sind vor allem Personen-, Orts- und Götternamen sowie kurze Inschriften, keine umfangreiche helvetische Literatur. Eburodunum bezeichnet Yverdon-les-Bains, Salodurum Solothurn und Vitudurum Oberwinterthur. Ein ungefähr um 300 v. Chr. datiertes Gefäss aus Mantua trägt in etruskischen Buchstaben eine Bezeichnung, die als Hinweis auf einen Helvetier verstanden wird. Schriftzeichen, Sprache, Fundort und die Herkunft eines Menschen sind verschiedene Fragen. Ein kurzer Name ersetzt kein eigenes Geschichtswerk.",
    "tasks": [
      {
        "type": "pairs",
        "q": "Die Karte trägt alte Namen. Verbindet sie mit den heutigen Orten.",
        "items": [
          "Eburodunum",
          "Salodurum",
          "Vitudurum"
        ],
        "categories": [
          "Oberwinterthur",
          "Yverdon-les-Bains",
          "Solothurn"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "why": "Namen können lange fortleben. Das allein beweist keine unveränderte Bevölkerung über alle Jahrhunderte."
      },
      {
        "type": "sort",
        "q": "Öffnet die Grabakte aus Zürich. Was dürft ihr über diese Frau sagen?",
        "items": [
          "Grab beim Schulhaus Kern in Zürich",
          "Datierung um 200 v. Chr.",
          "Ihr persönlicher Name",
          "Ihre sicher helvetische Zugehörigkeit"
        ],
        "categories": [
          "In der Vergleichsakte belegt",
          "Nicht sicher bekannt"
        ],
        "answer": [
          0,
          0,
          1,
          1
        ],
        "why": "Der Fund erlaubt Einblicke in ein einzelnes Leben. Name und helvetische Zugehörigkeit der Frau sind damit nicht gesichert."
      },
      {
        "type": "text",
        "q": "Ein Schriftstück führt nach Norditalien. Entschlüsselt Fundort und verwendete Schrift.",
        "fields": [
          {
            "label": "In welcher Stadt wurde das genannte Gefäss gefunden?",
            "accept": [
              "Mantua",
            "Mantova", "in Mantua", "in Mantova", "Mantua in Norditalien", "Mantua in Italien", "Mantoue", "à Mantoue"
            ]
          },
          {
            "label": "Welche Buchstaben wurden verwendet? (Adjektiv)",
            "accept": [
              "etruskische",
              "etruskisch",
            "etruskischen", "etruskischer", "etruskisches", "etruskische Buchstaben", "etruskischen Buchstaben", "mit etruskischen Buchstaben", "etruskische Schrift", "etruskischen Schrift", "in etruskischer Schrift", "etruskisches Alphabet", "Etruskeralphabet", "alphabet étrusque", "caractères étrusques", "écriture étrusque"
            ]
          }
        ],
        "why": "Das Gefäss wurde in Mantua gefunden; die Bezeichnung wurde mit etruskischen Buchstaben geschrieben. Schrift und Sprache sind nicht gleichzusetzen."
      }
    ],
    "source": "PDF S. 2–3, Abschnitte 4–5; Stadt Zürich, Kelte trifft Keltin; HLS.",
    "pdf": [
      4,
      5
    ],
    "images": [
      "torc",
      "fibula",
      "lindenhof"
    ],
    "reward": {
      "title": "Ein einzelnes Leben",
      "text": "Ein Grab kann Einzelheiten bewahren, ohne Namen und Gruppenzugehörigkeit sicher zu verraten."
    }
  },
  {
    "title": "Die Spur ins Wasser",
    "tag": "AKT II · WIDERSPRÜCHE",
    "intro": "Jetzt wird es heikel: Besitz verloren, Beute versenkt, Gaben niedergelegt? Ein Fund im Wasser liefert noch keine fertige Erklärung. Trennt die Spuren von den Geschichten darüber, bevor ihr eure Vermutung festschreibt.",
    "knowledge": [
      {
        "title": "Politik nach Caesar",
        "text": "Reiche Adlige hatten laut Caesar grossen Einfluss. Besitz, Gefolgschaften und Bündnisse waren Machtmittel. Orgetorix soll nach Königsherrschaft gestrebt und sich mit mächtigen Männern benachbarter Gruppen verbündet haben. Nach der Aufdeckung sollte er sich vor Gericht verantworten. Er starb vor dem Auszug; Caesar erwähnt den Verdacht auf Selbsttötung. Diese Erzählung ist nicht unabhängig vollständig überprüfbar."
      },
      {
        "title": "Eine vielgöttische Welt",
        "text": "Niedergelegte Waffen, Münzen und andere Gegenstände können auf Opferhandlungen hinweisen. Die genaue Bedeutung einzelner Fundplätze bleibt teilweise umstritten. Der allgemeine Keltentext beschreibt Druiden als Priester, Richter, Lehrer und Gelehrte mit Privilegien; das ist kein Nachweis jedes Details für jeden helvetischen Ort."
      },
      {
        "title": "Mars Caturix",
        "text": "Caturix, ungefähr «Kampfkönig», ist ein namentlich bekannter Gott. In römischer Zeit erscheint er mit Mars verbunden als Mars Caturix. Das zeigt die Verbindung einheimischer und römischer Vorstellungen. Ein römisches Zeugnis darf nicht unverändert auf die Zeit vor der römischen Herrschaft zurückprojiziert werden."
      }
    ],
    "note": "Reiche Adlige hatten laut Caesar grossen Einfluss. Besitz, Gefolgschaften und Bündnisse waren Machtmittel. Orgetorix soll nach Königsherrschaft gestrebt und sich mit mächtigen Männern benachbarter Gruppen verbündet haben. Nach der Aufdeckung sollte er sich vor Gericht verantworten. Er starb vor dem Auszug; Caesar erwähnt den Verdacht auf Selbsttötung. Diese Erzählung ist nicht unabhängig vollständig überprüfbar. Niedergelegte Waffen, Münzen und andere Gegenstände können auf Opferhandlungen hinweisen. Die genaue Bedeutung einzelner Fundplätze bleibt teilweise umstritten. Der allgemeine Keltentext beschreibt Druiden als Priester, Richter, Lehrer und Gelehrte mit Privilegien; das ist kein Nachweis jedes Details für jeden helvetischen Ort. Caturix, ungefähr «Kampfkönig», ist ein namentlich bekannter Gott. In römischer Zeit erscheint er mit Mars verbunden als Mars Caturix. Das zeigt die Verbindung einheimischer und römischer Vorstellungen. Ein römisches Zeugnis darf nicht unverändert auf die Zeit vor der römischen Herrschaft zurückprojiziert werden.",
    "tasks": [
      {
        "type": "letters",
        "q": "Ein Gottesname ist durcheinandergeraten. Setzt ihn zusammen: In römischer Zeit wurde er mit Mars verbunden.",
        "letters": [
          "T",
          "C",
          "R",
          "A",
          "X",
          "I",
          "U"
        ],
        "answer": "CATURIX",
        "why": "Caturix wurde in römischer Zeit mit Mars verbunden. Die Bezeichnung Mars Caturix ist ein Beispiel kultureller Verknüpfung."
      },
      {
        "type": "write",
        "q": "Caesar beschuldigt Orgetorix. Haltet in zwei Aktennotizen fest, wer hier über wen berichtet.",
        "prompts": [
          "Ein Satz über sein politisches Vorhaben",
          "Ein Satz über die Grenzen der Überlieferung"
        ],
        "criteria": [
          "Ich verwende eine Quellenmarkierung wie «Laut Caesar» oder «Caesar berichtet».",
          "Ich unterscheide die überlieferte Darstellung von unabhängig gesicherten Einzelheiten."
        ],
        "why": "Machtstreben, Bündnisse, Verfahren und Todesumstände stammen aus Caesars Erzählung. Quellenkritik macht diese Herkunft sichtbar."
      },
      {
        "type": "sort",
        "q": "Am Aktenbrett kleben Fakten und Vermutungen durcheinander. Trennt sie.",
        "items": [
          "Eine Münze wurde in einem archäologischen Kontext gefunden.",
          "Die Münze wurde vermutlich als Opfer niedergelegt.",
          "Mars Caturix ist eine Verbindung aus römischer Zeit.",
          "Der genaue Ablauf des Rituals bleibt offen."
        ],
        "categories": [
          "Befund oder zeitlich eingeordnetes Zeugnis",
          "Deutung oder offene Frage"
        ],
        "answer": [
          0,
          1,
          0,
          1
        ],
        "why": "Ein Fund und seine Deutung sind verschiedene Ebenen. Die zeitliche Einordnung verhindert, spätere religiöse Verbindungen ungeprüft in frühere Epochen zurückzuversetzen."
      }
    ],
    "source": "PDF S. 3, Abschnitte 6–7; Caesar, Buch I 2–4; Die Kelten.docx, Religion.",
    "pdf": [
      6,
      7
    ],
    "images": [
      "fibula",
      "helvetii-coin"
    ],
    "imageNote": "Die Bilder zeigen Vergleichsobjekte und eine Münze, keine Darstellung von Caturix oder Orgetorix.",
    "reward": {
      "title": "Offenes Ritual",
      "text": "Religiöse Niederlegung ist eine wichtige Deutung für La Tène; der genaue Ablauf bleibt offen."
    }
  },
  {
    "title": "Der abgebrochene Weg",
    "tag": "AKT II · WIDERSPRÜCHE",
    "intro": "58 v. Chr.: Die Helvetier brechen auf. Dann wird ihr Weg blockiert. Rekonstruiert den Zug aus Caesars Bericht. Achtung: Diese Ereignisse erklären nicht automatisch die älteren Funde von La Tène.",
    "knowledge": [
      {
        "title": "Warum aufbrechen?",
        "text": "Caesar nennt natürliche Grenzen, Konflikte mit germanischen Gruppen und von Orgetorix versprochene Macht und Zukunftsaussichten. Das Ziel lag bei den Santonen im westlichen Gallien, etwa in der heutigen Saintonge. Der Aufbruch sei mehrere Jahre vorbereitet worden. Laut Caesar verbrannten die Beteiligten ihre Siedlungen und überschüssigen Vorräte, um eine Rückkehr auszuschliessen. Diese Darstellung ist kein flächendeckend archäologisch bewiesener Brandbefund."
      },
      {
        "title": "Der Verlauf",
        "text": "58 v. Chr. zogen Helvetier und verbündete Gruppen los. Bei Genf verweigerte Caesar den Durchzug durch die römische Provinz und liess die Rhonebrücke abbrechen. Der Zug wich durch das Gebiet der Sequaner aus. An der Saône griffen römische Truppen einen Teil beim Flussübergang an. Verhandlungen scheiterten; bei Bibracte folgte die entscheidende Niederlage. Caesar befahl den Überlebenden die Rückkehr. Der Feldzug bildete den Auftakt zum Gallischen Krieg."
      },
      {
        "title": "Zahlen sind keine Gewissheit",
        "text": "Caesar nennt 368’000 Auswandernde, davon 263’000 Helvetier, und 110’000 Rückkehrende. Die Forschung zweifelt diese Zahlen stark an. Deshalb lassen sich daraus weder eine gesicherte Bevölkerungsgrösse noch durch einfaches Subtrahieren die Zahl der Getöteten bestimmen. Auch ein vollständiger Auszug sämtlicher Bewohner ist nicht gesichert."
      }
    ],
    "note": "Caesar nennt natürliche Grenzen, Konflikte mit germanischen Gruppen und von Orgetorix versprochene Macht und Zukunftsaussichten. Das Ziel lag bei den Santonen im westlichen Gallien, etwa in der heutigen Saintonge. Der Aufbruch sei mehrere Jahre vorbereitet worden. Laut Caesar verbrannten die Beteiligten ihre Siedlungen und überschüssigen Vorräte, um eine Rückkehr auszuschliessen. Diese Darstellung ist kein flächendeckend archäologisch bewiesener Brandbefund. 58 v. Chr. zogen Helvetier und verbündete Gruppen los. Bei Genf verweigerte Caesar den Durchzug durch die römische Provinz und liess die Rhonebrücke abbrechen. Der Zug wich durch das Gebiet der Sequaner aus. An der Saône griffen römische Truppen einen Teil beim Flussübergang an. Verhandlungen scheiterten; bei Bibracte folgte die entscheidende Niederlage. Caesar befahl den Überlebenden die Rückkehr. Der Feldzug bildete den Auftakt zum Gallischen Krieg. Caesar nennt 368’000 Auswandernde, davon 263’000 Helvetier, und 110’000 Rückkehrende. Die Forschung zweifelt diese Zahlen stark an. Deshalb lassen sich daraus weder eine gesicherte Bevölkerungsgrösse noch durch einfaches Subtrahieren die Zahl der Getöteten bestimmen. Auch ein vollständiger Auszug sämtlicher Bewohner ist nicht gesichert.",
    "tasks": [
      {
        "type": "order",
        "q": "Der Zug ist auseinandergerissen. Rekonstruiert seinen Weg in sieben Schritten.",
        "items": [
          "Verhandlungen führen zu keiner Einigung.",
          "Helvetier und Verbündete brechen auf.",
          "Caesar befiehlt die Rückkehr.",
          "Bei Bibracte folgt die entscheidende Niederlage.",
          "Caesar sperrt den Durchzug bei Genf.",
          "Römische Truppen greifen an der Saône an.",
          "Der Zug nimmt den Weg durch das Gebiet der Sequaner."
        ],
        "answer": [
          1,
          4,
          6,
          5,
          0,
          3,
          2
        ],
        "why": "Aufbruch → Sperre bei Genf → Umweg → Angriff an der Saône → erfolglose Verhandlungen → Bibracte → Rückkehr.",
        "instruction": "Ordne vom frühesten zum spätesten Schritt. Nutze die Pfeile; du brauchst nichts zu ziehen."
      },
      {
        "type": "write",
        "q": "Eine Zahl wird zur Schlagzeile: «258’000 Tote». Stoppt sie mit einer begründeten Aktennotiz.",
        "prompts": [
          "Warum trägt diese Rechnung historisch nicht?",
          "Wie würdest du Caesars Zahlen im Museum kennzeichnen?"
        ],
        "criteria": [
          "Ich kennzeichne die Ausgangszahlen als umstrittene Angaben Caesars.",
          "Ich erkläre, dass die Differenz keine gesicherte Zahl von Getöteten ergibt."
        ],
        "why": "Die Rechenoperation ist arithmetisch möglich, die historische Schlussfolgerung aber nicht gesichert. Zahlenangaben, erfasste Gruppen und individuelle Schicksale sind nicht hinreichend geklärt."
      },
      {
        "type": "text",
        "q": "Wo sollte die Reise enden – und wo wurde sie entschieden? Ergänzt die beiden Orte.",
        "fields": [
          {
            "label": "Zielregion im westlichen Gallien",
            "accept": [
              "Saintonge",
              "Santonen",
            "Gebiet der Santonen", "Land der Santonen", "bei den Santonen", "zu den Santonen", "ins Gebiet der Santonen", "in die Saintonge", "la Saintonge", "chez les Santons"
            ]
          },
          {
            "label": "Ort der entscheidenden Niederlage",
            "accept": [
              "Bibracte",
            "bei Bibracte", "Schlacht bei Bibracte", "in Bibracte", "Bibrakte", "bataille de Bibracte"
            ]
          }
        ],
        "why": "Saintonge ist die ungefähre heutige Bezeichnung der Zielregion bei den Santonen. Bei Bibracte wurde der Zug entscheidend geschlagen."
      }
    ],
    "source": "PDF S. 3–5, Abschnitte 8–10; Caesar Buch I; Nationalmuseum, Als Caesar die Helvetier stoppte.",
    "pdf": [
      8,
      9,
      10
    ],
    "images": [
      "la-tene",
      "gleyre"
    ],
    "imageNote": "Fundortfoto und Historienbild stehen für verschiedene Arten von Quellen. Keines ist ein Augenzeugenbild des Auszugs.",
    "reward": {
      "title": "Der blockierte Zug",
      "text": "Caesars Bericht von 58 v. Chr. ist kein unmittelbarer Beleg für die Entstehung des Fundplatzes."
    }
  },
  {
    "title": "Der Sieger erzählt",
    "tag": "AKT II · WIDERSPRÜCHE",
    "intro": "Der wichtigste Zeuge ist zugleich der Sieger. Caesar erzählt – aber wessen Geschichte? Und warum sieht ein Gemälde viele Jahrhunderte später so triumphal aus? Prüft die beiden Erzählungen gegeneinander.",
    "knowledge": [
      {
        "title": "Zwei Daten, eine Figur",
        "text": "Die Überlieferung verbindet Divico mit dem Sieg der Tiguriner über ein römisches Heer bei Agen 107 v. Chr.; dabei wurde der Konsul Lucius Cassius Longinus getötet. Für 58 v. Chr. schildert Caesar Divico als helvetischen Gesandten. Was wir wissen, ist von dieser Überlieferung geprägt."
      },
      {
        "title": "Der Blick des Gegners",
        "text": "Caesar war zugleich Feldherr, Politiker und Autor. Seine Beschreibung tapferer Gegner kann den eigenen Sieg aufwerten. Diodors allgemeine Keltenbeschreibung bietet eine zusätzliche Aussenperspektive, aber keine automatische Bestätigung jeder Aussage über die Helvetier. Felix Müller zeigt, wie wichtig Archäologie und vorsichtige Deutung bleiben."
      },
      {
        "title": "Ein Nationalheld im Bild",
        "text": "Im 19. Jahrhundert stellten Gemälde und Geschichtsbücher Divico als mutigen Gegenspieler Roms dar. Das Bild «Die Römer unter dem Joch» von Charles Gleyre gehört in diese spätere Erinnerungskultur. Es ist keine antike Aufnahme. Frage nach Körperhaltung, Sieger und Besiegten, Komposition und dem Selbstbild der Entstehungszeit."
      }
    ],
    "note": "Die Überlieferung verbindet Divico mit dem Sieg der Tiguriner über ein römisches Heer bei Agen 107 v. Chr.; dabei wurde der Konsul Lucius Cassius Longinus getötet. Für 58 v. Chr. schildert Caesar Divico als helvetischen Gesandten. Was wir wissen, ist von dieser Überlieferung geprägt. Caesar war zugleich Feldherr, Politiker und Autor. Seine Beschreibung tapferer Gegner kann den eigenen Sieg aufwerten. Diodors allgemeine Keltenbeschreibung bietet eine zusätzliche Aussenperspektive, aber keine automatische Bestätigung jeder Aussage über die Helvetier. Felix Müller zeigt, wie wichtig Archäologie und vorsichtige Deutung bleiben. Im 19. Jahrhundert stellten Gemälde und Geschichtsbücher Divico als mutigen Gegenspieler Roms dar. Das Bild «Die Römer unter dem Joch» von Charles Gleyre gehört in diese spätere Erinnerungskultur. Es ist keine antike Aufnahme. Frage nach Körperhaltung, Sieger und Besiegten, Komposition und dem Selbstbild der Entstehungszeit.",
    "tasks": [
      {
        "type": "write",
        "q": "Ihr habt eine Frage an Caesar. Stellt diejenige, die seine Siegergeschichte ins Wanken bringen könnte.",
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
        "type": "number",
        "q": "Das Gemälde führt zu einem älteren Sieg bei Agen. Findet dessen Jahr vor Christus in der Akte.",
        "images": ["gleyre"],
        "label": "Jahr vor Christus",
        "answer": 107,
        "why": "107 v. Chr. gehört zur Überlieferung des Tiguriner-Sieges bei Agen. Das ist nicht die Niederlage der Helvetier bei Bibracte 58 v. Chr."
      },
      {
        "type": "write",
        "q": "Das Bild sieht wie ein Augenzeugenbericht aus. Sucht zwei Details, die einen Triumph inszenieren.",
        "images": ["gleyre"],
        "prompts": [
          "Zwei sichtbare Mittel, mit denen Sieg oder Unterlegenheit inszeniert werden",
          "Was erzählt das Bild eher über die spätere Schweiz als über die Antike?"
        ],
        "criteria": [
          "Ich beginne mit sichtbaren Details, etwa Körperhaltung, räumlicher Anordnung oder Blickrichtung.",
          "Ich unterscheide das dargestellte Ereignis von der Entstehungszeit des Bildes.",
          "Ich behandle das Gemälde als Deutung und nicht als Augenzeugenbeleg."
        ],
        "why": "Ein Historienbild kann Stolz und Zugehörigkeit erzeugen. Seine Wirkung ist untersuchbar; die dargestellten Details sind damit noch nicht für die Antike bewiesen."
      }
    ],
    "source": "PDF S. 5, Abschnitt 11; Caesar-Auszug und Müller im DOCX; Nationalmuseum, Divico – vergessener Nationalheld.",
    "pdf": [
      11
    ],
    "images": [
      "gleyre",
      "helvetii-coin"
    ],
    "reward": {
      "title": "Parteilicher Zeuge",
      "text": "Caesars Sieg und spätere Heldenbilder beeinflussen, wie die Helvetier erzählt werden."
    }
  },
  {
    "title": "Niemand ist verschwunden",
    "tag": "AKT II · WIDERSPRÜCHE",
    "intro": "Nach Bibracte endet die Akte nicht. Häuser, Orte und Namen führen weiter in die römische Zeit. Sucht nach den Menschen, die in einer Geschichte von Sieg und Niederlage leicht verschwinden.",
    "knowledge": [
      {
        "title": "Civitas ist mehr als Stadt",
        "text": "Das Gebiet der Helvetier wurde schrittweise in römische Verwaltungs- und Wirtschaftsstrukturen eingebunden. Die Civitas Helvetiorum umfasste nicht nur einen Stadtort, sondern auch Umland und Bevölkerung. Ihr Hauptort wurde Aventicum, das heutige Avenches."
      },
      {
        "title": "Aventicum",
        "text": "Aventicum entwickelte sich zu einem politischen, religiösen und wirtschaftlichen Zentrum. Theater, Amphitheater, Tempel und Badeanlagen gehören zu seiner Stadtgeschichte. Im Bürgerkrieg von 69 n. Chr. gerieten die Helvetier erneut in einen schweren Konflikt mit römischen Truppen. Die Bevölkerung bestand weiter; Lebensweisen veränderten sich über Generationen. Dafür steht der Begriff gallorömisch."
      },
      {
        "title": "Vergleich Zürichsee",
        "text": "Die PDF nennt drei regionale Zugänge: den keltischen Lindenhof vor Turicum, die Gräber beim Schulhaus Kern und das spätere römische Kempraten am oberen Zürichsee. Kempraten entstand ungefähr 30/40 n. Chr. und hatte eine regionale Zentrumsfunktion. Es zeigt Entwicklungen nach der keltischen Epoche und darf nicht einfach als keltisches Dorf ausgegeben werden."
      }
    ],
    "note": "Das Gebiet der Helvetier wurde schrittweise in römische Verwaltungs- und Wirtschaftsstrukturen eingebunden. Die Civitas Helvetiorum umfasste nicht nur einen Stadtort, sondern auch Umland und Bevölkerung. Ihr Hauptort wurde Aventicum, das heutige Avenches. Aventicum entwickelte sich zu einem politischen, religiösen und wirtschaftlichen Zentrum. Theater, Amphitheater, Tempel und Badeanlagen gehören zu seiner Stadtgeschichte. Im Bürgerkrieg von 69 n. Chr. gerieten die Helvetier erneut in einen schweren Konflikt mit römischen Truppen. Die Bevölkerung bestand weiter; Lebensweisen veränderten sich über Generationen. Dafür steht der Begriff gallorömisch. Die PDF nennt drei regionale Zugänge: den keltischen Lindenhof vor Turicum, die Gräber beim Schulhaus Kern und das spätere römische Kempraten am oberen Zürichsee. Kempraten entstand ungefähr 30/40 n. Chr. und hatte eine regionale Zentrumsfunktion. Es zeigt Entwicklungen nach der keltischen Epoche und darf nicht einfach als keltisches Dorf ausgegeben werden.",
    "tasks": [
      {
        "type": "pairs",
        "q": "Vier Fundorte melden sich. Verbindet sie mit den passenden Akten.",
        "items": [
          "Zürich, Lindenhof",
          "Zürich, Schulhaus Kern",
          "Kempraten",
          "Aventicum / Avenches"
        ],
        "categories": [
          "Römische Siedlung ab ungefähr 30/40 n. Chr.",
          "Hauptort der Civitas Helvetiorum",
          "Keltisches Oppidum vor Turicum",
          "Gräber und einzelne Lebensgeschichten"
        ],
        "answer": [
          2,
          3,
          0,
          1
        ],
        "why": "Die Orte zeigen unterschiedliche Zeiten und Erkenntnismöglichkeiten. Ein römischer Ort ist nicht automatisch ein Beleg für dieselbe Siedlung in keltischer Zeit."
      },
      {
        "type": "text",
        "q": "Öffnet die Akte nach der Eroberung: Wie heissen der Hauptort und die kulturelle Verbindung?",
        "fields": [
          {
            "label": "Antiker Name von Avenches",
            "accept": [
            "Aventicum", "Aventicum (Avenches)", "Aventicum / Avenches", "Avenches / Aventicum", "der Hauptort Aventicum"
            ]
          },
          {
            "label": "Verbindung keltischer und römischer Elemente (Adjektiv)",
            "accept": [
              "gallorömisch",
              "galloroemisch",
            "gallorömische", "gallorömischen", "gallorömischer", "gallorömisches", "gallo-römische Kultur", "gallo-römisch", "keltisch-römisch", "keltisch-römische Kultur", "gallo-romaine", "culture gallo-romaine"
            ]
          }
        ],
        "why": "Aventicum war der Hauptort. Gallorömisch beschreibt eine kulturelle Verbindung und keine vollständige Auslöschung der lokalen Bevölkerung."
      },
      {
        "type": "sort",
        "q": "Im Register wurde die ganze Civitas auf eine Stadt reduziert. Trennt Gebiet und Mittelpunkt.",
        "items": [
          "Aventicum als Hauptort",
          "Das zugehörige Umland",
          "Die Bevölkerung des Gebietes",
          "Theater und Bäder des Hauptortes"
        ],
        "categories": [
          "Hauptort",
          "Geht über den Hauptort hinaus"
        ],
        "answer": [
          0,
          1,
          1,
          0
        ],
        "why": "Die Civitas Helvetiorum umfasste Gebiet und Bevölkerung, nicht nur Aventicum. Unter römischer Herrschaft lebten Menschen weiter und veränderten ihre Lebensweise."
      }
    ],
    "source": "PDF S. 5–6, Abschnitte 12 und 14; HLS Civitas; Kantonsarchäologie St. Gallen, Kempraten.",
    "pdf": [
      12,
      14
    ],
    "images": [
      "avenches",
      "lindenhof"
    ],
    "reward": {
      "title": "Weiterleben",
      "text": "Römische Herrschaft bedeutet Veränderung, nicht das Verschwinden der Bevölkerung."
    }
  },
  {
    "title": "Knochen im Heiligtum",
    "tag": "AKT III · DIE EIGENE DEUTUNG",
    "intro": "Eine Nachricht aus Bern: Bärenknochen in einem Heiligtum. Das Vergleichsteam hat einen Film geschickt. Findet den Moment, an dem aus einem Knochenfund eine Geschichte über ein Ritual wird. Das braucht ihr für La Tène.",
    "video": true,
    "note": "Ohne Video: Der Beitrag bezeichnet die Siedlung auf der Engehalbinsel als Brenodurum und ihre Bewohner als Helvetier. Eine befestigte keltische Siedlung heisst Oppidum. Im Heiligtum wurden Bärenknochen gefunden; das vermutete Ritual ist eine Deutung. Unter römischer Herrschaft lebte die Bevölkerung weiter; es entwickelte sich eine gallorömische Kultur. Der Film führt nach Bern, nicht nach Neuchâtel. Vergleiche die Methoden: Was wird ausgegraben? Was wird rekonstruiert? Woran erkennt man im Film eine Vermutung? Im Museum am Neuenburgersee kannst du dieselben Fragen stellen.",
    "source": "SRF: Die Kelten und die Römer (2024), 04:01–04:40, 07:09–07:39 und 10:31–11:21; geprüft anhand der deutschen Untertitel.",
    "tasks": [
      {
        "type": "text",
        "q": "Funk aus Bern · 04:01–04:40: Identifiziert Siedlung und Siedlungstyp.",
        "fields": [
          {
            "label": "Wie nennt der Film diese Siedlung?",
            "accept": [
              "Brenodurum",
            "Brenodor", "Brenodur", "Brenodurum auf der Engehalbinsel", "Brenodor auf der Engehalbinsel", "Oppidum Brenodurum", "Oppidum Brenodor"
            ]
          },
          {
            "label": "Wie heisst der Fachbegriff für eine befestigte keltische Siedlung?",
            "accept": [
              "Oppidum",
            "ein Oppidum", "keltisches Oppidum", "befestigtes Oppidum", "Oppida", "befestigte keltische Siedlung", "befestigte Siedlung", "befestigte Stadt", "ville fortifiée", "habitat fortifié"
            ]
          }
        ],
        "why": "Der Film nennt Brenodurum eine bedeutende Siedlung der Helvetier. Oppidum ist der lateinische Begriff für eine solche befestigte keltische Siedlung."
      },
      {
        "type": "mark",
        "q": "07:09–07:39: Fangt die Vermutung ab. Markiert die Wörter, mit denen der Film seine Unsicherheit zeigt.",
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
        "q": "10:31–11:21: Die Menschen leben weiter. Unter welchem Kulturbegriff findet ihr ihre Spuren?",
        "fields": [
          {
            "label": "Es entstand die … Kultur.",
            "accept": [
              "gallorömische",
              "galloroemische",
              "gallo-römische",
              "gallorömisch",
            "gallorömische Kultur", "gallorömischen", "gallorömischer", "gallorömisches", "keltisch-römisch", "keltisch-römische", "keltisch-römische Kultur", "culture gallo-romaine", "die gallorömische Kultur", "eine gallorömische Kultur"
            ]
          }
        ],
        "why": "Politische Eroberung bedeutet nicht, dass eine Bevölkerung verschwindet. Der Film beschreibt Weiterleben und kulturellen Austausch."
      }
    ],
    "knowledge": [
      {
        "title": "Ein Vergleich für Neuchâtel",
        "text": "Ohne Video: Der Beitrag bezeichnet die Siedlung auf der Engehalbinsel als Brenodurum und ihre Bewohner als Helvetier. Eine befestigte keltische Siedlung heisst Oppidum. Im Heiligtum wurden Bärenknochen gefunden; das vermutete Ritual ist eine Deutung. Unter römischer Herrschaft lebte die Bevölkerung weiter; es entwickelte sich eine gallorömische Kultur."
      },
      {
        "title": "Zwei Orte, dieselbe Methode",
        "text": "Der Film führt nach Bern, nicht nach Neuchâtel. Vergleiche die Methoden: Was wird ausgegraben? Was wird rekonstruiert? Woran erkennt man im Film eine Vermutung? Im Museum am Neuenburgersee kannst du dieselben Fragen stellen."
      }
    ],
    "pdf": [],
    "images": [
      "latenium-interior",
      "torc"
    ],
    "imageNote": "Diese Vergleichsbilder stammen nicht aus dem SRF-Film. Die Ausstellung im Laténium zeigt hier die Steinzeit; der Film behandelt dagegen Bern und die Eisenzeit.",
    "reward": {
      "title": "Knochen und Vermutung",
      "text": "Bärenknochen sind ein Befund; der Ablauf eines Opferrituals ist eine Deutung."
    }
  },
  {
    "title": "Die Frau auf der Münze",
    "tag": "AKT III · DIE EIGENE DEUTUNG",
    "intro": "Im Bildarchiv taucht eine Frau mit Schild auf. Helvetia. Eine Spur zu den antiken Helvetiern – oder eine viel spätere Idee der Schweiz? Untersucht ihre wechselnden Gestalten, bevor ihr sie in eure Fundakte aufnehmt.",
    "knowledge": [
      {
        "title": "Was ist eine Allegorie?",
        "text": "Eine Allegorie macht etwas Abstraktes anschaulich. Als Personifikation stellt eine menschliche Figur zum Beispiel ein Land oder die Freiheit dar. Helvetia verkörpert die Schweiz; sie ist keine historische Helvetierin. Der Name erinnert an die Helvetier und begegnet auch in «Confoederatio Helvetica». Das ist keine geradlinige Gleichung zwischen einem antiken Volk und allen heutigen Schweizerinnen und Schweizern."
      },
      {
        "title": "Die Bildsprache entschlüsseln",
        "text": "Bei der stehenden Helvetia auf Schweizer Münzen helfen Schild mit Schweizerkreuz, Speer und Gewand bei der Identifikation. Attribute können Schutz, Wehrhaftigkeit und Würde nahelegen; ihre genaue Bedeutung wird am jeweiligen Bild begründet. Eine Frauenfigur allein reicht nicht: Auch Freiheit oder eine Republik können weiblich personifiziert werden."
      },
      {
        "title": "Vom Sockel auf die Reise",
        "text": "Bettina Eichins «Helvetia auf der Reise» in Basel setzt die Figur in eine nachdenkliche Haltung. Schild und Speer sind abgelegt, ein Koffer gehört dazu. Vergleiche diese Darstellung mit der stehenden Münzfigur: Welche Vorstellung von der Schweiz entsteht? Die Bilder erzählen von ihren Entstehungszeiten und heutigen Deutungen, nicht vom Aussehen antiker Helvetier."
      },
      {
        "title": "Zugehörigkeit und Widerspruch",
        "text": "Besonders im 19. Jahrhundert wurde der Helvetiername zu einer sprachübergreifenden Identifikationsfigur. Damit konnten andere antike Gruppen aus dem Blick geraten. Diskutiert zudem: Wer darf ein Land repräsentieren? Eine weibliche Symbolfigur beweist nicht automatisch politische Gleichberechtigung realer Frauen. Eine heutige Allegorie kann Zugehörigkeit und Vielfalt anders sichtbar machen."
      }
    ],
    "note": "Eine Allegorie macht etwas Abstraktes anschaulich. Als Personifikation stellt eine menschliche Figur zum Beispiel ein Land oder die Freiheit dar. Helvetia verkörpert die Schweiz; sie ist keine historische Helvetierin. Der Name erinnert an die Helvetier und begegnet auch in «Confoederatio Helvetica». Das ist keine geradlinige Gleichung zwischen einem antiken Volk und allen heutigen Schweizerinnen und Schweizern. Bei der stehenden Helvetia auf Schweizer Münzen helfen Schild mit Schweizerkreuz, Speer und Gewand bei der Identifikation. Attribute können Schutz, Wehrhaftigkeit und Würde nahelegen; ihre genaue Bedeutung wird am jeweiligen Bild begründet. Eine Frauenfigur allein reicht nicht: Auch Freiheit oder eine Republik können weiblich personifiziert werden. Bettina Eichins «Helvetia auf der Reise» in Basel setzt die Figur in eine nachdenkliche Haltung. Schild und Speer sind abgelegt, ein Koffer gehört dazu. Vergleiche diese Darstellung mit der stehenden Münzfigur: Welche Vorstellung von der Schweiz entsteht? Die Bilder erzählen von ihren Entstehungszeiten und heutigen Deutungen, nicht vom Aussehen antiker Helvetier. Besonders im 19. Jahrhundert wurde der Helvetiername zu einer sprachübergreifenden Identifikationsfigur. Damit konnten andere antike Gruppen aus dem Blick geraten. Diskutiert zudem: Wer darf ein Land repräsentieren? Eine weibliche Symbolfigur beweist nicht automatisch politische Gleichberechtigung realer Frauen. Eine heutige Allegorie kann Zugehörigkeit und Vielfalt anders sichtbar machen.",
    "tasks": [
      {
        "type": "letters",
        "q": "Die Frau ist kein Porträt. Entschlüsselt den Begriff für eine Figur, die eine Idee sichtbar macht.",
        "images": ["helvetia-coin"],
        "letters": [
          "L",
          "E",
          "A",
          "R",
          "G",
          "O",
          "L",
          "I",
          "E"
        ],
        "answer": "ALLEGORIE",
        "why": "Eine Allegorie stellt einen abstrakten Inhalt anschaulich dar. Bei Helvetia übernimmt eine menschliche Figur diese Aufgabe: die Personifikation der Schweiz."
      },
      {
        "type": "write",
        "q": "Zwei Helvetias, zwei Auftritte. Was hat sich zwischen Münze und Reisender verändert?",
        "images": ["helvetia-coin", "helvetia-basel-detail"],
        "prompts": [
          "Was erkennst du bei Körperhaltung und Gegenständen?",
          "Welche unterschiedlichen Schweizbilder deutest du daraus?",
          "Welche deiner Aussagen ist Beobachtung, welche Interpretation?"
        ],
        "criteria": [
          "Ich nenne konkrete Details aus beiden Bildern.",
          "Ich erkläre meine Deutung anhand dieser Details.",
          "Ich trenne sichtbare Merkmale von zugeschriebener Bedeutung."
        ],
        "why": "Die aufrechte Münzfigur und die sitzende Reisende setzen unterschiedliche Akzente. Schild, Speer, Koffer und Haltung können Identität, Wehrhaftigkeit oder Nachdenklichkeit zur Diskussion stellen."
      },
      {
        "type": "write",
        "q": "Gebt Helvetia drei neue Gegenstände. Welche Schweiz würde sie damit erzählen?",
        "images": ["helvetia-coin", "helvetia-basel-detail"],
        "prompts": [
          "Welche drei Attribute oder Gegenstände würdest du ihr geben – und warum?",
          "Wessen Perspektive soll sichtbar werden, die im klassischen Bild leicht fehlt?"
        ],
        "criteria": [
          "Ich begründe alle gewählten Attribute.",
          "Ich reflektiere Zugehörigkeit oder Vielfalt statt nur dekorative Details zu nennen.",
          "Ich behandle meinen Entwurf als heutige Aussage, nicht als historische Rekonstruktion."
        ],
        "why": "Allegorien sind gestaltete Aussagen. Ein heutiger Entwurf darf klassische Attribute befragen und neue Perspektiven einbringen; seine Bedeutung muss verständlich begründet werden."
      }
    ],
    "source": "PDF S. 5–6, Abschnitt 13; Swissmint, Helvetia; Nationalmuseum, Helvetia auf Reisen und Bildgeschichte.",
    "pdf": [
      13
    ],
    "images": [
      "helvetia-coin",
      "helvetia-basel-detail",
      "helvetia-basel"
    ],
    "reward": {
      "title": "Helvetia",
      "text": "Die Frau verkörpert die spätere Schweiz. Sie ist keine antike Helvetierin."
    }
  },
  {
    "title": "Raus aus dem Grabungszelt",
    "tag": "AKT III · DIE EIGENE DEUTUNG",
    "intro": "Jetzt geht eure Akte mit auf die Reise nach Neuchâtel. La Tène, Laténium, Republiksdenkmal: Drei Orte, drei Arten von Spuren. Sammelt eure eigenen Beobachtungen vor Ort oder an den vergrösserbaren Fotos.",
    "knowledge": [
      {
        "title": "Laténium in Hauterive",
        "text": "Im Museum und Park begegnen euch Originale, Rekonstruktionen und unterschiedliche Epochen. Das nachgebaute Seeuferhaus im Park gehört zur Bronzezeit, nicht automatisch zur helvetischen Eisenzeit. Haltet bei jedem Objekt Bezeichnung, Datierung, Herkunft und den Status als Original oder Rekonstruktion fest. Geht der Frage nach, wie ein Gegenstand von seinem Fundkontext ins Museum gelangt und welche Informationen die Beschriftung bewahrt."
      },
      {
        "title": "La Tène bei Marin-Epagnier",
        "text": "Der Fundort liegt an der Thielle/Zihl am Neuenburgersee. Waffen, Werkzeuge, Schmuck und weitere Funde wurden unterschiedlich gedeutet; religiöse Niederlegungen sind eine wichtige Interpretation. Erfindet vor Ort keine sichtbaren Ruinen. Notiert, was heute tatsächlich zu sehen ist und welche Informationen erst durch Funde und Forschung hinzukommen."
      },
      {
        "title": "Neuchâtel als Erinnerungsraum",
        "text": "Am Rand des Jardin anglais, an der Avenue du Premier-Mars, zeigt das Monument de la République eine Begegnung von Allegorien: Laut Bundesinventar empfängt Helvetia die Republik Neuenburg. Das 1898 eingeweihte Denkmal erinnert an die Republikgründung vom 1. März 1848. Untersucht, wie Blickkontakt, Gesten und Attribute diese politische Beziehung inszenieren. Eine Frauenfigur allein genügt nicht zur Identifikation; Beschriftung und Kontext entscheiden mit."
      },
      {
        "title": "Praktisch planen",
        "text": "Die drei Orte sind getrennte Ziele. Die Lehrperson legt Wege, Zeit und Programm fest. Aktuelle Angaben zu Zugang, Öffnung und Gruppenangeboten stehen auf den verlinkten offiziellen Seiten; hier werden keine nicht bestätigten Besuchstermine behauptet. Bilder lassen sich im Spiel vergrössern. Euer Bericht enthält die vor Ort oder am Bild formulierten Beobachtungen."
      }
    ],
    "note": "Im Museum und Park begegnen euch Originale, Rekonstruktionen und unterschiedliche Epochen. Das nachgebaute Seeuferhaus im Park gehört zur Bronzezeit, nicht automatisch zur helvetischen Eisenzeit. Haltet bei jedem Objekt Bezeichnung, Datierung, Herkunft und den Status als Original oder Rekonstruktion fest. Geht der Frage nach, wie ein Gegenstand von seinem Fundkontext ins Museum gelangt und welche Informationen die Beschriftung bewahrt. Der Fundort liegt an der Thielle/Zihl am Neuenburgersee. Waffen, Werkzeuge, Schmuck und weitere Funde wurden unterschiedlich gedeutet; religiöse Niederlegungen sind eine wichtige Interpretation. Erfindet vor Ort keine sichtbaren Ruinen. Notiert, was heute tatsächlich zu sehen ist und welche Informationen erst durch Funde und Forschung hinzukommen. Am Rand des Jardin anglais, an der Avenue du Premier-Mars, zeigt das Monument de la République eine Begegnung von Allegorien: Laut Bundesinventar empfängt Helvetia die Republik Neuenburg. Das 1898 eingeweihte Denkmal erinnert an die Republikgründung vom 1. März 1848. Untersucht, wie Blickkontakt, Gesten und Attribute diese politische Beziehung inszenieren. Eine Frauenfigur allein genügt nicht zur Identifikation; Beschriftung und Kontext entscheiden mit. Die drei Orte sind getrennte Ziele. Die Lehrperson legt Wege, Zeit und Programm fest. Aktuelle Angaben zu Zugang, Öffnung und Gruppenangeboten stehen auf den verlinkten offiziellen Seiten; hier werden keine nicht bestätigten Besuchstermine behauptet. Bilder lassen sich im Spiel vergrössern. Euer Bericht enthält die vor Ort oder am Bild formulierten Beobachtungen.",
    "tasks": [
      {
        "type": "write",
        "q": "Nehmt eine eigene Spur in die Akte auf: ein Museumsobjekt oder ein Bild aus dem Archiv.",
        "images": ["fibula", "torc", "helvetii-coin"],
        "prompts": [
          "Name, Ort und Datierung (oder ausdrücklich: unbekannt)",
          "Drei sichtbare Merkmale und der Status: Original, Rekonstruktion oder heutige Fotografie",
          "Eine offene Frage an das Museum"
        ],
        "criteria": [
          "Ich dokumentiere, welches Objekt oder Bild ich untersucht habe.",
          "Ich halte Beobachtung und Deutung auseinander.",
          "Ich erfinde keine Datierung, wenn sie mir fehlt."
        ],
        "why": "Ein überprüfbares Protokoll macht sichtbar, woher die Angaben stammen. Auch ein ausdrücklich notiertes «unbekannt» ist wissenschaftlich hilfreicher als eine erfundene Präzision."
      },
      {
        "type": "write",
        "q": "Lest das Ufer. Wo würde eure erste Vermutung zur Landschaft passen – und wo wird sie unsicher?",
        "images": ["neuchatel"],
        "prompts": [
          "Was siehst du heute?",
          "Welche Möglichkeiten könnte das Wasser früher für Verkehr oder Siedlung geboten haben?",
          "Welche Veränderung oder Unsicherheit musst du berücksichtigen?"
        ],
        "criteria": [
          "Ich beschreibe zuerst die sichtbare Landschaft.",
          "Ich leite eine plausible historische Möglichkeit ab.",
          "Ich berücksichtige, dass Ufer und Wasserstände sich verändern können."
        ],
        "why": "Das heutige Seeufer regt Fragen an, ist aber keine unveränderte Momentaufnahme der Eisenzeit."
      },
      {
        "type": "write",
        "q": "Zwei Frauen am Denkmal: Entschlüsselt, wer wen empfängt und warum.",
        "images": ["republique"],
        "prompts": [
          "Was zeigen Blickrichtung, Gesten und Gegenstände der beiden stehenden Figuren?",
          "Helvetia empfängt die Republik Neuenburg: Welche politische Beziehung stellt das Bild damit her?",
          "Unterscheide das Erinnerungsdatum 1848 vom Entstehungsjahr 1898."
        ],
        "criteria": [
          "Ich beschreibe sichtbare Details, bevor ich sie deute.",
          "Ich unterscheide die Schweiz als Helvetia von der Republik Neuenburg.",
          "Ich trenne das erinnerte Ereignis von der späteren Denkmalsetzung."
        ],
        "why": "Das Bundesinventar identifiziert Helvetia und die Republik Neuenburg. Das 1898 eingeweihte Denkmal stellt die Erinnerung an 1848 als Beziehung zwischen Figuren dar. Eure Deutung der Gesten muss am Bild begründet werden."
      }
    ],
    "source": "Ergänzung zur PDF: Laténium, Park und Schulangebote; HLS La Tène; Bundesinventar, Monument de la République (Neuchâtel).",
    "pdf": [],
    "images": [
      "republique",
      "la-tene",
      "latenium"
    ],
    "reward": {
      "title": "Eigene Beobachtung",
      "text": "La Tène, Museum und Denkmal erzählen auf unterschiedliche Weise von Vergangenheit."
    }
  },
  {
    "title": "Was bleibt von eurer Vermutung?",
    "tag": "AKT III · DIE EIGENE DEUTUNG",
    "intro": "Die Akte liegt auf dem Tisch. Ihr habt Dinge, Berichte und Bilder untersucht. Welche Erklärung für La Tène könnt ihr verteidigen? Zieht eure Belege zusammen – und zeigt auch die Spur, die eurer Vermutung widerspricht.",
    "knowledge": [
      {
        "title": "Was wissen wir über wen?",
        "text": "Die Leitfrage der PDF lautet: Was erfahren wir über die Helvetier selbst, und was über das Bild, das Römer und spätere Schweizer von ihnen zeichneten? Helvetier sind Teil der Geschichte des heutigen Gebiets, aber keine geradlinige Gleichsetzung mit der gesamten heutigen Bevölkerung. La Tène ist ein archäologischer Bezugspunkt, Helvetia eine spätere Allegorie."
      },
      {
        "title": "Ein kleines Quellenregal",
        "text": "Zum Weiterlesen nennt die PDF: den HLS-Artikel Helvetier als wissenschaftlichen Einstieg; HLS Kelten für den kulturellen Hintergrund; arCHaeo 2023.3 für neuere Forschungsdiskussion; Caesars Gallischen Krieg, Buch I, als antike Quelle; «Kelten in Zürich», die frei verfügbare 49-seitige Publikation; und das AS-Portal für Fundberichte. Alle Links findet ihr im Quellenfenster."
      },
      {
        "title": "Drei Schilder für eure Ausstellung",
        "text": "La Tène bildet den Ausgangspunkt eurer Ausstellung. Verbindet ein Objekt oder den Fundort mit Caesars Darstellung und einem Helvetia-Bild. Zeigt bei jeder Verbindung, was belegt ist, was ihr deutet und was offenbleibt. Euer Schlussurteil darf sich durch die Reise verändert haben."
      }
    ],
    "note": "Die Leitfrage der PDF lautet: Was erfahren wir über die Helvetier selbst, und was über das Bild, das Römer und spätere Schweizer von ihnen zeichneten? Helvetier sind Teil der Geschichte des heutigen Gebiets, aber keine geradlinige Gleichsetzung mit der gesamten heutigen Bevölkerung. La Tène ist ein archäologischer Bezugspunkt, Helvetia eine spätere Allegorie. Zum Weiterlesen nennt die PDF: den HLS-Artikel Helvetier als wissenschaftlichen Einstieg; HLS Kelten für den kulturellen Hintergrund; arCHaeo 2023.3 für neuere Forschungsdiskussion; Caesars Gallischen Krieg, Buch I, als antike Quelle; «Kelten in Zürich», die frei verfügbare 49-seitige Publikation; und das AS-Portal für Fundberichte. Alle Links findet ihr im Quellenfenster. La Tène bildet den Ausgangspunkt eurer Ausstellung. Verbindet ein Objekt oder den Fundort mit Caesars Darstellung und einem Helvetia-Bild. Zeigt bei jeder Verbindung, was belegt ist, was ihr deutet und was offenbleibt. Euer Schlussurteil darf sich durch die Reise verändert haben.",
    "tasks": [
      {
        "type": "sort",
        "q": "Letzte Kontrolle am Aktenbrett: Sortiert Volk, Kulturbegriff und Symbol auseinander.",
        "items": [
          "Helvetier",
          "Latènekultur",
          "Helvetia mit Schweizerkreuz",
          "Rauriker",
          "Die Benennung einer Eisenzeitkultur nach einem Fundort",
          "Eine gestaltete Frauenfigur als Verkörperung der Schweiz"
        ],
        "categories": [
          "Antike Bevölkerungsgruppe",
          "Archäologischer Begriff",
          "Spätere Allegorie"
        ],
        "answer": [
          0,
          1,
          2,
          0,
          1,
          2
        ],
        "why": "Diese Ebenen sind miteinander verknüpft, aber nicht austauschbar. Ihre Unterscheidung verhindert eine scheinbar geradlinige nationale Ursprungsgeschichte."
      },
      {
        "type": "write",
        "q": "Schreibt die Bildunterschrift eurer Schlussakte: Was verbinden La Tène, Caesar und Helvetia wirklich?",
        "images": ["la-tene", "gleyre", "helvetia-coin"],
        "prompts": [
          "Schreibe 4–6 Sätze mit einem Beispiel aus Neuchâtel, einem aus der antiken Überlieferung und einem aus der Helvetia-Bildsprache."
        ],
        "criteria": [
          "Ich verwende drei konkrete Beispiele.",
          "Ich unterscheide Fund, antike Darstellung und spätere Allegorie.",
          "Ich nenne mindestens eine Grenze unseres Wissens."
        ],
        "why": "Ein gutes Schild verbindet die Beispiele, ohne sie gleichzusetzen: Fundort und Kulturbegriff, Caesars Sicht und die spätere Personifikation der Schweiz."
      },
      {
        "type": "write",
        "q": "Kehrt zu eurer ersten Vermutung zurück. Welche Spur hat sie verändert?",
        "prompts": [
          "Meine erste Vermutung war …",
          "Diese konkrete Spur spricht dafür oder dagegen …",
          "Jetzt vermute ich … Offen bleibt …"
        ],
        "criteria": [
          "Ich beziehe mich auf eine konkrete Erfahrung oder ein konkretes Bild.",
          "Ich erkläre, wie daraus meine neue Einschätzung entsteht.",
          "Ich benenne eine echte offene Frage."
        ],
        "why": "Historisches Lernen kann zu einer präziseren Frage führen, nicht nur zu einer endgültigen Antwort. Bewahre deine Beispiele im herunterladbaren Bericht auf."
      }
    ],
    "source": "PDF S. 6, Abschnitt 15 und Leitfrage; alle bereitgestellten Materialien.",
    "pdf": [
      15
    ],
    "images": [
      "neuchatel",
      "helvetia-basel-detail",
      "republique"
    ],
    "reward": {
      "title": "Die offene Akte",
      "text": "Eine tragfähige Deutung nennt ihre Belege und ihre Grenzen."
    }
  }
];
