import React, { useEffect, useState} from "react";
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch} from "react-redux"
import { fetchAsyncMovies,fetchAsyncShows} from "../../features/movies/movieSlice";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAsyncMovies())
      dispatch(fetchAsyncShows())
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <div>
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
