import React from 'react'
import "./Faq.css"
import faq from './data'
import { AiOutlineArrowRight } from "react-icons/ai"
import Hr from "../../assets/hr.png"
import { motion } from 'framer-motion'


const Faq = () => {
  return (
    <section id='faq'>
      <div className='faq'>
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: [10, 0, 10, 0] }}
          transition={{ type: 'tween', duration: 3, ease: "linear" }}
        >
          <img src={Hr} alt="" width={130} height={20} />
        </motion.div>
        <h1>Get Ready To Jump In</h1>
        <div className="faq-cards">
          {faq.map((card, i) => (
            <div className="faq-card" key={i}>
              <img src={card.icon} alt="" />
              <h3>{card.heading}</h3>
              <span>{card.text}</span>
              <a href="#schedule">view schedule <AiOutlineArrowRight /></a>
            </div>
          )
          )}
        </div>
      </div>
    </section>
  )
}

export default Faq