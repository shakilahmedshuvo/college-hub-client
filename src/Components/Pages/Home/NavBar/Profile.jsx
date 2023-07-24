import { Helmet } from "react-helmet";
import SectionTitle from "../../../Shared/SectionTitle";
import { CgProfile } from "react-icons/cg";

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
                <CgProfile className="mx-auto text-6xl" />
                <SectionTitle
                    heading={"Profile"}
                    subHeading={"Your Profile & Info"}
                ></SectionTitle>
            </div>
            {/* profile section */}
            <div
                className="grid lg:grid-cols-3">
                <div>
                    1
                </div>
                <div className="col-span-2">
                    2
                </div>
            </div>
        </div>
    );
};

export default Profile;