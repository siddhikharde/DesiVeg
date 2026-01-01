import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import vegitables from "./../data.js";
import Button from "../components/Button.jsx";

import React from 'react'

function Vegitables() {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center p-5">
        {
            vegitables.map((vegitable)=>{
                return(
                    <div key={vegitable.id} className="m-4 py-6 px-5 border border-gray-300 rounded-lg shadow-md flex flex-col items-center w-[70%] md:w-[45%] lg:w-[27%]">
                        <img src={vegitable.image} alt={vegitable.name} className="w-48 h-48 object-cover mb-4 rounded"/>
                        <h2 className="text-2xl font-bold mb-2">{vegitable.name}</h2>
                        <p className="text-gray-700 mb-2">{vegitable.description}</p>
                        <p className="text-green-600 font-semibold mb-4">Price: ₹{vegitable.price} {vegitable.unit}</p>
                       <Button title="Add to Cart" variant="TERTIARY" size="md"/>
                        
                        </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Vegitables
