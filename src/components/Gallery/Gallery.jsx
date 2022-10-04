import React from 'react'
import './Gallery.css'
import Hr from "../../assets/hr.png"
import Gallery1 from "../../assets/gallery1.jpg"
import Gallery2 from "../../assets/gallery2.jpg"
import Gallery3 from "../../assets/gallery3.jpg"
import Gallery4 from "../../assets/gallery4.jpg"
import Gallery5 from "../../assets/gallery5.jpg"
import Gallery6 from "../../assets/gallery6.jpg"
import Gallery7 from "../../assets/gallery7.jpg"
import Gallery8 from "../../assets/gallery8.jpg"
import { motion } from 'framer-motion'

const Gallery = () => {
  return (
    <section id="gallery">
      <div className='gallery'>
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: [10, 0, 10, 0] }}
          transition={{ type: 'tween', duration: 3, ease: "linear" }}
        >
          <img src={Hr} alt="" width={130} height={20} />
        </motion.div>
        <h1>A closer look at our family ❤️</h1>
        <div className="gallery-container">
          <div className="gallery-img-group">
            <img src={Gallery1} alt="" />
            <img src={Gallery2} alt="" />
          </div>
          <div className="gallery-img-group">
            <img src={Gallery3} alt="" />
            <img src={Gallery4} alt="" />
          </div>
          <div className="gallery-img-group">
            <img src={Gallery5} alt="" />
            <img src={Gallery6} alt="" />
          </div>
          <div className="gallery-img-group">
            <img src={Gallery7} alt="" />
            <img src={Gallery8} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery