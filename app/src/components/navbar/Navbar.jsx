import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Details</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar