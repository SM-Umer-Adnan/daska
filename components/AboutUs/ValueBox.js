import React from 'react'
import Image from 'next/image'

const ValueBox = ({image,title,desc}) => {
  return (
    <div className=' w-[33%]'>
    <div className='flex flex-col gap-y-5'>
       <Image src={image} width={100}
      height={100}  alt="Picture of the author" className='w-[400px] rounded-xl'/>
      <h1 className='pl-4 text-xl font-semibold tracking-wider'>
      {title}
      </h1>
      <p className='pl-4 text-slate-700'>{desc}</p>
      </div>

    </div>
  )
}

export default ValueBox
