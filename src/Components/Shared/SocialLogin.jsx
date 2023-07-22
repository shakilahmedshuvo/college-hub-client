import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Utilities/Hooks/useAuth";
import googleLogo from "../../assets/logo/google.png"

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handleGoogleSignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true });
            })
    }
    return (
        <div
            className="w-full max-w-sm mx-auto">
            {/* divider */}
            <div className="divider">
                Or
            </div>
            {/* Google sigIn start */}
            <div
                onClick={handleGoogleSignIn}
                className="border-2 rounded-full flex items-center my-2 px-8">
                <img
                    className="w-[10%] m-2"
                    src={googleLogo}
                    alt="" />
                <p
                    className="mx-auto pr-6 text-lg">
                    Continue with Google
                </p>
            </div>
            {/* Google sigIn end */}
        </div>
    );
};

export default SocialLogin;