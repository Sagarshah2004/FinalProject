import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
        );

        setTvShows(response.data.results);
      } catch (err) {
        setError("Failed to fetch TV Shows");
      } finally {
        setLoading(false);
      }
    };

    fetchTvShows();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto p-5">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Popular TV Shows
        </h1>

        <p className="text-gray-400 mt-2">
          Browse trending and top-rated TV shows
        </p>
      </div>

      {/* TV Shows Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tvShows.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>
    </div>
  );
};

export default TvShows;