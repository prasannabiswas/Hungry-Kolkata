import React from 'react';
import {foodTypeCrousel} from "../FoodCarousel/foodTypes";
import FoodItemCard from './FoodItems/FoodItemCard';
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const FoodItemsList = (props) => {
  return (
    <>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .10"
          transitionDuration={100}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-50-px"
        >
          
            {foodTypeCrousel.map((val,key)=>{
                return (
                    <FoodItemCard
                        key = {key}
                        image = {val.image}
                        carouselName =  {val.foodTypeName}
                    />
                );
            })}
          
        </Carousel>
    </>
    
  )
}

export default FoodItemsList;
