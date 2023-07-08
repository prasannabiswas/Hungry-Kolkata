import React from 'react';
import "./FoodItemCard.css";
import pizzaImage from "../../../images/foodTypeCarousel/pizzaCarouselImage.jpeg";

const FoodItemCard = (props) => {
  return (
    <div className='itemContainer'>
        <img src={props.image} className='foodItemImage' alt={props.carouselName} />
        <p className='foodItemText'>{props.carouselName}</p>
    </div>
  )
}

export default FoodItemCard;
