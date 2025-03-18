
# MovieDB

Eine einfache Movie-Datenbank-Anwendung, die mit React und der TMDb-API (The Movie Database) erstellt wurde. Diese App ermöglicht es den Nutzern, nach Filmen zu suchen, diese nach verschiedenen Kriterien zu filtern und Details wie Veröffentlichungsdatum und Bewertung anzusehen.

## Funktionen

- Filme nach Titel suchen.
- Filme sortieren nach:
  - Neueste zuerst (neueste bis älteste Veröffentlichung)
  - Älteste zuerst (älteste bis neueste Veröffentlichung)
  - Höchste Bewertungen
  - Alphabetisch (A-Z und Z-A)
- Zeigt Filmposter, Titel und Bewertungen an.
- Ruft die bestbewerteten Filme von der TMDb-API ab.

## Technologien

- **React**: Eine JavaScript-Bibliothek für den Aufbau von Benutzeroberflächen.
- **TypeScript**: Ein Superset von JavaScript, das statische Typisierung hinzufügt.
- **Tailwind CSS**: Ein Utility-first CSS Framework für eine schnelle UI-Entwicklung.
- **Axios**: Ein Promise-basierter HTTP-Client für den Browser und Node.js.
- **React Router**: Für Routing und Navigation in der App.

## Installation

1. Repository klonen:
   ```bash
   git clone https://github.com/yourusername/movie-db.git
   cd movie-db
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

3. Erstelle eine `.env`-Datei im Root-Verzeichnis des Projekts und füge deinen TMDb API-Schlüssel hinzu:
   ```
   REACT_APP_TMDB_API_KEY=dein_api_key_hier
   ```

4. Starte den Entwicklungsserver:
   ```bash
   npm start
   ```

5. Öffne deinen Browser und gehe zu `http://localhost:3000`, um die App in Aktion zu sehen!

## Projektstruktur

```bash
src/
│
├── components/          # Wiederverwendbare Komponenten (Header, SearchFilters, etc.)
│   ├── header/          # Header-Komponente
│   ├── searchfilters/   # Filter- und Suchkomponente
│   ├── allmovies/       # Filmanzeige-Komponente
│
├── context/             # React Context für die Verwaltung von Film-Daten
│   ├── MainProvider.tsx # Context Provider für die Verwaltung des States
│
├── interfaces/          # TypeScript-Interfaces
│   ├── Interface.ts     # Interfaces für die Film-Daten
│
├── App.tsx              # Haupt-App-Komponente
├── Layout.tsx           # Layout-Komponente mit Header und Filtern
└── index.tsx            # Einstiegspunkt für die React-App
```

## Nutzung

- **Nach Filmen suchen**: Tippe Filmtitel in die Suchleiste, um durch die bestbewerteten Filme zu filtern.
- **Filme sortieren**: Nutze das Dropdown-Menü, um Filme nach Veröffentlichungsdatum, Bewertung oder alphabetisch zu sortieren.
- **Filmposter anzeigen**: Klicke auf ein Filmposter, um mehr Details zu sehen (künftige Erweiterung).

## Mitwirken

1. Forke das Repository.
2. Erstelle einen neuen Branch (`git checkout -b feature-branch`).
3. Nimm deine Änderungen vor.
4. Commite deine Änderungen (`git commit -am 'Feature hinzufügen'`).
5. Pushe deinen Branch (`git push origin feature-branch`).
6. Öffne einen Pull-Request.