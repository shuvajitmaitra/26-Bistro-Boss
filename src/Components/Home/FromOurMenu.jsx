import { Parallax } from "react-parallax";
import image1 from "../../assets/home/featured.jpg";
import Title from "../../Shared/Tilte/Title";

const FromOurMenu = () => {
  return (
    <Parallax
      style={{ backgroundImage: `url(${image1})` }}
      className=" h-screen bg-no-repeat bg-cover bg-center bg-black bg-blend-overlay bg-opacity-50 max-w-screen-2xl mx-auto mt-20 flex items-center justify-center"
    >
      <div className="text-white w-3/4 mx-auto">
        <Title
          subTitle="---Check it out---"
          mainTitle="FROM OUR MENU"
        ></Title>
        <div className="flex justify-center items-center gap-6 mt-10">
          <div className="flex-1">
            <img
              src={image1}
              alt=""
            />
          </div>
          <div className="flex-1">
            <p>March 20, 2023</p>
            <h1>WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="w-fit">
              <button className="btn btn-ghost border-b-4 border-b-white text-white font-semibold w-fit mb-6">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
export default FromOurMenu;
