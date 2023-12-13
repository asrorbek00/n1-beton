import React, { useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation  } from 'swiper/modules';
import ReactPlayer from 'react-player';
import circle7 from '../assets/circle7.png'

const Technics = () => {
    const videoRef = useRef();
    const [stop, setStop] = useState(false);
    const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing)
  };




    const {data , isPending ,error} = useFetch('https://backend.n1beton.uz/technical-video/')
     const {data:text} = useFetch('https://backend.n1beton.uz/technical-text/')
    
  return (
    <> 
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        
        modules={[Navigation]}
        className="mySwiper lg:ml-[20%] md:ml-[20%] sm:ml-0 lg:mt-[%] md:mt-[15%] sm:mt-[28%]  "
        
      >
      
      <SwiperSlide>{ text && text.map((texts)=>{
         return <div className='flex flex-col lg:gap-64'>
          <p className='lg:text-2xl sm:text-sm lg:w-2/3 sm:w-fit'>{texts.text}</p>
          <a href="tel:998952040800" className='contacti'><button className='text-2xl py-2 px-10 lg:ml-32 border-2 border-black hover:bg-black hover:text-white '>Bog`lanish</button></a>
          </div>
          
        })}</SwiperSlide>
      {data && data.map((video)=>{
        return <>
        
        <SwiperSlide className='text-center'>
        <ReactPlayer
        url={video.video} // Assuming the first video from the API
        playing={playing}
        width="80%"
        height="80%"
        controls
      />
      </SwiperSlide>
        </>
      })}
      </Swiper>
      <div className='mb-[50%]'>
        <img src={circle7} alt="" className=' lg:w-[23%] lg:-mt-[40%] sm:w-0 ' />
        <h1 className='buyan lg:text-7xl md:text-5xl sm:text-3xl text-black lg:-mt-[42%] sm:-mt-[86%] ml-[2%] ' id='technics'>BIZNING TEXNIKALAR</h1>
    </div>
    </>
  )
}

export default Technics