import React, {useState} from 'react'
import indexbg from '../../assests/indexbg.jpg'
import { useNavigate } from 'react-router-dom'

import {
    FaEnvelope,
    FaLock,
    FaUser,
    FaTimes,
    FaAddressCard
} from 'react-icons/fa'

const SignIn = () => {

const navigate = useNavigate()

//radio buttons
const [userType, setUserType] = useState('customer')

const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  }

  const handleSignIn = () => {
    // Handle sign-in based on userType (customer or seller)
    // Redirect or perform actions based on the selected userType
  }

//check box
const [isChecked, setIsChecked] = useState(false)

const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // Do something when the checkbox is toggled
  }

  return (
    <div className='bg-cover h-screen flex items-center justify-center' 
         style={{ backgroundImage: `url(${indexbg})`, backgroundPosition: 'center' }}>
        <div className='container p-0 w-[50%] rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <div className='flex justify-end pr-1 pb-1'>
            <FaTimes size={25} style={{ color: '#FF5733'}} onClick={() => navigate ('/')}/>
          </div>
        <div className='header flex flex-col items-center gap-4 mb-5 mt-1'>
            <div className='flex text items-center text-[250%] font-bold pt-0' style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent'}}>Sign Up</div>
            <div className='underline w-[15%] h-[6px] bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#FF5733] rounded ' ></div>
        </div>
        <div className='inputs flex flex-col gap-1'>
            <div className='input flex items-center m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaUser className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <input className='  bg-transparent text-white text-[19px]'  style={{width:"85%"}} type='text' placeholder='Name'/>
            </div>
            <div className='input flex items-center  m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaEnvelope className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <input className='  bg-transparent text-white text-[19px]'  style={{width:"85%"}} type='text' placeholder='E-mail'/>
            </div>
        <div className='grid lg:grid-cols-2 gap-0'>  
            <div className="pl-[230px]">
                <input
                    type="radio"
                    id="customer"
                    value="customer"
                    checked={userType === 'customer'}
                    onChange={handleUserTypeChange}
                    className="m-2 form-radio text-red-500 border-red-500 mr-2 focus:ring-red-500"
                />
                <label className='text-white ' htmlFor="customer">I am a Customer</label>
            </div>
            <div className=" pl-[40px]">
                <input
                    type="radio"
                    id="seller"
                    value="seller"
                    checked={userType === 'seller'}
                    onChange={handleUserTypeChange}
                    className="m-2"
                />
                <label className='text-white' htmlFor="seller">I am a Seller</label>
            </div>
        </div>   
            <div className='input flex items-center  m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaAddressCard className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <input className='  bg-transparent text-white text-[19px]'  style={{width:"85%"}} type='text' placeholder='Address'/>
            </div>

            <div className='input flex items-center m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaLock className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <input className='  bg-transparent text-white text-[19px]'  style={{width:"85%"}} type='text' placeholder='Password'/>
            </div>
            <div className='input flex items-center m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaLock className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <input className='  bg-transparent text-white text-[19px]'  style={{width:"85%"}} type='text' placeholder='Re-enter Password'/>
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
            onClick={() => navigate ('/login')}
            >Log In</button>

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

            >Sign In</button>
            </div>
            
        </div>
        </div>

    </div>
  )
}

export default SignIn