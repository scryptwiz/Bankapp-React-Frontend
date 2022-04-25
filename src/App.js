import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import SignUp from './Components/SignUp';
// import Signups from './Components/Signups';
import UserGuard from './Components/UserGuard';
import SignIn from './Components/SignIns'
import Dashboard from './Components/Dashboard';
// import Signin from './Components/Signin';

function App() {
  // let token = localStorage.token
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        {/* <Route path="/dashboard" element={token?<Dashboard/>:<SignIn/>}></Route> */}
        <Route path='/dashboard' element={<UserGuard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
