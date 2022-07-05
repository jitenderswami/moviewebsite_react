import React, { useContext, useEffect, useState} from "react";


const AppContext = React.createContext()
const AppProvider = ({ children }) => {

    const [movies,setMovies] = useState([])
    const [query,setQuery] = useState("")
    const [movieShow, setMovieShow] = useState(null)

    useEffect(() => {
        let timer = setTimeout(() => {
            fetchMovies(query);
        }, 800);
        
        return () => clearTimeout(timer);
    
    },[query])

    // const fetchMovies = async (url) => {

    //     const res = await fetch(url)
    //     const data = await res.json()
    //     setMovies(data.results)

    // }

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

    return (<AppContext.Provider value={{ movieShow, setMovieShow, movies, query, setQuery }}>
            {children}
        </AppContext.Provider>);
}



const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }