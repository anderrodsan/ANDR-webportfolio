import React, { Component, useState } from 'react'
import './Projects.css';


//React icons
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiFigma, SiPython } from "react-icons/si";
import { FaUniversity, FaUser } from "react-icons/fa";


function Projects(){


  const [frontend, setFrontend] = useState(false)
  const showFrontend = () => setFrontend(!frontend)

  const [ml, setML] = useState(false)
  const showML = () => setML(!ml)

  const [electronics, setElectronics] = useState(false)
  const showElectronics = () => setElectronics(!electronics)
  
  return (
    <div className='project dark-theme' id='projects'>
      <div className='project-content'>
          <h2 className='white-text'>My Projects.</h2>
          <h3 className='project-subtitle'>Select any category to filter  my different types of projects. More comming soon...</h3>
          <div className='project-types'>
            <button className={frontend ? 'btn-on' : 'btn'} onClick={showFrontend}>Front-end</button>
            <button className={ml ? 'btn-on' : 'btn'} onClick={showML}>Full-Stack</button>
            <button className={electronics ? 'btn-on' : 'btn'} onClick={showElectronics}>Electronics</button>
          </div>
          <hr className='line'/>
          <div className='projects'>
            {/* Club recommender */}
            <div className={ml ? 'project-item' : 'hide'} >
              <div className='project-type'>Machine Learning</div>
              <img className='project-img' src={require('../images/club-recommender2.jpeg')}/>
              <div className='project-description'>
                <h4 className='project-name'>Club <br/> Recommender</h4>
                <h3 className='project-year'> SEP 2022 | DIC 2022</h3>
                <hr/>
                <div className='project-loc'>
                  <FaUniversity className='icon' size={20}/> Aalborg University
                </div>
                <p className='project-exp'>Recommend clubs based on Spotify data</p>
              </div>
              <a className='check-btn' href={''} target="_blank">Coming Soon...</a>
            </div>
            {/* Web portfolio */}
            <div className={frontend ? 'project-item' : 'hide'}>
              <div className='project-type'>Front-end</div>
              <img className='project-img' src={require('../images/portfolio.jpeg')}/>
              <div className='project-description'>
                <h4 className='project-name'>Web <br/> Portfolio</h4>
                <h3 className='project-year'>SEP 2022 | OCT 2022</h3>
                <hr/>
                <div className='project-loc'>
                  <FaUser className='icon' size={20}/> My own project
                </div>
                <p className='project-exp'>Web portfolio created by using Reactjs</p>
              </div>
              <a className='check-btn' href={'https://github.com/anderrodsan/portfolio'} target="_blank">Github Code</a>
            </div>
            {/* Masters Recommender System */}
            <div className={(frontend || ml) ? 'project-item' : 'hide'}>
                <div className='project-type'>Full-Stack</div>
                <img className='project-img' src={require('../images/masters-recommender2.jpeg')}/>
                <div className='project-description'>
                  <h4 className='project-name'>Masters' Recommender</h4>
                  <h3 className='project-year'>FEB 2022 | JUN 2022</h3>
                  <hr/>
                  <div className='project-loc'>
                    <FaUniversity className='icon' size={20}/> Aalborg University
                  </div>
                  <p className='project-exp'>Recommend masters' based on user preferences</p>
                </div>
                <a className='check-btn' href={'https://github.com/Jasmau/ICTE_project'} target="_blank">Github Code</a>
            </div>
            {/* Electric Car */}
            <div className={electronics ? 'project-item' : 'hide'}>
                <div className='project-type'>Electronics</div>
                <img className='project-img' src={require('../images/emuf.jpeg')}/>
                <div className='project-description'>
                  <h4 className='project-name'>Formula Student <br/> Electric Car</h4>
                  <h3 className='project-year'>JAN 2019 | JAN 2021</h3>
                  <hr/>
                  <div className='project-loc'>
                    <FaUniversity className='icon' size={20}/> Mondragon University
                  </div>
                  <p className='project-exp'>Design and development of electronics</p>
                </div>
                <a className='check-btn' href={'https://www.youtube.com/watch?v=XsrA5gPb8_A'} target="_blank">Youtube Video</a>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Projects

