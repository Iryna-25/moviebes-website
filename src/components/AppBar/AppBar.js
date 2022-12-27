import { NavItem } from "./AppBar.styled"

export const AppBar = () => {
    return (
        <header>
            <nav>
                <NavItem to={'homepage'}>Home</NavItem>
                <NavItem to={'moviespage'}>Movies</NavItem> 
            </nav>
        </header>
    )
}