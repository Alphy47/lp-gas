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

const SignUp = () => {


  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[userType, setUserType] = useState('customer')//radio values
  const[address, setAddress] = useState('')
  const[password, setPassword] = useState('')
  const[rePassword, setrePassword] = useState('')
  const[error, setError] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name.length===0 || email.length===0 || address.length===0 || password.length===0 || rePassword.length===0){
      setError(true)
    }else{
        console.log(name,email, address, userType, password, rePassword);
  
        var dataset={
          name:name,
          email:email,
          usertype:userType,
          address:address,
          password:password
        }
        //var dataset={name:"zczx",email:"zxczc",usertype:"customer",address:"zxczxc",password:"123"}
        console.log('come')

        try {
          const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataset)
          });
          if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();

          if (responseData && responseData.success) {
            console.log('Registration successful');
            navigate('/');
          } else {
            console.log('Registration unsuccessful');
            const errorMessage = responseData && responseData.message ? responseData.message : 'Unexpected error occurred';
            alert(errorMessage);
          }

        }catch (error) {
          console.error('Error:', error);
          alert('Network error occurred. Please try again.');
        }

         
      //   fetch('http://localhost:5000/api/register', {
      //     method: 'POST',
      //     body: JSON.stringify(dataset),
      //     headers: {
      //         'Content-Type': 'application/json'
      //     }
          
      // })
      // .then(res => {
      //     if (!res.ok) {
      //         throw new Error('Network response was not ok');
      //     }
      //     return res.json();
      // })
      // .then(response => {
      //     if (response && response.success) {
      //         console.log('Registration successful');
      //         navigate('/');
      //     } else {
      //         console.log('Registration unsuccessful');
      //         if (response && response.message) {
      //             alert(response.message);
      //         } else {
      //             alert('Unexpected error occurred');
      //         }
      //     }
      // })
      // .catch(error => {
      //     console.error('Error:', error);
      //     alert('Network error occurred. Please try again.');
      // });
    
    // if(username&&password)
      }
  }



//radio buttons


const handleUserTypeChange = (e) => {
  console.log(e.target.value);
    setUserType(e.target.value);
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
        <div className='container p-0 w-[50%] rounded-md min-w-fit' style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
          <div className='flex justify-end pr-1 pb-1'>
            <FaTimes size={25} style={{ color: '#FF5733'}} onClick={() => navigate ('/')}/>
          </div>
          <div className='header flex flex-col items-center gap-4 mb-5 mt-1'>
            <div className='flex text items-center text-[250%] font-bold pt-0' style={{ background: 'linear-gradient(to right, #FF5733, #FFC300, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent'}}>Sign Up</div>
            <div className='underline w-[15%] h-[6px] bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#FF5733] rounded ' ></div>
          </div>
          <div className='inputs flex flex-col gap-1'>
            <form action='#' onSubmit={handleSubmit}>
              <div className='input flex items-center m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaUser className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <div className='flex flex-col'>
                  <input className='  bg-transparent text-white text-[19px]'  
                          style={{width:"85%"}} 
                          type='text' 
                          placeholder='Name'
                          onChange={e=>setName(e.target.value)}
                  />
                  {error&&name.length<=0?
                  <label className='text-red-500 text-[13px]'>Name can't be empty.</label>:""}
                </div>
              </div>
              <div className='input flex items-center  m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
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
              <div className='flex gap-1 justify-center'>  
                <div className='pl-auto justify-end'>
                  <input
                    type="radio"
                    id="customer"
                    value="customer"
                    checked={userType === 'customer'}
                    onChange={handleUserTypeChange}
                    className="m-2 form-radio text-red-500 border-red-500 mr-2 focus:ring-red-500"/>
                  <label className='text-white ' htmlFor="customer">I am a Customer</label>
                </div>
                <div className=" pl-[40px] justify-end">
                  <input
                    type="radio"
                    id="seller"
                    value="seller"
                    checked={userType === 'seller'}
                    onChange={handleUserTypeChange}
                    className="m-2"/>
                  <label className='text-white' htmlFor="seller">I am a Seller</label>
                </div>
              </div>   
              <div className='input flex items-center  m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaAddressCard className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <div className='flex flex-col'>
                  <input className='  bg-transparent text-white text-[19px]'  
                          style={{width:"85%"}} 
                          type='text' 
                          placeholder='Address'
                          onChange={e=>setAddress(e.target.value)}
                  />
                  {error&&address.length<=0?
                  <label className='text-red-500 text-[13px]'>Address can't be empty.</label>:""}
                </div>
              </div>

              <div className='input flex items-center m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
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
              <div className='input flex items-center m-auto w-[300px] h-[60px] bg-transparent rounded-[6px]'>
                <FaLock className='px-2' size={35} style={{ color: '#FF5733'}}/>
                <div className='flex flex-col'>
                  <input className='  bg-transparent text-white text-[19px]'  
                          style={{width:"85%"}} 
                          type='password' 
                          placeholder='Re-enter Password'
                          onChange={e=>setrePassword(e.target.value)}
                  />
                  {error&&rePassword.length<=0?
                  <label className='text-red-500 text-[13px]'>Confirmation password can't be empty.</label>:""}
                </div>
              </div>
            
              <div className='submit-container flex flex-col my-[1rem] items-center'>

                <button type="submit"
                  className='bg-white w-[100px] rounded-md font-bold my-2  py-0 h-[30px] text-black' 
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
                  // onClick={handleSubmit}
                  >
                  Sign Up
                </button>
                <p className='text-white'>
                  Already a member? &nbsp;<a href='/login' className='text-[#FF5733] '>Login</a> here.
                </p>
              </div>
            </form>  
          </div>
        </div>

    </div>
  )
}

export default SignUp