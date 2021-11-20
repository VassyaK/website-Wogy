import React from 'react';
import s from './SliderCarousel..module.scss';

const Arrows = ({prevSlide, nextSlide}: any) => {
  
  return(
    <div className={s.arrows}>
      <span className={s.prev} onClick={prevSlide}>&#10094;</span>
      <span className={s.next} onClick={nextSlide}>&#10095;</span>

    </div>
  );
}

export default Arrows