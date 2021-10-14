import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

function Example(props: any)
{
    var items = [
        {
            name: "Zapatilla Negra 34 al 45",
            image: "/../public/zapatillas/znegra.webp"
        },
        {
            name: "Zapatilla Roja 34 al 45",
            image: "/../public/zapatillas/zroja.webp"
        },
        {
            name: "Zapatilla Camuflada 34 al 45",
            image: "/../public/zapatillas/zcamo.webp"
        },
        {
            name: "Zapatilla Blanca 34 al 45",
            image: "/../public/zapatillas/zblanca.webp"
        },
        {
            name: "Zapatilla Beige 34 al 45",
            image: "/../public/zapatillas/zbeige.webp"
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
            <Image src= {props.item.image}
            width={300}
            height={300}
            ></Image>
        </Paper>
    )
}
export default Example