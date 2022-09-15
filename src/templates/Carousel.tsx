// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
    <section className="relative bg-black p-8">
      <div className="c-container h2 text-center mt-6 mb-4 p-5">
        Our Carousel
      </div>
      <div className="c-container relative text-black w-80 mx-auto">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className="slide">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">Slide 4</div>
          </SwiperSlide>
        </Swiper>
        <style>
          {`
            .swiper-button-prev, .swiper-button-next  {
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAY0lEQVRIiWNgGAVDHXTQ2oL/tLbkP60t+c9AY0v+M5BgyVEsGsjBDcS6hhKM1SfUtABuCRO+MKMQfKelD+qx2XiYSobjjGRyAFEup5YFVDcc2QKaGA6zgGaGMzBQOUJHAW0AAJdjecXOTY0VAAAAAElFTkSuQmCC") !important;
              color:transparent !important;
              height: 20px;
              width: 25px;
            }
            
            .swiper-button-prev {
              transform: rotate(180deg)
            }
       
          `}
        </style>
        <style jsx>
          {`
            .swiper-button-prev {
              color: red !important;
            }

            .swiper-button-next {
              color: #000;
            }
            .slide {
              @apply text-black bg-red-200 w-80 h-80 text-center;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export { Carousel };
