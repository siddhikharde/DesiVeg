import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const ContactCard=({type,detail,onClick})=>{
  return(
    <div className='bg-white p-5 cursor-pointer rounded-lg shadow-md md:w-80 w-[100%] flex flex-col gap-2 items-center' onClick={onClick}>
        <h3 className='font-bold text-lg text-[#1B5E20]'>{type}</h3>
        <p className='text-gray-600 '>{detail}</p>
    </div>
  )
}
function CallUs() {
  return (
   <div className='bg-[#F1F8E9]'>
    <Navbar/>
     <div className='min-h-screen p-5'>
      <div className='flex flex-col justify-center items-center p-5 gap-4'>
        <h1 className=' font-bold mt-3 text-[#1B5E20]'> Call Us – DesiVeg</h1>
        <p className='text-center text-2xl font-bold text-[#2e8434]'>Fresh vegetables, just a call away</p>
      </div>
      <div className='flex justify-center items-center gap-5 mt-10 flex-col md:flex-row mb-10'>
        <ContactCard type={"Phone"} detail={"+91 98765 43210"} onClick={() => {
            window.location.href="tel:+919876543210"    
        }}/>
        <ContactCard type={"Email"} detail={"desiveg123@gmail.com"} onClick={()=>{
            window.location.href="mailto:desiveg123@gmail.com"
        }}/>
        

    </div>
    </div>
    <Footer/>
   </div>

  )
}

export default CallUs
