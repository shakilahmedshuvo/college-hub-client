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
        const reviewRatings = form.reviewRatings.value;

        // get all data
        const allData = { reviewName, reviewEmail, collegeName, review, reviewRatings };

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
                className="max-w-7xl mx-auto pt-20 pb-10">
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
                {/* review submit form */}
                <form
                    className="font-bold mt-6 pb-16"
                    onSubmit={handleReview}>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                        <div
                            className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    * Enter Your Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="reviewName"
                                placeholder="Enter Name"
                                defaultValue={user?.displayName}
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    * Enter Your Email
                                </span>
                            </label>
                            <input
                                type="text"
                                name="reviewEmail"
                                placeholder="Enter Email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    * Enter Your College Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="collegeName"
                                placeholder="Enter College Name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    * Enter Your Ratings Out Of 5
                                </span>
                            </label>
                            <input
                                type="number"
                                name="reviewRatings"
                                min="0" 
                                max="5"
                                step="any"
                                placeholder="Enter Ratings Out Of 5"
                                className="input input-bordered"
                                required />
                        </div>
                    </div>
                    {/* Message */}
                    <div
                        className="form-control px-4">
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
                    <div
                        className="form-control mt-6 lg:mx-0 mx-4">
                        <input
                            className="btn border-0 bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90% btn-block font-bold my-2"
                            type="submit"
                            value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WriteReview;