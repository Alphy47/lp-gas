import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assests/logo.png'
import { useRef } from "react"

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
        
    }
    


  return (
    <div className='hero flex justify-between items-center sticky top-0 w-[100%] h-24 max-w-[100%] mx-auto px-9 text-white bg-[#0a042d]'>

        <div>
            <img className='w-[90px] mx-auto my-4' src={logo} alt='/' />
        </div>

        <ul className='hidden md:flex h-[45%] py-[7px] ' >
            <li className='link p-2 py-1 px-4 justify-center rounded-md' 
                style = {{ transition: 'background-color 0.3', cursor: 'pointer',}}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#FF5733';
                    e.target.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                }}>
                    
                    Home
            </li>

            <li className='link p-2 py-1 px-4 justify-center rounded-md ms-1' 
                style = {{ transition: 'background-color 0.3', cursor: 'pointer',}}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#FF5733';
                    e.target.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                }}>
                    
                    About
            </li>
            <button className='bg-[#FF5733] w-[75px] rounded-md font-bold my-0 mx-3 py-1 text-black ' >
                LOGIN
            </button>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>

        <div  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#172554] bg-[#787A91] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#a8a8a8] m-4'>LPG</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-[#EEEEEE]'>Home</li>
                <li className='p-4 border-b border-[#EEEEEE]'>About</li>
                <li className='p-4'>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar