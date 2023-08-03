const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const backApi = require("./db.json");

const port = process.env.PORT || 8080;

app.use(cors());


app.get("/",(req,res)=>{
    res.send("Personal API for FoodOrdering App");
});

app.get("/pizzas", (req,res)=>{
    res.send(backApi.pizzas);
});

app.get("/cart", (req,res)=>{
    res.send(backApi.cart);
});


app.listen(port, ()=>{
    console.log(`Server sunning on port ${port}`);
});