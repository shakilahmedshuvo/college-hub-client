// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../../../Shared/SectionTitle';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* react swiper */}
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/premium-vector/children-go-school-web-concept-pupils-with-schoolbags-go-lessons-teenage-classmates_9209-5915.jpg?w=1060"
                            alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?w=1380&t=st=1690030138~exp=1690030738~hmac=213c5148e408264cf0bae42aa0d06246befe6ed55313237ceca53a1696b63c8a"
                            alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/free-vector/students-walking-relaxing-campus-park_1262-20690.jpg?w=1380&t=st=1690030156~exp=1690030756~hmac=b1f5d00481028d9cbacfdb0f33a8a549c0a372e34921bd742b3f1c733d2e4b05"
                            alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/premium-vector/university-icon-higher-education-symbol-buiding-exterior-isolated-white-background_176411-3701.jpg?w=1380"
                            alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/premium-vector/students-teachers-are-late-lessons-boys-girls-keeping-backpacks-books-hurry-up-running-university-near-trees-beginning-new-academic-year-love-learning-vector-flat-illustration_189557-152.jpg?w=1380"
                            alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className='w-full'
                            src="https://img.freepik.com/free-vector/college-campus-concept-illustration_114360-10508.jpg?w=1060&t=st=1690030254~exp=1690030854~hmac=6b24c407a99611019428ea8feb229d556b8da9790e7842ada25d441f2637671f"
                            alt="" />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;