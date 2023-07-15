import axios from "axios"

export function fetchPizzas(){
    return axios.get(`http://localhost:8080/pizzas`);
}