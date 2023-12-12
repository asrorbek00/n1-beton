import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link} from 'react-router-dom'
import circle3 from '../assets/circle3.png'

const Products = () => {
    const[url , setUrl] = useState('https://backend.n1beton.uz/product/')
    const {data:products , isPending, error} = useFetch(url)
    
  return (
    <div className='pl-[5%] mt-[25%]'>
       <div className='ml-[2%]'>
        <img src={circle3} alt="" className='w-[25%] ml-[19%]' />
        <h1 className='buyan lg:text-7xl md:text-5xl sm:text-3xl -mt-[35%]'>MAXSULOTLAR</h1>
       </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-y-8 mt-[20%]'>
        {products && products.map((product)=>{
             return <div className=' flex flex-col gap-4 text-left border-l-2 px-5 border-black pt-[5%]' id={`product-${product.id}`} key={product.id}>
             <h2 className='text-6xl text-[#153973] number '>0{product.id}</h2>
             <h2 className='text-4xl text-[#153973]'>{product.title}</h2>
             <p className='w-32 mt-[5%]'>
            {product.text}
             </p>
                <img src={product.image} alt="" className='w-[70%] mt-[5%]' />
                <Link to={'/maxsulotlar'} className='w-fit'><button className='lg:py-[2%] md:py-[2%] sm:py-0 border-[1px] border-black w-[70%] lg:ml-20  sm:ml-[5%] mt-[5%] hover:bg-black hover:text-white hover:border-[1px]'>Maxsulotlarni ko`rish</button></Link>
             </div>
        })}
            
        </div>
    </div>
  )
}

export default Products