import { useEffect, useState } from "react";
import useAuth from "../../../Utilities/Hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
    const { user } = useAuth();

    // get the options value
    const [options, setOptions] = useState('');
    const handleOptions = (e) => {
        setOptions(e.target.value);
    };

    // get the users data
    const data = useLoaderData();
    const { _id, phone, address, collegeName, subject } = data;

    // handleUpdate function
    const handleUpdate = event => {
        // stop the form reload
        event.preventDefault();

        // get the value form the filed
        const form = event.target;
        const phone = form.phone.value;
        const address = form.address.value;
        const collegeName = form.collegeName.value;
        const subject = form.subject.value;
        const options = form.options.value;

        const allDataUpdate = { phone, address, collegeName, subject, options };
        // console.log(allDataUpdate);

        // data post to the backend server( mongodb )
        fetch(`https://college-hub-server-hazel.vercel.app/users/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allDataUpdate)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Profile Successfully Update',
                        icon: 'success',
                        confirmButtonText: 'Updated'
                    })
                    form.reset();
                }
            })
    };

    return (
        <div
            className="bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90%">
            <div
                className="max-w-7xl mx-auto pt-20">
                <div>
                    <Helmet>
                        <title>
                            College Hub | Profile
                        </title>
                    </Helmet>
                    <SectionTitle
                        heading={"My Profile"}
                    ></SectionTitle>
                </div>
                {/* profile section */}
                <div
                    className="text-center text-lg font-bold py-2">
                    Edit Your Profile Here & Save It.
                </div>
                <div
                    className="grid lg:grid-cols-3 grid-cols-1 py-8">
                    <div
                        className="w-full mx-auto">
                        <img
                            className="rounded-full mx-auto py-5 lg:w-[30]"
                            src={user?.photoURL}
                            alt="" />
                        <p
                            className="text-center font-bold text-xs my-2 text-slate-500">
                            Your Users ID: {_id}
                        </p>
                    </div>
                    <div className="col-span-2">
                        <h2
                            className="text-xl text-center font-bold">
                            Your Information
                        </h2>
                        <p
                            className="text-xs text-center font-bold my-1">
                            Edit Here
                        </p>
                        {/* info Edit */}
                        <div>
                            {/* form section start */}
                            <form
                                className="font-bold mt-6 pb-16"
                                onSubmit={handleUpdate}>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span
                                                className="label-text">
                                                * Name (Name cannot be changed)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            readOnly
                                            placeholder="Add Your Name"
                                            defaultValue={user?.displayName}
                                            className="input input-bordered text-gray-400"
                                            required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span
                                                className="label-text">
                                                * Email Address (Email Address cannot be changed)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            readOnly
                                            defaultValue={user?.email}
                                            className="input input-bordered text-gray-400"
                                            required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span
                                                className="label-text">
                                                * Phone Number
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Add Your Phone Number"
                                            defaultValue={phone}
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span
                                                className="label-text">
                                                * Address
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Add Your Address"
                                            className="input input-bordered"
                                            defaultValue={address}
                                            required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span
                                                className="label-text">
                                                * College Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="collegeName"
                                            placeholder="Add Your College Name"
                                            defaultValue={collegeName}
                                            className="input input-bordered"
                                            required />
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
                                            placeholder="Add Your Subject"
                                            defaultValue={subject}
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* options for gender */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span
                                                className="label-text">
                                                * Pick Your Gender
                                            </span>
                                        </label>
                                        <select
                                            value={options}
                                            onChange={handleOptions}
                                            required
                                            className="select select-warning w-full max-w-xs">
                                            <option
                                                disabled value="">
                                                Select Your Gander
                                            </option>
                                            <option>
                                                Male
                                            </option>
                                            <option>
                                                Female
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div
                                    className="form-control mt-6 lg:mx-0 mx-4">
                                    <input
                                        className="btn border-0 bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90% btn-block font-bold my-2"
                                        type="submit"
                                        value="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;