const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.set("json spaces", 2)
app.get("/restaurants", async(req,res)=> {
    try{const rest = await Restaurant.findAll()
    
    res.json(rest)
}
    catch(error){
        next(error)
    }
    
})



module.exports = app;