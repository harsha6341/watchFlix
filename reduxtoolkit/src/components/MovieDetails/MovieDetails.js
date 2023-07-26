import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { fetchAsyncMovieById,getMovieOrShowById,deleteMovieById} from '../../features/movies/movieSlice';
import "./MovieDetails.scss"

const MovieDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const {Title,Year,Poster,imdbID} = location.state.movieData
    useEffect(()=>{
      dispatch(fetchAsyncMovieById(imdbID));
      return () =>{
               dispatch(deleteMovieById())
      }
      
 },[dispatch,imdbID])
   const movieOrShow = useSelector(getMovieOrShowById);
   console.log(movieOrShow)

    return (
        <div className="movie-section">
            <div className="section-left">
                <div className="movie-title">{movieOrShow.Title}</div>
                <div className="movie-rating">
                    <span>
                       IMDB Rating <i>{movieOrShow.imdbRating}</i>
                    </span>
                    <span>
                       IMDB Rating <i>{movieOrShow.imdbVotes}</i>
                    </span>
                    <span>
                       IMDB Rating <i>{movieOrShow.Runtime}</i>
                    </span>
                    <span>
                       IMDB Rating <i>{movieOrShow.Year}</i>
                    </span>
                </div>
                <div className="movie-plot">{movieOrShow.Plot}</div>
                <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{movieOrShow.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{movieOrShow.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{movieOrShow.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{movieOrShow.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{movieOrShow.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={movieOrShow.Poster} alt={movieOrShow.Title} />
          </div>
           </div>
    );
};

export default MovieDetails;