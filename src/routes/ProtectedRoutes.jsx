import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom'
import  {AuthContext} from '../Context/AuthContext'

const ProtectedRoutes = ({children,allowedRoles}) => {

    const {token,role}=useContext(AuthContext)
    const isAllowed = allowedRoles.includes(role)
    const accessiableRoute = token && isAllowed ? children : <Navigate to='/login' replace={true}/> 
 
  return accessiableRoute;
}

export default ProtectedRoutes