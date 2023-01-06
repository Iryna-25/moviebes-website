import React from "react";
import { SubTextStyle, TextStyle, TitleStyle } from "./SliderSignUp.styled";

const TextToSlider = ({title, text, subtext}) => (
   <>
        <TitleStyle> {title} </TitleStyle>
        <TextStyle> {text} </TextStyle>  
        <SubTextStyle> {subtext} </SubTextStyle>           
    </>
);

export default TextToSlider;