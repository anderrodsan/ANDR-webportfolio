import React from 'react'
import './Contact.css'

//react smooth scroll
import { Link } from 'react-scroll'

//react icons
import { ImLinkedin } from 'react-icons/im';
import { FaGithubSquare} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CgChevronDoubleUp } from 'react-icons/cg';


export default function Contact() {
  return (
    <div className='contact dark-theme' id='contact'>
        <div className='contact-content'>
            <h2>Contact Me</h2>
            <div className='social'>
                <a href='https://www.linkedin.com/in/anderrodsan/?locale=en_US' target='_blank'><ImLinkedin className='icon' size={20}/> linkedin.com/in/anderrodsan</a>
                <a href='mailto:anderrodsan@gmail.com'><MdEmail className='icon' size={20}/> anderrodsan@gmail.com</a>
                <a href='https://github.com/anderrodsan' target='_blank'><FaGithubSquare className='icon' size={20}/> github.com/anderrodsan</a>
            </div>
        </div>
        <div className='scroll-up'>
            <Link to="hero" spy={true} smooth={true} offset={-60} duration={500}><CgChevronDoubleUp size={60} /></Link>
        </div>
    </div>
  )
}
