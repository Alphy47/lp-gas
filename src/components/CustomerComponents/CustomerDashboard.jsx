import React from 'react'
import { Link } from 'react-router-dom'
import CustomerDashboardStatsGrid from './CustomerDashboardStatsGrid'
import { useLocation } from 'react-router-dom';

export default function CustomerDashboard() {

    return  <div className='overflow-auto h-screen flex flex-col'>
    <div className='overflow-auto'>
      <CustomerDashboardStatsGrid />
    </div>
    <div className='overflow-auto text-white p-4 grid grid-cols-1 xl:grid-cols-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className='ml-10'>
        <h1 className='text-xl font-bold text-[#FF5733]'>Get Started:</h1>
        <div className='mt-2'>
          <ul>
            <li><b>Place Orders:</b> Select your gas cylinder type and quantity.</li>
            <li><b>Track Orders:</b> Monitor your orders from placement to delivery.</li>
            <li><b>Reach Out:</b> Communicate with sellers easily.</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col py-2'>
        <h1 className='text-xl font-bold text-[#FF5733]'>Our Commitment:</h1>
        <div className='mt-2 py-2'>
          <ul>
            <li>We're dedicated to your convenience and satisfaction.</li>
          </ul>
        </div>
        <h1 className='text-xl font-bold text-[#FF5733] py-2'>Let's Get Started!</h1>
        <div className='mt- py-2'>
          <ul>
            <li>Explore your dashboard and enjoy a hassle-free experience.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
    
    
}