import React from 'react'
import { useState } from 'react'
import { Salad, ShoppingCart} from 'lucide-react';
function Navbar() {
const [cartItems, setCartItems] = useState(["test","test2"]);

  return (
    <div className='max-w-10/12 z-50 bg-[#2E7D32] mx-auto flex items-center justify-between px-7 py-3 sticky top-1 rounded-full'>
      <h2 className='font-bold text-[#f2f2f2] text-3xl flex items-center gap-3'>
        <Salad size={40} strokeWidth={2}/> DesiVeg</h2>
       <div className='relative flex items-center gap-2'>
      {
        cartItems.length>0 ? (  <span className='absolute -top-3 -right-1 text-white bg-red-500 rounded-full px-2 text-sm'>{cartItems.length}</span>): null
      }
         <ShoppingCart size={35} className='text-white cursor-pointer'/>
       </div>
    </div>
  )
}

export default Navbar
