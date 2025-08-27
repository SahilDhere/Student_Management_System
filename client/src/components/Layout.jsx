import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

function Layout() {
  return (
    <>
      <div className='relative '>
        <Navbar />
      </div>

      <div className='flex-grow'>
      <Outlet />  
      </div>

      
    </>
  )
}

export default Layout
