import React, {useState} from 'react'
import indexbg from '../../assests/indexbg.jpg'
import { useNavigate } from 'react-router-dom';
import {
    FaLock,
    FaUser,
    FaTimes
} from 'react-icons/fa'

const AdminLogin = () => {

const[username, setUsername] = useState('')
const[password, setPassword] = useState('')
const[error, setError] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
  if(username.length===0 || password.length===0){
    setError(true)
  }
  if(username&&password)
  console.log(username,password)
}

const navigate = useNavigate()

  return (
    <div className='bg-cover h-screen flex items-center justify-center' 
         style={{ backgroundImage: `url(${indexbg})`, backgroundPosition: 'center' }}>
        <div className='container p-0 w-[50%] rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
          <div className='flex justify-end pr-1 pb-1'>
            <FaTimes size={25} style={{ color: '#FF5733'}} onClick={() => navigate ('/')}/>
          </div>
        <div className='header flex flex-col items-center gap-4 mb-5 mt-1'>
            <div className='flex text items-center text-[200%] font-bold pt-0' style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent'}}>Admin Login</div>
            <div className='underline w-[15%] h-[6px] bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#FF5733] rounded ' ></div>
        </div>
        <div className='inputs flex flex-col gap-1'>
        <form action='#' onSubmit={handleSubmit}>   
            <div className='username input flex items-center  m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <FaUser className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <div className='flex flex-col'>
                  <input className=' bg-transparent text-white text-[19px]' 
                          id="username" 
                          name='username' 
                          style={{width:"85%"}} 
                          type='text' 
                          placeholder='Username'
                          onChange={e=>setUsername(e.target.value)}
                  />
                  {error&&username.length<=0?
                  <label className='text-red-500 text-[13px]'>Username can't be empty.</label>:""}
                </div>
            </div>
            <div className='adminpassword input flex items-center m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <FaLock className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <div className='flex flex-col'>
                  <input className='bg-transparent text-white text-[19px]' 
                          id='adminpassword' 
                          name='adminpassword' 
                          style={{width:"85%"}} 
                          type='password' 
                          placeholder='Password'
                          onChange={e=>setPassword(e.target.value)}
                  />
                  {error&&password.length<=0?
                  <label className='text-red-500 text-[13px]'>Password can't be empty.</label>:""}
                </div>
            </div>
            
            <div className='submit-container flex mx-auto my-[1rem]  gap-1'>

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
          </form>  
        </div>
        </div>

    </div>
  )
}

export default AdminLogin