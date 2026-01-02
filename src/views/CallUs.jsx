import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CallUs() {
  return (
   <div>
    <Navbar/>
     <div>
      <div className='flex flex-col justify-center items-center'>
        <h2> Call Us – DesiVeg</h2>
        <p>Fresh vegetables, just a call away</p>
      </div>

    </div>
    <Footer/>
   </div>

  )
}

export default CallUs
