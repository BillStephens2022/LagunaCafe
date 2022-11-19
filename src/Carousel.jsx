import React from 'react';
import Carousel from 'better-react-carousel';
import foodCards, { cocktailCards } from "./Cards";


const FoodGallery = () => {
  return (
    <Carousel cols={5} rows={1} gap={10} loop>
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
    <Carousel cols={5} rows={1} gap={10} loop>
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