import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiBookAura } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import useAuth from "../../../Utilities/Hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth();

    // handleLogOut function
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error));
    };

    // nav item 
    const navBarItems =
        <>
            <li className="text-lg">
                <Link
                    to="/"
                    className="hover:text-gray-900 hover:text-2xl">
                    <FaHome /> Home
                </Link>
            </li>
            <li className="text-lg">
                <Link
                    to="/colleges"
                    className="hover:text-gray-900 hover:text-2xl">
                    <GiBookAura /> Colleges
                </Link>
            </li>
            <li className="text-lg">
                <Link
                    to="/admission"
                    className="hover:text-gray-900 hover:text-2xl">
                    <MdOutlineCastForEducation /> Admission
                </Link>
            </li>
            <li className="text-lg">
                <Link
                    to="/myCollege"
                    className="hover:text-gray-900 hover:text-2xl">
                    <ImBooks /> My College
                </Link>
            </li>
            {/* conditional rendering */}
            {
                user ?
                    <>
                        {/* tooltip show and the profile picture */}
                        <Link
                            to={`/users/${user?.email}`}
                            className="tooltip tooltip-bottom flex justify-center items-center font-bold text-lg hover:text-gray-900 hover:text-2xl"
                            data-tip={"Tap Go Your Profile & Edit Profile"}>
                            {user?.displayName}
                            <img
                                className="w-12 h-12 rounded-full ms-2 border-2 border-yellow-500"
                                src=
                                {
                                    user?.photoURL
                                }
                                alt="" />
                        </Link>
                        <li className="text-lg">
                            <Link
                                onClick={handleLogOut}
                                className="btn-ghost hover:text-gray-900 hover:text-2xl">
                                Log Out <FiLogOut
                                    className="text-2xl">
                                </FiLogOut>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        <li className="text-lg">
                            <Link
                                className="btn-ghost hover:text-gray-900 hover:text-2xl"
                                to="login">
                                Log In <FiLogIn
                                    className="text-2xl">
                                </FiLogIn>
                            </Link>
                        </li>
                    </>
            }
        </>

    // dark mode toggler
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("business");
        }
        else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div
            className="font-bold fixed z-10 w-full bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90%">
            <div
                className="navbar max-w-7xl mx-auto p-0">
                <div
                    className="navbar-start ">
                    <img
                        className="lg:ms-0 ms-2 w-[15%] rounded-full"
                        src="https://img.freepik.com/premium-vector/university-logo-design-vector-template_644408-1816.jpg?w=740"
                        alt="" />
                    <Link
                        to='/'
                        className="btn btn-ghost normal-case text-3xl font-bold text-center">
                        College Hub
                    </Link>
                </div>
                {/* for lg device */}
                <div
                    className="navbar-center hidden lg:flex ms-16">
                    <ul
                        className="menu menu-horizontal px-1">
                        {navBarItems}
                    </ul>
                </div>
                <div
                    className="navbar-end font-bold">
                    {/* dark mode toggler start */}
                    <label
                        className="swap swap-rotate">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light"
                                ?
                                false : true} />
                        <div
                            className="swap-on">
                            <svg
                                className="fill-current w-8 h-8 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                        </div>
                        <div
                            className="swap-off">
                            <svg
                                className="fill-current w-8 h-8 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </div>
                    </label>
                    {/* dark mode toggler start */}
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden">
                            <HiOutlineMenuAlt3 className="text-3xl ms-3" />
                        </label>
                        {/* for md and sm device */}
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 relative right-0 bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90%">
                            {navBarItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;