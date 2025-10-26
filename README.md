# 📝 Lista Zadań - Quick Start

Aplikacja do zarządzania zadaniami w Angular 19.

---

## ⚡ Szybki Start

### 1. Instalacja

```bash
npm install
```

### 2. Uruchomienie

```bash
ng serve
```

### 3. Otwórz w przeglądarce

```
http://localhost:4200
```

---

## 🎯 Główne Funkcje

- ➕ Dodawanie zadań
- ✅ Oznaczanie jako "ukończone" lub "w trakcie"
- 🗑️ Usuwanie zadań
- 🔍 Filtrowanie (nazwa, data, status)
- 📱 Responsywny design

---

## 🔧 Jak Działa?

### 1. Dodawanie Zadania

1. Kliknij "Dodaj zadanie"
2. Wypełnij formularz (nazwa, data, opis)
3. Kliknij "Zapisz zadanie"

### 2. Zmiana Statusu

**Ukończone:**

- Kliknij **checkbox** (kwadracik) obok zadania
- Zadanie zmieni się na zielone z przekreśloną nazwą
- Ponowne kliknięcie → wraca do statusu "Zaplanowane"

⚠️ **Uwaga:** Z "Ukończone" nie możesz przejść bezpośrednio do "W trakcie"!

**W trakcie:**

- Kliknij **nazwę zadania** (sam tekst)
- Zadanie zmieni kolor i będzie pisane kursywą (pomarańczowy)
- Status badge pokaże "W trakcie"
- Ponowne kliknięcie nazwy → wraca do statusu "Zaplanowane"

### 3. Filtrowanie

- Wpisz nazwę w pole "Nazwa zadania"
- Wybierz datę
- Wybierz status (Wszystkie/Zaplanowane/W trakcie/Ukończone)

---

### 4. Usuwanie

1. Kliknij ikonę kosza
2. Potwierdź w modalu
3. Zadanie usunięte

---

## 💻 Wymagania

- Node.js 18+
- npm 10+
- Angular CLI 19

## 🚀 Komendy

| Komenda    | Opis               |
| ---------- | ------------------ |
| `ng serve` | Uruchom dev server |
| `ng build` | Build projektu     |

---

## 🎨 Technologie

- Angular 19
- TypeScript 5.6
- SCSS
- Bootstrap 5.3
- Bootstrap Icons

---
