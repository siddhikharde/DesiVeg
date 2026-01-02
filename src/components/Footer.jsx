import React from 'react'
import { Github,Youtube,Instagram } from 'lucide-react';
const SOCIAL_LINKS=[{
    name:"GitHub",
    url:"https://github.com/siddhikharde/DesiVeg.git",
    icon:<Github size={20}/>
},
{
    name:"YouTube",
    url:"https://www.youtube.com/",
    icon:<Youtube size={20}/>
},
{
    name:"Instagram",
    url:"https://www.instagram.com/",
    icon:<Instagram size={20}/>
  }];
const FooterLink=({name ,url,icon})=>{
  return(
    <a href={url} className='text-white flex items-center gap-2'>
      {icon} {name}
    </a>
  )
}
function Footer() {
  return (
    <div className='w-full  bg-[#2E7D32]  '>
      <div className='flex items-center justify-around mt-10 border-b border-[#173e19] pb-2 flex-col md:flex-row gap-5'>
        <div className='text-center text-white'>
        Made with ❤️ by DesiVeg
      </div>
      <div className='flex flex-col items-start justify-center gap-2 my-3 text-white'>
        {SOCIAL_LINKS.map((link,index)=>{
          const {name,url,icon}=link;
          return(
          <FooterLink key={index} name={name} url={url} icon={icon}/>
          )
        })}
      </div>
      
      </div>
      <footer className='bg-[#2E7D32] text-white text-center p-4  '>
        <p>&copy; 2024 DesiVeg. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
