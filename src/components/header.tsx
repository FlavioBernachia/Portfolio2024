import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const Header = () => {
  return (
    <div className='header'>
      
        <div className='logo'>
        <Image src={logo} alt='logotipo' width={80} height={80}/>
        </div>
        <div className='buttons'>
            <a className='menu-button' href="#"><div >Home</div></a>
            <a className='menu-button' href="#AboutTittle"><div >about</div></a>
            <a className='menu-button' href="#projects"><div >Projects</div></a>
            <div className='menu'>Menu</div>
            <div className='menu-options'>
                <ul className='options'>
                    <li><a  href="#">Home</a></li>
                    <li><a  href="#AboutTittle">About</a></li>
                    <li><a  href="#projects">Projects</a></li>
                    <li><a  href="#">Contact</a></li>
                </ul>
                <ul className='options1'>
                    <li> <InstagramIcon fontSize="large" color="primary"  /><a href="https://www.instagram.com/flaviobernachia/" target="_blank"> <p>Instagram</p> </a></li>
                    <li> <LinkedInIcon fontSize="large" color="primary"  /><a href="https://www.linkedin.com/in/flavio-bernachia/" target="_blank"> <p>LinkedIn</p> </a></li>
                    <li> <GitHubIcon fontSize="large" color="primary"/> <a href="https://github.com/FlavioBernachia" target="_blank"> <p>Github</p></a></li>
                    <li> <AssignmentIcon fontSize="large" color="primary"/> <a href="#" target="_blank"><p>Curriculum Vitae</p></a></li>
                </ul>
            </div>
        </div>

    </div>
  )
}
