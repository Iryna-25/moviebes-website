import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const NavHeader = styled.header`
background-color: ${({theme}) => theme.colors.sideBarBackground};
border-radius: 0px 45px 45px 0px;
display: flex;
justify-content: center;
`;

export const NavContainer = styled.nav`
  margin-top: 170px;
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
  &:hover {
    background-color: ${({theme}) => theme.colors.accentColor};
    color: black;
    opacity: 0.4;
  }
  
  &.active {
    border-right: 3px solid #3DD2CC;
  }
`;