// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "../Style/Carousel.css"


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

 function Carousel({print}) {
  return (
    <>
     <Swiper
     slidesPerView={6}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
     
       {
       
print.map((item)=>(
  <SwiperSlide key={item.id} className='img_container'>

<Link to={`/singleProduct/${item.id}`}><img src={item.image} alt="" className='slider_img'/></Link>
 
  </SwiperSlide>
))

       }
     
        
      </Swiper>
    </>
  );
}

export default Carousel;