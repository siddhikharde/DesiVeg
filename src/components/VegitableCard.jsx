import React from 'react'
import Button from './Button.jsx';
import { useState, useEffect } from 'react';
import { CircleMinus, CirclePlus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function VegitableCard({ id, name, description, price, unit, category, tags, addToCart }) {
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${
            import.meta.env.VITE_PIXABAY_API_KEY
          }&q=${name}+vegetable&image_type=photo&category=food&per_page=3&safesearch=true`
        );
        const data = await res.json();

        if (data.hits.length > 0) {
          setImage(data.hits[0].webformatURL);
        }
      } catch (error) {
        console.error("Image fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [name]);

    return (
        <div key={id} className="m-4 py-6 px-5 border border-gray-300 rounded-lg shadow-md flex flex-col items-center w-[70%] md:w-[45%] lg:w-[27%]">
             {loading ? (
        <div className="w-48 h-48 bg-gray-200 animate-pulse rounded mb-4" />
      ) : (
        <img
          src={image}
          alt={name}
          className="w-48 h-48 object-cover mb-4 rounded-xl"
        />
      )}
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-500 text-center mb-2">{description}</p>
            <p className="text-green-600 font-semibold mb-2">Price: ₹{price} {unit}</p>
            <p className="text-gray-700 mb-2"> {tags.join(', ')}</p>
            <div className='flex justify-around items-center w-[50%] mb-4'>
                <CirclePlus className='cursor-pointer' onClick={()=>{
                    if(quantity<10){
                    setQuantity(quantity+1)
                    }else{
                        toast.error("Maximum quantity reached");
                    }
                }} />
                <label>{quantity}</label>  
                <CircleMinus className='cursor-pointer ' onClick={()=>{
                   if(quantity>1){
                    setQuantity(quantity-1)
                   }else{
                    toast.error("Minimum quantity is 1");
                   }
                }} />    
                </div>
            <Button title="Add to Cart" variant="TERTIARY" size="md" onClick={()=>{
                addToCart({id, name, description, price, unit, quantity,image,category,tags,totalPrice:price*quantity})
            }} />
 
        </div>
        
    )
}

export default VegitableCard;
