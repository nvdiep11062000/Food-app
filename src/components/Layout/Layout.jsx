import React from 'react'
import Routers from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <div>
      <div className="container">
        <Header/>
          <div className="main">
            <Routers/>
          </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Layout