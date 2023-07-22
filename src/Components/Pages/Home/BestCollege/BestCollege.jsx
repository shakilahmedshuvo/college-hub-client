import SectionTitle from "../../../Shared/SectionTitle";
import { PiGraduationCapFill } from "react-icons/pi";

const BestCollege = () => {
    return (
        <div
            className="max-w-7xl mx-auto">
            <PiGraduationCapFill className="mx-auto text-6xl mt-14" />
            <SectionTitle
                heading={"Our Best Colleges"}
                subHeading={"We present a curated list of some of the finest universities from around the globe."}
            ></SectionTitle>
        </div >
    );
};

export default BestCollege;