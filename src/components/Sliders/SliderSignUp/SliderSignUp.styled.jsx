import styled from "styled-components";

export const Wrapper = styled.div `
  width: 936px;
  margin: 0px auto;
  height: 982px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${"https://picsum.photos/200/300"});
  background-repeat: no-repeat;
  background-size: cover;
`

export const TextWrapper = styled.div `
  text-align: left;
  justify-content: center;
  margin-top: 400px;
  margin-left: 57px;
` 

export const TitleStyle = styled.h1 `
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primaryBackgroundButton};
  margin-bottom: 30px;
`

export const TextStyle = styled.h2 `
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primaryBackgroundButton};
  margin-top: 10px;
`

export const SubTextStyle = styled.p `
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primaryBackgroundButton};
  margin-top: 0px auto;
`





