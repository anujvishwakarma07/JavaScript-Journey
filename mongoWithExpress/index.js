const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


const port = 3000;

app.listen(port, () => {
    console.log(`app is listening in the port : ${port}`);
})

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/chats", async (req, res) => {
    const chats = await Chat.find();
    // console.log(chats);

    res.render("index", { chats });
})


//new route
app.get("/chats/new", (req, res) => {
    res.render("new");
})

//create route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = {
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    }
    Chat.insertOne(newChat).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err);
    });
    // console.log(newChat);
    res.redirect("/chats");
})

app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ExpressError(400, "Invalid Chat ID");
    }

    let chat = await Chat.findById(id);
    if (!chat) {
        throw new ExpressError(403, "Chat not found");
    }
    // console.log(chat);

    res.render("edit", { chat });
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Page not found" } = err;
    res.status(status).send(message);
})

//update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    const { msg: newMsg } = req.body;

    const updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats");
})

app.delete("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

