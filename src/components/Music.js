import React, { Component } from 'react'
import './Music.css';

//Video player
import ReactPlayer from 'react-player'

//react-icons:
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiApplemusic } from "react-icons/si";

export default class Music extends Component {
  render() {
    return (
        <div className='music dark-theme' id='music'>
            <div className='music-content'>
                <h2>My Music.</h2>
                <h3>I’ve played the guitar since I was a kid and started to freestyle rap some years ago. <br></br>I recently uploaded my first rap song in spanish called “Tiempo (time)”, entirely produced by me.</h3>
                <div className='media-apps'>
                    <ReactPlayer className='video' url='https://youtu.be/9frRo4Q8Gjo' 
                    controls={true}
                    />
                    <ul className='app-list'>
                        <li>
                            <h4>VIDEO PRODUCTION</h4>
                        </li>
                        <li>
                            <h3><SiAdobephotoshop className='app-icon'/> Photoshop</h3>
                        </li>
                        <li>
                            <h3><SiAdobeaftereffects className='app-icon'/> After Effects</h3>
                        </li>
                        <li>
                            <h3><SiAdobepremierepro className='app-icon'/> Premiere Pro</h3>
                        </li>
                        <li>
                            <h4>SONG PRODUCTION</h4>
                        </li>
                        <li>
                            <h3><SiApplemusic className='app-icon'/> Fl studio</h3>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
  }
}
