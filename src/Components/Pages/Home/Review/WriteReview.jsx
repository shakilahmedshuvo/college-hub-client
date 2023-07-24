import { MdRateReview } from "react-icons/md";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Utilities/Hooks/useAuth";
import Swal from "sweetalert2";

const WriteReview = () => {
    const { user } = useAuth();

    // handleReview function
    const handleReview = event => {
        // stop the form reload
        event.preventDefault();

        // get the value form the filed
        const form = event.target;
        const reviewName = form.reviewName.value;
        const reviewEmail = form.reviewEmail.value;
        const collegeName = form.collegeName.value;
        const review = form.review.value;

        // get all data
        const allData = { reviewName, reviewEmail, collegeName, review };

        // data post to the backend server( mongodb )
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // swal
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Review Post Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }

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
                    onSubmit={handleReview}
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
                                name="reviewName"
                                placeholder="Your Name"
                                defaultValue={user?.displayName}
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
                                name="reviewEmail"
                                placeholder="Your Email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                required />
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    * Enter Your College Name?
                                </span>
                            </label>
                            <input
                                type="email"
                                name="collegeName"
                                placeholder="Your College Name"
                                className="input input-bordered"
                                required />
                            {/* Message */}
                            <label
                                className="label">
                                <span
                                    className="label-text">
                                    * Enter Your Review
                                </span>
                            </label>
                            <textarea
                                name="review"
                                className="textarea textarea-warning" placeholder="Your Review"
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