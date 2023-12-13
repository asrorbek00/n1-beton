import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import logo from '../assets/logo.png'
import water from '../assets/water.png'
const Navbar = () => {
  const [open ,setOPen]=useState(false)

  const handleMenu =()=>{
    setOPen(!open)
  }
  return (
    <div className='flex flex-col '>
    
        <div className='flex lg:gap-[25%] bg-[#153973] lg:py-3 md:py-2 lg:pl-[15%] md:pl-2 sm:pl-2 md:gap-[10%]'>
  <div id="menuToggle" className='py-4 nav-menu'>
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
    <li><Link to={'/'}><a href="" className='hover:border-b-[1px] hover:text-white text-gray-300 border-white text-lg'>Asosiy</a></Link></li>
      <li><a href="#about" className=' hover:text-white text-gray-300 border-white text-lg'>Biz Haqimizda</a></li>
      <li><Link to={'/maxsulotlar'}><a href=""  className='hover:border-b-[1px] hover:text-white text-gray-300 border-white text-lg'>Maxsulotlar</a></Link></li>
      <li><a href="#technics" className=' hover:text-white text-gray-300 border-white text-lg'>Texnikalar</a></li>
      <li><Link to={'/loyihalar'}><a href="" className=' hover:border-b-[1px] hover:text-white text-gray-300 border-white text-lg'>Loyihalar</a></Link></li>
      <li><a href="#contact" className=' hover:text-white text-gray-300 border-white text-lg'>Kontaktlar</a></li>
    </ul>
  </div>

     
        <img src={logo}alt="" className='lg:w-[8%]  md:w-[7%] sm:w-24 ml-10' />
          <div className='flex h-fit mt-5 gap-5 links'>
            <Link to={'/'}><a href="" className='hover:border-b-[1px] hover:text-white text-gray-300 border-white text-lg'>Asosiy</a></Link>
            <a href="#about" className=' hover:text-white text-gray-300 border-white text-lg'>Biz Haqimizda</a>
            <Link to={'/maxsulotlar'}><a href=""  className='hover:border-b-[1px] hover:text-white text-gray-300 border-white text-lg'>Maxsulotlar</a></Link>
            <a href="#technics" className=' hover:text-white text-gray-300 border-white text-lg'>Texnikalar</a>
            <Link to={'/loyihalar'}><a href="" className=' hover:border-b-[1px] hover:text-white text-gray-300 border-white text-lg'>Loyihalar</a></Link>
            <a href="#contact" className=' hover:text-white text-gray-300 border-white text-lg'>Kontaktlar</a>
          </div>
        </div>
        <img src={water} alt="" className='lg:w-full -mt-[0.1%] md:w-full water  ' />
    </div>
  )
}

export default Navbar