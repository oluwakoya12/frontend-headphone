import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
      <head>
        <title>Oluwakoya Store</title>
      </head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default Layout
