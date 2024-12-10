import React from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { CardProduct } from '../Card/card';

export const SlideCard = ({arrCard}) => {
    var setttings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2500,
    };
    return (
        <Slider {...setttings}>
            {arrCard.map((card) => {
                return(
                    <Link to={`/productdetails/${card.id}`}>
                        <CardProduct    proudctId={card.id} 
                                        proudctName={card.name}
                                        productType={card.type}
                                        proudctPrice={card.price} 
                                        proudctImage={card.image}
                                        widthCard={'145px'} 
                                        heightCard={'280px'}
                                        widthImage={'145px'}
                                        heightImage={'200px'}
                                        
                        />
                    </Link>
                )
            })}
        </Slider>
    )
}
