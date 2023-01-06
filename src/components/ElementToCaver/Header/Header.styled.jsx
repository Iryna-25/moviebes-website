import styled from "styled-components";

export const Title = styled.h1 `
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: 35px;
    color: #FEFEFE;
    text-align: center;
    
    padding-top: 166px;
`

export const Subtitle = styled.h3 `
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: 19px;
    text-align: center;
    color: ${p => p.theme.colors.thirdTextColor};
    
    margin-top: 14px;
`