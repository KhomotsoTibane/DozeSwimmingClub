import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Baby from "../../assets/baby.png"
import { motion } from "framer-motion"

const Hero = () => {

    const transition = { type: 'tween', duration: 2.5 }
    return (
        <section id='hero'>
            <div className="hero-container">
                {/* <Header /> */}
                <div className="hero">
                    <motion.h2
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, ease: "easeIn", delay: .5 }}
                    > Baby's First Dive</motion.h2>
                    <motion.div className="cta"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, ease: "easeIn", delay: .7 }}
                    >
                        <h3>Swimming for babies</h3>
                        <span>Its out mission to make swimming lessons fun for everyone, from infants to adults</span>
                    </motion.div>
                    <motion.a href="#contact" className="btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...transition, ease: "easeOut", delay: 2 }}
                    >Join us</motion.a>
                </div>
                <div className="curve">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,256L26.7,240C53.3,224,107,192,160,181.3C213.3,171,267,181,320,192C373.3,203,427,213,480,208C533.3,203,587,181,640,170.7C693.3,160,747,160,800,165.3C853.3,171,907,181,960,208C1013.3,235,1067,277,1120,288C1173.3,299,1227,277,1280,234.7C1333.3,192,1387,128,1413,96L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </div>
            </div>
        </section>
    )
}

export default Hero

