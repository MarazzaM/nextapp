import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

function Contact() {
    return (
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
        >
        <div className="contact-page">
            <h1>Podes <span className="blue">mensajearnos</span> en cualquier <span className="pink">momento</span>!</h1>
            <h2>Vamos a <span className="pink">responderte</span> lo antes <span className="blue">posible</span>.</h2>
            <div className="center-containter-bx">
                <div className="icons-container">
                    <a target="_blank" href="https://wa.link/k0rl4s" rel="noopener noreferrer">
                    <i className='bx bxl-whatsapp'></i>
                 <br />   <span className="icon-text">WHATSAPP</span>
                    </a></div>
                <div className="icons-container">
                    <a target="_blank" href="https://www.instagram.com/sojasysojitos/" rel="noopener noreferrer">
                    <i className='bx bxl-instagram' ></i>
                 <br />   <span className="icon-text">INSTAGRAM</span>
                    </a>
                </div>
            </div>
        </div>
        </motion.main>
    )
}

export default Contact
