import styled from "styled-components";

export const UpcomingGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 1em;
    padding: 0px 20px;
`

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
width: 100%;
border-radius: 20px;
transition: all 0.3s ease 0s;

:hover {
    transform: scale(1.04);
}
`;
