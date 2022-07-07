import {useState,useEffect} from 'react'
import { SEARCH_URL, MOVIE_URL } from '../util/API'

const useFetch = ({query,pageNumber,setisLoading}) => {

    const [movies,setMovies] = useState([])
    // const [query,setQuery] = useState("")
    // const [pageNumber,setpageNumber] = useState(1)

    useEffect(() => {
        setisLoading(true)
        let timer = setTimeout(() => {
            getMovies();
            setisLoading(false)
        }, 800);


        return () => clearTimeout(timer);
    
    },[query,pageNumber])



    const getMovies = async () => {

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
  return ({movies})
}

export default useFetch
