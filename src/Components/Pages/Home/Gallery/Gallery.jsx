import { RiGalleryFill } from "react-icons/ri";
import SectionTitle from "../../../Shared/SectionTitle";
import GalleryImg from "./GalleryImg";

const Gallery = () => {
    return (
        <div
            className="max-w-7xl mx-auto">
            <RiGalleryFill className="mx-auto text-6xl mt-14" />
            <SectionTitle
                heading={"Graduates Group Pictures"}
                subHeading={"Joyful graduates gather for group pictures, celebrating academic achievements and embracing future opportunities."}
            ></SectionTitle>
            {/* img grid section */}
            <GalleryImg />
        </div>
    );
};

export default Gallery;