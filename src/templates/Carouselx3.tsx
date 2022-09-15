// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carouselx3 = () => {
  return (
    <section className="relative bg-white p-8">
      <div className="c-container h2 text-center mt-6 mb-4 p-5">
        Our Carousel
      </div>
      <div className="max-w-5xl mb-8  mx-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
          euismod ex. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Suspendisse posuere pulvinar libero, vitae placerat nulla
          vestibulum ac. Phasellus pretium et orci eu tristique. Maecenas elit
          nisi, feugiat a consectetur quis, faucibus sit amet eros.{' '}
        </p>
      </div>
      <div className="c-container relative text-black mx-auto">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
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
            .slide {
              @apply text-black border-2 border-black bg-white hover:bg-primary-400 cursor-pointer h-80 text-center;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export { Carouselx3 };
