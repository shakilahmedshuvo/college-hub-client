const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div
                className="md:w-4/12 mx-auto text-center">
                <h3
                    className="text-4xl uppercase text-yellow-400 font-bold py-4">
                    {heading}
                </h3>
                <p
                    className="text-xl font-bold">
                    {subHeading}
                </p>
            </div>
        </div>
    );
};

export default SectionTitle;