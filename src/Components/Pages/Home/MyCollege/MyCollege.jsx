import SectionTitle from "../../../Shared/SectionTitle";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const MyCollege = () => {
    return (
        <div
            className="max-w-7xl mx-auto mt-20">
            <div>
                <IoCheckmarkDoneCircleOutline className="mx-auto text-6xl" />
                <SectionTitle
                    heading={"Your Selected Colleges"}
                    subHeading={""}
                ></SectionTitle>
            </div>
        </div>
    );
};

export default MyCollege;