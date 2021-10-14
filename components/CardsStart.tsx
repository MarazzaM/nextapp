import React from 'react'
import CardStart from '../components/CardStart'
import styles from  '../styles/CardsStart.module.scss'

function CardsStart() {
    const content = [
        {
          id: 'i1',
          title: 'Inicio',
          text: "Las últimas promociones y novedades, para que nunca te pierdas una actualización",
          path: "/",
        },
        { id: 'i2', 
        title: 'Catálogo', 
        text: "Mirá todos nuestros modelos y elegí los que mas te gusten", 
        path: "About", 
        },
        {
          id: 'i3',
          title: 'Contáctanos',
          text: "Cómo podes ponerte en contacto con nosotros y recibir las zapas en tu casa",
          path: "Contact",
        },
        {
          id: 'i4',
          title: 'Cómo comprar',
          text: "Querés tener YA tus zapas? Enterate cómo, te llegan antes que te des cuenta",
          path: "Buy",
        },
      ];
    return (
      <div className={styles.containercards}>
      <span><i className='bx bx-down-arrow-alt'></i>Clickea en alguna de nuestras secciones para empezar<i className='bx bx-down-arrow-alt'></i></span>

        <div className={styles.cardsstart}>
      <CardStart
       title={content[1].title}
       text={content[1].text}
       path={content[1].path}
       id={content[1].id}
      />
      <CardStart
       title={content[2].title}
       text={content[2].text}
       path={content[2].path}
       id={content[2].id}
      />
      <CardStart
       title={content[3].title}
       text={content[3].text}
       path={content[3].path}
       id={content[3].id}
      />
        </div>
        </div>
    )
}

export default CardsStart
