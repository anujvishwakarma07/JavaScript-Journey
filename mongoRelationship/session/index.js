const express = require('express');
const app = express();
const session = require('express-session');
const flash = require("connect-flash");
const path = require('path');
const port = 3000;


const sessionOptions = {
    secret: "mysecretcode",
    resave: false,
    saveUninitialized: true
}


app.use(session(sessionOptions));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(flash());



app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("unsuccess");
    next(); 
})



app.get("/register", (req, res) => {
    const { name = "anonymouse" } = req.query;
    req.session.name = name;
    // console.log(req.session);
    if (req.session.name === "anonymouse") {
        req.flash("unsuccess", "user not created");
    } else {
        req.flash("success", "user created successful");
    }
    res.redirect("/hello");
})

app.get("/hello", (req, res) => {
    // console.log(req.flash("success"));
    res.render("index", { name: req.session.name });
})



app.get("/", (req, res) => {
    res.send("cookie saved");
})

// app.get("/user", (req, res) => {
//     res.send("cookie saved");
// })


// app.get("/reqcount", (req, res)=>{
//     if(req.session.count) {
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }

//     res.send(`You send the request :  ${req.session.count}`);
// })


app.listen(port, () => {
    console.log(`app is running on the port : ${port}`);
})

