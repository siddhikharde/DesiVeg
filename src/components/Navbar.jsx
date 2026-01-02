import React, { useEffect } from 'react'
import { useState } from 'react'
import { Salad, ShoppingCart} from 'lucide-react';
import { Link } from 'react-router';

function Navbar({refreshCart}) {
const [cartItems, setCartItems] = useState(["test","test2"]);

useEffect(()=>{
  const existingCart=JSON.parse(localStorage.getItem("cartItems") || "[]");
  setCartItems(existingCart);
},[refreshCart])

  return (
    <div className='max-w-full z-50 bg-[#2E7D32] mx-auto flex items-center justify-between px-7 py-3 sticky top-0 '>
      <Link to="/" className='font-bold text-[#f2f2f2] text-3xl flex items-center gap-3'>
        <Salad size={40} strokeWidth={2}/> DesiVeg</Link>
       <Link to="/cart" className='relative flex items-center gap-2'>
      {
        cartItems.length>0 ? (  <span className='absolute -top-3 -right-1 text-white bg-red-500 rounded-full px-2 text-sm'>{cartItems.length}</span>): null
      }
         <ShoppingCart size={35} className='text-white cursor-pointer'/>
       </Link>
    </div>
  )
}

export default Navbar
