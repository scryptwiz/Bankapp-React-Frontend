import React from 'react'
import axios from 'axios';
import MobileNav from './MobileNav';
import LeftNavbar from './LeftNavbar';
import PersonIcon from '@mui/icons-material/Person';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SdCardOutlinedIcon from '@mui/icons-material/SdCardOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Dashboard = () => {
  let token = localStorage.getItem('token')
  axios.get('http://localhost:5000/loadDashboard', {headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept':'application/json'
  }})
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
        {/* laptop top profile */}
        <div className='md:flex justify-between items-center hidden sticky top-0 bg-white w-full md:pt-11 lg:px-10 md:px-5'>
          <h4 className='text-gray-700 text-xl'>Dashboard</h4>
          <div className='flex items-center'>
            <p className='text-gray-700'><NotificationsNoneOutlinedIcon /></p>
            <div className='w-8 h-8 rounded-full bg-gray-300 ml-4 flex justify-center items-center'><PersonIcon /></div>
          </div>
        </div>
        {/* general dashboard content */}
        <div className='mt-2 md:mt-8 flex md:flex-row flex-col justify-between xl:h-56 md:h-44 lg:px-11 md:px-5'>
          {/* Atm Card */}
          <div className='md:w-5/12 xl:w-5/12 w-full md:h-full h-44 bg-blue-300/25 rounded shadow-lg p-7 flex flex-col justify-between'>
            {/* Name */}
            <div className='flex justify-between items-center'>
              <h4 className='font-semibold md:text-2xl xl:text-2xl md:text-lg text-blue-600'>Kelvin</h4>
              <h4 className='font-semibold md:text-2xl xl:text-4xl text-blue-600 md:text-lg'>Card</h4>
            </div>
            {/* Balance */}
            <div>
                <p className='uppercase text-xs text-gray-500 tracking-wider'>Balance</p>
                <h4 className='text-blue-500 font-semibold xl:text-2xl md:text-sm text-xl tracking-wider xl:mt-1'>$5000</h4>
            </div>
            {/* Account Number and date section */}
            <div className='flex justify-between items-center'>
              <h4 className='text-gray-600 text-lg xl:text-xl md:text-base'>0808080800</h4>
              <h4 className='text-gray-600 text-sm'>1/22</h4>
            </div>
          </div>
          {/* Link Cards */}
          <div className='md:w-6/12 xl:w-5/12 w-full md:ml-3 md:mt-0 mt-5 rounded flex flex-col items-center'>
            {/* Part 1 */}
            <div className='flex w-full justify-between'>
              {/* transfer card */}
              <div className='shadow w-20 h-20 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded justify-center flex flex-col items-center text-gray-600 cursor-pointer'>
                <CurrencyExchangeIcon color='primary' />
                <h4 className='text-gray-600 mt-3 text-xs font-medium'>Transfer</h4>
              </div>
              {/* get Loan card */}
              <div className='shadow w-20 h-20 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded justify-center flex flex-col items-center text-gray-600 cursor-pointer'>
                <AttachMoneyOutlinedIcon color='primary' />
                <h4 className='text-gray-600 mt-3 text-xs font-medium'>Get Loan</h4>
              </div>
              {/* Dont know card */}
              <div className='shadow w-20 h-20 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded justify-center flex flex-col items-center text-gray-600 cursor-pointer'>
                <ChatOutlinedIcon color='primary' />
                <h4 className='text-gray-600 mt-3 text-xs font-medium'>Chat</h4>
              </div>
            </div>
            {/* Part 2 */}
            <div className='flex w-full justify-between mt-4 xl:mt-7'>
              {/* dont know card */}
              <div className='shadow w-20 h-20 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded justify-center flex flex-col items-center text-gray-600 cursor-pointer'>
                <SdCardOutlinedIcon color='primary' />
                <h4 className='text-gray-600 mt-3 text-xs font-medium'>Recharge</h4>
              </div>
              {/* Edit Profile card */}
              <div className='shadow w-20 h-20 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded justify-center flex flex-col items-center text-gray-600 cursor-pointer'>
                <EditOutlinedIcon color='primary' />
                <h4 className='text-gray-600 mt-3 text-xs font-medium'>Profile</h4>
              </div>
              {/* history card */}
              <div className='shadow w-20 h-20 md:w-20 md:h-20 xl:w-28 xl:h-24 rounded justify-center flex flex-col items-center text-gray-600 cursor-pointer'>
                <HistoryOutlinedIcon color='primary' />
                <h4 className='text-gray-600 mt-3 text-xs font-medium'>History</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Transaction History */}
        <div className='mt-5 md:mt-8 lg:px-11 md:px-5'>
          <h4 className='tracking-wide text-gray-700 text-xl'>Transaction History</h4>
          <div className="overflow-x-auto shadow-md mt-3">
            <table className="w-full text-s m text-left text-gray-500">
              <thead className="text-sm text-gray-500 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Account_no
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap text-sm">
                    Kelvin
                  </th>
                  <td className="px-6 py-4 text-sm">
                    Sliver
                  </td>
                  <td className="px-6 py-4 text-sm">
                    #20000
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap text-sm">
                    Felix
                  </th>
                  <td className="px-6 py-4 text-sm">
                    White
                  </td>
                  <td className="px-6 py-4 text-sm">
                    #5000
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    Felix
                  </th>
                  <td className="px-6 py-4 text-sm">
                    White
                  </td>
                  <td className="px-6 py-4 text-sm">
                    #5000
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    Felix
                  </th>
                  <td className="px-6 py-4 text-sm">
                    White
                  </td>
                  <td className="px-6 py-4 text-sm">
                    #5000
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    Felix
                  </th>
                  <td className="px-6 py-4 text-sm">
                    White
                  </td>
                  <td className="px-6 py-4 text-sm">
                    #5000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* mobile bottom nav */}
      <MobileNav />
    </div>
  )
}

export default Dashboard