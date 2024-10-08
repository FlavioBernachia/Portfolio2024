import Image from 'next/image'
import React from 'react'
import homesvg from "../../public/fondohomep1.svg"

export const HomePage = () => {
  return (
    <div className='home' >
        <div>
        <h1 className='homeTittle'>PORTFOLIO</h1>
        <p className='homeParraf'>Flavio Bernachia</p>
        <p className='homeParraf-2'>Frontend developer</p>
        <h2 className='aboutTittle' id='AboutTittle'>About me.</h2>
        </div>
    </div>
  )
}
