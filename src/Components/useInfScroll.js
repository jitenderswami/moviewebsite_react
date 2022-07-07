import {useRef, useCallback} from "react";

const useInfScroll = ({setpageNumber}) => {

    const observer = useRef()
    const lastMovieCardRef = useCallback(node =>{
        
        console.log("in Inf scroll");
        // if(isLoading) return

        if(observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setpageNumber(prevPage => prevPage + 1)
            }

        },{
            threshold : 1
        })

        if(node) {
            observer.current.observe(node)}

    },[])

    return({lastMovieCardRef})
}

export default useInfScroll
