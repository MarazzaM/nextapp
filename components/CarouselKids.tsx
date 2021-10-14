import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

function CarouselKids(props: any)
{
    var items = [
        {
            name: "Zapa Negra 27 al 34",
            image: "/../public/kids/negra.webp"
        },
        {
            name: "Zapa Fucsia 27 al 34",
            image: "/../public/kids/fucsia.webp"
        },
        {
            name: "Zapa Beige 27 al 34",
            image: "/../public/kids/beige.webp"
        },
        {
            name: "Zapa Roja 27 al 34",
            image: "/../public/kids/roja.webp"
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
export default CarouselKids