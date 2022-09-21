import React, { useState } from 'react'
import './Header.css'
import { BsFacebook, BsFillTelephoneFill, BsClockFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import LogoCircle from "../../assets/logo-circle.png"
import { motion } from 'framer-motion'

const Header = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <header>
            {/* <div className="header__contact">
            <div className="header__address">
                <p><MdLocationOn/>16 Jamie Road, Pretoria East, Gauteng</p>
                <p><BsClockFill/>Mon - Sat: 10am - 7pm</p>
            </div>
          
            <div className="header__social-media">
                <RiInstagramFill/>
                <BsFacebook/>
            </div>
        </div>
        <hr /> */}

            <nav>
                <div className="header__logo">
                    <img src={LogoCircle} alt="" />
                    <span>Doze Swimming Club</span>
                </div>
                <div className="header__menu">
                    <div className='header__menu-links'>
                        <ul><li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li></ul>
                    </div>
                    <div className="header__navbar-menu-mobile">
                        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
                        {toggle && (
                            <motion.div
                                initial={{ x: 150 }}
                                animate={{ x: 0 }}
                                transition={{ type: 'tween', ease: 'linear' }}
                            >
                                <HiX onClick={() => setToggle(false)} />
                                <ul>
                                    {["home", "about", "gallery", "contact"].map((item, i) => (
                                        <li key={i}>
                                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header