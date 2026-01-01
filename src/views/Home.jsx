import React from 'react'
import Navbar from './../components/Navbar.jsx'
import Footer from './../components/Footer.jsx'
import ImgMainHeader from './../assets/main-header.jpg'

function Home() {
  return (
    <div  className='bg-[#FAFAF5]'>
        <div
    style={{backgroundImage:`url(${ImgMainHeader})`}}
     className='bg-[#bfbfbf] bg-cover bg-center filter bg-blend-multiply bg-opacity-50 bg-fixed'>
      <Navbar/>
      <div className='min-h-[85vh]   flex flex-col items-center justify-center  gap-7 p-4 text-3xl font-bold text-white'>
         <h1 className='text-[35px]! md:text-[50px]! text-center'>Fresh Vegetables, Straight from Local Farms</h1>  
         <h3 className='text-center text-[22px]! md:text-[30px]'>Taza sabzi delivered daily — healthy, affordable, and desi.</h3>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Home
