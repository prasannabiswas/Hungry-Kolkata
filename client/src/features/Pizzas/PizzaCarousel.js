import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import "./Pizza.css";

// Splider Imports
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
// -----------------

// Material UI star
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const PizzaCarousel = () => {

  const pizzas = useSelector(state=>state.pizza.pizzas);

  const splideOptions = {
    perPage: 5,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "0.5rem",
    pagination: false,
    padding: "3rem",
    autoplay: true,
    pauseOnHover : true,
    autoScroll: {
        speed: 2,
    },
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <div className='container-fluid'>
      <Splide options={splideOptions} AutoScroll>
        {pizzas.map((items,key)=>{
          return(
            <SplideSlide key={key}>
        
              <div className="food-card">
                <div className="food-card_img">
                    <img src={items.image} alt={items.title}/>
                    <a style={{cursor:"pointer"}}><i className="bi bi-heart"></i></a>
                </div>
                <div className="food-card_content">
                  <div className="food-card_title-section">
                    <p className="food-card_title">{items.title}</p>
                  </div>
                <div className="food-card_bottom-section">
                  <div className="space-between">
                    <div className="pull-right">
                        {items.vegetarian ? <span style={{color:"green"}}><i class="bi bi-circle-fill"></i></span> :
                            <span style={{color:"red"}}> <i class="bi bi-circle-fill"></i></span>}</div>  
                    <Stack spacing={1}>                        
                        <Rating name="half-rating-read" defaultValue={items.rating} precision={0.5} readOnly />
                    </Stack>
                    <div style={{cursor:"pointer", scale: "2"}}><i class="bi bi-bag-plus"></i></div>
                    </div>
                    <hr/>
                    <div className="space-between">
                        <div className="food-card_price">
                            <span>{items.price}$</span>
                        </div>
                        <div className="food-card_order-count">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary minus-btn" type="button" id="button-addon1"><i class="bi bi-dash-square"></i></button>
                              </div>
                              <input type="text" className="form-control input-manulator" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon1"><i class="bi bi-plus-square"></i></button>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}

      </Splide>
      
    </div>
  )
}

export default PizzaCarousel;
