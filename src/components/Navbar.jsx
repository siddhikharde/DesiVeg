import React from 'react'
import { Salad } from 'lucide-react';
function Navbar() {
  return (
    <div className='max-w-10/12 z-50 bg-[#2E7D32] mx-auto px-5 py-3 sticky top-1 rounded-full'>
      <h2 className='font-bold text-[#f2f2f2] text-3xl flex items-center gap-3'>
        <Salad size={40} strokeWidth={2}/> DesiVeg</h2>
    </div>
  )
}

export default Navbar
