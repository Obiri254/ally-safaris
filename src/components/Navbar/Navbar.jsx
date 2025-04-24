import React from 'react'
import './Navbar.css'
import Obiri_clear from '../../assets/Obiri_clear.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Obiri_clear} alt="" />
      <ul className="nav-menu">
      <li>Home</li>
      <li>About Me</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact</li>
      </ul>
      <div className="nav-connect">Let's Connect</div>
    </div>
  )
}

export default Navbar
