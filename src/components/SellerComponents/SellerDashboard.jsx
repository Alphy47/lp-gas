import React from 'react'
import { Link } from 'react-router-dom'
import SellerDashboardStatsGrid from './SellerDashboardStatsGrid'

export default function SellerDashboard() {
    return  <div >
                <div className='overflow-y-auto h-[100%] flex w-[100%] '>
                    <SellerDashboardStatsGrid />
                </div>
                <div className=''>

                </div>
                
            </div>
    
    
}