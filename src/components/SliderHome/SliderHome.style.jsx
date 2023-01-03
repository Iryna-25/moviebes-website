import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

// .A {
//   width: 50%;
//   margin: 10rem auto;
//   height: 70px;
// }

export const Wrapper = styled.div `
  width: 50%;
  margin: 10rem auto;
  height: 70px;
`

// .slide img {
//   width: 9rem;
//   margin: 0 auto;
// }

export const SlideImg = styled.img `
  width: 9rem;
  margin: 0 auto;
`

// .slide {
//   transform: scale(0.2);
//   transition: transform 300ms;
//   opacity: 0.5;
// }

export const Slide = styled.div `
  transition: transform 300ms;
  transform: ${({ active }) => (active ? "scale(0.2)" : "scale(1.1)")};
  opacity: ${({ active }) => (active ? "0.5" : "1")};
`

// .activeSlide {
//   transform: scale(1.1);
//   opacity: 1;
// }

export const SlideActive = styled.div `
  transform: scale(1.1);
  opacity: 1;
`

/* .arrow {
  background-color: #fff;
  position: absolute;
  cursor: pointer;
  z-index: 10;
}

.arrow svg {
  transition: color 300ms;
}

.arrow svg:hover {
  color: #68edff;
}

.next {
  right: 0%;
  top: 50%;
}

.prev {
  left: 0%;
  top: 50%;
} */

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