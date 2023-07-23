import Banner from "../Banner/Banner";
import BestCollege from "../BestCollege/BestCollege";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
    return (
        <div>
            <SearchBar />
            <Banner />
            <BestCollege />
            <Gallery />
            <Review />
        </div>
    );
};

export default Home;