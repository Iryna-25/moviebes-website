import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";


export const Wrapper = styled.div `
  width: 100%;
  margin: 20px auto;
  height: 150px;
`

export const SlideImg = styled.img `
  width: 50rem;
  margin: 0 auto;
`

export const Slide = styled.div `
  transition: transform 300ms;
  transform: scale(0.8); 
  opacity: 0.5;  

  ${({active}) => active&&`
    transform: scale(1);
    opacity: 1;
  `}
`

export const ArrowNext = styled.div `
  background-color: #fff;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  right: 0%;
  top: 50%;
`

export const ArrowPrev = styled.div `
  background-color: #fff;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  left: 0%;
  top: 50%;
`