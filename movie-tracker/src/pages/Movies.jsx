import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useApiFetch from "../hooks/useApiFetch";

const Movies = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const { data: movies, loading, error } = useApiFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto p-5">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Popular Movies
        </h1>

        <p className="text-gray-400 mt-2">
          Browse trending and popular movies
        </p>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;