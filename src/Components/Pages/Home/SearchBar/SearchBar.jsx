const SearchBar = () => {
    return (
        <div
            className="max-w-7xl mx-auto mt-16 flex justify-end my-1">
            <div
                className="flex items-end justify-end lg:w-[50%] w-full bg-white rounded-lg px-4 py-2 shadow">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-10 border rounded-md px-3 focus:outline-none focus:ring focus:border-blue-300"
                // onChange={handleChange}
                />
                <button
                    className="ml-2 px-4 py-2 bg-black text-white rounded-md focus:outline-none"
                // onClick={handleSearchButtonClick}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;