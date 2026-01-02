import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import toast,{Toaster} from 'react-hot-toast'
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
     <div className='min-h-[80vh] p-5'>
      <div className='flex flex-col justify-center items-center p-5 gap-4'>
        <h1 className=' font-bold mt-3 text-center text-[#1B5E20]'> Call Us – DesiVeg</h1>
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
    <div className='flex mx-auto flex-col justify-center items-center gap-5 border border-[#2e8434] w-[300px] p-5 rounded-2xl'>
        <h3 className='font-bold text-[#1B5E20] text-2xl'>Send us a Message</h3>
        <input type="text" required placeholder='Enter a Name' className='border   focus:outline-none w-full border bodrder-[#2e8434 ] p-2 rounded-xl'/>
        <input type="email" required placeholder='Enter a Email' className='border  focus:outline-none w-full border bodrder-[#2e8434 ] p-2 rounded-xl'/>
        <textarea placeholder='Enter your Message' required className='border p-2   focus:outline-none w-full border bodrder-[#2e8434 ] rounded-xl'></textarea>
        <Button title={"Submit"} variant='PRIMARY' size='md' onClick={()=>{
            if(document.querySelector('input[required]').value && document.querySelector('textarea[required]').value){
            toast.success("Message sent successfully!");
            document.querySelector('input[required]').value="";
            document.querySelectorAll('input[required]')[1].value="";
            document.querySelector('textarea[required]').value="";
            }else{
                toast.error("Please fill all the fields");
            }
        }}/>   
    </div>
    <Toaster/>
    </div>
    <Footer/>
   </div>

  )
}

export default CallUs
