import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-5 text-white'>

        <h1 className='w-full text-3xl font-bold text-[#a8a8a8]'>LPG</h1>

        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Login</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>

        <div  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#172554] bg-[#787A91] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#a8a8a8] m-4'>LPG</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-[#EEEEEE]'>Home</li>
                <li className='p-4 border-b border-[#EEEEEE]'>About</li>
                <li className='p-4 border-b border-[#EEEEEE]'>Contact</li>
                <li className='p-4'>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar