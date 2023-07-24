import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";

const CollegeDetails = () => {
    const data = useLoaderData();
    const { collegeName, collegeRatings, admissionDate, research, collegeImg } = data;
    // console.log(data);
    return (
        <div
            className="pt-20 bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90%">
            <div
                className="max-w-7xl mx-auto">
                <div>
                    <SectionTitle
                        heading={"Our Best Colleges"}
                        subHeading={"We present a curated list of some of the finest universities from around the globe."}
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
                                className="card-title text-xl text-center font-bold mx-auto ms-10 my-14">
                                College Name: {collegeName}
                            </h2>
                            <p className="text-slate-500 my-5 text-center font-bold">
                                Admission Date: {admissionDate}
                            </p>
                            <p className="text-slate-500 my-5 text-center font-bold">
                                College Rating: {collegeRatings}
                            </p>
                            <p className="text-slate-500 my-5 text-center font-bold">
                                Research: {research}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;