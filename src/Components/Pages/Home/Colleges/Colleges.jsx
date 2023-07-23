import { FaSchool } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle";

const Colleges = () => {

    return (
        <div
            className="max-w-7xl mx-auto mt-20">
            <div>
                <FaSchool className="mx-auto text-6xl mt-14" />
                <SectionTitle
                    heading={"Our Popular Colleges"}
                    subHeading={"Top colleges offering diverse programs, excellent faculty, and vibrant campus life.Renowned colleges with strong academic traditions, modern facilities, and thriving student communities."}
                ></SectionTitle>
            </div>
        </div>
    );
};

export default Colleges;