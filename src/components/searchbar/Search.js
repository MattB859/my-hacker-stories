import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './search.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div>
        <input className='search'
            type="text" 
            placeholder='search....' 
            id="search"
            value={searchTerm}
            onChange={(e) => {
            setSearchTerm(e.target.value)
        }}
         />
        <FaSearch className='search-icon' />
       
     
    </div>

    </>
  )
}

export default Search;