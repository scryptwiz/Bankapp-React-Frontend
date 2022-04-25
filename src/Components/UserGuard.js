import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'

const UserGuard = () => {
  return (
    <>
        {true ? <Dashboard/> : "should r4direct" 
    }</>
  )
}

export default UserGuard