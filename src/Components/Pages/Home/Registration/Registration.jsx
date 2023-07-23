import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../../Utilities/Hooks/useAuth";
import { toast } from "react-hot-toast";

const Registration = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // on submit function
    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                // add name and photoURL
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        toast.success('Successfully Register')
                        navigate('/');
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };

    return (
        <div
            className="bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90%">
            <div
                className="max-w-7xl mx-auto pt-20">
                <>
                    <div>
                        <h2
                            className="text-4xl font-bold text-center text-yellow-400">
                            Please Registration
                        </h2>
                        <p
                            className="text-lg font-bold text-center mt-2">
                            Registration here
                        </p>
                    </div>
                    <div className="font-bold pb-10" data-aos="zoom-out">
                        <div
                            className="hero max-w-7xl mx-auto">
                            <div
                                className="hero-content gap-0 justify-start mx-auto">
                                <div
                                    className="text-center w-[62%] lg:text-left mx-auto">
                                    <img
                                        className="rounded-2xl mx-auto"
                                        src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1690110747~exp=1690111347~hmac=27eb00c9c19620d9b2b6fba439f31cd586fdc01b0325d9fd3a4074d47d3516b9"
                                        alt="" />
                                </div>
                                <div
                                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body justify-around">
                                        <h1
                                            className="text-center text-2xl py-1 text-yellow-400">
                                            College Hub
                                        </h1>
                                        <hr
                                            className="border-b border-solid border-2" />
                                        {/* Registration form start */}
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}>
                                            <div
                                                className="form-control">
                                                <label
                                                    className="label">
                                                    <span
                                                        className="label-text text-yellow-400">
                                                        Enter Your Name
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("name",
                                                        { required: true })
                                                    }
                                                    name="name"
                                                    placeholder="Name"
                                                    className="input input-bordered" />
                                                {
                                                    errors.name &&
                                                    <span
                                                        className="text-red-600">
                                                        Name is required
                                                    </span>
                                                }
                                            </div>
                                            <div
                                                className="form-control">
                                                <label
                                                    className="label">
                                                    <span
                                                        className="label-text text-yellow-400">
                                                        Enter Your Email
                                                    </span>
                                                </label>
                                                <input
                                                    type="email"
                                                    {...register("email",
                                                        { required: true })
                                                    }
                                                    name="email"
                                                    placeholder="email"
                                                    className="input input-bordered" />
                                                {
                                                    errors.email &&
                                                    <span
                                                        className="text-red-600">
                                                        Email is Required
                                                    </span>
                                                }
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
                                                    type="password"
                                                    {...register("password",
                                                        {
                                                            required: true,
                                                            minLength: 6,
                                                            maxLength: 20,
                                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                        })
                                                    }
                                                    placeholder="Password"
                                                    className="input input-bordered" />
                                                {
                                                    errors.password?.type === 'required' &&
                                                    <p
                                                        className="text-red-600">
                                                        Password is Required
                                                    </p>
                                                }
                                                {
                                                    errors.password?.type === 'minLength' &&
                                                    <p
                                                        className="text-red-600">
                                                        Password must be 6 characters
                                                    </p>
                                                }
                                                {
                                                    errors.password?.type === 'maxLength' &&
                                                    <p
                                                        className="text-red-600">
                                                        Password must be less than 20 characters
                                                    </p>
                                                }
                                                {
                                                    errors.password?.type === 'pattern' &&
                                                    <p
                                                        className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.
                                                    </p>
                                                }
                                            </div>
                                            <div
                                                className="form-control">
                                                <label
                                                    className="label ">
                                                    <span
                                                        className="label-text text-yellow-400">
                                                        Enter Your Photo URL
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("photoURL",
                                                        { required: true })
                                                    }
                                                    placeholder="Photo URL"
                                                    className="input input-bordered" />
                                                {
                                                    errors.photoURL &&
                                                    <span
                                                        className="text-red-600">
                                                        Photo URL is required
                                                    </span>}
                                            </div>
                                            {/* google login start */}
                                            <div className="mt-2">
                                                <SocialLogin />
                                            </div>
                                            {/* google login end */}
                                            <label
                                                className="label mt-1 text-center mx-auto">
                                                <small
                                                    className="text-neutral-700 mx-auto">
                                                    Already Have an Account?
                                                    Please <Link
                                                        to='/login'
                                                        className="font-extrabold  text-yellow-400 hover:text-black link-hover">
                                                        Login
                                                    </Link>
                                                </small>
                                            </label>
                                            {/* submit btn */}
                                            <div
                                                className="form-control mt-5">
                                                <input
                                                    className="btn bg-yellow-400 text-white hover:text-black"
                                                    type="submit"
                                                    value="Registration" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Registration;