const SearchBar = () => {
    return (
        <div
            className="max-w-7xl mx-auto mt-16 flex justify-end my-1">
            <div
                className="flex items-end justify-end lg:w-[50%] w-full bg-blue-50 rounded-lg px-4 py-2 shadow">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-10 border rounded-md px-3 focus:outline-none focus:ring focus:border-blue-300 bg-amber-50"
                // onChange={handleChange}
                />
                <button
                    className="ml-2 px-4 py-2 font-bold rounded-md focus:outline-none bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90%"
                // onClick={handleSearchButtonClick}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;