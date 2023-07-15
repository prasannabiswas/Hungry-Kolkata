import {configureStore} from '@reduxjs/toolkit';
import pizzaReducer from "../features/Pizzas/pizzaSlice";

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer        
    },
});