import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import css from "./toprated.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import ProductCard from "../productCard/ProductCard";
SwiperCore.use([Pagination, Autoplay]);

const TopRated = ({ topRated }) => {
  return (
    <div className={css.main_container}>
      <h3 style={{ fontSize: "32px", margin: "5px 20px" }}>Top Rated</h3>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className={css.swiper_container}
      >
        <div>
          {topRated.map((product) => {
            return (
              <SwiperSlide key={product.id} className={css.swiper_slide}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
export default TopRated;
