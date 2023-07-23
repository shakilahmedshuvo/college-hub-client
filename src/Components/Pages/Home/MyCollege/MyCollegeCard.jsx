import { Link } from "react-router-dom";
import { HiMailOpen } from "react-icons/hi";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaCircleInfo, FaSchool } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

const MyCollegeCard = ({ data }) => {
    const { name, email, phone, address, collegeName, subject, date } = data;
    return (
        <div
            className="card border-2 px-6 py-4 my-10 border-gray-300">
            <h2
                className="text-xl font-bold pt-4 text-center">
                Student Name: {name}
            </h2>
            <div
                className="grid lg:grid-cols-3 font-bold py-4">
                <p
                    className="flex items-center text-center mx-auto">
                    <HiMailOpen className="mr-1 text-xl" /> Student Email: {email}
                </p>
                <p
                    className="flex items-center text-center mx-auto">
                    <PiPhoneCallDuotone className="mr-1 text-xl" /> Student Number: {phone}
                </p>
                <p
                    className="flex items-center text-center mx-auto">
                    <FaCircleInfo className="mr-1 text-xl" /> Address: {address}
                </p>
            </div>
            <div
                className="grid lg:grid-cols-3 font-bold py-4">
                <p
                    className="flex items-center text-center mx-auto">
                    <FaSchool className="mr-1 text-xl" /> Applied College Name: {collegeName}
                </p>
                <p
                    className="flex items-center text-center mx-auto">
                    <IoSchoolSharp className="mr-1 text-xl" /> Applied Subject: {subject}
                </p>
                <p
                    className="flex items-center text-center mx-auto">
                    <MdDateRange className="mr-1 text-xl" />  College Admission Date: {date}
                </p>
            </div>
            <Link
                className="btn bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90% font-bold my-5">
                Give A Review
            </Link>
        </div>
    );
};

export default MyCollegeCard;