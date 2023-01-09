import styled from "styled-components";


export const MovieDetailSection = styled.section`
display: flex;


`;

export const PosterContainer = styled.section`

img {
    margin: 37px 20px 27px 37px;
    width: 322px;
    border-radius: 30px;
}

`;

export const TitleContainer = styled.div`
width: 700px;

`

export const GeneresContainer = styled.div`
color: ${({theme}) => theme.colors.secondaryTextColor};
display: flex;
margin: 37px 15px 0px 0px;



span {
    font-weight: 400;
    text-align: center;
    font-size: 10px;
    border: 1px solid #E8E8E8;
    border-radius: 15px;
    padding: 4px 10px;
    margin: 0px 0px 0px 15px;
}
`;

export const MovieOverview = styled.p`
font-weight: 400;
font-size: 16px;
margin: 27px 0px 0px 0px;
p {
    margin: 20px 0px 0px 0px;
}
`;

export const MovieTitle = styled.h1`
display: flex;


& > div {
    text-align: center;
    align-items: center;
    display: flex;
    font-size: 25px;
    margin: 37px 15px 0px 0px;
}

h2, p {
    font-size: 25px;
}

p {
    margin: 0 0 0 15px;
}


`