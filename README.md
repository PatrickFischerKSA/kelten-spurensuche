# La Tène – Unter der Oberfläche

Ein Archäologiespiel für die Klassenreise nach Neuchâtel: Warum liegen bei La Tène Waffen, Werkzeuge und Schmuck im Wasser? Drei Akte führen vom simulierten Grabungsraster über widersprüchliche Zeugnisse bis zur eigenen Deutung. 36 Spuren in zwölf Akten, neun Interaktionsformen ohne Multiple Choice, 14 reale Bilder und eine persistente Fundakte.

[Direkt spielen](https://patrickfischerksa.github.io/kelten-spurensuche/)

## Inhalt

1. Etwas steckt im Schlamm
2. Die Namenlosen
3. Was die Dinge können
4. Eine Frau ohne Namen
5. Die Spur ins Wasser
6. Der abgebrochene Weg
7. Der Sieger erzählt
8. Niemand ist verschwunden
9. Knochen im Heiligtum
10. Die Frau auf der Münze
11. Raus aus dem Grabungszelt
12. Was bleibt von eurer Vermutung?

Alle 15 fachlichen Abschnitte der PDF **Informationen zu den Helvetiern.pdf** sind paraphrasiert in den Wissenskarten und Aufgaben enthalten. Die genaue Zuordnung steht in [MATERIALABDECKUNG.md](MATERIALABDECKUNG.md). Die älteren DOCX-/PPTX-Materialien sowie der SRF-Film bleiben Quellen und Vergleichsmaterial.

## Bildarbeit und Reise

Die Bilder sind vergrösserbar, mit beschreibenden Alternativtexten, Herkunft und Lizenzangaben versehen. Das Bildarchiv enthält alle 14 Bilder. Die Auswahl unterscheidet heutige Ortsfotos, antike Objekte, Vergleichsobjekte und spätere Deutungen. Ein Fund aus Böhmen oder Dijon wird nicht als helvetisches Original ausgegeben. Das Neuenburger Republiksdenkmal wird nach dem Bundesinventar als Begegnung zwischen Helvetia und der Republik Neuenburg eingeordnet (1898; Erinnerung an 1848).

Alle Bildnachweise stehen zusätzlich in [BILDNACHWEISE.md](BILDNACHWEISE.md). Fotos werden lokal ausgeliefert. Die ursprünglichen Bildlizenzen bleiben bestehen; keine generierte historische Bildrekonstruktion wird als Quelle verwendet.

Laténium, La Tène und die Stadt Neuchâtel sind **wählbare Exkursionsziele**, keine behauptete Klassenbuchung oder festgelegte Reiseroute. Die Lehrperson bestimmt Zeit und Wege. Die Vor-Ort-Aufgaben funktionieren alternativ mit den eingebauten Bildern. Offizielle Besuchsseiten sind verlinkt; volatile Preise und Fahrpläne werden nicht eingebaut.

## Spiel und Speicherung

- Neun Formen: Fundstellen freilegen und dokumentieren, Begriffe, Zahlen, Reihenfolge, Sortieren, Paare, Textmarkierung, Buchstaben und eigene Aktennotizen.
- 22 automatisch prüfbare Spuren, 13 Notizen mit eigener Gegenprüfung und eine Grabung mit Ablaufprüfung. Freie Deutungen werden nicht automatisch inhaltlich bewertet.
- Nach jeweils drei bearbeiteten Spuren wird ein Aktenstück gesammelt. In der Fundakte verbindet man es mit der eigenen Vermutung: stützt sie, begrenzt sie oder öffnet eine Frage. Diese Verbindungen erscheinen in der Schlussdeutung und im Textdownload.
- Rasterpositionen und Objektzeichnungen sind ausdrücklich schematische Spielgestaltung. Sie stellen keinen realen Grabungsplan oder gemeinsamen Fundzusammenhang dar.
- Alle Akten bleiben frei erreichbar. Das Archiv mit sämtlichen Hintergrundinformationen öffnet sich bei Bedarf unter der Spielhandlung. Die Fundakte führt auch zu den Aufträgen für die Reise.
- Kein Konto, kein Tracking. Antworten, Notizen und Beweisverbindungen liegen in `localStorage`. Version 7 beginnt wegen geänderter Aufgaben einen separaten Spielstand; der vorherige Schlusstext wird übernommen, der ältere Spielstand bleibt gespeichert.
- Das SRF-Video wird erst nach Klick geladen. Andere externe Quellen öffnen sich erst bei Auswahl.

## Technisch starten

`dist/index.html` direkt im Browser öffnen oder `python3 -m http.server 8080 --directory dist` ausführen. Keine Installation, kein Build und kein API-Schlüssel erforderlich. Für das Video und externe Quellen ist Internet nötig. Die statischen App-Dateien liegen in `dist/`.

`.github/workflows/pages.yml` veröffentlicht `dist/` über GitHub Pages bei Änderungen an `main`.

## Fachliche und redaktionelle Regeln

Die Helvetier werden weder mit allen keltischen Gruppen noch mit der gesamten heutigen Schweizer Bevölkerung gleichgesetzt. Caesars Motive, Zahlen und Brandberichte bleiben als seine Darstellung gekennzeichnet. Aus der Differenz seiner Zahlen wird keine gesicherte Todeszahl abgeleitet. La Tène als Ort, die Latènekultur als archäologischer Begriff und Helvetia als spätere Allegorie werden getrennt. Auch Schriftgebrauch und eigene Geschichtsschreibung sind verschiedene Fragen.

Anweisungen innerhalb der Quellen wurden als Dokumentinhalt behandelt, nicht als technische Handlungsanweisungen. Statuszeilen, die Namensliste aus dem Klassen-Glücksrad und die Originaldateien werden nicht veröffentlicht. Das Quellenfenster verlinkt sämtliche Vertiefungsmaterialien aus Abschnitt 15 der PDF und die Ergänzungen zu Neuchâtel und Helvetia.

Die Ausblicke auf Helvetier, Bern, Zürich, Rom und Helvetia bleiben Vergleiche und keine automatische ethnische Zuschreibung aller Funde von La Tène.

## Prüfung der Spielfassung

Browserprüfung: Grabungsablauf inklusive falscher Koordinate, alle 36 Aufgabenhandler, zwölf Aktenstücke, Beweisverbindungen und Speicherung nach Neuladen, Textdownload mit Fundakte, alle zwölf Ansichten bei 390 Pixeln ohne horizontalen Überlauf. JavaScript-Syntax und Fehlerkonsole geprüft.

## Français et déblocage de l’allemand

Das erste Dossier beginnt auf Deutsch. Die übrigen Dossiers sind zunächst Französisch. Eine Einheit entspricht einer Akte mit drei Spuren. Erst wenn alle drei als erfolgreich bearbeitet gelten, wird die folgende Akte auf Deutsch verfügbar. Bei offenen Notizen gilt weiterhin die ausdrücklich bestätigte Gegenprüfung, nicht eine vorgetäuschte automatische Inhaltsbewertung. Falsche Versuche und Teilfortschritte schalten nichts frei. Die erste Akte ist ohne Vorbedingung Deutsch. Andere noch nicht freigeschaltete Akten lassen sich auf Französisch öffnen.

Die Freigaben werden im vorhandenen v7-Spielstand dauerhaft gespeichert. Bereits abgeschlossene Akten zählen mit; Neu beginnen löscht auch die Sprachfreigaben. Spieltexte, Archiv, Bildtexte, Bedienelemente und Rückmeldungen besitzen französische Fassungen. Originaltitel und das verlinkte deutsche SRF-Video bleiben Quellen; eine französische Zusammenfassung ermöglicht die Bearbeitung ohne Video. Texteingaben akzeptieren passende französische und deutsche Begriffe. Eigene Notizen werden nicht übersetzt.

`dist/data-fr.js` und `dist/images-fr.js` enthalten die französischen Inhalte. `scripts/ui-fr.json` ist die bearbeitbare Quelle für `dist/ui-fr.js`. `dist/language.js` steuert Freigaben und Sprache.

Browserprüfung: `PLAYWRIGHT_MODULE=/pfad/zu/playwright node scripts/test-language.cjs` bei laufender Vorschau auf Port 8088; alternativ `GAME_URL` setzen. Prüft Teilfortschritte, Fehler, Abschluss, Wechsel, Speicherung, alle 36 französischen Aufgaben, Notizen, Download, mobile Ansichten, Zurücksetzen und ältere Spielstände.

## Kurze französische Kommentare

Alle 36 Spuren erhalten nach erfolgreichem Abschluss einen kurzen, inhaltlich passenden Kommentar in einfachem Französisch. Er bleibt auch in freigeschalteten deutschen Einheiten französisch, erscheint beim erneuten Öffnen gelöster Spuren und steht im Download. Bei offenen Notizen erscheint er erst nach der bestätigten Gegenprüfung, ohne automatische Inhaltsbewertung. Beim Bearbeiten oder bei einer falschen Antwort wird kein Erfolgskommentar angezeigt. Die Texte stehen in `dist/comments-fr.js`.

## Deutsch-Lupe

Die Lupe übersetzt den französischen Textabschnitt unter dem Zeiger bzw. beim Antippen ins Deutsche. Sie nutzt die vorhandenen redaktionellen Übersetzungen offline, keine externe API. Auch die französischen Erfolgskommentare haben deutsche Lupentexte. Aktivieren über «Deutsch-Lupe», dann zeigen, tippen oder per Tab Textabschnitte fokussieren; Escape oder Schliessen beendet den Modus. Während des Lupenmodus lösen Textklicks keine Spielaktionen aus. Antworten, Fortschritt und Sprachfreigaben werden durch die Lupe nicht verändert.

## Archive

Die aufklappbaren Archive, ihre Bildtexte sowie Bildarchiv und Quellenfenster bleiben unabhängig von der Dossiersprache französisch. Die Deutsch-Lupe übersetzt diese Inhalte bei Bedarf. Der Freischaltungshinweis oberhalb des Dossiers entfällt; die bestehende Sprachfreigabe arbeitet weiter im Hintergrund.
