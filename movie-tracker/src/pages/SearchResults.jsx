import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMulti } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        const data = await searchMulti(query);

        setResults(
          data.filter(
            (item) =>
              item.media_type === "movie" ||
              item.media_type === "tv"
          )
        );
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold mb-10">
        Search Results for "{query}"
      </h1>

      {results.length === 0 ? (
        <ErrorMessage message="No Results Found" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;