import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import useAuth from "../../../Utilities/Hooks/useAuth";
import MyCollegeCard from "./MyCollegeCard";

const MyCollege = () => {
    const { user } = useAuth();
    const [data, setData] = useState([]);

    const url = `http://localhost:5000/admission?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [url]);

    return (
        <div
            className="bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90% pt-20">
            <div
                className="max-w-7xl mx-auto">
                <div>
                    <IoCheckmarkDoneCircleOutline className="mx-auto text-6xl" />
                    <SectionTitle
                        heading={"Your Selected Colleges"}
                        subHeading={"Vibrant campus life, progressive academics, and commitment to social justice."}
                    ></SectionTitle>
                </div>
                <div>
                    {
                        data.map(data => <MyCollegeCard
                            key={data._id}
                            data={data}
                        ></MyCollegeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCollege;