import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

    <nav>
      <Link to="/Home">Logo</Link>

      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contact">Contact</Link></li> 

        
      </ul>
    </nav>
  )
}
