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
         return <p className='lg:text-2xl sm:text-sm lg:w-2/3 sm:w-fit'>{texts.text}</p>
        })}</SwiperSlide>
      {data && data.map((video)=>{
        return <>
        
        <SwiperSlide className='text-center'>
        <ReactPlayer
        url={video.video} // Assuming the first video from the API
        playing={playing}
        width="100%"
        height="auto"
        controls
      />
      </SwiperSlide>
        </>
      })}
      </Swiper>
      <div className='mb-[50%]'>
        <img src={circle7} alt="" className=' w-[23%] lg:-mt-[49%] sm:-mt-[60%] ' />
        <h1 className=' texts lg:text-7xl md:text-5xl sm:text-3xl text-black lg:-mt-[42%] sm:-mt-[36%] ml-[2%] ' id='technics'>BIZNING TEXNIKALAR</h1>
    </div>
    </>
  )
}

export default Technics