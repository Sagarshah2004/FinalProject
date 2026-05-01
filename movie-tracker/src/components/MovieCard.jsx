import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg">{movie.title}</h2>

        <p className="text-sm text-gray-400 mt-2">
          {movie.release_date}
        </p>

        <p className="text-yellow-400 mt-2">
          ⭐ {movie.vote_average}
        </p>
      </div>
    </Link>
  );
};

export default React.memo(MovieCard);