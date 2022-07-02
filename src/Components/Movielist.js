import Movie from "./Movie"

function Movielist({movies}) {
  return (
    <div className='movielist'>
        {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
        ))}
    </div>
  )
}

export default Movielist
