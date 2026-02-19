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

orderSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let result = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(result);
    }
    // console.log(customer.orders);


});

// orderSchema.post("findOneAndDelete", async ()=>{

// })

const Order = mongoose.model("Order", customerSchema);
const Customer = mongoose.model("customer", orderSchema);



// const addCustomer = async () => {
//     let customer1 = new Customer({
//         name: "Raju Shrivastava",
//     });


//     const order1 = await Order.findOne({
//         item: "Samosa"
//     })
//     const order2 = await Order.findOne({
//         item: "Chola bhatura"
//     })


//     customer1.orders.push(order1);
//     customer1.orders.push(order2);

//     let result = await customer1.save();
//     console.log(result);

//     // const result = await Customer.find({}).populate("orders");
//     // console.log(result[0]);

// }

// addCustomer();

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

// const addCust = async () => {
//     const newCust = new Customer({
//         name: "Mahendra Singh Dhoni",
//     });

//     const newOrder = await Order.insertMany([
//         {
//             item: "Malai kopta",
//             price: 250,
//         },
//         {
//             item: "Ras Malai",
//             price: 208,
//         },
//         {
//             item: "Sahi paneer",
//             price: 50,
//         },
//     ])

//     newCust.orders.push(...newOrder.map(order => order._id));

//     // await newOrder.save();
//     const result = await newCust.save();

//     console.log("Added Customer : ", result);
// }

// addCust();

// const usePopulate = async () =>{
//     const result = await Customer.find({}).populate("orders");
//     console.log(result[1].orders);
// }

// usePopulate();

const deleteCustomer = async () => {
    const deletedCust = await Customer.findByIdAndDelete('699714b675798c39c410674b');
    console.log(deletedCust);
}

deleteCustomer();