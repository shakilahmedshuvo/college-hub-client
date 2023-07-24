import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import { PiGraduationCapFill } from "react-icons/pi";
import SingleCollegeCard from "./SingleCollegeCard";

const BestCollege = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://college-hub-server-hazel.vercel.app/college')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div
            className="max-w-7xl mx-auto">
            <PiGraduationCapFill className="mx-auto text-6xl mt-14" />
            <SectionTitle
                heading={"Our Best Colleges"}
                subHeading={"We present a curated list of some of the finest universities from around the globe."}
            ></SectionTitle>
            {/* card map section */}
            <div
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-auto">
                {
                    data.map(data => <SingleCollegeCard
                        key={data.id}
                        data={data}
                    ></SingleCollegeCard>)
                }
            </div>
        </div >
    );
};

export default BestCollege;