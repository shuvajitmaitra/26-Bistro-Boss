import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      console.log(result.user);

    })
    .catch(error=>{
      console.log(error.message);
    })
  }
    const navLink = <>
    <li>
        <NavLink to="/" >Home</NavLink>
    </li>
    <li>
        <NavLink to="/our-menu">Our Menu</NavLink>
    </li>
    <li>
        <NavLink to="/order-food/salad">Order Food</NavLink>
    </li>
    <li>
        <NavLink to="/order-food/salad"><span className="relative text-3xl"><FaShoppingCart />
</span><span className="absolute bg-yellow-500 p-[2px] right-0 top-0 text-xs rounded-full "> +99</span></NavLink>
    </li>

   {user ?
    <li>
        <button onClick={handleLogOut}>Sign Out</button>
    </li> 
    :
   <>
    <li>
        <NavLink to="/login">Login</NavLink>
    </li>
    <li>
        <NavLink to="/register">Register</NavLink>
    </li>
   </>
   }
    </>
    return (
        <Container>

<div className="navbar fixed z-10 max-w-screen-xl bg-black bg-opacity-30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss <br /> Restaurant</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 " >
            {navLink}
          </ul>
        </div>
      </div>
        </Container>
    );
};

export default Navbar;