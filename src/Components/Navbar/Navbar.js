import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/images/icons8-menu-50.png'

const Navbar = () => {
  
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
 }

  return (

      <nav>
        <h2>LOGO</h2>
        <ul className={mobileMenu?'':'hide-menu'}>
          <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='programs' smooth={true} offset={-275} duration={500}>Programs</Link></li>
          <li><Link to='about' smooth={true} offset={-105} duration={500}>About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-220} duration={500}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-270} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-270} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt='menu-icon' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
