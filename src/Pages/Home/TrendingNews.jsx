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
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const TrendingNews = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const axiosPublic = useAxiosPublic();
    const {data: mostViewsNews=[]} = useQuery({
      queryKey: ['mostViewsNews'],
      queryFn: async () =>{
        const res = await axiosPublic('/news/six?size=6&sort=-1');
        return res.data
      }
    })
    console.log(mostViewsNews);

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
        {
          mostViewsNews.map(news => <SwiperSlide key={news._id}>
            <p className='text-white font-bold right-5 mt-3 absolute z-20'> Views: {news.views}</p>
            <img className='w-full mx-auto relative' src={news.image} />
          </SwiperSlide>)
        }
      
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
        {
          mostViewsNews.map(news =><SwiperSlide key={news._id}>
            <img className='h-[200px]' src={news.image}/>
          </SwiperSlide>)
        }
       
      </Swiper>
        </div>
    );
};

export default TrendingNews;