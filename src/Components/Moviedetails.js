import React from 'react'
import { Link } from "react-router-dom";
import { useGlobalContext } from './Context';

const Moviedetails = () => {
    const {movieShow} = useGlobalContext()
    if (movieShow){
        const{title,vote_average,backdrop_path,overview,release_date} = movieShow;
        return (
            <>
            <img alt='Background_Image' className="img-bg" src={"https://image.tmdb.org/t/p/w500" + backdrop_path}/>
            <Link  to = "/" className='btn' >Back</Link>
        
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
                                    <p className ="rate">
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
        
    } else{
        return(<Link  to = "/" className='btn' >Back</Link>)
    }
}

export default Moviedetails
