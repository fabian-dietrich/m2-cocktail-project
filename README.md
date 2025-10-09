# 🍹 Cocktails App

A full **React CRUD app** built by **Kelechi** and **Fabian**, featuring a mock backend API for cocktail recipes.

---

## 🚀 Overview

This project is a modern React web app for managing cocktail recipes.  
It includes full CRUD operations (Create, Read, Update, Delete) with data fetched from a **mock JSON API**.  
The goal: to learn React, routing, and API integration through a fun and practical project.

---

## 🧠 Features

- 📋 View a list of cocktails
- 🔍 See full recipe details
- ➕ Add new cocktails
- ✏️ Edit existing cocktails
- ❌ Delete cocktails
- ⚙️ Uses `async` and `await` for API requests
- 🧾 Mock backend JSON API

---

## 🧰 Tech Stack

- **React + Vite** — frontend framework
- **React Router DOM** — page routing
- **Fetch** — API integration
- **JSON Server / Mock API** — backend simulation


---

## 📄 Main Pages

| Page                       | Purpose                   |
| -------------------------- | ------------------------- |
| 👥 **AboutPage**           | Info about the creators   |
| 🍸 **CocktailListPage**    | Shows all cocktails       |
| 📖 **CocktailDetailsPage** | Full recipe details       |
| ➕ **AddCocktailPage**     | Add a new cocktail        |
| ✏️ **EditCocktailPage**    | Edit or delete a cocktail |
| ⚠️ **NotFoundPage (404)**  | Custom fallback page      |

---

## ⚙️ Quick Start

```bash
# Clone and install
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install

# Run both frontend and mock backend
npm run dev
# (if using JSON Server)
npx json-server --watch public/cocktails.json --port 5000
```
