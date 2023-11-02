import { Swiper as Swip, SwiperSlide } from 'swiper/react';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import img1 from "../assets/images/client1.jpg"
import img2 from "../assets/images/client2.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../assets/css/swiper.css"
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
const Swiper = () => {
  return (
    <>
      <Swip
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-item-container">
            <div className="sic-img-container">
              <img src={img1} className='sic-icon' />
            </div>
            <h1 className="sic-title">
              UI/UX Design
            </h1>
            <p className="sic-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <div className="sic-img-container">
              <img src={img2} className='sic-icon' />
            </div>
            <h1 className="sic-title">
              UI/UX Design
            </h1>
            <p className="sic-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <div className="sic-img-container">
              <img src={img1} className='sic-icon' />
            </div>
            <h1 className="sic-title">
              UI/UX Design
            </h1>
            <p className="sic-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <div className="sic-img-container">
              <img src={img2} className='sic-icon' />
            </div>
            <h1 className="sic-title">
              UI/UX Design
            </h1>
            <p className="sic-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <div className="sic-img-container">
              <img src={img1} className='sic-icon' />
            </div>

            <h1 className="sic-title">
              UI/UX Design
            </h1>
            <p className="sic-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <div className="sic-img-container">
              <img src={img2} className='sic-icon' />
            </div>

            <h1 className="sic-title">
              UI/UX Design
            </h1>
            <p className="sic-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>

      </Swip>
    </>
  )
}

export default Swiper