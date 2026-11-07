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

## Noch zu erledigen (rot gewellt auf der Seite)

1. **Kontakt**: In `index.html` unter `CONTACT` deine E-Mail und dein LinkedIn eintragen
   und danach `class="todo-link"` entfernen.
2. **CV-PDF**: Ich habe eine Kopie deines CVs **ohne Telefonnummer und Adresse** angelegt:
   `Desktop/Bewerbungsunterlagen aktuell/Lebenslauf/00_AKTUELLE VORLAGEN/LF_CV_Website_public.docx`.
   Öffne sie in Word, prüfe sie, dann *Datei → Als PDF speichern* unter dem Namen
   **`cv.pdf`** direkt in diesen Ordner (`personal-website`).
   Die Uni-Mail steht noch in der Kopfzeile. Lösch sie, falls du sie nicht öffentlich willst.
3. **Texte gegenlesen**: Ich habe alles aus deinem CV übernommen und gekürzt. Prüf vor allem
   den Intro-Absatz und den Thesis-Text, ob sie nach dir klingen.

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

## Veröffentlichen (wenn du so weit bist)

Sag einfach Bescheid: „Stell die Website online.“ Dann lege ich ein öffentliches GitHub-Repository
`lfulda13-png.github.io` an und schalte GitHub Pages ein. Ein paar Minuten später ist die Seite
unter **https://lfulda13-png.github.io** erreichbar. Danach reicht für jede Änderung ein Commit plus
`git push`.

## Ideen für später

- Weitere Projekte: Inflations-RCT, Blog „Ghostbusting AI“, Policy Memo
- Foto im Intro
- Eigene Domain (z. B. `luxfulda.de`, ca. 10 €/Jahr)
- Deutsche Version
