import { PropTypes } from "prop-types";
import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";


const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation()
  
    
    if (loading || isLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      );
    }
    if (user&& isAdmin) {
      return children;
    } else {
      return (
        <Navigate
          to="/login"
          state={{from:location.pathname}}
          replace
        ></Navigate>
      );
    }
  };
  
  
  AdminRoute.propTypes = {
    children : PropTypes.node
  }
export default AdminRoute;