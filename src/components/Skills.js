import React, { Component } from 'react'

import './Skills.css'

//React icons
import { SiAdobe, SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma, SiPython } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";



export default class Skills extends Component {
  render() {
    return (
      <div className='skills dark-theme' id='skills'>
        <div className='skill-content'>
            <h2>My Skills.</h2>
            <div className='skill-types'>
                <div className='skill-list'>
                    <ul>
                        <li><h4>WEB DEVELOPMENT</h4></li>
                        <li><SiHtml5 className='skill-icon'/> HTML</li>
                        <li><SiCss3 className='skill-icon'/> CSS</li>
                        <li><TbBrandJavascript className='skill-icon'/>JavaScript</li>
                        <li><SiReact className='skill-icon'/> React</li>
                    </ul>
                    <ul>
                        <li><h4>UX DESIGN</h4></li>
                        <li><SiAdobe className='skill-icon'/> Adobe Package</li>
                        <li><SiFigma className='skill-icon'/> Figma</li>
                    </ul>
                    <ul>
                        <li><h4>BACK-END</h4></li>
                        <li><SiPython className='skill-icon'/> Python</li>
                        <li><FaCode className='skill-icon'/> Matlab</li>
                        <li><FaCode className='skill-icon'/> C++</li>
                    </ul>
                </div>

                <div className='skill-list'>
                    <ul>
                        <li><h4>PERSONAL</h4></li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Creativity</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Teamwork</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Engineering</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Problem Solving</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Critical Thinking</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Project Management</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Social skills</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Willingness to learn</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Fast learning</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Flexibility</li>
                        <li><BsFillPersonCheckFill className='skill-icon'/> Adaptability</li>
                    </ul>
                </div>

                <div className='skill-list'>
                    <ul>
                        <li><h4>LANGUAGES</h4></li>
                        <li><MdLanguage className='skill-icon'/> <b>SPANISH</b> | Native</li>
                        <li><MdLanguage className='skill-icon'/> <b>BASQUE</b> | Native</li>
                        <li><MdLanguage className='skill-icon'/> <b>ENGLISH</b> | C1 Certificate</li>
                        <li><MdLanguage className='skill-icon'/> <b>FRENCH</b> | B2 Certificate</li>
                        <li><MdLanguage className='skill-icon'/> <b>DANISH</b> | Module 1</li>
                    </ul>
                </div>
            </div>
        </div>

      </div>
    )
  }
}
