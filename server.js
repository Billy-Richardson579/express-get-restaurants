const app = require("./src/app")
const db = require("./db/connection");
const Restaurant = require("./models");
const port = 3000;

//TODO: Create your GET Request Route Below: 
app.get("./App", async(req,res)=> {
    const rest = Restaurant.findAll()
    
    res.json(rest)
})

app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/restaurants`);
})