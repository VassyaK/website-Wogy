import s from "./Carousel.module.scss";
import { images } from "./constants";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import cn from "classnames";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

const Carousel = () => {
  const carousel = useRef(null);
  // const Carousel = useRef (null)
  // const [prev, setPrev] = useState (false)
  // const [next, setNext] = useState (false)
  // let position = 0

  // const prevHandler = () => {
  //   if (position === 0) {
  //     setPrev (true)
  //   } else {
  //     position+=300
  //     setPrev(false)
  //
  //   }
  // }
  // const nextHandler = () => {
  //   if (position <=-(images.length - 6)*100) {
  //     setNext (true)
  //   } else {
  //     position -= 300
  //     setNext(false)
  //   Carousel.current.childNodes.forEach((element:any) => {
  //   element.style = `transform: translateX(${position}px)`}
  // );
  const prevHandler = () => {
    console.log(carousel.current.childNodes);
    // carousel.current.childNodes.forEach((element:any) => {
    //   element.style = `transform: translateX(300px)`
    // });
  };
  const nextHandler = () => {
    console.log("next");
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
