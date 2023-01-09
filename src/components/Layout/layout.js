import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router";
import { LayoutBox, OutletWrapper } from "./Layout.styled";

export const Layout = () => {
    return (
        <>
            <LayoutBox>
                <AppBar />   
            </LayoutBox>

            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
        </>
        
    )
}