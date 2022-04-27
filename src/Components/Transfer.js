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
import { useSelector } from 'react-redux';

const Transfer = () => {
  
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
                <div className='w-full h-full overflow-y-auto flex justify-between px-7'>
                    <div id='left_transfer' className='hidden md:block w-3/5 md:mr-5'></div>
                    <form autoComplete='off' className='xl:w-4/12 md:w-3/6 w-full mx-auto animate__animated  animate__zoomInRight animate__slow' >
                        <div className='mt-4'>
                            <h4 className='mb-7 font-medium text-3xl text-gray-700 pl-1 tracking-wide'>Transfer</h4>
                        </div>
                        <div className='mb-4'>
                            <TextField fullWidth id="outlined-basic" name="account_no"type='number' label="To Account" size='small' required variant="outlined"/>
                        </div>
                        <div className='mb-4'>
                            <TextField fullWidth id="outlined-basic" name="name" disabled label="Beneficiary" size='small' required variant="outlined"/>
                        </div>
                        <div className='mb-4'>
                            <TextField fullWidth id="outlined-basic" name="name" type='number' label="Amount" size='small' required variant="outlined"/>
                        </div>
                        <div className='mb-4'>
                          <TextField label="Reasons" fullWidth id="outlined-multiline-flexible" size='small' multiline maxRows={3}/>
                        </div>
                        <div className='mb-4'>
                            <TextField fullWidth id="outlined-basic" name="password" type='password' label="Enter Password" size='small' required variant="outlined"/>
                        </div>
                        <div className='mb-5'>
                            <Button variant="contained" size='large' type='submit' name='submit' fullWidth>Transfer</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
      {/* mobile bottom nav */}
      <MobileNav />
    </div>
  )
}

export default Transfer