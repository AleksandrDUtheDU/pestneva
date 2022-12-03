import { Outlet } from 'react-router-dom';


import NavState from '../widgets/navMenu/navState';
import MainMenu from '../widgets/navMenu/mainMenu';
import Footer from '../widgets/Footer'



function Layout() {
    return (
        <>
            <NavState>
                <MainMenu />
            </NavState>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;