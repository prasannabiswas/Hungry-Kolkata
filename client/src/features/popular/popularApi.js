import axios from "axios";

export function fetchPopularItem() {
    return axios.get(`http://localhost:8080/popular`);
}

export function addPopularItem(item) {
    return axios.post(`http://localhost:8080/popular`, item);
}

export function deletePopularItem(id) {
    return axios.delete(`http://localhost:8080/popular/${id}`);
}