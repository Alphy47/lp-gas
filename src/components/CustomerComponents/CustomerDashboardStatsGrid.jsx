import React from 'react';
import {
  FaIdBadge,
  FaUsers,
  FaRoute,
  FaBell,
  FaTwitterSquare,
} from 'react-icons/fa';

function CustomerDashboardStatsGrid() {
  return (
    
    <div className='relative max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-white '>
      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[150px]  flex flex-col border border-[#FF5733]' 
                        style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div className=''>
            <h1 className='text-1xl font-bold m-[5%]'>Total Sellers</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%]'>
                <FaIdBadge size={25} style={{ color: '#4CAF50'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>

      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[150px]  flex flex-col border border-[#FF5733]' 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div>
            <h1 className='text-1xl font-bold m-[5%]'>Order Status</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%]'>
                <FaRoute size={30} style={{ color: '#2196F3'}}/>
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
            <div className='w-[50%]'>
                <FaBell size={25} style={{ color: '#FFEB3B'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboardStatsGrid;