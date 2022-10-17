import React from 'react'
import './Background.css'

//react-icons:
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Background() {
  return (
    <div className='background light-theme' id='background'>
        <div className='background-content'>
            <h2 className='title-bck'>My Education & Experience.</h2>
            <div className='timeline'>
                <div className='date-top'><b>2017 - 2021</b></div>
                <div className='timeline-content left'>
                    <FaUniversity size={40} className='tl-icon'/>
                    <div className='date'><b>2017 - 2021</b></div>    
                    <div className='text-box'>
                        <h4>Bcs' Industrial Electronics Engineering</h4>
                        <h3><IoLocationSharp className='icon' size={20}/> Mondragon University (Spain)</h3>
                        <a className='button-link' href={'https://www.mondragon.edu/en/bachelor-degree-industrial-electronics-engineering'} target="_blank"><button>Check more</button></a>
                    </div> 
                                    
                </div>
                <div className='date-top'><b>2020 - 2021</b></div> 
                <div className='timeline-content right'>
                    <MdWork size={40} className='tl-icon'/>
                    <div className='date'><b>2020 - 2021</b></div>  
                    <div className='text-box'>
                        <h4>Internship | R&D Automatic Defibrillators</h4>
                        <h3> <IoLocationSharp className='icon' size={20}/> Bexen Cardio (Spain)</h3>
                        <a className='button-link' href={'https://www.bexencardio.com/'} target="_blank"><button>Check more</button></a>
                    </div>
                </div>
                <div className='date-top'><b>2020 - 2021</b></div> 
                <div className='timeline-content left'>
                    <FaUniversity size={40} className='tl-icon' />
                    <div className='date'><b>2021 - 2023</b></div>  
                    <div className='text-box'>
                        <h4>Mcs' Innovative Communication Technologies and Entrepreneurship</h4>
                        <h3><IoLocationSharp className='icon' size={20}/> Aalborg University Copenhagen (Denmark)</h3>
                        <a className='button-link' href={'https://www.en.aau.dk/education/master/innovative-communication-technologies-entrepreneurship'} target="_blank"><button>Check more</button></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
