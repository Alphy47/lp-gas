import React from 'react'
import CustomerDashboardStatsGrid from './CustomerDashboardStatsGrid'

export default function CustomerDashboard() {

    return  <div className='overflow-auto h-screen flex flex-col'>
    <div className='flex w-[100%]'>
      <CustomerDashboardStatsGrid />
    </div>
    <div className='text-white p-4 grid grid-cols-1 xl:grid-cols-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className='ml-10 flex flex-col items-end justify-center'>
      <label className='text-4xl font-bold text-white pr-7'>Welcome!</label>
      <label className='text-1xl font-bold text-[#FF5733] pr-7'>"Fueling Convenience, Powering Comfort: Your 
                                                        seamless gateway to hassle-free gas cylinder orders and exceptional service."</label>
        {/* <h1 className='text-xl font-bold text-[#FF5733]'>Get Started:</h1>
        <div className='mt-2'>
          <ul>
            <li><b>Place Orders:</b> Select your gas cylinder type and quantity.</li>
            <li><b>Track Orders:</b> Monitor your orders from placement to delivery.</li>
            <li><b>Reach Out:</b> Communicate with sellers easily.</li>
          </ul>
        </div> */}
      </div>
      <div className='flex flex-col py-2'>
      <h1 className='text-xl font-bold text-[#FF5733]'>Get Started!</h1>
        <div className='mt-2 py-2'>
          <ul>
            <li><b>Fuel Choices:</b> Handpick your gas cylinder type and desired quantity.</li>
            <li><b>Trace Progress:</b> Monitor every step from order to doorstep delivery.</li>
            <li><b>Connect Seamlessly:</b> Effortlessly engage with sellers for any queries or concerns.</li>
          </ul>
        </div>
        <h1 className='text-xl font-bold text-[#FF5733]'>Our Pledge:</h1>
        <div className='mt-2 py-2'>
          <ul>
            <li>Devoted to ensuring your ease and contentment.</li>
          </ul>
        </div>
        <h1 className='text-xl font-bold text-[#FF5733] py-2'>Discover Specials:</h1>
        <div className='mt- py-2'>
          <ul>
            <li>Unearth exclusive deals and promotions to enhance your gas ordering experience. </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
    
    
}