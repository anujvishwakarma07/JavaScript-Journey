const mongoose = require("mongoose");


main().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err);
})

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoRelation");
}

const customerSchema = new mongoose.Schema({
    item: {
        type: String,
    },
    price: {
        type: Number,
    }
})

const orderSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
})

const Order = mongoose.model("Order", customerSchema);
const Customer = mongoose.model("customer", orderSchema);

const addCustomer = async () => {
    // let customer1 = new Customer({
    //     name: "Raju Shrivastava",
    // });
      

    // const order1 = await Order.findOne({
    //     item: "Samosa"
    // })
    // const order2 = await Order.findOne({
    //     item: "Chola bhatura"
    // })


    // customer1.orders.push(order1);
    // customer1.orders.push(order2);

    // let result = await customer1.save();
    // console.log(result);

    const result = await Customer.find({}).populate("orders");
    console.log(result[0]);
    
}

addCustomer();

// const addOrder = async () => {
//     const result = await order.insertMany([{
//         item: "Samosa",
//         price: 10
//     },
//     {
//         item: "Chola bhatura",
//         price: 40,
//     },
//     {
//         item: "Dhosa",
//         price: 60,
//     }
//     ]);

//     console.log(result);
// }

// addOrder();