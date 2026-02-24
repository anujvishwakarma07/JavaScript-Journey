const express = require("express");
const app = express();
const user = require("./routes/user");
const post  = require("./routes/post");


const port = 3000;
app.use("/user", user);
app.use("/post", post);






app.listen(port, ()=>{
    console.log(`app is listening on the port : ${port}`)
})