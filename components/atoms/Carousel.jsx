import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Carousel({ images }) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={15}
      freeMode={true}
      modules={[Autoplay, FreeMode]}
      loop
      simulateTouch
      autoplay={{ delay: 2000 }}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 7,
        },
        1700: {
          slidesPerView: 10,
        },
        2700: {
          slidesPerView: 16,
        },
      }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            key={i}
            src={img}
            alt="The Mallard Order"
            className="w-96 lg:w-64"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
