import React from 'react'
// import Navbar from './Component/Navbar'
import Home from './Screen/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Screen/Login'
import Register from './Screen/Register'
import Addcart from './Screen/Addcart'
import About from './Common/About'
import Customer from './Screen/Customer'
import Contact from './Common/Contact'
import Payment from './Component/Payment'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/addcart" element={<Addcart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/payment" element={<Payment/>} />



        </Routes>
      </div>
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App
