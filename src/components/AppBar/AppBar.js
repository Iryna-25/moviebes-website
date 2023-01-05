import { NavItem, NavHeader, NavContainer } from "./AppBar.styled"

export const AppBar = () => {
    return (
        <NavHeader>
            <div width="100px" height="40px" background-color="#3DD2CC" marginTop="56px">

            </div>
            <NavContainer>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/moviespage'}>Movies</NavItem> 
            </NavContainer>
        </NavHeader>
    )
}