import Image from 'next/image'
import React from 'react'
import homesvg from "../../public/imagenhome (3).svg"

export const HomePage = () => {
  return (
    <div className='home' >
        <div><Image src={homesvg} alt='main-image'/> <h2 className='tittle-home'>Portfolio</h2></div>
    </div>
  )
}
