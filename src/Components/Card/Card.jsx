import { PropTypes } from "prop-types";
import useAuth from "../../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../../Hook/useCart";

const Card = ({ item }) => {
  const [,refetch] = useCart()
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId : item._id,
        email: user.email,
        name: item.name,
        price: item.price,
        image: item.image

      }
      axiosSecure.post("/carts",cartItem)
      .then( (response) =>{
        if(response.data.insertedId){
          refetch()
          toast.success("Successfully data sent")
        }
      })
      .catch( (error)=> {
        console.log(error);
      });
    } else {
      Swal.fire({
        title: "Add to cart?",
        text: "You need to be logged in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login",{ state: { from: location } } )
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
        }
      });
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
