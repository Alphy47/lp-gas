import React from 'react'
import { useNavigate } from 'react-router-dom';
import indexbg from './../../assests/indexbg.jpg'
import {
    FaTimes
} from 'react-icons/fa'

const AdminMessages = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-cover h-screen flex items-center justify-center' 
         style={{ backgroundImage: `url(${indexbg})`, backgroundPosition: 'center' }}>
        <div className='container p-0 w-[50%] rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            <div className='flex justify-end pr-1 pb-1'>
                <FaTimes size={25} style={{ color: '#FF5733'}} onClick={() => navigate ('/adminhome')}/>
            </div>
            <div className='header flex flex-col items-center gap-4 mb-5 mt-1'>
                <div className='flex text items-center text-[250%] font-bold pt-0' 
                    style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', 
                    WebkitBackgroundClip: 'text', 
                    color: 'transparent'}}>Messages
                </div>
                <div className='underline w-[15%] h-[6px] bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#FF5733] rounded ' >
            </div>
        </div>
        </div>

    </div>
  )
}

export default AdminMessages