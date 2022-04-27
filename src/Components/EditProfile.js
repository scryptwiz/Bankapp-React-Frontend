import React from 'react'
import MobileNav from './MobileNav';
import LeftNavbar from './LeftNavbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/transfer.css';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MobileTopContent from './MobileTopContent';

const EditProfile = () => {
  return (
    <div className='flex md:flex-row justify-center flex-col h-screen shadow'>
      {/* left desktop nav */}
      <LeftNavbar />
      {/* mobile top content */}
      <MobileTopContent />
      {/* Mobile Middle content and desktopright content */}
      <div className='overflow-y-auto md:h-full h-5/6 px-5 xl:w-10/12 2xl:w-7/12 md:w-9/12 xl:w-10/12 w-full 2xl:border-r border-gray-300 items-center justify-center flex'>
        <div className='flex items-center w-full justify-center'>
            <div className='flex h-full 2xl:w-4/5 w-full'>
                
            </div>
        </div>
      </div>
      {/* mobile bottom nav */}
      <MobileNav />
    </div>
  )
}

export default EditProfile