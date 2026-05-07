import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Trending Movies
export const fetchTrendingMovies = async () => {
  const res = await api.get(
    `/trending/movie/week?api_key=${API_KEY}`
  );

  return res.data.results;
};

// Popular TV Shows
export const fetchPopularTVShows = async () => {
  const res = await api.get(
    `/tv/popular?api_key=${API_KEY}`
  );

  return res.data.results;
};

// Search Movies & TV Shows
export const searchMulti = async (query) => {
  const res = await api.get(
    `/search/multi?api_key=${API_KEY}&query=${query}`
  );

  return res.data.results;
};

// Movie Details
export const fetchMovieDetails = async (id) => {
  const res = await api.get(
    `/movie/${id}?api_key=${API_KEY}`
  );

  return res.data;
};

// TV Show Details
export const fetchTVDetails = async (id) => {
  const res = await api.get(
    `/tv/${id}?api_key=${API_KEY}`
  );

  return res.data;
};

// Movie Trailer
export const fetchMovieTrailer = async (id) => {
  const res = await api.get(
    `/movie/${id}/videos?api_key=${API_KEY}`
  );

  return res.data.results;
};

// TV Show Trailer
export const fetchTVTrailer = async (id) => {
  const res = await api.get(
    `/tv/${id}/videos?api_key=${API_KEY}`
  );

  return res.data.results;
};