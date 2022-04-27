import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useSelector } from 'react-redux';

const MobileTopContent = ({name}) => {
    const user = useSelector(state=>state.user);
  return (
    <div className='md:hidden sticky top-0 px-5 pt-5 pb-3 flex justify-between items-center'>
        {/* intro */}
        {name?<h4>
          <span className='text-gray-600 text-sm'>Hello</span>
          <br />
          <span className='font-medium text-xl text-gray-800 captalize'>{name}</span>
        </h4>: <h4> </h4>}
        
        {/* icons */}
        <div className='flex items-center'>
          <p className='text-gray-700'><NotificationsNoneOutlinedIcon /></p>
          <Link to='/editprofile'>
            <div className='w-10 h-10 rounded-full bg-gray-300 ml-4 flex justify-center items-center'><PersonIcon /></div>
          </Link>
        </div>
    </div>
  )
}

export default MobileTopContent