import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import css from "./toprated.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import ProductCard from "../productCard/ProductCard";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

SwiperCore.use([Pagination, Autoplay]);

const TopRated = () => {
  return (
    <div className={css.main_container}>
      <div className={css.head}>
        <p>Top Rated</p>
        <a href="#" className={css.viewLink}>
          View All
          <DoubleArrowIcon size="small" />
        </a>
      </div>
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
          <SwiperSlide className={css.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/553/thumb/Hair_Treatment_1.jpg"
              title="Hair Treatment"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/3495/thumb/face-wash-cleansers_1.jpg"
              title="Face Wash"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/549/thumb/Hair-colours_2.jpg"
              title="Hair Colours"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/100/thumb/Mens_Care_2.jpg"
              title="Men's Care"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/525/thumb/Body_Care_4.jpg"
              title="Body Care"
            />
          </SwiperSlide>
          <SwiperSlide className={css.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/569/thumb/skin-care_2.jpg"
              title="Skin Care"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default TopRated;
