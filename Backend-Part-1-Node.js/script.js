// // let  n = 6;

// // for(let i = 0; i < n; i++){
// //     console.log("number : "+i);
// // }


// //We can also pass some arguments for the file just like we passes arguments to a functions as a parameater.


// let arg = process.argv;

// for(let j = 2; j < arg.length; j++) {
//     console.log("Here is args :"+arg[j]);
// }

// console.log("Hello to : "+arg);


// //Module.exports


// const math = require("./math");
// console.log(math.sum(5,5));


// // Now we understand how can we get the data from the diffrent directoriess.

// const fruitInfo = require("./Fruits");
// console.log(fruitInfo);


//Now we gonna use the import instead require
import {sum, mul} from "./math.js"
import {generate} from "random-words"
console.log(sum(1, 2));

console.log(generate());