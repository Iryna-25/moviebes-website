import styled from "styled-components";

export const Paragraf = styled.p `
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.thirdTextColor};
    
    margin-top: 20px;
    text-align: center;
    justify-content: center;
`

export const Item = styled.a `
    a:link {
        font-family: ${p => p.theme.fonts.body};
        font-weight: ${p => p.theme.fontWeights.normal};
        font-size: ${p => p.theme.fontSizes.m};
        color: ${p => p.theme.colors.primaryBackgroundButton};
        
        margin-top: 20px;
        text-decoration: none;
        text-align: center;
        justify-content: center;
    }
    
    a:visited {
        color: ${p => p.theme.colors.primaryBackgroundButton};;
    }
`