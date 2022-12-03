import React from 'react'
import './Skills.css'

//React icons
import { SiAdobe, SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma, SiPython } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";



export default function Skills() {

    return (
      <div className='skills dark-theme' id='skills'>
        <div className='skill-content'>
            <h2>My Skills.</h2>
            <div className='skill-types'>
                <div className='skill-list'>
                    <ul>
                        <li className='skill-item'><h4 className='skill-title'>WEB DEVELOPMENT</h4></li>
                        <li className='skill-item'><SiHtml5 className='icon' size={20}/> HTML</li>
                        <li className='skill-item'><SiCss3 className='icon' size={20}/> CSS</li>
                        <li className='skill-item'><TbBrandJavascript className='icon' size={20}/> JavaScript</li>
                        <li className='skill-item'><SiReact className='icon' size={20}/> React</li>
                    </ul>
                    <ul>
                        <li className='skill-item'><h4 className='skill-title'>UX DESIGN</h4></li>
                        <li className='skill-item'><SiAdobe className='icon' size={20}/> Adobe Package</li>
                        <li className='skill-item'><SiFigma className='icon' size={20}/> Figma</li>
                    </ul>
                    <ul>
                        <li className='skill-item'><h4 className='skill-title'>BACK-END</h4></li>
                        <li className='skill-item'><SiPython className='icon' size={20}/> Python</li>
                        <li className='skill-item'><FaCode className='icon' size={20}/> Matlab</li>
                        <li className='skill-item'><FaCode className='icon' size={20}/> C++</li>
                    </ul>
                </div>

                <div className='skill-list'>
                    <ul>
                        <li className='skill-item'><h4 className='skill-title'>PERSONAL</h4></li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Creativity</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Teamwork</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Engineering</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Problem Solving</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Critical Thinking</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Project Management</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Social skills</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Willingness to learn</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Fast learning</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Flexibility</li>
                        <li className='skill-item'><BsFillPersonCheckFill className='icon' size={20}/> Adaptability</li>
                    </ul>
                </div>

                <div className='skill-list'>
                    <ul>
                        <li className='skill-item'><h4 className='skill-title'>LANGUAGES</h4></li>
                        <li className='skill-item'><MdLanguage className='icon' size={20}/> <b>SPANISH</b> | Native</li>
                        <li className='skill-item'><MdLanguage className='icon' size={20}/> <b>BASQUE</b> | Native</li>
                        <li className='skill-item'><MdLanguage className='icon' size={20}/> <b>ENGLISH</b> | C1 Certificate</li>
                        <li className='skill-item'><MdLanguage className='icon' size={20}/> <b>FRENCH</b> | B2 Certificate</li>
                        <li className='skill-item'><MdLanguage className='icon' size={20}/> <b>DANISH</b> | Module 1</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
}
