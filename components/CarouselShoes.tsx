import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

function CarouselShoes(props: any)
{
    var items = [
        {
            name: "Skater Negra 36 al 44",
            image: "https://i.imgur.com/AhXXfpY.webp"
        },
        {
            name: "Ecocuero suela 37 al 44",
            image: "https://i.imgur.com/zGddyhc.webp"
        },
        {
            name: "Ecocuero visón 37 al 44",
            image: "https://i.imgur.com/eVrH1gr.webp"
        },
        {
            name: "Ecocuero gris 37 al 44",
            image: "https://i.imgur.com/xVLo0t0.webp"
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
export default CarouselShoes