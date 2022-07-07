import Movie from "./Movie"
import { useGlobalContext } from "./Context";

function Movielist() {
    const{movies} = useGlobalContext()
  return (
    <div className='movielist'>
        {movies.map((movie,index) => (
             <Movie index = {index} key={movie.id} movie ={movie} />
        ))}
    </div>
  )
}
export default Movielist
