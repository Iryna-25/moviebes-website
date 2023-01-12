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
transition: all 0.3s ease 0s;


:hover {
    transform: scale(1.04);
}
`;

export const LoadMore = styled.button`
    margin-top: 20px;
`