import SectionTitle from "../../../Shared/SectionTitle";
import { BsFiletypeDoc } from "react-icons/bs";
import ResearchPaperTab from "./ResearchPaperTab";

const ResearchPaper = () => {
    return (
        <div
            className="max-w-7xl mx-auto">
            <div>
                <BsFiletypeDoc className="mx-auto text-6xl mt-14" />
                <SectionTitle
                    heading={"Research Papers"}
                    subHeading={"College research papers: technology-enhanced learning, climate change, AI in healthcare, gender equality, social media activism, and various topics"}
                ></SectionTitle>
            </div>
            {/* ResearchPaperTab section */}
            <ResearchPaperTab />
        </div>
    );
};

export default ResearchPaper;