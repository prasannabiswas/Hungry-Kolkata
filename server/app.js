const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const backApi = require("./db.json");

app.use(cors());


app.get("/",(req,res)=>{
    res.send("Hello");
});

app.get("/pizzas", (req,res)=>{
    res.send(backApi.pizzas);
});


app.listen(3000, ()=>{
    console.log("Server sunning on port 3000");
});