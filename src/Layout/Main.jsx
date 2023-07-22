import { Outlet } from "react-router-dom";
import NavBar from "../Components/Pages/Home/NavBar/NavBar";
import Footer from "../Components/Pages/Home/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div className="overflow-y-hidden">
            <NavBar />
            <Outlet />
            <Footer />
            <Toaster/>
        </div>
    );
};

export default Main;