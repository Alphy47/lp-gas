import React from 'react';
import {
  FaUsers,
  FaCubes,
  FaBell,
  FaCartArrowDown,
  FaExclamationTriangle,
} from 'react-icons/fa';

function SellerDashboardStatsGrid() {
  return (
    
    <div className='relative max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 text-white '>
      
      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[150px]  flex flex-col border border-[#FF5733]' 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div>
            <h1 className='text-1xl font-bold m-[5%]'>Total Orders</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%] flex justify-center mt-1'>
                <FaCartArrowDown size={25} style={{ color: '#2196F3'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>
      
      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[150px]  flex flex-col border border-[#FF5733]' 
                        style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div className=''>
            <h1 className='text-1xl font-bold m-[5%]'>In Stocks</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%] flex justify-center mt-1'>
                <FaCubes size={25} style={{ color: '#4CAF50'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>

      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[150px]  flex flex-col border border-[#FF5733]' 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div>
            <h1 className='text-1xl font-bold m-[5%]'>Notifications</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%] flex justify-center mt-1'>
                <FaBell size={25} style={{ color: '#FFEB3B'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>

      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[150px]  flex flex-col border border-[#FF5733]' 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div>
            <h1 className='text-1xl font-bold m-[5%]'>Complaints</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%] flex justify-center mt-1'>
                <FaExclamationTriangle size={25} style={{ color: '#911a11'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>

      
    </div>
  );
}

export default SellerDashboardStatsGrid;