const express = require("express");
const app = express();
const user = require("./routes/user");
const post = require("./routes/post");
const cookeParser = require("cookie-parser");


const port = 3000;

app.use(cookeParser("secretcode"));
app.use("/user", user);
app.use("/post", post);

app.get("/", (req, res) => {
    // console.log(req.cookies);
    const { name = "anonymouse" } = req.cookies;
    res.send(`Hi I am , ${name}`);
})

app.get("/secretcookies", (req, res) => {
    res.cookie("madein", "India", { signed: true });
    res.send("signed cookies send");
})
app.get("/verify", (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
})




app.get("/setcookies", (req, res) => {
    res.cookie("Greet", "Namaste");
    res.send("send some cookies");
})






app.listen(port, () => {
    console.log(`app is listening on the port : ${port}`)
})