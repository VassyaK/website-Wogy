import s from "./Carousel.module.scss";
import cn from "classnames";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

interface IProps{
  images: any[];}

const Carousel: React.FC<IProps> = ({ images }) => {
  const carousel = useRef(document.createElement("div"));
  
  let position = 0

  const prevHandler = () => {
    console.log(position)
    if (position !== 0) {     
      position+= 524      
      
    } else {
      position = -(524 * images.length - 3 * 524)
    }
    carousel.current.childNodes.forEach((element:any) => {
      element.style = `transform: translateX(${position}px)`  
    })
 }
  const nextHandler = () => {
    console.log(position)
    if (position !== -(images.length - 3) * 524  + 524 ) {
      position-= 524         
    } else {
      position = 0
    } 
    carousel.current.childNodes.forEach((element:any) => {
      element.style = `transform: translateX(${position}px)`
    });
  };

   return (
    <div className={s.Carousel}>
      <div className={s.CarouselTrack} ref={carousel}>
        {images.map((img) => (
          <img
            className={s.Carouselimg}
            src={img.urls}
            key={img.urls}
            alt={img.title}
          />
        ))}
      </div>
      <Button
        className={cn(s.KarouselButton, s.KarouselButtonPrev)}
        onClick={prevHandler}
      >
        <ArrowBackIosIcon />
      </Button>
      <Button
        className={cn(s.KarouselButton, s.KarouselButtonNext)}
        onClick={nextHandler}
      >
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default Carousel;
