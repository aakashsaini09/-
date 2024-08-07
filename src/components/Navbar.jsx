import React from 'react'
import '../Styles/Nav-Sidenav.css'
import { useState } from 'react';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  
    function handleClick() {
        setIsActive(!isActive);
    }
  return (
    <>
    <div className='text-center d-flex navbar align-items-center justify-content-between'>
      <div className="name">
        <div className="aak">Aak</div>
        <div className="ash">ash</div>
      </div>
      <nav className='first-navbar'>
        <ul className='d-flex list-unstyled'>
          <li className='fs-6'><a href="#home">Home</a></li>
          <li className='fs-6'><a href="#about">ABOUT</a></li>
          <li className='fs-6'><a href="#skill-section">SKILLS</a></li>
          <li className='fs-6'><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <button className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={handleClick}>
         <div className="bar"></div>
      </button>
    </div>
      <nav className={`mobile-nav ${isActive ? 'is-active' : ''}`}>
      <li className='mobile-nav-li' onClick={handleClick}><a href="#home">Home</a></li>
          <li className='mobile-nav-li' onClick={handleClick}><a href="#about">ABOUT</a></li>
          <li className='mobile-nav-li' onClick={handleClick}><a href="#contact">CONTACT</a></li>
          <li className='mobile-nav-li' onClick={handleClick}><a href="#skill-section">SKILLS</a></li>
      </nav>
    </>
  )
}

export default Navbar
