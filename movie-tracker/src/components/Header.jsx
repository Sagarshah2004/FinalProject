import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("auth");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">
          MovieTracker
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-5 text-sm md:text-base">

          <Link
            to="/"
            className="hover:text-red-400 transition"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="hover:text-red-400 transition"
          >
            Movies
          </Link>

          <Link
            to="/tv-shows"
            className="hover:text-red-400 transition"
          >
            TV Shows
          </Link>

          <Link
            to="/watchlist"
            className="hover:text-red-400 transition"
          >
            Watchlist
          </Link>

          {/* Show Logout only if logged in */}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
          <SearchBar/>
        </nav>
      </div>
    </header>
  );
};

export default Header;