import {useState} from 'react'

function Searchbar({query, setQuery}) {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className='searchbar'>
        <input
          value={query} 
          onChange = {(e) => setQuery(e.target.value)}
          class ="search" 
          id='search' 
          type="text" 
          placeholder='Search...'/>
    </form>
  )
}

export default Searchbar
