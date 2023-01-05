import styled from "styled-components";

export const Wrapper = styled.div `
width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Checkmark  = styled.svg `
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #3DD2CC;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
  
  circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 6;
    stroke-miterlimit: 10;
   /* #4D4B4B; */
    stroke: #3DD2CC;
    animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
  }

  path {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
  }
  
  @keyframes scale {
    0%, 100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #3DD2CC;
    }
  } 
`