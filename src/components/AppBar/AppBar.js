import { NavItem, NavHeader, NavContainer, Logo } from "./AppBar.styled"
import LogoPic from "../../assets/pictures/Logo.png";
import { BsCameraReels } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";

export const AppBar = () => {
    return (
        <NavHeader>
            <Logo src={LogoPic}/>

            
            <NavContainer>
                <NavItem to={'/'}><BiHomeAlt/><span>Home</span></NavItem>
                <NavItem to={'/moviespage'}><BsCameraReels/><span>Movies</span></NavItem> 
            </NavContainer>
        </NavHeader>
    )
}