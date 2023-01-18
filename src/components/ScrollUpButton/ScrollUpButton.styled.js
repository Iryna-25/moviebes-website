import styled from "styled-components";

export const ScrollButton = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    cursor: pointer;

    & > svg {
        height: 50px;
        width: 50px;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease 0s;
        color: ${({ theme }) => theme.colors.accentColor};
        &:hover {
        color: ${({ theme }) => theme.colors.accentHoverColor}; 
        }
    }
`