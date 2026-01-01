import React from 'react'
const BUTTON_VARIANT={
    PRIMARY:"bg-[#2E7D32] text-[White] hover:bg-[#1B5E20] transition-duration-300 ",
    SECONDARY:"bg-[#FFFFFF] text-[#2E7D32] hover:bg-[#e6e6e6] transition-duration-300",
   
}
const BUTTON_SIZES={
    sm:"text-xl px-3 py-2 rounded-md  cursor-pointer  ",
    md:"text-2xl px-4 py-2 rounded-lg cursor-pointer  ",
    lg:"text-3xl px-5 py-2 rounded-xl cursor-pointer hover:bg-[#239B2C] transition-duration-300  "
}
function Button({title, onClick , variant="PRIMARY" ,size="md"}) {
  return (
    <div>
        <button
        className={`${BUTTON_VARIANT[variant]} ${BUTTON_SIZES[size]} font-semibold `}
        onClick={onClick}>{title}</button>
      
    </div>
  )
}

export default Button
