import React from 'react'
import { motion } from 'framer-motion'
import Carousels from '../components/Carousels'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

function About() {
    return (
        <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
    >
        <div className="about-page">
            <h1><span className="pink">Conocé</span> <span className="blue">nuestros</span> <span className="pink">distintos</span> <span className="blue">modelos</span></h1>
            <Carousels />
            <span>Podes consultarnos por mensaje para tener los que más te gusten.</span> <br /> <br />
            <a target="_blank" href="https://wa.link/k0rl4s" rel="noopener noreferrer">
             Escribinos en WhatsApp <i className='bx bxl-whatsapp'></i>
            </a>
        </div>
        </motion.main>
    )
}

export default About
