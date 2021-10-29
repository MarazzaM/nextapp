import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

function CarouselKids(props: any)
{
    var items = [
        {
            name: "Zapa kids Negra 27 al 34",
            image: "https://i.imgur.com/bOnvHpW.webp"
        },
        {
            name: "Zapa kids Fucsia 27 al 34",
            image: "https://i.imgur.com/Yvn1qX8.webp"
        },
        {
            name: "Zapa kids Beige 27 al 34",
            image: "https://i.imgur.com/KmpLjM4.webp"
        },
        {
            name: "Zapa kids Roja 27 al 34",
            image: "https://i.imgur.com/m3HQUZZ.webp"
        },
    ]

    return (
        <Carousel
        interval= {6500}
        animation= { "slide" }
        >
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
export default CarouselKids