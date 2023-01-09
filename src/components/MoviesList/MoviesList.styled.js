import styled from "styled-components";

export const MoviesColumn = styled.li`
display: flex;
align-items: center;
justify-content: center;
`

export const MovieImg = styled.img`
width: 262px;
border-radius: 20px;
transition: all 0.3s ease 0s;

:hover {
    transform: scale(1.04);
}
`;