import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import circle6 from '../assets/circle6.png'

const OurProjects = () => {

    const [url , setUrl] = useState('https://backend.n1beton.uz/our-projects/')
    const {data , isPending , error}=useFetch(url)
  return (
    <div className='pt-[5%] '>
    <h1 className=' texts lg:text-7xl md:text-5xl sm:text-3xl text-black ml-[8%]'>BIZNING LOYIHALAR</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 px-[5%] gap-8 mt-[3%]'>
    {data && data.map((projects)=>{
        return <>
            <div className='flex flex-col gap-2 cursor-pointer '>
               <img src={projects.image} alt="" className='rounded-xl' />
               <img src={projects.logo} alt="" className='w-[22%]' />
               <hr className='border-[1px] border-gray-600 w-[22%]' />
               <h2 className='text-2xl text-black font-semibold texts'>{projects.title}</h2>
               <p  className='text-xl texts'>{projects.text}</p>
            </div>
            
        </>
    })}
    </div>
    <img src={circle6} alt="" className='w-[20%] lg:-mt-[48%] sm:-mt'/>
    <Link to={'/loyihalar'}><button className='text-black bg-transparent border-[1px] border-black py-2 px-12 hover:bg-black hover:text-white lg:ml-[41%] md:ml-[41%] sm:ml-[20%] mt-[20%] '>Loyihalarni ko`rish</button></Link>
    </div>
  )
}

export default OurProjects