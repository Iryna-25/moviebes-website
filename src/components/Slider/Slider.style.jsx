import styled from "styled-components";

export const ArrowRightStyles = styled.div `
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 0px;
    color: white;
    z-index: 1;
    cursor: pointer
`

export const ArrowLeftStyles = styled.div `
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 0px;
    color: white;
    z-index: 1;
    cursor: pointer
`

export const SliderStyles = styled.div `
    height: 100%;
    position: relative;
`

export const SlideStyles = styled.div `
    width: 100%;
    height: 100%;
    background-size: cover;
`

export const SliderContainer = styled.div `
    width: 100%;
    height: 100%;
    margin: 0 auto;
`