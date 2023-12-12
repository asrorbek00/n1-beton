import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import circle1 from '../assets/circle1.png'

const Heading = () => {
    const [url ,setUrl] = useState('https://backend.n1beton.uz/banner/')
    const {data, isPending , error} = useFetch(url)
  return (
    <>
    
    {data && data.map((info)=>{
        return <div className='heading lg:-mt-[5%] sm:-mt-9 ' >
            <div className='flex items-center'>
            <img src={circle1} alt="" className=' lg:w-[30%] md:w-[28%] sm:w-[60%] ml-[4%] lg:mt-[1.4%] sm:-mt-[35%] lg:ml-10 md:ml-0 sm:-ml-[10%]'  />
            <div className='flex flex-col sm:mt-5 '>
            <h1 className='  lg:text-7xl md:text-5xl sm:text-3xl  lg:w-4/5 md:w-4/5  sm:w-fit text-center text-white font-semibold lg:-ml-[10%] sm:-ml-[20%] number'>{info.title}</h1>
            <p className='text-center lg:text-xl sm:text-sm lg:w-[44%] md:w-[50%] lg:ml-[10%] sm:-ml-[10%]  text-[#c1c1c1] number'>{info.text}</p>
            </div>
            </div>
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 pb-10 text-center sm:mt-10'>
                <div>
                    <h1 className='text-xl text-white'>24/7 mijozlarni qollab quvvatlash</h1>
                    <p className='text-lg text-[#c1c1c1] number'>+998 95 204 08 00</p>
                </div>
                <div>
                    <h1 className='text-xl text-white'>58 Yillik Tajriba</h1>
                    <p className='text-lg text-[#c1c1c1] number'>ha Azizlar rostan</p>
                </div>
                <div>
                    <h1 className='text-xl text-white'>O`rtacha narxlash</h1>
                    <p className='text-lg text-[#c1c1c1] number'>1mln so`mdan</p>
                </div>
            </div>
        </div>
    })}
    </>
    
  )
}

export default Heading