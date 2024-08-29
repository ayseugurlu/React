import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

  // const {email} = useSelector((state)=>state.yetkiSlice)

  // return email ==="ayse" ? <Outlet/> : <Navigate to="/login"/>

  return useSelector((state)=>state.yetkiSlice.email) ==="ayse" ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRouter