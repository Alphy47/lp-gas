import React from 'react'
import { Link } from 'react-router-dom'
import CustomerDashboardStatsGrid from './CustomerDashboardStatsGrid'

export default function CustomerDashboard() {
    return  <div >
                <div className='overflow-y-auto h-[100%] flex w-[100%] '>
                    <CustomerDashboardStatsGrid />
                </div>
                <div className=''>

                </div>
                
            </div>
    
    
}