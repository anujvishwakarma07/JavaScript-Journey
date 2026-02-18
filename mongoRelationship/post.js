const mongoose = require("mongoose");

main().then(() => {
    console.log("Conection Successfull");
}).catch((err) => {
    console.log(err);
})

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoRelation");
}


const usersSchema = new mongoose.Schema({
    username: String,
    email: String,
})


const postSchema = new mongoose.Schema({
    content: String,
    like: Number,
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

const User = mongoose.model("User", usersSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user2 = new User({
        username: "Madara Uchiha",
        email: "madarauchiha@uchiha.com",
    })

    let post2 = new Post({
        content: "Hello Madara, are you ready to start the project Tshkuyomi right now",
        likes: 1000000,
    })


    post2.user = user2;

    await user2.save();
    const result = await post2.save();

    console.log(result);
}

addData();



