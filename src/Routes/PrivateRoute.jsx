import { useContext } from "react";
import AuthProvider from "../Provider/AuthProvider";
import PropTypes from 'prop-types'
import loader from "../assets/Animation - 1717751158249 (1).json"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
   const {user , loading} = useContext(AuthProvider);
   const location = useLocation();
   if(loading){
    return <span>{loader}</span>
   }
   if(user){
    return children;
   }
   return <Navigate state={location.pathname} to='/signIn'></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}