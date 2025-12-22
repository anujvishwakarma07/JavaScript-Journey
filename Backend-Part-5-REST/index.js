const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4 : uuidv4} = require("uuid");
const method_override = require("method-override");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(method_override("_method"));


let posts = [
    {
        id: uuidv4(),
        username: "apnacollage",
        content: "Hey! Hard work is the key of success",
    },
    {
        id : uuidv4(),
        username: "mahendrasinghdhoni",
        content : "i am captain cool",
    },
    {
        id : uuidv4(),
        username : "narutouzumaki",
        content : "i am hokage of the leaf",
    },
    {
        id : uuidv4(),
        username : "sakuraharuno",
        content : "i am a medical kunoichi and also having the fighting skills",
    }
    
]

app.get("/", (req, res)=>{
    res.send("Hello");
})

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts: posts});
    console.log(posts);
});

app.get("/posts/new", (req, res) =>{
    res.render("form.ejs");
})

app.post("/posts", (req, res)=>{
    let {username, content} = req.body;
    
    let newPost = {
        // id : posts.length + 1, -> we will use the uuid isntead of it.
        id : uuidv4(), 
        username,
        content,
    }

    posts.push(newPost);
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);

    let post = posts.find((p) => p.id === id);
    console.log(post);

    res.render("show.ejs", {post});
});


app.patch('/posts/:id', (req, res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    let post = posts.find((p) => p.id === id);
    post.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id == p.id);
    res.render("edit", {post});
})

app.delete("/posts/:id",(req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log(`App is listening in port : ${port}`);
});

