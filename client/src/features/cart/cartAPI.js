// A mock function to mimic making an async request for data
import axios from "axios";
// require("dotenv").config();
// const BASE_URL = process.env.BASE_URL;

export function fetchItems() {
  return axios.get(`http://localhost:8080/cart`);
}

export function addItem(item){
  return axios.post('http://localhost:8080/cart',item);
}

export function updateItem(id, itemUpdate){
  return axios.patch(`http://localhost:8080/cart/${id}`, itemUpdate);
}

export function deleteItem(id){
  return axios.delete(`http://localhost:8080/cart/${id}`);
}

