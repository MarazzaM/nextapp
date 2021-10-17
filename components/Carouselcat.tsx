import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

function Example(props: any)
{
    var items = [
        {
            name: "Zapatilla Negra 34 al 45",
            image: "https://i.imgur.com/o3X6TyM.webp"
        },
        {
            name: "Zapatilla Roja 34 al 45",
            image: "https://i.imgur.com/D0I83CU.webp"
        },
        {
            name: "Zapatilla Camuflada 34 al 45",
            image: "https://i.imgur.com/LnOWH9K.webp"
        },
        {
            name: "Zapatilla Blanca 34 al 45",
            image: "https://i.imgur.com/D4XkY5f.webp"
        },
        {
            name: "Zapatilla Beige 34 al 45",
            image: "https://i.imgur.com/2uizD7Z.webp"
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
    )
}

function Item(props: any)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img src= {props.item.image}
            width={300}
            height={300}
            loading="lazy"
            ></img>
        </Paper>
    )
}
export default Example