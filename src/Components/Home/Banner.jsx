import image1 from "../../assets/home/01.jpg";
import image2 from "../../assets/home/02.jpg";
import image3 from "../../assets/home/03.png";
import image4 from "../../assets/home/04.jpg";
import image5 from "../../assets/home/05.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel  
      infiniteLoop="true"
      >
        <div className="h-[90vh]">
          <img  src={image1} className=" h-full"/>
          
        </div>
        <div className="h-[90vh]">
        <img  src={image2} className=" h-full"/>
        </div>
        <div className="h-[90vh]">
        <img  src={image3} className=" h-full"/>
        </div>
        <div className="h-[90vh]">
        <img  src={image4}className=" h-full"/>
        </div>
        <div className="h-[90vh]">
        <img  src={image5}className=" h-full"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
