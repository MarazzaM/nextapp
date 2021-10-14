import React from 'react'
import CardStep from './CardStep';


const content = [
    {
      id: 'cs1',
      title: 'PASO 1',
      text: "Elegí tus modelos favoritos, hasta sacales fotos si queres y nos la envías!",
      path: "/About",
    },
    { id: 'cs2', 
    title: 'PASO 2', 
    text: "Escribinos contandonos cuáles querés, con talle y color ", 
    path: "/Contact", 
    },
    {
      id: 'cs3',
      title: 'PASO 3',
      text: "Recibilos en la comodidad de tu casa, te lo envíamos a todo el país",
      path: "Contact",
    },
  ];
function CardsSteps() {
    return (
        <div className="container-cards-steps">
            <CardStep
             title={content[0].title}
             text={content[0].text}
             path={content[0].path}
             id={content[0].id} 
             />
             <CardStep
             title={content[1].title}
             text={content[1].text}
             path={content[1].path}
             id={content[1].id} 
             />
             <CardStep
             title={content[2].title}
             text={content[2].text}
             path={content[2].path}
             id={content[2].id} 
             />

        </div>
    )
}

export default CardsSteps
