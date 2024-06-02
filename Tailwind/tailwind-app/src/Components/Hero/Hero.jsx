import React from 'react'
import heroImg from '../../Assets/view-3d-coffee-cup.jpg'

const Hero = () => {
  return (
    <section className='w-full h-[323px] relative md:h-[100vh]'>
    <div className='w-full h-[100%]'>
      <img src={heroImg} alt='Hero background' className='w-full h-fit pt-16 md:h-[100%]' />
    </div>
    <div className='absolute w-[255px] top-0 h-[100%] flex items-end pb-12 md:w-[400px] md:items-end md:pb-40'>
      <div className='bg-black text-white w-fit py-3 px-3 opacity-50 md:w-[100%] md:py-4 md:px-8'>
        <h2 className='text-base mb-1 md:text-2xl md:mb-3'>LOREM IPSUM DOLOR</h2>
        <p className='text-sm italic mb-2 text-justify md:text-base md:mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu.</p>
        <button className='border py-1 px-4 rounded-3xl text-xs hover:bg-white duration-200 ease-linear hover:text-black md:py-3 md:px-6 cursor-pointer'>CHECK CATEGORY</button>
      </div>
    </div>
    </section>
  )
}

export default Hero