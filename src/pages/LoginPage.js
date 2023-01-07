import React from "react";

import Header from "../components/ElementToCaver/Header/Header";
import Input from "../components/ElementToCaver/Input/Input";
import Button from "../components/ElementToCaver/Button/Button";
import ButtonGoogle from "../components/ElementToCaver/Button/ButtonGoogle";
import Footer from "../components/ElementToCaver/Footer/Footer";
import { Container } from "components/Sliders/Container/Container.styled";
import SliderLogIn from "components/Sliders/SliderLogIn/SliderLogIn";
import {SliderLogInContainer, TextWithLine, Wrapper } from "components/Sliders/SliderLogIn/SliderLogIn.styled";
import LogoLight from "../assets/pictures/Logo.png";
import PicLight from "../assets/pictures/PicLight.png";
import { Logo, LogoWrapper, Pic } from "../components/ElementToCaver/Logo/Logo";


export const LoginPage = () => {
    const slides = [
    ];

    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Pic src={PicLight} />
                    <Logo src={LogoLight}/>
                </LogoWrapper>

                <Header
                    title="Welcome back, Olivia"
                    subtitle="Welcome back! Please enter your details."
                />

                <ButtonGoogle
                    text="Log in with Google"
                />

                <TextWithLine>
                    or
                </TextWithLine>

                <Input
                    type="text"
                    placeholder="Email"
                />

                <Input
                    type="password"
                    placeholder="Password"
                />

                <Button
                    text="Log in"
                />

                <Footer
                    text="Don’t have an account ?"
                    to="/signuppage"
                    link="Sign up for free"
                />
            </Wrapper>
            <SliderLogInContainer> <SliderLogIn slides={slides}/></SliderLogInContainer> 
        </Container>
    );

}

export default LoginPage;