import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";


export const Wrapper = styled.div `
  width: 70%;
  margin: 20px auto;
  height: 100%;

  @media(max-width:${({theme}) => theme.layout.mobile}) {
    display: none;
}
`

export const SlideImg = styled.img `
  width: 50rem;
  margin: 20 auto;
  border-radius: 7%;
`

export const Slide = styled.div `
  transition: transform 300ms;
  transform: scale(0.8); 
  opacity: 0.3;  

  ${({active}) => active&&`
    transform: scale(1);
    opacity: 1;
  `}
`

export const ArrowNext = styled.div `
  color: ${({theme}) => theme.colors.secondaryTextColor}; 
  position: absolute;
  cursor: pointer;
  z-index: 10;
  right: -10%;
  top: 50%;
  transition: all 0.3s ease 0s;

  & > svg {
    font-size: 40px;
  }

  &:hover,
  &:focus {
    color: ${({theme}) => theme.colors.accentColor}; 
  }
`

export const ArrowPrev = styled.div `
  color: ${({theme}) => theme.colors.secondaryTextColor}; 
  position: absolute;
  cursor: pointer;
  z-index: 10;
  left: -10%;
  top: 50%;
  transition: all 0.3s ease 0s;

  & > svg {
    font-size: 40px;
  }

  &:hover,
  &:focus {
    color: ${({theme}) => theme.colors.accentColor}; 
  }
`