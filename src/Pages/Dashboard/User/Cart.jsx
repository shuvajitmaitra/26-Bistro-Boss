
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useCart from "../../../Hook/useCart";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Title from "../../../Shared/Tilte/Title";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Cart = () => {
  const [cart,refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = parseFloat(
    cart.reduce((acc, cart) => acc + cart.price, 0)
  ).toFixed(2);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`)
        .then((res) => {
          if(res?.data?.deletedCount){
            toast.success("Item deleted")
            refetch()
          }
        });
      }
    });
  };
  return (
    <div className="bg-[#F6F6F6]">
      <Title
        subTitle="---My Cart---"
        mainTitle="WANNA ADD MORE?"
      ></Title>
      <div className="p-10 m-10 rounded-lg bg-white">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">Total Order: { cart.length}</h2>
        <h2 className="text-xl font-bold">Total Price: $ {totalPrice}</h2>
      {
        cart.length ?  <Link to="/dashboard/payment"> <button  disabled={!cart.length} className="btn  bg-[#D1A054] text-white">Pay</button></Link>
        :
         <button  disabled={!cart.length} className="btn btn-disabled bg-[#D1A054] text-white">Pay</button>
      }
      </div>
        <div className="overflow-x-auto rounded-t-xl">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] rounded-t-lg text-white">
                <th>
                  <label>#</label>
                </th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((singleCart, index) => (
                <tr key={singleCart._id}>
                  <th>
                    <label>
                      {index + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center justify-between gap-3">
                      <div className="avatar">
                        <div className=" rounded-2xl w-12 h-12">
                          <img src={singleCart.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="font-bold">{singleCart.name}</div>
                  </td>
                  <td>{singleCart.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(singleCart._id)}
                      className=" btn text-white bg-red-500 text-xl rounded flex justify-center items-center"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Cart;
