import React from 'react'
import CarouselCat from '../components/Carouselcat'
import CarouselKids from './CarouselKids'
import CarouselShoes from './CarouselShoes'
import CarouselBoots from './CarouselBoots'

function Carousels() {
    return (
        <div className="container-carousels">
            <CarouselCat/>
            <CarouselShoes/>
            <CarouselBoots />
            <CarouselKids />
        </div>
    )
}

export default Carousels
