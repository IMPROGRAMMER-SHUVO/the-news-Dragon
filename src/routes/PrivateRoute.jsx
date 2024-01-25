import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loadin}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
   if(loadin){
    return       <Spinner animation="border" variant="warning" />
   }
    if(user){
        return children;

    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>

};

export default PrivateRoute;

/**
 * step ---1
 * 1 chack user login or not
 * 2 if user is logged in  and then allowed to vist the page
 * 3 else redirect to the user the login page
 * 
 */