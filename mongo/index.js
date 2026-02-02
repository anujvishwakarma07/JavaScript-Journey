const mongoose = require("mongoose");

main().then(()=>{
    console.log("Connection successful");
})
.catch(err=> console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);


// const user2 = new User({name : "Tanu Vishwakarma", email : "tanuvishwakarma7077@gmail.com", age: 21});

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.insertOne({
//     name: "Shiva Gautam",
//     email: "shivagautam7077@gmail.com",
//     age : 21
// });

// User.insertMany([
//     {
//         name: "Monato Namikaze",
//         email: "minatonamikaze@leaf.com",
//         age : 45
//     },
//     {
//         name: "Jieaya Sensei",
//         email: "toadjiraya@leaf.com",
//         age: 80,
//     },
//     {
//         name: "Lady Tsunade",
//         email: "katsuyulady@leaf.com",
//         age: 75,
//     }
// ]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// User.find({age : {$gt : 45}}).then((data)=>{
//     console.log(data[0].name);
// }).catch((err)=>{
//     console.log(err);
// })



// User.updateMany({age : {$gt : 45}}, {age : 45}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

User.findOneAndUpdate({name : "Tanu Vishwakarma"}, {name : "Tanu Mam"}, {new : true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})