import styled from "styled-components";

export const SearchedMovieGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 1em;
    padding: 0px 20px;
`

export const MoviesColumn = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MovieImg = styled.img`
    width: 262px;
    border-radius: 20px;
    transition: all 0.3s ease 0s;
    position: relative;
    top: 0;
    left: 0;

:hover {
    transform: scale(1.04);
}
`;
