import React from 'react';
import s from './SliderCarousel..module.scss';

function SliderContent ({activeIndex, sliderImage}:any){
  
  return(
    <section>
      {sliderImage.map((slide:any, index:any) => (
        <div key={index} className={`${index === activeIndex ? {`${s.slides} ${s.activ}`} : {s.inActiv}}`}>
           <img className={s.sliderImage} src={slide.urls} alt="" />
           <h2 className={s.slideTitle}>{slide.title}</h2>
           <h3 className={s.slideText}>{slide.discription}</h3>
        </div>))}
       
    </section>
  );
}

export default SliderContent