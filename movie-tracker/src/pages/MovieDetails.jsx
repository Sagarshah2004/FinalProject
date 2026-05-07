import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieTrailer,
} from "../services/tmdbApi";

import useWatchlist from "../hooks/useWatchlist";
import { toast } from "react-toastify";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const { addToWatchlist } = useWatchlist();

  useEffect(() => {
    const getMovie = async () => {

      // Fetch Movie Details
      const data = await fetchMovieDetails(id);
      setMovie(data);

      // Fetch Trailer
      const trailerData = await fetchMovieTrailer(id);

      const officialTrailer = trailerData.find(
        (video) =>
          video.site === "YouTube" &&
          (
            video.type === "Trailer" ||
            video.type === "Teaser" ||
            video.type === "Clip"
          ) &&
          video.official !== false
      );

      setTrailer(officialTrailer);
    };

    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-5 grid md:grid-cols-2 gap-10">

      {/* Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-xl w-full shadow-lg"
      />

      {/* Details */}
      <div>

        <h1 className="text-5xl font-bold mb-5">
          {movie.title}
        </h1>

        <p className="text-yellow-400 text-lg mb-4">
          ⭐ {movie.vote_average}
        </p>

        <p className="text-gray-300 leading-7 mb-6">
          {movie.overview}
        </p>

        <div className="space-y-3 text-gray-300">

          <p>
            <span className="font-semibold text-white">
              Release Date:
            </span>{" "}
            {movie.release_date}
          </p>

          <p>
            <span className="font-semibold text-white">
              Language:
            </span>{" "}
            {movie.original_language?.toUpperCase()}
          </p>

          <p>
            <span className="font-semibold text-white">
              Runtime:
            </span>{" "}
            {movie.runtime} min
          </p>

          <p>
            <span className="font-semibold text-white">
              Genres:
            </span>{" "}
            {movie.genres?.map((genre) => genre.name).join(", ")}
          </p>
        </div>

        {/* Watchlist Button */}
        <button
          onClick={() => {
            addToWatchlist(movie);
            toast.success("Added to Watchlist");
          }}
          className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-lg mt-6"
        >
          Add To Watchlist
        </button>

        {/* Trailer Section */}
        {trailer ? (
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-5">
              Official Trailer 🎬
            </h2>

            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg font-semibold"
            >
              ▶ Watch Trailer on YouTube
            </a>

          </div>
        ) : (
          <div className="mt-10">
            <p className="text-gray-400">
              Trailer not available for this movie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;