import { PiStarDuotone } from "react-icons/pi";
import { FcCalendar, FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

const SingleCollege = ({ data }) => {
    const { _id, collegeName, collegeRatings, admissionDate, research, collegeImg } = data;

    return (
        <div
            className="card w-[95%] glass font-bold text-center mx-auto my-10">
            <figure>
                <img
                    className="rounded-lg"
                    src={collegeImg}
                    alt="College Image" />
            </figure>
            {/* card info */}
            <div
                className="card-body text-center mx-auto">
                <h2
                    className="card-title mx-auto font-bold">
                    {collegeName}
                </h2>
                <p
                    className="flex items-center justify-center">
                    <FcCalendar className="mr-2 text-2xl" /> Admission Dates: {admissionDate}
                </p>
                <p
                    className="flex items-center justify-center">
                    < FcSearch className="mr-1 text-xl mt-1" /> Research History Count: {research}
                </p>
                <p
                    className="flex items-center justify-center">
                    <PiStarDuotone className="mr-2 text-yellow-500 text-xl" /> College Ratings: {collegeRatings}
                </p>
                <div
                    className="card-actions">
                    <Link
                        to={`/colleges/${_id}`}
                        className="btn font-bold btn-wide mx-auto bg-black text-white hover:text-black">
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCollege;