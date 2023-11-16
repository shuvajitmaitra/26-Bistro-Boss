import { useEffect, useState } from "react";
import Title from "../../Shared/Tilte/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, A11y} from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import {FaQuoteLeft} from "react-icons/fa"


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <Title
        subTitle="---What Our Clients Say---"
        mainTitle="TESTIMONIALS"
      ></Title>
      <Swiper
        navigation={true}
        modules={[Navigation, A11y]}
        loop={true}
      >
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id} >
                <div className="w-3/4 mx-auto text-center space-y-4">
                <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                ></Rating>
                </div>
            
               <FaQuoteLeft className=" w-fit mx-auto text-7xl"/>
              <p>{review.details}</p>
              <h3 className="text-yellow-600 text-2xl">{review.name}</h3>
                </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default Testimonials;
