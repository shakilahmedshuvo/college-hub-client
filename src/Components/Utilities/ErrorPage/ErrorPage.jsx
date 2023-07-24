import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <div className='text-center pt-3'>
            <div className='lg:w-[50%] sm:w-full mx-auto'>
                <img
                    className='mx-auto lg:w-[60%] sm:w-[100%] rounded-lg pt-6'
                    src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7891.jpg?w=740&t=st=1690022770~exp=1690023370~hmac=59f397236bb6e27faef6d04517409f634d30228f7f62b2a919ac0727859b51ab"
                    alt="404 page Not Found" />
            </div>
            <p
                className='font-bold text-xl py-2'>
                404 Not Found
                <br />
                {error?.message}
            </p>
            <p
                className="py-4">
                <Link
                    to='/'
                    className='no-underline font-extrabold btn btn-warning rounded-lg btn-wide '>
                    Back To Home
                </Link>
            </p>
        </div>
    );
};

export default ErrorPage;