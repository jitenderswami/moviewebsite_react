import React from 'react'



const Movie = ({movie}) => {

    const{title,vote_average,backdrop_path,poster_path} = movie;
    const path = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <div className="movie">
        <img src={path} alt="" />
        <div className="movie_info">
            <div className="movietitle">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            {/* <p>Drama, Action, thriller</p> */}
        </div>
    </div>
  )
}

export default Movie
