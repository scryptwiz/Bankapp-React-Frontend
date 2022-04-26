import React from 'react'
import { Link } from 'react-router-dom'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

const LeftNavbar = () => {
  return (
    <div className='md:w-3/12 2xl:w-1/5 xl:w-2/12 border-r border-gray-300 h-full px-6 py-10 md:flex hidden 2xl:border-l flex-col justify-between'>
        {/* logo */}
        <h4 className='text-gray-700 text-lg px-3'>KBank</h4>
        {/* middle nav links */}
        <div className='mt-5 flex flex-col'>
          {/* <Button href='/dashboard' className='text-gray-500 px-3 py-2 text-sm flex items-center'><DashboardOutlinedIcon fontSize='small' /><span className='ml-3 mt-1'>Dashboard</span></Button> */}
          <Link to='/dashboard' className='text-gray-500 px-3 py-2 text-sm flex items-center active:text-gray-800'><DashboardOutlinedIcon fontSize='small' /><span className='ml-3'>Dashboard</span></Link>
          <Link to='/transfer' className='text-gray-500 px-3 py-2 text-sm mt-5 flex items-center'><SendOutlinedIcon fontSize='small' /><span className='ml-3'>Transfer</span></Link>
          <Link to='/dashboard' className='text-gray-500 px-3 py-2 text-sm mt-5 flex items-center'><CreditScoreOutlinedIcon fontSize='small' /><span className='ml-3'>Collect Loan</span></Link>
          <Link to='/dashboard' className='text-gray-500 px-3 py-2 text-sm mt-5 flex items-center'><EditOutlinedIcon fontSize='small' /><span className='ml-3'>Edit Profile</span></Link>
          <Link to='/dashboard' className='text-gray-500 px-3 py-2 text-sm mt-5 flex items-center'><HistoryOutlinedIcon fontSize='small'/><span className='ml-3'>Transaction</span></Link>
        </div>
        {/* bottom nav links */}
        <div className='flex flex-col'>
          <Link to='/dashboard' className='text-gray-500 px-3 py-2 text-sm flex items-center'><SettingsOutlinedIcon fontSize='small'/><span className='ml-3'>Settings</span></Link>
          <Link to='/dashboard' className='text-gray-500 px-3 py-2 text-sm mt-3 flex items-center'><LogoutOutlinedIcon fontSize='small'/><span className='ml-3'>Logout</span></Link>
        </div>
      </div>
  )
}

export default LeftNavbar