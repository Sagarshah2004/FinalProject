import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useApiFetch from "../hooks/useApiFetch";

const Home = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Worldwide Trending Movies
  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useApiFetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );

  // Indian Movies
  const {
    data: indianMovies,
    loading: indianLoading,
    error: indianError,
  } = useApiFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_origin_country=IN&sort_by=popularity.desc`
  );

  if (trendingLoading || indianLoading)
    return <LoadingSpinner />;

  if (trendingError || indianError)
    return <ErrorMessage message="Failed to fetch movies" />;

  return (
    <div className="max-w-7xl mx-auto p-5">

      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to MovieTracker 🎬
        </h1>

        <p className="text-gray-400 text-lg">
          Discover Hollywood & Indian Movies
        </p>
      </div>

      {/* Worldwide Movies */}
      <section className="mb-16">

        <h2 className="text-3xl font-bold mb-8">
          Trending Worldwide 🌍
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingMovies.slice(0, 8).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Indian Movies */}
      <section>

        <h2 className="text-3xl font-bold mb-8">
          Popular Indian Movies 🇮🇳
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {indianMovies.slice(0, 8).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;