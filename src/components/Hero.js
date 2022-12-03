import React from 'react'
import './Hero.css';

//react smooth scroll
import { Link } from 'react-scroll'

//react icons
import { CgChevronDoubleDown } from 'react-icons/cg';


//typing animation
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {

    return (
      <div className='hero light-theme' id='hero'>
        <div className='hero-content'>
            <h1 className='title'>
                <TypeAnimation 
                    sequence={[
                        "Hey, I'm Ander.", // Types 'One'
                        1000, // Waits 1s
                        "Hey, I'm And", // Types 'One'
                        500, // Waits 1s
                        "Hey, I'm AndR", // Types 'One'
                        1000, // Waits 1s
                        "Hey, I'm &R.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Hola, soy Ander.", // Types 'One'
                        1000, // Waits 1s
                        "Hola, soy And", // Types 'One'
                        500, // Waits 1s
                        "Hola, soy AndR", // Types 'One'
                        1000, // Waits 1s
                        "Hola, soy &R.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Hej, jeg er Ander.", // Types 'One'
                        1000, // Waits 1s
                        "Hej, jeg er And", // Types 'One'
                        500, // Waits 1s
                        "Hej, jeg er AndR", // Types 'One'
                        1000, // Waits 1s
                        "Hej, jeg er &R.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Kaixo, Ander naiz.", // Types 'One'
                        1000, // Waits 1s
                        "Kaixo, And", // Types 'One'
                        500, // Waits 1s
                        "Kaixo, AndR", // Types 'One'
                        1000, // Waits 1s
                        "Kaixo, &R naiz.", // Types 'One'
                        3000, // Waits 1s
                        "", //erase it
                        1000, // Wait 1s

                        "Salut, je suis Ander.", // Types 'One'
                        1000, // Waits 1s
                        "Salut, je suis And", // Types 'One'
                        500, // Waits 1s
                        "Salut, je suis AndR", // Types 'One'
                        1000, // Waits 1s
                        "Salut, je suis &R", // Types 'One'
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
            <h3 className='subtitle'>I am an electronic engineer, now studying a MSc in "Innovative Communication Technologies and Entrepreneurship" in Copenhagen. Learning UX Design and Front-end development.</h3>
        </div>
        <div className='scroll-down'>
            <Link to="projects" spy={true} smooth={true} offset={-60} duration={500}><CgChevronDoubleDown size={60} /></Link>
        </div>
      </div>
    )
}

/*

            

<div className='social-media'>
                <a href=''><ImLinkedin /></a>

            </div>

            */