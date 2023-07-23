import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Utilities/Hooks/useAuth";
import { LiaGraduationCapSolid } from "react-icons/lia";

const Admission = () => {
    const { user } = useAuth();

    return (
        <div
        className="bg-indigo-50 pt-20">
            <div
                className="max-w-7xl mx-auto">
                <div>
                    <LiaGraduationCapSolid className="mx-auto text-6xl mt-14" />
                    <SectionTitle
                        heading={"Admission"}
                        subHeading={"Secure your future with us. Explore our comprehensive programs, experienced faculty, and a supportive learning environment. Join us for an enriching educational journey."}
                    ></SectionTitle>
                </div>
                <p
                    className="text-center font-bold text-2xl my-3">
                    {user?.displayName}
                </p>
                {/* form section start */}
                <form
                    className="font-bold mt-6 pb-16"
                // onSubmit={handleBookService}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    *Candidate Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    *Subject
                                </span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    *Candidate Email
                                </span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                defaultValue={user?.email}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    *Candidate Phone Number
                                </span>
                            </label>
                            <input
                                type="number"
                                name="phone"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    *Candidate Address
                                </span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    *Date Of Birth
                                </span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input
                            className="btn border-0 bg-yellow-400 btn-block font-bold my-2"
                            type="submit"
                            value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admission;