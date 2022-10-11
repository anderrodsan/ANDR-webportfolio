import React, { Component, useState } from 'react'
import './Navbar.css';

//react smooth scroll
import { Link } from 'react-scroll'

//burger icons
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";




function NavBar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


    return (
      <nav>
        <div className='logo'>
          <Link to="hero" spy={true} smooth={true} offset={-60} duration={500}>&R</Link>
        </div>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to="hero" spy={true} smooth={true} offset={-60} duration={500}>About Me</Link>
          </li>
          <li className='nav-item'>
            <Link to="skills" spy={true} smooth={true} offset={-60} duration={500}>Skills</Link>
          </li>
          <li className='nav-item'>
            <Link to="art" spy={true} smooth={true} offset={-60} duration={500}>Art</Link>
          </li>
          <li className='nav-item'>
            <Link to="music" spy={true} smooth={true} offset={-60} duration={500}>Music</Link>  
          </li>
        </ul>
        
        {/*-------------- Sidebar --------------- */}

        
        <FaBars className='burger-bars' onClick={showSidebar}/>

        <div className={sidebar ? 'burger-menu active' : 'burger-menu'} >
          <ul className='burger-menu-list'>
            <li><AiOutlineClose className='burger-close' onClick={showSidebar}/></li>
            <li className='burger-item' >
              <Link to="hero" onClick={showSidebar} spy={true} smooth={true} offset={-60} duration={500}>About Me</Link>
            </li>
            <li className='burger-item'>
              <Link to="skills" onClick={showSidebar} spy={true} smooth={true} offset={-60} duration={500}>Skills</Link>
            </li>
            <li className='burger-item'>
              <Link to="art" onClick={showSidebar} spy={true} smooth={true} offset={-60} duration={500}>Art</Link>
            </li>
            <li className='burger-item'>
              <Link to="music" onClick={showSidebar} spy={true} smooth={true} offset={-60} duration={500}>Music</Link>  
            </li>
          </ul>
        </div>




      </nav>
    )
}

export default NavBar
