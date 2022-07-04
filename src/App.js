import React  from 'react';
import { useState,useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Searchbar from './Components/Searchbar';
import Movielist from './Components/Movielist';
import Moviedetails from './Components/Moviedetails';

function App() {

  const [movies,setMovies] = useState([])
  const [query,setQuery] = useState("")
  const[movieShow, setMovieShow] = useState(null)

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
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Searchbar query={query} setQuery={setQuery}/>
                <Movielist movies={movies} setMovieShow = {setMovieShow}/>
              </>
            }></Route>
          <Route 
            path="/movie/moredetails" 
            element={
                  <Moviedetails movieShow={movieShow}/>
                }>
              
            
            </Route>
        </Routes>
    </div>
  );
}

export default App;
