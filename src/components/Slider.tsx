"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setCurrentSlide((prev)=> (prev=== data.length-1? prev = 0 : prev+1))


  //   },2000)

  //   return  ()=>clearInterval(interval)
  // },[])
  return ( 
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] lg:flex-row '>
      {/* Text Conteiner */}
      <div  className=' flex-1  flex items-center justify-center flex-col gap-8 text-red-500 font-bold  bg-fuchsia-50'>
        <h1 className='text-4xl text-center uppercase p-4  md:p-10 md:text-6xl xl:text-7xl '>{data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white py-5 px-8'>Order Now
        </button>
      </div>
      {/* Image Conteiner */}
      <div className=' flex-1  relative' >
        <Image className='object-cover' src={data[currentSlide].image} alt="" fill/>
      </div>
    </div>
   );
}
 
export default Slider