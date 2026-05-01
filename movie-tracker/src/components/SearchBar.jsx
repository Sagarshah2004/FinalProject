import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    navigate(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="Search movies or TV shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none border border-gray-700 focus:border-red-500 w-64"
      />

      <button
        type="submit"
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;