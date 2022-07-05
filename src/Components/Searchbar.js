import { useGlobalContext } from "./Context";

  
function Searchbar() {

  const {query,setQuery} = useGlobalContext()

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className='searchbar'>
        <input
          value={query} 
          onChange = {(e) => setQuery(e.target.value)}
          className ="search" 
          id='search' 
          type="text" 
          placeholder='Search...'/>
    </form>
  )
}

export default Searchbar
