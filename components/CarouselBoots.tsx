import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

function CarouselBoots(props: any)
{
    var items = [
        {
            name: "Botitas lona 36 al 45",
            image: "https://i.imgur.com/fWiWb0Y.webp"
        },
        {
            name: "Botitas lona 36 al 40",
            image: "https://i.imgur.com/R4tDU8p.webp"
        },
        {
            name: "Botitas lona 36 al 45",
            image: "https://i.imgur.com/x3XrUWU.webp"
        },
        {
            name: "Botita lona 36 al 40",
            image: "https://i.imgur.com/BzEQBSD.webp"
        },
        {
            name: "Botitas lona 41 al 45",
            image: "https://i.imgur.com/kcpi4nJ.webp"
        },
        {
            name: "Botitas Eco 36 al 45",
            image: "https://i.imgur.com/EYZkQfA.webp"
        },
    ]

    return (
        <Carousel
        interval= {6000}
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
export default CarouselBoots