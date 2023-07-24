import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import BestCollege from "../BestCollege/BestCollege";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Review from "../Review/Review";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    College Hub | Home
                </title>
            </Helmet>
            <SearchBar />
            <Banner />
            <BestCollege />
            <Gallery />
            <Review />
            <ResearchPaper />
        </div>
    );
};

export default Home;