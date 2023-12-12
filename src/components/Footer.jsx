import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import {IoLocation} from 'react-icons/io5'
import {BiPhone} from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import cities from '../assets/cities.png'

const Footer = () => {
    const {data , isPending,error} = useFetch('https://backend.n1beton.uz/info/')
  return (
    <div>
    {data && data.map((info)=>{
        return<>
    
        <div>
            <img src={cities} alt="" />
        </div>
        <div className='bg-[#153973] -mt-[5%] py-20 grid lg:grid-cols-4 lg:px-10 md:px-7 sm:px-2 md:grid-cols-3 md:gap-3 sm:gap-5 sm:grid-cols-2'>
             <img src={info.logo} alt="" className='w-[50%]' />
             <div className='flex flex-col'>
                <h2 className='text-2xl text-white'>Menyu</h2>
                <a href="" className='text-[#898989]'>Asosiy</a>
               <Link to={'/maxsulotlar'}> <a  className='text-[#898989]'>Maxsulotlar</a></Link>
               <Link to={'/jamoa'}><a className='text-[#898989]'>Jamoa</a></Link>
               <Link to={'/loyihalar'}><a  className='text-[#898989]'>Loyihalar</a></Link>
             </div>
             <div className='flex flex-col'>
                <h2 className='text-2xl text-white'>Bo`limlar</h2>
                <a href="#about" className='text-[#898989]'>Biz Haqimizda</a>
                <a href="#contact" className='text-[#898989]'>Bog`lanish</a>
                <a href="#technics" className='text-[#898989]'>Texnikalar</a>
             </div>
             <div>
             <h2 className='text-xl text-white '>Ma`lumot</h2>
         <div className='flex gap-2 mb-2 text-white'>
         <span className='flex items-center'><IoLocation size={20} fill='white'/></span>
         <p><a href=''>{info.address}</a></p>
         </div>
         <div className='flex gap-2 mb-2 text-white'>
          <span><BiPhone size={25} fill='white'/></span>
          <p><a href={`tel:${info.phone}`}>{info.phone}</a></p>
         </div>
         <div className='flex gap-2 text-white'>
          <span><FaInstagram size={25} fill='white'/></span>
          <p><a href={info.instagram}>@n1_beton</a></p>
         </div>
         <div className=' flex gap-5 mt-5'>
            <span><a href=""><FaTelegram size={30} fill='white'/></a></span>
            <span><a href={info.facebook}><FaFacebook size={30} fill='white'/></a></span>
            <span><a href={info.instagram}><FaInstagram size={30} fill='white'/></a></span>
            <span><a href=""><FaTwitter size={30} fill='white'/></a></span>
         </div>
               
             </div>
        </div>
        </>
    })}
    <div className='bg-[#153973] px-[10%] text-center py-8 -mt-8'>
    <hr className='mb-3'/>
       <h2 className='text-md text-white'> 2023 @n1_beton</h2>
    </div>
    </div>
  )
}

export default Footer