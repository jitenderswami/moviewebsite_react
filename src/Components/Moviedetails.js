import React from 'react'
import { useNavigate } from "react-router-dom";

const Moviedetails = ({movieShow}) => {
    const{title,vote_average,backdrop_path,overview,release_date} = movieShow;
    let navigate = useNavigate();

  return (
    <>
    <img alt='Background_Image' className="img-bg" src={"https://image.tmdb.org/t/p/w500" + backdrop_path}/>
    <button className='btn' onClick={() => navigate(-1)}>Back</button>

    { movieShow && ( 
            <div className="details">
                <h1 className="section-title">{title}</h1>
                <ul>
                    <li>
                        <div>
                            <h4>Overview</h4>
                            <p>{overview}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Rating:</h4>
                            <p id="rate">
                            {vote_average}
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Release Date</h4>
                            <p>{release_date}</p>
                        </div>

                    </li>
                </ul>
            </div>)}
    </>
        
  )
}

export default Moviedetails
