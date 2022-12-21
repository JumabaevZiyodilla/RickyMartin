import React from 'react'
import './search.css'
import {DebounceInput} from 'react-debounce-input';

const Search = ({ setSearch, setActivePage }) => {
  return (
    <>
    <DebounceInput 
    debounceTimeout={1500}
    onChange = {(evt) => {
      setActivePage(1)
      setSearch(evt.target.value)
    }}
    className="search-input"
      type="search"
      placeholder="Search..."
      aria-label="Search this multfilm"
      name="search"
    />
    </>
  )
}

export default Search;
