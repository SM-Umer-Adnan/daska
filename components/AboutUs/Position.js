import React from 'react'
import Image from 'next/image'
import one from "../../public/pexels-emmy-e-1252107-2381069.jpg"

const Position = () => {
  return (
    <>
      <div className='relative bg-gradient-to-r from-cyan-900 to-blue-500 w-[88%] mx-auto'>
        
            <Image src={one} className=' w-[100px] rounded-full p-[4px] bg-yellow-300 h-[100px] '/>
           
      </div>
    </>
  )
}

export default Position
