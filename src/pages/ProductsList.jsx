import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link} from 'react-router-dom'
import circle33 from '../assets/circle33.png'

const ProductsList = () => {
    const[url , setUrl] = useState('https://backend.n1beton.uz/product/')
    const {data:products , isPending, error} = useFetch(url)
    
  return (
    <>
    <div className='heading -mt-[5%]' >
            <div className='flex items-center'>
            <img src={circle33} alt="" className='w-[30%] ml-[4%] '  />
            <div className='flex flex-col text-center w-fit  '>
            <h1 className='lg:text-7xl  text-center text-white font-semibold '>Maxsulotlar</h1>
            <p className=' text-[#c1c1c1] text-center'>Biz Sizning orzularingizni ro`yobga chiqarish uchun shu yerdamiz</p>
            </div>
            </div>

        </div>
    <div className='pl-[5%] '>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-y-8 '>
        {products && products.map((product)=>{
             return <div className=' flex flex-col gap-4 text-left border-l-2 px-5 border-black pt-[5%]' id={`products-${product.id}`}  key={product.id}>
             <h2 className='text-6xl text-[#153973] '>{product.id}</h2>
             <h2 className='text-4xl text-[#153973]'>nomi:{product.title}</h2>
             <p className='w-32 mt-[5%]'>
            {product.text}
             </p>
                <img src={product.image} alt="" className='w-[70%] mt-[5%]' />
             </div>
        })}
            
        </div>
    </div>
    </>
  )
}

export default ProductsList