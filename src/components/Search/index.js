import React from 'react'

import { FiSearch } from 'react-icons/fi'

import './Search.css'

const Search = () => {
    return(
        <div className="contentSearch">
            <label htmlFor="search" className="labelName"><FiSearch color="#d84026"/></label>
            <input name="search" type="text" placeholder="Search our stock"/>
        </div>
    )
}

export default Search