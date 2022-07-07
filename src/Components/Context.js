import React, { useContext, useEffect, useState, useRef, useCallback} from "react";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc"
const MOVIE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page='

const AppContext = React.createContext()
const AppProvider = ({ children }) => {

    const [movies,setMovies] = useState([])
    const [query,setQuery] = useState("")
    const [movieShow, setMovieShow] = useState(null)
    const [isLoading,setisLoading] =useState(true)
    const [pageNumber,setpageNumber] = useState(1)

    const observer = useRef()
    const lastMovieCardRef = (node) =>{
        if(isLoading) return
        console.log("returned")
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setpageNumber(prevPage => prevPage + 1)
            }

        })

        if(node) observer.current.observe(node)

    }

    useEffect(() => {
        console.log("inUseeffect",query,pageNumber);

        setisLoading(true)
        let timer = setTimeout(() => {
            fetchMovies();
            setisLoading(false)
        }, 800);


        return () => clearTimeout(timer);
    
    },[query,pageNumber])


    const fetchMovies = async () => {

        let url = `${MOVIE_URL}${pageNumber}`
        
        if(query){
            url = `${SEARCH_URL}&page=${pageNumber}&query=${query}`
        }
        const res = await fetch(url)
        const data = await res.json()

        if(pageNumber===1){
            setMovies(data.results)
        } else{
            setMovies(prevData => [...prevData, ...data.results])
        }
    }

    return (<AppContext.Provider value={{ movieShow, setMovieShow, movies, query, setQuery, isLoading, lastMovieCardRef, setpageNumber}}>
            {children}
        </AppContext.Provider>);
}



const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }