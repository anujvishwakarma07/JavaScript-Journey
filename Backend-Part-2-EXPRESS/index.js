const express = require("express");
const app = express();

let port = 8080;

app.listen(port, ()=>{
    console.log(`The app is listening on the port no : ${port}`);
});

app.use((req, res)=>{
    // console.log(req);
    console.log("New Incoming Request")
    res.send({
        author: "Anuj Vishwakrma",
        age: 21,
        postion: "Software Developer"
    })
    // let code = "<h1>Fruits</h1> <ul><li>Mango</li> <li>Orange</li> <li>Banana</li></ul>";
    // res.send(code)
});

