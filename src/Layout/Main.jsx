import { Outlet } from "react-router-dom";
import NavBar from "../Components/Pages/Home/NavBar/NavBar";
import Footer from "../Components/Pages/Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;