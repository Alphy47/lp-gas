import React, {useState} from 'react'
import indexbg from '../../assests/indexbg.jpg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
    FaEnvelope,
    FaLock,
    FaUser,
    FaTimes
} from 'react-icons/fa'

const LoginSignUp = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[error, setError] = useState(false)
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.length===0 || password.length===0){
      setError(true)
    }else{
      console.log(email,password)

      const dataset={

        email:email,
        password:password
      }

      fetch('http://localhost:5000/api/userlogin', { 

      method: 'POST',  
      body: JSON.stringify(dataset),  
      headers:{
        'Content-Type': 'application/json'
       }
        }).then(res => res.json())
        .then(response => {

          console.log('success',response.success);
          if(response.success===true){ 
          console.log('login success');
            
            if(response.userType === 'seller'){
              navigate('/sellerhome')
            } else if (response.userType === 'customer'){
              navigate('/customerhome')
              console.log(response)
            }
  
          }else{ 
          console.log('login unsuccess',response.message);
          alert(response.message)
          }
  
         })
         .catch(error => console.error('Error:', error));
    }
    
  }



const [action, setAction] = useState("Log In")

  return (
    <div className='bg-cover h-screen flex items-center justify-center' 
         style={{ backgroundImage: `url(${indexbg})`, backgroundPosition: 'center' }}>
        <div className='container p-0 w-[50%] rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
          <div className='flex justify-end pr-1 pb-1'>
            <FaTimes size={25} style={{ color: '#FF5733'}} onClick={() => navigate ('/')}/>
          </div>
        <div className='header flex flex-col items-center gap-4 mb-5 mt-1'>
            <div className='flex text items-center text-[250%] font-bold pt-0' style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent'}}>{action}</div>
            <div className='underline w-[15%] h-[6px] bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#FF5733] rounded ' ></div>
        </div>
        <div className='inputs flex flex-col gap-1'>
          <form action='#' onSubmit={handleSubmit}> 
            <div className='input flex items-center  m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <FaEnvelope className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <div className='flex flex-col'>
                  <input className='  bg-transparent text-white text-[19px]'  
                          style={{width:"85%"}} 
                          type='text' 
                          placeholder='E-mail' 
                          onChange={e=>setEmail(e.target.value)}
                  />
                  {error&&email.length<=0?
                  <label className='text-red-500 text-[13px]'>Email can't be empty.</label>:""}
                </div>
            </div>
            <div className='input flex items-center m-auto w-[300px] h-[80px] bg-transparent rounded-[6px]'>
                <FaLock className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <div className='flex flex-col'>
                <input className='  bg-transparent text-white text-[19px]'  
                        style={{width:"85%"}} 
                        type='password' 
                        placeholder='Password'
                        onChange={e=>setPassword(e.target.value)}
                />
                {error&&password.length<=0?
                  <label className='text-red-500 text-[13px]'>Password can't be empty.</label>:""}
                </div>
            </div>
            
            <div className='submit-container flex flex-col mx-auto my-[1rem] items-center'>
            <button className='bg-white w-[100px] rounded-md font-bold mb-4 mt-2 py-0 h-[30px] text-black' 
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
              onClick={() => navigate ('#')}
            >Login</button>

            <p className='text-white'>
              New to Gas Hub? &nbsp;<a href='/signup' className='text-[#FF5733] '>Sign Up</a> here.
            </p>
            </div>
            <div>
              <p className='text-white flex pb-6 justify-center'>LogIn As an &nbsp;
              
                <a href='/adminlogin' className='text-[#FF5733] '>Administrator.</a>
              
              </p>
            </div>
          </form>   
        </div>
        </div>

    </div>
  )
}

export default LoginSignUp

