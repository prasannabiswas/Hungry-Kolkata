import React, { useEffect, useState } from 'react';
import {foodTypeCrousel} from "../FoodCarousel/foodTypes";
import FoodItemCard from './FoodItems/FoodItemCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

// Splider Imports
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
// -----------------

// React Carousel Imports
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// -----------------

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

// const FoodItemsList = (props) => {
//   return (
//     <>
//         <Carousel
//           swipeable={true}
//           draggable={false}
//           showDots={false}
//           responsive={responsive}
//           ssr={true} // means to render carousel on server-side.
//           infinite={true}
//           autoPlay={props.deviceType !== "mobile" ? true : false}
//           autoPlaySpeed={3000}
//           keyBoardControl={true}
//           customTransition="all .10"
//           transitionDuration={100}
//           containerClass="carousel-container"
//           // removeArrowOnDeviceType={["tablet", "mobile"]}
//           deviceType={props.deviceType}
//           // dotListClass="custom-dot-list-style"
//           itemClass="carousel-item-padding-50-px"
//         >
          
//             {foodTypeCrousel.map((val,key)=>{
//                 return (
//                     <FoodItemCard
//                         key = {key}
//                         image = {val.image}
//                         carouselName =  {val.foodTypeName}
//                     />
//                 );
//             })}
//         </Carousel>
//     </>
//   )
// }


const FoodItemsList = (props) => { 

  const [product, setProduct] = useState([]);

  async function fetchPizzas(){
    const response = await axios.get(`http://localhost:8080/pizzas`);
    setProduct(response.data);
    console.log(product);
    return response.data;
  }
  
  useEffect(()=>{
    fetchPizzas();
  }, []);

  const splideOptions = {
    perPage: 4,
    perMove: 2,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    autoplay: true,
    pauseOnHover : true,
    // speed: 2,
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  
  
  // splide.mount();

  return(
    <div className='container-fluid' style={{backgroundColor: "#EA906C", color: "black"}}>
      <p>Pizzas</p>

      <Splide options={splideOptions}>

          <SplideSlide>
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                  <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                  <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                  </ul>
                </div>
              </div>
          </SplideSlide>

          <SplideSlide>
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                  <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                  <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                  </ul>
                </div>
              </div>
          </SplideSlide>

          <SplideSlide>
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                  <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                  <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                  </ul>
                </div>
              </div>
          </SplideSlide>

          <SplideSlide>
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                  <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                  <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                  </ul>
                </div>
              </div> 
          </SplideSlide>

          <SplideSlide>
              <div className="card rounded shadow-sm border-0">
                <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                  <h5> <a href="#" className="text-dark">Awesome product</a></h5>
                  <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <ul className="list-inline small">
                    <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                  </ul>
                </div>
              </div>
          </SplideSlide>
              
      </Splide>

    </div>
  );
}

export default FoodItemsList;