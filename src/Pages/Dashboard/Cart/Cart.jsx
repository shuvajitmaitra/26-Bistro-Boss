import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";
import Title from "../../../Shared/Tilte/Title";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

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
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            refetch()
          }
        });
      }
    });
  };
  return (
    <div className="bg-[#F6F6F6]">
      <Title
        subtitle="---My Cart---"
        mainTitle="WANNA ADD MORE?"
      ></Title>
      <div className="flex justify-between items-center ">
        <h2>Total Order: { cart.length}</h2>
        <h2>Total Price: $ {totalPrice}</h2>
        <button>Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] rounded-t-lg">
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
