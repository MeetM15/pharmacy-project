import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import { BannerImg } from "../../data/banner/Banner";
import { makeStyles } from "@material-ui/core";

SwiperCore.use([Pagination, Autoplay]);

const useStyles = makeStyles(() => ({
  main_container: {
    margin: "auto",
    overflow: "hidden"
  },
  swiper_container: {
    width: "100%",
    height: "100%",
    display: "flex"
  },
  swiper_slide: {
    width: "90%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  swiper_img: {
    width: "100%",
    maxHeight: "100%"
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.main_container}>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false
        }}
        className={classes.swiper_container}
      >
        {BannerImg.map((image, index) => {
          return (
            <SwiperSlide key={index} className={classes.swiper_slide}>
              <img
                src={image.img}
                alt="Banner"
                className={classes.swiper_img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Banner;
