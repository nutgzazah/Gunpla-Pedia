import React from 'react'
import { useSelector } from 'react-redux'
import ResponsiveAppBar from '../layout/ResponsiveAppBar'

const UserRoute = ({children}) => {
  const { user } = useSelector((state)=>({...state}))
  console.log('UserRoute',user)
    //check if user login yet
    

  return user && user.user.token 
  ? <>
  <ResponsiveAppBar/>
  { children }
  </>
   : <h1> NO LOGIN </h1>
}

export default UserRoute
