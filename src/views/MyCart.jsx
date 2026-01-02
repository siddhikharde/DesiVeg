import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import CartVegitableCard from '../components/CartVegitableCard.jsx';

function Cart() {
    const [cartItems, setCartItems]=useState([]);
    useEffect(()=>{
    const existingCart=JSON.parse(localStorage.getItem("cartItems")|| "[]");
    setCartItems(existingCart);
    },[])
    const [totalPrice, setTotalPrice]=useState(0);
    useEffect(()=>{
    let price=0;
    cartItems.map((item)=>{
      price+=item.totalPrice;
    })
    setTotalPrice(price);
    },[cartItems])
  return (
    <div className=' bg-[#F1F8E9] ' >
        <Navbar/>
        <div className='min-h-screen '>
          <h2 className='text-center  mt-5 font-bold text-4xl! text-[#1B5E20] '>
          {
          cartItems.length===0 ? "Your Cart is Empty" : "My Cart"
          }
        </h2>
        <p className='text-right py-2 text-[15px] px-5 mt-1 text-lg text-[#2E7D32] '> {
          cartItems.length===0 ? null : `Total Items: ${cartItems.length} - Total Price: ₹${totalPrice}`
         } </p>
 
        <div className='max-h-[500px] overflow-y-scroll p-5'>
           {
            cartItems.map((item)=>{
                return(
                    <CartVegitableCard key={item.id} {...item}/>
                )
            })
           }
        </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Cart
