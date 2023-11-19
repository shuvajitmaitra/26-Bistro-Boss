import { Parallax } from "react-parallax";
import { PropTypes } from "prop-types";

const Cover = ({ title, description, imageCover }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -100, max: 100 }}
        bgImage={imageCover}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className=" h-screen bg-no-repeat bg-cover bg-center max-w-screen-2xl mx-auto flex items-center justify-center">
          <div
            className="p-20 bg-black bg-opacity-50 text-white text-center space-y-6 w-3/4 mx-auto
           "
          >
            <h1 className="text-xl md:text-6xl font-medium uppercase">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

Cover.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageCover: PropTypes.string,
};
export default Cover;
