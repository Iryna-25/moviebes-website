import { Wrapper, TextWrapper } from "./SliderSignUp.styled";
import TextToSlider from "./TextToSlider";
import {Logo, Pic, LogoWrapper} from "../../ElementToCaver/Logo/Logo";
import LogoDark from "../../../assets/pictures/LogoDark.png";
import PicDark from "../../../assets/pictures/PicDark.png";

export const SliderSignUp = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Pic src={PicDark} />
                <Logo src={LogoDark}/>
            </LogoWrapper>
            <TextWrapper>
                <TextToSlider
                    title="Benefits of your free IMDb account"
                    text="Personalized Recommendations"
                    subtext="Discover shows you'll love."
                />
                
                <TextToSlider
                    text="Your Ratings"
                    subtext="Rate and remember everything you've seen."
                />

                <TextToSlider
                    text="Contribute to IMDb"
                    subtext="Add data that will be seen by millions of people and get cool badges."
                />
            </TextWrapper>
        </Wrapper>
    )
};