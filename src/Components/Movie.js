import { Link} from 'react-router-dom'
import { useGlobalContext } from "./Context";


const Movie = ({movie,index}) => {

    const {movies,setMovieShow,lastMovieCardRef} = useGlobalContext()

    const{id,title,vote_average,poster_path,vote_count} = movie;

    const path = "https://image.tmdb.org/t/p/original" + poster_path;


    let span_class

    if(vote_average >= 8){
        span_class = "green"
    }
    else if(vote_average >= 6){
        span_class = "orange"
    } else {
        span_class = "red"
    }


    if(movies.length === index+1){
        return (
            <div ref={lastMovieCardRef} className="movie">
                <img src={path} alt={title} />
                <div className="movie_info">
                    <div className="movietitle">
                        <h3>{title}</h3>
                    </div>
                    <div className="rating">
                        <span className={span_class}>{vote_average}</span>
                        <span>Votes:{" "}{vote_count}</span>
                    </div>
                        <Link to= {`/movie/${id}`} className="more_detail"><p onClick={()=>setMovieShow(movie)}>More details</p> </Link>
                </div>
            </div>
          )

    } else {

        return (
            <div  className="movie">
                <img src={path} alt={title} />
                <div className="movie_info">
                    <div className="movietitle">
                        <h3>{title}</h3>
                    </div>
                    <div className="rating">
                        <span className={span_class}>{vote_average}</span>
                        <span>Votes:{" "}{vote_count}</span>
                    </div>
                        <Link to= {`/movie/${id}`} className="more_detail"><p onClick={()=>setMovieShow(movie)}>More details</p> </Link>
                </div>
            </div>
          )

    }
  
}

export default Movie
