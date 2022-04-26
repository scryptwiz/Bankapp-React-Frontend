import React from 'react'
import MobileNav from './MobileNav';
import LeftNavbar from './LeftNavbar';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Transfer = () => {
  return (
    <div className='flex md:flex-row justify-center flex-col h-screen shadow'>
      {/* left desktop nav */}
      <LeftNavbar />
      {/* mobile top content */}
      <div className='md:hidden sticky top-0 px-5 pt-5 pb-3 flex justify-between items-center'>
        {/* intro */}
        <h4>
          <span className='text-gray-600 text-sm'>Hello</span>
          <br />
          <span className='font-medium text-xl text-gray-800 captalize'>Kelvin</span>
        </h4>
        {/* icons */}
        <div className='flex items-center'>
          <p className='text-gray-700'><NotificationsNoneOutlinedIcon /></p>
          <div className='w-10 h-10 rounded-full bg-gray-300 ml-4 flex justify-center items-center'><PersonIcon /></div>
        </div>
      </div>
      {/* Mobile Middle content and desktopright content */}
      <div className='overflow-y-auto md:h-full h-5/6 px-5 xl:w-10/12 2xl:w-7/12 md:w-9/12 xl:w-10/12 w-full 2xl:border-r border-gray-300'>
          
      </div>
      {/* mobile bottom nav */}
      <MobileNav />
    </div>
  )
}

export default Transfer