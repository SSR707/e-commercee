import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { CutomersData } from "../data/data";
import { CustumersCard } from "./custumers-card";

export const CustomerSliderCard = () => {
  return (
    <Swiper
      spaceBetween={80}
      direction="horizontal"
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 16 },
        1280: { slidesPerView: 3, spaceBetween: 20 },
      }}
      className="product__card--slider"
    >
      {CutomersData.map((item) => (
        <SwiperSlide key={item.id}>
          <CustumersCard name={item.name} description={item.description} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
