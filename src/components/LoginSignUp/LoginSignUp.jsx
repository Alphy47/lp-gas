import React, {useState} from 'react'
import indexbg from '../../assests/indexbg.jpg'
import { useNavigate } from 'react-router-dom';

import {
    FaEnvelope,
    FaLock,
    FaUser,
} from 'react-icons/fa'

const LoginSignUp = () => {

const navigate = useNavigate()

const [action, setAction] = useState("Log In")

  return (
    <div className='bg-cover h-screen flex items-center justify-center' 
         style={{ backgroundImage: `url(${indexbg})`, backgroundPosition: 'center' }}>
        <div className='container p-0 w-[50%] rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <div className='header flex flex-col items-center gap-4 mb-5 mt-1'>
            <div className='flex text items-center text-[250%] font-bold pt-0' style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent'}}>{action}</div>
            <div className='underline w-[15%] h-[6px] bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#FF5733] rounded ' ></div>
        </div>
        <div className='inputs flex flex-col gap-1'>
            
            <div className='input flex items-center  m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <FaEnvelope className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <input className='  bg-transparent text-white text-[19px]'  style={{width:"85%"}} type='text' placeholder='E-mail'/>
            </div>
            <div className='input flex items-center m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <FaLock className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <input className='  bg-transparent text-white text-[19px]'  style={{width:"85%"}} type='text' placeholder='Password'/>
            </div>
            
            <div className='submit-container flex mx-auto my-[1rem]  gap-1'>
            <button className='bg-white w-[100px] rounded-md font-bold mb-4 mt-2 mx-auto py-0 h-[30px] text-black' 
            style = {{ transition: 'background-color 0.3s, color 0.3s',
              border: 'none', 
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'black' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FF5733'; 
                e.target.style.color = 'white'; 
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black'; 
              }}
              onClick={() => navigate ('/signin')}
            >Sign Up</button>

<button className='bg-white w-[100px] rounded-md font-bold my-2 mx-auto py-0 h-[30px] text-black' 
            style = {{ transition: 'background-color 0.3s, color 0.3s',
              border: 'none', 
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'black' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FF5733'; 
                e.target.style.color = 'white'; 
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black'; 
              }}

            >Log In</button>
            </div>
            
        </div>
        </div>

    </div>
  )
}

export default LoginSignUp

