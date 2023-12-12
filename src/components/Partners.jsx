import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Partners = () => {
    const [url ,setUrl] = useState('https://backend.n1beton.uz/logo-company/')
    const {data , isPending,error} = useFetch(url)
  return (
    <div className=' mt-[5%] py-3 bg-[#153973] px-10'>
    <div className='  grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6'>
     {data && data.map((logos)=>{
        return <>
            <img src={logos.logo} alt=""  />
        </>
     })}
    </div>
    </div>
  )
}

export default Partners