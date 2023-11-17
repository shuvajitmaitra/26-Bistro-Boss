import useCart from "../../../Hook/useCart";
import Title from "../../../Shared/Tilte/Title";
import { RiDeleteBin6Line } from "react-icons/ri";



const Cart = () => {

const [cart] = useCart()

const totalPrice = parseFloat(cart.reduce((acc, cart)=> acc+ cart.price,0))
    return(
        <div className="bg-[#F6F6F6]">
           <Title
           subtitle='---My Cart---'
           mainTitle="WANNA ADD MORE?"
           ></Title>
          <div className="flex justify-between items-center ">
            <h2>Total Order:{cart.length}</h2>
            <h2>Total Price:{totalPrice}</h2>
            <button>Pay</button>
          </div>
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr  className="bg-[#D1A054] rounded-t-lg" >
        <th>
          <label>
           #
          </label>
        </th>
        <th>Item Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((singleCart, index) => <tr key={singleCart._id}>
          <th>
            <label>
             {index+1}
             {console.log(singleCart)}
            </label>
          </th>
          <td>
            <div className="flex items-center justify-between gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={singleCart.image} />
                </div>
              </div>
               
            
            </div>
          </td>
          <td> <div className="font-bold">{singleCart.name}</div></td>
          <td>{singleCart.price}</td>
          <th>
            <button className=" btn text-white bg-red-500 text-xl rounded flex justify-center items-center"><RiDeleteBin6Line/></button>
          </th>
        </tr>
        )
      }
     </tbody>
    
  </table>
</div>
          </div>
        </div>
    )}
export default Cart;