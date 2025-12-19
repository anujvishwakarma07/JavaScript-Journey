const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        username: "apnacollage",
        content: "Hey! Hard work is the key of success",
    },
    {
        username: "mahendrasinghdhoni",
        content : "i am captain cool",
    },
    {
        username : "narutouzumaki",
        content : "i am hokage of the leaf",
    },
    {
        username : "sakuraharuno",
        content : "i am a medical kunoichi and also having the fighting skills",
    }
    
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts: posts});
    console.log(posts);
});

app.listen(port, () => {
    console.log(`App is listening in port : ${port}`);
})

