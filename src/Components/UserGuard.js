import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'

const UserGuard = () => {
  let token = localStorage.token
  const navigate = useNavigate()
  const [component, setComponent] = useState("")
  useEffect(() => {
    if(!token){
      navigate('/')
    }
    setComponent(<small>Loading</small>);
    const verify = async () =>{
      await axios.get('http://localhost:5000/loadDashboard', {headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept':'application/json'
      }}).then((res)=>{
        if(res.data.status){
          setComponent(<Dashboard/>)
          console.log(res.data)
        }else{
            console.log(res.data);
            navigate('/')
            localStorage.removeItem('token')
        }
      }).catch(err =>{
          setComponent(<span>An error occured, please check your internet connection</span>)
      })
    }
    verify();
  }, [token])
  
  return (
    <>
      {component}
    </>
  )
}

export default UserGuard