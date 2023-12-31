/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateBlog = ({children}) => {
    const {user}= useContext(AuthContext)
    if(user){
        return children
    }
    return (
        <>
            <Navigate to='/'></Navigate>
        </>
    );
};

export default PrivateBlog;