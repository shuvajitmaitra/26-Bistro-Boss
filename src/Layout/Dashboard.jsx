import {
  FaBook,
  FaCalendar,
  FaHome,
  FaListUl,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex text-center ">
      <div className="w-64 bg-[#D1A054] space-y-3">
        <div>
          <h3 className="font-bold">
            Bistro Boss <br /> Restaurant
          </h3>
        </div>
        {isAdmin ? (
          <>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaHome />
              <li>
                <NavLink to={"adminHome"}>Admin Home</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaUtensils />
              <li>
                <NavLink to={"addItem"}>add items</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaListUl />
              <li>
                <NavLink to={"manageItem"}>manage items</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaBook />
              <li>
                <NavLink to="manageBooking">manage Booking</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaUsers />
              <li>
                <NavLink to={"allUsers"}>All users</NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaHome />
              <li>
                <NavLink>User Home</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaCalendar />
              <li>
                <NavLink>Reservation</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaWallet />
              <li>
                <NavLink>payment history</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaShoppingCart />
              <li>
                <NavLink to="cart">My Cart</NavLink>
              </li>
            </ul>
            <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
              <FaRankingStar />
              <li>
                <NavLink>My Cart</NavLink>
              </li>
            </ul>
          </>
        )}
        <hr className="mx-6" /> {/* Divider is here */}
        <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
          <MdOutlineHome />
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
          <IoMenu />
          <li>
            <NavLink to="/our-menu">Menu</NavLink>
          </li>
        </ul>
        <ul className="flex items-center justify-start px-10 text-md gap-2 hover:text-white font-medium">
          <FaShoppingBag />
          <li>
            <NavLink to="/order-food/salad">Order</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Dashboard;
