import React  from 'react';
import { useState,useEffect} from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import Movielist from './Components/Movielist';

function App() {

  const [movies,setMovies] = useState([])
  const [query,setQuery] = useState("")

useEffect(() =>{
  fetchMovies(query)
},[query])


  const fetchMovies = async (query) => {
    if(query){
      const url = `https://api.themoviedb.org/3/search/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=1&vote_average.gte=8.4&query=${query}`
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    }
    else{
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=1'
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    }
  }

  
  return (
    <div className="movieApp">
      <Searchbar query={query} setQuery={setQuery}/>
      <Movielist movies={movies} />
    </div>
  );
}

export default App;
