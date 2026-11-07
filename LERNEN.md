# Deine Website: so funktioniert sie

## Die Dateien

| Datei | Was sie macht | Vergleich |
|---|---|---|
| `index.html` | **Inhalt und Struktur**: alle Texte, Überschriften, Links | das Skelett und der Text |
| `styles.css` | **Aussehen**: Farben, Schriften, Abstände, Handy-Ansicht | die Kleidung |
| `script.js` | **Verhalten**: Hell/Dunkel-Knopf, aktive Navigation, Jahreszahl | die Muskeln (optional) |
| `assets/favicon.svg` | das kleine „LF“-Symbol im Browser-Tab | |
| `cv.pdf` | *fehlt noch*: dein CV zum Herunterladen (siehe unten) | |
| `PLAN.md` | der Plan, mit dem wir gestartet sind | |

Es gibt **keinen Build-Schritt**: Was in den Dateien steht, zeigt der Browser direkt an.

## Seite lokal ansehen

Im Terminal, im Ordner `personal-website`:

```bash
python3 -m http.server 8080
```

Dann im Browser **http://localhost:8080** öffnen. Mit `Ctrl+C` stoppen.
(Ein Doppelklick auf `index.html` geht auch, nur der Download-Knopf verhält sich dann manchmal anders.)

## Texte ändern

1. `index.html` in einem Editor öffnen (z. B. VS Code oder Cursor).
2. Die Abschnitte sind mit Kommentaren markiert, z. B. `<!-- ===== EXPERIENCE ===== -->`.
3. Text zwischen den Tags ändern, z. B. `<p>Hier steht der Text</p>`, speichern, Browser neu laden.

Ein neuer Eintrag in der Zeitleiste ist einfach ein kopierter `<li>…</li>`-Block.

## Aussehen ändern

Ganz oben in `styles.css` stehen die **Design-Tokens**, z. B. `--accent: #1f4e5f;`.
Ändere dort eine Farbe, und sie ändert sich überall. Das ist das wichtigste Prinzip von gutem CSS:
Werte einmal festlegen, überall wiederverwenden.

## CV aktualisieren

`cv.pdf` ist aus `Desktop/Bewerbungsunterlagen aktuell/Lebenslauf/00_AKTUELLE VORLAGEN/LF_CV_Website_public.docx`
exportiert, einer Kopie deines CVs **ohne Telefonnummer und Adresse**. Wenn du den CV änderst:
in Word öffnen, *Datei → Als PDF speichern* als `cv.pdf` in diesen Ordner, dann committen und pushen.

## Noch offen

- **LinkedIn**: unter `CONTACT` in `index.html` als weiteres `<li>` ergänzen.
- **Texte gegenlesen**: vor allem Intro und Thesis-Text.

## Mit AI an der Seite arbeiten: gute Wünsche formulieren

- **Konkret statt vage**: „Mach den Intro-Absatz kürzer, max. 2 Sätze, und nenn die Thesis“
  statt „mach es besser“.
- **Eine Sache pro Wunsch**, dann ansehen, dann die nächste. So lernst du, was jede Änderung bewirkt.
- **Frag nach dem Warum**: „Erklär mir, was `grid-template-columns` in der Zeitleiste macht.“
- **Lass dir Alternativen zeigen**: „Zeig mir zwei andere Akzentfarben im Vergleich.“
- **Nach jeder guten Änderung committen** (siehe unten). Dann kannst du alles zurückholen.

## Git in 30 Sekunden

Git speichert Versionen deiner Seite. Jeder **Commit** ist ein Speicherpunkt.

```bash
git log --oneline
```

zeigt alle Speicherpunkte.

```bash
git add -A && git commit -m "Kontaktdaten eingetragen"
```

speichert einen neuen Speicherpunkt.

## Online

Die Seite ist live unter **https://lfulda13-png.github.io**. Der Code liegt im öffentlichen
Repository `lfulda13-png/lfulda13-png.github.io`. Für jede Änderung: committen, dann

```bash
git push
```

Nach ca. 1 Minute ist die neue Version online.

## Ideen für später

- Weitere Projekte: Inflations-RCT, Blog „Ghostbusting AI“, Policy Memo
- Foto im Intro
- Eigene Domain (z. B. `luxfulda.de`, ca. 10 €/Jahr)
- Deutsche Version
