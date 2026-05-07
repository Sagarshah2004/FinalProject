import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useWatchlist from "../hooks/useWatchlist";
import { toast } from "react-toastify";
import { fetchTVTrailer } from "../services/tmdbApi";

const TvShowDetails = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [trailer, setTrailer] = useState(null);

  const { addToWatchlist, removeFromWatchlist, watchlist } =
    useWatchlist();

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        setLoading(true);

        // Fetch TV Show Details
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
        );

        setShow(response.data);

        // Fetch Trailer
        const trailerData = await fetchTVTrailer(id);

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

      } catch (err) {
        setError("Failed to fetch TV show details");
      } finally {
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  // Check Watchlist
  const isInWatchlist = watchlist.some(
    (item) => item.id === show?.id
  );

  // Handle Watchlist
  const handleWatchlist = () => {
    if (isInWatchlist) {
      removeFromWatchlist(show.id);
      toast.success("Removed from Watchlist");
    } else {
      addToWatchlist(show);
      toast.success("Added to Watchlist");
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto p-5">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Poster */}
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.name}
            className="rounded-2xl w-full shadow-lg"
          />
        </div>

        {/* Details */}
        <div>

          <h1 className="text-5xl font-bold mb-4">
            {show.name}
          </h1>

          <p className="text-yellow-400 text-lg mb-4">
            ⭐ {show.vote_average}
          </p>

          <p className="text-gray-300 leading-7 mb-6">
            {show.overview}
          </p>

          <div className="space-y-3 text-gray-300">

            <p>
              <span className="font-semibold text-white">
                First Air Date:
              </span>{" "}
              {show.first_air_date}
            </p>

            <p>
              <span className="font-semibold text-white">
                Language:
              </span>{" "}
              {show.original_language?.toUpperCase()}
            </p>

            <p>
              <span className="font-semibold text-white">
                Total Seasons:
              </span>{" "}
              {show.number_of_seasons}
            </p>

            <p>
              <span className="font-semibold text-white">
                Genres:
              </span>{" "}
              {show.genres?.map((genre) => genre.name).join(", ")}
            </p>
          </div>

          {/* Watchlist Button */}
          <button
            onClick={handleWatchlist}
            className={`mt-8 px-6 py-3 rounded-lg font-semibold transition ${
              isInWatchlist
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isInWatchlist
              ? "Remove From Watchlist"
              : "Add To Watchlist"}
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
                Trailer not available for this TV show.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvShowDetails;