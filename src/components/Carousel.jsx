import React from 'react';
import Carousel from 'better-react-carousel';
import foodCards, { cocktailCards } from "../data/Cards";


const FoodGallery = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop={true}>
      {foodCards.map((card, index) => (
        <Carousel.Item>
          <div key={index}>
          <h5>{card.title}</h5>
          <img alt={card.title} src={card.imageSrc} width="368" height="350" />
          <h6>{card.description}</h6>
          </div>
        </Carousel.Item>
        ))}
    </Carousel>
  )
};

const CocktailGallery = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop={true}>
      {cocktailCards.map((card, index) => (
        <Carousel.Item>
          <div key={index}>
          <h5>{card.title}</h5>
          <img alt={card.title} src={card.imageSrc} width="368" height="368" />
          <h6>{card.description}</h6>
          </div>
        </Carousel.Item>
        ))}
    </Carousel>
  )
};


export default FoodGallery;
export { CocktailGallery };