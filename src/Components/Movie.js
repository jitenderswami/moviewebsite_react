import { useGlobalContext } from "./Context";
import MovieSkeleton from './MovieSkeleton';


const Movie = ({movie,index}) => {

    const {movies,lastMovieCardRef} = useGlobalContext()


    return(
        <>
        {movies.length === index+1 ? (
            <MovieSkeleton ref={lastMovieCardRef} movie={movie} />
        ): (
            <MovieSkeleton movie={movie}/>
         )}
        </>
    )
  
}

export default Movie
