import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout () {
  return (
    <div>
      <div>SideBar</div>
      <div>header</div>
      <div>{<Outlet />}</div>
    </div>
  )
}
