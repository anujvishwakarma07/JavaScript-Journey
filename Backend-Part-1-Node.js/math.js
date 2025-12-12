// //Method 1

// const sum = (a, b)=> a + b;
// const mul = (a, b)=> a * b;
// const g = 9.8;
// const PI = 3.14;


// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// }
// module.exports = obj;

// //Method - 2

// module.exports.sum = (a, b)=> a + b;
// module.exports.mul = (a, b)=> a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

// //Method - 3
// exports.sum = (a, b)=> a + b;
// exports.mul = (a, b)=> a * b;
// exports.g = 9.8;
// exports.PI = 3.14;


//Now we are using the import instead require
export const sum = (a, b)=> a + b;
export const mul = (a, b)=> a * b;
export const g = 9.8;
export const PI = 3.14;
