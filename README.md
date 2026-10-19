# FSV Babelsberg 74 – Website-Redesign (Konzept)

**Unabhängiges Redesign-Konzept.** Nicht beauftragt und nicht freigegeben vom Verein. Nur öffentlich verfügbare Informationen verwendet.

## 1. Kurz-Audit der bestehenden Website

**Was gut funktioniert**
- Klare Vereinsfarben (Grün/Weiß) und Erkennungswert des Logos (rundes Wappen mit Burg-Motiv).
- Teamfoto-Hero mit großem Schriftzug „FSV BABELSBERG 74“.
- Downloads (Mitgliedsantrag, Beitragsordnung, Bildrechte) und konkrete Ansprechpartner mit E-Mail-Adressen.
- Feriencamp-Seite mit klaren Inhalten und Preisen.
- Instagram-Verlinkung.

**Was veraltet oder schwach wirkt**
- Stark textlastige, lange Startseite ohne klare visuelle Hierarchie (News, Partner, Downloads und Kontakte vermischen sich).
- Wartungshinweise und Saison-Umbau sind prominent – wirkt unfertig.
- Navigation mit vielen Dropdowns (Frauen / Männer / Jugend / Unser Verein), aber wenig „Editorial“-Charakter.
- Partnerbereich eher Logos in einer Zeile als Premium-Showcase.
- Keine starke, emotionale Story für Eltern, neue Spieler:innen oder Sponsoren auf einen Blick.
- Mobile Nutzung und visuelle Ruhe könnten klarer sein.

**Navigation & Auffindbarkeit**
- „Komm ins Team“ und Feriencamp sind vorhanden, aber der Weg dorthin und die Begründung (Warum 74?) könnten stärker sein.
- Jugend- und Frauenbereich verdienen eigene, ruhige Einstiege – nicht nur Untermenüs.

**Verifizierte Fakten (Auszug)**
- Name: Fussballsportverein Babelsberg 74 e.V.
- Farben: grün / weiß
- Gründung: 21. September 1990 (Sektion Fußball HSG Wissenschaft Babelsberg ab 1974)
- Adresse: Rudolf-Breitscheid-Straße 173, 14482 Potsdam
- Vorsitz: Olaf Schaefer (1.), Andreas Thermann (2.), Mariko-Carolina Thermann (Hauptkassiererin)
- Mitglieder: öffentlich „über 500“ / „fast 700“ / „ca. 550“ – Bandbreite je nach Quelle/Zeitpunkt
- Sportanlage Rudolf-Breitscheid-Straße
- Website: https://www.fsv-babelsberg74.de/
- Instagram: @fsvbabelsberg74_verein

## 2. Kreativkonzept

**Positionierung:** „Mein Stadt. Mein Verein.“ – lokal, familiär, ambitioniert. Authentisch statt corporate.

**Designprinzipien**
- Forest Green (#0B5C3B) + Weiß + dunkles Ink (#0F1410) + warmes Cream
- Typography: Bebas Neue (Display) + Inter (UI/Text)
- Große, editoriale Überschriften; asymmetrische Stats-Blöcke; starke Kontraste dunkel/hell
- Keine generischen Card-Grids, keine zufälligen Gradienten, keine übertriebenen Animationen
- Fokus auf: Beitritt, Teams (Herren/Frauen/Jugend), Partner, Camps, klare Kontakte

**Zielgruppen**
- Eltern / Jugend
- Erwachsene Spieler:innen (Herren & Frauen)
- Sponsoren / lokale Unternehmen
- Mitglieder und Ehrenamt

## 3. Implementierung

Statische Multi-Page-Website (HTML + Tailwind CDN + leichtes JS):

| Datei | Inhalt |
|-------|--------|
| `index.html` | Homepage (Hero, Next Match Beispiel, Intro, Teams, News, Join-CTA, Camps, Partner, Gallery, Footer) |
| `teams.html` | Herren / Frauen / Jugend |
| `verein.html` | Geschichte, Vorstand, Werte |
| `news.html` | News-Übersicht (mit Verweisen auf Original) |
| `camps.html` | Feriencamps |
| `sponsoren.html` | Partner-Benefits + CTA (ohne Preise) |
| `mitglied-werden.html` | Beitrittsprozess + Demo-Formular |
| `kontakt.html` | Adresse, E-Mails, Demo-Formular |
| `styles.css` | Design-System-Extras |
| `script.js` | Mobile Nav, Scroll, Form-Validierung (kein Fake-Submit) |

Keine erfundenen Spieler, Tabellenplätze, Sponsorennamen oder Preise. Match-Block und News als Beispiel bzw. mit Hinweis auf Originalquellen gekennzeichnet.

## 4. Starten / Vorschau

```bash
cd fsv-babelsberg74
# Beliebiger statischer Server, z. B.:
npx serve .
# oder: python3 -m http.server 8080
```

Dann im Browser `http://localhost:3000` (bzw. Port des Servers) öffnen.  
Alle Seiten sind verlinkt und responsiv (Desktop / Tablet / Mobile).

## 5. Stärkste Verbesserungen

1. **Professioneller erster Eindruck** – Hero und Typografie signalisieren Anspruch und Identität.
2. **Klarer Pfad „Komm ins Team“** – für Eltern und Spieler:innen sofort sichtbar.
3. **Getrennte, ruhige Team-Bereiche** – Herren, Frauen, Jugend gleichwertig.
4. **Sponsoring-Seite** – Nutzenargumente ohne erfundene Preise; direkter Kontakt.
5. **Weniger Textchaos** – Downloads und Kontakte strukturiert, News als Teaser.
6. **Wartbare Struktur** – statische Seiten, wiederverwendbare Header/Footer-Patterns, kein CMS-Fake.

## 6. Offene Punkte / Bestätigung nötig

- Offizielles Logo (SVG/PNG) in hoher Auflösung und exakte Farbcodes vom Verein
- Aktuelle Mitgliedszahlen und genaue Ligen je Mannschaft (saisonabhängig)
- Live-Spielplan / Ergebnisse (idealerweise fussball.de-Einbindung oder manueller Pflegeprozess)
- Partner-Logos und gewünschte Hierarchie der Sponsoren
- Rechtstexte (Impressum, Datenschutz) vom Verein
- Ob und wie ein CMS (z. B. WordPress, statisches CMS) gewünscht ist

## 7. Pitch (kurz)

Der FSV Babelsberg 74 hat Substanz: Geschichte seit 1974/1990, starke Frauenarbeit, breite Jugend, neues Vereinsgebäude, echte Community. Die bestehende Website transportiert das nur unvollständig. Dieses Redesign macht den Verein auf einen Blick professionell, einladend und partnerfähig – ohne die Identität zu verfälschen. Eltern finden schneller den Einstieg, Sponsoren sehen einen klaren Nutzen, Mitglieder eine moderne Heimat. Das Konzept ist bewusst schlank und wartbar, damit der Verein es mit begrenzten Ressourcen betreiben kann.

---

*Erstellt als unabhängiges Angebots-/Konzeptpaket. Keine offizielle Partnerschaft mit dem FSV Babelsberg 74.*
