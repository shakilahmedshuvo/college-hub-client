import { Link } from "react-router-dom";
import { RiExternalLinkFill } from "react-icons/ri";

const SingleTab = ({ data }) => {
    const { name, collegeName, img, link } = data;

    return (
        <div
            className="card w-[95%] glass font-bold text-center mx-auto my-10">
            <figure>
                <img
                    className="rounded-lg"
                    src={img}
                    alt="" />
            </figure>
            {/* card info */}
            <div
                className="card-body text-center mx-auto">
                <h2
                    className="card-title mx-auto font-bold">
                    Topic Of Research: {name}
                </h2>
                <p>
                    Researched by Students Of: {collegeName}
                </p>
                {/* link */}
                <Link
                    to={link}
                    className="text-xl text-blue-400 link-hover flex items-center justify-center hover:text-blue-300">
                    <RiExternalLinkFill className="mr-1 text-2xl" /> View Link
                </Link>
            </div>
        </div>
    );
};

export default SingleTab;