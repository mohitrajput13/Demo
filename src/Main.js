import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'


function Main() {

     

  return <>
  <Outlet/>
  </>
   
}

export default Main