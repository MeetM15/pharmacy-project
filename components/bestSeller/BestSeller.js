import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import css from "./bestseller.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import ProductCard from "../productCard/ProductCard";

SwiperCore.use([Pagination, Autoplay]);

const BestSeller = ({ bestSellers }) => {
  return (
    <div className={css.main_container}>
      <h3 style={{ fontSize: "32px", margin: "5px 20px" }}>Best Sellers</h3>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        className={css.swiper_container}
      >
        <div class="swiper-wrapper">
          {bestSellers.map((product) => {
            return (
              <SwiperSlide className={css.swiper_slide}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
export default BestSeller;
