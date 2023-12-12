import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import circle5 from '../assets/circle5.png'

const Intend = () => {
    const [url ,setUrl] = useState('https://backend.n1beton.uz/about/')
    const {data , isPending , error} = useFetch(url)
  return (
    <div className='pt-[10%]'>
    {data && data.map((info)=>{
      return <>
      <div>
        <h1 className=' buyan lg:text-7xl md:text-5xl sm:text-3xl w-[70%] ml-[5%] mb-8'>BUTUN BETON MARKASINI YARATISH</h1>
        <div className='flex'>
            <img src={info.image} alt="" className='lg:w-[50%] sm:w-[40%]  '/>
            <img src={circle5} alt="" className='w-[27%] h-[27%] -mt-[3.2%] -ml-[14%]' />
            <div className=' flex flex-col lg:gap-20 md:gap-16 sm:gap-1'>
                <div className=' flex lg:gap-32 md:gap-30 sm:gap-6 pl-14 mb-2 border-b-2 border-black lg:pb-4 md:pb-3 sm:pb-1'>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>200</h2>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>250</h2>
                </div>
                <div className=' flex lg:gap-32 md:gap-30 sm:gap-6 pl-14 mb-2 border-b-2 border-black lg:pb-4 md:pb-3 sm:pb-1 '>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>300</h2>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>350</h2>
                </div>
                
                <div className='flex lg:gap-32 md:gap-30 sm:gap-6 lg:pl-24 sm:pl-14 mb-2 border-b-2 border-black lg:pb-4 md:pb-3 sm:pb-1 lg:-ml-[10%]'>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>400</h2>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>450</h2>
                    
                </div>
              
                <div className='flex lg:gap-32 md:gap-30 sm:gap-6 lg:pl-32 sm:pl-14 mb-2 border-b-2 border-black lg:pb-4 md:pb-3 sm:pb-1lg:-ml-[20%]'>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>500</h2>
                    <h2 className='lg:text-7xl md:text-5xl sm:text-3xl buyan'>550</h2>
                    
                </div>
                
            </div>
        </div>
        </div>
      </>
    })}
        
    </div>
  )
}

export default Intend