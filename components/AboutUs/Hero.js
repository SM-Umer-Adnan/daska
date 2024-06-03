import React from 'react'
import Image from 'next/image'
import TextAnimation from './TypeAnimation'

const Hero = () => {
  return (
   <>
  <div className=' h-[80vh] flex justify-around mt-10 text-3xl m-auto w-[88%]'>
      <div className=' left w-[40%] flex flex-col '>
      <div className='flex flex-col gap-y-14 '>
        

      <div>
      <div className='flex flex-col font-bold gap-y-6'>
      <div className='font-medium text-5xl w-[90%] tracking-tighter leading-[4rem] '>
        {/* <h1>Work w/ icons and</h1>
        <h1>sync them from</h1>
        <h1>design to <span className='text-[#9c3df5]'> code </span></h1> */}
        <TextAnimation />
        </div>
        <div className='text-xl font-light text-gray-600'>
        <p>Lorem mollis aliquam ut porttitor leo nequeas</p>
        <p>gravida in fermentum et sollicitudin suis amet.</p>
        </div>
        </div>
        </div>
        <div>
        <div className='flex justify-around '>
          <hr className='w-[170px] text-black h-[12px]'/>
          <hr className='w-[170px] text-black h-[12px]'/>
         
        </div>

        <div className='flex justify-around'>
        <div className='relative flex  w-[40%] justify-between items-center'>
        <div className='flex'>
        <Image src={require("/public/istockphoto-1437816897-170667a.webp") } 
        alt="Picture of the author" className='w-[60px] h-[60px] rounded-full' />
        <Image src={require("/public/istockphoto-1476170969-170667a.webp") } 
        alt="Picture of the author" className='w-[60px] h-[60px] rounded-full absolute left-10  border-white border-4' />
        
        </div>
        <div >
          <h1 className='text-lg text-slate-600'>356 Users</h1>
        </div>
        </div>

        <div className='flex items-center gap-x-2 w-[38%] '>
          <h1 className='text-2xl font-medium tracking-tighter'>$11,897</h1>
          <h1 className='text-sm text-slate-600'>PER YEAR</h1>
        </div>
        </div>
        </div>

        </div> 
        
      
        
        
        
      </div>
      <div className=' w-[45%]'>
         <Image src={require("/public/p1-img-1 (1).jpg") } 
        alt="Picture of the author" className='w-[600px] rounded-xl' />
      </div>
  </div>

   </>
  )
}

export default Hero
