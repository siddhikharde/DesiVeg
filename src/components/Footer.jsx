import React from 'react'
import { Github,Youtube,Instagram } from 'lucide-react';

function Footer() {
  return (
    <div className='w-full  bg-[#2E7D32] '>
      <div className='flex items-center justify-around mt-10'>
        <div className='text-center text-white'>
        Made with ❤️ by DesiVeg
      </div>
      <div className='flex items-center justify-center gap-5 my-3 text-white'>
        <a href="https://github.com/siddhikharde/DesiVeg.git"><Github /></a>
        <a href="https://www.youtube.com/"><Youtube /></a>
        <a href="https://www.instagram.com/"><Instagram /></a>
      </div>
      </div>
      <footer className='bg-[#2E7D32] text-white text-center p-4  '>
        <p>&copy; 2024 DesiVeg. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
