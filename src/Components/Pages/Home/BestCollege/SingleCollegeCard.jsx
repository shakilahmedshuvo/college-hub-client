import { FaAngleDoubleRight } from "react-icons/fa";

const SingleCollegeCard = ({ data }) => {
    const { collegeName, collegeImg, admissionDates, events, research, sports } = data;
    return (
        <div
            className="card w-[95%] glass font-bold text-center mx-auto my-10">
            <figure>
                <img
                    className="rounded-lg"
                    src={collegeImg}
                    alt="" />
            </figure>
            {/* card info */}
            <div
                className="card-body text-center mx-auto">
                <h2
                    className="card-title mx-auto font-bold">
                    {collegeName}
                </h2>
                <p>
                   Admission Dates
                </p>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div
                    className="card-actions">
                    <button
                        className="btn font-bold btn-wide mx-auto bg-black text-white hover:text-black">
                        <FaAngleDoubleRight />See Classes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCollegeCard;