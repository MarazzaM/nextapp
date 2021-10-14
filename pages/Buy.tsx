import React from 'react'
import { motion } from 'framer-motion'
import CardsSteps from '../components/CardsSteps'
import Image from 'next/image'
import ImageModal from '../components/ImageModal'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}
const urls = [
    {url:"/../public/buy/sabertalle.webp",},
      { url:"/../public/buy/tablastar.webp", },
      { url:"/../public/buy/tablashoes.webp",},
    ]

function Buy() {
    return (
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
        >
        <div className="buy-page">
            <h1><span className="blue">Seguí</span> estos <span className="pink">pasos</span> y <span className="blue">tené</span> tus <span className="pink">zapas</span> YA!</h1>
            <CardsSteps />
            <h2>MEDÍ TUS TALLES PARA QUE TE LLEGUE LA MEDIDA PERFECTA</h2>
            <div className="images-buy">
                <div>
            <Image
        src="/../public/buy/sabertalle.webp"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <ImageModal
      url={urls[0].url}
      />
                </div>
        <div>
        <Image
        src="/../public/buy/tablastar.webp"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <ImageModal
      url={urls[1].url}
      />
        </div>

        <div>
        <Image
        src="/../public/buy/tablashoes.webp"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <ImageModal
      url={urls[2].url}
      />
        </div>
            </div>
        </div>
        </motion.main>
    )
}

export default Buy
