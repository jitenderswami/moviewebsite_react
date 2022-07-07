import React, { useContext, useState, useRef, useCallback} from "react";
import useFetch from "./useFetch";
import useInfScroll from "./useInfScroll";


const AppContext = React.createContext()
const AppProvider = ({ children }) => {

    const [movieShow, setMovieShow] = useState(null)
    const[query,setQuery] = useState("")
    const[pageNumber,setpageNumber] = useState(1)
    const [isLoading,setisLoading] = useState(true)

    const {movies} = useFetch({query,pageNumber,setisLoading})
    const {lastMovieCardRef} = useInfScroll({setpageNumber})
    

    return (<AppContext.Provider value={{ movieShow, setMovieShow, movies, query, setQuery, isLoading,setpageNumber, lastMovieCardRef}}>
            {children}
        </AppContext.Provider>);
}



const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }