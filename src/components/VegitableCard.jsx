import React from 'react'
import Button from './Button.jsx';
import { useState } from 'react';
import { CircleMinus, CirclePlus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function VegitableCard({ id, name, description, price, unit, image, category, tags, addToCart }) {
    const [quantity, setQuantity] = useState(1);
    return (
        <div key={id} className="m-4 py-6 px-5 border border-gray-300 rounded-lg shadow-md flex flex-col items-center w-[70%] md:w-[45%] lg:w-[27%]">
            <img src={image} alt={name} className="w-48 h-48 object-cover mb-4 rounded" />
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
                addToCart({id, name, price, unit, quantity,image,category,tags,totalPrice:price*quantity})
            }} />
 
        </div>
        
    )
}

export default VegitableCard;
