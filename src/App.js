import './App.css';
import React from 'react';
import { Signup } from './components/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Otp } from './components/Otp/Otp';
import { Referral } from './components/Referral/Referral';
import { Sucess } from './components/Sucess/Sucess';
function App() {
  return (
    <div className="background">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/otp-validate" element={<Otp/>}/>
        <Route path="/referral" element={<Referral/>}/>
        <Route path="/sucess" element={<Sucess/>}/>
      </Routes>  
      </BrowserRouter>
    </div>
    );
}

export default App;
