# Zadanie 2 – Pytanie i odpowiedź

## Pytanie
Rozpoczynasz nowy projekt na WordPressie dla klienta. O jakie kluczowe aspekty należy zadbać na samym początku — takie, których WordPress nie zapewnia „out of the box"?

## Odpowiedź

Przy rozpoczęciu nowego projektu WordPress dla klienta, należy zadbać o następujące kluczowe aspekty:

### 1. **Bezpieczeństwo**
- **Zmiana domyślnych loginów**: Usunięcie domyślnego użytkownika "admin" i utworzenie konta z unikalną nazwą
- **Silne hasła**: Wymuszenie używania mocnych haseł dla wszystkich użytkowników
- **Wtyczki bezpieczeństwa**: Instalacja wtyczek typu Wordfence, Sucuri Security lub iThemes Security
- **2FA (Two-Factor Authentication)**: Dodanie dwuskładnikowego uwierzytelniania
- **Ukrycie wersji WordPress**: Usunięcie informacji o wersji z kodu źródłowego
- **Ograniczenie prób logowania**: Ochrona przed atakami brute-force
- **SSL/HTTPS**: Wymuszenie bezpiecznego połączenia
- **Regularne aktualizacje**: Ustalenie procesu aktualizacji core'a, motywów i wtyczek

### 2. **Backup i disaster recovery**
- **Automatyczne kopie zapasowe**: Konfiguracja regularnych backupów (np. UpdraftPlus, BackWPup)
- **Przechowywanie poza serwerem**: Backup w chmurze (Google Drive, Dropbox, Amazon S3)
- **Plan przywracania**: Przetestowany proces odzyskiwania danych
- **Kontrola wersji plików**: Git dla kodu motywu/wtyczek

### 3. **Wydajność i optymalizacja**
- **Caching**: Plugin cache'ujący (WP Rocket, W3 Total Cache, WP Super Cache)
- **CDN**: Content Delivery Network dla statycznych zasobów
- **Optymalizacja obrazów**: Kompresja i lazy loading (Imagify, ShortPixel)
- **Minimalizacja CSS/JS**: Połączenie i kompresja plików
- **Optymalizacja bazy danych**: Regularne czyszczenie i optymalizacja
- **Hosting**: Wybór odpowiedniego hostingu (nie współdzielony dla większych projektów)

### 4. **SEO i analityka**
- **Wtyczka SEO**: Yoast SEO lub Rank Math
- **Google Analytics**: Integracja analityki (Google Analytics 4)
- **Google Search Console**: Weryfikacja i monitoring
- **Sitemap XML**: Automatyczne generowanie i aktualizacja
- **Schema markup**: Dane strukturalne dla lepszej widoczności
- **Permalinki**: Ustawienie przyjaznych URL-i

### 5. **Środowisko deweloperskie i staging**
- **Środowisko testowe**: Osobny serwer staging do testowania zmian
- **Lokalne środowisko**: Local by Flywheel, XAMPP lub Docker
- **Proces wdrożeniowy**: Ustalony workflow dev → staging → production
- **Kontrola wersji**: Git dla kodu niestandardowego

### 6. **RODO i zgodność prawna**
- **Cookie consent**: Banner zgody na cookies
- **Polityka prywatności**: Aktualna strona z polityką
- **Zgodność z RODO**: Narzędzia do eksportu/usuwania danych użytkowników
- **Formularze**: Zgody marketingowe i checkbox RODO

### 7. **Konfiguracja email**
- **SMTP**: Konfiguracja właściwego wysyłania emaili (WP Mail SMTP)
- **Testowanie**: Sprawdzenie, czy maile nie trafiają do spam
- **Transactional email**: Serwisy typu SendGrid, Mailgun dla większych projektów

### 8. **Dokumentacja i szkolenie**
- **Instrukcje dla klienta**: Jak zarządzać treścią, dodawać produkty itp.
- **Dokumentacja techniczna**: Opis customizacji, użytych wtyczek
- **Szkolenie**: Sesja onboardingowa dla zespołu klienta

### 9. **Monitoring i maintenance**
- **Uptime monitoring**: Powiadomienia o awariach (UptimeRobot)
- **Error logging**: Śledzenie błędów PHP i JS
- **Plan maintenance**: Umowa na regularne utrzymanie strony

### 10. **Rozwój i skalowalność**
- **Child theme**: Używanie motywu potomnego dla customizacji
- **Multisite**: Rozważenie multisite dla większych projektów
- **API**: Możliwość integracji z zewnętrznymi systemami (REST API, headless CMS)
- **Modułowa architektura**: Przewidywanie przyszłych rozszerzeń

### 11. **Optymalizacja dla mobile**
- **Responsive design**: Pełna responsywność
- **Mobile-first**: Testowanie na urządzeniach mobilnych
- **AMP**: Rozważenie Accelerated Mobile Pages dla treści

### 12. **Konfiguracja użytkowników i ról**
- **Role i uprawnienia**: Właściwe ustawienie ról (np. wtyczka User Role Editor)
- **Ograniczenie dostępu**: Minimum uprawnień dla każdego użytkownika
- **Admin bar**: Ukrycie zbędnych elementów dla redaktorów

---

**Podsumowanie**: WordPress "out of the box" to solidna podstawa, ale profesjonalny projekt wymaga dodatkowej konfiguracji w zakresie bezpieczeństwa, wydajności, backupu, SEO i prawnej zgodności. Kluczowe jest też ustalenie procesów (staging, backup, maintenance) i przeszkolenie klienta z obsługi systemu.

