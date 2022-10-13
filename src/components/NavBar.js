import React, { Component, useState } from 'react'
import './Navbar.css';
import CV from '../files/CV_Ander_Rodriguez_EN.pdf'

//react smooth scroll
import { Link } from 'react-scroll'

//burger icons
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import { MdDownload } from "react-icons/md";


function NavBar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


    return (
      <nav>
        <div className='logo'>
          <Link to="hero" spy={true} smooth={true} offset={-60} duration={500}>&R</Link>
        </div>
        <div className='nav-menu'>
          <ul>
            <li className='nav-item'>
              <Link to="hero" spy={true} smooth={true} offset={-60} duration={500}>About Me</Link>
            </li>
            <li className='nav-item'>
              <Link to="skills" spy={true} smooth={true} offset={-60} duration={500}>Skills</Link>
            </li>
            <li className='nav-item'>
              <Link to="background" spy={true} smooth={true} offset={-60} duration={500}>Background</Link>
            </li>
            <li className='nav-item'>
              <Link to="art" spy={true} smooth={true} offset={-60} duration={500}>Art</Link>
            </li>
            <li className='nav-item'>
              <Link to="music" spy={true} smooth={true} offset={-60} duration={500}>Music</Link>  
            </li>
            <li className='nav-item'>
              <Link to="contact" spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>  
            </li>
            <a className='button-link' href={CV} download><button className='nav-button'>Resume <AiOutlineDownload size={16} className='icon' /></button></a>
          </ul>
          
        </div>
        
        
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
              <Link to="background" onClick={showSidebar} spy={true} smooth={true} offset={-60} duration={500}>Background</Link>
            </li>
            <li className='burger-item'>
              <Link to="art" onClick={showSidebar} spy={true} smooth={true} offset={-60} duration={500}>Art</Link>
            </li>
            <li className='burger-item'>
              <Link to="music" onClick={showSidebar} spy={true} smooth={true} offset={-60} duration={500}>Music</Link>  
            </li>
            <a className='burger-item' href={CV} download><button className='burger-button'>Resume <AiOutlineDownload size={16} className='icon' /></button></a>
          </ul>
        </div>




      </nav>
    )
}

export default NavBar
