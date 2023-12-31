import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    const location = useLocation()

    if(isLoading){
        <span className="loading loading-spinner loading-lg"></span> 
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;