import React from 'react'
var movieposter = require('./sholay.jpg')
function Movielist() {
  return (
    <div className='movielist'>
        <div className="movie">
            <img src={movieposter} alt="" />
            <div className="movie_info">
                <div className="movietitle">
                    <h3>Sholay</h3>
                    <span>8.5</span>
                </div>
                <p>Drama, Action, thriller</p>
            </div>
        </div>
        <div className="movie">
            <img src={movieposter} alt="" />
            <div className="movie_info">
                <div className="movietitle">
                    <h3>Sholay</h3>
                    <span>8.5</span>
                </div>
                <p>Drama, Action, thriller</p>
            </div>
        </div> 
        <div className="movie">
            <img src={movieposter} alt="" />
            <div className="movie_info">
                <div className="movietitle">
                    <h3>Sholay</h3>
                    <span>8.5</span>
                </div>
                <p>Drama, Action, thriller</p>
            </div>
        </div> 
        <div className="movie">
            <img src={movieposter} alt="" />
            <div className="movie_info">
                <div className="movietitle">
                    <h3>Sholay</h3>
                    <span>8.5</span>
                </div>
                <p>Drama, Action, thriller</p>
            </div>
        </div>
    </div>
  )
}

export default Movielist
