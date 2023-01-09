import styled from "styled-components";


export const MovieDetailSection = styled.section`


`;

export const TrailerContainer = styled.section`


`;

export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;

`

export const GeneresContainer = styled.div`
color: ${({theme}) => theme.colors.secondaryTextColor};
display: flex;
flex-direction: column;

span {
    font-weight: 400;
    font-size: 12px;
}
`;

export const MovieOverview = styled.p`
color: ${({theme}) => theme.colors.secondaryTextColor};
font-size: 20px;
margin: 27px 0px 0px 55px;
`;

export const MovieTitle = styled.h1`
color: ${({theme}) => theme.colors.secondaryTextColor};
font-size: 25px;
margin: 25px 0px 0px 55px;
`