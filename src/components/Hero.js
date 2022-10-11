import React, { Component } from 'react'
import './Hero.css';

//react icons
import { ImLinkedin } from 'react-icons/im';

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
            <h3 className='subtitle'>I am an electronic engineer, now studying a MSc in "Innovative Communication Technologies and Entrepreneurship" in Copenhagen. I'm looking forward to taking my career to the next level by extending my technical knowledge. New challenges are always accepted.</h3>
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