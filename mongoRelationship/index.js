const mongoose = require("mongoose");

main().then(() => {
    console.log("connected Successful");
}).catch((err) => {
    console.log(err);
})

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoRelation");
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    address: [
        {
            _id: false,
            location: {
                type: String,
            },
            city: {
                type: String,
            }
        }
    ]
})

const User = mongoose.model("User", userSchema);
const addUser = async ()=>{
    let user1 = new User({
        username: "sharelocksHolemes",
        address: [{
            location : "221b Bakerbekk",
            city : 'London'
        }]
    })

    user1.address.push({
        location : "Kesharipur Rajasthan",
        city: "Rajasthan"
    });

    const result = await user1.save();
    console.log(result);
}   

addUser();


