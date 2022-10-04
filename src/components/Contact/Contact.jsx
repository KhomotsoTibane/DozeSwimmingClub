import React from 'react'
import './Contact.css'
import {BsClockFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {GiSmartphone} from "react-icons/gi" 
import Location from "../../assets/location.png"

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact">
        <div className="contact__left">
          <img src={Location} alt="" />
        </div>
        <div className="contact__right">
          <h1>Find us here</h1>
          <div>
            <MdLocationOn/>
            <div>
              <span>Location</span><span>Pretoria</span><span>Gauteng</span>
            </div>
          </div>
          <div>
            <BsClockFill/>
            <div>
              <span>Hours</span><span>Monday - Sunday 10:00 - 17:00</span><span>Sunday: Closed</span>
            </div>
          </div>
          <div>
          <GiSmartphone/>
            <div>
              <span>Contact</span><span>123456789</span><span>swim@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact