import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function Result() {
  const location = useLocation();
  const props = location.state;

  return (
    <div>
        <Navbar></Navbar>
        <Outlet context={props}></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Result