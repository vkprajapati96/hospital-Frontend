import React from 'react'
import { Outlet } from 'react-router-dom'
import "../Dashboard.css"
import Sidebar from '../components/Sidebar'
function DashboardLayout() {
  return (
    <div>
     <Sidebar />

      <Outlet />
    </div>
  )
}

export default DashboardLayout
