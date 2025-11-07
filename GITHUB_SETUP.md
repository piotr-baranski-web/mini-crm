# Jak dodać projekt na GitHub

## Instrukcje krok po kroku

### 1. Przygotowanie projektu

Projekt znajduje się w folderze `/tmp/mini-crm/`

### 2. Inicjalizacja Git

Otwórz terminal i przejdź do folderu projektu:

```bash
cd /tmp/mini-crm
git init
git add .
git commit -m "Initial commit: Mini CRM - zadanie rekrutacyjne"
```

### 3. Utworzenie repozytorium na GitHub

1. Przejdź na [GitHub.com](https://github.com)
2. Zaloguj się na swoje konto
3. Kliknij przycisk **"+"** w prawym górnym rogu
4. Wybierz **"New repository"**
5. Wprowadź dane:
   - **Repository name**: `mini-crm` (lub dowolna nazwa)
   - **Description**: "Mini CRM - System zarządzania klientami i projektami (zadanie rekrutacyjne)"
   - **Public/Private**: wybierz zgodnie z preferencjami
   - **NIE zaznaczaj** "Initialize this repository with a README" (mamy już README)
6. Kliknij **"Create repository"**

### 4. Połączenie lokalnego repo z GitHub

GitHub pokaże instrukcje. Użyj tych poleceń (zastąp `twoja-nazwa` i `mini-crm` swoimi danymi):

```bash
git remote add origin https://github.com/twoja-nazwa/mini-crm.git
git branch -M main
git push -u origin main
```

Alternatywnie, jeśli używasz SSH:

```bash
git remote add origin git@github.com:twoja-nazwa/mini-crm.git
git branch -M main
git push -u origin main
```

### 5. Weryfikacja

Po wykonaniu push'a:
1. Odśwież stronę repozytorium na GitHub
2. Powinny pojawić się wszystkie pliki projektu
3. README.md zostanie automatycznie wyświetlone na stronie głównej repo

### 6. Co wysłać rekruterowi

Wyślij link do repozytorium w formacie:
```
https://github.com/twoja-nazwa/mini-crm
```

### 7. Dodatkowe pliki do wysłania

W mailu do rekrutera załącz również:
- Link do repozytorium GitHub
- Plik `WORDPRESS_ANSWER.md` (odpowiedź na pytanie 2) - już znajduje się w repo

---

## Opcjonalne: Dodanie dodatkowych commitów

Jeśli chcesz pokazać historię commitów (git hygiene), możesz przerobić commit na kilka mniejszych:

```bash
# Cofnij ostatni commit (zachowując zmiany)
git reset --soft HEAD~1

# Dodaj pliki w mniejszych grupach
git add package.json .gitignore tailwind.config.js postcss.config.js next.config.js
git commit -m "Setup: Konfiguracja projektu Next.js z Tailwind CSS"

git add server/
git commit -m "Backend: Express API z endpointami dla klientów i projektów"

git add lib/ components/ui/
git commit -m "UI: Komponenty shadcn/ui i utility functions"

git add app/ components/Add*.jsx
git commit -m "Frontend: Implementacja stron i dialogów"

git add README.md WORDPRESS_ANSWER.md
git commit -m "Docs: README i odpowiedź na pytanie rekrutacyjne"

# Wypchnij zmiany
git push -f origin main
```

**Uwaga**: Używaj `git push -f` tylko jeśli jeszcze nikt nie klonował repo!

---

## Troubleshooting

### Problem z uwierzytelnieniem
Jeśli masz problemy z push'em, możesz potrzebować:
1. **Personal Access Token**: Settings → Developer settings → Personal access tokens → Generate new token
2. Użyj tokena zamiast hasła podczas push'a

### Problem z istniejącym remote
Jeśli masz już dodany remote, usuń go:
```bash
git remote remove origin
git remote add origin https://github.com/twoja-nazwa/mini-crm.git
```

---

**Gotowe!** Twoje repozytorium jest teraz na GitHubie i gotowe do wysłania rekruterowi.

