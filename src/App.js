import React  from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Searchbar from './Components/Searchbar';
import Movielist from './Components/Movielist';
import Moviedetails from './Components/Moviedetails';
function App() {
  return (
    <div className="movieApp">
      {/* <Searchbar />
      <Movielist /> */}

      <Routes>
          <Route
            path="/"
            element={
              <>
                <Searchbar />
                <Movielist />
              </>
            }></Route>
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
