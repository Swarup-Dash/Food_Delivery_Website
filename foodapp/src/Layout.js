import React from 'react'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar />
        <React.Fragment>
            {children}
        </React.Fragment>
        <Footer/>
    </React.Fragment>
  )
}

export default Layout
