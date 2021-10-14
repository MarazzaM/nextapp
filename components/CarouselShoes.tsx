import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Image from 'next/image'

function CarouselShoes(props: any)
{
    var items = [
        {
            name: "Skater Negra 36 al 44",
            image: "/../public/zapatos/vans.webp"
        },
        {
            name: "Ecocuero suela 37 al 44",
            image: "/../public/zapatos/suela.webp"
        },
        {
            name: "Ecocuero visón 37 al 44",
            image: "/../public/zapatos/vison.webp"
        },
        {
            name: "Ecocuero gris 37 al 44",
            image: "/../public/zapatos/gris.webp"
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
export default CarouselShoes