import React from 'react'
import { Link} from 'react-router-dom'
import { BACK_POSTER_PATH } from '../util/API';
import votecolor from '../util/votecolor';
import { useGlobalContext } from "./Context";


const MovieSkeleton = ({movie}) => {

    const {setMovieShow} = useGlobalContext()

    const{id,title,vote_average,poster_path,vote_count} = movie;
    
    const path = BACK_POSTER_PATH + poster_path;
  
  
  
    return (
    <div className="movie">
                <img src={path} alt={title} />
                <div className="movie_info">
                    <div className="movietitle">
                        <h3>{title}</h3>
                    </div>
                    <div className="rating">
                        <span className={votecolor(vote_average)}>{vote_average}</span>
                        <span>Votes:{" "}{vote_count}</span>
                    </div>
                        <Link to= {`/movie/${id}`} className="more_detail"><p onClick={()=>setMovieShow(movie)}>More details</p> </Link>
                </div>
            </div>
  )
}

export default MovieSkeleton
