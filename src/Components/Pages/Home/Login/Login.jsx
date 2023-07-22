import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../../Utilities/Hooks/useAuth";
import { useRef, useState } from "react";
import SocialLogin from "../../../Shared/SocialLogin";
import { toast } from "react-hot-toast";

const Login = () => {
    // show pass and hide pass
    const [show, setShow] = useState();

    const { userLogIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { resetPassword } = useAuth();
    const emailRef = useRef();

    // handleUserLogin function
    const handleUserLogin = (event) => {
        // stop reloading
        event.preventDefault();
        // get the info form the field
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // userLogIn function
        userLogIn(email, password).then(result => {
            const logIn = result.user;
            // show the toast
            toast.success('Log in Successful')
            navigate(from, { replace: true })
        })
            .catch(error => {
                toast.error('Wrong Password')
                console.log(error);
            })
        // reset the from
        form.reset()
    }

    // handleReset function
    const handleReset = () => {
        const passReSet = emailRef.current.value;
        if (!passReSet) {
            toast.error('Set your email on email field')
            return
        }
        resetPassword(passReSet)
            .then(() => {
                toast.success('Please Check Your Email')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div
            className="max-w-7xl mx-auto">
            <>
                <div>
                    <h2
                        className="text-4xl font-bold text-center text-yellow-400">
                        Please Login
                    </h2>
                    <p
                        className="text-lg font-bold text-center mt-2">
                        Login Here
                    </p>
                </div>
                <div className="font-bold">
                    <div className="hero max-w-7xl mx-auto">
                        <div
                            className="hero-content gap-0 justify-evenly">
                            <div
                                className="text-center w-[50%] lg:text-left">
                                <img
                                    className="rounded-2xl"
                                    src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1690006416~exp=1690007016~hmac=43fa8066450d89e381d3cd8e77be08efd24bf0baafb6cdb3d8328172662371d0"
                                    alt="" />
                            </div>
                            <div
                                className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <h1
                                        className="text-center text-3xl py-2 text-yellow-400">
                                        College Hub
                                    </h1>
                                    <hr className="border-b border-solid border-2" />
                                    {/* login form start */}
                                    <form
                                        onSubmit={handleUserLogin}>
                                        <div className="form-control">
                                            <label
                                                className="label">
                                                <span
                                                    className="label-text text-yellow-400">
                                                    Enter Your Email
                                                </span>
                                            </label>
                                            <input
                                                name="email"
                                                type="text"
                                                ref={emailRef}
                                                placeholder="Enter Your Email"
                                                className="input input-bordered"
                                                required />
                                        </div>
                                        <div
                                            className="form-control">
                                            <label
                                                className="label">
                                                <span
                                                    className="label-text text-yellow-400">
                                                    Enter Your Password
                                                </span>
                                            </label>
                                            <input
                                                name="password"
                                                type={show ?
                                                    'text'
                                                    :
                                                    'password'
                                                }
                                                placeholder="Enter Your Password"
                                                className="input input-bordered"
                                                required />
                                            {/* show or hide btn */}
                                            <p
                                                onClick={() => setShow(!show)}
                                                className="relative bottom-9 left-60 md:left-64 text-3xl">
                                                <small>
                                                    {
                                                        show ?
                                                            <span>
                                                                <FaEyeSlash />
                                                            </span>
                                                            :
                                                            <span>
                                                                <FaEye />
                                                            </span>
                                                    }
                                                </small>
                                            </p>
                                            <label
                                                onClick={handleReset}
                                                className="text-slate-600 relative bottom-4 link link-hover">
                                                <small>
                                                    Forget Password?
                                                </small>
                                            </label>
                                            {/* sign in with google start */}
                                            <SocialLogin />
                                            {/* sign in with google end */}
                                            <label
                                                className="label mt-2 text-center">
                                                <small
                                                    className="text-neutral-700 text-center mx-auto">
                                                    Don't Have an Account?
                                                    <br />
                                                    New to Art Summer Camp? Please <Link
                                                        to='/registration'
                                                        className="font-extrabold text-yellow-400 hover:link">
                                                        Sign Up
                                                    </Link>
                                                </small>
                                            </label>
                                        </div>
                                        {/* submit btn */}
                                        <div
                                            className="form-control mt-6"
                                            type="submit">
                                            <button
                                                className="btn bg-yellow-400 text-white font-bold hover:text-black link-hover">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        </div>
    );
};

export default Login;