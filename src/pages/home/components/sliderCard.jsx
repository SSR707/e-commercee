import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import { ProductData } from "../data/data";
import { ProductCard } from "./product-card";
import { Link } from "react-router-dom";

export const SliderCard = () => {
  return (
    <Swiper
      spaceBetween={80}
      direction="horizontal"
      loop={true}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 4, spaceBetween: 16 },
        1280: { slidesPerView: 4, spaceBetween: 16 },
      }}
      className="product__card--slider"
    >
      {ProductData.map((item) => (
        <SwiperSlide key={item.id}>
          <Link to={`/product/${item.id}`}>
            <ProductCard
              img={item.img}
              name={item.name}
              price={item.price}
              otziv={item.otziv}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
