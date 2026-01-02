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
    <div className='min-h-screen bg-[#F1F8E9] ' >
        <Navbar/>
        <p className='text-right  font-bold px-5 mt-5'>{
          cartItems.length===0 ? "Your Cart is Empty" : `Total Items: ${cartItems.length} - Total Price: ₹${totalPrice}`
         } </p>

        <div className='max-h-[700px] overflow-y-scroll p-5'>
           {
            cartItems.map((item)=>{
                return(
                    <CartVegitableCard key={item.id} {...item}/>
                )
            })
           }
        </div>
        <Footer/>
      
    </div>
  )
}

export default Cart
