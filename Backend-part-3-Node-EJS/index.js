const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/style")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.listen((port), ()=>{
    console.log(`listening on the port no : ${port}`);
});

app.get("/",(req, res)=>{
    res.render("home.ejs");
})

// app.get("/hello",(req, res)=>{
//     res.send("this is the hello page");
// })

// app.get("/rolldice",(req, res)=>{
//     let diceValue = Math.floor(Math.random() * 6) + 1;
//     res.render("rolldice.ejs", {num : diceValue});
// });

// //Now we are going to create the instagram ejs template
// app.get("/ig/:username", (req, res)=>{
//     const { username } = req.params;
//     const followers = ["Anshu", "Aashvi", "Rasmika", "Aryan", "Shiva"];
//     res.render("instagram.ejs", {username, followers});
// });


//now we are going to use the data.json as a data


app.get("/ig/:username", (req, res)=>{
    const instaData = require("./data.json");
    let { username } = req.params;
    const data = instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error")
    }
})

