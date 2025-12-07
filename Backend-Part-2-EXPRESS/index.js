const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`The app is listening on the port no : ${port}`);
});

// app.use((req, res)=>{
//     // console.log(req);
//     console.log("New Incoming Request")
//     res.send({
//         author: "Anuj Vishwakrma",
//         age: 21,
//         postion: "Software Developer"
//     })
//     // let code = "<h1>Fruits</h1> <ul><li>Mango</li> <li>Orange</li> <li>Banana</li></ul>";
//     // res.send(code)
// });



// // Routes - Now we are going to understand the diffrent diffrent routes.


// app.get("/", (req, res) => {
//     res.send("Hello i am root page");
// });

// app.get("/apple", (req, res) => {
//     res.send("You are connected with the apple path.");
// });

// app.get("/banana", (req, res) => {
//     res.send("You are connected with the banana path.");
// });

// app.get("/mango", (req, res) => {
//     res.send("You are connected with the mango path.");
// });

// app.post("/", (req, res)=>{
//     res.send("this is a post request from the root")
// })


// app.use((req, res)=> {
//     res.status(404).send("this page is not exist");
// });


// //Path parameaters in the express


// app.get("/:username",(req, res)=>{
//     console.log(req.params.username);
//     res.send("This is username path");
// });

// app.get("/apple/:color/:energy/:id",(req, res)=>{
//     console.log(req.params)
//     res.send("this is another parameaterized url of apple");
// })


app.get("/search", (req, res)=>{
    const {q} = req.query;
    console.log(req.query); if(!q) {
        res.send("No Search Results")
    }
    res.send(`We are searching for the : ${q}`);
   
});

