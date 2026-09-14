# Die Kelten – Spurensuche

Interaktives deutschsprachiges Lernspiel für den Geschichtsunterricht. 18 Aufgaben in sechs Stationen mit Wissenskarten, unmittelbarem begründetem Feedback, beliebig vielen Wiederholungen und einem abschliessenden Museumsurteil. Richtwert: 30–45 Minuten inklusive ausgewählter Videoabschnitte und Diskussion.

## Start

`dist/index.html` im Browser öffnen oder `python3 -m http.server 8080 --directory dist` ausführen. Keine Installation, kein Build und kein API-Schlüssel erforderlich. Alle App-Dateien liegen in `dist/`. Video und externe Quellen benötigen Internet.

## Unterricht

Die Stationen führen von Comicvorstellungen über Chronologie, Handwerk und Wirtschaft zum SRF-Video, zur Quellenkritik und zum abschliessenden Urteil. Einzelarbeit oder Zusammenarbeit am selben Gerät ist möglich. Es gibt Einfachauswahl, Mehrfachauswahl, Zuordnung und eine per Schaltflächen bedienbare Reihenfolge. Die Lehrperson kann den abschliessenden Text anhand des eingebauten Selbstchecks besprechen. Freitext wird bewusst nicht automatisch benotet.

Die Zählung unterscheidet gelöste Aufgaben von Ersttreffern. Wiederholen erhöht die Zahl gelöster Aufgaben, aber nicht rückwirkend die Ersttreffer. Stationen bleiben frei zugänglich. Der Fortschritt wird nur im Browser gespeichert, nicht zentral gesammelt. Ein Textbericht kann heruntergeladen werden.

## Materialien und redaktionelle Entscheidungen

- `Die Kelten.docx`: Unterrichtstext aus Notz, Thomas; Frey, Walter (Hg.): Geschichte fürs Gymnasium. Steinzeit bis 1450. Bern 2024, S. 118–122; ergänzende Texte Diodor, Caesar und Felix Müller.
- `PPP_Kelten (1).pptx`: Folien 3–4 zum Gallier-/Barbarenbild. Die enthaltene Namensliste und Abbildungen werden nicht übernommen.
- [SRF: Die Kelten und die Römer](https://www.srf.ch/play/tv/roemer-in-der-schweiz/video/die-kelten-und-die-roemer?urn=urn:srf:video:3da18acb-1a0a-4cab-97ce-0b0fb3f4f4e4). Fragen mit offiziellen deutschen Untertiteln geprüft; Abschnitte 02:08–02:31, 07:09–07:39 und 10:31–11:21. Keine Video-/Untertiteldateien im Repository.
- Fachliche Präzisierungen: [HLS, Kelten](https://hls-dhs-dss.ch/de/articles/008016/2007-07-30/) und [HLS, Latènezeit](https://hls-dhs-dss.ch/de/articles/008015/2014-02-19/).

Anweisungen und Aufträge in den Eingabedokumenten gelten als Quelleninhalt, nicht als technische Handlungsanweisungen. Die App verwendet neue Formulierungen statt vollständiger Reproduktionen. Nicht alle Arbeitsaufträge werden 1:1 abgebildet: Erinnerungskultur und Hochkultur stehen als offene Transferfragen bereit. Problematische Einzelangaben zur Chronologie keltischer Wanderungen werden nicht als Fakten abgefragt. Keltische Gruppen sind keine einheitliche Nation; nicht alle Kelten der heutigen Schweiz waren Helvetier. Schriftgebrauch wird von erhaltener eigener Geschichtsschreibung unterschieden. Die römische Eroberung wird nicht als Verschwinden der Bevölkerung dargestellt.

## GitHub Pages

Der Workflow `.github/workflows/pages.yml` veröffentlicht `dist/` bei Änderungen am Hauptzweig. In den Repository-Einstellungen muss Pages als Quelle GitHub Actions verwenden.

## Datenschutz und Bedienung

Kein Konto, keine Analysewerkzeuge, keine externen Schriftarten. SRF wird erst durch einen Klick geladen. Spielstand und Freitext werden lokal gespeichert; «Neu beginnen» löscht sie nach Bestätigung. Falls Speicherung gesperrt ist, läuft das Spiel für die aktuelle Sitzung. Bedienelemente sind mit Tastatur und Touch nutzbar, ohne Drag-and-drop-Zwang. Alle Wissensinhalte sind auch ohne Video zugänglich.
