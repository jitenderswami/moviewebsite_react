import React  from 'react';
import { useState,useEffect} from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import Movielist from './Components/Movielist';



function App() {


  useEffect(() => {
    fetchMovies()
  })


  
  const fetchMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=1")
    const data = await res.json()

    setMovies(data.results)
  }




  const [movies,setMovies] = useState([])
  const [query,setQuery] = useState("")


  return (
    <div className="movieApp">
      <Searchbar />
      <Movielist movies={movies} />
    </div>
  );
}

export default App;
