import React from 'react';
import {Link} from "react-router-dom"
import "./MovieCard.scss"

const MovieCard = (props) => {

    const {Title,Year,Poster,imdbID} = props.data
    return (
      <Link to = {`/movie/${imdbID}`} state={{movieData:props.data}}><div className="card-item">
            <div className="card-inner">
                <div className="card-top">
                   <img src={Poster} alt={Title}/>
                   </div>     
                    <div className="card-bottom">
                       <div className="card-info">
                       <h4>{Title}</h4>
                       <p>{Year}</p> 
                       </div> 
                           
                    </div>
            </div>
        </div></Link> 
    );
};

export default MovieCard;