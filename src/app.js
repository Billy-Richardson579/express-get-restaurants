const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.set("json spaces", 2)
app.get("/restaurants", async(req,res,next)=> {
    try{const rest = await Restaurant.findAll()
    
    res.json(rest)
}
    catch(error){
        next(error)
    }
})

app.post("");

app.use((err,req,res,next)=>{
    console.log.error(err.stack);
    res.status(500).send("Broken")
})



module.exports = app;