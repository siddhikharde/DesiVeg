import React from 'react'
import Button from './Button'

const removeFromCart= (id)=>{
    const existingCart= JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedCart=existingCart.filter((item)=>item.id!==id);
    localStorage.setItem("cartItems",JSON.stringify(updatedCart));
    window.location.reload();
}
function CartVegitableCard(
    {
        id, name, description, price, unit, image, category, tags, quantity, totalPrice
    }
)
{
    return (
        <div>
            {
                <div key={id} className='flex flex-col gap-2 md:flex-row bg-[#FFFFFF] border-1 border-[#C8E6C9] p-5 m-4 rounded-2xl shadow-md'>
                    <div className='md:w-90 w-full h-50 bg-amber-200'>
                        <img src={image} alt={name} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 w-full items-center justify-between p-5 '>
                        <div className='flex flex-col gap-1.5'>
                            <h2 className='text-[#1B5E20] font-bold text-center md:text-left'>{name}</h2>
                            <p className='text-gray-600 text-sm md:text-left text-center'>{description}</p>
                            <p className='text-gray-600 text-sm md:text-left text-center' >Quantity: {quantity} {unit}</p>
                            <p className='text-gray-600 text-sm md:text-left text-center'>Price per unit: ₹{price}/{unit}</p>
                            <p className='text-[#2E7D32] font-semibold text-lg text-center md:text-left'> Total Price: ₹{totalPrice}</p>
                     </div>
                            <div >
                                <Button title={"Remove from Cart"} variant='DANGER' size='sm' onClick={()=>{
                                    removeFromCart(id);
                                }} />
                            
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default CartVegitableCard
