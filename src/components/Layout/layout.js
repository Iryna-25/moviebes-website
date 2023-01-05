import { AppBar } from "components/AppBar/AppBar";
import { Box } from "components/Box";
import { Outlet } from "react-router";
// import Loader from "components/Suspense/Loader";

export const Layout = () => {
    return (
        <Box display="grid" gridTemplateColumns="200px 1fr">
            <AppBar />
            <Outlet />
            {/* <Loader /> */}
        </Box>
    )
}