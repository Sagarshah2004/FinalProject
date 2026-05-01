import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

const useWatchlist = () => {
  return useContext(WatchlistContext);
};

export default useWatchlist;