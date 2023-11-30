import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import { SelectedLinkProvider } from './lib/consts/SelectedLinkContext'
import indexbg from './../../assests/indexbg.jpg'
import AdminDashboardStatsGrid from './AdminDashboardStatsGrid'

export default function AdminLayout () {
  return (
    <div className=' flex h-screen w-screen  overflow-hidden' style={{ backgroundImage: `url(${indexbg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      
      <SelectedLinkProvider>
      <div className='sticky h-full z-50'>
          <SideBar />
        </div>
        
        <div className=' flex flex-col w-full'>
          <Header />
          <div className='sticky flex flex-row flex-1 top-0 z-10'> {/* Use flex-1 to occupy remaining space */}
            <div className='w-[100%]'> {/* Adjust width as needed */}
              <div className='absolute w-[100%] h-[100%]'> {/* Provide margin to fit under Header */}
                <Outlet /> {/* Render Outlet content under the Header */}
              </div>
            </div>
            
          </div>
        </div>
      </SelectedLinkProvider>
      
    </div>
  )
}
