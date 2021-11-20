import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import Dots from './Dots';
import Arrows from './Arrows';
// import { clearInterval } from 'timers';
import SliderImage from './SliderImage';
import s from './SliderCarousel.module.scss';

const len = SliderImage.length - 1;

function Slider (props){
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect (() =>{
    const interval = setInterval(() =>{
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);      
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={s.sliderContainer}>
      <SliderContent activeIndex={activeIndex} SliderImage={SliderImage}/>
      <Arrows 
      prevSlide {()=> 
        setActiveIndex(activeIndex === len ? 0 : activeIndex - 1)
      }
      nextSlide {()=> 
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
      }
      />
      <Dots 
      activeIndex={activeIndex}
      SliderImage={SliderImage}
      onclick={(activeIndex:any) => setActiveIndex(activeIndex)}
      />
      </div>
  );
}

export default Slider;
