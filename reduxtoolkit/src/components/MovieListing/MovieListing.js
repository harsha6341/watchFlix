import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies,getAllShows } from "../../features/movies/movieSlice";
import './MovieListing.scss'

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);  
  
  const renderMovies =  movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
       return <MovieCard key={index} data={movie} />
      })
  )
     : 
     (
         <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
     )

     const renderShows =  shows.Response === "True" ? (
        shows.Search.map((show, index) => {
         return <MovieCard key={index} data={show} />
        })
    )
       : 
       (
           <div className="movies-error">
          <h3>{movies.Error}</h3>
        </div>
       )
    
  return (
  <div className="movie-wrapper">
    <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
        </div>
        <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
        </div>
        </div>
        
        );
};

export default MovieListing;
