import Movie from "./Movie"

function Movielist({movies,setMovieShow}) {
  return (
    <div className='movielist'>
        {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} setMovieShow = {setMovieShow} />
        ))}
    </div>
  )
}

export default Movielist
