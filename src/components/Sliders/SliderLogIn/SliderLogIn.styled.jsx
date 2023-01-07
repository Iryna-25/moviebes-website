import styled from "styled-components";

export const Wrapper = styled.div `
  width: 100%;
  height: 100%;
  background-color: #191919;
  text-align: center;
  justify-content: center;
` 

export const ArrowRightStyles = styled.div `
  position: absolute;
  right: 25px;
  color: white;
  z-index: 1;
  cursor: pointer;
`

export const ArrowLeftStyles = styled.div `
  position: absolute;
  right: 50px;
  color: white;
  z-index: 1;
  cursor: pointer;
`

export const SliderLogInStyles = styled.div `
  height: 100%;
  position: relative;
`

export const SlideLogInStyles = styled.div `
  width: 100%;
  height: 100%;
  background-size: cover;
`

export const SliderLogInContainer = styled.div `
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const LogoWrapper = styled.div `
  display: flex;
  position: absolute;
  margin: 50px 0px 0px 62px;
`

export const Pic = styled.img `
  width: 35px;
  height: 35px;
  margin-right: 9px;
`

export const Logo = styled.img `
  width: 100px;
  height: 40px;
`

export const TextWithLine = styled.p `
  display: flex;
  flex-direction: row;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.borderButtonColor};
  margin: 44px auto;
  width: 395px;

&:before, 
&:after{
  content: "";
  flex: 1 1;
  border-bottom: 1px solid;
  margin: auto;
}
&:before {
  margin-right: 10px;
}
&:after {
  margin-left: 10px;
}
`