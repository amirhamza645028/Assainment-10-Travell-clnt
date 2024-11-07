import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="hero-slider"
        >
            {/* Sundarban Slide */}
            <SwiperSlide aria-label="Sundarban Slide">
                <div 
                    className='relative h-[100vh] flex items-center hero-slide hero-slide1 bg-cover bg-center' 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1626239889138-a7e4f971059e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNveCdzJTIwYmF6YXJ8ZW58MHx8MHx8fDA%3D')" }}
                >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='container relative z-10 text-center'>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white drop-shadow-lg'>
                            Dive into the Serenity of Bangladesh
                        </h1>
                        <p className='max-w-[700px] mx-auto text-base sm:text-lg text-white drop-shadow-md mt-4'>
                            Explore the world's largest mangrove forest, home to majestic Bengal tigers and exotic wildlife, with breathtaking boat safaris amidst lush greenery.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            {/* Angkor Wat Slide */}
            <SwiperSlide aria-label="Angkor Wat Slide">
                <div 
                    className='relative h-[100vh] flex items-center hero-slide hero-slide2 bg-cover bg-center' 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626239889138-a7e4f971059e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNveCdzJTIwYmF6YXJ8ZW58MHx8MHx8fDA%3D')", backgroundColor: "#000" }}

                >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='container relative z-10 text-center'>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white drop-shadow-lg'>
                            Discover the Charms  
                        </h1>
                        <p className='max-w-[700px] mx-auto text-base sm:text-lg text-white drop-shadow-md mt-4'>
                            Unravel the mysteries of ancient Khmer civilization as you wander through the awe-inspiring temple complex, adorned with intricate carvings and captivating history.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            {/* Santorini Slide */}
            <SwiperSlide aria-label="Santorini Slide">
                <div 
                    className='relative h-[100vh] flex items-center hero-slide hero-slide3 bg-cover bg-center' 
                    style={{ backgroundImage: "url('https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/1327662_Kuakata%20sea%20beach%20Sunset%20views.jpg')" }}
                >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                    <div className='container relative z-10 text-center'>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white drop-shadow-lg'>
                            Surrender to the beauty of Nature
                        </h1>
                        <p className='max-w-[700px] mx-auto text-base sm:text-lg text-white drop-shadow-md mt-4'>
                            Lose yourself in the enchanting beauty of Santorini's azure waters, whitewashed villages, and stunning sunsets, creating timeless memories in this Greek island paradise.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;
