import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

function CarouselBoots(props: any)
{
    var items = [
        {
            name: "Botitas lona 36 al 45",
            image: "/../public/boots/whiteandblack.webp"
        },
        {
            name: "Botitas lona 36 al 45",
            image: "/../public/boots/rojo.webp"
        },
        {
            name: "Botitas lona 36 al 45",
            image: "/../public/boots/trescolores.webp"
        },
        {
            name: "Botita lona 36 al 40",
            image: "/../public/boots/jean.webp"
        },
        {
            name: "Botitas lona 41 al 45",
            image: "/../public/boots/bordo.webp"
        },
        {
            name: "Botitas lona 36 al 45",
            image: "/../public/boots/ecocuero.webp"
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
export default CarouselBoots