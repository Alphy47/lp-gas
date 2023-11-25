import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '..//../assests/logo.png'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

const SellerNavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
        
    }

    const navigate = useNavigate()

  return (
    <div className=' flex justify-between items-center sticky top-0 w-[100%] h-24 max-w-[100%] mx-auto px-9 text-white bg-[#0a042d]'>

    <div>
        <img className='w-[75px] mx-auto my-4' src={logo} alt='/' />
    </div>

    <ul className='hidden md:flex h-[45%] py-[7px] ' >
        <li className='link'>
            
                <button className='bg-transparent w-[90px] rounded-md font-bold my-0 mx-auto py-1 text-white'
                        style={{transition: 'background-color 0.3s color 0.3s', cursor: 'pointer',
                        border: 'none', 
                        backgroundColor: 'transparent',
                        color: 'white' }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#FF5733'; 
                                e.target.style.color = 'white'; 
                            }}

                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'white'; 
                            }}>
                    Dashboard
                </button>
            
            
        </li>
        
        <li className='link'>
            <button className='bg-transparent w-[70px] rounded-md font-bold my-0 mx-auto py-1 text-white'
                        style={{transition: 'background-color 0.3s color 0.3s', cursor: 'pointer',
                        border: 'none', 
                        backgroundColor: 'transparent',
                        color: 'white' }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#FF5733'; 
                                e.target.style.color = 'white'; 
                            }}

                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'white'; 
                            }}>
                    Orders
                </button>
        </li>

        <li className='link'>
            <button className='bg-transparent w-[70px] rounded-md font-bold my-0 mx-auto py-1 text-white'
                        style={{transition: 'background-color 0.3s color 0.3s', cursor: 'pointer',
                        border: 'none', 
                        backgroundColor: 'transparent',
                        color: 'white' }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#FF5733'; 
                                e.target.style.color = 'white'; 
                            }}

                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'white'; 
                            }}>
                    Stocks
                </button>
        </li>

        <FaUserCircle className='mx-2 mt-1' size={25} style={{ color: '#FF5733'}}/>
        
        
    </ul>

    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
    </div>

    <div  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#FF5733] border-t border-t-[#FF5733] border- bg-[#0a042d] opacity-2 ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <div>
        <img className='w-[90px] mx-auto my-4' src={logo} alt='/' />
    </div>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-[#FF5733]'>
            
                Home
            
            </li>
            
            <li className='p-4 border-b border-[#FF5733]'>About</li>
            
        </ul>
    </div>
</div>
  )
}

export default SellerNavBar