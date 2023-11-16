import { checkPropTypes } from "prop-types";

const Menu = ({title, price, image, description}) => {
    return (
        <div>
             <div className="flex gap-6">
        <div className="w-1/4">
          <img
            src={image}
            className="rounded-full rounded-tl-none"
          />
        </div>
        <div className="w-3/4">
          <div className="flex justify-between">
            <h3 className="text-xl font-medium uppercase">{title}</h3>
            <p className="text-yellow-600">${price}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
        </div>
    );
};

Menu.propTypes = {
    title : checkPropTypes.string,
    price : checkPropTypes.number,
    image : checkPropTypes.image,
    description : checkPropTypes.string,
}
export default Menu;