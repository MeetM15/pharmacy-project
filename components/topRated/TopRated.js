import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import ProductCard from "../productCard/ProductCard";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  main_container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 0px",
    height: "300px",
    width: "100%",
    background: "#f1f1ff",
    margin: "10px 0px"
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    alignItems: "center",
    padding: "0px 10px",
    fontWeight: "bold",
    "& p": {
      margin: "0",
      fontSize: "clamp(18px,2vw,28px)"
    }
  },
  viewLink: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FF4000"
  },
  swiper_slide: {
    textAlign: "center",
    width: "150px",
    height: "100%",
    fontSize: "clamp(16px,2vw,24px)",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    "& img": {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  },
  swiper_container: {
    width: "95%"
  }
}));

SwiperCore.use([Pagination, Autoplay]);

const TopRated = () => {
  const classes = useStyles();

  return (
    <div className={classes.main_container}>
      <div className={classes.head}>
        <p>Top Rated</p>
        <a href="#" className={classes.viewLink}>
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
        className={classes.swiper_container}
      >
        <div>
          <SwiperSlide className={classes.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/553/thumb/Hair_Treatment_1.jpg"
              title="Hair Treatment"
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/3495/thumb/face-wash-cleansers_1.jpg"
              title="Face Wash"
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/549/thumb/Hair-colours_2.jpg"
              title="Hair Colours"
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/100/thumb/Mens_Care_2.jpg"
              title="Men's Care"
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_slide}>
            <ProductCard
              img="https://www.netmeds.com/images/category/525/thumb/Body_Care_4.jpg"
              title="Body Care"
            />
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_slide}>
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
