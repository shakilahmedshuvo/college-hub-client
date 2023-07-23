import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../Shared/SectionTitle';
import { MdRateReview } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Review = () => {
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
                    {/* <SwiperSlide> */}
                    <div className="p-10">
                        <div
                            className="grid md:grid-cols-12 mt-6">
                            <div
                                className="col-span-1">
                                <FaQuoteLeft
                                    className="text-5xl text-slate-500" />
                            </div>
                            {/* review */}
                            <div
                                className="col-span-10 font-bold p-5 text-slate-800 text-center">
                                <h2
                                    className='text-3xl mb-6'>
                                    Candidate Name:  Shakil Hossain
                                </h2>
                                <h2
                                className='text-gray-700'>
                                    <span
                                    className='text-xl text-black'>Review:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vel laboriosam dolor cumque adipisci rerum quo a in, laudantium ad.
                                </h2>
                            </div>
                            <div
                                className="col-span-1 flex justify-end place-items-end mt-24">
                                <FaQuoteRight
                                    className="text-5xl text-slate-500" />
                            </div>
                        </div>
                    </div>
                    {/* </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;