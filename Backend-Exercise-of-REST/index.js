const express = require("express");
const app = express();
const port  = 3000;
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")));

app.listen(port, ()=>{
    console.log(`app is listening on port : ${port}`);
});

app.get("/",(req, res)=>{
    res.send("This is Home page");
})


app.get("/posts",(req, res)=>{
    res.render("index");
})
