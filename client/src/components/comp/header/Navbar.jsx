import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { BiColor } from 'react-icons/bi'

const Navbar = () => {
  return (
  <div class="heroes">
      <nav>
        <h2 class="logoes">Gunpla <span class="red-text">Pedia</span></h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gunpla">Gunpla</Link></li>
          <li><Link to="/techniques">Techniques</Link></li>        
        </ul>
        <button type="button" class="log-nav"><Link to="/login">Login</Link></button>
      </nav>
  </div>
  )
}

export default Navbar
