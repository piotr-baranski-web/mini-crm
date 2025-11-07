# Mini CRM

Aplikacja do zarządzania klientami i projektami - zadanie rekrutacyjne na stanowisko Web Developer.

## Opis

Stworzyłem prostą aplikację CRM, która pozwala na:
- Zarządzanie listą klientów
- Dodawanie nowych klientów
- Przeglądanie szczegółów każdego klienta
- Dodawanie projektów do klientów
- Podgląd podsumowania - ile mamy projektów i jaka jest ich łączna wartość

## Stack technologiczny

- **Frontend**: Next.js 14 z React
- **Styling**: Tailwind CSS + komponenty inspirowane shadcn/ui
- **Backend**: Express (Node.js)
- **Dane**: Plik JSON

## Struktura projektu

```
mini-crm/
├── app/                    # Next.js App Router
│   ├── page.js            # Strona główna z listą klientów
│   ├── client/[id]/       # Szczegóły klienta
│   ├── layout.js          # Layout aplikacji
│   └── globals.css        # Style globalne
├── components/            # Komponenty React
│   ├── ui/               # Komponenty UI (shadcn/ui)
│   ├── AddClientDialog.jsx
│   └── AddProjectDialog.jsx
├── lib/                   # Utility functions
│   └── utils.js
├── server/                # Backend Express
│   ├── index.js          # Serwer API
│   └── data.json         # Przechowywanie danych
└── package.json
```

## Jak uruchomić

Wymagania: Node.js w wersji 18 lub nowszej.

```bash
# Sklonuj repo
git clone https://github.com/piotr-baranski-web/mini-crm.git
cd mini-crm

# Zainstaluj zależności
npm install

# Uruchom aplikację (frontend + backend)
npm run dev
```

Aplikacja uruchomi się na:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

Możesz też uruchomić frontend i backend osobno używając `npm run dev:frontend` i `npm run dev:backend`.

## API

Backend udostępnia kilka prostych endpointów:

- `GET /api/clients` - lista wszystkich klientów
- `GET /api/clients/:id` - szczegóły konkretnego klienta
- `POST /api/clients` - dodanie nowego klienta
- `POST /api/clients/:id/projects` - dodanie projektu do klienta
- `GET /api/summary` - podsumowanie (liczba projektów i suma wartości)

## Funkcjonalności

**Strona główna:**
- Lista klientów z podstawowymi informacjami
- Karty z podsumowaniem (liczba klientów, projektów i łączna wartość)
- Możliwość dodania nowego klienta przez modal

**Strona klienta:**
- Szczegółowe dane klienta (nazwa, email, data pozyskania)
- Lista wszystkich projektów z statusami i wartościami
- Dodawanie nowych projektów

**Ogólnie:**
- Responsywny design działający na mobile i desktop
- Dane zapisują się w pliku JSON i są trwałe
- Formatowanie kwot w PLN i dat po polsku
- Statusy projektów oznaczone kolorowymi badge'ami

## Co zostało zrobione

Zaimplementowałem wszystkie wymagane funkcje z zadania:
- Lista klientów z możliwością dodania nowego
- Szczegóły klienta wraz z listą projektów
- Dodawanie projektów do klienta
- Podsumowanie z liczbą projektów i sumą wartości w PLN
- Trwałość danych (plik JSON)

Dodatkowo zadbałem o:
- Przyzwoity UI z Tailwind CSS
- Responsywność
- Walidację formularzy
- Czytelną strukturę kodu

## Co można by dodać w przyszłości

Gdyby to był realny projekt, warto by rozważyć:
- Edycję i usuwanie klientów/projektów
- Filtry i wyszukiwarkę
- Wykresy i statystyki
- Bazę danych zamiast JSON
- Testy

---

Projekt wykonany jako zadanie rekrutacyjne (2025.10)

