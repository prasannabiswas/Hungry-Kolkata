import React from 'react';
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import toast, { Toaster } from 'react-hot-toast';

import phone from "../../images/transparentImages/phone.png";
import veggies from "../../images/transparentImages/veggies.png";
// import smoke from "../../images/transparentImages/smoke.webp"
// import heroImg from "../../images/transparentImages/transparentHeaderImage.png";
import leaf from "../../images/transparentImages/transparentLeaf1.jpeg";
import dineIn from "../../images/headerImage/dineIn.webp";
import dineOut from "../../images/headerImage/dineOut.jpeg";
import takeAway from "../../images/headerImage/takeAway.jpeg";
import bgImg1 from "../../images/foodTypeCarousel/bgImg1.jpeg";
import bgImg2 from "../../images/foodTypeCarousel/bgImg2.jpg";
import bgImg3 from "../../images/foodTypeCarousel/bgImg3.jpg";

import NavBarPage from '../Navbar/NavPage1';
import "./Home.css";

// import FoodItemsList from '../FoodCarousel/FoodItemsList';
import PizzaCarousel from '../../features/Pizzas/PizzaCarousel';
import Footer from '../Footer/Footer';


const Home = () => {
    const ref = useRef();
    const pageNo = 3;

  return (
    <div >

      <Parallax pages={pageNo} ref={ref} style={{top: "0", left: "0"}}>
        
        <ParallaxLayer 
          offset={0}
          sticky={{start:0, end:3}}
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            height: "14%",
          }}
        >
          <Toaster />
          <NavBarPage />
          
          
        </ParallaxLayer>

        {/* HEADING SECTION */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
              // backgroundColor: "red",
              // backgroundSize:"cover",
              backgroundPosition: "center",
              zIndex: "1",
          }}
        > 
            <div>
              <div className='headerBgImage' />                
              <h1 className='headerText'>Hungry Kolkata</h1>
            </div>

        </ParallaxLayer>        
        
        
        {/* HERO SECTION */}
        <ParallaxLayer 
          offset={0.35}
          speed={0.5}
          style={{
            // backgroundColor: "red",
            height: "66vh",
            width: "100%",
            backgroundImage: {veggies},
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: "1",
          }}
        >
          <div className='container-fluid heroSection'>
            <div className='container-sm heroText'>
              <img src={phone} className='heroImagePhone'></img>
              <h2 className='heroTextHeading'>Selection for a <br/> <span className='heroTextHeadingND'>New Day</span></h2>
              <p>Delicious meal from the best restaurants</p>
            </div>
          </div>

          <div className='container-fluid' style={{backgroundColor: "rgba(0,0,0,0.5)", width: "100%",height: "70vh", marginTop: "2%"}}>
            <div className='row'>
              <div className='col img1'>
                <img src={dineIn} className='headerImage'/>
                <h4 className='headImageHeading'>#Dine-In</h4>
              </div>
              <div className='col'>
                <img src={dineOut} className='headerImage'/>
                <h4 className='headImageHeading'>#Dine-Out</h4>
              </div>
              <div className='col'>
                <img src={takeAway} className='headerImage'/>
                <h4 className='headImageHeading'>#Take Away</h4>
              </div>
            </div>
          </div> 

          

        </ParallaxLayer>

        {/* DineIn Dineout option */}
        <ParallaxLayer
          offset={1}
          speed={1}
          // className='bg-img1'
          style={{
              // backgroundColor: "red",
              backgroundSize:"cover",
              backgroundPosition: "center",
              width: "100%",
              zIndex: "1",
              // marginTop: "-15%",
          }}
        > 

          <div 
            className='container-fluid'
            style={{
              backgroundColor: "white",
              backgroundSize:"cover",
              backgroundPosition: "center",
              width: "100%",
              height: "50vh",
              zIndex: "-2"
            }}
          > 
            <img src={leaf} className='leaf1'/>
            <img src={leaf} className='leaf2'/>
            <img src={leaf} className='leaf3'/>
            <img src={leaf} className='leaf4'/>
            <img src={leaf} className='leaf5'/>
            <img src={leaf} className='leaf6'/>

            <div 
              className='container-xxl'
              style={{
                backgroundSize:"cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                // backgroundColor: "rgba(0,0,0,0.5)",
                color: "black",
                zIndex: "1",
              }}
            > 
              <p className='container heroText'>
                "Savor culinary delights from your favorite local restaurants with our seamless and convenient food ordering app"
              </p>
              
            </div>

          </div>

          <div className='container foodItems'>
            <div className="row pb-5 mb-4">

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0" style={{height:"25rem"}}>
                  <div className="card-body p-4"><img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000" alt="pizza" className="img-fluid d-block mx-auto mb-3" />
                    <h5> <a href="/" className="text-dark" style={{textDecoration:"none"}}>Pizza's</a></h5>
                    <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className="list-inline small">
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                    </ul>
                  </div>
                </div>
              </div>  

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0" style={{height:"25rem"}}>
                  <div className="card-body p-4"><img src="https://c.ndtvimg.com/2023-04/6mdgq5vo_thali_625x300_04_April_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="indian-thali" className="img-fluid d-block mx-auto mb-3" />
                    <h5> <a href="/" className="text-dark" style={{textDecoration:"none"}}>Indian Thali's</a></h5>
                    <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className="list-inline small">
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0" style={{height:"25rem"}}>
                  <div className="card-body p-4"><img src="https://uploads-ssl.webflow.com/5e9ebc3fff165933f19fbdbe/61b31c9d289e22335b6753b2_Ice%20Cream%202.jpg" alt="ice-cream" className="img-fluid d-block mx-auto mb-3" />
                    <h5> <a href="/" className="text-dark" style={{textDecoration:"none"}}>Ice-Cream's</a></h5>
                    <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className="list-inline small">
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="card rounded shadow-sm border-0" style={{height:"25rem"}}>
                  <div className="card-body p-4"><img src="https://imagevars.gulfnews.com/2022/03/11/Guntur-Gongura-Biryani-_17f793bfa09_large.jpg" alt="biryani" className="img-fluid d-block mx-auto mb-3" />
                    <h5> <a href="/" className="text-dark" style={{textDecoration:"none"}}>Biryani's</a></h5>
                    <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className="list-inline small">
                      <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Toaster position="top-right" reverseOrder={false} />
          
          {/* FOOD TYPE CAROUSEL */}
          <PizzaCarousel />
                   
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.4}
          speed={0.5}
          style={{
            width:"100%",
            height:"auto",
            filter:"blur(5px)",
            zIndex: "-1",
          }}
        >
          <img className='bg-img-back' src={bgImg1} />
          <img className='bg-img-back' src={bgImg2} />
          <img className='bg-img-back' src={bgImg3} />
        </ParallaxLayer>

        {/* FOOD TYPE CAROUSEL */}
        {/* <ParallaxLayer
            offset={1.5}
            speed={0.5}
            style={{
                width: "90%",
                height: "25vh",
                backgroundColor: "rgba(0,0,0,0.2)",
                // boxShadow: "2px 2px 4px 0 rgba(0,0,0,0.5)",
                marginLeft: "5%",
                borderRadius: "0.625rem",
            }}
        > 
    
        </ParallaxLayer> */}

        {/* FOOTER SECTION */}
        <ParallaxLayer
            offset={3}
            sticky={{start:3, end:3}}
            speed={2}
            style={{
              width:"100%",
              height:"38vh",
              color:"white",
              zIndex:"-2"
              // backgroundColor:"green",
            }}> 
          <Footer />
        </ParallaxLayer>
            
      </Parallax>
    </div>
  );
}

export default Home;
