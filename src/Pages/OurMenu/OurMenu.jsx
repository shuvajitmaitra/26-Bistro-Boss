import MenuByCategory from "../../Shared/MenuByCategory/MenuByCategory";
import imageCover from "../../assets/menu/banner3.jpg";
import chefService from "../../assets/home/chef-service.jpg";
import { Helmet } from "react-helmet-async";
import { Parallax } from "react-parallax";

const OurMenu = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>

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
              OUR MENU
            </h1>
            <p>Would you like to try a dish?</p>
          </div>
        </div>
      </Parallax>

      <MenuByCategory
        subTitle="---Don't miss---"
        mainTitle="TODAY'S OFFER"
        category="popular"
      ></MenuByCategory>
      {/* DESSERTS */}
      <div
        style={{ backgroundImage: `url(${chefService})` }}
        className=" h-screen bg-no-repeat bg-cover bg-center max-w-screen-2xl mx-auto mt-20 flex items-center justify-center"
      >
        <div
          className="p-20 bg-black bg-opacity-50 text-white text-center space-y-6 w-3/4 mx-auto
           "
        >
          <h1 className="text-xl md:text-4xl font-medium uppercase">
            DESSERTS
          </h1>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <MenuByCategory category="dessert"></MenuByCategory>

      <div
        style={{ backgroundImage: `url(${chefService})` }}
        className=" h-screen bg-no-repeat bg-cover bg-center max-w-screen-2xl mx-auto mt-20 flex items-center justify-center"
      >
        <div
          className="p-20 bg-black bg-opacity-50 text-white text-center space-y-6 w-3/4 mx-auto
           "
        >
          <h1 className="text-xl md:text-4xl font-medium uppercase">PIZZA</h1>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <MenuByCategory category="pizza"></MenuByCategory>

      <div
        style={{ backgroundImage: `url(${chefService})` }}
        className=" h-screen bg-no-repeat bg-cover bg-center max-w-screen-2xl mx-auto mt-20 flex items-center justify-center"
      >
        <div
          className="p-20 bg-black bg-opacity-50 text-white text-center space-y-6 w-3/4 mx-auto
           "
        >
          <h1 className="text-xl md:text-4xl font-medium uppercase">salad</h1>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <MenuByCategory category="salad"></MenuByCategory>

      <div
        style={{ backgroundImage: `url(${chefService})` }}
        className=" h-screen bg-no-repeat bg-cover bg-center max-w-screen-2xl mx-auto mt-20 flex items-center justify-center"
      >
        <div
          className="p-20 bg-black bg-opacity-50 text-white text-center space-y-6 w-3/4 mx-auto
           "
        >
          <h1 className="text-xl md:text-4xl font-medium uppercase">Soup</h1>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <MenuByCategory category="soup"></MenuByCategory>
    </div>
  );
};
export default OurMenu;
