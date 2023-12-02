import React from 'react'
import { useSelectedLink } from './CustomerSelectedLinkContext'
import { FaBell, FaComments, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate()
  const { selectedLink } = useSelectedLink();
  const defaultText = 'Dashboard';

  return <div className='bg-[#0a042d] h-12 px-4 w-[100%] relative flex fles-row '>
            <div className='absolute inset-y-0 left-0 ml-4 '>
              <h2 className='text-white mt-3 font-bold'>{selectedLink || defaultText}</h2>
            </div>
            <div className='absolute inset-y-0 right-0 mr-7 flex w-20'>
              <div className='flex flex-1 gap-4 my-3'>
                <FaUser size={20} style={{ color: '#FF5733'}} className='cursor-pointer' onClick={() => navigate ('/customeracc')}/>

                <FaBell size={20} style={{ color: '#FF5733'}} className='cursor-pointer' onClick={() => navigate ('/customernotifications')}/>
              
                <FaComments size={20} style={{ color: '#FF5733'}} className='cursor-pointer' onClick={() => navigate ('/customermessages')}/>
              </div>

            </div>
        </div>
}
