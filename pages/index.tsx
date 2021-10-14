import type { NextPage } from 'next'
import CardsStart from '../components/CardsStart'
import styles from '../styles/Index.module.scss'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Home: NextPage = () => {
  
  return (
    <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: 'linear' }}
>
    <div className={styles.indexpage}>
      <div className={styles.titlesojitos}>
      <h1><span className='blue'>Sojas</span> y <span className='pink'>Sojitos</span></h1>
      <h2>Calzado para <span className="blue">peques</span> y no tan <span className="pink">peques</span></h2>
      <span className={styles.text}>Pasa por nuestras secciones y encontrá el calzado ideal para vos! <br /> Si tenés alguna consulta, no dudes en pasar por nuestro instagram para que te ayudemos con lo que necesites!</span>
      <br />
      </div>

      <CardsStart />
    </div>
    </motion.main>
  )
}

export default Home
