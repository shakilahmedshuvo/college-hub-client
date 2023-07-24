import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";

const ThereCollege = () => {
    const data = useLoaderData();
    const { collegeName, collegeImg, admissionDates, events, research, sports } = data;
    return (
        <div
            className="pt-20 bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90%">
            <div
                className="max-w-7xl mx-auto">
                <div>
                    <SectionTitle
                        heading={"Our Popular Colleges"}
                    ></SectionTitle>
                </div>
                <div
                    className="py-10">
                    {/* data section */}
                    <div className="card grid lg:grid-cols-2 bg-base-100 shadow-xl py-10">
                        <figure>
                            <img
                                className="w-[50%] rounded-lg"
                                src={collegeImg}
                                data-aos="zoom-out"
                                alt="" />
                        </figure>
                        <div className="mx-auto text-center">
                            <h2
                                className="card-title text-xl text-center font-bold mx-auto ms-10 mt-5">
                                College Name: {collegeName}
                            </h2>
                            <div>
                                <h2
                                    className="my-2 text-lg font-bold text-yellow-400">
                                    Admission Date
                                </h2>
                                <p
                                    className="my-2 text-center font-bold">
                                    Start  Date: {admissionDates?.startDate}
                                </p>
                                <p
                                    className=" my-2 text-center font-bold">
                                    End  Date: {admissionDates?.endDate}
                                </p>
                            </div>
                            <div>
                                <h2
                                    className="my-2 text-lg font-bold text-yellow-400">
                                    College Events Info
                                </h2>
                                <p className=" my-2 text-center font-bold">
                                    Name: {events?.name}
                                </p>
                                <p className=" my-2 text-center font-bold">
                                    Date: {events?.date}
                                </p>
                                <p className=" my-2 text-center font-bold">
                                    Location: {events?.location}
                                </p>
                            </div>
                            <div>
                                <h2
                                    className="my-2 text-lg font-bold text-yellow-400">
                                    College Research Info
                                </h2>
                                <p className=" my-2 text-center font-bold">
                                    Title: {research?.title}
                                </p>
                                <p className=" my-2 text-center font-bold">
                                    Authors: {research?.authors}
                                </p>
                                <p className=" my-2 text-center font-bold">
                                    Publish Date: {research?.publishDate}
                                </p>
                                <p className=" my-2 text-center font-bold">
                                    Journal: {research?.journal}
                                </p>
                            </div>
                            <div>
                                <h2
                                    className="my-2 text-lg font-bold text-yellow-400">
                                    Sports Info
                                </h2>
                                <p className=" my-2 text-center font-bold">
                                    Name: {sports?.name}
                                </p>
                                <p className=" my-2 text-center font-bold">
                                    Titles: {sports?.titles}
                                </p>
                                <p className=" my-2 text-center font-bold">
                                    NationalCups: {sports?.nationalCups}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThereCollege;