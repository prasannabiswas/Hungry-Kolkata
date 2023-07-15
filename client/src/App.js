import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Home from './Component/Home/Home';

 import { fetchAsyncPizzas } from './features/Pizzas/pizzaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch();
  const pizzaItems = useSelector(state=>state.pizza.pizzas);

  useEffect(()=>{
    dispatch(fetchAsyncPizzas());
    console.log(pizzaItems);
  },[]);

  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
