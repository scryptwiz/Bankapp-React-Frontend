import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './Components/SignUp';
// import Signups from './Components/Signups';
// import UserGuard from './Components/UserGuard';
import SignIn from './Components/SignIns'
import Dashboard from './Components/Dashboard';
// import Signin from './Components/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/s" element={<Signin/>}></Route> */}
        <Route path="/" element={<SignIn/>}></Route>
        {/* <Route path="/signups" element={<Signups/>}></Route> */}
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        {/* <Route path='/dashboard' element={<UserGuard/>}> */}
          {/* <UserGuard/> */}
          {/* <Dashboard/> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
