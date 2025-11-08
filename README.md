# Mini CRM

Prosta aplikacja do zarządzania klientami i projektami.

## Stack

- Next.js + React
- Tailwind CSS + shadcn/ui
- Express (Node.js)
- JSON jako baza danych

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja odpali się na http://localhost:3000

## Co działa

- Lista klientów + dodawanie nowych
- Szczegóły klienta z listą projektów
- Dodawanie projektów do klienta
- Podsumowanie (liczba projektów, suma w PLN)
- Dane zapisują się w pliku JSON

Backend jest na porcie 3001, `npm run dev` odpala frontend i backend jednocześnie.

