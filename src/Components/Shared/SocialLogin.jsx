import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Utilities/Hooks/useAuth";
import googleLogo from "../../assets/logo/google.png"
import { toast } from "react-hot-toast";

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
                const saveUser =
                {
                    name: loggedInUser.displayName,
                    email: loggedInUser.email
                }
                fetch('https://college-hub-server-hazel.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        toast.success('Your Google Login Successful')
                    })
            })
    };

    return (
        <div
            className="w-full max-w-sm mx-auto">
            {/* divider */}
            <div className="divider mt-0">
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