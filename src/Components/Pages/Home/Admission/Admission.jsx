import Swal from "sweetalert2";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Utilities/Hooks/useAuth";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import AdmissionTable from "./AdmissionTable";

const Admission = () => {
    const { user } = useAuth();

    // load the data
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bestCollege')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    return (
        <div
            className="bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90%">
            <div
                className="max-w-7xl mx-auto pt-20">
                <div>
                    <LiaGraduationCapSolid className="mx-auto text-6xl" />
                    <SectionTitle
                        heading={"Admission"}
                        subHeading={"Secure your future with us. Explore our comprehensive programs, experienced faculty, and a supportive learning environment. Join us for an enriching educational journey."}
                    ></SectionTitle>
                </div>
                <p
                    className="text-center font-bold text-2xl py-3">
                    {user?.displayName}
                </p>
                {/* college table info section */}
                <div
                    className="overflow-x-auto font-bold pb-8">
                    <table
                        className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th
                                    className="mx-auto">
                                    #
                                </th>
                                <th
                                    className="mx-auto">
                                    College Name
                                </th>
                                <th
                                    className="mx-auto text-center">
                                    College Ratings
                                </th>
                                <th
                                    className="mx-auto">
                                    Admission Date
                                </th>
                                <th
                                    className="mx-auto">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        {
                            data.map(data => <AdmissionTable
                                key={data.id}
                                data={data}
                            ></AdmissionTable>)
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Admission;