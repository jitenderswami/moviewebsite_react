import { Link} from 'react-router-dom'
import { useContext } from 'react';


const Movie = ({movie,setMovieShow}) => {

    const{title,vote_average,poster_path,vote_count} = movie;

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
                <Link to='/movie/moredetails' className="more_detail"><p onClick={()=>setMovieShow(movie)}>More details</p>
                </Link>
                {/* <Link to='https://www.youtube.com/watch?v=9Bvt6BFf6_U' className="more_detail"><p>More details</p>
                </Link> */}
        </div>
    </div>
  )
}

export default Movie
