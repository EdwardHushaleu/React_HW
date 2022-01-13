import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface RequireAuthProps {
    children: any;
}
 
 const RequireAuth : React.FC <RequireAuthProps> = ({children}) => {
   const location = useLocation();
   const auth = false;

   if(!auth){
    return <Navigate to='/login' state={{from: location}}/> ;
   }

    return children ; 
}
 
export {RequireAuth}