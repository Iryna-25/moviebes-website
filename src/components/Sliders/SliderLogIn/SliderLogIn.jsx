import React, { useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { ArrowLeftStyles, ArrowRightStyles, SliderLogInStyles, SlideLogInStyles} from "./SliderLogIn.styled";

const SliderLogIn = ({slides}) => {
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
        <SliderLogInStyles>
            <ArrowLeftStyles
                onClick={goToPrevious}>
                <BsArrowLeftCircle/>  
            </ArrowLeftStyles>
            <ArrowRightStyles 
                onClick={goToNext}>         
                <BsArrowRightCircle/>
            </ArrowRightStyles>
            <SlideLogInStyles style={slideStyles} />
        </SliderLogInStyles>
    )
};

export default SliderLogIn;


