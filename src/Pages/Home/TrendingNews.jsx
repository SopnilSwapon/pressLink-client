import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './trending.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
const TrendingNews = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    

    return (
        <div className='h-full'>
       <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height: '500px',
          marginTop: '4px',
          width: '100%',

        }}
        loop={true}
        autoplay={{
            delay: 4000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2 flex mx-auto border border-red-600"
      >
        <SwiperSlide>
          <img className='w-full mx-auto' src="https://img.freepik.com/premium-photo/anchors-talking-breaking-news-evening-television-studio-closeup-hosts-speaking_723208-26773.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full mx-auto' src="https://img.freepik.com/premium-photo/word-news-spelled-wooden-letters-table_662214-460760.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full mx-auto' src="https://bangladeshpost.net/webroot/uploads/featureimage/2024-05/66560c0762d7c.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className='w-full mx-auto' src="https://img.freepik.com/premium-photo/wooden-table-with-wooden-background-green-screen-news-studio-3d-illustration_327072-1419.jpg?w=740" />
        </SwiperSlide>
      
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        loop={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Autoplay, Thumbs]}
        autoplay={{
            delay: 4000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/anchors-talking-breaking-news-evening-television-studio-closeup-hosts-speaking_723208-26773.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/word-news-spelled-wooden-letters-table_662214-460760.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://bangladeshpost.net/webroot/uploads/featureimage/2024-05/66560c0762d7c.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/wooden-table-with-wooden-background-green-screen-news-studio-3d-illustration_327072-1419.jpg?w=740" />
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default TrendingNews;