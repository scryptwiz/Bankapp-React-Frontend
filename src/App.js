import React from 'react';
import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIns'
import Transfer from './Components/Transfer';
import {createStore} from "redux"
import EditProfile from './Components/EditProfile';
import DashboardGuard from './Components/DashboardGuard';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import userReducer from './Store/userStore';
import {Provider} from "react-redux";
const userStore = createStore(userReducer)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        {/* <Route path="/dashboard" element={token?<Dashboard/>:<SignIn/>}></Route> */}
        <Route path='/dashboard' element={
          <Provider store={userStore}>
            <DashboardGuard/>
          </Provider>
        }></Route>
        <Route path="/transfer" element={
          <Provider store={userStore}>
            <Transfer/>
          </Provider>
        }></Route>
        <Route path="/editprofile" element={<EditProfile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
