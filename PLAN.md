# Plan: Persönliche Website von Lux Fulda

Stand: 7. November 2026

## Ziel

Eine einseitige, englischsprachige Website mit ruhigem, akademischem Look. Sie stellt dich vor, zeigt Erfahrung, Ausbildung und Engagement, stellt deine BA-Thesis *The Price of War* als Projekt vor und bietet deinen CV als PDF zum Download an. Am Ende kann sie kostenlos über GitHub Pages online gehen.

Nebenbei sollst du lernen, wie so eine Seite aufgebaut ist und wie man mit AI daran arbeitet.

## Technik: bewusst einfach

- **Reines HTML + CSS** und ein paar Zeilen JavaScript, ohne Framework und ohne Build-Schritt.
  Warum: Jede Datei lässt sich öffnen und verstehen, und was im Editor steht, sieht man genau so im Browser. Für den Einstieg ist das der beste Lernweg. Ein Framework wie Astro kann später dazukommen, falls die Seite wächst.
- **Git** für die Versionsgeschichte: ein Commit pro Arbeitsschritt, damit du nachvollziehen kannst, wie die Seite entstanden ist.
- **GitHub Pages** zum Veröffentlichen, später unter `lfulda13-png.github.io`.

## Aufbau der Seite (eine Seite, Navigation springt zu Abschnitten)

1. **Header / Intro**: Name, eine Zeile Positionierung (z. B. „Public Policy · Economics · Digital Governance“), 2–3 Sätze über dich, Buttons „Download CV“ und „Contact“.
2. **About**: kurzer Absatz zu Studium (Bard College Berlin, Hertie MPP), Schwerpunkten und Sprachen.
3. **Experience**: Deloitte, KENFO, Forschungsassistenz Heidelberg/Frankfurt, BMWE, Oxford Analytica, Abgeordnetenhaus Berlin. Je 1–2 Zeilen statt kompletter CV-Bullets.
4. **Project: The Price of War (BA-Thesis, in progress)**: Fragestellung (Kants fiskalisches Friedensargument und die wirtschaftlichen Kriegskosten nach Regimetyp), Datenbasis (Replikation von Federle et al. 2026, AER), Methode (Local Projections, Stata). Kennzeichnung als laufende Arbeit, ohne vorweggenommene Ergebnisse.
5. **Education**: Bard, Hertie, Austauschsemester (Sciences Po, Bologna, Bard NYC).
6. **Engagement & Awards**: Hertie CDG Advisory Board, FiscalFuture, MUN Best Delegate, sdw, Alpbach.
7. **Footer / Contact**: E-Mail und LinkedIn als Platzhalter, die du selbst einsetzt.

Inhalte stammen aus `LF_Strat_CV_092026.docx` und dem `PriceOfWar`-Ordner. Ich formuliere sie für das Web um, erfinde aber nichts dazu.

## Design

- Serifenschrift für Überschriften (z. B. *Source Serif*), gut lesbare Sans-Serif für Text, viel Weißraum, **eine** gedeckte Akzentfarbe (Dunkelblau oder Tannengrün).
- Funktioniert auf dem Handy und im Dark Mode.
- Kein Foto zum Start. Ein Platzhalter-Platz ist vorgesehen, damit du später eins einsetzen kannst.

## Datenschutz (wichtig, weil die Seite öffentlich wird)

- **Keine** Telefonnummer, Adresse oder Geburtsdatum auf der Website und im öffentlichen CV-PDF.
- Den Download-CV prüfe ich auf solche Angaben. Enthält er welche, lege ich nur einen Platzhalter an und schreibe dir auf, was du entfernen musst.
- Kontakt-E-Mail und LinkedIn setzt du selbst ein.
- Thesis-Inhalte bleiben auf der Ebene „Fragestellung + Methode“, ohne unveröffentlichte Ergebnisse.

## Was ich im autonomen Durchlauf mache (~1 Stunde)

1. Projektordner anlegen, Git initialisieren.
2. Grundgerüst: `index.html`, `styles.css`, `script.js` (nur für Navigation und Dark-Mode-Umschalter).
3. Inhalte aus CV und Thesis-Notizen einfügen und kürzen.
4. Design und Handy-Ansicht ausarbeiten.
5. CV-PDF vorbereiten (siehe Datenschutz).
6. Prüfen: Seite im eingebauten Browser öffnen, Desktop- und Handy-Ansicht, Dark Mode, Links, Barrierefreiheit (Kontraste, Alt-Texte, Überschriftenstruktur).
7. **`LERNEN.md` schreiben**: was jede Datei macht, wie man Texte ändert, wie man die Seite lokal ansieht, wie man mit AI gute Änderungswünsche formuliert, und die nächsten Schritte.
8. Ein Git-Commit pro Schritt.

## Was ich **nicht** ohne dich mache

- **Veröffentlichen**: GitHub-Repo anlegen und pushen erst nach deinem OK, wenn du die Seite gesehen und die Texte geprüft hast.
- Persönliche Kontaktdaten eintragen.

## Danach (gemeinsam, wenn du zurück bist)

- Texte durchgehen und anpassen.
- Kontaktdaten und ggf. Foto einsetzen.
- Online stellen auf GitHub Pages (ca. 5 Minuten).
- Optional später: weitere Projekte (Inflations-RCT, Blog „Ghostbusting AI“, Policy Memo), eigene Domain, deutsche Version.
