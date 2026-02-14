const express = require("express");
const ExpressError = require("./Express.Error")
const app = express();
const port = 3000;

// app.use((req, res, next)=>{
//     console.log("I am middleware1");
//     next();
// })

// app.use((req, res, next)=>{
//     console.log("I am middleware2");
//     next();
// })


// //utility middleware
// app.use((req, res, next)=>{
//     console.log(req);
//     req.time = new Date(Date.now());
//     console.log(req.hostname, req.method, req.path, req.time);
//     next();
// })
// app.get("/",(req, res)=>{
//     res.send("Hey, I am root");
// })

// app.get("/random", (req, res)=>{
//     res.send("Hey this is random route");
// })


// Acces Token as a Query String
// app.use("/api", (req, res, next)=>{
//     const {token} = req.query;
//     if(token === "giveaccess") {
//         return next();
//     }else {
//         throw new Error("ACCESS DENIED !!");
//     }
// })

// //Multiple middleware - we can pass it by making it a function.
// const accessToken = (req, res, next) => {
//     const { token } = req.query;
//     if (token === "giveaccess") {
//         return next();
//     } else {
//         throw new ExpressError(401, "ACCESS DENIED !!");
//     }
// };

// app.get("/api",accessToken, (req, res) => {
//     res.send("Data");
// })


// // Error Handing middlewares
// app.get("/err", (req, res)=>{
//     abcd = abcd;
// })

// app.use((err, req, res, next)=>{
//     console.log("Error")
//     res.send(err);
// })


//Activity
app.get("/admin",(req, res)=>{
    throw new ExpressError(403, "Access is Forbidden");
})

app.use((err, req, res, next)=>{
     const {status, message} = err;
     res.status(status).send(message);
})

app.listen(port, () => {
    console.log(`App is listening on the port :  ${port}`);
})