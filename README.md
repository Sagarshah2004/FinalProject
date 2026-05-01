# FinalProject

# 🎬 Movie & TV Show Tracker App

A modern and responsive Movie & TV Show Tracker web application built using **React.js**, **Tailwind CSS**, and **TMDB API**. Users can browse trending movies and TV shows, search content, view detailed information, and manage a personal watchlist.

---

# 🚀 Features

## ✅ Core Features

* Browse trending worldwide movies
* Browse popular Indian movies
* Browse TV shows
* Search movies and TV shows
* View detailed movie/TV show information
* Add or remove items from Watchlist
* Persistent Watchlist using localStorage
* Responsive UI using Tailwind CSS
* Dynamic Routing using React Router DOM
* Loading states and error handling
* Toast notifications for actions

---

# ⭐ Bonus Features

* Protected Routes
* Mock Authentication System
* React.memo Performance Optimization
* Custom Hooks

---

# 🛠️ Tech Stack

| Technology       | Usage                   |
| ---------------- | ----------------------- |
| React.js         | Frontend Framework      |
| Vite             | Build Tool              |
| Tailwind CSS     | Styling                 |
| React Router DOM | Routing                 |
| Axios            | API Requests            |
| React Toastify   | Toast Notifications     |
| TMDB API         | Movie & TV Data         |
| Context API      | Global State Management |
| localStorage     | Data Persistence        |

---

# 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── SearchBar.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   ├── WatchlistContext.jsx
│   └── AuthContext.jsx
│
├── hooks/
│   ├── useApiFetch.js
│   └── useWatchlist.js
│
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── TvShows.jsx
│   ├── MovieDetails.jsx
│   ├── TvShowDetails.jsx
│   ├── SearchResults.jsx
│   ├── Watchlist.jsx
│   └── Login.jsx
│
├── services/
│   └── tmdbApi.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd movie-tracker
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🎨 Tailwind CSS Setup

Install Tailwind CSS:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

---

# 🔑 TMDB API Setup

## Step 1

Create account on TMDB:

[https://www.themoviedb.org](https://www.themoviedb.org)

---

## Step 2

Get API key from:

[https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

---

## Step 3

Create `.env` file in project root.

Add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

---

# ▶️ Run Project

```bash
npm run dev
```

Project will run on:

```bash
http://localhost:5173
```

---

# 📌 Application Pages

| Route        | Description      |
| ------------ | ---------------- |
| /            | Homepage         |
| /movies      | Popular Movies   |
| /tv-shows    | Popular TV Shows |
| /movie/:id   | Movie Details    |
| /tv-show/:id | TV Show Details  |
| /search      | Search Results   |
| /watchlist   | Watchlist Page   |
| /login       | Login Page       |

---

# 🔐 Demo Login Credentials

| Username | Password |
| -------- | -------- |
| admin    | admin123 |

---

# 🧠 Custom Hooks Used

## useApiFetch

Reusable hook for API requests.

## useWatchlist

Reusable hook for watchlist management.

---

# 🌐 API Endpoints Used

## Trending Movies

```bash
https://api.themoviedb.org/3/trending/movie/week
```

## Popular Movies

```bash
https://api.themoviedb.org/3/movie/popular
```

## Popular TV Shows

```bash
https://api.themoviedb.org/3/tv/popular
```

## Search Movies & TV Shows

```bash
https://api.themoviedb.org/3/search/multi
```

---

# 🎯 Key Functionalities

## Homepage

* Trending Worldwide Movies
* Popular Indian Movies
* Responsive Movie Grid

## Search Functionality

* Search movies and TV shows
* Dynamic search results

## Watchlist

* Add movies to watchlist
* Remove movies from watchlist
* Persistent data using localStorage

## Movie Details

* Poster
* Ratings
* Overview
* Genres
* Release Date

---

# 📱 Responsive Design

The application is fully responsive for:

* Mobile Devices
* Tablets
* Desktop Screens

Implemented using Tailwind CSS responsive utilities.

---

# ⚡ Performance Optimization

* React.memo used for MovieCard component
* Reusable components
* Custom Hooks for cleaner code

---

# ❌ Error Handling

Implemented:

* Loading Spinner
* API Error Messages
* Invalid Search Validation
* Toast Notifications

---

# 📚 Learnings

Through this project, I learned:

* React component architecture
* React Hooks
* Context API
* API integration using Axios
* Tailwind CSS styling
* Routing with React Router
* State management
* Local storage persistence
* Performance optimization techniques

---

# 📷 Screenshots

Add your project screenshots here.

Example:

* Homepage
* Movies Page
* TV Shows Page
* Watchlist
* Login Page

---

# 👨‍💻 Author

Developed by Sagar Kumar Sha.

---

# 📄 License

This project is developed for educational and academic purposes.
