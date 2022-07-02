import React from 'react'



const Movie = ({movie}) => {


    const{title,vote_average,backdrop_path,poster_path,vote_count} = movie;

    const path = "https://image.tmdb.org/t/p/original" + poster_path;


    let rcolor

    if(vote_average >= 8){
        rcolor = "green"
    }
    else if(vote_average >= 6){
        rcolor = "orange"
    } else {
        rcolor = "red"
    }

    const divstyle = {
        color : rcolor
    }


  return (
    <div className="movie">
        <img src={path} alt="" />
        <div className="movie_info">
            <div className="movietitle">
                <h3>{title}</h3>
            </div>
            <div className="rating">
                <span style={divstyle}>{vote_average}</span>
                <span>Votes:{" "}{vote_count}</span>
            </div>
            <div className="more_detail">
                <a href="">More details</a>
            </div>
        </div>
    </div>
  )
}

export default Movie
