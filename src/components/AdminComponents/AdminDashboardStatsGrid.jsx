import React from 'react';
import {
  FaIdBadge,
  FaUsers,
  FaTruck,
  FaBell,
  FaTwitterSquare,
} from 'react-icons/fa';

function AdminDashboardStatsGrid() {
  return (
    
    <div className='relative max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 text-white '>
      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[160px]  flex flex-col border border-[#FF5733]' 
                        style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div className=''>
            <h1 className='text-1xl font-bold m-[5%]'> Total Sellers</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%] flex justify-center mt-1'>
                <FaIdBadge size={25} style={{ color: '#4CAF50'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>

      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[160px]  flex flex-col border border-[#FF5733]' 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div>
            <h1 className='text-1xl font-bold m-[5%]'>Total Customers</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%] flex justify-center mt-1'>
                <FaUsers size={25} style={{ color: '#2196F3'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>

      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[160px]  flex flex-col border border-[#FF5733]' 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <div>
            <h1 className='text-1xl font-bold m-[5%]'>Total Requests</h1>
        </div>
        <div className=' flex flex-row w-[100%]'>
            <div className='w-[50%] flex justify-center mt-1'>
                <FaTruck size={25} style={{ color: '#fa824b'}}/>
            </div>
            <label className='text-2xl'>199</label>
        </div>
      </div>

      <div className='relative text-white mt-5 pb-5 px-3 h-[70%] max-h-[100px] w-[160px]  flex flex-col border border-[#FF5733]' 
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
    </div>
  );
}

export default AdminDashboardStatsGrid;

{/*import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

function AdminDashboardStatsGrid () {
    return(
        <div className='relative max-w-[1240px] mx-auto  grid lg:grid-cols-4 gap-1 text-white'>
            
            <div className='relative bg-[#4CAF50] text-black w-[300px] m-5 h-[150px]'>
                <h1 className='w-[full] text-1xl font-bold ml-5 mt-5'>Sellers</h1>
                <div className='items-center'>
                <label className='text-3xl'>199</label>
                </div>
            </div>

            <div className='relative bg-[#2196F3] text-black w-[300px] m-5 h-[150px]'>
                <div>
                    <h1 className='w-full text-1xl font-bold ml-5 mt-5 '>Customers</h1>
                </div>
                
                <div>
                    <label className='text-3xl ml-20 '>199</label>
                </div>
                
                
            </div>

            <div className='relative bg-[#795548] text-black w-[300px] m-5 h-[150px]'>
                <h1 className='w-full text-1xl font-bold ml-5 mt-5'>Stock Requests</h1>
                
                <label className='text-3xl'>199</label>
                
            </div>

            <div className='relative bg-[#FFEB3B] text-black w-[300px] m-5 h-[150px]'>
                <h1 className='w-full text-1xl font-bold ml-5 mt-5'>Notifications</h1>
                
                <label className='text-3xl'>199</label>
                
            </div>
    </div>
    )
}
export default AdminDashboardStatsGrid */}

