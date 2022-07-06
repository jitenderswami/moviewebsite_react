import { useGlobalContext } from "./Context";

  
function Searchbar() {

  const {query,setQuery,setpageNumber} = useGlobalContext()

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) =>{
    setQuery(e.target.value)
    setpageNumber(1)
  }

  return (
    <form onSubmit={onSubmit} className='searchbar'>
        <input
          value= {query}
          onChange = {e => handleChange(e)}
          className ="search" 
          id='search' 
          type="text" 
          placeholder='Search...'/>
    </form>
  )
}

export default Searchbar
