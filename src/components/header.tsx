import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'

export const Header = () => {
  return (
    <div className='header'>
      
        <div className='logo'>
        <Image src={logo} alt='logotipo' width={80} height={80}/>
        </div>
        <div className='buttons'>
            <div className='menu-button'>Home</div>
            <div className='menu-button'>About</div>
            <div className='menu-button'>Projects</div>
            <div className='menu'>Menu</div>
            <div className='menu-options'>
                <ul className='options'>
                    <li><a  href="#">Home</a></li>
                    <li><a  href="#">About</a></li>
                    <li><a  href="#">Projects</a></li>
                    <li><a  href="#">Contact</a></li>
                </ul>
                <ul className='options1'>
                    <li><a href="#">instagram</a></li>
                    <li><a href="#">instagram</a></li>
                    <li><a href="#">instagram</a></li>
                    <li><a href="#">instagram</a></li>
                </ul>
            </div>
        </div>

    </div>
  )
}
