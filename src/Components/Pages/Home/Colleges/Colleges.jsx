import { FaSchool } from "react-icons/fa";
import SectionTitle from "../../../Shared/SectionTitle";
import { useEffect, useState } from "react";
import SingleCollege from "./SingleCollege";
import { Helmet } from "react-helmet";

const Colleges = () => {
    // load the data
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://college-hub-server-hazel.vercel.app/bestCollege')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    return (
        <div
            className="max-w-7xl mx-auto mt-20">
            <div>
                <Helmet>
                    <title>
                        College Hub | Colleges
                    </title>
                </Helmet>
                <FaSchool className="mx-auto text-6xl mt-14" />
                <SectionTitle
                    heading={"Our Popular Colleges"}
                    subHeading={"Top colleges offering diverse programs, excellent faculty, and vibrant campus life.Renowned colleges with strong academic traditions, modern facilities, and thriving student communities."}
                ></SectionTitle>
            </div>
            {/* best college card map section */}
            <div
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-auto">
                {
                    data.map(data => <SingleCollege
                        key={data.id}
                        data={data}
                    ></SingleCollege>)
                }
            </div>
        </div>
    );
};

export default Colleges;