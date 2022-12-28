import React, { useState } from "react";
import ArrowLeft from "./Arrow-left.svg";
import ArrowRight from "./Arrow-right.svg";
import { ArrowLeftStyles, ArrowRightStyles, SliderStyles, SlideStyles} from "./Slider.style";

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex]})`,
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <SliderStyles>
            <ArrowLeftStyles
                onClick={goToPrevious}>
                <img src={ArrowLeft} 
                alt="Arrow-left"/>  
            </ArrowLeftStyles>
            <ArrowRightStyles 
                onClick={goToNext}>         
                <img src={ArrowRight} 
                alt="Arrow-right" />
            </ArrowRightStyles>
            <SlideStyles style={slideStyles} />
        </SliderStyles>
    )
};

export default Slider;


