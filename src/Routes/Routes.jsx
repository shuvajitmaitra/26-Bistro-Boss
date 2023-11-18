import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import AddItem from "../Pages/Dashboard/Admin/AddItem";
import ManageItem from "../Pages/Dashboard/Admin/ManageItem";
import ManageBooking from "../Pages/Dashboard/Admin/ManageBooking";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order-food/:category",
        element: (

            <OrderFood></OrderFood>

        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "manageItem",
        element: <ManageItem></ManageItem>,
      },
      {
        path: "manageBooking",
        element: <ManageBooking></ManageBooking>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ]
  }
]);

export default Routes;
