import MovieCard from "../components/MovieCard";
import useWatchlist from "../hooks/useWatchlist";

const Watchlist = () => {
  const { watchlist } = useWatchlist();

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold mb-10">
        My Watchlist
      </h1>

      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;