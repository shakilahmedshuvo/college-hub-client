import Swal from "sweetalert2";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Utilities/Hooks/useAuth";
import { LiaGraduationCapSolid } from "react-icons/lia";

const AdmissionApply = () => {
    const { user } = useAuth();

    // handleBookServices function
    const handleAdmission = event => {
        // stop the form reload
        event.preventDefault();

        // get the value form the filed
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const address = form.address.value;
        const collegeName = form.collegeName.value;
        const subject = form.subject.value;
        const date = form.date.value;
        const imgURL = form.imgURL.value;

        // get all data
        const allData = { name, email, phone, address, collegeName, subject, date, imgURL };

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
            className="bg-gradient-to-r from-yellow-50 from-10% via-sky-50 via-30% to-orange-50 to-90%">
            <div
                className="max-w-7xl mx-auto pt-20">
                <div>
                    <LiaGraduationCapSolid className="mx-auto text-6xl" />
                    <SectionTitle
                        heading={"Apply For Admission"}
                        subHeading={"Complete online application, submit transcripts, scores, and personal statement. Await admission decision from college. Good luck!"}
                    ></SectionTitle>
                </div>
                {/* form section start */}
                <form
                    className="font-bold mt-6 pb-16"
                    onSubmit={handleAdmission}>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
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
                                    *College Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="collegeName"
                                // defaultValue={}
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
                    <div 
                     className="form-control mt-6 lg:mx-0 mx-4">
                        <input
                            className="btn border-0 bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90% btn-block font-bold my-2"
                            type="submit"
                            value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionApply;