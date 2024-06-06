import React from 'react'
import './Homesearch.css'
import { FaSearch } from "react-icons/fa";

const Homesearch = () => {
  return (
    <div className='hsearch'>
        <h2>Let us help you find the right gunpla for you</h2>
        <div class="wrap-search">
          <div class="search-bar">
              <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
              <button type="submit" class="searchButton"><FaSearch /></button>
          </div>
        </div>
    </div>
  )
}

export default Homesearch
