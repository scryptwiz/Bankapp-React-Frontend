import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIns'
import Transfer from './Components/Transfer';
import DashboardGuard from './Components/DashboardGuard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        {/* <Route path="/dashboard" element={token?<Dashboard/>:<SignIn/>}></Route> */}
        <Route path='/dashboard' element={<DashboardGuard/>}></Route>
        <Route path="/transfer" element={<Transfer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
