import React  from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Searchbar from './Components/Searchbar';
import Movielist from './Components/Movielist';
import Moviedetails from './Components/Moviedetails';
import { useGlobalContext } from './Components/Context';


function App() {
  const {isLoading} = useGlobalContext()
  return (
    <div className="movieApp">

      <Routes>
          <Route
            path="/"
            element={
              <>
                <Searchbar />
                <Movielist />
                {isLoading && <div className='loading'> Loading...</div>}
              </>
            }>
          </Route>
          <Route 
            path={`/movie/:id`}
            element={
                  <Moviedetails />
                }>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
