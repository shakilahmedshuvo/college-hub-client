import { MdRateReview } from "react-icons/md";
import SectionTitle from "../../../Shared/SectionTitle";

const WriteReview = () => {
    return (
        <div
            className="bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90%">
            <div
                className="max-w-5xl mx-auto pt-20 pb-10">
                <div
                    className="mb-4">
                    <MdRateReview className="mx-auto text-6xl" />
                    <SectionTitle
                        heading={"Write a Review"}
                        subHeading={"Engaging and informative, the platform showcases cutting-edge studies on diverse subjects, making it a valuable resource for knowledge seekers."}
                    ></SectionTitle>
                    <p
                        className="text-center mt-4 mb-2 font-bold">
                        Write Here Your Experience...
                    </p>
                </div>
                <form
                    // onSubmit={}
                    className="w-[100%] shadow-2xl font-bold mx-auto rounded-xl">
                    <div className="card-body mx-auto">
                        <div
                            className="form-control">
                            {/* name */}
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    * Enter Your Name?
                                </span>
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required />
                            {/* email */}
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    * Enter Your Email Address?
                                </span>
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required />
                            {/* Message */}
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    * Enter Your Message
                                </span>
                            </label>
                            <textarea
                                name="message"
                                className="textarea textarea-warning" placeholder="Your Message"
                                required />
                        </div>

                    </div>
                    {/* input btn */}
                    <input
                        className="btn px-20 ms-8 mb-6 bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90% lg:w-[90%] w-[80%] font-bold"
                        type="submit"
                        value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default WriteReview;