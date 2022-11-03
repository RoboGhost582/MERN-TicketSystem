import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import UserContext from "../Context/UserContext";
import { useContext } from "react";

const ProtectedRoute = () => {
    const { userStatus } = useContext(UserContext);

    return(
      userStatus ? <Outlet/> :  <Navigate to= "/login" />
    )

    
};

export default ProtectedRoute;