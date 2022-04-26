import React from 'react'
import { Link } from 'react-router-dom'
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const MobileNav = () => {
  return (
    <div className='md:hidden sticky bottom-0 border-t border-gray-200 px-6 py-2 flex justify-between'>
        <Link to='/dashboard' className='flex flex-col items-center justify-center text-xs text-gray-600'>
          <DashboardOutlinedIcon fontSize='small'/>
          <p className='mt-1 font-medium'>Home</p>
        </Link>
        <Link to='/transfer' className='flex flex-col items-center justify-center text-xs text-gray-600'>
          <SendOutlinedIcon fontSize='small'/>
          <p className='mt-1 font-medium'>Transfer</p>
        </Link>
        <Link to='/dashboard' className='flex flex-col items-center justify-center text-xs text-gray-600'>
          <CreditScoreOutlinedIcon fontSize='small'/>
          <p className='mt-1 font-medium'>Loans</p>
        </Link>
        <Link to='/dashboard' className='flex flex-col items-center justify-center text-xs text-gray-600'>
          <SettingsOutlinedIcon fontSize='small'/>
          <p className='mt-1 font-medium'>Settings</p>
        </Link>
      </div>
  )
}

export default MobileNav