import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import circle2 from  '../assets/circle2.png'

const Why = () => {
    const [url , setUrl] = useState('https://backend.n1beton.uz/about/')
    const {data , isPending , error} = useFetch(url)
  return (
    <div className=' mb-20'>

        {data && data.map((info)=>{
            return <>
            
            <div className='mt-28 '>
              <img src={info.image} alt="" className='w-[50%] ' />
              <h1 className=' lg:-mt-[50%] md:-mt-[50%] sm:-mt-[60%] text-center lg:text-8xl md:text-5xl sm:text-3xl buyan '>NIMA UCHUN BIZNI TANLAYSIZ</h1>
              <img src={circle2} alt="" className='w-[25%] ml-[44.4%] mt-[13%]' />
              <p className='text-black lg:w-[25%] sm:w-2/3 lg:ml-[70%] md:ml-[65%] sm:ml-5 lg:text-3xl sm:text-xl lg:-mt-[33%] md:-mt-[30%] sm:mt-10 number'>{info.text}</p>
            </div>
            </>
        })}
       
    </div>
  )
}

export default Why