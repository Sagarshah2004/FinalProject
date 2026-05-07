import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/tmdbApi";
import useWatchlist from "../hooks/useWatchlist";
import { toast } from "react-toastify";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { addToWatchlist } = useWatchlist();

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-5 grid md:grid-cols-2 gap-10">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-5xl font-bold mb-5">
          {movie.title}
        </h1>

        <p className="text-gray-300 leading-7">
          {movie.overview}
        </p>

        <p className="mt-5">
          Release Date: {movie.release_date}
        </p>

        <button
          onClick={() => {
            addToWatchlist(movie);
            toast.success("Added to Watchlist");
          }}
          className="bg-red-500 px-5 py-3 rounded-lg mt-6"
        >
          Add To Watchlist
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;