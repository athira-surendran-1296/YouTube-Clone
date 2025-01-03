import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <Sidebar />
      <div className='flex'>
          <Outlet />
      </div>
    </div>
  )
}

export default Body