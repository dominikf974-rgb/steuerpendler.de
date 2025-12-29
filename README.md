# SteuerPendler

Ein statisches Content-Portal (Deutschland) rund um Pendlerpauschale, Fahrtkosten & Steuertipps – mit Verlinkung zum Rechner:
➡️ https://spritkosten-check.de/

## Struktur
- `index.html` – Startseite
- `styles.css` – gesamtes Styling (kein Inline-CSS)
- `main.js` – Navigation / kleine Interaktionen
- `pendlerpauschale.html` – Ratgeberseite
- `fahrtkosten-steuer.html` – Ratgeberseite
- `kilometerpauschale.html` – Ratgeberseite
- `ratgeber.html` – Übersicht der Artikel
- `kontakt.html` – Kontakt
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutz
- `404.html` – Fehlerseite
- `robots.txt` – Crawling-Regeln + Sitemap-Verweis
- `sitemap.xml` – Sitemap für Google

## Lokales Testen
Einfach `index.html` im Browser öffnen (doppelklicken)  
oder mit VS Code + Live Server starten.

## Deployment (Netlify / GitHub Pages)
### Netlify
1. Repo mit Netlify verbinden
2. Build-Command: **none**
3. Publish directory: **/** (Root)

### GitHub Pages
1. Settings → Pages
2. Deploy from branch (main)
3. Root auswählen

## Domain / SEO
- In `sitemap.xml` und den Canonicals die Domain eintragen: `https://DOMAIN.TLD/`
- `robots.txt` enthält den Sitemap-Link

## Lizenz
Private Nutzung. (Optional: später eine Lizenz eintragen)
