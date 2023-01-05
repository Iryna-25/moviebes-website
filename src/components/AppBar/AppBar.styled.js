import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const NavHeader = styled.header`
background-color: ${({theme}) => theme.colors.sideBarBackground};
border-radius: 0px 45px 45px 0px;
display: flex;
justify-content: center;
flex-direction: column;
`;

export const Logo = styled.img`
width: 100px;
height: 40px;
margin: 56px 50px 100px 50px;
`

export const NavContainer = styled.nav`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  margin-bottom: 50px;
`;

export const NavItem = styled(NavLink)`
  color: ${({theme}) => theme.colors.primaryTextColor};
  font-weight: ${({theme}) => theme.fontWeights.medium};
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: 40px 0px 37px 25px;

  & > svg {
    font-size: 25px;
  }
  & > span {
    font-size: 20px;
    margin-left: 15px;
  }
  &:hover {
    background-color: ${({theme}) => theme.colors.accentHoverColor};
    color: ${({theme}) => theme.colors.accentColor}; 
  }
  &.active {
    background-color: ${({theme}) => theme.colors.accentHoverColor};
    color: ${({theme}) => theme.colors.accentColor}; 
    border-right: 3px solid ${({theme}) => theme.colors.accentColor};
  }
`;
