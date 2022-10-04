import React from 'react'
import './About.css'
import About1 from "../../assets/about1.png"
import About2 from "../../assets/about2.jpg"
import About3 from "../../assets/about3.jpg"
import Hr from "../../assets/hr.png"
import { AiOutlineArrowRight, AiOutlineRotateLeft } from "react-icons/ai"
import { motion, transform } from 'framer-motion'

const About = () => {

  return (
    <section id='about'>
      <div className="about">
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: [10, 0, 10, 0] }}
          transition={{ type: 'tween', duration: 3, ease: "linear" }}
        >
          <img src={Hr} alt="" width={130} height={20} />
        </motion.div>
        <h1>Swimming Programs</h1>
        <div className="cards">
          <div className="card">
            <h1>Swimming for babies</h1>
            <span>Infants as young as 6 months old can benefit from group swimming lessons.</span>
            <a href="#schedule">view schedule <AiOutlineArrowRight /></a>
            <div>
              <motion.img
                // initial={{ x: 0 , }}
                // whileInView={{ x: -70, y:0 }}
                // transition={{ type: 'tween', duration: 1, ease: "linear" }}
                src={About1} alt="" />
            </div>
          </div>
          <div className="card">
            <h1>Group swim class</h1>
            <span>We taught thousands of children how to love the water, it's time for you to jump in.</span>
            <a href="#schedule">view schedule <AiOutlineArrowRight /> </a>
            <div>
              <motion.img
                // initial={{ x: 0 }}
                // whileInView={{ x: -70 }}
                // transition={{ type: 'tween', duration: 1, ease: "linear" }}
                src={About2} alt="" />
            </div>
          </div>
          <div className="card">
            <h1>Private swim class</h1>
            <span>Private lessons are 30 minutes long and pair one swimmer with one instructor.</span>
            <a href="">view more <AiOutlineArrowRight /></a>
            <div>
              <motion.img
                // initial={{ x: 0 }}
                // whileInView={{ x: -70, y:25 }}
                // transition={{ type: 'tween', duration: 1, ease: "linear" }}
                src={About3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About