import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchTrendingMovies = async () => {
  const res = await api.get(`/trending/movie/week?api_key=${API_KEY}`);
  return res.data.results;
};

export const fetchPopularTVShows = async () => {
  const res = await api.get(`/tv/popular?api_key=${API_KEY}`);
  return res.data.results;
};

export const searchMulti = async (query) => {
  const res = await api.get(
    `/search/multi?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await api.get(`/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const fetchTVDetails = async (id) => {
  const res = await api.get(`/tv/${id}?api_key=${API_KEY}`);
  return res.data;
};