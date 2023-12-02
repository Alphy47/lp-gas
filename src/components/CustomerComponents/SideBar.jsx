import React, { Children, useState } from 'react'
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom'
import { useSelectedLink } from './CustomerSelectedLinkContext'
import { 
          FaBars,
          FaThLarge,
          FaCartArrowDown,
          FaRoute,
          FaExclamationCircle,
          FaSignOutAlt,
          FaFire,
          FaPen
} from 'react-icons/fa';


export default function SideBar() {

const { updateSelectedLink } = useSelectedLink();

const handleLinkClick = (name) => {
  updateSelectedLink(name);
};

const menus = [
  {name: "Dashboard", link: '/customerhome',icon: FaThLarge},
  {name: "Place order", link: 'placeorder',icon: FaFire},
  {name: "Order Status", link: 'orderstatus',icon: FaRoute},
  {name: "Make a Complaint", link: 'makecomplaint',icon: FaPen},
  {name: "Logout", link: '/',icon: FaSignOutAlt}
]



const [open, setOpen] = useState(true)

  return (
    <div className={`bg-black  min-h-screen ${open ? 'w-72':'w-16'} duration-500 text-white` } style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>

      <div className='py-3 flex justify-end px-4'>
        <FaBars size={20} style={{ color: '#FF5733'}} className='cursor-pointer' onClick={()=>setOpen(!open)}/>
      </div>

      <div className={open ? '' : 'my-3 mx-3 py-0' }>
        <img className='w-[75px] mx-auto my-4' src={logo} alt='/' />
      </div>

      <div className='mt-6 flex flex-col gap-4 relative'>
        {menus?.map((menu, i) => (
          <Link to={menu?.link} 
                key={i} 
                className='group flex pl-5 items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'
                onClick={() => handleLinkClick(menu.name)}>
            <div>
              {React.createElement(menu?.icon, {size: '20', color: '#FF5733'})} 
            </div>
            <h2 
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 ${!open ? "opacity-0 translate-x-28 overflow-hidden" : ""}`}>{menu?.name}
            </h2>
            <h2
              className={`${
              !open ? '' : 'hidden'
              } absolute left-48 bg-black opacity-80 font-semibold whitespace-pre 
              
              text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden 
              group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
            {menu?.name}
            </h2>

          </Link>
        ))}

      </div>
    </div>
  )
}
