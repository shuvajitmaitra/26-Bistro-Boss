import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Title from "../../Shared/Tilte/Title";
import image1 from "../../assets/home/slide1.jpg";
import image2 from "../../assets/home/slide2.jpg";
import image3 from "../../assets/home/slide3.jpg";
import image4 from "../../assets/home/slide4.jpg";
import image5 from "../../assets/home/slide5.jpg";
import Container from "../Container/Container";

const OnlineOrder = () => {
  return (
    <div className="mt-20 min-h-screen">
      <Container className="my-20">
        <Title
          subTitle="---From 11:00am to 10:00pm---"
          mainTitle="ORDER ONLINE"
        ></Title>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={image1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image5}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default OnlineOrder;
