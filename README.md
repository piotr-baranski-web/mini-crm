# Mini CRM

System zarządzania klientami i projektami - zadanie rekrutacyjne dla stanowiska Web Developer.

## 📋 Opis projektu

Mini CRM to prosta aplikacja do zarządzania klientami i ich projektami. Aplikacja umożliwia:
- Przeglądanie listy klientów
- Dodawanie nowych klientów
- Wyświetlanie szczegółów klienta wraz z listą jego projektów
- Dodawanie projektów do klienta
- Podsumowanie: łączna liczba projektów i suma wartości w PLN

## 🛠 Technologie

- **Frontend**: Next.js 14 (React)
- **UI**: Tailwind CSS + shadcn/ui
- **Backend**: Node.js + Express
- **Przechowywanie danych**: Plik JSON

## 📦 Struktura projektu

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

## 🚀 Instalacja i uruchomienie

### Wymagania
- Node.js (wersja 18 lub wyższa)
- npm lub yarn

### Kroki instalacji

1. Sklonuj repozytorium:
```bash
git clone <url-repozytorium>
cd mini-crm
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom aplikację w trybie deweloperskim:
```bash
npm run dev
```

To polecenie uruchomi jednocześnie:
- Frontend Next.js na `http://localhost:3000`
- Backend Express API na `http://localhost:3001`

4. Otwórz przeglądarkę i przejdź do `http://localhost:3000`

### Uruchamianie oddzielnie

Możesz również uruchomić frontend i backend oddzielnie:

```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:backend
```

## 📊 Modele danych

### Klient
```javascript
{
  id: string,
  name: string,
  email: string,
  acquisitionDate: string, // Format: YYYY-MM-DD
  projects: Project[]
}
```

### Projekt
```javascript
{
  id: string,
  name: string,
  status: 'open' | 'in progress' | 'done',
  value: number // Wartość w PLN
}
```

## 🔌 API Endpoints

- `GET /api/clients` - Pobierz wszystkich klientów
- `GET /api/clients/:id` - Pobierz szczegóły klienta
- `POST /api/clients` - Dodaj nowego klienta
- `POST /api/clients/:id/projects` - Dodaj projekt do klienta
- `GET /api/summary` - Pobierz podsumowanie (liczba projektów, suma wartości)

## ✨ Funkcje

### Strona główna
- **Lista klientów**: Wyświetla wszystkich klientów z podstawowymi informacjami
- **Podsumowanie**: Karty z:
  - Liczbą klientów
  - Łączną liczbą projektów
  - Łączną wartością wszystkich projektów (PLN)
- **Dodawanie klienta**: Dialog z formularzem do dodania nowego klienta

### Strona szczegółów klienta
- **Informacje o kliencie**: Nazwa, email, data pozyskania
- **Statystyki**: Liczba projektów i łączna wartość
- **Lista projektów**: Wszystkie projekty klienta z:
  - Nazwą projektu
  - Statusem (kolorowy badge)
  - Wartością w PLN
- **Dodawanie projektu**: Dialog z formularzem do dodania nowego projektu

## 🎨 UI/UX

- Responsywny design (mobile-first)
- Czytelny i minimalistyczny interfejs
- Kolorowe badge'e dla statusów projektów
- Płynne przejścia i hover effects
- Gradient background dla lepszego wyglądu

## 💾 Trwałość danych

Dane są przechowywane w pliku `server/data.json`. Przy pierwszym uruchomieniu serwer tworzy plik z przykładowymi danymi. Wszystkie zmiany (dodawanie klientów i projektów) są zapisywane do tego pliku i utrzymują się po restarcie aplikacji.

## 📝 Git hygiene

- Czytelna struktura commitów
- `.gitignore` konfiguracja dla Node.js i Next.js
- Modułowa struktura plików

## 🔍 Co zostało zaimplementowane

✅ Lista klientów z możliwością dodania nowego  
✅ Szczegóły klienta z listą projektów  
✅ Dodawanie projektów do klienta  
✅ Podsumowanie: łączna liczba projektów i suma wartości (PLN)  
✅ Trwałość danych (plik JSON)  
✅ Responsywny UI z Tailwind CSS  
✅ Komponenty UI (shadcn/ui inspired)  
✅ Walidacja formularzy  
✅ Formatowanie dat i kwot w PLN  

## 🚀 Możliwe rozszerzenia

- Edycja i usuwanie klientów/projektów
- Filtrowanie i sortowanie
- Wyszukiwanie klientów
- Eksport danych do CSV/PDF
- Wykresy i statystyki
- Autentykacja użytkowników
- Migracja do bazy danych (PostgreSQL, MongoDB)
- Testy jednostkowe i E2E

## 👨‍💻 Autor

Projekt wykonany jako zadanie rekrutacyjne na stanowisko Web Developer (2025.10)

## 📄 Licencja

MIT

