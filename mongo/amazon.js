const mongoose = require("mongoose");

main().then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
})

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
};

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
    }
});

const Book = mongoose.model("Book", bookSchema);


const book1 = new Book({})
// Book.insertOne({
//     title : "The courage to be disliked",
//     author : "Alex honnald",
//     price : 500
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

