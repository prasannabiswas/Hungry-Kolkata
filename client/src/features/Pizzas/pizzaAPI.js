import axios from "axios";

export function fetchPizzas(){
    return axios.get(`https://food-orderind-appmern-api-pizza-icecream.onrender.com/pizzas`);
}