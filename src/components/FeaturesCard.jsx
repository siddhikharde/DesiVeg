import React from 'react'

function FeaturesCard({title,description,imgSrc, index}) {
  return (
  <div key={index} className=' border-2 border-[#E0E0E0]  p-4 my-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl bg-[#FFFFFF]'>
                    <h3 className='text-2xl text-[ #1B5E20] font-semibold mb-2 flex items-center gap-2'>
                        <img src={imgSrc} alt={title} className='h-[35px]'/> {title}
                    </h3>
                    <p className='text-[#555555]'>{description}</p>
                </div>)
}

export default FeaturesCard
