import React from 'react'
import Navbar from './../components/Navbar.jsx'
import Footer from './../components/Footer.jsx'
import ImgMainHeader from './../assets/main-header.jpg'
import ImgFreshness from "./../assets/features/fresh.png"
import ImgAffordable from "./../assets/features/cost.png"
import ImgDelivery from "./../assets/features/fast-delivery.png"
import FeaturesCard from '../components/FeaturesCard.jsx'
import Button from '../components/Button.jsx'
import { useNavigate } from 'react-router'

const FEATURES_CONFIG = [
    {
        title: "Freshness Guaranteed",
        description: "We source our vegetables directly from local farms to ensure maximum freshness and quality.",
        imgSrc: `${ImgFreshness}`
    }, {
        title: "Affordable Prices",
        description: "We believe that healthy eating should be accessible to everyone, which is why we offer competitive prices on all our produce.",
        imgSrc: `${ImgAffordable}`
    }, {
        title: "Convenient Delivery",
        description: "Our reliable delivery service brings fresh vegetables right to your doorstep, saving you time and effort.",
        imgSrc: `${ImgDelivery}`
    }
]

function Home() {
     let navigate = useNavigate();
    return (

        <div className='bg-[#F1F8E9]'>
             <Navbar />
            <div
                style={{ backgroundImage: `url(${ImgMainHeader})` }}
                className='bg-[#666666] bg-cover bg-center filter bg-blend-multiply bg-opacity-50 bg-fixed'>
               
                <div className='min-h-[85vh]   flex flex-col items-center justify-center  gap-7 p-4 text-3xl font-bold text-white'>
                    <h1 className='text-[35px]! md:text-[50px]! text-center'>Fresh Vegetables, Straight from Local Farms</h1>
                    <h3 className='text-center text-[22px]! md:text-[30px]'>Taza sabzi delivered daily — healthy, affordable, and desi.</h3>
                    <div className='flex gap-5 flex-col items-center justify-center md:flex-row w-[100%]'>
                        <Button title={"Explore Now"} variant='PRIMARY' size='md' onClick={()=>{
                           navigate("/vegitables");
                        }} />
                        <Button title={"Call Us"} variant='SECONDARY' size='md'/>
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <h2 className='text-center text-[35px]! md:text-[40px]! font-bold text-[#1B5E20]'>Why Choose Us ?</h2>
                <div className='w-full z-[-1] flex md:flex-row flex-col p-4 justify-around items-center gap-5'>
                    {FEATURES_CONFIG.map((features, index) => {
                        const { title, description, imgSrc } = features;
                        return <FeaturesCard
                            key={index}
                            title={title}
                            description={description}
                            imgSrc={imgSrc}
                        />
                    })}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
