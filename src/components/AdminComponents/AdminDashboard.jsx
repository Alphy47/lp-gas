import React from 'react'
import { Link } from 'react-router-dom'
import AdminDashboardStatsGrid from './AdminDashboardStatsGrid'

export default function AdminDashboard() {
    return  <div >
                <div className='overflow-y-auto h-[100%] flex w-[100%] '>
                    <AdminDashboardStatsGrid />
                </div>
                <div className=''>

                </div>
                
            </div>
    
    
}