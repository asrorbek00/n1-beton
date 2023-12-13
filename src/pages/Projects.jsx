import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import circle55 from '../assets/circle55.png'

const Projects = () => {
    const [url , setUrl] = useState('https://backend.n1beton.uz/our-projects/')
    const {data , isPending , error}=useFetch(url)
  return (
    <div>
     <div className='heading -mt-[5%]' >
            <div className='flex items-center'>
            <img src={circle55} alt="" className='w-[30%] ml-[4%]'  />
            <div className='flex flex-col text-center w-fit  '>
            <h1 className='lg:text-7xl  text-center text-white font-semibold number'>BIZNING LOYIHALAR</h1>
            <p className=' text-[#c1c1c1] text-center number'>Biz Sizning orzularingizni ro`yobga chiqarish uchun shu yerdamiz</p>
            </div>
            </div>

        </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 px-[5%] gap-8  py-20 '>
    {data && data.map((projects)=>{
        return <>
            <div className='flex flex-col gap-2 cursor-pointer '>
               <img src={projects.image} alt="" className='rounded-xl' />
               <img src={projects.logo} alt="" className='w-[22%]' />
               <hr className='border-[1px] border-gray-600 w-[22%]' />
               <h2 className='text-2xl text-black font-semibold'>{projects.title}</h2>
               <p  className='text-xl'>{projects.text}</p>
            </div>
            
        </>
    })}
    </div>
    </div>
  )
}

export default Projects