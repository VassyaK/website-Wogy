import React from 'react';
import s from './SliderCarousel..module.scss';

function Dots ({activeIndex, onclick, sliderImage}: any){
  
  return(
    <div className={s.allDots}>
      {sliderImage.map((slide, index) => (
        <span 
        key={index} 
        className={`${activeIndex === index ? {s.dot, s.activeDot} : {s.dot}}`}
        onClick={()=> onclick(index)}></span>
        ))}
    </div>
  );
}

export default Dots