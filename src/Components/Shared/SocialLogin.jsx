import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Utilities/Hooks/useAuth";

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
        <span
            onClick={handleGoogleSignIn}>

        </span>
    );
};

export default SocialLogin;