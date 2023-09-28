import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({isLoggedIn, children}) => {
    
  if(isLoggedIn) {
    return children; //ager tum login ho to dashborad jaogey
  }
  else{
   return <Navigate to="/login"/>
  }
}

export default PrivateRoute