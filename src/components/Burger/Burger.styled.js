import styled from 'styled-components';


export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? "#E8E8E8" : "#3DD2CC"};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .3s ease 0s;

        &:nth-child(1) {
            transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
        }

        @media(min-width:${({theme}) => theme.layout.mobile}) {
            display: none;
        }
    }
`;