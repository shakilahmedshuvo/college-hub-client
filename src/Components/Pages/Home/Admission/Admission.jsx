import Swal from "sweetalert2";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Utilities/Hooks/useAuth";
import { LiaGraduationCapSolid } from "react-icons/lia";

const Admission = () => {
    const { user } = useAuth();

    // handleBookServices function
    const handleAdmission = event => {
        // stop the form reload
        event.preventDefault();

        // get the value form the filed
        const form = event.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = user?.email;
        const phone = form.phone.value;
        const address = form.address.value;
        const date = form.date.value;
        const imgURL = form.imgURL.value;

        // get all data
        const allData = { name, subject, email, phone, address, date, imgURL };

        // data post to the backend server( mongodb )
        fetch('http://localhost:5000/admission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // swal 
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Admission has been Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    };

    return (
        <div
            className="bg-indigo-50">
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
                    className="text-center font-bold text-2xl my-3">
                    {user?.displayName}
                </p>
                {/* form section start */}
                <form
                    className="font-bold mt-6 pb-16"
                    onSubmit={handleAdmission}>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                className="input input-bordered"
                                required />
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
                                className="input input-bordered"
                                required />
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
                                className="input input-bordered"
                                required />
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
                                className="input input-bordered"
                                required />
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
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text">
                                    *Image URL
                                </span>
                            </label>
                            <input
                                type="text"
                                name="imgURL"
                                className="input input-bordered"
                                required />
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