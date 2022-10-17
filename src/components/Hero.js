import React, { Component } from 'react'
import './Hero.css';

//react smooth scroll
import { Link } from 'react-scroll'

//react icons
import { ImLinkedin } from 'react-icons/im';
import { FaGithubSquare} from 'react-icons/fa';
import { CgChevronDoubleDown } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';

//typing animation
import { TypeAnimation } from 'react-type-animation';

export default class Hero extends Component {
  render() {
    return (
      <div className='hero light-theme' id='hero'>
        <div className='hero-content'>
            <h1 className='title'>
                <TypeAnimation 
                    sequence={[
                        "Hey, I'm Ander.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Hola, soy Ander.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Hej, jeg er Ander.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Kaixo, Ander naiz.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Salut, je suis Ander.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s
                        () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    speed={20}
                    cursor={true}
                    repeat={Infinity}
                />
            </h1>
            <h3 className='subtitle'>I am an electronic engineer, now studying a MSc in "Innovative Communication Technologies and Entrepreneurship" in Copenhagen. Interested in UX Design and Front-end development.</h3>
        </div>
        <div className='scroll-down'>
            <Link to="skills" spy={true} smooth={true} offset={-60} duration={500}><CgChevronDoubleDown size={60} /></Link>
        </div>
        
      </div>
    )
  }
}

/*

            

<div className='social-media'>
                <a href=''><ImLinkedin /></a>

            </div>

            */
