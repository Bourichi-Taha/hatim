import React from 'react'
import "../assets/css/navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">H.Maak</div>
        <ul className="navbar-right">
            <li className="navbar-right-item active">Home</li>
            <li className="navbar-right-item">about</li>
            <li className="navbar-right-item">services</li>
            <li className="navbar-right-item">portfolio</li>
            <li className="navbar-right-item">contact</li>
        </ul>
    </div>
  )
}

export default Navbar