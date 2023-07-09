import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import heroImg from "../../images/transparentImages/transparentHeaderImage.png";
import leaf from "../../images/transparentImages/transparentLeaf1.jpeg";
import dineIn from "../../images/headerImage/dineIn.webp";
import dineOut from "../../images/headerImage/dineOut.jpeg";
import takeAway from "../../images/headerImage/takeAway.jpeg";

import Header from '../Navbar/Navbar';
import NavBarPage from '../Navbar/NavPage1';
import "./Home.css";

import FoodItemsList from '../FoodCarousel/FoodItemsList';


const Home = () => {
    
    const ref = useRef();

  return (
    <div>

      <Parallax pages={3} ref={ref} style={{top: "0", left: "0"}}>
        
        {/* HEADING SECTION */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
              // backgroundColor: "red",
              // backgroundSize:"cover",
              backgroundPosition: "center",
              zIndex: "1",
          }}
        > 
            <div>
              <div className='headerBgImage' />
                <NavBarPage />
              <h1 className='headerText'>Hungry Kolkata</h1>
            </div>

        </ParallaxLayer>
        
        {/* HERO SECTION */}
        <ParallaxLayer 
          offset={0.35}
          speed={1}
          // style={{
            // backgroundColor: "red",
            // height: "66vh",
            // width: "100%",
          // }}
        >
          <div className='container-fluid heroSection'>
            <img src={heroImg} className='heroImage'></img>
          </div>

        </ParallaxLayer>

        {/* DineIn Dineout option */}
        <ParallaxLayer
          offset={1}
          speed={1.2}
          // className='bg-img1'
          style={{
              // backgroundColor: "red",
              backgroundSize:"cover",
              backgroundPosition: "center",
              width: "100%",
              height: "70vh",
              zIndex: "1",
          }}
        > 
          <div className='container-fluid' style={{backgroundColor: "rgba(0,0,0,0.5)", width: "100%",height: "70vh"}}>
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

        <ParallaxLayer
          offset={1.2}
          speed={1.2}
          style={{
            zIndex: "-4",
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
              <p className='heroText'>
                "Savor culinary delights from your favorite local restaurants with our seamless and convenient food ordering app"
              </p>
              
            </div>

          </div>
        </ParallaxLayer>

        {/* Nav Header Fixed */}
        <ParallaxLayer
        speed={9}
          sticky={{start: 1, end:2}}
          style={{
              // position:"fixed",
              // zIndex: "1",
              marginTop: "1%",
              }}
        >
          <Header />
        </ParallaxLayer>

        {/* FOOD TYPE CAROUSEL */}
        <ParallaxLayer
            offset={2}
            speed={1}
            style={{
                width: "90%",
                height: "25vh",
                backgroundColor: "rgba(0,0,0,0.2)",
                // boxShadow: "2px 2px 4px 0 rgba(0,0,0,0.5)",
                marginLeft: "5%",
                borderRadius: "0.625rem",
            }}
        > 
          <div className='container-sm carouselItemFoodList'>
            <FoodItemsList />
          </div>
        </ParallaxLayer>

        {/* FOOTER SECTION */}
        <ParallaxLayer
            offset={1.3}
            speed={1}
            className='bg-img2'
            style={{
                // backgroundColor: "green",
                backgroundSize:"cover",
                backgroundPosition: "center",
                width: "100%",
                height: "50vh",
            }}
        > 
        </ParallaxLayer>

        <ParallaxLayer
            offset={1.5}
            speed={1}
            className='bg-img2'
            style={{
                // backgroundColor: "green",
                backgroundSize:"cover",
                backgroundPosition: "center",
                width: "100%",
                height: "50vh",
            }}
        > 
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default Home;
