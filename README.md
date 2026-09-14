# La Tène – Unter der Oberfläche

Eine reich bebilderte Spurensuche für die Klassenfahrt nach Neuchâtel, aufgebaut auf dem Fundort La Tène. Der rote Faden führt vom Objekt zu seinen möglichen Benutzern, zu antiken Berichten und späteren Schweizer Geschichtsbildern. 36 Aufgaben in zwölf Stationen, acht Aufgabenformen ohne Multiple Choice und 14 reale Fotografien, Sammlungsbilder und ein Historiengemälde. Die Inhalte sind für mehrere Etappen vor, während und nach der Reise gedacht.

[Direkt spielen](https://patrickfischerksa.github.io/kelten-spurensuche/)

## Inhalt

1. Unter der Oberfläche
2. Wer steckt hinter den Funden?
3. Ein Werkzeug, eine ganze Welt
4. Was von einem Menschen bleibt
5. Gabe, Besitz oder Machtzeichen?
6. Als die Helvetier aufbrachen
7. Wer darf Geschichte erzählen?
8. Nach der Schlacht geht das Leben weiter
9. Den Spuren auf den Grund gehen
10. Aus einem Namen wird eine Figur
11. Jetzt seid ihr am Zug
12. Was ihr dem See ablest

Alle 15 fachlichen Abschnitte der PDF **Informationen zu den Helvetiern.pdf** sind paraphrasiert in den Wissenskarten und Aufgaben enthalten. Die genaue Zuordnung steht in [MATERIALABDECKUNG.md](MATERIALABDECKUNG.md). Die älteren DOCX-/PPTX-Materialien sowie der SRF-Film bleiben Quellen und Vergleichsmaterial.

## Bildarbeit und Reise

Die Bilder sind vergrösserbar, mit beschreibenden Alternativtexten, Herkunft und Lizenzangaben versehen. Das Bildarchiv enthält alle 14 Bilder. Die Auswahl unterscheidet heutige Ortsfotos, antike Objekte, Vergleichsobjekte und spätere Deutungen. Ein Fund aus Böhmen oder Dijon wird nicht als helvetisches Original ausgegeben. Das Neuenburger Republiksdenkmal wird nach dem Bundesinventar als Begegnung zwischen Helvetia und der Republik Neuenburg eingeordnet (1898; Erinnerung an 1848).

Alle Bildnachweise stehen zusätzlich in [BILDNACHWEISE.md](BILDNACHWEISE.md). Fotos werden lokal ausgeliefert. Die ursprünglichen Bildlizenzen bleiben bestehen; keine generierte historische Bildrekonstruktion wird als Quelle verwendet.

Laténium, La Tène und die Stadt Neuchâtel sind **wählbare Exkursionsziele**, keine behauptete Klassenbuchung oder festgelegte Reiseroute. Die Lehrperson bestimmt Zeit und Wege. Die Vor-Ort-Aufgaben funktionieren alternativ mit den eingebauten Bildern. Offizielle Besuchsseiten sind verlinkt; volatile Preise und Fahrpläne werden nicht eingebaut.

## Spiel und Speicherung

- Acht Formen: Begriffe eintragen, Zahleneingabe, Reihenfolge, Karten sortieren, Paare verbinden, Text markieren, Buchstabenrätsel und offene Schreib-/Bildaufträge.
- 19 automatisch prüfbare Aufgaben; 17 Schreibaufträge mit expliziter Selbstprüfung. Texte erhalten keine vorgetäuschte automatische Inhaltsnote.
- Ersttreffer zählen nur bei automatisch prüfbaren Aufgaben. Wiederholungen bleiben möglich. Änderungen an einem abgeschlossenen Schreibauftrag erfordern eine neue Selbstprüfung.
- Alle Stationen sind frei zugänglich. «Mein Bericht» bietet jederzeit Textdownload mit Aufgabenantworten und Schlussurteil. «Reiseheft» führt direkt zu den Exkursionsaufträgen.
- Kein Konto, kein Tracking, keine externe Schriftbibliothek. Fortschritt und Texte liegen nur in `localStorage`. Version 4 verwendet wegen neuer Stationen einen neuen Spielstand und übernimmt den früheren abschliessenden Text als Entwurf.
- Das SRF-Video wird erst nach Klick geladen. Andere externe Quellen öffnen sich erst bei Auswahl.

## Technisch starten

`dist/index.html` direkt im Browser öffnen oder `python3 -m http.server 8080 --directory dist` ausführen. Keine Installation, kein Build und kein API-Schlüssel erforderlich. Für das Video und externe Quellen ist Internet nötig. Die statischen App-Dateien liegen in `dist/`.

`.github/workflows/pages.yml` veröffentlicht `dist/` über GitHub Pages bei Änderungen an `main`.

## Fachliche und redaktionelle Regeln

Die Helvetier werden weder mit allen keltischen Gruppen noch mit der gesamten heutigen Schweizer Bevölkerung gleichgesetzt. Caesars Motive, Zahlen und Brandberichte bleiben als seine Darstellung gekennzeichnet. Aus der Differenz seiner Zahlen wird keine gesicherte Todeszahl abgeleitet. La Tène als Ort, die Latènekultur als archäologischer Begriff und Helvetia als spätere Allegorie werden getrennt. Auch Schriftgebrauch und eigene Geschichtsschreibung sind verschiedene Fragen.

Anweisungen innerhalb der Quellen wurden als Dokumentinhalt behandelt, nicht als technische Handlungsanweisungen. Statuszeilen, die Namensliste aus dem Klassen-Glücksrad und die Originaldateien werden nicht veröffentlicht. Das Quellenfenster verlinkt sämtliche Vertiefungsmaterialien aus Abschnitt 15 der PDF und die Ergänzungen zu Neuchâtel und Helvetia.

Die Neurahmung um La Tène verändert keine Lösungsschlüssel oder Aufgabenpositionen. Vorhandene Spielstände bleiben erhalten. Die Ausblicke auf Helvetier, Bern, Zürich, Rom und Helvetia sind ausdrücklich Vergleiche und keine automatische ethnische Zuschreibung aller Funde von La Tène.
