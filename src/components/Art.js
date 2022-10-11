import React, { Component } from 'react'
import './Art.css';


//carousel photos
import Carousel from 'better-react-carousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//typing animation
import { TypeAnimation } from 'react-type-animation';

function Art(){

  //Items for the carousel
  const handleDragStart = (e) => e.preventDefault();

  const items = [
      <img className='image' src="/img/Parrots.png" onDragStart={handleDragStart} role="presentation" />,
      <img className='image' src="/img/red-car.png" onDragStart={handleDragStart} role="presentation" />,
      <img className='image' src="/img/nemo.png" onDragStart={handleDragStart} role="presentation" />,
      <img className='image' src="/img/giant.png" onDragStart={handleDragStart} role="presentation" />,
      <img className='image' src="/img/enric.png" onDragStart={handleDragStart} role="presentation" />,
      <img className='image' src="/img/lemons.png" onDragStart={handleDragStart} role="presentation" />,
      <img className='image' src="/img/tentacle.png" onDragStart={handleDragStart} role="presentation" />,
      <img className='image' src="/img/swan.png" onDragStart={handleDragStart} role="presentation" />,        
  ];

  //Responsiveness 
  const responsive = {
      0: { items: 1 },
      600: { items: 2 },
      1250: { items: 3 },
      1300: { items: 4 },
  }
  
  return (
    <div className='art light-theme' id='art'>
      <div className='art-content'>
          <h2 className='white-text'>My Art.</h2>
          <h3 className='white-text description'>This is a showcase of the best paintings I created during this year (2022) using watercolor and black markers.</h3>
          <AliceCarousel className='carousel'
              autoPlay
              infinite
              animationDuration={3000}
              responsive={responsive}
              keyboardNavigation
              mouseTracking 
              items={items}
              paddingLeft={1}
              disableButtonsControls                
          />
      </div>
    </div>
  )
}

export default Art

