import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types'
import loader from "../assets/Animation - 1717751158249 (1).json"
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";

const PrivateRoute = ({children}) => {
   const {user , loading} = useContext(AuthContext);
   const location = useLocation();
   if(loading){
    return <Lottie className='w-[20%] mx-auto' animationData={loader}></Lottie>

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