import { Outlet } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;