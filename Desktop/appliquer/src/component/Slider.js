import React from 'react';
import './slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    
  return (
      <Carousel>
          <div className='slider'>1</div>
          <div className='slider'>2</div>
          <div className='slider'>3</div>
          <div className='slider'>4</div>
   </Carousel>
  )
}
