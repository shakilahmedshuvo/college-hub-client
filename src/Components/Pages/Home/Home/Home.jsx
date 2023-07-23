import Banner from "../Banner/Banner";
import BestCollege from "../BestCollege/BestCollege";
import Gallery from "../Gallery/Gallery";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
    return (
        <div>
            <SearchBar />
            <Banner />
            <BestCollege />
            <Gallery />
        </div>
    );
};

export default Home;