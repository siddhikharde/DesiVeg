import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import vegitables from "./../data.js";
import React from 'react'
import VegitableCard from "../components/VegitableCard.jsx";
import toast, { Toaster } from "react-hot-toast";

function Vegitables() {
  const [refreshCart,setRefreshCart]=useState(false);
    function addToCart(item){
        const existingCart= JSON.parse(localStorage.getItem("cartItems") || "[]");
        const itemsIndex=existingCart.findIndex(((cartItem)=>cartItem.id===item.id));
        if(itemsIndex!=-1){
          existingCart[itemsIndex]=item;

        }else{
          existingCart.push(item);
        }
      localStorage.setItem("cartItems",JSON.stringify(existingCart));
      toast.success("Item added to cart");
     setTimeout(()=>{
      setRefreshCart(!refreshCart);
     },100)
    }
  return (
    <div>
        <Navbar refreshCart={refreshCart}/>
        <div className="flex min-h-screen flex-col md:flex-row flex-wrap items-center justify-center p-5">
        {
            vegitables.map((vegitable)=>{
                const {id,name,description,price,unit,image,category,tags}=vegitable;
                return(
                    <VegitableCard key={id} id={id} name={name} description={description} price={price} unit={unit} image={image} category={category} tags={tags} addToCart={addToCart}/>
                )
            })
        }
      </div>
      <Toaster/>
    </div>
  )
}

export default Vegitables
