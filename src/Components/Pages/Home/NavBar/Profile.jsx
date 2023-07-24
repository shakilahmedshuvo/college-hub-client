import { Helmet } from "react-helmet";
import SectionTitle from "../../../Shared/SectionTitle";

const Profile = () => {
    return (
        <div
            className="max-w-7xl mx-auto pt-20">
            <div>
                <Helmet>
                    <title>
                        College Hub | Profile
                    </title>
                </Helmet>
                {/* <LiaGraduationCapSolid className="mx-auto text-6xl" /> */}
                <SectionTitle
                    heading={"Admission"}
                    subHeading={"Secure your future with us. Explore our comprehensive programs, experienced faculty, and a supportive learning environment. Join us for an enriching educational journey."}
                ></SectionTitle>
            </div>
        </div>
    );
};

export default Profile;