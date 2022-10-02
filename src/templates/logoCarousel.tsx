// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Logo } from '../components/logo';

const LogosCarousel = ({ content }: any) => {
  const { app } = content;
  return (
    <section className="relative bg-white p-8">
      <div className="c-container relative text-black mx-auto ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000 }}
          loop
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <div className=" relative text-black max-w-4xl mx-auto">
            {Object.keys(app).map((keyName, i) => (
              <SwiperSlide key={i}>
                <Logo
                  src={`/${app[keyName].image}`}
                  alt={app[keyName].alt_text}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

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

export { LogosCarousel };
