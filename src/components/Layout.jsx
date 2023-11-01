import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import "../assets/css/layout.css"
const Layout = () => {
  return (
    <div className='layout'>
        <Navbar />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout