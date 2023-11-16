import { PropTypes } from "prop-types";
import useAuth from "../../Hook/useAuth";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate()
  
  const handleAddToCart = () => {
    if (user && user.email) {
      console.log(user);
    } else {
      navigate()
    }
  };
  return (
    <div className="rounded-lg text-center space-y-3  relative flex flex-col bg-slate-100 shadow">
      <img
        src={item.image}
        alt=""
        className="rounded-t-lg"
      />
      <p className="bg-slate-600 text-white rounded absolute right-0 px-2 mr-4 ">
        $ {item.price}
      </p>
      <h3 className="text-xl font-medium">{item.name}</h3>
      <p>{item.recipe}</p>
      <div className="flex-grow"></div>
      <div className="w-fit mx-auto">
        <button
          onClick={handleAddToCart}
          className="btn btn-ghost border-b-4 border-b-yellow-600 text-yellow-600 font-semibold w-fit mb-6"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
