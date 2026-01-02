import React from 'react'
import { Github,Youtube,Instagram } from 'lucide-react';
const FooterLink=({name ,url,icon})=>{
  return(
    <a href={url} className='text-white flex items-center gap-2'>
      {icon} {name}
    </a>
  )
}
function Footer() {
  return (
    <div className='w-full  bg-[#2E7D32] '>
      <div className='flex items-center justify-around mt-10'>
        <div className='text-center text-white'>
        Made with ❤️ by DesiVeg
      </div>
      <div className='flex flex-col items-center justify-center gap-2 my-3 text-white'>
        <FooterLink name="GitHub" url="https://github.com/siddhikharde/DesiVeg.git" icon={<Github />} />
        <FooterLink name="YouTube" url="https://www.youtube.com/" icon={<Youtube />} />
        <FooterLink name="Instagram" url="https://www.instagram.com/" icon={<Instagram />} />
      </div>
      
      </div>
      <footer className='bg-[#184c1b] text-white text-center p-4  '>
        <p>&copy; 2024 DesiVeg. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
