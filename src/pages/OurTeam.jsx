import React from 'react'
import { useFetch } from '../hooks/useFetch'
import circle1 from '../assets/circle1.png'

const OurTeam = () => {
    const {data , isPending ,error}= useFetch('https://backend.n1beton.uz/about-us/')
  return (
    <div>
        <div className='heading -mt-[5%]' >
            <div className='flex items-center'>
            <img src={circle1} alt="" className='w-[30%] ml-[4%]'  />
            <div className='flex flex-col text-center w-fit  '>
            <h1 className='lg:text-7xl  text-center text-white font-semibold '>BIZNING JAMOA</h1>
            <p className=' text-[#c1c1c1] text-center'>Biz Sizning orzularingizni ro`yobga chiqarish uchun shu yerdamiz</p>
            </div>
            </div>
        </div>
        {data && data.map((image)=>{
            return <img src={image.image} alt="" className='py-4 px-4 w-full' />
        })}
    </div>
  )
}

export default OurTeam