import React from 'react'
import "./Footer.css"
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import LogoCircle from "../../assets/logo-circle.png"

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer">
        <div className="footer__social">
          <span><BsFacebook /></span>
          <span><RiInstagramFill /></span>
        </div>
        <span>Doze Swimming Club | Khomotso Tibane</span>
      </div>
    </footer>
  )
}

export default Footer