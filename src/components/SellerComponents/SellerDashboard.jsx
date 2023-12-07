import React from 'react'
import SellerDashboardStatsGrid from './SellerDashboardStatsGrid'

export default function SellerDashboard() {
    return  <div className='overflow-auto h-screen flex flex-col'>
                <div className='flex w-[100%] '>
                    <SellerDashboardStatsGrid />
                </div>
                <div className=' text-white p-4 grid grid-cols-1 xl:grid-cols-2 justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <div className='ml-10 flex flex-col items-end justify-center'>
                    <label className='text-4xl font-bold text-white pr-7'>Welcome!</label>
                    <label className='text-1xl font-bold text-[#FF5733] pr-7'>"Empower Your Business, Serve with Excellence."</label>
                    {/* <div className='mt-2'>
                    <ul>
                        <li><b>Place Orders:</b> Select your gas cylinder type and quantity.</li>
                        <li><b>Track Orders:</b> Monitor your orders from placement to delivery.</li>
                        <li><b>Reach Out:</b> Communicate with sellers easily.</li>
                    </ul>
                    </div> */}
                </div>
                <div className='flex flex-col py-2'>
                    <h1 className='text-xl font-bold text-[#FF5733]'>Navigate Orders!</h1>
                    <div className='mt-2 py-2'>
                    <ul>
                        <li>Seamlessly manage incoming orders, paving the way for swift deliveries and exceeding customer expectations.</li>
                    </ul>
                    </div>
                    <h1 className='text-xl font-bold text-[#FF5733] py-2'>Stock Up!</h1>
                    <div className='mt- py-2'>
                    <ul>
                        <li>Effortlessly requisition fresh stock from Gas Hub, meeting your clientele's needs promptly and effectively.</li>
                    </ul>
                    </div>
                    <h1 className='text-xl font-bold text-[#FF5733] py-2'>Nurture Feedback</h1>
                    <div className='mt- py-2'>
                    <ul>
                        <li>Embrace and elevate customer insights, crafting exceptional experiences and cultivating enduring connections.</li>
                    </ul>
                    </div>
                </div>
                </div>
                
            </div>
    
    
}