const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.listen((port),()=>{
    console.log(`App is listening on the port no : ${port}`);
})

app.get("/", (req, res)=>{
    res.send("This is  home page");
})

app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    res.send(`Standard get response : Hello ${user} and Your password is ${password}`);
    
});

app.post("/register",(req, res)=>{
    console.log(req.body);
    let {user, password} = req.body;
    res.send(`Standard post response : Hello ${user} , Your password is : ${password}`);
})
