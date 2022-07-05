import Movie from "./Movie"
import { useGlobalContext } from "./Context";

function Movielist() {
    const{movies} = useGlobalContext()
  return (
    <div className='movielist'>
        {movies.map((movie) => (
            <Movie key={movie.id} movie ={movie} />
        ))}
    </div>
  )
}
export default Movielist
