import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Home from './Component/Home/Home';

 import { fetchAsyncPizzas } from './features/Pizzas/pizzaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import NavBarPage from './Component/Navbar/NavPage1';
import { fetchAsyncItems } from './features/cart/cartSlice';


function App() {

  const dispatch = useDispatch();
  const pizzaItems = useSelector(state=>state.pizza.pizzas);

  useEffect(()=>{
    dispatch(fetchAsyncPizzas());
    dispatch(fetchAsyncItems());
    console.log(pizzaItems);
  },[]);

  return (
    <div className="App">
      <Routes > 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
