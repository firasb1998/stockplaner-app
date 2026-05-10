# Stockplaner 2026

Eine interaktive Web-App zur Planung von Lagerbestand, Verbrauch und Nachbestellungen.

## Live Demo

Deployment URL: > https://stockplaner2026-by-firas-brini.vercel.app/

## GitHub Repository

Repository URL: > https://github.com/firasb1998/stockplaner-app

---

# Features

* Produkte hinzufügen, bearbeiten und löschen
* Inline-Editing direkt in der Tabelle
* Berechnung von:

  * Days of Stock
  * Estimated Stockout Date
  * Order Date
  * Reorder Status
* Visuelle Status-Indikatoren:

  * OK
  * SOON
  * OVERDUE
* Persistenz über localStorage
* Responsive Tabellenansicht

---

# Verwendete Technologien

| Technologie  | Grund                                             |
| ------------ | ------------------------------------------------- |
| React        | Komponentenbasierte UI und dynamische Darstellung |
| TypeScript   | Typsicherheit und bessere Wartbarkeit             |
| Vite         | Schnelles modernes Frontend-Build-Tool            |
| Tailwind CSS | Schnelle und konsistente UI-Entwicklung           |
| date-fns     | Einfache und saubere Datumsberechnungen           |
| localStorage | Einfache clientseitige Persistenz                 |
| Vercel       | Einfaches Hosting und CI/CD                       |

---

# Berechnungslogik

## Days of Stock

```text
(Shop Stock + Amazon Stock)
/
(Daily Usage Shop + Daily Usage Amazon)
```

## Estimated Stockout Date

```text
Heute + Days of Stock
```

## Order Date

```text
Estimated Stockout Date
- Lead Time
- Safety Stock
```

## Reorder Status

| Status  | Bedeutung                                        |
| ------- | ------------------------------------------------ |
| OK      | Order Date liegt mehr als 14 Tage in der Zukunft |
| SOON    | Order Date liegt innerhalb der nächsten 14 Tage  |
| OVERDUE | Order Date liegt in der Vergangenheit            |

---

# Projektstruktur

```text
src/
 ├── data/
 ├── types/
 ├── utils/
 ├── App.tsx
```

## Architektur

* `types/` enthält zentrale TypeScript-Typen
* `data/` enthält Seed-Daten
* `utils/` kapselt die gesamte Business-Logik und Berechnungen
* `App.tsx` enthält die UI und das State-Management

Die Berechnungen wurden bewusst von der UI getrennt, um Lesbarkeit, Wartbarkeit und Wiederverwendbarkeit zu verbessern.

---

# Lokale Entwicklung

## Installation

```bash
npm install
```

## Entwicklungsserver starten

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

---

# Persistenz

Die Daten werden aktuell über `localStorage` im Browser gespeichert.

Dadurch:

* bleiben Änderungen nach einem Reload erhalten
* ist kein Backend erforderlich
* kann die App vollständig clientseitig betrieben werden

---

# Mögliche Erweiterungen

* Serverseitige Datenbank
* Multi-User Support
* Echtzeit-Synchronisierung
* Rollen- und Rechteverwaltung
* Shopify/Amazon API-Import
* CSV-Export
* Erweiterte Forecasting-Logik

---

# Autor

Firas Brini
