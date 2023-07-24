import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdRateReview } from "react-icons/md";
import SectionTitle from '../../../Shared/SectionTitle';
import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const Review = () => {
    const [data, setData] = useState([]);

    // get the data
    const url = 'http://localhost:5000/reviews';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [url]);

    return (
        <div
            className='max-w-7xl mx-auto'>
            <div>
                <MdRateReview className="mx-auto text-6xl mt-14" />
                <SectionTitle
                    heading={"Candidate Reviews"}
                    subHeading={"The Candidate Reviews section offers valuable insights into the college experience, highlighting positive student feedback on faculty, facilities, and overall learning environment."}
                ></SectionTitle>
            </div>
            {/* swiper js review section */}
            <div
                className='bg-gradient-to-r from-yellow-100 from-10% via-sky-100 via-30% to-orange-100 to-90% rounded-3xl my-12'>
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {/* review map SwiperSlide section start */}
                    {
                        data.map(data => <SwiperSlide
                            key={data._id}>
                            <div className="p-20">
                                <div
                                    className="grid md:grid-cols-12 mt-4">
                                    <div
                                        className="col-span-1">
                                        <FaQuoteLeft
                                            className="text-5xl text-slate-500" />
                                    </div>
                                    <div
                                        className="col-span-10 font-bold p-5 text-slate-800 text-center">
                                        <h2
                                            className='text-3xl mb-4'>
                                            Name: {data?.reviewName}
                                        </h2>
                                        <h2
                                            className='text-xs pb-2 text-gray-500'>
                                            Email: {data?.reviewEmail}
                                        </h2>
                                        <h2
                                            className='text-xl mb-2 text-gray-700'>
                                            College Name: {data?.collegeName}
                                        </h2>
                                        <h2
                                            className='text-base pb-4 text-gray-500 flex items-center justify-center'>
                                            <FaStar className='text-xl mr-1 text-yellow-400' /> Ratings: {data?.reviewRatings}
                                        </h2>
                                        {/* main review */}
                                        <h2
                                            className='text-gray-700'>
                                            <span
                                                className='text-xl text-black mr-1'>
                                                Review:
                                            </span>
                                            {data?.review}
                                        </h2>
                                    </div>
                                    <div
                                        className="col-span-1 flex justify-end place-items-end mt-24">
                                        <FaQuoteRight
                                            className="text-5xl text-slate-500" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                    {/* review map SwiperSlide section end */}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;