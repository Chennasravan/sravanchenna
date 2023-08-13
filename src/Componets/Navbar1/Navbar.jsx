import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from "react-scroll"


function Navbar() {
  return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Vignesh.K</div>
                <Toggle/>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to="Sevices" smooth={true} >
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to="Experience" smooth={true} >
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to="Portfolio" smooth={true} >
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to="Testimonals" smooth={true} >
                        <li>Testimonals</li>
                    </Link> 
                    </ul>
                </div>
                <Link spy={true} to="ContactUs" smooth={true} >
                <button className="button">
                    Contact Us
                </button>
                </Link>
            </div>
        </div>
  )
}

export default Navbar