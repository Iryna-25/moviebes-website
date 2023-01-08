import styled from "styled-components";


export const Title = styled.h1`
font-size: ${({theme}) => theme.colors.pageBackground};
font-weight: ${({theme}) => theme.fontSizes.medium};
margin: 37px 37px 27px 37px;
`;

export const MovieColumn = styled.li`
display: flex;
align-items: center;
justify-content: center;
`;

export const MovieImg = styled.img`
width: 262px;
border-radius: 20px;
`;