import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import vegitables from "./../data.js";
import React from 'react'
import VegitableCard from "../components/VegitableCard.jsx";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer.jsx";

function Vegitables() {
  const [refreshCart,setRefreshCart]=useState(false);
    async function addToCart(item){
        const existingCart= JSON.parse(localStorage.getItem("cartItems") || "[]");

        if(!item.image){
          try{
            const res = await fetch(
              `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${item.name}+vegetable&image_type=photo&category=food&per_page=3&safesearch=true`
            );
            const data = await res.json();
            if(data.hits && data.hits.length>0){
              item.image = data.hits[0].webformatURL;
            }
          }catch(err){
            console.error('Failed to fetch image for cart item', err);
          }
        }

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
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default Vegitables
