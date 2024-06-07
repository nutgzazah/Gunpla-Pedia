import React from 'react'
import { useSelector } from 'react-redux'
import ResponsiveAppBar from '../layout/ResponsiveAppBar'
import { useNavigate } from 'react-router-dom';

const UserRoute = ({children}) => {
  const navigate = useNavigate();
  const { user } = useSelector((state)=>({...state}))
  console.log('UserRoute',user)
    //check if user login yet
    

  return user && user.user.token 
  ? <>
  { children }
  </>
   : <h1>No Login</h1>
}

export default UserRoute
