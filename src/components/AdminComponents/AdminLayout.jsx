import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

export default function AdminLayout () {
  return (
    <div className='flex flex-row bg-slate-600 h-screen w-screen overflow-hidden'>
      <SideBar />
      
      <div>
        <div className='bg-white text-[#0a042d]]'>SideBar</div>
        <div><Outlet /></div>
      </div>
      <p>footer</p>
    </div>
  )
}
