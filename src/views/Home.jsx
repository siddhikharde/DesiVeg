import React from 'react'
import Navbar from './../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className='bg-[#FAFAF5]'>
      <Navbar/>
      <div className='min-h-screen'>
        Home Page
      </div>
      <Footer/>
    </div>
  )
}

export default Home
